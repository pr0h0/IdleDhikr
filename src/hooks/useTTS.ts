import { useState, useEffect, useCallback, useRef } from "react";

export const useTTS = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [supported, setSupported] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Helper to prevent garbage collection of utterance during speech
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  // Helper for online audio fallback
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      // eslint-disable-next-line
      setSupported(true);

      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        console.log(`TTS: Loaded ${availableVoices.length} voices`);
        if (availableVoices.length > 0) {
          setVoices(availableVoices);
          setError(null);
        }
      };

      // Initial load
      loadVoices();

      // Event listener
      window.speechSynthesis.onvoiceschanged = loadVoices;

      // Polling fallback (common fix for some browsers/OS combinations)
      const intervalId = setInterval(() => {
        const currentVoices = window.speechSynthesis.getVoices();
        if (currentVoices.length > 0) {
          setVoices(currentVoices);
          clearInterval(intervalId);
        } else if (currentVoices.length === 0) {
          // Only re-log if needed or keep silent to avoid spam
          // loadVoices();
        }
      }, 500);

      // Stop polling after 5 seconds to avoid infinite loop
      const timeoutId = setTimeout(() => clearInterval(intervalId), 5000);

      return () => {
        window.speechSynthesis.cancel();
        window.speechSynthesis.onvoiceschanged = null;
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    } else {
      setError("TTS not supported in this browser");
    }
  }, []);

  const speakOnline = useCallback((text: string, lang: string) => {
    // Cancel any existing audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setError(null);

    // Basic truncation to avoid URL length issues (approx 200 chars safe limit for this API)
    // Ideally we would split longer text, but for now we truncate with warning
    const safeText = text.length > 200 ? text.substring(0, 200) : text;
    if (text.length > 200)
      console.warn("TTS: Text truncated for online API limit");

    const encoded = encodeURIComponent(safeText);
    // Using 'client=gtx' which is often more reliable than 'tw-ob'
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=gtx&tl=${lang}&q=${encoded}`;
    console.log("TTS: Attempting online URL:", url);

    const audio = new Audio(url);
    audioRef.current = audio;

    audio.onplay = () => setIsSpeaking(true);
    audio.onended = () => {
      setIsSpeaking(false);
      audioRef.current = null;
    };
    audio.onerror = (e) => {
      console.error("TTS: Online playback error", e);
      let msg = "Online TTS failed";

      if (typeof e !== "string" && e.target) {
        const target = e.target as HTMLAudioElement;
        console.error("Error details:", target.error);

        if (target.error?.code === 4)
          msg = "Audio source not found (404) or blocked";
        else if (target.error?.code === 3) msg = "Decoding error";
        else if (target.error?.code === 2) msg = "Network error";
      }

      setError(msg);
      setIsSpeaking(false);
      audioRef.current = null;
    };

    audio.play().catch((err) => {
      console.error("TTS: Audio play rejected", err);
      setError("Audio playback blocked or not supported");
      setIsSpeaking(false);
    });
  }, []);

  const speak = useCallback(
    (text: string, lang: string = "ar-SA") => {
      if (!supported) return;

      // If no voices available, try online fallback immediately
      if (voices.length === 0) {
        console.log("TTS: No local voices, using online fallback");
        speakOnline(text, "ar");
        return;
      }

      // Ensure voices are loaded if they were empty (double check)
      let currentVoices = voices;
      if (voices.length === 0) {
        currentVoices = window.speechSynthesis.getVoices();
        setVoices(currentVoices);
      }

      window.speechSynthesis.cancel();
      setIsSpeaking(false);

      const utterance = new SpeechSynthesisUtterance(text);
      // Try precise lang first, then general 'ar'
      utterance.lang = lang;
      utteranceRef.current = utterance;

      // Strategy:
      // 1. Look for exact match (ar-SA)
      // 2. Look for general Arabic (ar)
      // 3. Fallback to whatever is available but warn

      let voice = currentVoices.find((v) => v.lang === lang);
      if (!voice) {
        voice = currentVoices.find((v) => v.lang.includes("ar"));
      }

      if (voice) {
        utterance.voice = voice;
        console.log(`TTS: Using voice ${voice.name} (${voice.lang})`);
      } else {
        console.warn(
          "TTS: No Arabic voice found. Browser will attempt default synthesis.",
        );
        // Only force language if we didn't find a voice, attempting to let browser decide
        utterance.lang = "ar";

        if (currentVoices.length === 0) {
          setError("No TTS voices detected");
        } else {
          setError("No Arabic voice detected");
        }
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
        setError(null);
      };
      utterance.onend = () => {
        setIsSpeaking(false);
        utteranceRef.current = null;
      };
      utterance.onerror = (e) => {
        console.error("TTS Error:", e);
        setIsSpeaking(false);
        utteranceRef.current = null;

        if (e.error === "synthesis-failed") {
          setError("Speech synthesis failed. Check system TTS settings.");
        } else {
          setError(`TTS Error: ${e.error}`);
        }
      };

      try {
        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.error("TTS execution failed:", err);
        setIsSpeaking(false);
      }
    },
    [supported, voices, speakOnline],
  );

  const cancel = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setIsSpeaking(false);
    utteranceRef.current = null;
  }, []);

  return { speak, cancel, isSpeaking, supported, voices, error };
};
