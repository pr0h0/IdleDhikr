export type LocalizedString = {
  en: string;
  bs: string;
};

export interface QuizQuestion {
  question: LocalizedString;
  options: LocalizedString[];
  correctAnswer: number; // 0-indexed
}

export interface Example {
  arabic: string;
  transliteration: string;
  explanation: LocalizedString;
}

export interface TajweedRule {
  id: string;
  title: string;
  translation: LocalizedString;
  description: LocalizedString;
  letters: string[];
  examples: Example[];
  quizQuestions: QuizQuestion[];
}

export const TAJWEED_RULES: TajweedRule[] = [
  {
    id: "makharij",
    title: "Makhārij al-Ḥurūf",
    translation: {
      en: "Points of Articulation",
      bs: "Mjesta izgovora (Ishodišta)",
    },
    description: {
      en: "The lexical meaning of Makhārij is 'exit points'. It refers to the specific parts of the mouth, throat, or nose from where the sound of a letter originates. There are 5 main areas (Jawf, Halq, Lisan, Shafatan, Khayshum) containing 17 specific articulation points.",
      bs: "Jezičko značenje 'Mekhraidž' je 'mjesta izlaska'. Odnosi se na specifične dijelove usta, grla ili nosa odakle potiče zvuk harfa (slova). Postoji 5 glavnih oblasti (Džauf, Halk, Lisan, Šefetan, Hajšum) koje sadrže 17 specifičnih tačaka izgovora.",
    },
    letters: ["Alif", "Ba", "Ta", "Tha", "All Arabic Letters"],
    examples: [
      {
        arabic: "ا",
        transliteration: "Alif",
        explanation: {
          en: "Originates from Al-Jawf (The empty space associated with the mouth and throat).",
          bs: "Potiče iz Džaufa (Praznina u ustima i grlu).",
        },
      },
      {
        arabic: "ع",
        transliteration: "'Ayn",
        explanation: {
          en: "Originates from the middle of the throat (Wasat al-Halq).",
          bs: "Potiče iz sredine grla (Vasat-ul-Halk).",
        },
      },
      {
        arabic: "م",
        transliteration: "Mīm",
        explanation: {
          en: "Originates from the lips (Ash-Shafatayn).",
          bs: "Potiče sa usana (Eš-Šefetejn).",
        },
      },
    ],
    quizQuestions: [
      {
        question: {
          en: "How many specific points of articulation (Makhārij) are there in total?",
          bs: "Koliko ukupno ima specifičnih mjesta izgovora (Mekhraidža)?",
        },
        options: [
          { en: "5", bs: "5" },
          { en: "17", bs: "17" },
          { en: "28", bs: "28" },
          { en: "29", bs: "29" },
        ],
        correctAnswer: 1,
      },
      {
        question: {
          en: "Which area creates the sound of Ghunnah?",
          bs: "Koja oblast proizvodi zvuk Gunne?",
        },
        options: [
          { en: "The Throat (Al-Halq)", bs: "Grlo (El-Halk)" },
          { en: "The Tongue (Al-Lisan)", bs: "Jezik (El-Lisan)" },
          { en: "The Nose (Al-Khayshum)", bs: "Nosna šupljina (El-Hajšum)" },
          { en: "The Lips (Ash-Shafatayn)", bs: "Usne (Eš-Šefetejn)" },
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "sifat",
    title: "Ṣifāt al-Ḥurūf",
    translation: {
      en: "Characteristics of Letters",
      bs: "Osobine harfova (Sifati)",
    },
    description: {
      en: "Sifāt refers to the characteristics that differentiate letters sharing the same articulation point (Makhraj). They deal with how the sound is produced, such as whispering (Hams), loudness (Jahr), elevation (Isti'la), or echoing (Qalqalah).",
      bs: "Sifati se odnose na osobine koje razlikuju harfove koji dijele isto mjesto izgovora (Mekhradž). Bave se načinom na koji se zvuk proizvodi, kao što su šaputanje (Hems), glasnoća (Džehr), krupnoća (Isti'la) ili odskakanje (Kalkala).",
    },
    letters: ["All Arabic Letters"],
    examples: [
      {
        arabic: "ت",
        transliteration: "Ta",
        explanation: {
          en: "Has the quality of Hams (Whisper) - a flow of breath upon pronunciation.",
          bs: "Ima osobinu Hemsa (Šaputanje) - protok daha pri izgovoru.",
        },
      },
      {
        arabic: "ص",
        transliteration: "Sad",
        explanation: {
          en: "Has the quality of Isti'la (Elevation) - making it a heavy letter.",
          bs: "Ima osobinu Isti'la (Uzdizanje) - što ga čini krupnim harfom.",
        },
      },
    ],
    quizQuestions: [
      {
        question: {
          en: "What is Hams?",
          bs: "Šta je Hems?",
        },
        options: [
          { en: "Stopping the breath", bs: "Zaustavljanje daha" },
          { en: "Flow/Whispering of breath", bs: "Protok/Šaputanje daha" },
          { en: "Echoing sound", bs: "Odskakući zvuk" },
          { en: "Nasal sound", bs: "Nazalni zvuk" },
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "nun-izhar",
    title: "Iẓhār (Nūn Sākinah)",
    translation: {
      en: "Clarification / Distinctness",
      bs: "Izhar (Jasnoća)",
    },
    description: {
      en: "Rule: If a Nūn Sākinah (نْ) or Tanwīn (ً ٍ ٌ) is followed by any of the 6 Throat Letters, the Nūn sound is pronounced clearly and sharply without any extra Ghunnah (nasalization).",
      bs: "Pravilo: Ako poslije Nuna sakina (نْ) ili Tenvina (ً ٍ ٌ) dođe bilo koji od 6 grlenih harfova, zvuk Nuna se izgovara jasno i oštro bez dodatne Gunne (nazalizacije).",
    },
    letters: ["ء", "ه", "ع", "ح", "غ", "خ"],
    examples: [
      {
        arabic: "مَنْ آمَنَ",
        transliteration: "Man Āmana",
        explanation: {
          en: "Nun Sakinah followed by Hamza. Pronounce clear 'N'.",
          bs: "Nun sakin ispred Hemzeta. Izgovori čisto 'N'.",
        },
      },
      {
        arabic: "عَلِيمٌ حَكِيمٌ",
        transliteration: "'Alīmun Ḥakīm",
        explanation: {
          en: "Tanwin followed by Ha. Pronounce clear 'un'.",
          bs: "Tenvin ispred Ha. Izgovori čisto 'un'.",
        },
      },
    ],
    quizQuestions: [
      {
        question: {
          en: "Which of these is NOT a letter of Iẓhār?",
          bs: "Koji od navedenih NIJE harf Izhara?",
        },
        options: [
          { en: "Ha (ح)", bs: "Ha (ح)" },
          { en: "Hamza (ء)", bs: "Hemze (ء)" },
          { en: "Qaf (ق)", bs: "Kaf (ق)" },
          { en: "Ayn (ع)", bs: "Ajn (ع)" },
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "nun-idgham",
    title: "Idghām (Nūn Sākinah)",
    translation: {
      en: "Merging / Assimilation",
      bs: "Idgam (Uklapanje)",
    },
    description: {
      en: "Rule: If Nūn Sākinah or Tanwīn is followed by one of the letters in 'YARMALOON' (ي ر م ل و ن), the Nūn merges into the next letter. It is divided into Idgham with Ghunnah (Yanmu) and Idgham without Ghunnah (Lam, Ra).",
      bs: "Pravilo: Ako poslije Nuna sakina ili Tenvina dođe jedan od harfova u 'JARMELUN' (ي, ر, م, ل, و, ن), Nun se uklapa u sljedeći harf. Dijeli se na Idgam sa Gunnom (Jenmu) i Idgam bez Gunne (Lam, Ra).",
    },
    letters: ["ي", "ر", "م", "ل", "و", "ن"],
    examples: [
      {
        arabic: "مَن يَقُولُ",
        transliteration: "May-yaqūlu",
        explanation: {
          en: "Idgham with Ghunnah. Nun dissolves into Ya.",
          bs: "Idgam sa Gunnom. Nun se pretvara u Ja.",
        },
      },
      {
        arabic: "مِن رَّبِّهِمْ",
        transliteration: "Mir-rabbihim",
        explanation: {
          en: "Idgham without Ghunnah. Nun disappears completely into Ra.",
          bs: "Idgam bez Gunne. Nun potpuno nestaje u Ra.",
        },
      },
    ],
    quizQuestions: [
      {
        question: {
          en: "What are the letters of Idgham without Ghunnah?",
          bs: "Koji su harfovi Idgama bez Gunne?",
        },
        options: [
          { en: "Ya and Nun", bs: "Ja i Nun" },
          { en: "Lam and Ra", bs: "Lam i Ra" },
          { en: "Mim and Waw", bs: "Mim i Vav" },
          { en: "Ba and Fa", bs: "Ba i Fa" },
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "nun-iqlab",
    title: "Iqlāb (Nūn Sākinah)",
    translation: {
      en: "Conversion / Transformation",
      bs: "Iklab (Pretvaranje)",
    },
    description: {
      en: "Rule: If Nūn Sākinah or Tanwīn is followed by the letter Ba (ب), the Nūn sound is transformed into a hidden Mīm (m) sound, accompanied by Ghunnah.",
      bs: "Pravilo: Ako poslije Nuna sakina ili Tenvina dođe harf Ba (ب), zvuk Nuna se pretvara u skriveni zvuk Mima (m), uz prisustvo Gunne.",
    },
    letters: ["ب"],
    examples: [
      {
        arabic: "مِنۢ بَعْدِ",
        transliteration: "Mim-ba'di",
        explanation: {
          en: "Nun is pronounced as a light Mim because of Ba.",
          bs: "Nun se izgovara kao blago Mim zbog harfa Ba.",
        },
      },
      {
        arabic: "عَلِيمٌ بِذَاتِ",
        transliteration: "'Alīmum-bidhāti",
        explanation: {
          en: "Tanwin turns into Mim sound.",
          bs: "Tenvin se pretvara u zvuk Mima.",
        },
      },
    ],
    quizQuestions: [
      {
        question: {
          en: "Which letter causes Iqlab?",
          bs: "Koji harf uzrokuje Iklab?",
        },
        options: [
          { en: "Mim (م)", bs: "Mim (م)" },
          { en: "Ba (ب)", bs: "Ba (ب)" },
          { en: "Nun (ن)", bs: "Nun (ن)" },
          { en: "Fa (ف)", bs: "Fa (ف)" },
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "nun-ikhfa",
    title: "Ikhfāʾ (Nūn Sākinah)",
    translation: {
      en: "Concealment / Hiding",
      bs: "Ihfa (Skrivanje)",
    },
    description: {
      en: "Rule: If Nūn Sākinah or Tanwīn is followed by any of the remaining 15 letters (not Throat, Yarmaloon, or Ba), the Nūn is concealed. The tongue does not touch the palate; instead, a sound between Izhar and Idgham is produced with Ghunnah.",
      bs: "Pravilo: Ako poslije Nuna sakina ili Tenvina dođe bilo koji od preostalih 15 harfova (koji nisu Grleni, Jarmelun, ili Ba), Nun se skriva. Jezik ne dodiruje nepce; umjesto toga proizvodi se zvuk između Izhara i Idgama uz Gunnu.",
    },
    letters: [
      "ت",
      "ث",
      "ج",
      "د",
      "ذ",
      "ز",
      "س",
      "ش",
      "ص",
      "ض",
      "ط",
      "ظ",
      "ف",
      "ق",
      "ك",
    ],
    examples: [
      {
        arabic: "مِن تَحْتِهَا",
        transliteration: "Min taḥtihā",
        explanation: {
          en: "Hide Nun, apply Ghunnah, prepare for Ta.",
          bs: "Sakrij Nun, primijeni Gunnu, pripremi se za Ta.",
        },
      },
      {
        arabic: "أَنفُسَهُمْ",
        transliteration: "Anfusahum",
        explanation: {
          en: "Hide Nun before Fa.",
          bs: "Sakrij Nun ispred Fa.",
        },
      },
    ],
    quizQuestions: [
      {
        question: {
          en: "How is the sound of Ikhfa described?",
          bs: "Kako se opisuje zvuk Ihfa?",
        },
        options: [
          { en: "Complete merging", bs: "Potpuno uklapanje" },
          { en: "Clear and sharp", bs: "Jasan i oštar" },
          {
            en: "Between Izhar and Idgham with Ghunnah",
            bs: "Između Izhara i Idgama sa Gunnom",
          },
          { en: "Converted to Mim", bs: "Pretvoren u Mim" },
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "mim-izhar",
    title: "Iẓhār Shafawī",
    translation: {
      en: "Lip Clarification",
      bs: "Izhar Šefevi (Usneni Izhar)",
    },
    description: {
      en: "Rule: If Mīm Sākinah (مْ) is followed by any letter EXCEPT Mim (م) or Ba (ب), pronounce the Mim clearly with lips closed, without extra Ghunnah.",
      bs: "Pravilo: Ako poslije Mima sakina (مْ) dođe bilo koji harf OSIM Mima (m) ili Ba (b), izgovori Mim jasno sa zatvorenim usnama, bez dodatne Gunne.",
    },
    letters: ["Remaining 26 letters"],
    examples: [
      {
        arabic: "لَهُمْ دَارُ",
        transliteration: "Lahum Dāru",
        explanation: {
          en: "Clear Mim before Dal.",
          bs: "Jasan Mim ispred Dala.",
        },
      },
      {
        arabic: "هُمْ فِيهَا",
        transliteration: "Hum Fīhā",
        explanation: {
          en: "Clear Mim before Fa (Be careful not to hide logic).",
          bs: "Jasan Mim ispred Fa (Pazi da ga ne sakriješ).",
        },
      },
    ],
    quizQuestions: [
      {
        question: {
          en: "The most common mistake in Izhar Shafawi is hiding the Mim before which letters?",
          bs: "Najčešća greška kod Izhar Šefevija je skrivanje Mima ispred kojih harfova?",
        },
        options: [
          { en: "Lam and Ra", bs: "Lam i Ra" },
          { en: "Waw and Fa", bs: "Vav i Fa" },
          { en: "Qaf and Kaf", bs: "Kaf i Kef" },
          { en: "Sin and Shin", bs: "Sin i Šin" },
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "mim-idgham",
    title: "Idghām Shafawī",
    translation: {
      en: "Lip Merging",
      bs: "Idgam Šefevi (Usneni Idgam)",
    },
    description: {
      en: "Rule: If Mīm Sākinah is followed by another Mīm (م), they merge into one Mīm Mushaddadah (with Shaddah) and Ghunnah is held for 2 counts.",
      bs: "Pravilo: Ako poslije Mima sakina dođe drugi Mim (m), oni se stapaju u jedan Mim Mušeddede (sa Šeddom) i Gunna se drži 2 dužine.",
    },
    letters: ["م"],
    examples: [
      {
        arabic: "لَهُم مَّا",
        transliteration: "Lahum-mā",
        explanation: {
          en: "Merge the two Mims with Ghunnah.",
          bs: "Spoji dva Mima sa Gunnom.",
        },
      },
    ],
    quizQuestions: [
      {
        question: {
          en: "Idgham Shafawi occurs when Mim Sakinah meets...",
          bs: "Idgam Šefevi se dešava kada se Mim sakin sretne sa...",
        },
        options: [
          { en: "Ba", bs: "Ba" },
          { en: "Nun", bs: "Nun" },
          { en: "Mim", bs: "Mim" },
          { en: "Waw", bs: "Vav" },
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "mim-ikhfa",
    title: "Ikhfāʾ Shafawī",
    translation: {
      en: "Lip Concealment",
      bs: "Ihfa Šefevi (Usneno Skrivanje)",
    },
    description: {
      en: "Rule: If Mīm Sākinah is followed by Ba (ب), the Mīm is concealed. The lips are lightly closed (or left with a tiny gap according to some) and Ghunnah is held.",
      bs: "Pravilo: Ako poslije Mima sakina dođe harf Ba (b), Mim se skriva. Usne se blago zatvaraju (ili ostavljaju sa sićušnim razmakom prema nekima) i drži se Gunna.",
    },
    letters: ["ب"],
    examples: [
      {
        arabic: "تَرْمِيهِم بِحِجَارَةٍ",
        transliteration: "Tarmīhim-biḥijārah",
        explanation: {
          en: "Hide Mim into Ba with Ghunnah.",
          bs: "Sakrij Mim u Ba sa Gunnom.",
        },
      },
    ],
    quizQuestions: [
      {
        question: {
          en: "Which letter triggers Ikhfa Shafawi?",
          bs: "Koji harf pokreće Ihfa Šefevi?",
        },
        options: [
          { en: "Mim", bs: "Mim" },
          { en: "Ba", bs: "Ba" },
          { en: "Fa", bs: "Fa" },
          { en: "Waw", bs: "Vav" },
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "qalqalah",
    title: "Qalqalah",
    translation: {
      en: "Echoing / Bouncing",
      bs: "Kalkala (Odskakanje)",
    },
    description: {
      en: "To create a vibrating or bouncing sound at the end of the pronunciation of specific letters when they are Sākin (have Sukūn) or stopped upon. Ideally, it should not resemble a vowel.",
      bs: "Proizvoditi vibrirajući ili odskakući zvuk na kraju izgovora određenih harfova kada su Sakin (imaju Sukun) ili se na njima staje. Idealno, ne bi trebalo da liči na vokal.",
    },
    letters: ["ق", "ط", "ب", "ج", "د"],
    examples: [
      {
        arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
        transliteration: "Al-Falaq",
        explanation: {
          en: "Strong bounce on Qaf when stopping (Kubra).",
          bs: "Snažan odskok na Kafu prilikom stajanja (Kubra).",
        },
      },
      {
        arabic: "يَدْخُلُونَ",
        transliteration: "Yadkhulūn",
        explanation: {
          en: "Lighter bounce on Dal in middle of word (Sughra).",
          bs: "Blaži odskok na Dalu u sredini riječi (Sugra).",
        },
      },
    ],
    quizQuestions: [
      {
        question: {
          en: "What phrase collects the letters of Qalqalah?",
          bs: "Koji izraz okuplja harfove Kalkale?",
        },
        options: [
          { en: "Yarmaloon", bs: "Jarmelun" },
          { en: "Qutb Jad", bs: "Kutbu Džedjin" },
          { en: "Khasaf", bs: "Hasef" },
          { en: "Hams", bs: "Hems" },
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "ghunnah",
    title: "Ghunnah",
    translation: {
      en: "Nasal Sound",
      bs: "Gunna (Nazalni zvuk)",
    },
    description: {
      en: "A continuous nasal sound emitted from the nose (Khayshūm). It is an intrinsic characteristic of Nūn and Mīm, but is most prominent (2 counts) when they have a Shaddah (Mushaddad).",
      bs: "Kontinuirani nazalni zvuk koji izlazi iz nosa (Hajšum). To je urođena osobina Nuna i Mima, ali je najizraženija (traje 2 dužine) kada imaju Šeddu (tešdid).",
    },
    letters: ["نّ", "مّ"],
    examples: [
      {
        arabic: "إِنَّ",
        transliteration: "Inna",
        explanation: {
          en: "Nun with Shaddah. Hold Ghunnah for 2 counts.",
          bs: "Nun sa Šeddom. Drži Gunnu 2 dužine.",
        },
      },
      {
        arabic: "ثُمَّ",
        transliteration: "Thumma",
        explanation: {
          en: "Mim with Shaddah. Hold Ghunnah for 2 counts.",
          bs: "Mim sa Šeddom. Drži Gunnu 2 dužine.",
        },
      },
    ],
    quizQuestions: [
      {
        question: {
          en: "Where does the sound of Ghunnah come from?",
          bs: "Odakle dolazi zvuk Gunne?",
        },
        options: [
          { en: "Throat", bs: "Grlo" },
          { en: "Lips", bs: "Usne" },
          { en: "Nose (Khayshum)", bs: "Nos (Hajšum)" },
          { en: "Chest", bs: "Prsa" },
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "madd-tabii",
    title: "Madd Ṭabīʿī",
    translation: {
      en: "Natural Elongation",
      bs: "Madd Tabii (Prirodna dužina)",
    },
    description: {
      en: "The natural elongation of a vowel for 2 counts. Occurs when Alif is preceded by Fatha, Waw preceded by Damma, or Ya preceded by Kasra, and NOT followed by Hamzah or Sukun.",
      bs: "Prirodno produženje vokala za 2 dužine. Dešava se kada je Alif ispred Fethe, Vav ispred Damme, ili Ja ispred Kesre, a da poslije njih ne dolazi Hemze ili Sukun.",
    },
    letters: ["ا", "و", "ي"],
    examples: [
      {
        arabic: "قَالَ",
        transliteration: "Qāla",
        explanation: {
          en: "Alif after Fatha - 2 counts.",
          bs: "Alif poslije Fethe - 2 dužine.",
        },
      },
      {
        arabic: "قِيلَ",
        transliteration: "Qīla",
        explanation: {
          en: "Ya after Kasra - 2 counts.",
          bs: "Ja poslije Kesre - 2 dužine.",
        },
      },
    ],
    quizQuestions: [
      {
        question: {
          en: "How long is Madd Tabii held?",
          bs: "Koliko se dugo drži Madd Tabii?",
        },
        options: [
          { en: "1 count", bs: "1 dužinu" },
          { en: "2 counts", bs: "2 dužine" },
          { en: "4 counts", bs: "4 dužine" },
          { en: "6 counts", bs: "6 dužina" },
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "madd-muttasil",
    title: "Madd Muttasil",
    translation: {
      en: "Connected Elongation",
      bs: "Madd Muttasil (Spojena dužina)",
    },
    description: {
      en: "Occurs when a Madd letter is followed by a Hamzah (ء) in the SAME word. It is mandatory (Wajib) to stretch it for 4 or 5 counts.",
      bs: "Dešava se kada poslije harfa Madda dođe Hemze (ء) u ISTOJ riječi. Obavezno je (Vadžib) produžiti ga 4 ili 5 dužina.",
    },
    letters: ["ا", "و", "ي"],
    examples: [
      {
        arabic: "جَاءَ",
        transliteration: "Jā'a",
        explanation: {
          en: "Madd and Hamzah in one word. 4-5 counts.",
          bs: "Madd i Hemze u jednoj riječi. 4-5 dužina.",
        },
      },
      {
        arabic: "سُوءَ",
        transliteration: "Sū'a",
        explanation: {
          en: "Waw Madd followed by Hamzah. 4-5 counts.",
          bs: "Vav Madd praćen Hemzetom. 4-5 dužina.",
        },
      },
    ],
    quizQuestions: [
      {
        question: {
          en: "Why is it called 'Muttasil' (Connected)?",
          bs: "Zašto se zove 'Muttasil' (Spojeni)?",
        },
        options: [
          {
            en: "Hamzah connects to next word",
            bs: "Hemze je spojeno sa sljedećom riječi",
          },
          {
            en: "Madd and Hamzah are in the same word",
            bs: "Madd i Hemze su u istoj riječi",
          },
          { en: "It is short", bs: "Kratak je" },
          { en: "It connects two sentences", bs: "Spaja dvije rečenice" },
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "madd-munfasil",
    title: "Madd Munfasil",
    translation: {
      en: "Separated Elongation",
      bs: "Madd Munfasil (Rastavljena dužina)",
    },
    description: {
      en: "Occurs when a Madd letter is at the end of a word, and Hamzah is at the beginning of the NEXT word. It is allowed (Jaiz) to stretch 4-5 counts (Hafs) or 2 counts.",
      bs: "Dešava se kada je harf Madda na kraju jedne riječi, a Hemze na početku SLJEDEĆE riječi. Dozvoljeno je (Džaiz) produžiti 4-5 dužina (Hafs) ili 2 dužine.",
    },
    letters: ["ا", "و", "ي"],
    examples: [
      {
        arabic: "إِنَّا أَعْطَيْنَاكَ",
        transliteration: "Innā A'ṭaynāka",
        explanation: {
          en: "Madd in 'Inna', Hamzah in 'A'tayna'.",
          bs: "Madd u 'Inna', Hemze u 'E'tajna'.",
        },
      },
    ],
    quizQuestions: [
      {
        question: {
          en: "In Madd Munfasil, where is the Hamzah?",
          bs: "Kod Madd Munfasila, gdje se nalazi Hemze?",
        },
        options: [
          { en: "Same word", bs: "U istoj riječi" },
          { en: "Start of next word", bs: "Na početku sljedeće riječi" },
          { en: "Middle of next word", bs: "U sredini sljedeće riječi" },
          { en: "Previous word", bs: "U prethodnoj riječi" },
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "madd-lazim",
    title: "Madd Lāzim",
    translation: {
      en: "Compulsory Elongation",
      bs: "Madd Lazim (Obavezna dužina)",
    },
    description: {
      en: "Occurs when a Madd letter is followed by a completely original permanent Sukun or Shaddah (which imply Sukun). It must be stretched for 6 counts.",
      bs: "Dešava se kada poslije harfa Madda dođe originalni trajni Sukun ili Šedda (koja podrazumijeva Sukun). Mora se produžiti 6 dužina.",
    },
    letters: ["ا", "و", "ي"],
    examples: [
      {
        arabic: "الضَّالِّينَ",
        transliteration: "Aḍ-Ḍāllīn",
        explanation: {
          en: "Lam has Shaddah. Stretch Alif 6 counts.",
          bs: "Lam ima Šeddu. Produži Alif 6 dužina.",
        },
      },
      {
        arabic: "آلْآنَ",
        transliteration: "Āl-āna",
        explanation: {
          en: "Permanent Sukun. 6 counts.",
          bs: "Trajni Sukun. 6 dužina.",
        },
      },
    ],
    quizQuestions: [
      {
        question: {
          en: "What is the duration of Madd Lazim?",
          bs: "Koliko traje Madd Lazim?",
        },
        options: [
          { en: "2 counts", bs: "2 dužine" },
          { en: "4 counts", bs: "4 dužine" },
          { en: "6 counts", bs: "6 dužina" },
          { en: "Optional", bs: "Opcionalno" },
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "madd-arid",
    title: "Madd ʿĀriḍ li-s-Sukūn",
    translation: {
      en: "Temporary Elongation for Stop",
      bs: "Madd Arid lis-Sukun",
    },
    description: {
      en: "Occurs when stopping on a word creates a temporary Sukun on the last letter, preceded by a Madd letter. Can be stretched 2, 4, or 6 counts.",
      bs: "Dešava se kada stajanje na riječi stvori privremeni Sukun na zadnjem harfu, a ispred njega je harf Madda. Može se produžiti 2, 4 ili 6 dužina.",
    },
    letters: ["ا", "و", "ي"],
    examples: [
      {
        arabic: "الْعَالَمِينَ",
        transliteration: "Al-'Ālamīn",
        explanation: {
          en: "When stopping, Nun gets Sukun. Ya can be 2/4/6.",
          bs: "Kod stajanja, Nun dobija Sukun. Ja može biti 2, 4, ili 6.",
        },
      },
    ],
    quizQuestions: [
      {
        question: {
          en: "When does Madd Arid occur?",
          bs: "Kada nastaje Madd Arid?",
        },
        options: [
          { en: "Only when starting", bs: "Samo kod početka" },
          { en: "Only when stopping", bs: "Samo kod stajanja" },
          { en: "Always", bs: "Uvijek" },
          { en: "During Idgham", bs: "Tokom Idgama" },
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "rules-ra",
    title: "Rules of Rāʾ",
    translation: {
      en: "Heavy and Light Ra",
      bs: "Ahkamul Ra (Pravila za Ra)",
    },
    description: {
      en: "The letter Ra (ر) can be Tafkhim (Heavy) or Tarqiq (Light). It is HEAVY if it has Fatha or Damma. It is LIGHT if it has Kasra.",
      bs: "Harf Ra (ر) može biti Tefhim (Krupno) ili Tarkik (Tanko). KRUPNO je ako ima Fethu ili Dammu. TANKO je ako ima Kesru.",
    },
    letters: ["ر"],
    examples: [
      {
        arabic: "رَبَّنَا",
        transliteration: "Rabbanā",
        explanation: {
          en: "Heavy (Fatha).",
          bs: "Krupno (Fetha).",
        },
      },
      {
        arabic: "رِزْقاً",
        transliteration: "Rizqan",
        explanation: {
          en: "Light (Kasra).",
          bs: "Tanko (Kesra).",
        },
      },
    ],
    quizQuestions: [
      {
        question: {
          en: "Ra is pronounced LIGHT when it has...",
          bs: "Ra se izgovara TANKO kada ima...",
        },
        options: [
          { en: "Fatha", bs: "Fethu" },
          { en: "Damma", bs: "Dammu" },
          { en: "Kasra", bs: "Kesru" },
          { en: "Sukun after Fatha", bs: "Sukun poslije Fethe" },
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "lam-allah",
    title: "Lam in 'Allah'",
    translation: {
      en: "Divine Name Rule",
      bs: "Lafzatullah (Lam u imenu Allah)",
    },
    description: {
      en: "The Lam in the name of Allah is Heavy (Tafkhim) if preceded by Fatha or Damma. It is Light (Tarqiq) if preceded by Kasra.",
      bs: "Lam u imenu Allah je Krupno (Tefhim) ako mu prethodi Fetha ili Damma. Tanko je (Tarkik) ako mu prethodi Kesra.",
    },
    letters: ["ل"],
    examples: [
      {
        arabic: "مِنَ اللهِ",
        transliteration: "Min-Allāh",
        explanation: {
          en: "Preceded by Fatha -> Heavy.",
          bs: "Prethodi Fetha -> Krupno.",
        },
      },
      {
        arabic: "بِسْمِ اللهِ",
        transliteration: "Bismi-llāh",
        explanation: {
          en: "Preceded by Kasra -> Light.",
          bs: "Prethodi Kesra -> Tanko.",
        },
      },
    ],
    quizQuestions: [
      {
        question: {
          en: "How do you pronounce 'Allahu' if you start a sentence with it?",
          bs: "Kako se izgovara 'Allahu' ako s njim počinjete rečenicu?",
        },
        options: [
          { en: "Light (Thin)", bs: "Tanko" },
          { en: "Heavy (Thick)", bs: "Krupno (Debelo)" },
          { en: "Silent", bs: "Nečujno" },
          { en: "With Ghunnah", bs: "Sa Gunnom" },
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "waqf",
    title: "Waqf / Stopping Symbols",
    translation: {
      en: "Stopping Rules & Signs",
      bs: "Vakf (Stajanje) i Znakovi",
    },
    description: {
      en: "Waqf refers to stopping on a word during recitation. In the Quran, small symbols appear above the line to guide you on whether to stop or continue. Here are the 6 main symbols you must know.",
      bs: "Vakf označava stajanje na riječi tokom učenja. U Kur'anu se iznad linije nalaze mali znakovi koji vas upućuju da li da stanete ili nastavite. Ovdje je 6 glavnih znakova koje morate znati.",
    },
    letters: ["مـ", "لا", "ج", "صلى", "قلى", "∴"],
    examples: [
      {
        arabic: "مـ (Meem)",
        transliteration: "Waqf Lazim",
        explanation: {
          en: "Compulsory Stop. You MUST stop here. Continuing changes the meaning.",
          bs: "Obavezno stajanje (Vakf Lazim). MORATE stati ovdje. Nastavljanje mijenja značenje.",
        },
      },
      {
        arabic: "لا (Laa)",
        transliteration: "Waqf Mamnu'",
        explanation: {
          en: "Prohibited Stop. You MUST NOT stop here. You must continue.",
          bs: "Zabranjeno stajanje. NE SMIJETE stati ovdje. Morate nastaviti.",
        },
      },
      {
        arabic: "ج (Jeem)",
        transliteration: "Waqf Jaiz",
        explanation: {
          en: "Permissible Stop. You can stop or continue. Both are equal.",
          bs: "Dozvoljeno stajanje (Vakf Džaiz). Možete stati ili nastaviti. Oboje je jednako.",
        },
      },
      {
        arabic: "صلى (Sad-Lam-Ya)",
        transliteration: "Al-Wasl Awla",
        explanation: {
          en: "Permissible, but CONTINUING is better.",
          bs: "Dozvoljeno, ali je PREČE NASTAVITI (El-Vaslu Evla).",
        },
      },
      {
        arabic: "قلى (Qaf-Lam-Ya)",
        transliteration: "Al-Waqf Awla",
        explanation: {
          en: "Permissible, but STOPPING is better.",
          bs: "Dozvoljeno, ali je PREČE STATI (El-Vakfu Evla).",
        },
      },
      {
        arabic: "∴ ... ∴ (Three Dots)",
        transliteration: "Mu'anaqah",
        explanation: {
          en: "Embrace Stop. You may stop at ONE of the two sets of dots, but NOT at both.",
          bs: "Mu'aneka. Možete stati na JEDNOM od dva skupa tačkica, ali NE na oba.",
        },
      },
    ],
    quizQuestions: [
      {
        question: {
          en: "What does the small Meem (مـ) indicate?",
          bs: "Šta označava malo Mim (مـ)?",
        },
        options: [
          { en: "Prohibited stop", bs: "Zabranjeno stajanje" },
          { en: "Compulsory stop", bs: "Obavezno stajanje" },
          { en: "Better to continue", bs: "Bolje nastaviti" },
          { en: "Better to stop", bs: "Bolje stati" },
        ],
        correctAnswer: 1,
      },
      {
        question: {
          en: "What does the symbol (صلى) mean?",
          bs: "Šta znači simbol (صلى)?",
        },
        options: [
          { en: "Must stop", bs: "Mora se stati" },
          { en: "Better to stop", bs: "Bolje je stati" },
          { en: "Better to continue", bs: "Bolje je nastaviti" },
          { en: "Equal choice", bs: "Jednak izbor" },
        ],
        correctAnswer: 2,
      },
      {
        question: {
          en: "If you see two sets of three dots (∴ ... ∴), what rule applies?",
          bs: "Ako vidite dva skupa od po tri tačkice (∴ ... ∴), koje pravilo važi?",
        },
        options: [
          { en: "Stop at both", bs: "Stani na oba" },
          { en: "Stop at neither", bs: "Ne staj ni na jednom" },
          {
            en: "Stop at one, but not both",
            bs: "Stani na jednom, ali ne na oba",
          },
          {
            en: "Stop only at the end of ayah",
            bs: "Stani samo na kraju ajeta",
          },
        ],
        correctAnswer: 2,
      },
    ],
  },
];
