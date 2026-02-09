export type LocalizedString = { en: string; bs: string };

export interface HifzSection {
  id: string;
  title: LocalizedString;
  content: LocalizedString; // Markdown supported
}

export const HIFZ_DATA: HifzSection[] = [
  {
    id: "intention",
    title: {
      en: "1. Intention & Mindset",
      bs: "1. Nijet i Ispravan Stav",
    },
    content: {
      en: `
### The Foundation: Niyyah (Intention)
The journey of memorizing the Quran begins in the heart. The Prophet (₽) said: *"Actions are judged by intentions."* Ensure your intention is solely to seek the pleasure of Allah, not to be called a "Hafiz" or for social status.

- **Check your heart daily**: Intentions can waver. Renew it before every session.
- **Patience (Sabr)**: Hifz is a marathon, not a sprint. There will be days when memorization feels impossible. This is a test of your resolve.
- **Consistency**: A small amount learned consistently (e.g., 3 lines a day) is better than a large page once a week.

### Spiritual Preparation
- **Istighfar**: Sins can fog the memory. Imam Shafi'i complained of poor memory to his teacher Waki', who advised him to abandon sins, saying *"Knowledge is a light, and Allah's light is not given to a sinner."*
- **Dua**: Constantly ask Allah to open your heart and make it easy.

### Recommended Dua
**اللَّهُمَّ إِنِّي عَبْدُكَ، ابْنُ عَبْدِكَ، ابْنُ أَمَتِكَ، نَاصِيَتِي بِيَدِكَ، مَاضٍ فِيَّ حُكْمُكَ، عَدْلٌ فِيَّ قَضَاؤُكَ، أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ سَمَّيْتَ بِهِ نَفْسَكَ، أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ، أَوْ عَلَّمْتَهُ أَحَدًا مِنْ خَلْقِكَ، أَوْ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الْغَيْبِ عِنْدَكَ، أَنْ تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي، وَنُورَ صَدْرِي، وَجَلَاءَ حُزْنِي، وَذَهَابَ هَمِّي**

*"Allahumma inni 'abduk, ibnu 'abdik, ibnu amatika, nasiyati bi-yadika, madin fiyya hukmuka, 'adlun fiyya qada'uka, as'aluka bikulli ismin huwa laka, sammayta bihi nafsaka, aw anzaltahu fi kitabika, aw 'allamtahu ahadan min khalqika, aw ista'tharta bihi fi 'ilmil-ghaybi 'indaka, an taj'alal-Qur'ana rabi'a qalbi, wa nura sadri, wa jala'a huzni, wa dhahaba hammi."*

(O Allah, I am Your slave, and the son of Your male slave, and the son of Your female slave. My forehead is in Your Hand. Your Judgment upon me is assured, and Your Decree concerning me is just. I ask You by every Name that You have named Yourself with, revealed in Your Book, taught any one of Your creation, or kept unto Yourself in the knowledge of the unseen that is with You, **to make the Quran the spring of my heart**, and the light of my chest, the banisher of my sadness, and the reliever of my distress.)
      `,
      bs: `
### Temelj: Nijet (Namjera)
Putovanje kroz Hifz počinje u srcu. Poslanik (s.a.v.s) je rekao: *"Djela se cijene prema namjerama."* Osigurajte da je vaša namjera isključivo traženje Allahovog zadovoljstva, a ne titula "Hafiza" ili društveni status.

- **Provjeravajte srce svakodnevno**: Namjere se mogu promijeniti. Obnovite nijet prije svakog učenja.
- **Sabur (Strpljenje)**: Hifz je maraton, a ne sprint. Doći će dani kada se memorisanje čini nemogućim. To je test vaše odlučnosti.
- **Istrajnost**: Mala količina naučena redovno (npr. 3 reda dnevno) je bolja nego velika stranica jednom sedmično.

### Duhovna Priprema
- **Istigfar**: Grijesi magle pamćenje. Imam Šafija se žalio na slabo pamćenje svom učitelju Vakiju, koji mu je savjetovao da ostavi grijehe, rekavši: *"Znanje je svjetlo, a Allahovo svjetlo se ne daje grješniku."*
- **Dova**: Stalno molite Allaha da vam otvori srce i olakša put.

### Preporučena Dova
**اللَّهُمَّ إِنِّي عَبْدُكَ، ابْنُ عَبْدِكَ، ابْنُ أَمَتِكَ، نَاصِيَتِي بِيَدِكَ، مَاضٍ فِيَّ حُكْمُكَ، عَدْلٌ فِيَّ قَضَاؤُكَ، أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ سَمَّيْتَ بِهِ نَفْسَكَ، أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ، أَوْ عَلَّمْتَهُ أَحَدًا مِنْ خَلْقِكَ، أَوْ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الْغَيْبِ عِنْدَكَ، أَنْ تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي، وَنُورَ صَدْرِي، وَجَلَاءَ حُزْنِي، وَذَهَابَ هَمِّي**

*"Allahumme inni 'abduke, ibnu 'abdike, ibnu emetike, nasijeti bi jedike, madin fijje hukmuke, 'adlun fijje kada'uke, es'eluke bi kulli ismin huve leke, semmejte bihi nefseke, ev enzeltehu fi kitabike, ev 'allemtehu ehaden min halkike, ev iste'serte bihi fi 'ilmil-gajbi 'indeke, en tedž'ale-l-Kur'ane rebi'a kalbi, ve nure sadri, ve džela'e huzni, ve zehabe hemmi."*

**(Allahu, ja sam, doista rob Tvoj, sin roba Tvoga, sin robinje Tvoje. Moj položaj je u Tvojoj ruci, ja sam podložan i nad mnom se sprovode propisi, pravičnost po mene je odluka Tvoja, zato, prizivam Te svim Tvojim imenima kojima si Sebe nazvao, ili ih u Svojoj Knjizi objavio, ili ih nekom od Tvojih bića saopćio, ili ih, pak, zadržao kod Sebe kao znanje nedokučivog, prizivam Te da mi Kur’an učiniš proljećem srca moga, svjetlom grudi mojih, razbistrenjem tuge moje i otklanjanjem briga mojih.)**
      `,
    },
  },
  {
    id: "prerequisites",
    title: {
      en: "2. Prerequisites & Preparation",
      bs: "2. Preduslovi i Priprema",
    },
    content: {
      en: `
### Before You Start
Memorizing incorrect pronunciation is a disaster that is incredibly hard to fix later.

1. **Correct Recitation (Tajweed)**: You **must** be able to read the Quran fluently with correct Tajweed rules. If you struggle with reading, focus on that first (see our Tajweed section).
2. **Find a Teacher (Sheikh)**: Do not memorize alone. You need a teacher to listen to your recitation. You cannot hear your own mistakes.
3. **The Mushaf**: stick to **one specific print** (e.g., the standard Madinah 15-line Mushaf). Your eyes take a "picture" of the page layout. Changing Mushafs confuses your visual memory.

### Optimal Environment
- **Time**: The best time is typically right after Fajr prayer, when the mind is fresh and worldly distractions are minimal.
- **Place**: A quiet corner, facing the Qibla, free from phones and notifications.
      `,
      bs: `
### Prije Nego Počnete
Memorisanje pogrešnog izgovora je katastrofa koju je izuzetno teško ispraviti kasnije.

1. **Ispravno Učenje (Tedžvid)**: **Morate** biti u stanju tečno učiti Kur'an sa ispravnim pravilima Tedžvida. Ako se mučite sa čitanjem, prvo se fokusirajte na to (pogledajte našu sekciju za Tedžvid).
2. **Pronađite Učitelja (Šejha)**: Ne učite sami. Potreban vam je učitelj da presluša vaše učenje. Vi ne možete čuti vlastite greške.
3. **Mushaf**: Držite se **jednog specifičnog izdanja** (npr. standardni medinski Mushaf sa 15 linija). Vaše oči prave "sliku" izgleda stranice. Mijenjanje Mushafa zbunjuje vizuelnu memoriju.

### Optimalno Okruženje
- **Vrijeme**: Najbolje vrijeme je obično odmah nakon Sabah namaza, kada je um svjež, a dunjalučke distrakcije minimalne.
- **Mjesto**: Tih kutak, okrenuti prema Kibli, bez telefona i obavijesti.
      `,
    },
  },
  {
    id: "techniques",
    title: {
      en: "3. Memorization Techniques",
      bs: "3. Tehnike Memorisanja",
    },
    content: {
      en: `
### The 3-Step Process

#### 1. Preparation (Reading)
Read the page you intend to memorize 10-20 times while looking at the Mushaf. Listen to a reciter (like Hussary or Minshawi) to ensure perfect pronunciation. Understand the meaning (Tafsir); understanding the context makes memorization 50% easier.

#### 2. Memorization (Hifz)
Use the "Circular Method" or "Linking Method":
- Read Verse 1 multiple times until memorized.
- Read Verse 2 multiple times until memorized.
- **Link them**: Recite Verse 1 + Verse 2 together.
- Read Verse 3...
- **Link them**: Recite Verse 1 + 2 + 3 together.
- Never move to the next page until the current one is solid.

#### 3. Using Senses
- **Audio**: Listen to the verses on repeat throughout the day.
- **Visual**: Stare at the position of the verse on the page. Close your eyes and try to "see" the page.
- **Scholarly Tip**: Recite your new memorization in your Sunnah/Nafl prayers.
      `,
      bs: `
### Proces u 3 Koraka

#### 1. Priprema (Gledanje)
Pročitajte stranicu koju namjeravate naučiti 10-20 puta gledajući u Mushaf. Slušajte učača (poput Husarija ili Minšavija) da osigurate savršen izgovor. Razumijevanje značenja (Tefsir) čini memorisanje 50% lakšim.

#### 2. Memorisanje (Hifz)
Koristite "Kružnu metodu" ili "Metodu povezivanja":
- Pročitajte Ajet 1 više puta dok ga ne zapamtite.
- Pročitajte Ajet 2 više puta dok ga ne zapamtite.
- **Povežite ih**: Proučite Ajet 1 + Ajet 2 zajedno.
- Pročitajte Ajet 3...
- **Povežite ih**: Proučite Ajet 1 + 2 + 3 zajedno.
- Nikad ne prelazite na novu stranicu dok trenutna nije čvrsta.

#### 3. Korištenje Čula
- **Audio**: Slušajte ajete na ponavljanju tokom dana.
- **Vizuelno**: Fokusirajte se na poziciju ajeta na stranici. Zatvorite oči i pokušajte "vidjeti" stranicu.
- **Savjet Učenjaka**: Učite novo naučene stranice na svojim nafila namazima.
      `,
    },
  },
  {
    id: "revision",
    title: {
      en: "4. The Review System (Muraja'ah)",
      bs: "4. Sistem Ponavljanja (Muradža'a)",
    },
    content: {
      en: `
### "The Quran escapes faster than a camel..."
Memorizing is easy; keeping it is hard. You need a structured system divided into three parts:

**1. New Lesson (Sabaq)**
The page you learned today. It must be repeated at least 20-40 times today effectively.

**2. Recent Past (Sabaqi / Para-Sabaq)**
The pages you learned in the last 30 days. This is the **most critical zone**. Most students lose their Hifz here. You must review the last 1-2 juz (parts) closest to your new lesson *daily*.

**3. Distant Past (Manzil)**
Everything else you learned before. You should complete a full cycle of your old memorization every week or two.
*Example*: If you know 10 Juz, read 1 Juz of "Manzil" every day to finish the cycle in 10 days.

### Golden Rule
**If you don't revise, don't memorize new.** Prioritize keeping what you have over gathering more.
      `,
      bs: `
### "Kur'an bježi brže nego deva..."
Pamtiti je lahko; zadržati je teško. Potreban vam je strukturiran sistem podijeljen u tri dijela:

**1. Nova Lekcija (Sabak)**
Stranica koju ste naučili danas. Mora se ponoviti efektivno barem 20-40 puta danas.

**2. Nedavna Prošlost (Sabaki / Para-Sabak)**
Stranice koje ste naučili u zadnjih 30 dana. Ovo je **najkritičnija zona**. Većina učenika ovdje gubi svoj Hifz. Morate ponavljati zadnjih 1-2 džuza najbliža novoj lekciji *svaki dan*.

**3. Daleka Prošlost (Menzil)**
Sve ostalo što ste davno naučili. Trebali biste završiti puni krug starog hifza svake sedmice ili dvije.
*Primjer*: Ako znate 10 Džuzeva, učite 1 Džuz "Menzila" svaki dan da završite krug za 10 dana.

### Zlatno Pravilo
**Ako ne ponavljate, nemojte učiti novo.** Dajte prednost čuvanju onoga što imate nad sakupljanjem novog.
      `,
    },
  },
  {
    id: "styles",
    title: {
      en: "5. Learning Styles",
      bs: "5. Stilovi Učenja",
    },
    content: {
      en: `
### Know Yourself
Different people learn differently. Experiment to find your method.

- **Visual Learners**: Focus heavily on the position of verses (top, bottom, middle of page). Using multiple colors to highlight keywords might help for initial learning (but stick to one clean Mushaf for the long run).
- **Auditory Learners**: Need to hear the verse. Listen to a recording repeatedly before trying to memorize. Record yourself and listen back.
- **Kinesthetic Learners**: Need movement. Walk around while reciting. Write the verses down on a whiteboard or notebook (this is a traditional method in Mauritania and Africa).

### Conclusion
Make lots of Dua. Every verse is a gift from Allah. Be grateful for what you have, and He will increase you.
      `,
      bs: `
### Upoznaj Sebe
Različiti ljudi uče na različite načine. Eksperimentišite da pronađete svoju metodu.

- **Vizuelni tipovi**: Fokusiraju se jako na poziciju ajeta (vrh, dno, sredina stranice). Korištenje boja za isticanje ključnih riječi može pomoći u početku.
- **Auditivni titovi**: Moraju čuti ajet. Slušajte snimak više puta prije nego pokušate pamtiti. Snimite sebe i preslušajte.
- **Kinestetički tipovi**: Trebaju pokret. Hodajte dok učite. Zapisujte ajete na tablu ili u svesku (ovo je tradicionalna metoda u Mauritaniji i Africi).

### Zaključak
Činite mnogo Dove. Svaki ajet je poklon od Allaha. Budite zahvalni na onome što imate, i On će vam povećati.
      `,
    },
  },
];
