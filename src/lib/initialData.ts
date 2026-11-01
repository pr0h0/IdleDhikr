import { Dhikr, Preset, Dua } from "@/types";

export const INITIAL_DHIKRS: Dhikr[] = [
  // Daily Tasbih (33x)
  {
    id: "subhanallah",
    category: "daily",
    title: { en: "SubhanAllah", bs: "Subhanallah" },
    arabic: "سُبْحَانَ اللَّهِ",
    countDaily: 0,
    countTotal: 0,
    lastUpdated: 0,
    target: 33,
    order: 1,
  },
  {
    id: "alhamdulillah",
    category: "daily",
    title: { en: "Alhamdulillah", bs: "Elhamdulillah" },
    arabic: "الْحَمْدُ لِلَّهِ",
    countDaily: 0,
    countTotal: 0,
    lastUpdated: 0,
    target: 33,
    order: 2,
  },
  {
    id: "allahuakbar",
    category: "daily",
    title: { en: "Allahu Akbar", bs: "Allahu Ekber" },
    arabic: "اللَّهُ أَكْبَرُ",
    countDaily: 0,
    countTotal: 0,
    lastUpdated: 0,
    target: 33,
    order: 3,
  },

  // Daily Adhkar (100x)
  {
    id: "la_ilaha_illallah",
    category: "daily",
    title: { en: "La ilaha illallah", bs: "La ilahe illallah" },
    arabic: "لَا إِلٰهَ إِلَّا ٱللَّٰهُ",
    countDaily: 0,
    countTotal: 0,
    lastUpdated: 0,
    target: 100,
    order: 4,
  },
  {
    id: "subhanallahi_wa_bihamdihi",
    category: "daily",
    title: { en: "SubhanAllahi wa bihamdihi", bs: "Subhanallahi ve bihamdihi" },
    arabic: "سُبْحَانَ ٱللَّٰهِ وَبِحَمْدِهِ",
    countDaily: 0,
    countTotal: 0,
    lastUpdated: 0,
    target: 100,
    order: 5,
  },
  {
    id: "salawat",
    category: "daily",
    title: { en: "Salawat", bs: "Salavat" },
    description: {
      en: "Allahumma salli ala Muhammad",
      bs: "Allahumme salli ala Muhammed",
    },
    arabic: "ٱللَّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ",
    countDaily: 0,
    countTotal: 0,
    lastUpdated: 0,
    target: 100,
    order: 6,
  },

  // Unlimited / General
  {
    id: "astaghfirullah",
    category: "unlimited",
    title: { en: "Astaghfirullah", bs: "Estagfirullah" },
    arabic: "أَسْتَغْفِرُ اللَّهَ",
    countDaily: 0,
    countTotal: 0,
    lastUpdated: 0,
    target: 100,
    order: 7,
  },
  {
    id: "la_hawla",
    category: "unlimited",
    title: { en: "La Hawla", bs: "La Havle" },
    description: {
      en: "La hawla wa la quwwata illa billah",
      bs: "La havle ve la kuvvete illa billah",
    },
    arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ",
    countDaily: 0,
    countTotal: 0,
    lastUpdated: 0,
    target: 33,
    order: 8,
  },
];

export const INITIAL_DUAS: Dua[] = [
  // Surahs
  {
    id: "fatiha",
    category: "surah",
    title: { en: "Surah Al-Fatiha", bs: "Sura El-Fatiha" },
    arabic:
      "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ. ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ. ٱلرَّحْمَٰنِ ٱلرَّحِيمِ. مَٰلِكِ يَوْمِ ٱلدِّينِ. إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ. ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ. صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
    transliteration:
      "Bismillahir-Rahmanir-Rahim. Al-hamdu lillahi Rabbil-'alamin. Ar-Rahmanir-Rahim. Maliki yawmid-din. Iyyaka na'budu wa iyyaka nasta'in. Ihdinas-siratal-mustaqim. Siratal-ladhina an'amta 'alayhim ghayril-maghdubi 'alayhim wa lad-dallin.",
    translation: {
      en: "In the name of Allah, the Entirely Merciful, the Especially Merciful. [All] praise is [due] to Allah, Lord of the worlds - The Entirely Merciful, the Especially Merciful, Sovereign of the Day of Recompense. It is You we worship and You we ask for help. Guide us to the straight path - The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
      bs: "U ime Allaha, Milostivog, Samilosnog! Hvala Allahu, Gospodaru svjetova, Milostivom, Samilosnom, Vladaru Dana sudnjeg! Tebe obožavamo i od Tebe pomoć tražimo! Uputi nas na Pravi put, na Put onih kojima si milost Svoju darovao, a ne onih na koje si se rasrdio, i ne onih koji su zalutali!",
    },
    reference: "Qur'an 1:1-7",
  },
  {
    id: "ikhlas",
    category: "surah",
    title: { en: "Surah Al-Ikhlas", bs: "Sura Ihlas" },
    arabic:
      "قُلْ هُوَ ٱللَّٰهُ أَحَدٌ. ٱللَّٰهُ ٱلصَّمَدُ. لَمْ يَلِدْ وَلَمْ يُولَدْ. وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
    transliteration:
      "Qul huwallahu ahad. Allahus-samad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad.",
    translation: {
      en: 'Say, "He is Allah, [who is] One, Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent."',
      bs: 'Reci: "On je Allah – Jedan! Allah je Utočište svakom! Nije rodio i rođen nije, i niko Mu ravan nije!"',
    },
    reference: "Qur'an 112:1-4",
  },
  {
    id: "falaq",
    category: "surah",
    title: { en: "Surah Al-Falaq", bs: "Sura Felek" },
    transliteration:
      "Qul a'udhu bi-rabbil-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharrin-naffathati fil-'uqad. Wa min sharri hasidin idha hasad.",
    arabic:
      "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ. مِن شَرِّ مَا خَلَقَ. وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ. وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ. وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
    translation: {
      en: 'Say, "I seek refuge in the Lord of daybreak, from the evil of that which He created, and from the evil of darkness when it settles, and from the evil of the blowers in knots, and from the evil of an envier when he envies."',
      bs: 'Reci: "Utječem se Gospodaru svitanja od zla onoga što On stvara, i od zla mrkle noći kada razastre tmine, i od zla smutljivca kad smutnje sije, i od zla zavidljivca kad zavist ne krije!"',
    },
    reference: "Qur'an 113:1-5",
  },
  {
    id: "nas",
    category: "surah",
    transliteration:
      "Qul a'udhu bi-rabbin-nas. Malikin-nas. Ilahin-nas. Min sharril-waswasil-khannas. Alladhi yuwaswisu fi sudurin-nas. Minal-jinnati wan-nas.",
    title: { en: "Surah An-Nas", bs: "Sura Nas" },
    arabic:
      "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ. مَلِكِ ٱلنَّاسِ. إِلَٰهِ ٱلنَّاسِ. مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ. ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ. مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ",
    translation: {
      en: 'Say, "I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind, from the evil of the retreating whisperer, who whispers [evil] into the breasts of mankind, from among the jinn and mankind."',
      bs: 'Reci: "Utječem se Gospodaru ljudi, Vladaru ljudi, Bogu ljudi, od zla šejtana napasnika, koji zle misli unosi u srca ljudi – od džina i od ljudi!"',
    },
    reference: "Qur'an 114:1-6",
  },
  {
    id: "kawthar",
    transliteration:
      "Inna a'taynakal-kawthar. Fa salli li-rabbika wanhar. Inna shani'aka huwal-abtar.",
    category: "surah",
    title: { en: "Surah Al-Kawthar", bs: "Sura Kevser" },
    arabic:
      "إِنَّآ أَعْطَيْنَـٰكَ ٱلْكَوْثَرَ ١ فَصَلِّ لِرَبِّكَ وَٱنْحَرْ ٢ إِنَّ شَانِئَكَ هُوَ ٱلْأَبْتَرُ ٣",
    translation: {
      en: "Indeed, We have granted you, [O Muhammad], al-Kawthar. So pray to your Lord and sacrifice [to Him alone]. Indeed, your enemy is the one cut off.",
      bs: "Mi smo ti, zaista, mnogo dobro dali, zato se Gospodaru svome moli i kurban kolji, onaj koji tebe mrzi sigurno će bez spomena ostati.",
    },
    reference: "Qur'an 108:1-3",
  },
  {
    transliteration:
      "Wal-'asr. Innal-insana lafi khusr. Illalladhina amanu wa 'amilus-salihati wa tawasaw bil-haqqi wa tawasaw bis-sabr.",
    id: "asr",
    category: "surah",
    title: { en: "Surah Al-Asr", bs: "Sura Asr" },
    arabic:
      "وَٱلْعَصْرِ ١ إِنَّ ٱلْإِنسَـٰنَ لَفِى خُسْرٍ ٢ إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ وَتَوَاصَوْا۟ بِٱلْحَقِّ وَتَوَاصَوْا۟ بِٱلصَّبْرِ ٣",
    translation: {
      en: "By time, indeed, mankind is in loss, except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.",
      bs: "Tako mi vremena – čovjek, doista, gubi, samo ne oni koji vjeruju i dobra djela čine, i koji jedni drugima istinu preporučuju i koji jedni drugima preporučuju strpljenje.",
    },
    reference: "Qur'an 103:1-3",
  },
  {
    id: "kafirun",
    category: "surah",
    title: { en: "Surah Al-Kafirun", bs: "Sura Kafirun" },
    arabic:
      "قُلْ يَـٰٓأَيُّهَا ٱلْكَـٰفِرُونَ ١ لَآ أَعْبُدُ مَا تَعْبُدُونَ ٢ وَلَآ أَنتُمْ عَـٰبِدُونَ مَآ أَعْبُدُ ٣ وَلَآ أَنَا۠ عَابِدٌۭ مَّا عَبَدتُّمْ ٤ وَلَآ أَنتُمْ عَـٰبِدُونَ مَآ أَعْبُدُ ٥ لَكُمْ دِينُكُمْ وَلِىَ دِينِ ٦",
    transliteration:
      "Qul ya ayyuhal-kafirun. La a'budu ma ta'budun. Wa la antum 'abiduna ma a'bud. Wa la ana 'abidum ma 'abadtum. Wa la antum 'abiduna ma a'bud. Lakum dinukum wa liya din.",
    translation: {
      en: 'Say, "O disbelievers, I do not worship what you worship. Nor are you worshippers of what I worship. Nor will I be a worshipper of what you worship. Nor will you be worshippers of what I worship. For you is your religion, and for me is my religion."',
      bs: 'Reci: "O vi nevjernici, ja se neću klanjati onima kojima se vi klanjate, a ni vi se nećete klanjati Onome kome se ja klanjam; ja se nisam klanjao onima kojima ste se vi klanjali, a i vi se niste klanjali Onome kome se ja klanjam, vama – vaša vjera, a meni – moja!"',
    },
    reference: "Qur'an 109:1-6",
  },

  // Quranic Ayahs
  {
    id: "ayatul_kursi",
    category: "ayah",
    title: { en: "Ayatul Kursi", bs: "Ajetul Kursija" },
    arabic:
      "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ",
    transliteration:
      "Allahu la ilaha illa Huwal-Hayyul-Qayyum. La ta'khudhuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-ard. Man dhal-ladhi yashfa'u 'indahu illa bi-idhnihi. Ya'lamu ma bayna aydihim wa ma khalfahum. Wa la yuhituna bi-shay'im-min 'ilmihi illa bi-ma sha'a. Wasi'a kursiyyuhus-samawati wal-arda, wa la ya'uduhu hifzuhuma, wa Huwal-'Aliyyul-'Azim.",
    translation: {
      en: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
      bs: "Allah je – nema boga osim Njega – Živi i Vječni! Ne obuzima Ga ni drijemež ni san! Njegovo je ono što je na nebesima i ono što je na Zemlji! Ko se može pred Njim zauzimati za nekoga bez dopuštenja Njegova?! On zna šta je bilo i prije njih i šta će biti poslije njih, a od onoga što On zna – drugi znaju samo onoliko koliko On želi. Njegova Kursija obuhvaća i nebesa i Zemlju i Njemu ne dojadi održavanje njihovo; On je Svevišnji, Veličanstveni!",
    },
    reference: "Qur'an 2:255",
  },
  {
    id: "amanar_rasul",
    category: "ayah",
    title: {
      en: "Amanar Rasul (Surah Al-Baqarah 285-286)",
      bs: "Amene-r-Resulu (Sura Bekare 285-286)",
    },
    arabic:
      "ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِۦ وَٱلْمُؤْمِنُونَ ۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَـٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيْنَ أَحَدٍۢ مِّن رُّسُلِهِۦ ۚ وَقَالُوا۟ سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ ٱلْمَصِيرُ. لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَآ إِن نَّسِينَآ أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ إِصْرًۭا كَمَا حَمَلْتَهُۥ عَلَى ٱلَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِۦ ۖ وَٱعْفُ عَنَّا وَٱغْفِرْ لَنَا وَٱرْحَمْنَآ ۚ أَنتَ مَوْلَىٰنَا فَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَـٰفِرِينَ",
    transliteration:
      "Amanar-rasulu bima unzila ilayhi mir-rabbihi wal-mu'minun. Kullun amana billahi wa mala'ikatihi wa kutubihi wa rusulih. La nufarriqu bayna ahadim-mir-rusulih. Wa qalu sami'na wa ata'na ghufranaka rabbana wa ilaykal-masir. La yukallifullahu nafsan illa wus'aha. Laha ma kasabat wa 'alayha maktasabat. Rabbana la tu'akhidhna in nasina aw akhta'na. Rabbana wa la tahmil 'alayna isran kama hamaltahu 'alal-ladhina min qablina. Rabbana wa la tuhammilna ma la taqata lana bih. Wa'fu 'anna waghfir lana warhamna. Anta mawlana fansurna 'alal-qawmil-kafirin.",
    translation: {
      en: 'The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah and His angels and His books and His messengers, [saying], "We make no distinction between any of His messengers." And they say, "We hear and we obey. [We seek] Your forgiveness, our Lord, and to You is the [final] destination." Allah does not charge a soul except [with that within] its capacity. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. "Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people."',
      bs: 'Poslanik vjeruje u ono što mu se objavljuje od Gospodara njegova, i vjernici – svaki vjeruje u Allaha, i meleke Njegove, i knjige Njegove, i poslanike Njegove: "Mi ne izdvajamo nijednog od poslanika Njegovih." I oni govore: "Čujemo i pokoravamo se; oprosti nam, Gospodaru naš; Tebi ćemo se vratiti." Allah nikoga ne opterećuje preko mogućnosti njegovih: u njegovu korist je dobro koje učini, a na njegovu štetu zlo koje uradi. Gospodaru naš, ne kazni nas ako zaboravimo ili što nehotice učinimo! Gospodaru naš, ne tovari na nas breme kao što si ga tovario na one prije nas! Gospodaru naš, ne stavljaj nam u dužnost ono što ne možemo podnijeti, pobriši grijehe naše i oprosti nam, i smiluj se na nas. Ti si Gospodar naš pa nam pomozi protiv naroda koji ne vjeruje!',
    },
    reference: "Qur'an 2:285-286",
  },
  {
    id: "rabbana_atina",
    category: "ayah",
    title: {
      en: "Rabbana Atina (Good in Both Worlds)",
      bs: "Rabbena atina (dobro na oba svijeta)",
    },
    transliteration:
      "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar.",
    arabic:
      "رَبَّنَآ ءَاتِنَا فِى ٱلدُّنْيَا حَسَنَةًۭ وَفِى ٱلْـَٔاخِرَةِ حَسَنَةًۭ وَقِنَا عَذَابَ ٱلنَّارِ",
    translation: {
      en: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.",
      bs: "Gospodaru naš, podaj nam dobro i na ovome i na onome svijetu, i sačuvaj nas patnje u ognju!",
    },
    reference: "Qur'an 2:201",
  },
  {
    id: "rabbana_la_tuzigh",
    category: "ayah",
    transliteration:
      "Rabbana la tuzigh qulubana ba'da idh hadaytana wa hab lana mil-ladunka rahmah. Innaka antal-Wahhab.",
    title: {
      en: "Rabbana La Tuzigh (Steadfast Hearts)",
      bs: "Rabbena la tuzig (postojanost srca)",
    },
    arabic:
      "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ ٱلْوَهَّابُ",
    translation: {
      en: "Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower.",
      bs: "Gospodaru naš, ne dopusti srcima našim da skrenu, kad si nam već na Pravi put ukazao, i daruj nam Svoju milost; Ti si, zaista, Onaj koji mnogo daruje!",
    },
    reference: "Qur'an 3:8",
  },
  {
    id: "rabbirhamhuma",
    transliteration: "Rabbirhamhuma kama rabbayani saghira.",
    category: "ayah",
    title: { en: "Dua for Parents", bs: "Dova za roditelje" },
    arabic: "رَّبِّ ٱرْحَمْهُمَا كَمَا رَبَّيَانِى صَغِيرًۭا",
    translation: {
      en: "My Lord, have mercy upon them as they brought me up [when I was] small.",
      bs: "Gospodaru moj, smiluj im se, oni su mene, kad sam bio dijete, njegovali!",
    },
    reference: "Qur'an 17:24",
  },
  {
    id: "rabbi_zidni",
    category: "ayah",
    title: { en: "Dua for Knowledge", bs: "Dova za znanje" },
    arabic: "رَّبِّ زِدْنِى عِلْمًۭا",
    transliteration: "Rabbi zidni 'ilma.",
    translation: {
      en: "My Lord, increase me in knowledge.",
      bs: "Gospodaru moj, Ti znanje moje proširi!",
    },
    reference: "Qur'an 20:114",
  },
  {
    id: "hasbiyallah",
    category: "ayah",
    title: { en: "Hasbiyallah", bs: "Hasbijallah" },
    arabic:
      "حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    transliteration:
      "Hasbiyallahu la ilaha illa Hu. 'Alayhi tawakkaltu wa Huwa rabbul-'arshil-'azim.",
    translation: {
      en: "Allah is sufficient for me; there is no deity except Him. Upon Him I have relied, and He is the Lord of the Great Throne.",
      bs: "Dovoljan mi je Allah, nema boga osim Njega, na Njega se oslanjam. On je Gospodar Arša veličanstvenog.",
    },
    reference: "Qur'an 9:129",
  },

  // Prayer Duas
  {
    id: "subhanaka_allahumma",
    category: "dua",
    title: { en: "Opening Dua (Istiftah)", bs: "Početna dova (Subhaneke)" },
    arabic:
      "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ",
    transliteration:
      "Subhanaka Allahumma wa bihamdika, wa tabarakasmuka, wa ta'ala jadduka, wa la ilaha ghayruk.",
    translation: {
      en: "Glory be to You, O Allah, and all praises are due unto You, and blessed is Your name and high is Your majesty and none is worthy of worship but You.",
      bs: "Tebi slava pripada, Allahu moj, i Tvoja je hvala. Tvoje ime je blagoslovljeno, Tvoj položaj je visok i nema boga osim Tebe.",
    },
    hidden: true,
  },
  {
    id: "subhana_rabbiyal_azim",
    category: "dua",
    title: { en: "In Ruku", bs: "Na ruku'u" },
    arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    transliteration: "Subhana Rabbiyal-'Azim.",
    translation: {
      en: "Glory be to my Lord, the Magnificent.",
      bs: "Slavljen neka je moj Gospodar Veličanstveni.",
    },
    reference: "Muslim 772",
    hidden: true,
  },
  {
    id: "sami_allahu_liman_hamidah",
    category: "dua",
    title: { en: "Rising from Ruku", bs: "Dizanje s ruku'a" },
    arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ",
    transliteration: "Sami'allahu liman hamidah.",
    translation: {
      en: "Allah hears the one who praises Him.",
      bs: "Allah čuje onoga ko Ga hvali.",
    },
    hidden: true,
  },
  {
    id: "rabbana_walakal_hamd",
    category: "dua",
    transliteration: "Rabbana wa lakal-hamd.",
    title: { en: "Standing After Ruku", bs: "Stajanje nakon ruku'a" },
    arabic: "رَبَّنَا وَلَكَ الْحَمْدُ",
    translation: {
      en: "Our Lord, and to You belongs all praise.",
      bs: "Gospodaru naš, Tebi pripada sva hvala.",
    },
    hidden: true,
  },
  {
    id: "subhana_rabbiyal_ala",
    transliteration: "Subhana Rabbiyal-A'la.",
    category: "dua",
    title: { en: "In Sujood", bs: "Na sedždi" },
    arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
    translation: {
      en: "Glory be to my Lord, the Most High.",
      bs: "Slavljen neka je moj Gospodar Svevišnji.",
    },
    reference: "Muslim 772",
    hidden: true,
  },
  {
    transliteration: "Rabbighfir li.",
    id: "rabbighfirli",
    category: "dua",
    title: { en: "Between Sujoods", bs: "Između dvije sedžde" },
    arabic: "رَبِّ اغْفِرْ لِي",
    translation: {
      en: "My Lord, forgive me.",
      bs: "Gospodaru moj, oprosti mi.",
    },
    hidden: true,
  },
  {
    id: "tashahhud",
    category: "dua",
    title: { en: "Tashahhud", bs: "Tešehhud (Ettehijatu)" },
    arabic:
      "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    transliteration:
      "Attahiyyatu lillahi was-salawatu wat-tayyibat, as-salamu 'alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuh, as-salamu 'alayna wa 'ala 'ibadillahis-salihin. Ash-hadu an la ilaha illallah, wa ash-hadu anna Muhammadan 'abduhu wa rasuluh.",
    translation: {
      en: "Greetings, prayers and goodness belong to Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and His Messenger.",
      bs: "Sva veličanja, i namazi, i lijepa djela pripadaju Allahu. Neka je selam na tebe, o Vjerovjesniče, i Allahova milost i Njegovi blagoslovi. Neka je selam na nas i na Allahove dobre robove. Svjedočim da nema boga osim Allaha, i svjedočim da je Muhammed Njegov rob i Njegov poslanik.",
    },
    reference: "Al-Bukhari 831; Muslim 402",
    hidden: true,
  },
  {
    id: "salawat_ibrahimiyyah",
    category: "dua",
    title: { en: "Salawat Ibrahimiyyah", bs: "Salavati (Ibrahimijja)" },
    arabic:
      "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    transliteration:
      "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad, kama sallayta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidun Majid. Allahumma barik 'ala Muhammadin wa 'ala ali Muhammad, kama barakta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidun Majid.",
    translation: {
      en: "O Allah, send prayers upon Muhammad and upon the family of Muhammad, as You sent prayers upon Ibrahim and upon the family of Ibrahim; You are indeed Worthy of Praise, Full of Glory. O Allah, send blessings upon Muhammad and upon the family of Muhammad, as You sent blessings upon Ibrahim and upon the family of Ibrahim; You are indeed Worthy of Praise, Full of Glory.",
      bs: "Allahu, smiluj se Muhammedu i porodici Muhammedovoj, kao što si se smilovao Ibrahimu i porodici Ibrahimovoj, Ti si, zaista, Hvaljeni i Slavljeni. Allahu, blagoslovi Muhammeda i porodicu Muhammedovu, kao što si blagoslovio Ibrahima i porodicu Ibrahimovu, Ti si, zaista, Hvaljeni i Slavljeni.",
    },
    reference: "Al-Bukhari 3370",
    hidden: true,
  },
  {
    id: "taslim",
    category: "dua",
    title: { en: "Taslim (Salam)", bs: "Selam" },
    arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
    transliteration: "As-salamu 'alaykum wa rahmatullah.",
    translation: {
      en: "Peace be upon you and the mercy of Allah.",
      bs: "Neka je mir na vas i milost Allahova.",
    },
    hidden: true,
  },
  {
    id: "allahumma_antas_salam",
    category: "dua",
    title: { en: "Allahumma Antas Salam", bs: "Allahumme entes-selam" },
    arabic:
      "اللَّهُمَّ أَنْتَ السَّلاَمُ وَمِنْكَ السَّلاَمُ تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالإِكْرَامِ",
    transliteration:
      "Allahumma antas-salam wa minkas-salam, tabarakta ya dhal-jalali wal-ikram.",
    translation: {
      en: "O Allah, You are As-Salam (the Source of Peace), and from You comes peace. Blessed are You, O Possessor of Majesty and Honor.",
      bs: "Allahu moj, Ti si Selam (Mir) i od Tebe je mir. Uzvišen si, o Ti Koji posjeduješ veličanstvo i plemenitost.",
    },
    reference: "Muslim 591",
  },
  {
    id: "qunut_witr",
    category: "dua",
    title: { en: "Qunut (Witr)", bs: "Kunut dova (Vitr)" },
    transliteration:
      "Allahumma inna nasta'inuka wa nastaghfiruka wa nu'minu bika wa natawakkalu 'alayka wa nuthni 'alaykal-khayr, wa nashkuruka wa la nakfuruka wa nakhla'u wa natruku man yafjuruk. Allahumma iyyaka na'budu wa laka nusalli wa nasjudu wa ilayka nas'a wa nahfidu wa narju rahmataka wa nakhsha 'adhabaka inna 'adhabaka bil-kuffari mulhiq.",
    arabic:
      "اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ وَنُثْنِي عَلَيْكَ الْخَيْرَ وَنَشْكُرُكَ وَلاَ نَكْفُرُكَ وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ اللَّهُمَّ إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلِّي وَنَسْجُدُ وَإِلَيْكَ نَسْعَى وَنَحْفِدُ وَنَرْجُو رَحْمَتَكَ وَنَخْشَى عَذَابَكَ إِنَّ عَذَابَكَ بِالْكُفَّارِ مُلْحَقٌ",
    translation: {
      en: "O Allah, we seek Your help and ask Your forgiveness, we believe in You and rely upon You, and we praise You with good. We thank You and are not ungrateful to You, and we cast off and forsake whoever disobeys You. O Allah, You alone we worship, to You we pray and prostrate, and toward You we strive and hasten. We hope for Your mercy and fear Your punishment; indeed, Your punishment will overtake the disbelievers.",
      bs: "Allahu, mi samo od Tebe pomoć tražimo, od Tebe oprost tražimo, u Tebe vjerujemo i u Tebe se uzdamo. Tebe hvalimo i Tebi zahvaljujemo, i nismo prema Tebi nezahvalni. Mi odbacujemo i ostavljamo onoga ko griješi prema Tebi. Allahu, samo Tebe obožavamo, Tebi namaz klanjamo i Tebi na sedždu padamo. Tebi žurimo, Tebi služimo. Nadamo se Tvojoj milosti i bojimo se Tvoje kazne. Tvoja kazna će, sigurno, stići nevjernike.",
    },
  },
  {
    id: "la_ilaha_illallah_wahdahu",
    category: "dua",
    transliteration:
      "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir.",
    title: { en: "Tawhid (After Prayer)", bs: "Tevhid (Poslije namaza)" },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    translation: {
      en: "There is no god but Allah, alone, without partner. His is the dominion and His is the praise, and He has power over all things.",
      bs: "Nema boga osim Allaha, Jedinog, Koji druga nema. Njemu pripada sva vlast i Njemu pripada sva hvala i On nad svime ima moć.",
    },
    reference: "Al-Bukhari 844; Muslim 593",
  },

  // Morning/Evening/Protection
  {
    id: "sayyidul_istighfar",
    transliteration:
      "Allahumma anta Rabbi la ilaha illa ant. Khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata't. A'udhu bika min sharri ma sana't. Abu'u laka bi-ni'matika 'alayya wa abu'u laka bi-dhanbi faghfir li fa-innahu la yaghfirudh-dhunuba illa ant.",
    category: "dua",
    title: { en: "Sayyidul Istighfar", bs: "Sejjidul Istigfar" },
    arabic:
      "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    translation: {
      en: "O Allah, You are my Lord. There is no god but You. You created me and I am Your slave. I am abiding to Your covenant and promise as best as I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favors upon me and I acknowledge my sins. So forgive me, for verily no one forgives sins except You.",
      bs: "Allahu moj, Ti si moj Gospodar, nema boga osim Tebe. Ti si me stvorio i ja sam Tvoj rob. I ja sam na Tvom zavjetu i obećanju koliko mogu. Utječem Ti se od zla onoga što sam uradio. Priznajem Tvoju blagodat prema meni i priznajem svoj grijeh. Pa mi oprosti, jer grijehe ne oprašta niko osim Tebe.",
    },
    reference: "Al-Bukhari 6306",
  },
  {
    transliteration:
      "Asbahna wa asbahal-mulku lillah, wal-hamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir. Rabbi as'aluka khayra ma fi hadhal-yawmi wa khayra ma ba'dah, wa a'udhu bika min sharri ma fi hadhal-yawmi wa sharri ma ba'dah. Rabbi a'udhu bika minal-kasali wa su'il-kibar. Rabbi a'udhu bika min 'adhabin fin-nari wa 'adhabin fil-qabr.",
    id: "asbahna",
    category: "dua",
    title: { en: "Asbahna (Morning)", bs: "Asbahna (Jutarnji)" },
    arabic:
      "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
    translation: {
      en: "We have entered the morning and at this very time the whole kingdom belongs to Allah, and all praise is due to Allah. There is no god but Allah, the One; He has no partner. His is the Sovereignty and His is the Praise and He has power over all things. My Lord, I ask You for the good of this day and the good of what follows it, and I seek refuge in You from the evil of this day and the evil of what follows it. My Lord, I seek refuge in You from laziness and from the misery of old age. My Lord, I seek refuge in You from the punishment in the Fire and the punishment in the Grave.",
      bs: "Jutro smo dočekali i sva vlast pripada Allahu. Hvala Allahu, nema boga osim Allaha, Jedinog, Koji druga nema. Njemu pripada sva vlast i Njemu pripada sva hvala i On nad svime ima moć. Gospodaru, molim Te za dobro ovoga dana i dobro poslije njega, a utječem Ti se od zla ovoga dana i zla poslije njega. Gospodaru, utječem Ti se od lijenosti i teške starosti. Gospodaru, utječem Ti se od patnje u Vatri i patnje u kaburu.",
    },
    reference: "Muslim 2723",
  },
  {
    id: "amsayna",
    category: "dua",
    title: { en: "Amsayna (Evening)", bs: "Amsayna (Večernji)" },
    arabic:
      "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
    transliteration:
      "Amsayna wa amsal-mulku lillah, wal-hamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir. Rabbi as'aluka khayra ma fi hadhihil-laylati wa khayra ma ba'daha, wa a'udhu bika min sharri ma fi hadhihil-laylati wa sharri ma ba'daha. Rabbi a'udhu bika minal-kasali wa su'il-kibar. Rabbi a'udhu bika min 'adhabin fin-nari wa 'adhabin fil-qabr.",
    translation: {
      en: "We have entered the evening and at this very time the whole kingdom belongs to Allah, and all praise is due to Allah. There is no god but Allah, the One; He has no partner. His is the Sovereignty and His is the Praise and He has power over all things. My Lord, I ask You for the good of this night and the good of what follows it, and I seek refuge in You from the evil of this night and the evil of what follows it. My Lord, I seek refuge in You from laziness and from the misery of old age. My Lord, I seek refuge in You from the punishment in the Fire and the punishment in the Grave.",
      bs: "Noć smo dočekali i sva vlast pripada Allahu. Hvala Allahu, nema boga osim Allaha, Jedinog, Koji druga nema. Njemu pripada sva vlast i Njemu pripada sva hvala i On nad svime ima moć. Gospodaru, molim Te za dobro ove noći i dobro poslije nje, a utječem Ti se od zla ove noći i zla poslije nje. Gospodaru, utječem Ti se od lijenosti i teške starosti. Gospodaru, utječem Ti se od patnje u Vatri i patnje u kaburu.",
    },
    reference: "Muslim 2723",
  },
  {
    id: "allahumma_bika_asbahna",
    category: "dua",
    title: {
      en: "Allahumma Bika Asbahna",
      bs: "Allahu moj, s Tobom u jutro ulazimo",
    },
    arabic:
      "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
    transliteration:
      "Allahumma bika asbahna wa bika amsayna wa bika nahya wa bika namut wa ilaykan-nushur.",
    translation: {
      en: "O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the Final Return.",
      bs: "Allahu moj, Tvojom voljom ulazimo u jutro i Tvojom voljom ulazimo u noć, Tvojom voljom živimo, i Tvojom voljom umiremo, i Tebi ćemo se vratiti.",
    },
    reference: "Abu Dawud 5068",
  },
  {
    id: "allahumma_bika_amsayna",
    category: "dua",
    title: {
      en: "Allahumma Bika Amsayna",
      bs: "Allahu moj, s Tobom u noć ulazimo",
    },
    arabic:
      "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
    transliteration:
      "Allahumma bika amsayna wa bika asbahna wa bika nahya wa bika namut wa ilaykal-masir.",
    translation: {
      en: "O Allah, by You we enter the evening and by You we enter the morning, by You we live and by You we die, and to You is the final destination.",
      bs: "Allahu moj, Tvojom voljom ulazimo u noć i Tvojom voljom ulazimo u jutro, Tvojom voljom živimo, i Tvojom voljom umiremo, i Tebi je konačno odredište.",
    },
    reference: "Hisn al-Muslim; see Abu Dawud 5068, At-Tirmidhi 3391",
  },
  {
    id: "radhitu_billahi",
    category: "dua",
    title: { en: "Radhitu Billahi", bs: "Zadovoljan sam Allahom (Raditu billahi)" },
    transliteration:
      "Radhitu billahi Rabba, wa bil-Islami dina, wa bi-Muhammadin sallallahu 'alayhi wa sallama nabiyya.",
    arabic:
      "رَضِيتُ بِاللهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
    translation: {
      en: "I am pleased with Allah as my Lord, with Islam as my religion and with Muhammad (peace and blessings of Allah be upon him) as my Prophet.",
      bs: "Zadovoljan sam da mi je Allah Gospodar, islam vjera i Muhammed, a.s., poslanik.",
    },
  },
  {
    id: "bismillah_ladhi",
    category: "dua",
    transliteration:
      "Bismillahil-ladhi la yadurru ma'asmihi shay'un fil-ardi wa la fis-sama'i wa Huwas-Sami'ul-'Alim.",
    title: { en: "Bismillahil-ladhi", bs: "Bismillahil-lezi" },
    arabic:
      "بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    translation: {
      en: "In the Name of Allah, with Whose Name nothing on the earth or in the heaven can cause harm, and He is the All-Hearing, the All-Knowing.",
      bs: "U ime Allaha, s čijim imenom ništa ne može naškoditi ni na Zemlji ni na nebu, i On sve čuje i sve zna.",
    },
    reference: "Abu Dawud 5088; At-Tirmidhi 3388",
  },
  {
    id: "ya_hayyu_ya_qayyum",
    transliteration:
      "Ya Hayyu ya Qayyum bi-rahmatika astaghith. Aslih li sha'ni kullah, wa la takilni ila nafsi tarfata 'ayn.",
    category: "dua",
    title: { en: "Ya Hayyu Ya Qayyum", bs: "O Živi, O Vječni" },
    arabic:
      "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ",
    translation: {
      en: "O Ever-Living, O Self-Sustaining, by Your mercy I seek help. Set right all my affairs for me, and do not leave me to myself even for the blink of an eye.",
      bs: "O Živi, o Vječni, Tvojom milošću tražim pomoć, popravi svako moje stanje i ne prepusti me samom sebi ni jednog trena!",
    },
  },
  {
    id: "a_uzu_bi_kalimat",
    category: "dua",
    title: { en: "A'udhu bi kalimat", bs: "Euzu bi kelimat" },
    arabic: "أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration: "A'udhu bi-kalimatillahit-tammati min sharri ma khalaq.",
    translation: {
      en: "I seek refuge in the Perfect Words of Allah from the evil of what He has created.",
      bs: "Utječem se savršenim Allahovim riječima od zla onoga što je On stvorio.",
    },
    reference: "Muslim 2708",
  },
  {
    id: "evil_eye_protection",
    category: "dua",
    title: { en: "Protection from Evil Eye", bs: "Zaštita od uroka" },
    arabic:
      "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لاَمَّةٍ",
    transliteration:
      "A'udhu bi-kalimatillahit-tammah min kulli shaytanin wa hammah, wa min kulli 'aynin lammah.",
    translation: {
      en: "I seek refuge in the perfect words of Allah from every devil and every poisonous creature, and from every evil eye.",
      bs: "Tražim zaštitu Allahovim savršenim riječima od svakog šejtana i otrovne životinje, i od svakog zlog oka.",
    },
    description: {
      en: "The Prophet ﷺ sought protection for Al-Hasan and Al-Husayn with these words, saying: \"U'idhukuma bi-kalimatillahit-tammah...\" (I seek protection for you both...).",
      bs: "Poslanik ﷺ je ovim riječima tražio zaštitu za Hasana i Husejna, govoreći: \"U'izukuma bi kelimatillahit-tammeh...\" (Tražim zaštitu za vas dvojicu...).",
    },
    reference: "Al-Bukhari 3371",
  },

  // General & Deeds
  {
    id: "enter_home",
    category: "dua",
    title: { en: "Entering Home", bs: "Ulazak u kuću" },
    arabic:
      "بِسْمِ اللهِ وَلَجْنَا، وَبِسْمِ اللهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا",
    transliteration:
      "Bismillahi walajna, wa bismillahi kharajna, wa 'ala Rabbina tawakkalna.",
    translation: {
      en: "In the name of Allah we enter and in the name of Allah we leave, and upon our Lord we rely.",
      bs: "S Allahovim imenom ulazimo i s Allahovim imenom izlazimo. Na Gospodara našeg se oslanjamo.",
    },
    reference: "Abu Dawud 5096",
  },
  {
    id: "leave_home",
    category: "dua",
    title: { en: "Leaving Home", bs: "Izlazak iz kuće" },
    arabic:
      "بِسْمِ اللهِ، تَوَكَّلْتُ عَلَى اللهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ",
    transliteration:
      "Bismillahi tawakkaltu 'alallah, wa la hawla wa la quwwata illa billah.",
    translation: {
      en: "In the name of Allah, I rely upon Allah, and there is no power and no strength except with Allah.",
      bs: "U ime Allaha, oslanjam se na Allaha, nema moći niti snage osim kod Allaha.",
    },
    reference: "Abu Dawud 5095; At-Tirmidhi 3426",
  },
  {
    id: "read_quran",
    category: "deed",
    title: { en: "Reading Quran (1 Page)", bs: "Učenje Kur'ana (1 stranica)" },
    arabic:
      "اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لِأَصْحَابِهِ",
    translation: {
      en: "Read the Quran, for it will come as an intercessor for its reciters on the Day of Resurrection.",
      bs: "Učite Kur'an, jer će on doći na Sudnjem danu kao zagovornik onima koji su ga učili.",
    },
    reference: "Muslim 804",
  },
  {
    id: "sadaqah",
    category: "deed",
    title: { en: "Giving Sadaqah", bs: "Davanje sadake" },
    arabic: "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ",
    translation: {
      en: "Charity does not decrease wealth.",
      bs: "Sadaka ne umanjuje imetak.",
    },
    reference: "Muslim 2588",
  },
  {
    id: "sunnah_prayers",
    category: "deed",
    title: { en: "12 Sunnah Rakats", bs: "12 rekata sunneta" },
    arabic:
      "مَا مِنْ عَبْدٍ مُسْلِمٍ يُصَلِّي لِلَّهِ كُلَّ يَوْمٍ ثِنْتَيْ عَشْرَةَ رَكْعَةً تَطَوُّعًا غَيْرَ فَرِيضَةٍ إِلاَّ بَنَى اللَّهُ لَهُ بَيْتًا فِي الْجَنَّةِ",
    translation: {
      en: "There is no Muslim servant who prays to Allah every day twelve voluntary rak'ahs, other than the obligatory prayers, except that Allah builds for him a house in Paradise.",
      bs: "Nema nijednog roba muslimana koji svaki dan Allahu klanja dvanaest rekata dobrovoljnog namaza, mimo farza, a da mu Allah neće sagraditi kuću u Džennetu.",
    },
    description: {
      en: "The twelve rak'ahs: 2 before Fajr, 4 before Dhuhr, 2 after Dhuhr, 2 after Maghrib and 2 after Isha (At-Tirmidhi 415).",
      bs: "Dvanaest rekata: 2 prije sabaha, 4 prije podne, 2 poslije podne, 2 poslije akšama i 2 poslije jacije (Tirmizi 415).",
    },
    reference: "Muslim 728",
  },
  {
    id: "salah_duha",
    category: "deed",
    title: { en: "Salatul Duha", bs: "Duha namaz" },
    arabic:
      "أَوْصَانِي خَلِيلِي بِثَلاَثٍ: صِيَامِ ثَلاَثَةِ أَيَّامٍ مِنْ كُلِّ شَهْرٍ، وَرَكْعَتَيِ الضُّحَى، وَأَنْ أُوتِرَ قَبْلَ أَنْ أَنَامَ",
    translation: {
      en: "My close friend (the Prophet ﷺ) advised me to do three things: to fast three days of every month, to pray the two rak'ahs of Duha, and to pray Witr before I sleep.",
      bs: "Moj prijatelj (Poslanik, a.s.) oporučio mi je tri stvari: post tri dana u svakom mjesecu, dva rekata Duha-namaza i vitr-namaz prije spavanja.",
    },
    reference: "Al-Bukhari 1981; Muslim 721",
  },

  // --- HISNUL MUSLIM ADDITIONS ---
  {
    id: "hisnul_muslim_75",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (1): Ayat al-Kursi",
      bs: "Jutro i večer (1): Ajetul-kursija",
    },
    description: {
      en: "Recite once in the morning and once in the evening. Whoever recites it in the morning is protected from the jinn until the evening, and whoever recites it in the evening is protected until the morning.",
      bs: "Uči se jednom ujutro i jednom navečer. Ko ga prouči ujutro, bit će zaštićen od džina do večeri, a ko ga prouči navečer, bit će zaštićen do jutra.",
    },
    arabic:
      "أَعُوذُ بِاللَّهِ مِنَ الشَّيطَانِ الرَّجِيمِ ﴿اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَوَاتِ وَالْأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾.",
    transliteration:
      "A'udhu billahi minash-shaytanir-rajim. Allahu la ilaha illa Huwal-Hayyul-Qayyum. La ta'khudhuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-ard. Man dhal-ladhi yashfa'u 'indahu illa bi-idhnih. Ya'lamu ma bayna aydihim wa ma khalfahum. Wa la yuhituna bi-shay'im-min 'ilmihi illa bi-ma sha'. Wasi'a kursiyyuhus-samawati wal-ard, wa la ya'uduhu hifzuhuma, wa Huwal-'Aliyyul-'Azim.",
    translation: {
      en: "I seek refuge in Allah from Satan, the accursed. Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
      bs: "Utječem se Allahu od prokletog šejtana. Allah je – nema boga osim Njega – Živi i Vječni! Ne obuzima Ga ni drijemež ni san! Njegovo je ono što je na nebesima i ono što je na Zemlji! Ko se može pred Njim zauzimati za nekoga bez dopuštenja Njegova?! On zna šta je bilo i prije njih i šta će biti poslije njih, a od onoga što On zna – drugi znaju samo onoliko koliko On želi. Njegova Kursija obuhvaća i nebesa i Zemlju i Njemu ne dojadi održavanje njihovo; On je Svevišnji, Veličanstveni!",
    },
    reference: "Qur'an 2:255",
  },
  {
    id: "hisnul_muslim_76",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (2): Al-Ikhlas, Al-Falaq and An-Nas",
      bs: "Jutro i večer (2): Ihlas, Felek i Nas",
    },
    description: {
      en: "Recite each surah three times in the morning and three times in the evening; it will suffice you against everything.",
      bs: "Svaku suru proučiti tri puta ujutro i tri puta navečer; to će te zaštititi od svega.",
    },
    arabic:
      "بسم الله الرحمن الرحيم ﴿قُلْ هُوَ اللَّهُ أَحَدٌ* اللَّهُ الصَّمَدُ* لَمْ يَلِدْ وَلَمْ يُولَدْ* وَلَمْ يَكُن لَّهُ كُفُواً أَحَدٌ﴾. بسم الله الرحمن الرحيم ﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ* مِن شَرِّ مَا خَلَقَ* وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ* وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ* وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾. بسم الله الرحمن الرحيم ﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ* مَلِكِ النَّاسِ* إِلَهِ النَّاسِ* مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ* الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ* مِنَ الْجِنَّةِ وَالنَّاسِ﴾",
    transliteration:
      "Bismillahir-Rahmanir-Rahim. Qul huwallahu ahad. Allahus-samad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad. Bismillahir-Rahmanir-Rahim. Qul a'udhu bi-rabbil-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharrin-naffathati fil-'uqad. Wa min sharri hasidin idha hasad. Bismillahir-Rahmanir-Rahim. Qul a'udhu bi-rabbin-nas. Malikin-nas. Ilahin-nas. Min sharril-waswasil-khannas. Alladhi yuwaswisu fi sudurin-nas. Minal-jinnati wan-nas.",
    translation: {
      en: "In the name of Allah, the Entirely Merciful, the Especially Merciful. Say, \"He is Allah, [who is] One, Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent.\" In the name of Allah, the Entirely Merciful, the Especially Merciful. Say, \"I seek refuge in the Lord of daybreak, from the evil of that which He created, and from the evil of darkness when it settles, and from the evil of the blowers in knots, and from the evil of an envier when he envies.\" In the name of Allah, the Entirely Merciful, the Especially Merciful. Say, \"I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind, from the evil of the retreating whisperer, who whispers [evil] into the breasts of mankind, from among the jinn and mankind.\"",
      bs: "U ime Allaha, Milostivog, Samilosnog! Reci: \"On je Allah – Jedan! Allah je Utočište svakom! Nije rodio i rođen nije, i niko Mu ravan nije!\" U ime Allaha, Milostivog, Samilosnog! Reci: \"Utječem se Gospodaru svitanja od zla onoga što On stvara, i od zla mrkle noći kada razastre tmine, i od zla smutljivca kad smutnje sije, i od zla zavidljivca kad zavist ne krije!\" U ime Allaha, Milostivog, Samilosnog! Reci: \"Utječem se Gospodaru ljudi, Vladaru ljudi, Bogu ljudi, od zla šejtana napasnika, koji zle misli unosi u srca ljudi – od džina i od ljudi!\"",
    },
    reference: "Qur'an 112-114; Abu Dawud 5082; At-Tirmidhi 3575",
  },
  {
    id: "hisnul_muslim_77",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (3): We Have Entered the Morning (Asbahna)",
      bs: "Jutro i večer (3): Jutro smo dočekali (Asbahna)",
    },
    description: {
      en: "In the evening say instead: \"Amsayna wa amsal-mulku lillah...\" (We have entered the evening...) and \"...khayra ma fi hadhihil-laylati wa khayra ma ba'daha...\" (the good of this night and the good of what follows it...).",
      bs: "Navečer se umjesto toga kaže: \"Emsejna ve emsel-mulku lillah...\" (Noć smo dočekali...) i \"...hajre ma fi hazihil-lejleti ve hajre ma ba'deha...\" (dobro ove noći i dobro poslije nje...).",
    },
    arabic:
      "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيرَ مَا بَعْدَهُ ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
    transliteration:
      "Asbahna wa asbahal-mulku lillah, wal-hamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir. Rabbi as'aluka khayra ma fi hadhal-yawmi wa khayra ma ba'dah, wa a'udhu bika min sharri ma fi hadhal-yawmi wa sharri ma ba'dah. Rabbi a'udhu bika minal-kasali wa su'il-kibar. Rabbi a'udhu bika min 'adhabin fin-nari wa 'adhabin fil-qabr.",
    translation: {
      en: "We have reached the morning and at this very time all sovereignty belongs to Allah, and all praise is for Allah. None has the right to be worshipped except Allah, alone, without partner; to Him belongs all sovereignty and praise, and He has power over all things. My Lord, I ask You for the good of this day and the good of what follows it, and I seek refuge in You from the evil of this day and the evil of what follows it. My Lord, I seek refuge in You from laziness and the misery of old age. My Lord, I seek refuge in You from punishment in the Fire and punishment in the grave.",
      bs: "Jutro smo dočekali i sva vlast pripada Allahu. Hvala Allahu, nema boga osim Allaha, Jedinog, Koji druga nema. Njemu pripada sva vlast i Njemu pripada sva hvala i On nad svime ima moć. Gospodaru, molim Te za dobro ovoga dana i dobro poslije njega, a utječem Ti se od zla ovoga dana i zla poslije njega. Gospodaru, utječem Ti se od lijenosti i teške starosti. Gospodaru, utječem Ti se od patnje u Vatri i patnje u kaburu.",
    },
    reference: "Muslim 2723",
  },
  {
    id: "hisnul_muslim_78",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (4): By You We Enter the Morning",
      bs: "Jutro i večer (4): Tvojom voljom jutro dočekujemo",
    },
    description: {
      en: "In the evening say instead: \"Allahumma bika amsayna, wa bika asbahna, wa bika nahya, wa bika namutu, wa ilaykal-masir\" (O Allah, by Your leave we have reached the evening and by Your leave we have reached the morning, by Your leave we live and die, and to You is the final return).",
      bs: "Navečer se umjesto toga kaže: \"Allahumme bike emsejna, ve bike asbahna, ve bike nahja, ve bike nemutu, ve ilejkel-masir\" (Allahu, Tvojom voljom dočekasmo večer i Tvojom voljom dočekasmo jutro, Tvojom voljom živimo, Tvojom voljom umiremo i Tebi se vraćamo).",
    },
    arabic:
      "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا ، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
    transliteration:
      "Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namutu, wa ilaykan-nushur.",
    translation: {
      en: "O Allah, by Your leave we have reached the morning and by Your leave we have reached the evening, by Your leave we live and die, and to You is the resurrection.",
      bs: "Allahu, Tvojom voljom dočekasmo jutro i Tvojom voljom dočekasmo večer, Tvojom voljom živimo, Tvojom voljom umiremo i Tebi ćemo biti proživljeni.",
    },
    reference: "Abu Dawud 5068",
  },
  {
    id: "hisnul_muslim_79",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (5): Master Supplication for Forgiveness",
      bs: "Jutro i večer (5): Sejjidul-istigfar",
    },
    description: {
      en: "Whoever says it during the day with firm faith and dies that day before evening will be among the people of Paradise; and whoever says it at night with firm faith and dies before morning will be among the people of Paradise.",
      bs: "Ko je izgovori danju čvrsto vjerujući u nju i umre tog dana prije večeri, bit će od stanovnika Dženneta; i ko je izgovori noću čvrsto vjerujući u nju i umre prije jutra, bit će od stanovnika Dženneta.",
    },
    arabic:
      "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنوبَ إِلاَّ أَنْتَ.",
    transliteration:
      "Allahumma anta rabbee la ilaha illa ant, khalaqtanee wa-ana 'abduk, wa-ana 'ala 'ahdika wawa'dika mas-tata't, a'oothu bika min sharri ma sana't, aboo-o laka bini'matika 'alay, wa-aboo-o bithanbee, faghfir lee fa-innahu la yaghfiruth-thunooba illa ant.",
    translation: {
      en: "O Allah, You are my Lord, none has the right to be worshipped except You. You created me and I am Your servant, and I abide by Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favour upon me and I acknowledge my sin, so forgive me, for verily none can forgive sins except You.",
      bs: "Allahu, Ti si moj Gospodar, nema boga osim Tebe. Ti si me stvorio i ja sam Tvoj rob, i ja sam na Tvom zavjetu i obećanju koliko mogu. Utječem Ti se od zla onoga što sam uradio. Priznajem Tvoju blagodat prema meni i priznajem svoj grijeh, pa mi oprosti, jer grijehe ne oprašta niko osim Tebe.",
    },
    reference: "Al-Bukhari 6306",
  },
  {
    id: "hisnul_muslim_80",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (6): Calling Allah's Creation to Witness",
      bs: "Jutro i večer (6): Pozivanje stvorenja za svjedoke",
    },
    description: {
      en: "Recite four times in the morning and evening. In the evening say \"amsaytu\" (I have reached the evening) instead of \"asbahtu\".",
      bs: "Proučiti četiri puta ujutro i navečer. Navečer se umjesto \"asbahtu\" kaže \"emsejtu\" (omrknuo sam).",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتِكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ، وَأَنَّ مُحَمَّداً عَبْدُكَ وَرَسُولُكَ",
    transliteration:
      "Allahumma innee asbahtu oshhiduk, wa-oshhidu hamalata 'arshik, wamala-ikatak, wajamee'a khalqik, annaka antal-lahu la ilaha illa ant, wahdaka la shareeka lak, wa-anna Muhammadan 'abduka warasooluk.",
    translation: {
      en: "O Allah, verily I have reached the morning and call on You, the bearers of Your Throne, Your angels and all of Your creation to witness that You are Allah, none has the right to be worshipped except You, alone, without partner, and that Muhammad is Your servant and Messenger.",
      bs: "Allahu moj, osvanuo sam i pozivam Tebe za svjedoka, i nosioce Tvoga Arša, i Tvoje meleke, i sva Tvoja stvorenja, da si Ti Allah, nema boga osim Tebe, Jedinog, Koji nema sudruga, i da je Muhammed Tvoj rob i Tvoj poslanik.",
    },
  },
  {
    id: "hisnul_muslim_81",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (7): Every Blessing Is from You",
      bs: "Jutro i večer (7): Svaka blagodat je od Tebe",
    },
    description: {
      en: "Whoever says this in the morning has fulfilled his obligation to give thanks for that day, and whoever says it in the evening has fulfilled it for that night. In the evening say \"amsa\" instead of \"asbaha\".",
      bs: "Ko ovo izgovori ujutro, izvršio je zahvalu za taj dan, a ko izgovori navečer, izvršio je zahvalu za tu noć. Navečer se umjesto \"asbeha\" kaže \"emsa\".",
    },
    arabic:
      "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
    transliteration:
      "Allahumma ma asbaha bee min ni'matin, aw bi-ahadin min khalqik, faminka wahdaka la shareeka lak, falakal-hamdu walakash-shukr.",
    translation: {
      en: "O Allah, whatever blessing I or any of Your creation have risen upon is from You alone, without partner, so for You is all praise and unto You all thanks.",
      bs: "Allahu moj, svaka blagodat koja je osvanula kod mene ili kod nekog od Tvojih stvorenja samo je od Tebe, Ti nemaš sudruga, Tebi pripada hvala i Tebi pripada zahvalnost.",
    },
  },
  {
    id: "hisnul_muslim_82",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (8): Grant Me Well-Being",
      bs: "Jutro i večer (8): Podari mi zdravlje",
    },
    description: {
      en: "Recite three times in the morning and three times in the evening.",
      bs: "Proučiti tri puta ujutro i tri puta navečer.",
    },
    arabic:
      "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ القَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ",
    transliteration:
      "Allahumma 'afinee fee badanee, allahumma 'afinee fee sam'ee, allahumma 'afinee fee basaree, la ilaha illa ant. Allahumma innee a'oothu bika minal-kufr, walfaqr, wa-a'oothu bika min 'athabil-qabr, la ilaha illa ant.",
    translation: {
      en: "O Allah, grant my body health. O Allah, grant my hearing health. O Allah, grant my sight health. None has the right to be worshipped except You. O Allah, I seek refuge in You from disbelief and poverty, and I seek refuge in You from the punishment of the grave. None has the right to be worshipped except You.",
      bs: "Allahu moj, podari zdravlje mom tijelu, Allahu moj, podari zdravlje mom sluhu, Allahu moj, podari zdravlje mom vidu, nema boga osim Tebe. Allahu moj, utječem Ti se od nevjerstva i siromaštva, i utječem Ti se od kaburske kazne, nema boga osim Tebe.",
    },
    reference: "Abu Dawud 5090",
  },
  {
    id: "hisnul_muslim_83",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (9): Allah Is Sufficient for Me",
      bs: "Jutro i večer (9): Dovoljan mi je Allah",
    },
    description: {
      en: "Recite seven times in the morning and seven times in the evening; Allah will suffice you in whatever concerns you.",
      bs: "Proučiti sedam puta ujutro i sedam puta navečer; Allah će te osloboditi briga koje te muče.",
    },
    arabic:
      "حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيهِ تَوَكَّلتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    transliteration:
      "Hasbiyal-lahu la ilaha illa huwa, 'alayhi tawakkalt, wahuwa rabbul-'arshil-'atheem.",
    translation: {
      en: "Allah is sufficient for me, none has the right to be worshipped except Him, upon Him I rely and He is Lord of the Mighty Throne.",
      bs: "Dovoljan mi je Allah, nema boga osim Njega, na Njega se oslanjam i On je Gospodar Arša veličanstvenog.",
    },
  },
  {
    id: "hisnul_muslim_84",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (10): Pardon, Well-Being and Protection",
      bs: "Jutro i večer (10): Oprost, zdravlje i zaštita",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ: فِي دِينِي وَدُنْيَايَ وَأَهْلِي، وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَينِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.",
    transliteration:
      "Allahumma innee as-alukal-'afwa wal'afiyah, fid-dunya wal-akhirah, allahumma innee as-alukal-'afwa wal'afiyah fee deenee, wadunyaya wa-ahlee, wamalee, allahummas-tur 'awratee, wa-amin raw'atee, allahummah-fathnee min bayni yaday, wamin khalfee, wa'an yameenee, wa'an shimalee, wamin fawqee, wa-a'oothu bi'athamatika an oghtala min tahtee.",
    translation: {
      en: "O Allah, I ask You for pardon and well-being in this life and the next. O Allah, I ask You for pardon and well-being in my religious and worldly affairs, and my family and my wealth. O Allah, veil my weaknesses and set at ease my dismay. O Allah, preserve me from the front and from behind and on my right and on my left and from above, and I seek refuge in Your magnificence lest I be taken unawares from beneath me.",
      bs: "O Allahu, molim Te za oprost i zdravlje na dunjaluku i na ahiretu. O Allahu, molim Te za oprost i zdravlje u mojoj vjeri i mom dunjaluku, mojoj porodici i mom imetku. O Allahu, pokrij moje sramote i umiri moje strahove. O Allahu, sačuvaj me s prednje strane, i sa zadnje strane, i s desne strane, i s lijeve strane, i odozgo, i utječem se Tvojoj veličini da ne budem iznenada uništen odozdo.",
    },
    reference: "Abu Dawud 5074; Ibn Majah 3871",
  },
  {
    id: "hisnul_muslim_85",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (11): Knower of the Unseen and the Seen",
      bs: "Jutro i večer (11): Poznavaoče skrivenog i javnog",
    },
    arabic:
      "اللَّهُمَّ عَالِمَ الغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطانِ وَشَرَكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.",
    transliteration:
      "Allahumma 'alimal-ghaybi washshahadah, fatiras-samawati wal-ard, rabba kulli shayin wamaleekah, ashhadu an la ilaha illa ant, a'oothu bika min sharri nafsee wamin sharrish-shaytani washirkih, waan aqtarifa 'ala nafsee soo-an aw ajurrahu ila muslim.",
    translation: {
      en: "O Allah, Knower of the unseen and the seen, Creator of the heavens and the earth, Lord and Sovereign of all things, I bear witness that none has the right to be worshipped except You. I seek refuge in You from the evil of my soul and from the evil of Satan and his shirk, and from committing wrong against my soul or bringing it upon another Muslim.",
      bs: "O Allahu, Poznavaoče nevidljivog i vidljivog, Stvoritelju nebesa i Zemlje, Gospodaru i Vladaru svega, svjedočim da nema boga osim Tebe. Utječem Ti se od zla svoje duše, i od zla šejtana i njegovog širka, i od toga da sebi učinim zlo ili ga nanesem nekom muslimanu.",
    },
    description: {
      en: "Shirk: associating partners with Allah in what is exclusively His. Recite in the morning, in the evening and when going to bed.",
      bs: "Širk: pripisivanje Allahu druga u onome što pripada samo Njemu. Uči se ujutro, navečer i pri odlasku na spavanje.",
    },
    reference: "At-Tirmidhi 3392",
  },
  {
    id: "hisnul_muslim_86",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (12): In the Name of Allah, Nothing Can Harm",
      bs: "Jutro i večer (12): S Allahovim imenom ništa ne šteti",
    },
    description: {
      en: "Recite three times in the morning and three times in the evening; nothing will harm you.",
      bs: "Proučiti tri puta ujutro i tri puta navečer; ništa ti neće naškoditi.",
    },
    arabic:
      "بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلاَ فِي السّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    transliteration:
      "Bismil-lahil-lathee la yadurru ma'as-mihi shay-on fil-ardi wala fis-sama-i wahuwas-samee'ul-'aleem.",
    translation: {
      en: "In the name of Allah, with whose name nothing on earth or in the heavens can cause harm, and He is the All-Hearing, the All-Knowing.",
      bs: "U ime Allaha, s čijim imenom ništa ne može naškoditi na Zemlji niti na nebu, i On sve čuje i sve zna.",
    },
    reference: "Abu Dawud 5088; At-Tirmidhi 3388",
  },
  {
    id: "hisnul_muslim_87",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (13): Pleased with Allah as Lord",
      bs: "Jutro i večer (13): Zadovoljan sam Allahom kao Gospodarom",
    },
    description: {
      en: "Recite three times in the morning and three times in the evening; Allah has promised to please whoever says it on the Day of Resurrection.",
      bs: "Proučiti tri puta ujutro i tri puta navečer; Allah je obećao da će zadovoljiti onoga ko ovo izgovara na Sudnjem danu.",
    },
    arabic:
      "رَضِيتُ بِاللَّهِ رَبَّاً، وَبِالْإِسْلاَمِ دِيناً، وَبِمُحَمَّدٍ صلى الله عليه وسلم نَبِيّاً",
    transliteration:
      "Radeetu billahi rabban, wabil-islami deenan, wabiMuhammadin sallallahu 'alayhi wa sallama nabiyya.",
    translation: {
      en: "I am pleased with Allah as my Lord, with Islam as my religion and with Muhammad (peace and blessings be upon him) as my Prophet.",
      bs: "Zadovoljan sam da mi je Allah Gospodar, islam vjera, a Muhammed, s.a.v.s., Vjerovjesnik.",
    },
  },
  {
    id: "hisnul_muslim_88",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (14): O Ever-Living, O Self-Sustaining",
      bs: "Jutro i večer (14): O Živi, o Vječni",
    },
    arabic:
      "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغيثُ أَصْلِحْ لِي شَأْنِيَ كُلَّهُ وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.",
    transliteration:
      "Ya hayyu ya qayyoom, birahmatika astagheeth, aslih lee sha'nee kullah, wala takilnee ila nafsee tarfata 'ayn.",
    translation: {
      en: "O Ever-Living, O Self-Sustaining, by Your mercy I seek assistance; set right all of my affairs for me and do not leave me to myself, even for the blink of an eye.",
      bs: "O Živi, o Vječni, Tvojom milošću tražim pomoć, popravi mi svako moje stanje i ne prepusti me samom sebi ni koliko je treptaj oka.",
    },
  },
  {
    id: "hisnul_muslim_89",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (15): The Good of This Day",
      bs: "Jutro i večer (15): Dobro ovoga dana",
    },
    description: {
      en: "In the evening say instead: \"Amsayna wa amsal-mulku lillahi rabbil-'alamin. Allahumma inni as'aluka khayra hadhihil-laylah: fathaha, wa nasraha, wa nuraha, wa barakataha, wa hudaha, wa a'udhu bika min sharri ma fiha wa sharri ma ba'daha.\"",
      bs: "Navečer se umjesto toga kaže: \"Emsejna ve emsel-mulku lillahi rabbil-'alemin. Allahumme inni es'eluke hajre hazihil-lejleh: fethaha, ve nasraha, ve nuraha, ve bereketeha, ve hudaha, ve e'uzu bike min šerri ma fiha ve šerri ma ba'deha.\"",
    },
    arabic:
      "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُـمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ:فَتْحَهُ، وَنَصْرَهُ، وَنورَهُ، وَبَرَكَتَهُ، وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ",
    transliteration:
      "Asbahna wa-asbahal-mulku lillahi rabbil-'alameen, allahumma innee as-aluka khayra hathal-yawm, fat-hahu, wanasrahu, wanoorahu, wabarakatahu, wahudahu, wa-a'oothu bika min sharri ma feehi, washarri ma ba'dah.",
    translation: {
      en: "We have reached the morning and at this very time all sovereignty belongs to Allah, Lord of the worlds. O Allah, I ask You for the good of this day: its triumph, its victory, its light, its blessings and its guidance, and I seek refuge in You from the evil of what is in it and the evil of what follows it.",
      bs: "Jutro smo dočekali i sva vlast pripada Allahu, Gospodaru svjetova. Allahu moj, molim Te za dobro ovoga dana: njegovo otvaranje, njegovu pobjedu, njegovo svjetlo, njegov bereket i njegovu uputu, a utječem Ti se od zla onoga što je u njemu i zla onoga što dolazi poslije njega.",
    },
  },
  {
    id: "hisnul_muslim_90",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (16): Upon the Fitrah of Islam",
      bs: "Jutro i večer (16): Na prirodnoj vjeri islamu",
    },
    description: {
      en: "Fitrah: the natural disposition of Islam, the way of Ibrahim. In the evening say \"amsayna\" instead of \"asbahna\".",
      bs: "Fitra: prirodna vjera islam, put Ibrahima, a.s. Navečer se umjesto \"asbahna\" kaže \"emsejna\".",
    },
    arabic:
      "أَصْبَحْنا عَلَى فِطْرَةِ الْإِسْلاَمِ، وَعَلَى كَلِمَةِ الْإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صلى الله عليه وسلم، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ، حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ الْمُشرِكِينَ",
    transliteration:
      "Asbahna 'ala fitratil-islam, wa'ala kalimatil-ikhlas, wa'ala deeni nabiyyina Muhammad wa'ala millati abeena Ibraheem, haneefan musliman wama kana minal-mushrikeen.",
    translation: {
      en: "We rise upon the fitrah of Islam, and the word of pure faith, and upon the religion of our Prophet Muhammad and the religion of our forefather Ibrahim, who was upright, a Muslim, and was not of those who associate others with Allah.",
      bs: "Osvanuli smo na prirodnoj vjeri islamu, na riječi iskrenosti (tevhida), na vjeri našeg Vjerovjesnika Muhammeda, s.a.v.s., i na vjeri našeg oca Ibrahima, koji je bio pravovjeran musliman i nije bio od mušrika.",
    },
  },
  {
    id: "hisnul_muslim_91",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (17): SubhanAllahi wa Bihamdihi (100x)",
      bs: "Jutro i večer (17): Subhanallahi ve bihamdihi (100 puta)",
    },
    description: {
      en: "Recite one hundred times in the morning and in the evening. No one will come on the Day of Resurrection with anything better, except someone who said the same or more.",
      bs: "Proučiti sto puta ujutro i navečer. Niko na Sudnjem danu neće doći s nečim boljim, osim onaj ko je rekao isto ili više.",
    },
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    transliteration: "Subhanal-lahi wabihamdih.",
    translation: {
      en: "How perfect Allah is, and I praise Him.",
      bs: "Slavljen neka je Allah i hvala Njemu.",
    },
    reference: "Muslim 2692",
  },
  {
    id: "hisnul_muslim_92",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (18): La Ilaha Illallah (10x)",
      bs: "Jutro i večer (18): La ilahe illallah (10 puta)",
    },
    description: {
      en: "Recite ten times, or once when feeling lazy.",
      bs: "Proučiti deset puta, ili jednom kada je čovjek lijen.",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration:
      "La ilaha illal-lah, wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa 'ala kulli shay-in qadeer.",
    translation: {
      en: "None has the right to be worshipped except Allah, alone, without partner; to Him belongs all sovereignty and praise, and He has power over all things.",
      bs: "Nema boga osim Allaha, Jedinog, Koji nema sudruga. Njemu pripada vlast i Njemu pripada hvala, i On nad svime ima moć.",
    },
  },
  {
    id: "hisnul_muslim_93",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (19): La Ilaha Illallah (100x)",
      bs: "Jutro i večer (19): La ilahe illallah (100 puta)",
    },
    description: {
      en: "Recite one hundred times every day, in the morning. It equals freeing ten slaves; one hundred good deeds are recorded, one hundred sins are erased, and it is a protection from Satan for that day until evening.",
      bs: "Proučiti sto puta svaki dan, ujutro. To je kao oslobađanje deset robova; upisuje se sto dobrih djela, briše sto grijeha i to je zaštita od šejtana tog dana do večeri.",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ، وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration:
      "La ilaha illal-lah, wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa 'ala kulli shay-in qadeer.",
    translation: {
      en: "None has the right to be worshipped except Allah, alone, without partner; to Him belongs all sovereignty and praise, and He has power over all things.",
      bs: "Nema boga osim Allaha, Jedinog, Koji nema sudruga. Njemu pripada vlast i Njemu pripada hvala, i On nad svime ima moć.",
    },
    reference: "Al-Bukhari 6403; Muslim 2691",
  },
  {
    id: "hisnul_muslim_94",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (20): Glory by the Number of His Creation",
      bs: "Jutro i večer (20): Slava koliko je Njegovih stvorenja",
    },
    description: {
      en: "Recite three times in the morning.",
      bs: "Proučiti tri puta ujutro.",
    },
    arabic:
      "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ",
    transliteration:
      "Subhanal-lahi wabihamdih, 'adada khalqihi warida nafsih, wazinata 'arshih, wamidada kalimatih.",
    translation: {
      en: "How perfect Allah is, and I praise Him, by the number of His creation, by His pleasure, by the weight of His Throne and by the ink of His words.",
      bs: "Slavljen neka je Allah i hvala Njemu, onoliko koliko je Njegovih stvorenja, koliko je On zadovoljan, koliko je težak Njegov Arš i koliko ima tinte Njegovih riječi.",
    },
    reference: "Muslim 2726",
  },
  {
    id: "hisnul_muslim_95",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (21): Beneficial Knowledge and Good Provision",
      bs: "Jutro i večer (21): Korisno znanje i lijepa opskrba",
    },
    description: {
      en: "Recite in the morning (after the Fajr prayer).",
      bs: "Uči se ujutro (nakon sabah-namaza).",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً، وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً",
    transliteration:
      "Allahumma innee as-aluka 'ilman nafi'an, warizqan tayyiban, wa'amalan mutaqabbalan.",
    translation: {
      en: "O Allah, I ask You for knowledge which is beneficial, sustenance which is good, and deeds which are accepted.",
      bs: "Allahu moj, molim Te za korisno znanje, lijepu (dozvoljenu) opskrbu i primljeno djelo.",
    },
    reference: "Ibn Majah 925",
  },
  {
    id: "hisnul_muslim_96",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (22): Seeking Forgiveness (100x a Day)",
      bs: "Jutro i večer (22): Traženje oprosta (100 puta dnevno)",
    },
    description: {
      en: "Recite one hundred times a day.",
      bs: "Proučiti sto puta dnevno.",
    },
    arabic:
      "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
    transliteration: "Astaghfirullaha wa atubu ilayh.",
    translation: {
      en: "I seek Allah's forgiveness and I turn to Him in repentance.",
      bs: "Tražim oprost od Allaha i Njemu se kajem.",
    },
    reference: "Al-Bukhari 6307; Muslim 2702",
  },
  {
    id: "hisnul_muslim_97",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (23): Refuge in Allah's Perfect Words",
      bs: "Jutro i večer (23): Utočište u Allahovim savršenim riječima",
    },
    description: {
      en: "Recite three times in the evening.",
      bs: "Proučiti tri puta navečer.",
    },
    arabic:
      "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration: "A'oothu bikalimatil-lahit-tammati min sharri ma khalaq.",
    translation: {
      en: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
      bs: "Utječem se savršenim Allahovim riječima od zla onoga što je On stvorio.",
    },
  },
  {
    id: "hisnul_muslim_98",
    category: "hisnul_muslim",
    title: {
      en: "Morning & Evening (24): Blessings upon the Prophet (10x)",
      bs: "Jutro i večer (24): Salavat na Poslanika (10 puta)",
    },
    description: {
      en: "Recite ten times in the morning and ten times in the evening; whoever does so will receive the Prophet's intercession on the Day of Resurrection.",
      bs: "Proučiti deset puta ujutro i deset puta navečer; ko to čini, zaslužit će Poslanikov šefat na Sudnjem danu.",
    },
    arabic:
      "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
    transliteration: "Allahumma salli wa sallim 'ala Nabiyyina Muhammad.",
    translation: {
      en: "O Allah, send prayers and peace upon our Prophet Muhammad.",
      bs: "Allahu moj, donesi salavat i selam na našeg Vjerovjesnika Muhammeda.",
    },
  },
  {
    id: "hisnul_muslim_99",
    category: "hisnul_muslim",
    title: {
      en: "Before Sleeping (1): Blowing into the Palms with the Three Quls",
      bs: "Prije spavanja (1): Puhanje u dlanove uz tri kul-sure",
    },
    arabic:
      "يَجْمَعُ كَفَّيْهِ ثُمَّ يَنْفُثُ فِيهِمَا فَيَقْرَأُ فِيهِمَا:بسم الله الرحمن الرحيم ﴿قُلْ هُوَ اللَّهُ أَحَدٌ * اللَّهُ الصَّمَدُ* لَمْ يَلِدْ وَلَمْ يُولَدْ* وَلَمْ يَكُن لَّهُ كُفُواً أَحَدٌ﴾. بسم الله الرحمن الرحيم ﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ* مِن شَرِّ مَا خَلَقَ* وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ* وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ* وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾. بسم الله الرحمن الرحيم ﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ* مَلِكِ النَّاسِ* إِلَهِ النَّاسِ* مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ* الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ* مِنَ الْجِنَّةِ وَالنَّاسِ﴾ ثُمَّ يَمْسَحُ بِهِمَا مَا اسْتَطَاعَ مِنْ جَسَدِهِ يَبْدَأُ بِهِمَا عَلَى رَأْسِهِ وَوَجْهِهِ وَمَا أَقبَلَ مِنْ جَسَدِهِ يفعلُ ذلك ثلاثَ مرَّاتٍ.",
    transliteration: "",
    translation: {
      en: "When retiring to his bed every night, the Prophet ﷺ would hold his palms together, blow lightly into them, recite Surah Al-Ikhlas, Surah Al-Falaq and Surah An-Nas, and then wipe over as much of his body as he could with his hands, beginning with his head, face and the front of his body. He would do this three times.",
      bs: "Kada bi svake noći lijegao u postelju, Poslanik ﷺ bi sastavio dlanove, lagano puhnuo u njih, proučio sure Ihlas, Felek i Nas, a zatim bi rukama potrao tijelo koliko je mogao, počevši od glave, lica i prednjeg dijela tijela. To bi učinio tri puta.",
    },
    reference: "Al-Bukhari 5017",
  },
  {
    id: "hisnul_muslim_100",
    category: "hisnul_muslim",
    title: {
      en: "Before Sleeping (2): Ayat al-Kursi",
      bs: "Prije spavanja (2): Ajetul-kursija",
    },
    description: {
      en: "Whoever recites it when going to bed will have a guardian from Allah, and no devil will approach him until morning.",
      bs: "Ko ga prouči kada liježe u postelju, Allah će mu odrediti čuvara i nijedan šejtan mu se neće približiti do jutra.",
    },
    arabic:
      "﴿اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْـــــــــــدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾.",
    transliteration:
      "Allahu la ilaha illa Huwal-Hayyul-Qayyum. La ta'khudhuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-ard. Man dhal-ladhi yashfa'u 'indahu illa bi-idhnih. Ya'lamu ma bayna aydihim wa ma khalfahum. Wa la yuhituna bi-shay'im-min 'ilmihi illa bi-ma sha'. Wasi'a kursiyyuhus-samawati wal-ard, wa la ya'uduhu hifzuhuma, wa Huwal-'Aliyyul-'Azim.",
    translation: {
      en: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
      bs: "Allah je – nema boga osim Njega – Živi i Vječni! Ne obuzima Ga ni drijemež ni san! Njegovo je ono što je na nebesima i ono što je na Zemlji! Ko se može pred Njim zauzimati za nekoga bez dopuštenja Njegova?! On zna šta je bilo i prije njih i šta će biti poslije njih, a od onoga što On zna – drugi znaju samo onoliko koliko On želi. Njegova Kursija obuhvaća i nebesa i Zemlju i Njemu ne dojadi održavanje njihovo; On je Svevišnji, Veličanstveni!",
    },
    reference: "Qur'an 2:255; Al-Bukhari 2311",
  },
  {
    id: "hisnul_muslim_101",
    category: "hisnul_muslim",
    title: {
      en: "Before Sleeping (3): Last Two Verses of Al-Baqarah",
      bs: "Prije spavanja (3): Posljednja dva ajeta sure El-Bekare",
    },
    description: {
      en: "Whoever recites these two verses at night, they will suffice him.",
      bs: "Ko prouči ova dva ajeta noću, bit će mu dovoljna.",
    },
    arabic:
      "﴿آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ كُلٌّ آمَنَ بِاللَّهِ وَمَلآئِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لاَ نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ وَقَالُواْ سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ* لاَ يُكَلِّفُ اللَّهُ نَفْساً إِلاَّ وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لاَ تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلاَ تَحْمِلْ عَلَيْنَا إِصْراً كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا رَبَّنَا وَلاَ تُحَمِّلْنَا مَا لاَ طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَآ أَنتَ مَوْلاَنَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ﴾.",
    transliteration:
      "Amanar-rasulu bima unzila ilayhi mir-rabbihi wal-mu'minun. Kullun amana billahi wa mala'ikatihi wa kutubihi wa rusulih. La nufarriqu bayna ahadim-mir-rusulih. Wa qalu sami'na wa ata'na ghufranaka rabbana wa ilaykal-masir. La yukallifullahu nafsan illa wus'aha. Laha ma kasabat wa 'alayha maktasabat. Rabbana la tu'akhidhna in nasina aw akhta'na. Rabbana wa la tahmil 'alayna isran kama hamaltahu 'alal-ladhina min qablina. Rabbana wa la tuhammilna ma la taqata lana bih. Wa'fu 'anna waghfir lana warhamna. Anta mawlana fansurna 'alal-qawmil-kafirin.",
    translation: {
      en: "The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah and His angels and His books and His messengers, [saying], \"We make no distinction between any of His messengers.\" And they say, \"We hear and we obey. [We seek] Your forgiveness, our Lord, and to You is the [final] destination.\" Allah does not charge a soul except [with that within] its capacity. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people.",
      bs: "Poslanik vjeruje u ono što mu se objavljuje od Gospodara njegova, i vjernici - svaki vjeruje u Allaha, i meleke Njegove, i knjige Njegove, i poslanike Njegove: 'Mi ne izdvajamo nijednog od poslanika Njegovih.' I oni govore: 'Čujemo i pokoravamo se; oprosti nam, Gospodaru naš; Tebi ćemo se vratiti.' Allah nikoga ne opterećuje preko mogućnosti njegovih: u njegovu korist je dobro koje učini, a na njegovu štetu zlo koje uradi. Gospodaru naš, ne kazni nas ako zaboravimo ili što nehotice učinimo! Gospodaru naš, ne tovari na nas breme kao što si ga tovario na one prije nas! Gospodaru naš, ne stavljaj nam u dužnost ono što ne možemo podnijeti, pobriši grijehe naše i oprosti nam, i smiluj se na nas. Ti si Gospodar naš pa nam pomozi protiv naroda koji ne vjeruje!",
    },
    reference: "Qur'an 2:285-286; Al-Bukhari 5009",
  },
  {
    id: "hisnul_muslim_102",
    category: "hisnul_muslim",
    title: {
      en: "Before Sleeping (4): In Your Name, My Lord, I Lie Down",
      bs: "Prije spavanja (4): U Tvoje ime, Gospodaru moj, liježem",
    },
    description: {
      en: "When one of you gets up from his bed and then returns to it, let him dust it off three times with the edge of his garment, for he does not know what came onto it after him. Then, when he lies down, let him say this supplication.",
      bs: "Kada neko od vas ustane iz postelje pa se ponovo vrati u nju, neka je otrese krajem svoje odjeće tri puta, jer ne zna šta je poslije njega u nju ušlo. A kada legne, neka izgovori ovu dovu.",
    },
    arabic:
      "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِن أَمْسَكْتَ نَفْسِي فارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا، بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ.",
    transliteration:
      "Bismika rabbee wada'tu janbee wabika arfa'uh, fa-in amsakta nafsee farhamha, wa-in arsaltaha fahfathha bima tahfathu bihi 'ibadakas-saliheen.",
    translation: {
      en: "In Your name, my Lord, I lie down, and by You I rise. If You take my soul, then have mercy upon it, and if You return it, then protect it as You protect Your righteous servants.",
      bs: "U Tvoje ime, Gospodaru moj, liježem na bok i s Tobom ustajem. Ako mi uzmeš dušu, smiluj joj se, a ako je vratiš, čuvaj je onim čime čuvaš Svoje dobre robove.",
    },
    reference: "Al-Bukhari 6320; Muslim 2714",
  },
  {
    id: "hisnul_muslim_103",
    category: "hisnul_muslim",
    title: {
      en: "Before Sleeping (5): You Created My Soul",
      bs: "Prije spavanja (5): Ti si stvorio moju dušu",
    },
    arabic:
      "اللَّهُمَّ إِنَّكَ خَلَقْتَ نَفْسِي وَأَنْتَ تَوَفَّاهَا، لَكَ مَمَاتُهَا وَمَحْياهَا، إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا، وَإِنْ أَمَتَّهَا فَاغْفِرْ لَهَا. اللَّهُمَّ إِنِّي أَسْأَلُكَ العَافِيَةَ.",
    transliteration:
      "Allahumma innaka khalaqta nafsee wa-anta tawaffaha, laka mamatuha wamahyaha in ahyaytaha fahfathha, wa-in amattaha faghfir laha. Allahumma innee as-alukal-'afiyah.",
    translation: {
      en: "O Allah, verily You created my soul and You shall take it; to You belong its death and its life. If You keep it alive, then protect it, and if You cause it to die, then forgive it. O Allah, I ask You for well-being.",
      bs: "O Allahu, Ti si stvorio moju dušu i Ti je uzimaš, Tebi pripada njena smrt i njen život. Ako je oživiš, čuvaj je, a ako je usmrtiš, oprosti joj. O Allahu, ja Te molim za zdravlje.",
    },
    reference: "Muslim 2712",
  },
  {
    id: "hisnul_muslim_104",
    category: "hisnul_muslim",
    title: {
      en: "Before Sleeping (6): Protect Me from Your Punishment",
      bs: "Prije spavanja (6): Sačuvaj me Svoje kazne",
    },
    description: {
      en: "The Prophet ﷺ would place his right hand under his cheek and say this three times.",
      bs: "Poslanik ﷺ bi stavio desnu ruku pod obraz i ovo izgovorio tri puta.",
    },
    arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.",
    transliteration: "Allahumma qinee 'athabaka yawma tab'athu 'ibadak.",
    translation: {
      en: "O Allah, protect me from Your punishment on the day Your servants are resurrected.",
      bs: "O Allahu, sačuvaj me od Tvoje kazne na Dan kada proživiš Svoje robove.",
    },
  },
  {
    id: "hisnul_muslim_105",
    category: "hisnul_muslim",
    title: {
      en: "Before Sleeping (7): In Your Name I Die and Live",
      bs: "Prije spavanja (7): U Tvoje ime umirem i oživljavam",
    },
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.",
    transliteration: "Bismikal-lahumma amootu wa-ahya.",
    translation: {
      en: "In Your name, O Allah, I die and I live.",
      bs: "U Tvoje ime, o Allahu, umirem i oživljavam.",
    },
    reference: "Al-Bukhari 6312",
  },
  {
    id: "hisnul_muslim_106",
    category: "hisnul_muslim",
    title: {
      en: "Before Sleeping (8): Tasbih, Tahmid and Takbir (33/33/34)",
      bs: "Prije spavanja (8): Tesbih, tahmid i tekbir (33/33/34)",
    },
    description: {
      en: "Say SubhanAllah thirty-three times, Alhamdulillah thirty-three times and Allahu Akbar thirty-four times; this is better for you than a servant.",
      bs: "Reći Subhanallah trideset tri puta, Elhamdulillah trideset tri puta i Allahu ekber trideset četiri puta; to je bolje za vas od sluge.",
    },
    arabic:
      "سُبْحَانَ اللَّهِ ثلاثاً وثلاثين وَالْحَمْدُ لِلَّهِ ثلاثاً وثلاثين وَاللَّهُ أَكْبَرُ أربعاً وثلاثينَ.",
    transliteration:
      "Subhanal-lah (33 times), Alhamdu lillah (33 times), Allahu akbar (34 times).",
    translation: {
      en: "How perfect Allah is (33 times). All praise is for Allah (33 times). Allah is the Greatest (34 times).",
      bs: "Slavljen neka je Allah (33 puta). Hvala Allahu (33 puta). Allah je najveći (34 puta).",
    },
    reference: "Al-Bukhari 6318; Muslim 2727",
  },
  {
    id: "hisnul_muslim_107",
    category: "hisnul_muslim",
    title: {
      en: "Before Sleeping (9): Lord of the Seven Heavens",
      bs: "Prije spavanja (9): Gospodaru sedam nebesa",
    },
    description: {
      en: "Tawrah: the Book revealed to Musa. Injil: the Book revealed to 'Isa. Furqan: a name of the Qur'an, the Criterion between truth and falsehood. Az-Zahir (the Most High): nothing is above Him. Al-Batin (the Most Near): nothing is closer than Him.",
      bs: "Tevrat: Knjiga objavljena Musau, a.s. Indžil: Knjiga objavljena Isau, a.s. Furkan: jedno od imena Kur'ana, onaj koji razdvaja istinu od neistine. Ez-Zahir (Najviši): iznad Njega nema ničega. El-Batin (Najbliži): niko nije bliži od Njega.",
    },
    arabic:
      "اللَّهُمَّ رَبَّ السَّمَوَاتِ السَّبْعِ وَرَبَّ الأَرْضِ، وَرَبَّ الْعَرْشِ الْعَظِيمِ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ، فَالِقَ الْحَبِّ وَالنَّوَى، وَمُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيلِ، وَالْفُرْقَانِ، أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ. اللَّهُمَّ أَنْتَ الأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ، وَأَنْتَ الآخِرُ فَلَيسَ بَعْدَكَ شَيْءٌ، وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ، وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُونَكَ شَيْءٌ، اقْضِ عَنَّا الدَّيْنَ وَأَغْنِنَا مِنَ الْفَقْرِ.",
    transliteration:
      "Allahumma rabbas-samawatis-sab', wa rabbal-ard, wa rabbal-'arshil-'azim, rabbana wa rabba kulli shay', faliqal-habbi wan-nawa, wa munzilat-tawrati wal-injili wal-furqan, a'udhu bika min sharri kulli shay'in anta akhidhun bi-nasiyatih. Allahumma antal-awwalu falaysa qablaka shay', wa antal-akhiru falaysa ba'daka shay', wa antaz-zahiru falaysa fawqaka shay', wa antal-batinu falaysa dunaka shay', iqdi 'annad-dayna wa aghnina minal-faqr.",
    translation: {
      en: "O Allah, Lord of the seven heavens, Lord of the earth and Lord of the Mighty Throne, our Lord and Lord of all things, Splitter of the seed and the date stone, Revealer of the Tawrah, the Injil and the Furqan, I seek refuge in You from the evil of everything whose forelock You hold. O Allah, You are the First, so there is nothing before You; You are the Last, so there is nothing after You; You are Az-Zahir, so there is nothing above You; and You are Al-Batin, so there is nothing closer than You. Settle our debt for us and free us from poverty.",
      bs: "O Allahu, Gospodaru sedam nebesa, Gospodaru Zemlje i Gospodaru Arša veličanstvenog, Gospodaru naš i Gospodaru svega, Ti Koji činiš da zrno i koštica proklijaju, Objavitelju Tevrata, Indžila i Furkana, utječem Ti se od zla svega što je u Tvojoj vlasti. O Allahu, Ti si Prvi i prije Tebe nema ničega, Ti si Posljednji i poslije Tebe nema ničega, Ti si Najviši i iznad Tebe nema ničega, Ti si Najbliži i bliže od Tebe nema ničega. Izmiri za nas dug i oslobodi nas siromaštva.",
    },
    reference: "Muslim 2713",
  },
  {
    id: "hisnul_muslim_108",
    category: "hisnul_muslim",
    title: {
      en: "Before Sleeping (10): Praise for Food and Shelter",
      bs: "Prije spavanja (10): Hvala za hranu i utočište",
    },
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا، وَكَفَانَا، وَآوَانَا، فَكَمْ مِمَّنْ لاَ كَافِيَ لَهُ وَلاَ مُؤْوِيَ.",
    transliteration:
      "Alhamdu lillahil-lathee at'amana wasaqana, wakafana, wa-awana, fakam mimman la kafiya lahu wala mu'wee.",
    translation: {
      en: "All praise is for Allah, Who fed us and gave us drink, and Who is sufficient for us and has sheltered us, for how many have none to suffice them or shelter them.",
      bs: "Hvala Allahu Koji nas je nahranio i napojio, Koji nam je dovoljan i Koji nam je dao utočište, a koliko je onih koji nemaju nikoga da im bude dovoljan niti da im pruži utočište.",
    },
    reference: "Muslim 2715",
  },
  {
    id: "hisnul_muslim_109",
    category: "hisnul_muslim",
    title: {
      en: "Before Sleeping (11): Knower of the Unseen and the Seen",
      bs: "Prije spavanja (11): Poznavaoče skrivenog i javnog",
    },
    description: {
      en: "Shirk: associating partners with Allah in what is exclusively His.",
      bs: "Širk: pripisivanje Allahu druga u onome što pripada samo Njemu.",
    },
    arabic:
      "اللَّهُمَّ عَالِمَ الغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.",
    transliteration:
      "Allahumma 'alimal-ghaybi washshahadah, fatiras-samawati wal-ard, rabba kulli shayin wamaleekah, ashhadu an la ilaha illa ant, a'oothu bika min sharri nafsee wamin sharrish-shaytani washirkih, wa-an aqtarifa 'ala nafsee soo-an aw ajurrahu ila muslim.",
    translation: {
      en: "O Allah, Knower of the unseen and the seen, Creator of the heavens and the earth, Lord and Sovereign of all things, I bear witness that none has the right to be worshipped except You. I seek refuge in You from the evil of my soul and from the evil of Satan and his shirk, and from committing wrong against my soul or bringing it upon another Muslim.",
      bs: "O Allahu, Poznavaoče nevidljivog i vidljivog, Stvoritelju nebesa i Zemlje, Gospodaru i Vladaru svega, svjedočim da nema boga osim Tebe. Utječem Ti se od zla svoje duše, i od zla šejtana i njegovog širka, i od toga da sebi učinim zlo ili ga nanesem nekom muslimanu.",
    },
    reference: "At-Tirmidhi 3392",
  },
  {
    id: "hisnul_muslim_110",
    category: "hisnul_muslim",
    title: {
      en: "Before Sleeping (12): Reciting As-Sajdah and Al-Mulk",
      bs: "Prije spavanja (12): Učenje sura Es-Sedžda i El-Mulk",
    },
    arabic:
      "يَقْرَأُ ﴿الم﴾ تَنْزِيلَ السَّجْدَةِ، وَتَبَارَكَ الَّذي بِيَدِهِ الْمُلْكُ.",
    transliteration: "",
    translation: {
      en: "The Prophet ﷺ would not sleep until he had recited Surah As-Sajdah (32) and Surah Al-Mulk (67).",
      bs: "Poslanik ﷺ ne bi zaspao dok ne bi proučio suru Es-Sedžda (32) i suru El-Mulk (67).",
    },
    reference: "At-Tirmidhi 2892",
  },
  {
    id: "hisnul_muslim_111",
    category: "hisnul_muslim",
    title: {
      en: "Before Sleeping (13): I Submit Myself to You",
      bs: "Prije spavanja (13): Tebi sam se predao",
    },
    description: {
      en: "Make wudu, lie on your right side and say this as your last words. If you die that night, you will die upon the fitrah (the natural state of Islam).",
      bs: "Uzmi abdest, lezi na desni bok i neka ti ovo budu posljednje riječi. Ako te te noći zadesi smrt, umrijet ćeš na fitri (prirodnoj vjeri islamu).",
    },
    arabic:
      "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لاَ مَلْجَأَ وَلاَ مَنْجَا مِنْكَ إِلاَّ إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ.",
    transliteration:
      "Allahumma aslamtu nafsee ilayk, wafawwadtu amree ilayk, wawajjahtu wajhee ilayk, wa-alja/tu thahree ilayk, raghbatan warahbatan ilayk, la maljaa wala manja minka illa ilayk, amantu bikitabikal-lathee anzalt, wabinabiyyikal-lathee arsalt.",
    translation: {
      en: "O Allah, I submit my soul to You, entrust my affair to You, turn my face towards You and rely completely upon You, out of hope in You and fear of You. There is no refuge and no escape from You except to You. I believe in Your Book which You revealed and in Your Prophet whom You sent.",
      bs: "O Allahu, Tebi sam se predao, Tebi svoj posao prepustio, Tebi svoje lice okrenuo i na Tebe se oslonio, iz želje za Tobom i straha od Tebe. Nema skloništa niti spasa od Tebe osim kod Tebe. Vjerujem u Tvoju Knjigu koju si objavio i u Tvog Vjerovjesnika kojeg si poslao.",
    },
    reference: "Al-Bukhari 247; Muslim 2710",
  },
  {
    id: "hisnul_muslim_1",
    category: "hisnul_muslim",
    title: {
      en: "Upon Waking Up (1): Praise for Life After Sleep",
      bs: "Pri buđenju (1): Hvala za život nakon sna",
    },
    arabic:
      "الْحَمْدُ للَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا، وَإِلَيْهِ النُّشُورُ",
    transliteration:
      "Alhamdu lillahil-lathee ahyana ba'da ma amatana wa-ilayhin-nushoor.",
    translation: {
      en: "All praise is for Allah who gave us life after having taken it from us and unto Him is the resurrection.",
      bs: "Hvala Allahu Koji nas je oživio nakon što nas je usmrtio, i Njemu je proživljenje.",
    },
    reference: "Al-Bukhari 6312",
  },
  {
    id: "hisnul_muslim_2",
    category: "hisnul_muslim",
    title: {
      en: "Upon Waking Up (2): Waking at Night",
      bs: "Pri buđenju (2): Buđenje tokom noći",
    },
    description: {
      en: "Whoever wakes up at night and says this, then says \"Rabbighfir li\" (or makes any supplication), will be answered; and if he makes wudu and prays, his prayer will be accepted.",
      bs: "Ko se probudi noću i izgovori ovo, a zatim kaže \"Rabbigfir li\" (ili uputi bilo koju dovu), bit će mu uslišano; a ako uzme abdest i klanja, namaz mu se prima.",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَريكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، سُبْحَانَ اللَّهِ، وَالْحَمْدُ للَّهِ، وَلاَ إِلَهَ إِلاَّ اللَّهُ، وَاللَّهُ أَكبَرُ، وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ الْعَلِيِّ الْعَظِيمِ، رَبِّ اغْفرْ لِي",
    transliteration:
      "La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa 'ala kulli shay-in qadeer, subhanal-lah, walhamdu lillah, wala ilaha illal-lah wallahu akbar, wala hawla wala quwwata illa billahil-'aliyyil 'atheem. Rabbigh-fir lee",
    translation: {
      en: "None has the right to be worshipped except Allah, alone without associate, to Him belongs sovereignty and praise and He is over all things wholly capable. How perfect Allah is, and all praise is for Allah, and none has the right to be worshipped except Allah, Allah is the Greatest, and there is no might nor power except with Allah, the Most High, the Supreme. My Lord, forgive me.",
      bs: "Nema boga osim Allaha, Jedinog, Koji nema sudruga. Njemu pripada vlast i hvala, i On nad svime ima moć. Slavljen neka je Allah, hvala Allahu, nema boga osim Allaha, Allah je najveći, nema snage ni moći osim kod Allaha, Uzvišenog, Veličanstvenog. Gospodaru moj, oprosti mi.",
    },
    reference: "Al-Bukhari 1154",
  },
  {
    id: "hisnul_muslim_3",
    category: "hisnul_muslim",
    title: {
      en: "Upon Waking Up (3): Praise for Health and Remembrance",
      bs: "Pri buđenju (3): Hvala za zdravlje i zikr",
    },
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي فِي جَسَدِي، وَرَدَّ عَلَيَّ رُوحِي، وَأَذِنَ لي بِذِكْرِهِ",
    transliteration:
      "Alhamdu lillahil-lathee 'afanee fee jasadee waradda 'alayya roohee wa-athina lee bithikrih.",
    translation: {
      en: "All praise is for Allah who granted health to my body, returned my soul to me and permitted me to remember Him.",
      bs: "Hvala Allahu Koji je moje tijelo sačuvao zdravim, vratio mi dušu i dozvolio mi da Ga spominjem.",
    },
    reference: "At-Tirmidhi 3401",
  },
  {
    id: "hisnul_muslim_4",
    category: "hisnul_muslim",
    title: {
      en: "Upon Waking Up (4): Last Verses of Al-Imran (3:190-200)",
      bs: "Pri buđenju (4): Posljednji ajeti sure Ali Imran (3:190-200)",
    },
    arabic:
      "﴿ إِنَّ فِي خَلْقِ السَّمَوَاتِ وَالأَرْضِ وَاخْتِلاَفِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لأُوْلِي الألْبَابِ * الَّذِينَ يَذْكُرُونَ اللَّهَ قِيَاماً وَقُعُوداً وَعَلَىَ جُنُوبِهِمْ وَيَتَفَكَّرُونَ فِي خَلْقِ السَّمَوَاتِ وَالأَرْضِ رَبَّنَا مَا خَلَقْتَ هَذا بَاطِلاً سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ* رَبَّنَا إِنَّكَ مَن تُدْخِلِ النَّارَ فَقَدْ أَخْزَيْتَهُ وَمَا لِلظَّالِمِينَ مِنْ أَنصَارٍ* رَّبَّنَا إِنَّنَا سَمِعْنَا مُنَادِياً يُنَادِي لِلإِيمَانِ أَنْ آمِنُواْ بِرَبِّكُمْ فَآمَنَّا رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الأبْرَارِ* رَبَّنَا وَآتِنَا مَا وَعَدتَّنَا عَلَى رُسُلِكَ وَلاَ تُخْزِنَا يَوْمَ الْقِيَامَةِ إِنَّكَ لاَ تُخْلِفُ الْمِيعَادَ* فَاسْتَجَابَ لَهُمْ رَبُّهُمْ أَنِّي لاَ أُضِيعُ عَمَلَ عَامِلٍ مِّنكُم مِّن ذَكَرٍ أَوْ أُنثَى بَعْضُكُم مِّن بَعْضٍ فَالَّذِينَ هَاجَرُواْ وَأُخْرِجُواْ مِن دِيَارِهِمْ وَأُوذُواْ فِي سَبِيلِي وَقَاتَلُواْ وَقُتِلُواْ لأُكَفِّرَنَّ عَنْهُمْ سَيِّئَاتِهِمْ وَلأُدْخِلَنَّهُمْ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الأَنْهَارُ ثَوَاباً مِّن عِندِ اللَّهِ وَاللَّهُ عِندَهُ حُسْنُ الثَّوَابِ * لاَ يَغُرَّنَّكَ تَقَلُّبُ الَّذِينَ كَفَرُواْ فِي الْبِلاَدِ * مَتَاعٌ قَلِيلٌ ثُمَّ مَأْوَاهُمْ جَهَنَّمُ وَبِئْسَ الْمِهَادُ * لَكِنِ الَّذِينَ اتَّقَوْاْ رَبَّهُمْ لَهُمْ جَنَّاتٌ تَجْرِي مِنْ تَحْتِهَا الأَنْهَارُ خَالِدِينَ فِيهَا نُزُلاً مِّنْ عِندِ اللَّهِ وَمَا عِندَ اللَّهِ خَيْرٌ لِّلأَبْرَارِ * وَإِنَّ مِنْ أَهْلِ الْكِتَابِ لَمَن يُؤْمِنُ بِاللَّهِ وَمَا أُنزِلَ إِلَيْكُمْ وَمَآ أُنزِلَ إِلَيْهِمْ خَاشِعِينَ لِلَّهِ لاَ يَشْتَرُونَ بِآيَاتِ اللَّهِ ثَمَناً قَلِيلاً أُوْلَئِكَ لَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ إِنَّ اللَّهَ سَرِيعُ الْحِسَابِ*يَا أَيُّهَا الَّذِينَ آمَنُواْ اصْبِرُواْ وَصَابِرُواْ وَرَابِطُواْ وَاتَّقُواْ اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ ﴾",
    description: {
      en: "The Prophet ﷺ recited these verses when he woke up at night.",
      bs: "Poslanik ﷺ je učio ove ajete kada bi se noću probudio.",
    },
    transliteration:
      "Inna fi khalqis-samawati wal-ardi wakhtilafil-layli wan-nahari la-ayatil li-ulil-albab. Alladhina yadhkurunallaha qiyaman wa qu'udan wa 'ala junubihim wa yatafakkaruna fi khalqis-samawati wal-ard, rabbana ma khalaqta hadha batilan subhanaka faqina 'adhaban-nar. Rabbana innaka man tudkhilin-nara faqad akhzaytah, wa ma lidh-dhalimina min ansar. Rabbana innana sami'na munadiyan yunadi lil-imani an aminu bi-rabbikum fa-amanna, rabbana faghfir lana dhunubana wa kaffir 'anna sayyi'atina wa tawaffana ma'al-abrar. Rabbana wa atina ma wa'adtana 'ala rusulika wa la tukhzina yawmal-qiyamah, innaka la tukhliful-mi'ad. Fastajaba lahum rabbuhum anni la udi'u 'amala 'amilim-minkum min dhakarin aw untha, ba'dukum mim ba'd, falladhina hajaru wa ukhriju min diyarihim wa udhu fi sabili wa qatalu wa qutilu la-ukaffiranna 'anhum sayyi'atihim wa la-udkhilannahum jannatin tajri min tahtihal-anharu thawabam-min 'indillah, wallahu 'indahu husnuth-thawab. La yaghurrannaka taqallubul-ladhina kafaru fil-bilad. Mata'un qalilun thumma ma'wahum jahannam, wa bi'sal-mihad. Lakinil-ladhinattaqaw rabbahum lahum jannatun tajri min tahtihal-anharu khalidina fiha nuzulam-min 'indillah, wa ma 'indallahi khayrul-lil-abrar. Wa inna min ahlil-kitabi laman yu'minu billahi wa ma unzila ilaykum wa ma unzila ilayhim khashi'ina lillahi la yashtaruna bi-ayatillahi thamanan qalila, ula'ika lahum ajruhum 'inda rabbihim, innallaha sari'ul-hisab. Ya ayyuhal-ladhina amanus-biru wa sabiru wa rabitu wattaqullaha la'allakum tuflihun.",
    translation: {
      en: " 190  Indeed, in the creation of the heavens and the earth and the alternation of the night and the day are signs for those of understanding. 191  Who remember Allah while standing or sitting or [lying] on their sides and give thought to the creation of the heavens and the earth, [saying], Our Lord, You did not create this aimlessly; exalted are You [above such a thing]; then protect us from the punishment of the Fire. 192  Our Lord, indeed whoever You admit to the Fire - You have disgraced him, and for the wrongdoers there are no helpers. 193  Our Lord, indeed we have heard a caller calling to faith, [saying], 'Believe in your Lord,' and we have believed. Our Lord, so forgive us our sins and remove from us our misdeeds and cause us to die with the righteous. 194  Our Lord, and grant us what You promised us through Your messengers and do not disgrace us on the Day of Resurrection. Indeed, You do not fail in [Your] promise. 195  And their Lord responded to them, Never will I allow to be lost the work of [any] worker among you, whether male or female; you are of one another. So those who emigrated or were evicted from their homes or were harmed in My cause or fought or were killed - I will surely remove from them their misdeeds, and I will surely admit them to gardens beneath which rivers flow as reward from Allah, and Allah has with Him the best reward. 196  Be not deceived by the [uninhibited] movement of the disbelievers throughout the land. 197  [It is but] a small enjoyment; then their [final] refuge is Hell, and wretched is the resting place. 198  But those who feared their Lord will have gardens beneath which rivers flow, abiding eternally therein, as accommodation from Allah. And that which is with Allah is best for the righteous. 199  And indeed, among the People of the Scripture are those who believe in Allah and what was revealed to you and what was revealed to them, [being] humbly submissive to Allah. They do not exchange the verses of Allah for a small price.Those will have their reward with their Lord. Indeed, Allah is swift in account. 200  O you who have believed, persevere and endure and remain stationed and fear Allah that you may be successful.",
      bs: "190  Zaista, u stvaranju nebesa i Zemlje i izmjeni noći i dana su znamenja za razumom obdarene,  191  one koji Allaha spominju stojeći, sjedeći i ležeći na bokovima svojim, i razmišljaju o stvaranju nebesa i Zemlje: 'Gospodaru naš, nisi Ti ovo uzalud stvorio; hvaljen Ti budi i sačuvaj nas patnje u Vatri!  192  Gospodaru naš, onoga koga Ti budeš u Vatru bacio, Ti si ga već ponizio, a nasilnicima neće niko pomoći.  193  Gospodaru naš, mi smo čuli glasnika koji poziva u vjeru: 'Vjerujte u Gospodara vašeg!' – pa smo povjerovali. Gospodaru naš, oprosti nam grijehe naše i pređi preko hrđavih postupaka naših, i učini da poslije smrti budemo s onima dobrima.  194  Gospodaru naš, podaj nam ono što si nam obećao po poslanicima Svojim i na Sudnjem danu nas ne osramoti! Ti ćeš, doista, svoja obećanja ispuniti!'  195  I Gospodar njihov im se odazva: 'Nijednom trudbeniku između vas trud njegov neću poništiti, ni muškarcu ni ženi – vi ste jedni od drugih. Onima koji su se iselili i koji su iz zavičaja svoga prognani i koji su na putu Mome mučeni i koji su se borili i poginuli, sigurno ću preko hrđavih djela njihovih preći i sigurno ću ih u džennetske bašče, kroz koje će rijeke teći, uvesti; divna će to nagrada od Allaha biti - a u Allaha je nagrada najljepša.'  196  Neka te nikako ne obmanjuje to što oni koji ne vjeruju po raznim zemljama putuju:  197  kratko uživanje, a poslije – Džehennem će boravište njihovo biti; a užasno je to odmorište!  198  A one koji se Gospodara svoga boje čekaju džennetske bašče kroz koje će rijeke teći, u kojima će vječno ostati – takav će biti doček od Allaha. A ono što je u Allaha bolje je za one koji su dobri.  199  Ima i sljedbenika Knjige koji vjeruju u Allaha i u ono što se objavljuje vama i u ono što je objavljeno njima, ponizni su prema Allahu, ne zamjenjuju Allahove riječi za nešto što malo vrijedi; oni će nagradu od Gospodara svoga dobiti. – Allah, zaista, brzo obračunava.  200  O vjernici, budite strpljivi i izdržljivi, na granicama bdijte i Allaha se bojte, da biste postigli ono što želite.",
    },
    reference: "Qur'an 3:190-200; Al-Bukhari 4569",
  },
  {
    id: "hisnul_muslim_10",
    category: "hisnul_muslim",
    title: {
      en: "Before Entering the Restroom",
      bs: "Prije ulaska u toalet",
    },
    arabic:
      "[بِسْمِ اللَّهِ] اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبائِث.",
    transliteration:
      "(Bismil-lah) allahumma innee a'oothu bika minal-khubthi wal-khaba-ith.",
    translation: {
      en: "In the name of Allah. O Allah, I seek refuge in You from the male and female devils (from all evil and evil-doers).",
      bs: "U ime Allaha. O Allahu, utječem Ti se od šejtana muških i ženskih (od svakog zla i zlotvora).",
    },
    reference: "Al-Bukhari 142; Muslim 375",
  },
  {
    id: "hisnul_muslim_11",
    category: "hisnul_muslim",
    title: {
      en: "Upon Leaving the Restroom",
      bs: "Pri izlasku iz toaleta",
    },
    arabic: "غُفْرَانَكَ.",
    transliteration: "Ghufranak.",
    translation: {
      en: "I ask You (Allah) for forgiveness.",
      bs: "Tvoj oprost molim.",
    },
    reference: "Abu Dawud 30; At-Tirmidhi 7",
  },
  {
    id: "hisnul_muslim_12",
    category: "hisnul_muslim",
    title: {
      en: "Before Ablution (Wudu)",
      bs: "Prije uzimanja abdesta",
    },
    arabic: "بِسْمِ اللَّهِ.",
    transliteration: "Bismil-lah.",
    translation: {
      en: "In the name of Allah.",
      bs: "U ime Allaha.",
    },
    reference: "Abu Dawud 101",
  },
  {
    id: "hisnul_muslim_13",
    category: "hisnul_muslim",
    title: {
      en: "After Ablution (1): Testimony of Faith",
      bs: "Nakon abdesta (1): Šehadet",
    },
    description: {
      en: "Whoever performs wudu well and then says this, the eight gates of Paradise are opened for him and he may enter through whichever he wishes.",
      bs: "Ko lijepo uzme abdest i zatim izgovori ovo, otvore mu se osmora džennetska vrata pa ulazi na koja hoće.",
    },
    arabic:
      "أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ",
    transliteration:
      "Ashhadu an la ilaha illal-lahu wahdahu la shareeka lah, wa-ashhadu anna Muhammadan 'abduhu warasooluh.",
    translation: {
      en: "I bear witness that none has the right to be worshipped except Allah, alone, without partner, and I bear witness that Muhammad is His servant and Messenger.",
      bs: "Svjedočim da nema boga osim Allaha, Jedinog, Koji nema sudruga, i svjedočim da je Muhammed Njegov rob i Njegov poslanik.",
    },
    reference: "Muslim 234",
  },
  {
    id: "hisnul_muslim_14",
    category: "hisnul_muslim",
    title: {
      en: "After Ablution (2): Among the Repentant and the Pure",
      bs: "Nakon abdesta (2): Od pokajnika i čistih",
    },
    arabic:
      "اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
    transliteration:
      "Allahummaj-'alnee minat-tawwabeena waj'alnee minal-mutatahhireen.",
    translation: {
      en: "O Allah, make me of those who return to You often in repentance and make me of those who remain clean and pure.",
      bs: "O Allahu, učini me od onih koji se mnogo kaju i učini me od onih koji se čiste.",
    },
    reference: "At-Tirmidhi 55",
  },
  {
    id: "hisnul_muslim_15",
    category: "hisnul_muslim",
    title: {
      en: "After Ablution (3): Glory and Repentance",
      bs: "Nakon abdesta (3): Slavljenje i pokajanje",
    },
    arabic:
      "سُبْحانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَسْتَغْفِرُكَ وَأَتوبُ إِلَيْكَ.",
    transliteration:
      "Subhanakal-lahumma wabihamdika ashhadu an la ilaha illa anta astaghfiruka wa-atoobu ilayk.",
    translation: {
      en: "How perfect You are O Allah, and I praise You, I bear witness that none has the right to be worshipped except You, I seek Your forgiveness and turn in repentance to You.",
      bs: "Slavljen neka si Ti, o Allahu, i hvaljen. Svjedočim da nema boga osim Tebe. Tražim Tvoj oprost i Tebi se kajem.",
    },
  },
  {
    id: "hisnul_muslim_16",
    category: "hisnul_muslim",
    title: {
      en: "Leaving the Home (1): Trust in Allah",
      bs: "Izlazak iz kuće (1): Oslanjanje na Allaha",
    },
    description: {
      en: "Whoever says this when leaving his house, it is said to him: \"You are guided, sufficed and protected,\" and Satan moves away from him.",
      bs: "Ko ovo izgovori kada izlazi iz kuće, kaže mu se: \"Upućen si, zadovoljen si i zaštićen si\", i šejtan se od njega udalji.",
    },
    arabic:
      "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَاَ حَوْلَ وَلَا قُوَّةَ إِلاَّ بِاللَّهِ.",
    transliteration:
      "Bismil-lah, tawakkaltu 'alal-lah, wala hawla wala quwwata illa billah.",
    translation: {
      en: "In the name of Allah, I place my trust in Allah, and there is no might nor power except with Allah.",
      bs: "U ime Allaha, oslanjam se na Allaha, nema snage ni moći osim kod Allaha.",
    },
    reference: "Abu Dawud 5095; At-Tirmidhi 3426",
  },
  {
    id: "hisnul_muslim_17",
    category: "hisnul_muslim",
    title: {
      en: "Leaving the Home (2): Refuge from Going Astray",
      bs: "Izlazak iz kuće (2): Zaštita od zablude",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أَضِلَّ، أَوْ أُضَلَّ، أَوْ أَزِلَّ، أَوْ أُزَلَّ، أَوْ أَظْلِمَ، أَوْ أُظْلَمَ، أَوْ أَجْهَلَ، أَوْ يُجْهَلَ عَلَيَّ.",
    transliteration:
      "Allahumma innee a'oothu bika an adilla aw odal, aw azilla aw ozall, aw athlima aw othlam, aw ajhala aw yujhala 'alay.",
    translation: {
      en: "O Allah, I seek refuge in You lest I go astray or be led astray, or slip or be made to slip, or oppress or be oppressed, or behave foolishly or be treated foolishly.",
      bs: "O Allahu, utječem Ti se da ne zalutam ili ne budem zaveden, da ne posrnem ili ne budem naveden na grijeh, da ne činim nepravdu ili da meni ne bude učinjena, da ne postupim nerazumno ili da se prema meni ne postupi nerazumno.",
    },
    reference: "Abu Dawud 5094; At-Tirmidhi 3427",
  },
  {
    id: "hisnul_muslim_18",
    category: "hisnul_muslim",
    title: {
      en: "Entering the Home",
      bs: "Ulazak u kuću",
    },
    description: {
      en: "After saying this, one should greet the members of the household with salam.",
      bs: "Nakon ovoga treba nazvati selam ukućanima.",
    },
    arabic:
      "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
    transliteration:
      "Bismil-lahi walajna, wabismil-lahi kharajna, wa'ala rabbina tawakkalna.",
    translation: {
      en: "In the name of Allah we enter and in the name of Allah we leave, and upon Allah, our Lord, we place our trust.",
      bs: "U ime Allaha ulazimo i u ime Allaha izlazimo, i na Allaha, našeg Gospodara, se oslanjamo.",
    },
    reference: "Abu Dawud 5096",
  },
  {
    id: "hisnul_muslim_19",
    category: "hisnul_muslim",
    title: {
      en: "Going to the Mosque: Supplication for Light",
      bs: "Odlazak u džamiju: Dova za svjetlo",
    },
    description: {
      en: "The phrases in brackets come from other narrations of this supplication.",
      bs: "Riječi u zagradama dolaze iz drugih predaja ove dove.",
    },
    arabic:
      "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي لِسَانِي نُورًا، وَفِي سَمْعِي نُورًا، وَفِي بَصَرِي نُورًا، وَمِنْ فَوْقِي نُورًا، وَمِنْ تَحْتِي نُورًا، وَعَنْ يَمِينِي نُورًا، وَعَنْ شِمَالِي نُورًا، وَمِنْ أَمَامِي نُورًا، وَمِنْ خَلْفِي نُورًا، وَاجْعَلْ فِي نَفْسِي نُورًا، وَأَعْظِمْ لِي نُورًا، وَعَظِّمْ لِي نُورًا، وَاجْعَلْ لِي نُورًا، وَاجْعَلْنِي نُورًا، اللَّهُمَّ أَعْطِنِي نُورًا، وَاجْعَلْ فِي عَصَبِي نُورًا، وَفِي لَحْمِي نُورًا، وَفِي دَمِي نُورًا، وَفِي شَعْرِي نُورًا، وَفِي بَشَرِي نُورًا. [اللَّهُمَّ اجْعَلْ لِي نُورًا فِي قَبْرِي، وَنُورًا فِي عِظَامِي] [وَزِدْنِي نُورًا، وَزِدْنِي نُورًا، وَزِدْنِي نُورًا] [وَهَبْ لِي نُورًا عَلَى نُورٍ]",
    transliteration:
      "Allaahummaj 'al fee qalbee nooran, wa fee lisaanee nooran, wa fee sam'ee nooran, wa fee basaree nooran, wa min fawqee nooran, wa min tahtee nooran, wa 'an yameenee nooran, wa 'an shimaalee nooran, wa min 'amaamee nooran, wa min khalfee nooran. Wa j'al fee nafsee nooran, wa 'a'dhim lee nooran, wa 'a'dhim lee nooran. Waj'al lee nooran, waj'alnee nooran. Allaahumma a'tinee nooran, waj'al fee 'asabee nooran, wa fee lahmee nooran, wa fee damee nooran, wa fee sha'ree nooran, wa fee basharee nooran.[Allaahummaj'al lee nooran fee qabree, wa nooran fee 'idhaamee.][Wa zidnee nooran, wa zidnee nooran, wa zidnee nooran.][Wa hab lee nooran 'alaa noor.]",
    translation: {
      en: "O Allah, place light in my heart, light on my tongue, light in my hearing and light in my sight; place light above me, light beneath me, light on my right, light on my left, light in front of me and light behind me; place light in my soul, magnify light for me, make light great for me, grant me light and make me light. O Allah, grant me light, and place light in my sinews, light in my flesh, light in my blood, light in my hair and light in my skin. [O Allah, place light for me in my grave and light in my bones.] [Increase me in light, increase me in light, increase me in light.] [And grant me light upon light.]",
      bs: "O Allahu, podari mi svjetlo u srce, svjetlo na jezik, svjetlo u uši, svjetlo u oči, svjetlo iznad mene, svjetlo ispod mene, svjetlo s desne strane, svjetlo s lijeve strane, svjetlo ispred mene, svjetlo iza mene. Učini u mojoj duši svjetlo, povećaj mi svjetlo, veličaj mi svjetlo, podari mi svjetlo i učini me svjetlom. O Allahu, daj mi svjetlo, i stavi svjetlo u moje živce, i u moje meso svjetlo, i u moju krv svjetlo, i u moju kosu svjetlo, i u moju kožu svjetlo. [O Allahu, stavi mi svjetlo u moj kabur i svjetlo u moje kosti]. [I povećaj mi svjetlo, i povećaj mi svjetlo, i povećaj mi svjetlo]. [I podari mi svjetlo nad svjetlom].",
    },
    reference: "Al-Bukhari 6316; Muslim 763",
  },
  {
    id: "hisnul_muslim_20",
    category: "hisnul_muslim",
    title: {
      en: "Entering the Mosque",
      bs: "Ulazak u džamiju",
    },
    description: {
      en: "Enter with the right foot first.",
      bs: "U džamiju se ulazi desnom nogom.",
    },
    arabic:
      "أَعُوذُ بِاللَّهِ العَظِيمِ، وَبِوَجْهِهِ الْكَرِيمِ، وَسُلْطَانِهِ الْقَدِيمِ، مِنَ الشَّيْطَانِ الرَّجِيمِ [بِسْمِ اللَّهِ، وَالصَّلَاةُ] [وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ] اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ.",
    transliteration:
      "A'oothu billahil-'atheem wabiwajhihil-kareem wasultanihil-qadeem minash-shaytanir-rajeem. [Bismil-lah, wassalatu] [wassalamu 'ala rasoolil-lah]. Allahummaf-tah lee abwaba rahmatik.",
    translation: {
      en: "I seek refuge in Allah, the Supreme, and in His Noble Face, and His eternal authority from Satan, the accursed. [In the name of Allah, and prayers] [and peace be upon the Messenger of Allah.] O Allah, open the gates of Your mercy for me.",
      bs: "Utječem se Allahu Veličanstvenom, Njegovom Plemenitom Licu i Njegovoj vječnoj vlasti od prokletog šejtana. [U ime Allaha, i salavat] [i selam na Allahovog Poslanika] O Allahu, otvori mi vrata Svoje milosti.",
    },
    reference: "Abu Dawud 466; Muslim 713",
  },
  {
    id: "hisnul_muslim_21",
    category: "hisnul_muslim",
    title: {
      en: "Leaving the Mosque",
      bs: "Izlazak iz džamije",
    },
    description: {
      en: "Leave with the left foot first.",
      bs: "Iz džamije se izlazi lijevom nogom.",
    },
    arabic:
      "بِسْمِ اللَّهِ وَالصّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِك، اللَّهُمَّ اعْصِمْنِي مِنَ الشَّيْطَانِ الرَّجِيمِ.",
    transliteration:
      "Bismil-lah wassalatu wassalamu 'ala rasoolil-lah, allahumma innee as-aluka min fadlik, allahumma i'simnee minash-shaytanir-rajeem.",
    translation: {
      en: "In the name of Allah, and prayers and peace be upon the Messenger of Allah. O Allah, I ask You from Your favour. O Allah, guard me from the accursed devil.",
      bs: "U ime Allaha, i salavat i selam na Allahovog Poslanika. O Allahu, molim Te od Tvoje dobrote. O Allahu, sačuvaj me od prokletog šejtana.",
    },
    reference: "Muslim 713a; Ibn Majah 771, 773",
  },
  {
    id: "hisnul_muslim_22",
    category: "hisnul_muslim",
    title: {
      en: "Hearing the Adhan (1): Repeating After the Mu'adhdhin",
      bs: "Uz ezan (1): Ponavljanje za mujezinom",
    },
    arabic:
      "يَقُولُ مِثْلَ مَا يَقُولُ المُؤَذِّنُ إِلاَّ فِي حَيَّ عَلَى الصَّلَاةِ وَحَيَّ عَلَى الْفَلَاحِ فَيقُولُ: لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ.",
    transliteration: "",
    translation: {
      en: "One repeats what the mu'adhdhin (caller to prayer) says, except when he says \"Hayya 'alas-salah\" (Come to prayer) and \"Hayya 'alal-falah\" (Come to success); instead, one says: \"La hawla wa la quwwata illa billah\" (There is no might nor power except with Allah).",
      bs: "Onaj ko čuje ezan ponavlja isto što i mujezin, osim kod riječi \"Hajje 'ales-salah\" (Dođite na namaz) i \"Hajje 'alel-felah\" (Dođite spasu), kada treba reći: \"La havle ve la kuvvete illa billah\" (Nema snage ni moći osim kod Allaha).",
    },
    reference: "Al-Bukhari 611; Muslim 385",
  },
  {
    id: "hisnul_muslim_23",
    category: "hisnul_muslim",
    title: {
      en: "Hearing the Adhan (2): After the Testimony of Faith",
      bs: "Uz ezan (2): Nakon šehadeta",
    },
    description: {
      en: "Say this immediately after the mu'adhdhin pronounces the testimony of faith; whoever says it will have his sins forgiven.",
      bs: "Izgovara se odmah nakon što mujezin prouči šehadet; ko to kaže, bit će mu oprošteni grijesi.",
    },
    arabic:
      "وَأَنَا أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ، رَضِيتُ بِاللَّهِ رَبَّاً، وَبِمُحَمَّدٍ رَسُولاً، وَبِالْإِسْلاَمِ دِينًا",
    transliteration:
      "Wa-ana ashhadu an la ilaha illal-lahu wahdahu la shareeka lah, wa-anna Muhammadan 'abduhu warasooluh, radeetu billahi rabban wabimuhammadin rasoolan wabil-islami deena.",
    translation: {
      en: "And I too bear witness that none has the right to be worshipped except Allah, alone, without partner, and that Muhammad is His servant and Messenger. I am pleased with Allah as my Lord, with Muhammad as my Messenger and with Islam as my religion.",
      bs: "I ja svjedočim da nema boga osim Allaha, Jedinog, Koji nema sudruga, i da je Muhammed Njegov rob i Poslanik. Zadovoljan sam da mi je Allah Gospodar, Muhammed poslanik i islam vjera.",
    },
    reference: "Muslim 386",
  },
  {
    id: "hisnul_muslim_24",
    category: "hisnul_muslim",
    title: {
      en: "Hearing the Adhan (3): Sending Blessings on the Prophet",
      bs: "Uz ezan (3): Salavat na Poslanika",
    },
    arabic:
      "يُصَلِّي عَلَى النَّبِيِّ صلى الله عليه وسلم بَعْدَ فَرَاغِهِ مِنْ إِجَابَةِ الْمُؤَذِّنِ.",
    transliteration: "",
    translation: {
      en: "After answering the mu'adhdhin, one sends prayers upon the Prophet ﷺ.",
      bs: "Nakon što se završi s odgovaranjem mujezinu, donosi se salavat na Poslanika ﷺ.",
    },
    reference: "Muslim 384",
  },
  {
    id: "hisnul_muslim_25",
    category: "hisnul_muslim",
    title: {
      en: "Hearing the Adhan (4): Lord of This Perfect Call",
      bs: "Uz ezan (4): Gospodaru ovog savršenog poziva",
    },
    description: {
      en: "Whoever says this after the adhan will be granted the Prophet's intercession on the Day of Resurrection. Al-Wasilah: a station in Paradise. Al-Fadilah: a rank above the rest of creation. The phrase in brackets comes from another narration (Al-Bayhaqi).",
      bs: "Ko ovo izgovori nakon ezana, zaslužit će Poslanikov šefat na Sudnjem danu. Vesila: posebno mjesto u Džennetu. Fadila: stepen iznad ostalih stvorenja. Riječi u zagradi dolaze iz druge predaje (Bejheki).",
    },
    arabic:
      "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلاَةِ الْقَائِمَةِ، آتِ مُحَمَّداً الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَامَاً مَحمُوداً الَّذِي وَعَدْتَهُ، [إِنَّكَ لَا تُخْلِفُ الْمِيعَادَ].",
    transliteration:
      "Allahumma rabba hathihid-da'watit-tammah, wassalatil-qa-imah ati Muhammadan alwaseelata wal-fadeelah, wab'ath-hu maqaman mahmoodan allathee wa'adtah, [innaka la tukhliful-mee'ad].",
    translation: {
      en: "O Allah, Lord of this perfect call and of the prayer to be established, grant Muhammad al-Wasilah and al-Fadilah, and raise him to the praised station which You have promised him. [Verily, You never fail in Your promise.]",
      bs: "O Allahu, Gospodaru ovog savršenog poziva i namaza koji će se klanjati, podari Muhammedu Vesilu i Fadilu, i proživi ga na hvaljenom mjestu koje si mu obećao. [Ti, doista, ne kršiš obećanje.]",
    },
    reference: "Al-Bukhari 614",
  },
  {
    id: "hisnul_muslim_26",
    category: "hisnul_muslim",
    title: {
      en: "Hearing the Adhan (5): Supplicating Before the Iqamah",
      bs: "Uz ezan (5): Dova između ezana i ikameta",
    },
    arabic:
      "يَدْعُو لِنَفسِهِ بَيْنَ الْأَذَانِ وَالْإِقَامَةِ فَإِنَّ الدُّعَاءَ حِينَئِذٍ لاَ يُرَدُّ.",
    transliteration: "",
    translation: {
      en: "One should supplicate for oneself between the adhan and the iqamah, for supplication at that time is not rejected.",
      bs: "Između ezana i ikameta treba učiti dovu za sebe, jer se dova u to vrijeme ne odbija.",
    },
    reference: "Abu Dawud 521; At-Tirmidhi 212",
  },
  {
    id: "hisnul_muslim_5",
    category: "hisnul_muslim",
    title: {
      en: "Invocation when getting dressed",
      bs: "Dova prilikom oblačenja",
    },
    arabic:
      "الْحَمْدُ للَّهِ الَّذِي كَسَانِي هَذَا الثَّوْبَ وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلاَ قُوَّة...",
    transliteration:
      "Alhamdu lillahil-lathee kasanee hatha (aththawb) warazaqaneehi min ghayri hawlin minnee wala quwwah.",
    translation: {
      en: "All Praise is for Allah who has clothed me with this garment and provided it for me, with no power nor might from myself.",
      bs: "Hvala Allahu koji me je odjenuo ovom odjećom i opskrbio me njome bez moje snage i moći.",
    },
  },
  {
    id: "hisnul_muslim_6",
    category: "hisnul_muslim",
    title: {
      en: "Invocation when putting on new clothes",
      bs: "Dova prilikom oblačenja nove odjeće",
    },
    arabic:
      "اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ، أَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَا صُنِعَ لَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا صُنِعَ لَهُ.",
    transliteration:
      "Allahumma lakal-hamdu anta kasawtaneeh, as-aluka min khayrihi wakhayri ma suni'a lah, wa-a'oothu bika min sharrihi washarri ma suni'a lah.",
    translation: {
      en: "O Allah, for You is all praise, You have clothed me with it i.e. the garment, I ask You for the good of it and the good for which it was made, and I seek refuge with You from the evil of it and the evil for which it was made.",
      bs: "O Allahu, Tebi hvala, Ti si me obukao njome odjećom, molim Te za njeno dobro i dobro za koje je napravljena, i utječem Ti se od njenog zla i zla za koje je napravljena.",
    },
  },
  {
    id: "hisnul_muslim_7",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for someone who has put on new clothes",
      bs: "Dova za onoga ko obuče novu odjeću",
    },
    arabic: "تُبْلِي وَيُخْلِفُ اللَّهُ تَعَالَى",
    transliteration: "Tublee wayukhliful-lahu ta'ala.",
    translation: {
      en: "May you wear it out and Allah تعالى replace it with another.’ The intended meaning: A supplication for long life.",
      bs: "Da je iznosiš, a da ti Allah zamijeni boljom.",
    },
  },
  {
    id: "hisnul_muslim_8",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for someone who has put on new clothes",
      bs: "Dova za onoga ko obuče novu odjeću",
    },
    arabic: "اِلْبَسْ جَدِيداً وَعِشْ حَمِيداً وَمُتْ شَهِيداً.",
    transliteration: "Ilbas jadeedan wa'ish hameedan wamut shaheedan.",
    translation: {
      en: "Wear anew, live commendably and die a shaheed.shaheed:One who dies fighting the kuffar in order to make the word of Allah superior or in defense of Islam. It also has other meanings found in the Sunnah such as: the one who dies defending his life, wealth or family; the woman who passes away due to childbirth; one who drowns…etc.",
      bs: "Obuci novo, živi dostojanstveno i umri kao šehid.",
    },
  },
  {
    id: "hisnul_muslim_9",
    category: "hisnul_muslim",
    title: {
      en: "What to say when undressing",
      bs: "Dova prilikom svlačenja odjeće",
    },
    arabic: "بِسْمِ اللَّهِ.",
    transliteration: "Bismil-lah.",
    translation: {
      en: "In the name of Allah.",
      bs: "U ime Allaha.",
    },
  },
  {
    id: "hisnul_muslim_27",
    category: "hisnul_muslim",
    title: {
      en: "Opening the Prayer (1): Distance Me from My Sins",
      bs: "Početak namaza (1): Udalji me od mojih grijeha",
    },
    arabic:
      "اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ، اللَّهُمَّ نَقِّنِي مِنْ خَطَايَايَ كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ، اللَّهُمَّ اغْسِلْني مِنْ خَطَايَايَ، بِالثَّلْجِ وَالْماءِ وَالْبَرَدِ.",
    transliteration:
      "Allahumma ba'id baynee wabayna khatayaya kama ba'adta baynal-mashriqi walmaghrib, allahumma naqqinee min khatayaya kama yunaqqath-thawbul-abyadu minad-danas, allahummagh-silnee min khatayaya biththalji walma-i walbarad.",
    translation: {
      en: "O Allah, distance me from my sins just as You have distanced the East from the West. O Allah, purify me of my sins as a white garment is purified of filth. O Allah, wash away my sins with snow, water and hail.",
      bs: "O Allahu, udalji me od mojih grijeha kao što si udaljio istok od zapada. O Allahu, očisti me od mojih grijeha kao što se bijela odjeća čisti od prljavštine. O Allahu, operi moje grijehe snijegom, vodom i gradom.",
    },
    reference: "Al-Bukhari 744, Muslim 598",
  },
  {
    id: "hisnul_muslim_28",
    category: "hisnul_muslim",
    title: {
      en: "Opening the Prayer (2): Subhanaka Allahumma",
      bs: "Početak namaza (2): Subhaneke",
    },
    arabic:
      "سُبْحانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلاَ إِلَهَ غَيْرُكَ.",
    transliteration:
      "Subhanakal-lahumma wabihamdika watabarakas-muka wata'ala jadduka wala ilaha ghayruk.",
    translation: {
      en: "How perfect You are, O Allah, and I praise You. Blessed is Your name, exalted is Your majesty, and none has the right to be worshipped except You.",
      bs: "Slavljen si Ti, o Allahu, i hvaljen. Blagoslovljeno je Tvoje ime, uzvišena je Tvoja veličina i nema drugog boga osim Tebe.",
    },
    reference: "Abu Dawud 775, At-Tirmidhi 243",
  },
  {
    id: "hisnul_muslim_29",
    category: "hisnul_muslim",
    title: {
      en: "Opening the Prayer (3): I Have Turned My Face",
      bs: "Početak namaza (3): Okrenuo sam svoje lice",
    },
    description: {
      en: "Note: Allah does not create pure evil devoid of any good, benefit, wisdom or mercy, nor does He punish anyone who has not sinned. Something may be good from one perspective and evil from another. Allah created the devil and tests His servants through him: some oppose him and his followers, while others ally with him and follow his footsteps. Evil exists in His creation by His will and wisdom, not in His actions or His act of creating. Hence: \"evil is not attributed to You.\"",
      bs: "Napomena: Allah ne stvara čisto zlo u kojem nema nikakvog dobra, koristi, mudrosti ili milosti, niti kažnjava ikoga ko nije počinio grijeh. Nešto može biti dobro s jednog stanovišta, a zlo s drugog. Allah je stvorio šejtana i njime iskušava Svoje robove: jedni mu se suprotstavljaju i neprijatelji su njemu i njegovim sljedbenicima, a drugi se s njim saveznički vežu i slijede njegove stope. Zlo postoji u Njegovim stvorenjima po Njegovoj volji i mudrosti, a ne u Njegovim djelima niti u samom činu stvaranja. Otuda: \"a zlo se Tebi ne pripisuje.\"",
    },
    arabic:
      "وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفَاً وَمَا أَنَا مِنَ الْمُشْرِكِينَ، إِنَّ صَلاَتِي، وَنُسُكِي، وَمَحْيَايَ، وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ، لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا مِنَ الْمُسْلِمِينَ. اللَّهُمَّ أَنْتَ المَلِكُ لاَ إِلَهَ إِلاَّ أَنْتَ، أَنْتَ رَبِّي وَأَنَا عَبْدُكَ، ظَلَمْتُ نَفْسِي وَاعْتَرَفْتُ بِذَنْبِي فَاغْفِرْ لِي ذُنُوبي جَمِيعَاً إِنَّهُ لاَ يَغْفِرُ الذُّنوبَ إِلاَّ أَنْتَ. وَاهْدِنِي لِأَحْسَنِ الأَخْلاقِ لاَ يَهْدِي لِأَحْسَنِها إِلاَّ أَنْتَ، وَاصْرِفْ عَنِّي سَيِّئَهَا، لاَ يَصْرِفُ عَنِّي سَيِّئَهَا إِلاَّ أَنْتَ، لَبَّيْكَ وَسَعْدَيْكَ، وَالخَيْرُ كُلُّهُ بِيَدَيْكَ، وَالشَّرُّ لَيْسَ إِلَيْكَ، أَنَا بِكَ وَإِلَيْكَ، تَبارَكْتَ وَتَعَالَيْتَ، أَسْتَغْفِرُكَ وَأَتوبُ إِلَيْكَ.",
    transliteration:
      "Wajjahtu wajhiya lillathee fataras-samawati wal-arda haneefan wama ana minal-mushrikeen, inna salatee wanusukee wamahyaya wamamatee lillahi rabbil-'alameen, la shareeka lahu wabithalika umirtu wa-ana minal-muslimeen. Allahumma antal-maliku la ilaha illa ant, anta rabbee wa-ana 'abduk, thalamtu nafsee wa'taraftu bithanbee faghfir lee thunoobee jamee'an innahu la yaghfiruth-thunooba illa ant, wahdinee li-ahsanil-akhlaqi la yahdee li-ahsaniha illa ant, wasrif 'annee sayyi-aha la yasrifu 'annee sayyi-aha illa ant, labbayka wasa'dayk, walkhayru kulluhu biyadayk, washsharru laysa ilayk, ana bika wa-ilayk, tabarakta wata'alayt, astaghfiruka wa-atoobu ilayk.",
    translation: {
      en: "I have turned my face sincerely towards He who has brought forth the heavens and the Earth, and I am not of those who associate others with Allah. Indeed, my prayer, my sacrifice, my life and my death are for Allah, Lord of the worlds; no partner has He. With this I am commanded, and I am of the Muslims. O Allah, You are the Sovereign, none has the right to be worshipped except You. You are my Lord and I am Your servant. I have wronged my own soul and have acknowledged my sin, so forgive me all my sins, for no one forgives sins except You. Guide me to the best of characters, for none can guide to it other than You, and turn away from me the worst of characters, for none can turn it away from me other than You. Here I am, in answer to Your call, happy to serve You. All good is within Your hands, and evil is not attributed to You. I exist by You and will return to You. Blessed and Exalted are You; I seek Your forgiveness and repent unto You.",
      bs: "Okrenuo sam svoje lice, iskreno, prema Onome koji je stvorio nebesa i Zemlju, i ja nisam od onih koji Njemu druge pridružuju. Zaista, moj namaz i moji obredi, moj život i moja smrt pripadaju Allahu, Gospodaru svjetova, koji nema sudruga. Tako mi je naređeno i ja sam od muslimana. O Allahu, Ti si Vladar, nema boga osim Tebe. Ti si moj Gospodar, a ja sam Tvoj rob. Prema sebi sam nasilje učinio i priznajem svoj grijeh, pa mi oprosti sve moje grijehe, jer grijehe ne oprašta niko osim Tebe. Uputi me na najljepši ahlak, jer na najljepši ahlak ne upućuje niko osim Tebe, i otkloni od mene loš ahlak, jer loš ahlak ne otklanja niko osim Tebe. Odazivam Ti se i pokoravam Ti se, svako dobro je u Tvojim rukama, a zlo se Tebi ne pripisuje. Ja postojim Tobom i Tebi se vraćam. Blagoslovljen si i Uzvišen. Tražim Tvoj oprost i Tebi se kajem.",
    },
    reference: "Muslim 771",
  },
  {
    id: "hisnul_muslim_30",
    category: "hisnul_muslim",
    title: {
      en: "Opening the Prayer (4): Lord of Jibril, Mikail and Israfil",
      bs: "Početak namaza (4): Gospodaru Džibrila, Mikaila i Israfila",
    },
    arabic:
      "اللَّهُمَّ رَبَّ جِبْرَائِيلَ، وَمِيْكَائِيلَ، وَإِسْرَافِيلَ، فَاطِرَ السَّمَوَاتِ وَالأَرْضِ، عَالِمَ الغَيْبِ وَالشَّهَادَةِ أَنْتَ تَحْكُمُ بَيْنَ عِبَادِكَ فِيمَا كَانُوا فِيهِ يَخْتَلِفُونَ. اهْدِنِي لِمَا اخْتُلِفَ فِيهِ مِنَ الْحَقِّ بِإِذْنِكَ إِنَّكَ تَهْدِي مَنْ تَشَاءُ إِلَى صِرَاطٍ مُسْتَقيمٍ.",
    transliteration:
      "Allahumma rabba jibra-eel, wameeka-eel, wa-israfeel fatiras-samawati walard, 'alimal-ghaybi washshahadah, anta tahkumu bayna 'ibadika feema kanoo feehi yakhtalifoon. Ihdinee limakh-tulifa feehi minal-haqqi bi-ithnik, innaka tahdee man tasha-u ila siratin mustaqeem.",
    translation: {
      en: "O Allah, Lord of Jibril, Mikail and Israfil, Creator of the heavens and the Earth, Knower of the unseen and the seen. You judge between Your servants in that wherein they differ. Guide me, by Your leave, to the truth in that wherein there has been dispute, for verily You guide whom You will to a straight path.",
      bs: "O Allahu, Gospodaru Džibrila, Mikaila i Israfila, Stvoritelju nebesa i Zemlje, Znalče nevidljivog i vidljivog, Ti sudiš među Svojim robovima u onome u čemu su se razilazili. Uputi me, Svojom dozvolom, na istinu u onome u čemu su se razišli, jer Ti, zaista, upućuješ koga hoćeš na Pravi put.",
    },
    reference: "Muslim 770",
  },
  {
    id: "hisnul_muslim_31",
    category: "hisnul_muslim",
    title: {
      en: "Opening the Prayer (5): Allah Is the Greatest, Abundantly",
      bs: "Početak namaza (5): Allah je najveći, uistinu velik",
    },
    description: {
      en: "Each of the three phrases is said three times, followed by seeking refuge from Satan. His \"puffing\" (nafkh) has been explained as pride, his \"spitting\" (nafth) as poetry, and his \"whispering/prodding\" (hamz) as madness.",
      bs: "Svaka od tri rečenice izgovara se tri puta, a zatim se traži utočište od šejtana. Njegovo \"puhanje\" (nefh) tumači se kao oholost, \"pljuckanje\" (nefs) kao poezija, a \"podbadanje\" (hemz) kao ludilo.",
    },
    arabic:
      "اللَّهُ أَكْبَرُ كَبِيرَاً، اللَّهُ أَكْبَرُ كَبِيراً، اللَّهُ أَكْبَرُ كَبِيراً، وَالْحَمْدُ لِلَّهِ كَثيراً، وَالْحَمْدُ لِلَّهِ كَثيراً، وَالْحَمْدُ لِلَّهِ كَثيراً، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً، أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ: مِنْ نَفْخِهِ، وَنَفْثِهِ، وَهَمْزِهِ.",
    transliteration:
      "Allahu akbaru kabeera, Allahu akbaru kabeera, Allahu akbaru kabeera, walhamdu lillahi katheera, walhamdu lillahi katheera, walhamdu lillahi katheera, wasubhanal-lahi bukratan wa-aseela. A'oothu billahi minash-shaytani min nafkhihi wanafthihi wahamzih.",
    translation: {
      en: "Allah is the Greatest, abundantly; Allah is the Greatest, abundantly; Allah is the Greatest, abundantly. Much praise is for Allah, much praise is for Allah, much praise is for Allah. Glory be to Allah, morning and evening. I seek refuge in Allah from Satan: from his pride, his poetry and his madness.",
      bs: "Allah je najveći, uistinu velik. Allah je najveći, uistinu velik. Allah je najveći, uistinu velik. Hvala Allahu mnogo, hvala Allahu mnogo, hvala Allahu mnogo. Slavljen neka je Allah ujutro i navečer. Utječem se Allahu od šejtana: od njegove oholosti, njegove poezije i njegovog ludila.",
    },
    reference: "Abu Dawud 764, Ibn Majah 807",
  },
  {
    id: "hisnul_muslim_32",
    category: "hisnul_muslim",
    title: {
      en: "Opening the Prayer (6): You Are the Light of the Heavens and the Earth",
      bs: "Početak namaza (6): Ti si Svjetlo nebesa i Zemlje",
    },
    description: {
      en: "The Prophet ﷺ would say this when he got up at night to pray. Al-Muqaddim and Al-Mu'akhkhir: Allah brings forward and favours whom He wills from His creation and holds back whom He wills, according to His wisdom, e.g. favouring mankind over much of creation, the Prophets over the rest of mankind, and Muhammad ﷺ over all the Prophets and Messengers.",
      bs: "Poslanik ﷺ bi ovo učio kada bi ustao noću na namaz. El-Mukaddim i El-Muahhir: Allah unapređuje i odlikuje koga hoće od Svojih stvorenja, a unazađuje koga hoće, shodno Svojoj mudrosti, npr. odlikovanje čovjeka nad mnogim stvorenjima, vjerovjesnika nad ostalim ljudima, i Muhammeda ﷺ nad svim vjerovjesnicima i poslanicima.",
    },
    arabic:
      "اللَّهُمَّ لَكَ الْحَمْدُ، أَنْتَ نُورُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ، [وَلَكَ الْحَمْدُ أَنْتَ رَبُّ السَّمَواتِ وَالأَرْضِ وَمَنْ فِيهِنَّ] [وَلَكَ الْحَمْدُ لَكَ مُلْكُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ] [وَلَكَ الْحَمْدُ أَنْتَ مَلِكُ السَّمَوَاتِ وَالأَرْضِ] [وَلَكَ الْحَمْدُ] [أَنْتَ الْحَقُّ، وَوَعْدُكَ الْحَقُّ، وَقَوْلُكَ الْحَقُّ، وَلِقاؤُكَ الْحَقُّ، وَالْجَنَّةُ حَقٌّ، وَالنَّارُ حَقٌّ، وَالنَّبِيُّونَ حَقٌّ، وَمحَمَّدٌ صلى الله عليه وسلم حَقٌّ، وَالسّاعَةُ حَقٌّ] [اللَّهُمَّ لَكَ أَسْلَمتُ، وَعَلَيْكَ تَوَكَّلْتُ، وَبِكَ آمَنْتُ، وَإِلَيْكَ أَنَبْتُ، وَبِكَ خاصَمْتُ، وَإِلَيْكَ حاكَمْتُ. فَاغْفِرْ لِي مَا قَدَّمْتُ، وَمَا أَخَّرْتُ، وَمَا أَسْرَرْتُ، وَمَا أَعْلَنْتُ] [وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي] [أَنْتَ المُقَدِّمُ، وَأَنْتَ المُؤَخِّرُ لاَ إِلَهَ إِلاَّ أَنْتَ] [أَنْتَ إِلَهِي لاَ إِلَهَ إِلاَّ أَنْتَ] [وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ].",
    transliteration:
      "Allahumma lakal-hamd anta noorus-samawati wal-ardi waman feehin, walakal-hamd, anta qayyimus-samawati walardi waman feehin, [walakal-hamd, anta rabbus-samawati walardi waman feehin], [walakal-hamd, laka mulkus-samawati walardi waman feehin] [walakal-hamd, anta malikus-samawati walard] [walakal-hamd] [antal-haq, wawa'dukal-haq, waqawlukal-haq, waliqa-okal-haq, waljannatu haq wannaru haq, wannabiyyoona haq, wa Muhammadun haq, wassa'atu haq] [allahumma laka aslamt, wa'alayka tawakkalt, wabika amant, wa-ilayka anabt, wabika khasamt, wa-ilayka hakamt, faghfir lee ma qaddamt, wama akhkhart, wama asrart, wama a'lant] [wama anta a'lamu bihi minnee] [antal-muqaddim, wa-antal-mu-akhkhir, la ilaha illa ant] [anta ilahee la ilaha illa ant] [wala hawla wala quwwata illa billah].",
    translation: {
      en: "O Allah, to You belongs all praise. You are the Light of the heavens and the Earth and all that is within them. To You belongs all praise. You are the Sustainer of the heavens and the Earth and all that is within them. [To You belongs all praise. You are the Lord of the heavens and the Earth and all that is within them.] [To You belongs all praise. Yours is the dominion of the heavens and the Earth and all that is within them.] [To You belongs all praise. You are the King of the heavens and the Earth.] [To You belongs all praise.] [You are the Truth, Your promise is true, Your word is true, the meeting with You is true, Paradise is true, the Fire is true, the Prophets are true, Muhammad ﷺ is true, and the Hour is true.] [O Allah, to You I have submitted, upon You I have relied, in You I have believed, to You I have turned in repentance, by You I have disputed, and to You I have turned for judgment. So forgive me what I have done before and what I will do after, what I have concealed and what I have made public,] [and that which You know better than I.] [You are Al-Muqaddim (the One who brings forward) and Al-Mu'akhkhir (the One who holds back); none has the right to be worshipped except You.] [You are my God; none has the right to be worshipped except You.] [There is no might nor power except with Allah.]",
      bs: "O Allahu, Tebi hvala, Ti si Svjetlo nebesa i Zemlje i onoga što je na njima. I Tebi hvala, Ti si Održavatelj nebesa i Zemlje i onoga što je na njima. [I Tebi hvala, Ti si Gospodar nebesa i Zemlje i onoga što je na njima] [I Tebi hvala, Tebi pripada vlast nebesa i Zemlje i onoga što je na njima] [I Tebi hvala, Ti si Kralj nebesa i Zemlje] [I Tebi hvala] [Ti si Istina, i Tvoje obećanje je istina, i Tvoj govor je istina, i susret s Tobom je istina, i Džennet je istina, i Džehennem je istina, i vjerovjesnici su istina, i Muhammed, sallallahu alejhi ve sellem, je istina, i Sudnji čas je istina]. [O Allahu, Tebi sam se predao, i na Tebe se oslonio, i u Tebe povjerovao, i Tebi se vratio, i radi Tebe se borio, i pred Tobom presudu tražio. Pa mi oprosti ono što sam ranije učinio i ono što ću kasnije učiniti, i ono što sam tajno učinio i ono što sam javno učinio] [i ono što Ti bolje znaš od mene]. [Ti si Onaj koji unapređuje i Ti si Onaj koji unazađuje, nema boga osim Tebe] [Ti si moj Bog, nema boga osim Tebe] [Nema snage ni moći osim s Allahom].",
    },
    reference: "Al-Bukhari 1120, Muslim 769",
  },
  {
    id: "hisnul_muslim_33",
    category: "hisnul_muslim",
    title: {
      en: "In Ruku' (1): Glory Be to My Lord the Magnificent",
      bs: "Na ruku'u (1): Slavljen neka je moj Gospodar Veličanstveni",
    },
    description: {
      en: "Said three times while bowing (ruku').",
      bs: "Uči se tri puta na ruku'u.",
    },
    arabic: "سُبْحانَ رَبِّيَ الْعَظِيمِ.",
    transliteration: "Subhana rabbiyal-'atheem.",
    translation: {
      en: "How perfect my Lord is, the Magnificent.",
      bs: "Slavljen neka je moj Gospodar Veličanstveni.",
    },
    reference: "Muslim 772",
  },
  {
    id: "hisnul_muslim_34",
    category: "hisnul_muslim",
    title: {
      en: "In Ruku' (2): Glory Be to You, O Allah, Forgive Me",
      bs: "Na ruku'u (2): Slavljen si, Allahu, oprosti mi",
    },
    arabic:
      "سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي.",
    transliteration:
      "Subhanakal-lahumma rabbana wabihamdik, allahummagh-fir lee",
    translation: {
      en: "How perfect You are, O Allah, our Lord, and I praise You. O Allah, forgive me.",
      bs: "Slavljen si Ti, o Allahu, Gospodaru naš, i hvaljen. O Allahu, oprosti mi.",
    },
    reference: "Al-Bukhari 794, Muslim 484",
  },
  {
    id: "hisnul_muslim_35",
    category: "hisnul_muslim",
    title: {
      en: "In Ruku' (3): Perfect and Holy",
      bs: "Na ruku'u (3): Hvaljeni i Sveti",
    },
    description: {
      en: "Ar-Ruh (the Spirit) refers to the angel Jibril.",
      bs: "Er-Ruh (Duh) se odnosi na meleka Džibrila.",
    },
    arabic: "سُبُّوحٌ، قُدُّوسٌ، رَبُّ المَلاَئِكَةِ وَالرُّوحِ.",
    transliteration: "Subboohun quddoosun, rabbul-mala-ikati warrooh.",
    translation: {
      en: "Perfect and Holy is He, Lord of the angels and of the Spirit.",
      bs: "Hvaljeni, Sveti, Gospodar meleka i Ruha (Džibrila).",
    },
    reference: "Muslim 487",
  },
  {
    id: "hisnul_muslim_36",
    category: "hisnul_muslim",
    title: {
      en: "In Ruku' (4): To You I Have Bowed",
      bs: "Na ruku'u (4): Tebi sam se poklonio",
    },
    arabic:
      "اللَّهُمَّ لَكَ رَكَعْتُ، وَبِكَ آمَنْتُ، وَلَكَ أَسْلَمْتُ، خَشَعَ لَكَ سَمْعِي، وَبَصَرِي، وَمُخِّي، وَعَظْمِي، وَعَصَبِي، [وَمَا استَقَلَّتْ بِهِ قَدَمِي].",
    transliteration:
      "Allahumma laka raka't, wabika amant, walaka aslamt, khasha'a laka sam'ee, wabasaree, wamukhkhee, wa'athmee, wa'asabee, [wamas-taqallat bihi qadamee].",
    translation: {
      en: "O Allah, unto You I have bowed, in You I have believed, and to You I have submitted. My hearing, my sight, my mind, my bones and my sinews [and all that my feet carry] are humbled before You.",
      bs: "O Allahu, Tebi sam se poklonio, u Tebe sam povjerovao i Tebi sam se predao. Pred Tobom su se ponizili moj sluh, moj vid, moj mozak, moje kosti i moje tetive [i sve što nose moje noge].",
    },
    reference: "Muslim 771",
  },
  {
    id: "hisnul_muslim_37",
    category: "hisnul_muslim",
    title: {
      en: "In Ruku' (5): Possessor of Might and Dominion",
      bs: "Na ruku'u (5): Gospodar sile i vlasti",
    },
    arabic:
      "سُبْحَانَ ذِي الْجَبَرُوتِ، وَالْمَلَكُوتِ، وَالْكِبْرِيَاءِ، وَالْعَظَمَةِ.",
    transliteration:
      "Subhana thil-jabaroot, walmalakoot, walkibriya', wal'athamah.",
    translation: {
      en: "How perfect He is, the Possessor of total power, sovereignty, magnificence and grandeur.",
      bs: "Slavljen neka je Onaj koji posjeduje silu, vlast, veličanstvo i veličinu.",
    },
    reference: "Abu Dawud 873, An-Nasa'i 1049",
  },
  {
    id: "hisnul_muslim_38",
    category: "hisnul_muslim",
    title: {
      en: "Rising from Ruku' (1): Allah Hears Who Praises Him",
      bs: "Ustajanje s ruku'a (1): Allah čuje onoga ko Ga hvali",
    },
    description: {
      en: "Said while rising from bowing.",
      bs: "Izgovara se prilikom uspravljanja s ruku'a.",
    },
    arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ.",
    transliteration: "Sami'al-lahu liman hamidah.",
    translation: {
      en: "Allah hears the one who praises Him.",
      bs: "Allah čuje onoga ko Ga hvali.",
    },
    reference: "Al-Bukhari 796",
  },
  {
    id: "hisnul_muslim_39",
    category: "hisnul_muslim",
    title: {
      en: "Rising from Ruku' (2): Our Lord, to You Is All Praise",
      bs: "Ustajanje s ruku'a (2): Gospodaru naš, Tebi pripada hvala",
    },
    arabic:
      "رَبَّنَا وَلَكَ الْحَمْدُ، حَمْداً كَثيراً طَيِّباً مُبارَكاً فِيهِ.",
    transliteration:
      "Rabbana walakal-hamdu hamdan katheeran tayyiban mubarakan feeh.",
    translation: {
      en: "Our Lord, to You belongs all praise, abundant, pure and blessed praise.",
      bs: "Gospodaru naš, Tebi pripada hvala, hvala obilna, lijepa i blagoslovljena.",
    },
    reference: "Al-Bukhari 799",
  },
  {
    id: "hisnul_muslim_40",
    category: "hisnul_muslim",
    title: {
      en: "Rising from Ruku' (3): Praise Filling the Heavens and the Earth",
      bs: "Ustajanje s ruku'a (3): Hvala koja ispunjava nebesa i Zemlju",
    },
    description: {
      en: "Said after \"Rabbana wa lakal-hamd\", continuing it.",
      bs: "Uči se nakon \"Rabbena ve lekel-hamd\", kao njen nastavak.",
    },
    arabic:
      "مِلْءَ السَّمَوَاتِ وَمِلْءَ الأَرْضِ، وَمَا بَيْنَهُمَا، وَمِلْءَ مَا شِئْتَ مِنْ شَيءٍ بَعْدُ. أَهلَ الثَّناءِ وَالْمَجْدِ، أَحَقُّ مَا قَالَ الْعَبْدُ، وَكُلُّنَا لَكَ عَبْدٌ. اللَّهُمَّ لاَ مَانِعَ لِمَا أَعْطَيْتَ، وَلاَ مُعْطِيَ لِمَا مَنَعْتَ، وَلاَ يَنْفَعُ ذَا الجَدِّ مِنْكَ الجَدُّ.",
    transliteration:
      "Mil-as-samawati wamil-al-ard, wama baynahuma, wamil-a ma shi'ta min shay-in ba'd, ahlath-thana-i walmajd, ahaqqu ma qalal-'abd, wakulluna laka 'abd. Allahumma la mani'a lima a'tayt, wala mu'tiya lima mana't, wala yanfa'u thal-jaddi minkal-jad.",
    translation: {
      en: "(Praise) filling the heavens, filling the Earth and all that is between them, and filling whatever else You will. O Possessor of praise and majesty, the truest thing a servant has said, and we are all Your servants: O Allah, none can withhold what You give and none can give what You withhold, and the wealth of the wealthy cannot avail him against You.",
      bs: "(Hvala) koja ispunjava nebesa, ispunjava Zemlju i ono što je između njih, i ispunjava sve drugo što Ti hoćeš. O Ti koji si dostojan hvale i slave, to je najistinitije što je rob rekao, a svi smo mi Tvoji robovi: O Allahu, niko ne može uskratiti ono što Ti daš, niti dati ono što Ti uskratiš, i imućnome njegov imetak ne može koristiti kod Tebe.",
    },
    reference: "Muslim 477",
  },
  {
    id: "hisnul_muslim_41",
    category: "hisnul_muslim",
    title: {
      en: "In Sujud (1): Glory Be to My Lord the Most High",
      bs: "Na sedždi (1): Slavljen neka je moj Gospodar Najuzvišeniji",
    },
    description: {
      en: "Said three times while prostrating (sujud).",
      bs: "Uči se tri puta na sedždi.",
    },
    arabic: "سُبْحَانَ رَبِّيَ الأَعْلَى.",
    transliteration: "Subhana rabbiyal-a'la.",
    translation: {
      en: "How perfect my Lord is, the Most High.",
      bs: "Slavljen neka je moj Gospodar Najuzvišeniji.",
    },
    reference: "Muslim 772",
  },
  {
    id: "hisnul_muslim_42",
    category: "hisnul_muslim",
    title: {
      en: "In Sujud (2): Glory Be to You, O Allah, Forgive Me",
      bs: "Na sedždi (2): Slavljen si, Allahu, oprosti mi",
    },
    arabic:
      "سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي.",
    transliteration:
      "Subhanakal-lahumma rabbana wabihamdik, allahummagh-fir lee.",
    translation: {
      en: "How perfect You are, O Allah, our Lord, and I praise You. O Allah, forgive me.",
      bs: "Slavljen si Ti, o Allahu, Gospodaru naš, i hvaljen. O Allahu, oprosti mi.",
    },
    reference: "Al-Bukhari 794, Muslim 484",
  },
  {
    id: "hisnul_muslim_43",
    category: "hisnul_muslim",
    title: {
      en: "In Sujud (3): Perfect and Holy",
      bs: "Na sedždi (3): Hvaljeni i Sveti",
    },
    description: {
      en: "Ar-Ruh (the Spirit) refers to the angel Jibril.",
      bs: "Er-Ruh (Duh) se odnosi na meleka Džibrila.",
    },
    arabic: "سُبُّوحٌ، قُدُّوسٌ، رَبُّ الْمَلَائِكَةِ وَالرُّوحِ.",
    transliteration: "Subboohun quddoosun, rabbul-mala-ikati warrooh.",
    translation: {
      en: "Perfect and Holy is He, Lord of the angels and of the Spirit.",
      bs: "Hvaljeni, Sveti, Gospodar meleka i Ruha (Džibrila).",
    },
    reference: "Muslim 487",
  },
  {
    id: "hisnul_muslim_44",
    category: "hisnul_muslim",
    title: {
      en: "In Sujud (4): To You I Have Prostrated",
      bs: "Na sedždi (4): Tebi sam sedždu učinio",
    },
    arabic:
      "اللَّهُمَّ لَكَ سَجَدْتُ وَبِكَ آمَنْتُ، وَلَكَ أَسْلَمْتُ، سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ، وَصَوَّرَهُ، وَشَقَّ سَمْعَهُ وَبَصَرَهُ، تَبَارَكَ اللَّهُ أَحْسنُ الْخَالِقينَ.",
    transliteration:
      "Allahumma laka sajadt, wabika amant, walaka aslamt, sajada wajhee lillathee khalaqahu wasawwarahu washaqqa sam'ahu wabasarahu, tabarakal-lahu ahsanul-khaliqeen.",
    translation: {
      en: "O Allah, unto You I have prostrated, in You I have believed, and unto You I have submitted. My face has prostrated before the One who created it and fashioned it, and brought forth its hearing and its sight. Blessed is Allah, the Best of creators.",
      bs: "O Allahu, Tebi sam sedždu učinio, u Tebe sam povjerovao i Tebi sam se predao. Moje lice je palo na sedždu pred Onim koji ga je stvorio i oblikovao, i dao mu sluh i vid. Pa neka je uzvišen Allah, najljepši Stvoritelj.",
    },
    reference: "Muslim 771",
  },
  {
    id: "hisnul_muslim_45",
    category: "hisnul_muslim",
    title: {
      en: "In Sujud (5): Possessor of Might and Dominion",
      bs: "Na sedždi (5): Gospodar sile i vlasti",
    },
    arabic:
      "سُبْحَانَ ذِي الْجَبَرُوتِ، وَالْمَلَكُوتِ، وَالْكِبْرِيَاءِ، وَالْعَظَمَةِ.",
    transliteration:
      "Subhana thil-jabaroot, walmalakoot, walkibriya', wal'athamah.",
    translation: {
      en: "How perfect He is, the Possessor of total power, sovereignty, magnificence and grandeur.",
      bs: "Slavljen neka je Onaj koji posjeduje silu, vlast, veličanstvo i veličinu.",
    },
    reference: "Abu Dawud 873, An-Nasa'i 1049",
  },
  {
    id: "hisnul_muslim_46",
    category: "hisnul_muslim",
    title: {
      en: "In Sujud (6): Forgive Me All My Sins",
      bs: "Na sedždi (6): Oprosti mi sve grijehe",
    },
    arabic:
      "اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ: دِقَّهُ وَجِلَّهُ، وَأَوَّلَهُ وَآخِرَهُ، وَعَلاَنِيَّتَهُ وَسِرَّهُ.",
    transliteration:
      "Allahummagh-fir lee thanbee kullah, diqqahu wajillah, wa-awwalahu wa-akhirah, wa-'alaniyyatahu wa-sirrah.",
    translation: {
      en: "O Allah, forgive me all of my sins, the small and great of them, the first and last of them, and the open and secret of them.",
      bs: "O Allahu, oprosti mi sve moje grijehe: male i velike, prve i posljednje, javne i tajne.",
    },
    reference: "Muslim 483",
  },
  {
    id: "hisnul_muslim_47",
    category: "hisnul_muslim",
    title: {
      en: "In Sujud (7): Refuge in Your Pleasure from Your Anger",
      bs: "Na sedždi (7): Utočište u Tvom zadovoljstvu od Tvoje srdžbe",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ، وَبِمُعَافَاتِكَ مِنْ عُقوبَتِكَ، وَأَعُوذُ بِكَ مِنْكَ، لاَ أُحْصِي ثَنَاءً عَلَيْكَ، أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ.",
    transliteration:
      "Allahumma innee a'oothu biridaka min sakhatik, wa-bimu'afatika min 'uqoobatik, wa-a'oothu bika mink, la ohsee thana-an 'alayk, anta kama athnayta 'ala nafsik.",
    translation: {
      en: "O Allah, I take refuge within Your pleasure from Your displeasure and within Your pardon from Your punishment, and I take refuge in You from You. I cannot enumerate Your praise, You are as You have praised Yourself.",
      bs: "O Allahu, utječem se Tvome zadovoljstvu od Tvoje srdžbe, i Tvome oprostu od Tvoje kazne, i utječem se Tebi od Tebe. Ja Te ne mogu dovoljno pohvaliti, Ti si onakav kako si Sebe pohvalio.",
    },
    reference: "Muslim 486",
  },
  {
    id: "hisnul_muslim_48",
    category: "hisnul_muslim",
    title: {
      en: "Between the Two Prostrations (1): My Lord, Forgive Me",
      bs: "Između dvije sedžde (1): Gospodaru moj, oprosti mi",
    },
    arabic: "رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي.",
    transliteration: "Rabbigh-fir lee, rabbigh-fir lee.",
    translation: {
      en: "My Lord, forgive me. My Lord, forgive me.",
      bs: "Gospodaru moj, oprosti mi. Gospodaru moj, oprosti mi.",
    },
    reference: "Abu Dawud 874",
  },
  {
    id: "hisnul_muslim_49",
    category: "hisnul_muslim",
    title: {
      en: "Between the Two Prostrations (2): Forgive Me and Have Mercy on Me",
      bs: "Između dvije sedžde (2): Oprosti mi i smiluj mi se",
    },
    arabic:
      "اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَاجْبُرْنِي، وَعَافِنِي، وَارْزُقْنِي، وَارْفَعْنِي.",
    transliteration:
      "Allahummagh-fir lee, warhamnee, wahdinee, wajburnee, wa'afinee, warzuqnee, warfa'nee.",
    translation: {
      en: "O Allah, forgive me, have mercy upon me, guide me, mend my shortcomings, grant me well-being, provide for me and raise my rank.",
      bs: "O Allahu, oprosti mi, smiluj mi se, uputi me, popravi moje stanje, podari mi zdravlje, opskrbi me i uzdigni me.",
    },
    reference: "Abu Dawud 850, At-Tirmidhi 284",
  },
  {
    id: "hisnul_muslim_50",
    category: "hisnul_muslim",
    title: {
      en: "Prostration of Recitation (1): My Face Has Prostrated",
      bs: "Sedžda tilaveta (1): Moje lice je palo na sedždu",
    },
    arabic:
      "سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ، وَشَقَّ سَمْعَهُ وَبَصَرَهُ بِحَوْلِهِ وَقُوَّتِهِ، فَتَبارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ.",
    transliteration:
      "Sajada wajhee lillathee khalaqahu washaqqa sam'ahu wabasarahu bihawlihi waquwwatih, fatabarakal-lahu ahsanul-khaliqeen.",
    translation: {
      en: "My face has prostrated before the One who created it and brought forth its hearing and its sight by His might and power. So blessed is Allah, the Best of creators.",
      bs: "Moje lice je palo na sedždu pred Onim koji ga je stvorio i dao mu sluh i vid Svojom moći i snagom. Pa neka je uzvišen Allah, najljepši Stvoritelj.",
    },
    reference: "At-Tirmidhi 580, Abu Dawud 1414",
  },
  {
    id: "hisnul_muslim_51",
    category: "hisnul_muslim",
    title: {
      en: "Prostration of Recitation (2): Record a Reward for Me",
      bs: "Sedžda tilaveta (2): Zapiši mi nagradu",
    },
    arabic:
      "اللَّهُمَّ اكْتُبْ لِي بِهَا عِنْدَكَ أَجْراً، وَضَعْ عَنِّي بِهَا وِزْراً، وَاجْعَلْهَا لِي عِنْدَكَ ذُخْراً، وَتَقَبَّلْهَا مِنِّي كَمَا تَقَبَّلْتَهَا مِنْ عَبْدِكَ دَاوُدَ.",
    transliteration:
      "Allahummak-tub lee biha 'indaka ajra, wada' 'annee biha wizra, waj'alha lee 'indaka thukhra, wataqabbalha minnee kama taqabbaltaha min 'abdika Dawood.",
    translation: {
      en: "O Allah, record for me with You a reward for this (prostration), remove from me a burden of sin because of it, store it up for me with You as a treasure, and accept it from me just as You accepted it from Your servant Dawud.",
      bs: "O Allahu, zapiši mi zbog nje (ove sedžde) kod Sebe nagradu, skini s mene njome teret grijeha, sačuvaj mi je kod Sebe kao zalihu i primi je od mene kao što si je primio od Svoga roba Davuda.",
    },
    reference: "At-Tirmidhi 579",
  },
  {
    id: "hisnul_muslim_52",
    category: "hisnul_muslim",
    title: {
      en: "Tashahhud (At-Tahiyyat)",
      bs: "Tešehhud (Et-tehijjatu)",
    },
    description: {
      en: "At-Tahiyyat: all words that express the glorification of Allah, His eternal existence, His perfection and His sovereignty.",
      bs: "Et-tehijjat: sve riječi koje izražavaju veličanje Allaha, Njegovo vječno postojanje, Njegovu savršenost i Njegovu vlast.",
    },
    arabic:
      "التَّحِيَّاتُ لِلَّهِ، وَالصَّلَواتُ، وَالطَّيِّباتُ، السَّلاَمُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ. أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسولُهُ.",
    transliteration:
      "Attahiyyatu lillahi wassalawatu wattayyibat, assalamu 'alayka ayyuhan-nabiyyu warahmatul-lahi wabarakatuh, assalamu 'alayna wa'ala 'ibadil-lahis-saliheen. Ash-hadu an la ilaha illal-lah, wa-ashhadu anna Muhammadan 'abduhu warasooluh.",
    translation: {
      en: "All greetings of honour are for Allah, as are all prayers and all good things. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that none has the right to be worshipped except Allah, and I bear witness that Muhammad is His servant and Messenger.",
      bs: "Najljepši pozdravi pripadaju Allahu, kao i molitve i dobra djela. Selam tebi, o Vjerovjesniče, i Allahova milost i Njegovi blagoslovi. Selam nama i Allahovim dobrim robovima. Svjedočim da nema boga osim Allaha i svjedočim da je Muhammed Njegov rob i Njegov poslanik.",
    },
    reference: "Al-Bukhari 831, Muslim 402",
  },
  {
    id: "hisnul_muslim_53",
    category: "hisnul_muslim",
    title: {
      en: "Salawat After Tashahhud (1): As You Blessed Ibrahim",
      bs: "Salavat poslije tešehhuda (1): Kao što si blagoslovio Ibrahima",
    },
    description: {
      en: "\"Send prayers (salah) upon\" means: praise and exalt him in the highest gathering, that of the angels closest to Allah. \"Family\" (al) has been translated in its broadest sense; some scholars hold it specifically means his followers from among his family.",
      bs: "\"Salavat\" na Poslanika znači: hvaliti ga i uzdizati u najuzvišenijem skupu, među melekima najbližim Allahu. \"Porodica\" (al) je prevedena u najširem smislu; neki učenjaci smatraju da se misli posebno na njegove sljedbenike iz njegove porodice.",
    },
    arabic:
      "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ، وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيتَ عَلَى إِبْرَاهِيمَ، وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ.",
    transliteration:
      "Allahumma salli 'ala Muhammad, wa-'ala ali Muhammad, kama sallayta 'ala Ibraheema wa-'ala ali Ibraheem, innaka Hameedun Majeed, allahumma barik 'ala Muhammad, wa-'ala ali Muhammad, kama barakta 'ala Ibraheema wa-'ala ali Ibraheem, innaka Hameedun Majeed.",
    translation: {
      en: "O Allah, send prayers upon Muhammad and upon the family of Muhammad, just as You sent prayers upon Ibrahim and upon the family of Ibrahim. Verily, You are Praiseworthy and Glorious. O Allah, send blessings upon Muhammad and upon the family of Muhammad, just as You sent blessings upon Ibrahim and upon the family of Ibrahim. Verily, You are Praiseworthy and Glorious.",
      bs: "O Allahu, smiluj se Muhammedu i porodici Muhammedovoj, kao što si se smilovao Ibrahimu i porodici Ibrahimovoj, zaista si Ti Hvaljeni i Slavljeni. O Allahu, blagoslovi Muhammeda i porodicu Muhammedovu, kao što si blagoslovio Ibrahima i porodicu Ibrahimovu, zaista si Ti Hvaljeni i Slavljeni.",
    },
    reference: "Al-Bukhari 3370, Muslim 406",
  },
  {
    id: "hisnul_muslim_54",
    category: "hisnul_muslim",
    title: {
      en: "Salawat After Tashahhud (2): Upon His Wives and Descendants",
      bs: "Salavat poslije tešehhuda (2): Na njegove žene i potomstvo",
    },
    arabic:
      "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى أَزْوَاجِهِ وَذُرِّيَّتِهِ، كَمَا صَلَّيْتَ عَلَى آلِ إِبْرَاهِيمَ. وَبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى أَزْواجِهِ وَذُرِّيَّتِهِ، كَمَا بَارَكْتَ عَلَى آلِ إِبْرَاهِيمَ. إِنَّكَ حَمِيدٌ مَجِيدٌ.",
    transliteration:
      "Allahumma salli 'ala Muhammad wa-'ala azwajihi wathurriyyatihi kama sallayta 'ala ali Ibraheem, wabarik 'ala Muhammad, wa-'ala azwajihi wathurriyyatih, kama barakta 'ala ali Ibraheem, innaka Hameedun Majeed.",
    translation: {
      en: "O Allah, send prayers upon Muhammad and upon his wives and his descendants, just as You sent prayers upon the family of Ibrahim, and send blessings upon Muhammad and upon his wives and his descendants, just as You sent blessings upon the family of Ibrahim. Verily, You are Praiseworthy and Glorious.",
      bs: "O Allahu, smiluj se Muhammedu, i njegovim ženama i njegovom potomstvu, kao što si se smilovao porodici Ibrahimovoj. I blagoslovi Muhammeda, i njegove žene i njegovo potomstvo, kao što si blagoslovio porodicu Ibrahimovu. Zaista si Ti Hvaljeni i Slavljeni.",
    },
    reference: "Al-Bukhari 3369, Muslim 407",
  },
  {
    id: "hisnul_muslim_55",
    category: "hisnul_muslim",
    title: {
      en: "Before Salam (1): Refuge from Four Trials",
      bs: "Prije selama (1): Utočište od četiri iskušenja",
    },
    description: {
      en: "Al-Masih ad-Dajjal (the False Messiah) is among the major signs of the Last Hour and the greatest trial to befall mankind; every Prophet warned his people about him. He will be given extraordinary powers, will make truth appear false and falsehood true, and will eventually claim divinity. He is blind in one eye, and \"kafir\" (disbeliever) will be written between his eyes, which every believer will be able to read.",
      bs: "Mesih Dedžal (lažni Mesija) je jedan od velikih predznaka Sudnjeg dana i najveće iskušenje za čovječanstvo; svaki vjerovjesnik je upozoravao svoj narod na njega. Bit će mu date neobične moći, prikazivat će istinu kao laž i laž kao istinu, a na kraju će tvrditi da je bog. Slijep je na jedno oko, a između očiju bit će mu napisano \"kafir\" (nevjernik), što će moći pročitati svaki vjernik.",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ عَذَابِ جَهَنَّمَ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ.",
    transliteration:
      "Allahumma innee a'oothu bika min 'athabil-qabr, wamin 'athabi jahannam, wamin fitnatil-mahya walmamat, wamin shari fitnatil-maseehid-dajjal.",
    translation: {
      en: "O Allah, I take refuge in You from the punishment of the grave, from the punishment of Hell, from the trials of life and death, and from the evil of the trial of Al-Masih ad-Dajjal.",
      bs: "O Allahu, utječem Ti se od kaburske kazne, i od džehennemske kazne, i od iskušenja života i smrti, i od zla iskušenja Mesiha Dedžala.",
    },
    reference: "Al-Bukhari 1377, Muslim 588",
  },
  {
    id: "hisnul_muslim_56",
    category: "hisnul_muslim",
    title: {
      en: "Before Salam (2): Refuge from Sin and Debt",
      bs: "Prije selama (2): Utočište od grijeha i duga",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَعوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَأَعوذُ بِكَ مِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ، وَأَعوذُ بِكَ مِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ. اللَّهُمَّ إِنِّي أَعوذُ بِكَ مِنَ الْمَأْثَمِ وَالْمَغْرَمِ.",
    transliteration:
      "Allahumma innee a'oothu bika min 'athabil-qabr, wa-a'oothu bika min fitnatil-maseehid-dajjal, wa-a'oothu bika min fitnatil-mahya walmamat. Allahumma innee a'oothu bika minal-ma'thami walmaghram.",
    translation: {
      en: "O Allah, I take refuge in You from the punishment of the grave, I take refuge in You from the trial of Al-Masih ad-Dajjal, and I take refuge in You from the trials of life and death. O Allah, I take refuge in You from sin and debt.",
      bs: "O Allahu, utječem Ti se od kaburske kazne, i utječem Ti se od iskušenja Mesiha Dedžala, i utječem Ti se od iskušenja života i smrti. O Allahu, utječem Ti se od grijeha i duga.",
    },
    reference: "Al-Bukhari 832, Muslim 589",
  },
  {
    id: "hisnul_muslim_57",
    category: "hisnul_muslim",
    title: {
      en: "Before Salam (3): I Have Greatly Wronged Myself",
      bs: "Prije selama (3): Mnogo sam sebi nepravde učinio",
    },
    description: {
      en: "\"Forgiveness from Yourself\": i.e. purely out of Your grace, without my deserving it, a forgiveness befitting Your immense generosity.",
      bs: "\"Oprostom od Tebe\": tj. isključivo iz Tvoje dobrote, a da ga ja ne zaslužujem, oprostom koji dolikuje Tvojoj neizmjernoj darežljivosti.",
    },
    arabic:
      "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْماً كَثِيراً، وَلاَ يَغْفِرُ الذُّنوبَ إِلاَّ أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي، إِنَّكَ أَنْتَ الغَفورُ الرَّحيمُ.",
    transliteration:
      "Allahumma innee thalamtu nafsee thulman katheeran wala yaghfiruth-thunooba illa ant, faghfir lee maghfiratan min 'indik warhamnee, innaka antal-Ghafoorur-Raheem.",
    translation: {
      en: "O Allah, I have greatly wronged myself, and none forgives sins except You, so grant me forgiveness from Yourself and have mercy upon me. Surely, You are the Most Forgiving, the Most Merciful.",
      bs: "O Allahu, ja sam sebi mnogo nepravde učinio, a grijehe ne oprašta niko osim Tebe, pa mi oprosti oprostom od Tebe i smiluj mi se, zaista si Ti Onaj koji mnogo oprašta, Milostivi.",
    },
    reference: "Al-Bukhari 834, Muslim 2705",
  },
  {
    id: "hisnul_muslim_58",
    category: "hisnul_muslim",
    title: {
      en: "Before Salam (4): Forgive Me What I Have Done Before and After",
      bs: "Prije selama (4): Oprosti mi ono što sam ranije i kasnije učinio",
    },
    description: {
      en: "Al-Muqaddim and Al-Mu'akhkhir: Allah brings forward and favours whom He wills from His creation and holds back whom He wills, according to His wisdom.",
      bs: "El-Mukaddim i El-Muahhir: Allah unapređuje i odlikuje koga hoće od Svojih stvorenja, a unazađuje koga hoće, shodno Svojoj mudrosti.",
    },
    arabic:
      "اللَّهُمَّ اغْفِرْ لِي مَا قَدَّمْتُ، وَمَا أَخَّرْتُ، وَمَا أَسْرَرْتُ، وَمَا أَعْلَنْتُ، وَمَا أَسْرَفْتُ، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي. أَنْتَ الْمُقَدِّمُ، وَأَنْتَ الْمُؤَخِّرُ لاَ إِلَهَ إِلاَّ أَنْتَ.",
    transliteration:
      "Allahummagh-fir lee ma qaddamtu, wama akhkhart, wama asrartu wama a'lant, wama asraft, wama anta a'lamu bihi minnee, antal-muqaddimu wa-antal-mu-akhkhiru la ilaha illa ant.",
    translation: {
      en: "O Allah, forgive me what I have done before and what I will do after, what I have done in secret and what I have done openly, what I have done in excess, and what You know better than I. You are Al-Muqaddim (the One who brings forward) and Al-Mu'akhkhir (the One who holds back). None has the right to be worshipped except You.",
      bs: "O Allahu, oprosti mi ono što sam ranije učinio i ono što ću kasnije učiniti, i ono što sam tajno učinio i ono što sam javno učinio, i ono u čemu sam pretjerao, i ono što Ti bolje znaš od mene. Ti si Onaj koji unapređuje i Ti si Onaj koji unazađuje, nema boga osim Tebe.",
    },
    reference: "Muslim 771",
  },
  {
    id: "hisnul_muslim_59",
    category: "hisnul_muslim",
    title: {
      en: "Before Salam (5): Help Me Remember You",
      bs: "Prije selama (5): Pomozi mi da Te spominjem",
    },
    arabic:
      "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ، وَشُكْرِكَ، وَحُسْنِ عِبادَتِكَ.",
    transliteration:
      "Allahumma a'innee 'ala thikrik, washukrik, wahusni 'ibadatik.",
    translation: {
      en: "O Allah, help me to remember You, to thank You, and to worship You in the best of manners.",
      bs: "O Allahu, pomozi mi da Te spominjem, da Ti zahvaljujem i da Ti na najljepši način ibadet činim.",
    },
    reference: "Abu Dawud 1522, An-Nasa'i 1303",
  },
  {
    id: "hisnul_muslim_60",
    category: "hisnul_muslim",
    title: {
      en: "Before Salam (6): Refuge from Miserliness and Cowardice",
      bs: "Prije selama (6): Utočište od škrtosti i kukavičluka",
    },
    description: {
      en: "\"The most decrepit age\" refers to extreme old age, with weakness, helplessness and senility.",
      bs: "\"Najteže starosno doba\" je duboka starost, sa slabošću, nemoći i gubitkom razuma.",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبُخْلِ، وَأَعوذُ بِكَ مِنَ الْجُبْنِ، وَأَعُوذُ بِكَ مِنْ أَنْ أُرَدَّ إِلَى أَرْذَلِ الْعُمُرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الدُّنْيَا وَعَذَابِ الْقَبْرِ.",
    transliteration:
      "Allahumma innee a'oothu bika minal-bukhl, wa-a'oothu bika minal-jubn, wa-a'oothu bika min an uradda ila arthalil-'umur, wa-a'oothu bika min fitnatid-dunya wa'athabil-qabr.",
    translation: {
      en: "O Allah, I take refuge in You from miserliness, I take refuge in You from cowardice, I take refuge in You from being returned to the most decrepit age, and I take refuge in You from the trials of this world and the punishment of the grave.",
      bs: "O Allahu, utječem Ti se od škrtosti, i utječem Ti se od kukavičluka, i utječem Ti se od toga da budem vraćen u najteže starosno doba, i utječem Ti se od iskušenja dunjaluka i kaburske kazne.",
    },
    reference: "Al-Bukhari 6365",
  },
  {
    id: "hisnul_muslim_61",
    category: "hisnul_muslim",
    title: {
      en: "Before Salam (7): I Ask You for Paradise",
      bs: "Prije selama (7): Molim Te za Džennet",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ.",
    transliteration:
      "Allahumma innee as-alukal-jannah, wa-a'oothu bika minan-nar.",
    translation: {
      en: "O Allah, I ask You for Paradise and I take refuge in You from the Fire.",
      bs: "O Allahu, ja Te molim za Džennet i utječem Ti se od Vatre.",
    },
    reference: "Abu Dawud 792",
  },
  {
    id: "hisnul_muslim_62",
    category: "hisnul_muslim",
    title: {
      en: "Before Salam (8): By Your Knowledge of the Unseen",
      bs: "Prije selama (8): Tako Ti Tvog znanja o nevidljivom",
    },
    arabic:
      "اللَّهُمَّ بِعِلْمِكَ الغَيْبَ وَقُدْرَتِكَ عَلَى الْخَلقِ أَحْيِنِي مَا عَلِمْتَ الْحَيَاةَ خَيْراً لِي، وَتَوَفَّنِي إِذَا عَلِمْتَ الْوَفَاةَ خَيْراً لِي، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَشْيَتَكَ فِي الْغَيْبِ وَالشَّهَادَةِ، وَأَسْأَلُكَ كَلِمَةَ الْحَقِّ فِي الرِّضَا وَالْغَضَبِ، وَأَسْأَلُكَ الْقَصْدَ فِي الْغِنَى وَالْفَقْرِ، وَأَسْأَلُكَ نَعِيماً لاَ يَنْفَدُ، وَأَسْأَلُكَ قُرَّةَ عَيْنٍ لاَ تَنْقَطِعُ، وَأَسْأَلُكَ الرِّضَا بَعْدَ الْقَضَاءِ، وَأَسْأَلُكَ بَرْدَ الْعَيْشِ بَعْدَ الْمَوْتِ، وَأَسْأَلُكَ لَذَّةَ النَّظَرِ إِلَى وَجْهِكَ، وَالشَّوْقَ إِلَى لِقائِكَ فِي غَيرِ ضَرَّاءَ مُضِرَّةٍ، وَلاَ فِتْنَةٍ مُضِلَّةٍ، اللَّهُمَّ زَيِّنَا بِزِينَةِ الإِيمَانِ، وَاجْعَلْنَا هُدَاةً مُهْتَدِينَ.",
    transliteration:
      "Allahumma bi'ilmikal-ghayb, waqudratika 'alal-khalq, ahyinee ma 'alimtal-hayata khayran lee watawaffanee itha 'alimtal-wafata khayran lee, allahumma innee as-aluka khashyataka fil-ghaybi washshahadah, wa-as-aluka kalimatal-haqqi fir-rida walghadab, wa-as-alukal-qasda fil-ghina walfaqr, wa-as-aluka na'eeman la yanfad, wa-as-aluka qurrata 'aynin la tanqati', wa-as-alukar-rida ba'dal-qada', wa-as-aluka bardal-'ayshi ba'dal-mawt, wa-as-aluka laththatan-nathari ila wajhik, washshawqa ila liqa-ik fee ghayri darraa mudirrah, wala fitnatin mudillah, allahumma zayyinna bizeenatil-eeman waj'alna hudatan muhtadeen.",
    translation: {
      en: "O Allah, by Your knowledge of the unseen and Your power over creation, keep me alive so long as You know such life to be good for me and take me if You know death to be better for me. O Allah, I ask You for fear of You in private and in public, I ask You for the word of truth in contentment and in anger, I ask You for moderation in wealth and in poverty, I ask You for bliss that never runs out, I ask You for delight that never ceases, I ask You for contentment after Your decree, I ask You for a pleasant life after death, and I ask You for the delight of looking upon Your Face and a longing to meet You, without any harmful affliction or misleading trial. O Allah, beautify us with the adornment of faith and make us of those who guide and are rightly guided.",
      bs: "O Allahu, tako Ti Tvoga znanja o nevidljivom i Tvoje moći nad stvorenjima, poživi me dok god znaš da je život bolji za mene, a usmrti me kada znaš da je smrt bolja za mene. O Allahu, molim Te za strahopoštovanje prema Tebi u tajnosti i javnosti, i molim Te za riječ istine u zadovoljstvu i ljutnji, i molim Te za umjerenost u bogatstvu i siromaštvu, i molim Te za uživanje koje ne prestaje, i molim Te za radost koja ne prolazi, i molim Te za zadovoljstvo nakon presude, i molim Te za ugodan život nakon smrti, i molim Te za slast gledanja u Tvoje Lice, i čežnju za susretom s Tobom, bez štete koja bi me zadesila i iskušenja koje bi me u zabludu odvelo. O Allahu, ukrasi nas ukrasom vjerovanja i učini nas upućivačima koji su upućeni.",
    },
  },
  {
    id: "hisnul_muslim_63",
    category: "hisnul_muslim",
    title: {
      en: "Before Salam (9): By Your Being the One, the Self-Sufficient",
      bs: "Prije selama (9): Tako Ti Tvoje jednoće",
    },
    description: {
      en: "As-Samad: the Self-Sufficient Master, possessor of perfect attributes, to whom all creation turns in all its needs.",
      bs: "Es-Samed: Onaj kome se sve obraća za svaku potrebu, a On ni od koga ne ovisi; posjednik savršenih svojstava.",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ يَا أَللَّهُ بِأَنَّكَ الْوَاحِدُ الْأَحَدُ الصَّمَدُ الَّذِي لَمْ يَلِدْ وَلَمْ يولَدْ، وَلَمْ يَكنْ لَهُ كُفُواً أَحَدٌ، أَنْ تَغْفِرَ لِي ذُنُوبِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ.",
    transliteration:
      "Allahumma innee as-aluka ya Allah bi-annakal-wahidul-ahadus-samad, allathee lam yalid walam yoolad, walam yakun lahu kufuwan ahad, an taghfira lee thunoobee innaka antal-Ghafoorur-Raheem.",
    translation: {
      en: "O Allah, I ask You, O Allah, by virtue of You being the One, the Only, As-Samad, who begets not, nor was He begotten, and there is none comparable to Him, that You forgive me my sins, for verily You are the Most Forgiving, the Most Merciful.",
      bs: "O Allahu, ja Te molim, o Allahu, time što si Ti Jedan, Jedini, Utočište svakom, Onaj koji nije rodio i rođen nije, i kome niko ravan nije, da mi oprostiš moje grijehe, jer si Ti, zaista, Onaj koji mnogo oprašta, Milostivi.",
    },
  },
  {
    id: "hisnul_muslim_64",
    category: "hisnul_muslim",
    title: {
      en: "Before Salam (10): O Living, O Self-Subsisting",
      bs: "Prije selama (10): O Živi, o Vječni",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنَّ لَكَ الْحَمْدَ لَا إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ، الْمَنَّانُ، يَا بَدِيعَ السَّمَوَاتِ وَالْأَرْضِ يَا ذَا الْجَلاَلِ وَالْإِكْرَامِ، يَا حَيُّ يَا قَيُّومُ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ.",
    transliteration:
      "Allahumma innee as-aluka bianna lakal-hamd, la ilaha illa ant wahdaka la shareeka lak, almannan, ya badee'as-samawati wal-ard, ya thal-jalali wal-ikram, ya hayyu ya qayyoom, innee as-alukal-jannah, wa-a'oothu bika minan-nar.",
    translation: {
      en: "O Allah, I ask You, as to You belongs all praise, none has the right to be worshipped except You alone, without partner, the Bestower of favours. O Originator of the heavens and the Earth, O Possessor of majesty and honour, O Ever-Living, O Self-Subsisting, I ask You for Paradise and I take refuge in You from the Fire.",
      bs: "O Allahu, ja Te molim time što Tebi pripada hvala, nema boga osim Tebe, Jedinog, koji nemaš sudruga, Dobročinitelju, o Stvoritelju nebesa i Zemlje, o Veličanstveni i Plemeniti, o Živi, o Vječni, ja Te molim za Džennet i utječem Ti se od Vatre.",
    },
    reference: "Abu Dawud 1495",
  },
  {
    id: "hisnul_muslim_65",
    category: "hisnul_muslim",
    title: {
      en: "Before Salam (11): As I Bear Witness That You Are Allah",
      bs: "Prije selama (11): Time što svjedočim da si Ti Allah",
    },
    description: {
      en: "As-Samad: the Self-Sufficient Master, possessor of perfect attributes, to whom all creation turns in all its needs.",
      bs: "Es-Samed: Onaj kome se sve obraća za svaku potrebu, a On ni od koga ne ovisi; posjednik savršenih svojstava.",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنَّي أَشْهَدُ أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ الْأَحَدُ الصَّمَدُ الَّذِي لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُواً أَحَدٌ.",
    transliteration:
      "Allahumma innee as-aluka biannee ashhadu annaka antal-lah, la ilaha illa ant, al-ahadus-samad, allathee lam yalid walam yoolad walam yakun lahu kufuwan ahad.",
    translation: {
      en: "O Allah, I ask You, as I bear witness that You are Allah, none has the right to be worshipped except You, the One, As-Samad, who begets not, nor was He begotten, and there is none comparable to Him.",
      bs: "O Allahu, ja Te molim time što svjedočim da si Ti Allah, nema boga osim Tebe, Jedinog, Utočišta svakom, koji nije rodio i rođen nije, i kome niko ravan nije.",
    },
    reference: "Abu Dawud 1493, At-Tirmidhi 3475",
  },
  {
    id: "hisnul_muslim_66",
    category: "hisnul_muslim",
    title: {
      en: "After the Prayer (1): Astaghfirullah and Allahumma Antas-Salam",
      bs: "Poslije namaza (1): Estagfirullah i Allahumme entes-selam",
    },
    description: {
      en: "\"Astaghfirullah\" is said three times, followed by the rest. As-Salam: the One who is free from all defects and deficiencies.",
      bs: "\"Estagfirullah\" se izgovara tri puta, a zatim ostatak. Es-Selam: Onaj koji je slobodan od svake mahane i nedostatka.",
    },
    arabic:
      "أَسْتَغْفِرُ اللَّهَ، اللَّهُمَّ أَنْتَ السَّلاَمُ، وَمِنْكَ السَّلاَمُ، تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالْإِكْرَامِ.",
    transliteration:
      "Astaghfirul-lah. Allahumma antas-salam waminkas-salam, tabarakta ya thal-jalali wal-ikram.",
    translation: {
      en: "I seek the forgiveness of Allah. O Allah, You are As-Salam and from You is all peace. Blessed are You, O Possessor of majesty and honour.",
      bs: "Tražim oprost od Allaha. O Allahu, Ti si Es-Selam i od Tebe je mir. Blagoslovljen si, o Veličanstveni i Plemeniti.",
    },
    reference: "Muslim 591",
  },
  {
    id: "hisnul_muslim_67",
    category: "hisnul_muslim",
    title: {
      en: "After the Prayer (2): None Can Withhold What You Give",
      bs: "Poslije namaza (2): Niko ne može uskratiti ono što Ti daš",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لاَ مَانِعَ لِمَا أَعْطَيْتَ، وَلاَ مُعْطِيَ لِمَا مَنَعْتَ، وَلاَ يَنْفَعُ ذَا الْجَدِّ مِنْكَ الجَدُّ.",
    transliteration:
      "La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa 'ala kulli shayin qadeer, allahumma la mani'a lima a'tayt, wala mu'tiya lima mana't, wala yanfa'u thal-jaddi minkal-jad.",
    translation: {
      en: "None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent. O Allah, none can withhold what You give and none can give what You withhold, and the wealth of the wealthy cannot avail him against You.",
      bs: "Nema boga osim Allaha, Jedinog, On nema sudruga, Njemu pripada vlast i Njemu pripada hvala, i On sve može. O Allahu, niko ne može uskratiti ono što Ti daš, niti dati ono što Ti uskratiš, i imućnome njegov imetak ne može koristiti kod Tebe.",
    },
    reference: "Al-Bukhari 844, Muslim 593",
  },
  {
    id: "hisnul_muslim_68",
    category: "hisnul_muslim",
    title: {
      en: "After the Prayer (3): We Worship None but Him",
      bs: "Poslije namaza (3): Ne obožavamo nikoga osim Njega",
    },
    arabic:
      "لَا إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ، وَلاَ نَعْبُدُ إِلاَّ إِيَّاهُ, لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لَا إِلَهَ إِلاَّ اللَّهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الكَافِرُونَ.",
    transliteration:
      "La ilaha illal-lah, wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa 'ala kulli shayin qadeer. La hawla wala quwwata illa billah, la ilaha illal-lah, wala na'budu illa iyyah, lahun-ni'matu walahul-fadl walahuth-thana-ul-hasan, la ilaha illal-lah mukhliseena lahud-deen walaw karihal-kafiroon.",
    translation: {
      en: "None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent. There is no might nor power except with Allah. None has the right to be worshipped except Allah, and we worship none except Him. To Him belong all favour, grace and excellent praise. None has the right to be worshipped except Allah; we are sincere in devotion to Him, even though the disbelievers detest it.",
      bs: "Nema boga osim Allaha, Jedinog, On nema sudruga, Njemu pripada vlast i Njemu pripada hvala, i On sve može. Nema snage ni moći osim s Allahom. Nema boga osim Allaha, i mi ne obožavamo nikoga osim Njega. Njemu pripada blagodat, Njemu pripada dobrota i Njemu pripada lijepa pohvala. Nema boga osim Allaha, Njemu iskreno ispovijedamo vjeru, makar to mrzili nevjernici.",
    },
    reference: "Muslim 594",
  },
  {
    id: "hisnul_muslim_69",
    category: "hisnul_muslim",
    title: {
      en: "After the Prayer (4): Tasbih, Tahmid and Takbir",
      bs: "Poslije namaza (4): Tesbih, tahmid i tekbir",
    },
    description: {
      en: "Say \"Subhanallah\", \"Alhamdulillah\" and \"Allahu akbar\" thirty-three times each, then complete one hundred with \"La ilaha illallahu wahdahu...\". Whoever does so after every prayer will have his sins forgiven, even if they are like the foam of the sea.",
      bs: "Izgovoriti \"Subhanallah\", \"Elhamdulillah\" i \"Allahu ekber\" po trideset i tri puta, a zatim upotpuniti stotinu sa \"La ilahe illallahu vahdehu...\". Ko to čini nakon svakog namaza, bit će mu oprošteni grijesi, makar bili kao morska pjena.",
    },
    arabic:
      "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَاللَّهُ أَكْبَرُ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
    transliteration:
      "Subhanal-lah, walhamdu lillah, wallahu akbar. La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa 'ala kulli shayin qadeer.",
    translation: {
      en: "How perfect Allah is, all praise is for Allah, and Allah is the Greatest. None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent.",
      bs: "Slavljen neka je Allah, hvala Allahu, Allah je najveći. Nema boga osim Allaha, Jedinog, On nema sudruga, Njemu pripada vlast i Njemu pripada hvala, i On sve može.",
    },
    reference: "Muslim 597",
  },
  {
    id: "hisnul_muslim_70",
    category: "hisnul_muslim",
    title: {
      en: "After the Prayer (5): Al-Ikhlas, Al-Falaq and An-Nas",
      bs: "Poslije namaza (5): Sure Ihlas, Felek i Nas",
    },
    description: {
      en: "Recite these three surahs after every prayer: once after Dhuhr, 'Asr and 'Isha, and three times after Fajr and Maghrib.",
      bs: "Ove tri sure uče se nakon svakog namaza: po jednom nakon podne, ikindije i jacije, a po tri puta nakon sabaha i akšama.",
    },
    arabic:
      "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ﴿قُلْ هُوَ اللَّهُ أَحَدٌ. اللَّهُ الصَّمَدُ. لَمْ يَلِدْ وَلَمْ يُولَدْ. وَلَمْ يَكُن لَّهُ كُفُواً أَحَدٌ﴾ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ. مِن شَرِّ مَا خَلَقَ. وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ. وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ. وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ. مَلِكِ النَّاسِ. إِلَهِ النَّاسِ. مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ. الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ. مِنَ الْجِنَّةِ وَالنَّاسِ﴾",
    transliteration:
      "Bismillahir-Rahmanir-Raheem. Qul huwallahu ahad. Allahus-samad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad. Bismillahir-Rahmanir-Raheem. Qul a'udhu bi-rabbil-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharrin-naffathati fil-'uqad. Wa min sharri hasidin idha hasad. Bismillahir-Rahmanir-Raheem. Qul a'udhu bi-rabbin-nas. Malikin-nas. Ilahin-nas. Min sharril-waswasil-khannas. Alladhi yuwaswisu fi sudurin-nas. Minal-jinnati wan-nas.",
    translation: {
      en: "In the name of Allah, the Most Gracious, the Most Merciful. Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent. In the name of Allah, the Most Gracious, the Most Merciful. Say: I seek refuge in the Lord of daybreak, from the evil of that which He created, and from the evil of darkness when it settles, and from the evil of the blowers in knots, and from the evil of an envier when he envies. In the name of Allah, the Most Gracious, the Most Merciful. Say: I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind, from the evil of the retreating whisperer, who whispers into the breasts of mankind, from among the jinn and mankind.",
      bs: "U ime Allaha, Milostivog, Samilosnog! Reci: \"On je Allah – Jedan! Allah je Utočište svakom! Nije rodio i rođen nije, i niko Mu ravan nije!\" U ime Allaha, Milostivog, Samilosnog! Reci: \"Utječem se Gospodaru svitanja od zla onoga što On stvara, i od zla mrkle noći kada razastre tmine, i od zla smutljivca kad smutnje sije, i od zla zavidljivca kad zavist ne krije!\" U ime Allaha, Milostivog, Samilosnog! Reci: \"Utječem se Gospodaru ljudi, Vladaru ljudi, Bogu ljudi, od zla šejtana napasnika, koji zle misli unosi u srca ljudi – od džina i od ljudi!\"",
    },
    reference: "Qur'an 112-114; Abu Dawud 1523",
  },
  {
    id: "hisnul_muslim_71",
    category: "hisnul_muslim",
    title: {
      en: "After the Prayer (6): Ayat al-Kursi",
      bs: "Poslije namaza (6): Ajetul-kursija",
    },
    description: {
      en: "It is from the Sunnah to recite Ayat al-Kursi after every prayer.",
      bs: "Sunnet je proučiti Ajetul-kursiju nakon svakog namaza.",
    },
    arabic:
      "﴿اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾",
    transliteration:
      "Allahu la ilaha illa Huwal-Hayyul-Qayyum. La ta'khudhuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-ard. Man dhal-ladhi yashfa'u 'indahu illa bi-idhnihi. Ya'lamu ma bayna aydihim wa ma khalfahum. Wa la yuhituna bi-shay'im-min 'ilmihi illa bi-ma sha'a. Wasi'a kursiyyuhus-samawati wal-arda, wa la ya'uduhu hifzuhuma, wa Huwal-'Aliyyul-'Azim.",
    translation: {
      en: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
      bs: "Allah je – nema boga osim Njega – Živi i Vječni! Ne obuzima Ga ni drijemež ni san! Njegovo je ono što je na nebesima i ono što je na Zemlji! Ko se može pred Njim zauzimati za nekoga bez dopuštenja Njegova?! On zna šta je bilo i prije njih i šta će biti poslije njih, a od onoga što On zna – drugi znaju samo onoliko koliko On želi. Njegova Kursija obuhvaća i nebesa i Zemlju i Njemu ne dojadi održavanje njihovo; On je Svevišnji, Veličanstveni!",
    },
    reference: "Qur'an 2:255",
  },
  {
    id: "hisnul_muslim_72",
    category: "hisnul_muslim",
    title: {
      en: "After the Prayer (7): Tahlil Ten Times After Fajr and Maghrib",
      bs: "Poslije namaza (7): Tehlil deset puta nakon sabaha i akšama",
    },
    description: {
      en: "Said ten times after the Maghrib and Fajr prayers.",
      bs: "Izgovara se deset puta nakon akšam i sabah namaza.",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
    transliteration:
      "La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku walahul-hamd, yuhyee wayumeet, wahuwa 'ala kulli shayin qadeer.",
    translation: {
      en: "None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise. He gives life and causes death, and He is over all things omnipotent.",
      bs: "Nema boga osim Allaha, Jedinog, On nema sudruga, Njemu pripada vlast i Njemu pripada hvala, On oživljava i usmrćuje, i On sve može.",
    },
  },
  {
    id: "hisnul_muslim_73",
    category: "hisnul_muslim",
    title: {
      en: "After the Prayer (8): Beneficial Knowledge After Fajr",
      bs: "Poslije namaza (8): Korisno znanje nakon sabaha",
    },
    description: {
      en: "Said after giving salam at the end of the Fajr prayer.",
      bs: "Uči se nakon predaje selama na sabah namazu.",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نافِعاً، وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً.",
    transliteration:
      "Allahumma innee as-aluka 'ilman nafi'an, warizqan tayyiban, wa'amalan mutaqabbalan.",
    translation: {
      en: "O Allah, I ask You for beneficial knowledge, good and pure provision, and deeds that are accepted.",
      bs: "O Allahu, molim Te za korisno znanje, lijepu i čistu opskrbu i primljena djela.",
    },
    reference: "Ibn Majah 925",
  },
  {
    id: "hisnul_muslim_74",
    category: "hisnul_muslim",
    title: {
      en: "Istikharah: Seeking Allah's Guidance",
      bs: "Dova za istiharu",
    },
    description: {
      en: "Jabir ibn 'Abdullah (may Allah be pleased with him) said: \"The Messenger of Allah ﷺ used to teach us to seek Allah's guidance (istikharah) in all matters, just as he taught us a surah of the Qur'an. He would say: 'If any of you intends to do something, let him pray two rak'ahs other than the obligatory prayer, then say...'\" When reaching \"this matter\", one mentions one's need. Whoever seeks guidance from his Creator, consults his fellow believers and then remains firm in his resolve will not regret it, for Allah says: \"...and consult them in the matter. Then when you have decided, put your trust in Allah\" (Qur'an 3:159).",
      bs: "Džabir ibn Abdullah, radijallahu anhuma, kaže: \"Allahov Poslanik ﷺ nas je učio istiharu u svim stvarima, kao što nas je učio suri iz Kur'ana. Govorio je: 'Kada neko od vas namjerava nešto učiniti, neka klanja dva rekata mimo farza, a zatim neka kaže...'\" Kod riječi \"ova stvar\" spominje se ono što se želi. Nije se pokajao onaj ko je tražio izbor od Stvoritelja, posavjetovao se s vjernicima i zatim bio postojan u svojoj odluci, jer Allah kaže: \"...i dogovaraj se s njima o poslovima. A kada se odlučiš, onda se pouzdaj u Allaha\" (Ali Imran, 159).",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ العَظِيمِ؛ فَإِنَّكَ تَقْدِرُ وَلاَ أَقْدِرُ، وَتَعْلَمُ وَلاَ أَعْلَمُ، وَأَنْتَ عَلاَّمُ الغُيُوبِ، اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأمْرَ - وَيُسَمِّي حَاجَتَهُ - خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي – أَوْ قَالَ: عَاجِلِهِ وَآجِلِهِ - فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثمَّ بَارِكْ لِي فِيهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي – أَوْ قَالَ: عَاجِلِهِ وَآجِلِهِ – فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ، ثُمَّ أَرْضِنِي بِهِ.",
    transliteration:
      "Allahumma innee astakheeruka bi'ilmik, wa-astaqdiruka biqudratik, wa-as-aluka min fadlikal-'atheem, fa-innaka taqdiru wala aqdir, wata'lamu wala a'lam, wa-anta 'allamul-ghuyoob. Allahumma in kunta ta'lamu anna hathal-amra (mention your need) khayrun lee fee deenee wama'ashee wa'aqibati amree (or: 'ajilihi wa ajilihi) faqdurhu lee, wayassirhu lee, thumma barik lee feeh. Wa-in kunta ta'lamu anna hathal-amra sharrun lee fee deenee wama'ashee wa'aqibati amree (or: 'ajilihi wa ajilihi) fasrifhu 'annee wasrifnee 'anh, waqdur liyal-khayra haythu kan, thumma ardinee bih.",
    translation: {
      en: "O Allah, I seek Your guidance by virtue of Your knowledge, I seek ability by virtue of Your power, and I ask You of Your immense bounty, for You are able while I am not, You know while I do not, and You are the Knower of the unseen. O Allah, if You know that this matter (mention your need) is good for me in my religion, my livelihood and the outcome of my affairs (or: in the near and distant future), then decree it for me, make it easy for me, and then bless me in it. And if You know that this matter is bad for me in my religion, my livelihood and the outcome of my affairs (or: in the near and distant future), then turn it away from me and turn me away from it, decree for me what is good wherever it may be, and then make me content with it.",
      bs: "O Allahu, tražim od Tebe izbor po Tvome znanju, tražim od Tebe moć po Tvojoj moći i molim Te za Tvoju veliku dobrotu, jer Ti možeš, a ja ne mogu, Ti znaš, a ja ne znam, i Ti si Znalac skrivenog. O Allahu, ako znaš da je ova stvar (spomene se potreba) dobra za mene u mojoj vjeri, mom životu i ishodu mog posla (ili je rekao: sada i kasnije), onda mi je odredi, olakšaj mi je, a zatim mi daj berićet u njoj. A ako znaš da je ova stvar loša po mene u mojoj vjeri, mom životu i ishodu mog posla (ili je rekao: sada i kasnije), onda je otkloni od mene i mene od nje, i odredi mi dobro gdje god ono bilo, a zatim me učini zadovoljnim njime.",
    },
    reference: "Al-Bukhari 1162",
  },
  {
    id: "hisnul_muslim_112",
    category: "hisnul_muslim",
    title: {
      en: "When Turning Over in the Night",
      bs: "Dova kada se prevrćemo u snu tokom noći",
    },
    description: {
      en: "Al-Qahhar: the One who has subdued all of creation, to whom all creation is subservient; all movement occurs by His will.",
      bs: "El-Kahhar: Onaj koji je nadvladao sva stvorenja i kome su sva stvorenja potčinjena; svaki pokret se dešava Njegovom voljom.",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ الْوَاحِدُ الْقَهّارُ، رَبُّ السَّمَوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا الْعَزيزُ الْغَفَّارُ.",
    transliteration:
      "La ilaha illal-lahul-wahidul-qahhar, rabbus-samawati wal-ardi wama baynahuma, al-'azeezul-ghaffar.",
    translation: {
      en: "None has the right to be worshipped except Allah, the One, Al-Qahhar (the Subduer), Lord of the heavens and the Earth and all that is between them, the Almighty, the Oft-Forgiving.",
      bs: "Nema boga osim Allaha, Jedinog, Onoga koji sve nadvladava, Gospodara nebesa i Zemlje i onoga što je između njih, Silnog, Onoga koji mnogo oprašta.",
    },
  },
  {
    id: "hisnul_muslim_113",
    category: "hisnul_muslim",
    title: {
      en: "For Fear or Restlessness in Sleep",
      bs: "Dova protiv straha i nemira u snu",
    },
    arabic:
      "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ غَضَبِهِ وَعِقَابِهِ، وَشَرِّ عِبَادِهِ، وَمِنْ هَمَزَاتِ الشَّياطِينِ وَأَنْ يَحْضُرُونِ.",
    transliteration:
      "A'oothu bikalimatil-lahit-tammati min ghadabihi wa'iqabih, washarri 'ibadih, wamin hamazatish-shayateeni wa-an yahduroon.",
    translation: {
      en: "I seek refuge in the perfect words of Allah from His anger and His punishment, from the evil of His servants, and from the whisperings of the devils and from their coming to me.",
      bs: "Utječem se Allahovim savršenim riječima od Njegove srdžbe i kazne, od zla Njegovih robova, od šejtanskih došaptavanja i od toga da mi dođu.",
    },
    reference: "Abu Dawud 3893, At-Tirmidhi 3528",
  },
  {
    id: "hisnul_muslim_114",
    category: "hisnul_muslim",
    title: {
      en: "After a Bad Dream (1): Spitting Lightly to the Left",
      bs: "Nakon ružnog sna (1): Pljucnuti na lijevu stranu",
    },
    description: {
      en: "What to do after a bad dream: spit lightly (mostly air, with little spittle) to your left three times; seek refuge in Allah from Satan and from the evil of what you saw, three times; do not tell anyone about it; turn over onto your other side.",
      bs: "Šta učiniti nakon ružnog sna: lagano pljucnuti (uglavnom zrakom, s malo pljuvačke) na lijevu stranu tri puta; zatražiti utočište kod Allaha od šejtana i od zla onoga što je viđeno, tri puta; ne pričati nikome o tome; okrenuti se na drugu stranu.",
    },
    arabic: "يَنْفُثُ عَنْ يَسَارِهِ ثلاثاً.",
    transliteration: "",
    translation: {
      en: "He should spit lightly to his left three times.",
      bs: "Neka lagano pljucne na svoju lijevu stranu tri puta.",
    },
    reference: "Muslim 2261, 2262",
  },
  {
    id: "hisnul_muslim_115",
    category: "hisnul_muslim",
    title: {
      en: "After a Bad Dream (2): Getting Up to Pray",
      bs: "Nakon ružnog sna (2): Ustati i klanjati",
    },
    arabic: "ويَقُومُ يُصَلِّي إِنْ أَرَادَ ذَلِكَ.",
    transliteration: "",
    translation: {
      en: "And he may get up and pray if he wishes.",
      bs: "I neka ustane i klanja ako želi.",
    },
    reference: "Muslim 2263",
  },
  {
    id: "hisnul_muslim_116",
    category: "hisnul_muslim",
    title: {
      en: "Qunut in Witr (1): Guide Me Among Those You Have Guided",
      bs: "Kunut u vitru (1): Uputi me među onima koje si uputio",
    },
    description: {
      en: "\"The evil You have decreed\": Allah does not create pure evil devoid of any good, benefit, wisdom or mercy, nor does He punish anyone who has not sinned. Something may be good from one perspective and evil from another. Evil exists in His creation by His will and wisdom, not in His actions or His act of creating.",
      bs: "\"Zlo koje si odredio\": Allah ne stvara čisto zlo u kojem nema nikakvog dobra, koristi, mudrosti ili milosti, niti kažnjava ikoga ko nije počinio grijeh. Nešto može biti dobro s jednog stanovišta, a zlo s drugog. Zlo postoji u Njegovim stvorenjima po Njegovoj volji i mudrosti, a ne u Njegovim djelima niti u samom činu stvaranja.",
    },
    arabic:
      "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ؛ فَإِنَّكَ تَقْضِي وَلاَ يُقْضَى عَلَيْكَ، إِنَّهُ لاَ يَذِلُّ مَنْ وَالَيْتَ، [وَلاَ يَعِزُّ مَنْ عَادَيْتَ]، تَبارَكْتَ رَبَّنا وَتَعَالَيْتَ.",
    transliteration:
      "Allahummah-dinee feeman hadayt, wa'afinee feeman 'afayt, watawallanee feeman tawallayt, wabarik lee feema a'tayt, waqinee sharra ma qadayt, fa-innaka taqdee wala yuqda 'alayk, innahu la yathillu man walayt, [wala ya'izzu man 'adayt], tabarakta rabbana wata'alayt.",
    translation: {
      en: "O Allah, guide me among those You have guided, grant me well-being among those You have granted well-being, take me into Your care among those You have taken into Your care, bless me in what You have given, and protect me from the evil of what You have decreed, for verily You decree and none can decree over You. Indeed, the one You befriend is never humiliated, [and the one You take as an enemy is never honoured]. Blessed are You, our Lord, and Exalted.",
      bs: "O Allahu, uputi me među onima koje si uputio, podari mi zdravlje među onima kojima si podario zdravlje, preuzmi brigu o meni među onima o kojima si preuzeo brigu, blagoslovi mi ono što si mi dao i sačuvaj me zla onoga što si odredio, jer Ti određuješ, a Tebi niko ne određuje. Zaista, neće biti ponižen onaj kome si Ti zaštitnik, [niti će biti uzvišen onaj kome si Ti neprijatelj]. Blagoslovljen si, Gospodaru naš, i Uzvišen.",
    },
    reference: "Abu Dawud 1425, At-Tirmidhi 464",
  },
  {
    id: "hisnul_muslim_117",
    category: "hisnul_muslim",
    title: {
      en: "Qunut in Witr (2): Refuge in Your Pleasure from Your Anger",
      bs: "Kunut u vitru (2): Utočište u Tvom zadovoljstvu od Tvoje srdžbe",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ، وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ، وَأَعُوذُ بِكَ مِنْكَ، لاَ أُحْصِي ثَنَاءً عَلَيْكَ، أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ.",
    transliteration:
      "Allahumma innee a'oothu biridaka min sakhatik, wabimu'afatika min 'uqoobatik, wa-a'oothu bika mink, la ohsee thana-an 'alayk, anta kama athnayta 'ala nafsik.",
    translation: {
      en: "O Allah, I take refuge within Your pleasure from Your displeasure and within Your pardon from Your punishment, and I take refuge in You from You. I cannot enumerate Your praise. You are as You have praised Yourself.",
      bs: "O Allahu, utječem se Tvome zadovoljstvu od Tvoje srdžbe, i Tvome oprostu od Tvoje kazne, i utječem se Tebi od Tebe. Ja Te ne mogu dovoljno pohvaliti, Ti si onakav kako si Sebe pohvalio.",
    },
    reference: "Abu Dawud 1427, At-Tirmidhi 3566",
  },
  {
    id: "hisnul_muslim_118",
    category: "hisnul_muslim",
    title: {
      en: "Qunut in Witr (3): You Alone We Worship",
      bs: "Kunut u vitru (3): Samo Tebe obožavamo",
    },
    arabic:
      "اللَّهُمَّ إِيَّاكَ نَعْبُدُ، وَلَكَ نُصَلِّي وَنَسْجُدُ، وَإِلَيْكَ نَسْعَى وَنَحْفِدُ، نَرْجُو رَحْمَتَكَ، وَنَخْشَى عَذَابَكَ، إِنَّ عَذَابَكَ بِالكَافِرِينَ مُلْحَقٌ. اللَّهُمَّ إِنَّا نَسْتَعينُكَ، وَنَسْتَغْفِرُكَ، وَنُثْنِي عَلَيْكَ الْخَيْرَ، وَلاَ نَكْفُرُكَ، وَنُؤْمِنُ بِكَ، وَنَخْضَعُ لَكَ، وَنَخْلَعُ مَنْ يَكْفرُكَ.",
    transliteration:
      "Allahumma iyyaka na'bud, walaka nusallee wanasjud, wa-ilayka nas'a wanahfid, narjoo rahmatak, wanakhsha 'athabak, inna 'athabaka bilkafireena mulhaq. Allahumma inna nasta'eenuk, wanastaghfiruk, wanuthnee 'alaykal-khayr, wala nakfuruk, wanu'minu bik, wanakhda'u lak, wanakhla'u man yakfuruk.",
    translation: {
      en: "O Allah, You alone we worship, to You we pray and prostrate, and towards You we strive and hasten. We hope for Your mercy and fear Your punishment; verily, Your punishment will overtake the disbelievers. O Allah, we seek Your help and ask Your forgiveness, we praise You with all good and do not deny You. We believe in You, humble ourselves before You, and disown whoever disbelieves in You.",
      bs: "O Allahu, samo Tebe obožavamo, i Tebi namaz klanjamo i sedždu činimo, i Tebi žurimo i služimo. Nadamo se Tvojoj milosti i strahujemo od Tvoje kazne. Zaista će Tvoja kazna stići nevjernike. O Allahu, mi tražimo Tvoju pomoć, i tražimo Tvoj oprost, i hvalimo Te dobrim, i ne poričemo Te, i vjerujemo u Tebe, i pokoravamo Ti se, i odričemo se onoga ko Te poriče.",
    },
  },
  {
    id: "hisnul_muslim_119",
    category: "hisnul_muslim",
    title: {
      en: "After the Witr Prayer: Glory Be to the King, the Most Holy",
      bs: "Poslije vitr namaza: Slavljen neka je Vladar, Sveti",
    },
    description: {
      en: "Said three times after the Witr prayer; the third time, raise and lengthen the voice and add: \"Lord of the angels and the Spirit\" (the Spirit being Jibril).",
      bs: "Izgovara se tri puta poslije vitr namaza; treći put se povisi i oduži glas i doda: \"Gospodar meleka i Ruha\" (Ruh je Džibril).",
    },
    arabic:
      "سُبْحَانَ المَلِكِ القُدُّوسِ، [رَبِّ الْمَلاَئِكَةِ وَالرُّوحِ].",
    transliteration:
      "Subhanal-malikil-quddoos. [Rabbil-mala-ikati warrooh.]",
    translation: {
      en: "How perfect is the King, the Most Holy. [Lord of the angels and the Spirit.]",
      bs: "Slavljen neka je Vladar, Sveti. [Gospodar meleka i Ruha.]",
    },
  },
  {
    id: "hisnul_muslim_120",
    category: "hisnul_muslim",
    title: {
      en: "Worry and Grief (1): I Am Your Servant",
      bs: "Briga i tuga (1): Ja sam Tvoj rob",
    },
    arabic:
      "اللَّهُمَّ إِنِّي عَبْدُكَ، ابْنُ عَبْدِكَ، ابْنُ أَمَتِكَ، نَاصِيَتِي بِيَدِكَ، مَاضٍ فِيَّ حُكْمُكَ، عَدْلٌ فِيَّ قَضَاؤُكَ، أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ، سَمَّيْتَ بِهِ نَفْسَكَ، أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ، أَوْ عَلَّمْتَهُ أَحَداً مِنْ خَلْقِكَ، أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الغَيْبِ عِنْدَكَ، أَنْ تَجْعَلَ القُرْآنَ رَبِيعَ قَلْبِي، وَنُورَ صَدْرِي، وَجَلاَءَ حُزْنِي، وَذَهَابَ هَمِّي.",
    transliteration:
      "Allahumma innee 'abduk, ibnu 'abdik, ibnu amatik, nasiyatee biyadik, madin fiyya hukmuk, 'adlun fiyya qada-ok, as-aluka bikulli ismin huwa lak, sammayta bihi nafsak, aw anzaltahu fee kitabik, aw 'allamtahu ahadan min khalqik, awis-ta'tharta bihi fee 'ilmil-ghaybi 'indak, an taj'alal-Qur'ana rabee'a qalbee, wanoora sadree, wajala-a huznee, wathahaba hammee.",
    translation: {
      en: "O Allah, I am Your servant, son of Your servant, son of Your maidservant. My forelock is in Your hand, Your command over me is forever executed, and Your decree over me is just. I ask You by every name belonging to You, with which You have named Yourself, or revealed in Your Book, or taught to any of Your creation, or kept with Yourself in the knowledge of the unseen, that You make the Qur'an the spring of my heart, the light of my chest, the removal of my sorrow and the departure of my anxiety.",
      bs: "O Allahu, ja sam Tvoj rob, sin Tvoga roba, sin Tvoje robinje, moje čelo je u Tvojoj ruci, Tvoja odredba se na meni sprovodi, Tvoja presuda o meni je pravedna. Molim Te svakim Tvojim imenom, kojim si Sebe nazvao, ili si ga u Svojoj Knjizi objavio, ili si ga nekoga od Svojih stvorenja podučio, ili si ga u znanju o nevidljivom kod Sebe zadržao, da učiniš Kur'an proljećem moga srca, i svjetlom mojih prsa, i onim što će otkloniti moju tugu i otjerati moju brigu.",
    },
  },
  {
    id: "hisnul_muslim_121",
    category: "hisnul_muslim",
    title: {
      en: "Worry and Grief (2): Refuge from Anxiety and Sorrow",
      bs: "Briga i tuga (2): Utočište od brige i tuge",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ.",
    transliteration:
      "Allahumma innee a'oothu bika minal-hammi walhuzn, wal'ajzi walkasali walbukhli waljubn, wadal'id-dayni waghalabatir-rijal.",
    translation: {
      en: "O Allah, I take refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and being overpowered by men.",
      bs: "O Allahu, utječem Ti se od brige i tuge, od nemoći i lijenosti, od škrtosti i kukavičluka, od tereta duga i od nadmoći ljudi.",
    },
    reference: "Al-Bukhari 6369",
  },
  {
    id: "hisnul_muslim_122",
    category: "hisnul_muslim",
    title: {
      en: "In Distress (1): None Worthy of Worship but Allah, the Magnificent",
      bs: "U nevolji (1): Nema boga osim Allaha, Veličanstvenog",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ الْعَظِيمُ الْحَلِيمُ، لاَ إِلَهَ إِلاَّ اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لاَ إِلَهَ إِلاَّ اللَّهُ رَبُّ السَّمَوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ.",
    transliteration:
      "La ilaha illal-lahul-'atheemul-haleem, la ilaha illal-lahu rabbul-'arshil-'atheem, la ilaha illal-lahu rabbus-samawati warabbul-ardi warabbul-'arshil-kareem.",
    translation: {
      en: "None has the right to be worshipped except Allah, the Magnificent, the Forbearing. None has the right to be worshipped except Allah, Lord of the Magnificent Throne. None has the right to be worshipped except Allah, Lord of the heavens, Lord of the Earth and Lord of the Noble Throne.",
      bs: "Nema boga osim Allaha, Veličanstvenog, Blagog. Nema boga osim Allaha, Gospodara Arša Veličanstvenog. Nema boga osim Allaha, Gospodara nebesa i Gospodara Zemlje i Gospodara Arša Plemenitog.",
    },
    reference: "Al-Bukhari 6346, Muslim 2730",
  },
  {
    id: "hisnul_muslim_123",
    category: "hisnul_muslim",
    title: {
      en: "In Distress (2): It Is Your Mercy I Hope For",
      bs: "U nevolji (2): Tvojoj se milosti nadam",
    },
    arabic:
      "اللَّهُمَّ رَحْمَتَكَ أَرْجُو، فَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ، وَأَصْلِحْ لِي شَأْنِي كُلَّهُ، لاَ إِلَهَ إِلاَّ أَنْتَ.",
    transliteration:
      "Allahumma rahmataka arjoo fala takilnee ila nafsee tarfata 'ayn, wa-aslih lee sha'nee kullah, la ilaha illa ant.",
    translation: {
      en: "O Allah, it is Your mercy that I hope for, so do not leave me to myself even for the blink of an eye, and rectify all of my affairs for me. None has the right to be worshipped except You.",
      bs: "O Allahu, Tvojoj se milosti nadam, pa me ne prepuštaj samom sebi ni koliko treptaj oka, i popravi sve moje stanje. Nema boga osim Tebe.",
    },
    reference: "Abu Dawud 5090",
  },
  {
    id: "hisnul_muslim_124",
    category: "hisnul_muslim",
    title: {
      en: "In Distress (3): The Supplication of Yunus",
      bs: "U nevolji (3): Dova Junusa, a.s.",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظّالِمِينَ.",
    transliteration:
      "La ilaha illa anta subhanaka innee kuntu minath-thalimeen.",
    translation: {
      en: "None has the right to be worshipped except You. How perfect You are! Verily, I have been among the wrongdoers.",
      bs: "Nema boga osim Tebe, hvaljen neka si, a ja sam se zaista ogriješio prema sebi!",
    },
    reference: "Qur'an 21:87; At-Tirmidhi 3505",
  },
  {
    id: "hisnul_muslim_125",
    category: "hisnul_muslim",
    title: {
      en: "In Distress (4): Allah, Allah Is My Lord",
      bs: "U nevolji (4): Allah, Allah je moj Gospodar",
    },
    arabic: "اللَّهُ اللَّهُ رَبِّي لاَ أُشْرِكُ بِهِ شَيْئاً.",
    transliteration: "Allahu Allahu rabbee la ushriku bihi shay'an.",
    translation: {
      en: "Allah, Allah is my Lord; I do not associate anything with Him.",
      bs: "Allah, Allah je moj Gospodar, ja Njemu ništa ne pridružujem.",
    },
    reference: "Abu Dawud 1525",
  },
  {
    id: "hisnul_muslim_126",
    category: "hisnul_muslim",
    title: {
      en: "Facing an Enemy or Ruler (1): We Place You Before Them",
      bs: "Pred neprijateljem ili vladarom (1): Tebe stavljamo pred njih",
    },
    arabic:
      "اللَّهُمَّ إِنَّا نَجْعَلُكَ فِي نُحُورِهِم، وَنَعُوذُ بِكَ مِنْ شُرُورِهِمْ.",
    transliteration:
      "Allahumma inna naj'aluka fee nuhoorihim wana'oothu bika min shuroorihim.",
    translation: {
      en: "O Allah, we place You before them and we take refuge in You from their evil.",
      bs: "O Allahu, Tebe stavljamo pred njih i Tebi se utječemo od njihovog zla.",
    },
    reference: "Abu Dawud 1537",
  },
  {
    id: "hisnul_muslim_127",
    category: "hisnul_muslim",
    title: {
      en: "Facing an Enemy or Ruler (2): You Are My Support",
      bs: "Pred neprijateljem ili vladarom (2): Ti si moj oslonac",
    },
    arabic:
      "اللَّهُمَّ أَنْتَ عَضُدِي، وَأَنْتَ نَصِيرِي، بِكَ أَحُولُ وَبِكَ أَصُولُ، وَبِكَ أُقاتِلُ.",
    transliteration:
      "Allahumma anta 'adudee, wa-anta naseeree, bika ahoolu, wabika asoolu, wabika uqatil.",
    translation: {
      en: "O Allah, You are my support and You are my helper. By You I move, by You I attack, and by You I fight.",
      bs: "O Allahu, Ti si moj oslonac i Ti si moj pomagač. Tobom se krećem, Tobom napadam i Tobom se borim.",
    },
    reference: "Abu Dawud 2632, At-Tirmidhi 3584",
  },
  {
    id: "hisnul_muslim_128",
    category: "hisnul_muslim",
    title: {
      en: "Facing an Enemy or Ruler (3): Allah Is Sufficient for Us",
      bs: "Pred neprijateljem ili vladarom (3): Dovoljan je nama Allah",
    },
    arabic: "حَسْبُنا اللَّهُ وَنِعْمَ الْوَكِيلُ.",
    transliteration: "Hasbunal-lahu wani'mal-wakeel.",
    translation: {
      en: "Allah is sufficient for us, and He is the best Disposer of affairs.",
      bs: "Dovoljan je nama Allah i divan je On Gospodar!",
    },
    reference: "Qur'an 3:173; Al-Bukhari 4563",
  },
  {
    id: "hisnul_muslim_129",
    category: "hisnul_muslim",
    title: {
      en: "Against a Ruler's Oppression (1): Be My Protector",
      bs: "Protiv nepravde vladara (1): Budi mi zaštitnik",
    },
    arabic:
      "اللَّهُمَّ ربَّ السَّمَوَاتِ السَّبْعِ، وَرَبَّ الْعَرْشِ الْعَظِيمِ، كُنْ لِي جَاراً مِنْ فُلاَنِ بْنِ فُلاَنٍ، وَأَحْزَابِهِ مِنْ خَلاَئِقِكَ، أَنْ يَفْرُطَ عَلَيَّ أَحَدٌ مِنْهُمْ أَوْ يَطْغَى، عَزَّ جَارُكَ، وَجَلَّ ثَنَاؤُكَ، وَلاَ إِلَهَ إِلاَّ أَنْتَ.",
    transliteration:
      "Allaahumma rabbas-samaawaatis-sab'i, wa Rabbal-'Arshil-'Adheem, Kun lee jaaran min (here you mention the person's name) wa 'ahzabihi min khalaa'iqika, 'an yafruta 'alayya 'ahadun minhum 'aw yatghaa, 'Azza jaaruka, wa jalla thanaa'uka, wa laa 'ilaaha 'illaa 'Anta.",
    translation: {
      en: "O Allah, Lord of the seven heavens and Lord of the Magnificent Throne, be my protector against [so-and-so, son of so-and-so] and his allies from among Your creation, lest any of them transgress against me or oppress me. Mighty is the one You protect, glorious is Your praise, and none has the right to be worshipped except You.",
      bs: "O Allahu, Gospodaru sedam nebesa i Gospodaru Arša veličanstvenog, budi mi zaštitnik od tog i tog, sina tog i tog, i njegovih pristalica od Tvojih stvorenja, da niko od njih ne pretjera protiv mene ili da mi nasilje ne učini. Moćan je onaj koga Ti štitiš, uzvišena je hvala Tvoja i nema boga osim Tebe.",
    },
  },
  {
    id: "hisnul_muslim_130",
    category: "hisnul_muslim",
    title: {
      en: "Against a Ruler's Oppression (2): Allah Is Mightier",
      bs: "Protiv nepravde vladara (2): Allah je moćniji",
    },
    description: {
      en: "Recite three times. Mention the person's name where indicated.",
      bs: "Proučiti tri puta. Na označenom mjestu spomenuti ime osobe.",
    },
    arabic:
      "اللَّهُ أَكْبَرُ، اللَّهُ أَعَزُّ مِنْ خَلْقِهِ جَمِيعاً، اللَّهُ أَعَزُّ مِمَّا أَخَافُ وَأَحْذَرُ، أَعُوذُ بِاللَّهِ الَّذِي لاَ إِلَهَ إِلاَّ هُوَ، الْمُمْسِكِ السَّمَوَاتِ السَّبْعِ أَنْ يَقَعْنَ عَلَى الْأَرْضِ إِلاَّ بِإِذْنِهِ، مِنْ شَرِّ عَبْدِكَ فُلاَنٍ، وَجُنُودِهِ وَأَتْبَاعِهِ وَأَشْيَاعِهِ، مِنْ الْجِنِّ وَالإِنْسِ، اللَّهُمَّ كُنْ لِي جَاراً مِنْ شَرِّهِمْ، جَلَّ ثَنَاؤُكَ وَعَزَّ جَارُكَ، وَتَبَارَكَ اسْمُكَ، وَلاَ إِلَهَ غَيْرُكَ.",
    transliteration:
      "Allaahu Akbar, Allaahu 'a'azzu min khalqihi jamee'an, Allaahu 'a'azzu mimmaa 'akhaafu wa 'ahdharu, 'a'oothu billaahil-lathee laa ilaaha illaa huwa, almumsikis-samaawaatis-sab'i 'an yaqa'na 'alaal-'ardhi 'illaa bi'ithnihi, min sharri 'abdika (name of the person) wa junoodihi wa 'atbaa'ihi wa ashyaa'ihi minal-jinni wal'insi, Allaahumma kun lee jaaran min sharrihim, Jalla thanaa'uka wa 'azza jaaruka, wa tabaarakasmuka, wa laa ilaaha ghayruka.",
    translation: {
      en: "Allah is the Greatest. Allah is Mightier than all His creation. Allah is Mightier than what I fear and dread. I seek refuge in Allah, besides whom none has the right to be worshipped, who holds back the seven heavens from falling upon the Earth except by His permission, from the evil of Your servant [name of the person], and his troops, followers and supporters from among the jinn and mankind. O Allah, be my protector against their evil. Glorious is Your praise, mighty is the one You protect, blessed is Your Name, and there is no god other than You.",
      bs: "Allah je najveći, Allah je moćniji od svih Svojih stvorenja. Allah je moćniji od onoga čega se bojim i pribojavam. Utječem se Allahu, osim kojeg nema drugog boga, koji drži sedam nebesa da ne padnu na Zemlju osim Njegovom dozvolom, od zla Tvoga roba [ime osobe], i njegove vojske, i njegovih sljedbenika i pristalica, od džina i ljudi. O Allahu, budi mi zaštitnik od njihovog zla. Veličanstvena je hvala Tvoja, moćan je onaj koga Ti štitiš, blagoslovljeno je ime Tvoje i nema boga osim Tebe.",
    },
  },
  {
    id: "hisnul_muslim_131",
    category: "hisnul_muslim",
    title: {
      en: "Against an Enemy: Defeat the Confederates",
      bs: "Dova protiv neprijatelja: Porazi saveznike",
    },
    arabic:
      "اللَّهُمَّ مُنْزِلَ الْكِتَابِ، سَرِيعَ الْحِسَابِ، اهْزِمِ الأَحْزَابَ، اللَّهُمَّ اهزِمْهُمْ وَزَلْزِلْهُمْ.",
    transliteration:
      "Allahumma munzilal-kitab, saree'al-hisab, ihzimil-ahzab, allahummah-zimhum wazalzilhum.",
    translation: {
      en: "O Allah, Revealer of the Book, Swift at reckoning, defeat the confederates. O Allah, defeat them and convulse them.",
      bs: "O Allahu, Ti koji si objavio Knjigu i koji brzo svodiš račune, porazi saveznike! O Allahu, porazi ih i potresi ih!",
    },
    reference: "Al-Bukhari 2933, Muslim 1742",
  },
  {
    id: "hisnul_muslim_132",
    category: "hisnul_muslim",
    title: {
      en: "When Fearing Harm from People",
      bs: "Kada se bojiš da bi ti ljudi mogli nauditi",
    },
    arabic: "اللَّهُمَّ اكْفِنِيهِمْ بِمَا شِئْتَ.",
    transliteration: "Allahummak-fineehim bima shi't.",
    translation: {
      en: "O Allah, protect me from them with whatever You will.",
      bs: "O Allahu, zaštiti me od njih kako Ti hoćeš.",
    },
    reference: "Muslim 3005",
  },
  {
    id: "hisnul_muslim_133",
    category: "hisnul_muslim",
    title: {
      en: "Doubts in Faith (1): Seek Refuge in Allah",
      bs: "Sumnja u vjeri (1): Zatražiti utočište kod Allaha",
    },
    arabic: "يَسْتَعِيذُ بِاللَّهِ و يَنْتَهِي عَمَّا شك فِيهِ.",
    transliteration: "",
    translation: {
      en: "He should seek refuge in Allah and stop dwelling on what he has doubts about.",
      bs: "Neka zatraži utočište kod Allaha i neka prestane razmišljati o onome u što sumnja.",
    },
    reference: "Al-Bukhari 3276, Muslim 134",
  },
  {
    id: "hisnul_muslim_134",
    category: "hisnul_muslim",
    title: {
      en: "Doubts in Faith (2): I Believe in Allah and His Messengers",
      bs: "Sumnja u vjeri (2): Vjerujem u Allaha i Njegove poslanike",
    },
    arabic: "يَقُولُ: آمَنْتُ بِاللَّهِ وَرُسُلِهِ.",
    transliteration: "Amantu billahi warusulih.",
    translation: {
      en: "He should say: I believe in Allah and His Messengers.",
      bs: "Neka kaže: \"Vjerujem u Allaha i Njegove poslanike.\"",
    },
    reference: "Muslim 134",
  },
  {
    id: "hisnul_muslim_135",
    category: "hisnul_muslim",
    title: {
      en: "Doubts in Faith (3): He Is the First and the Last",
      bs: "Sumnja u vjeri (3): On je Prvi i Posljednji",
    },
    description: {
      en: "Az-Zahir (the Manifest): indicates the greatness of His attributes and the insignificance of all creation before His greatness and loftiness, for He is above all His creation in His essence and attributes. Al-Batin (the Hidden): indicates His knowledge of all secrets, of what is in the hearts and the most intimate of things, and His closeness to all in a manner befitting His majesty.",
      bs: "Ez-Zahir (Vidljivi): ukazuje na veličinu Njegovih svojstava i neznatnost svakog stvorenja u odnosu na Njegovu veličinu i uzvišenost, jer On je iznad svih Svojih stvorenja po Svome biću i svojstvima. El-Batin (Nevidljivi): ukazuje na Njegovo znanje o svim tajnama, o onome što je u srcima i o najskrivenijim stvarima, kao i na Njegovu blizinu svemu na način koji dolikuje Njegovoj veličini.",
    },
    arabic:
      "يَقْرَأُ قَوْلَهُ تَعَالَى: ﴿هُوَ الْأوَّلُ وَالْآخِرُ وَالظّاهِرُ وَالْباطِنُ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ﴾.",
    transliteration:
      "Huwal-awwalu wal-akhiru waththahiru walbatinu, wahuwa bikulli shay-in 'aleem.",
    translation: {
      en: "He should recite the words of Allah the Exalted: \"He is the First and the Last, the Manifest and the Hidden, and He has full knowledge of all things.\"",
      bs: "Neka prouči riječi Uzvišenog Allaha: \"On je Prvi i Posljednji, i Vidljivi i Nevidljivi, i On zna sve.\"",
    },
    reference: "Qur'an 57:3; Abu Dawud 5110",
  },
  {
    id: "hisnul_muslim_136",
    category: "hisnul_muslim",
    title: {
      en: "Settling a Debt (1): Suffice Me with What Is Lawful",
      bs: "Vraćanje duga (1): Učini mi dovoljnim ono što je dozvoljeno",
    },
    arabic:
      "اللَّهُمَّ اكْفِنِي بِحَلاَلِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.",
    transliteration:
      "Allahummak-finee bihalalika 'an haramik, wa-aghninee bifadlika 'amman siwak.",
    translation: {
      en: "O Allah, suffice me with what You have made lawful against what You have made unlawful, and by Your bounty make me independent of all besides You.",
      bs: "O Allahu, učini da mi ono što si dozvolio bude dovoljno pa da ne posegnem za onim što si zabranio, i Svojom dobrotom učini me neovisnim od svih osim Tebe.",
    },
    reference: "At-Tirmidhi 3563",
  },
  {
    id: "hisnul_muslim_137",
    category: "hisnul_muslim",
    title: {
      en: "Settling a Debt (2): Refuge from the Burden of Debt",
      bs: "Vraćanje duga (2): Utočište od tereta duga",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ.",
    transliteration:
      "Allahumma innee a'oothu bika minal-hammi walhuzn, wal'ajzi walkasal, walbukhl, waljubn, wadal'id-dayni waghalabatir-rijal.",
    translation: {
      en: "O Allah, I take refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and being overpowered by men.",
      bs: "O Allahu, utječem Ti se od brige i tuge, od nemoći i lijenosti, od škrtosti i kukavičluka, od tereta duga i od nadmoći ljudi.",
    },
    reference: "Al-Bukhari 6369",
  },
  {
    id: "hisnul_muslim_138",
    category: "hisnul_muslim",
    title: {
      en: "Against Satan's Distractions in Prayer and Recitation",
      bs: "Protiv šejtanskih vesvesa u namazu i pri učenju Kur'ana",
    },
    description: {
      en: "'Uthman ibn Abi al-'As said: \"O Messenger of Allah, Satan comes between me and my prayer and recitation, confusing me.\" The Messenger of Allah ﷺ replied: \"That is a devil called Khinzab. If you sense him, seek refuge in Allah from him and spit lightly (mostly air, with little spittle) to your left three times.\"",
      bs: "Osman ibn Ebil-As, r.a., kaže: \"Allahov Poslaniče, šejtan se ispriječio između mene i mog namaza i učenja, pa me u tome zbunjuje.\" Allahov Poslanik ﷺ je rekao: \"To je šejtan po imenu Hinzeb. Kada ga osjetiš, zatraži utočište kod Allaha od njega i lagano pljucni na svoju lijevu stranu tri puta.\"",
    },
    arabic:
      "أَعُوذُ بِاللَّهِ مِنَ الشَّيطَانِ الرَّجِيمِ.",
    transliteration: "A'oothu billahi minash-shaytanir-rajeem.",
    translation: {
      en: "I seek refuge in Allah from the accursed Satan.",
      bs: "Utječem se Allahu od prokletog šejtana.",
    },
    reference: "Muslim 2203",
  },
  {
    id: "hisnul_muslim_139",
    category: "hisnul_muslim",
    title: {
      en: "When Something Becomes Difficult",
      bs: "Dova kad ti nešto postane teško",
    },
    arabic:
      "اللَّهُمَّ لاَ سَهْلَ إِلاَّ مَا جَعَلْتَهُ سَهْلاً، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلاً.",
    transliteration:
      "Allahumma la sahla illa ma ja'altahu sahla, wa-anta taj'alul-hazna itha shi'ta sahla.",
    translation: {
      en: "O Allah, there is no ease except in that which You have made easy, and You make the difficult, if You wish, easy.",
      bs: "O Allahu, nema lahkog osim onoga što Ti učiniš lahkim, a Ti i teško, kad hoćeš, učiniš lahkim.",
    },
  },
  {
    id: "hisnul_muslim_140",
    category: "hisnul_muslim",
    title: {
      en: "What to Do After Committing a Sin",
      bs: "Šta uraditi nakon počinjenog grijeha",
    },
    arabic:
      "مَا مِنْ عَبْدٍ يُذنِبُ ذَنْباً فَيُحْسِنُ الطُّهُورَ، ثُمَّ يَقُومُ فَيُصَلِّي رَكْعَتَيْنِ، ثُمَّ يَسْتَغْفِرُ اللَّهَ إِلاَّ غَفَرَ اللَّهُ لَهُ.",
    transliteration: "",
    translation: {
      en: "There is no servant who commits a sin, then purifies himself well, then stands and prays two rak'ahs, then seeks Allah's forgiveness, except that Allah forgives him.",
      bs: "Nema tog roba koji počini grijeh, pa lijepo uzme abdest, potom ustane i klanja dva rekata, a zatim zamoli Allaha za oprost, a da mu Allah neće oprostiti.",
    },
    reference: "Abu Dawud 1521, At-Tirmidhi 406",
  },
  {
    id: "hisnul_muslim_141",
    category: "hisnul_muslim",
    title: {
      en: "Repelling Satan (1): Seeking Refuge in Allah",
      bs: "Odbijanje šejtana (1): Traženje utočišta kod Allaha",
    },
    arabic: "الْاسْتِعَاذَةُ بِاللَّهِ مِنْهُ.",
    transliteration: "",
    translation: {
      en: "Seeking refuge in Allah from him.",
      bs: "Traženje utočišta kod Allaha od njega.",
    },
  },
  {
    id: "hisnul_muslim_142",
    category: "hisnul_muslim",
    title: {
      en: "Repelling Satan (2): The Adhan",
      bs: "Odbijanje šejtana (2): Ezan",
    },
    arabic: "الْأَذَانُ",
    transliteration: "",
    translation: {
      en: "The adhan (call to prayer).",
      bs: "Ezan.",
    },
    reference: "Al-Bukhari 608, Muslim 389",
  },
  {
    id: "hisnul_muslim_143",
    category: "hisnul_muslim",
    title: {
      en: "Repelling Satan (3): Dhikr and Recitation of the Qur'an",
      bs: "Odbijanje šejtana (3): Zikr i učenje Kur'ana",
    },
    description: {
      en: "E.g. the hadith: \"Do not make your houses graveyards; indeed, Satan flees from the house in which Surah al-Baqarah is recited\" (Muslim 780). Also the morning and evening adhkar, the adhkar before sleeping and on waking, on entering and leaving the toilet and the mosque, reciting Ayat al-Kursi and the last two verses of Surah al-Baqarah before sleeping, the adhan, etc.",
      bs: "Npr. hadis: \"Ne pretvarajte svoje kuće u groblja; zaista šejtan bježi iz kuće u kojoj se uči sura El-Bekara\" (Muslim 780). Također jutarnji i večernji zikrovi, zikrovi prije spavanja i po buđenju, pri ulasku i izlasku iz toaleta i džamije, učenje Ajetul-kursije i posljednja dva ajeta sure El-Bekara prije spavanja, ezan itd.",
    },
    arabic: "الْأَذْكَارُ وَقِرَاءَةُ الْقُرْآنِ.",
    transliteration: "",
    translation: {
      en: "Words of remembrance (adhkar) and recitation of the Qur'an.",
      bs: "Zikrovi i učenje Kur'ana.",
    },
  },
  {
    id: "hisnul_muslim_144",
    category: "hisnul_muslim",
    title: {
      en: "When Something Unwelcome Happens or You Fail to Achieve Something",
      bs: "Kad se dogodi nešto što ne voliš ili ne uspiješ u onome što želiš",
    },
    description: {
      en: "Rather than saying \"If only I had done...\", for indeed \"if\" opens the door to the work of Satan.",
      bs: "Umjesto da se kaže \"Da sam samo uradio...\", jer, zaista, \"da\" otvara vrata šejtanskom djelovanju.",
    },
    arabic: "قَدَرُ اللَّهِ وَمَا شَاءَ فَعَلَ.",
    transliteration: "Qadarul-lah, wama sha-a fa'al.",
    translation: {
      en: "It is the decree of Allah, and He does what He wills.",
      bs: "Allah je tako odredio i On čini šta hoće.",
    },
    reference: "Muslim 2664",
  },
  {
    id: "hisnul_muslim_145",
    category: "hisnul_muslim",
    title: {
      en: "Congratulating New Parents and Their Reply",
      bs: "Čestitka roditeljima novorođenčeta i odgovor na nju",
    },
    arabic:
      "بَارَكَ اللَّهُ لَكَ فِي الْمَوْهُوبِ لَكَ، وَشَكَرْتَ الْوَاهِبَ، وَبَلَغَ أَشُدَّهُ، وَرُزِقْتَ بِرَّهُ. وَيَرُدُّ عَلَيْهِ الْمُهَنَّأُ فَيَقُولُ: بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ، وَجَزَاكَ اللَّهُ خَيْراً، وَرَزَقَكَ اللَّهُ مِثْلَهُ، وَأَجْزَلَ ثَوَابَكَ.",
    transliteration:
      "Baarakallaahu laka fil-mawhoobi laka, wa shakartal-waahiba, wa balagha 'ashuddahu, wa ruziqta birrahu. The one being congratulated replies: Baarakallahu laka wa baaraka 'alayka, wa jazaakallaahu khayran, wa razaqakallaahu mithlahu, wa 'ajzala thawaabaka.",
    translation: {
      en: "May Allah bless you in the gift He has given you; may you be grateful to the Giver, may the child reach maturity, and may you be granted its righteousness. The one being congratulated replies: May Allah bless you and shower His blessings upon you, may Allah reward you with good, grant you the like of it, and make your reward abundant.",
      bs: "Neka ti Allah blagoslovi onoga koga ti je darovao, da budeš zahvalan Darovaocu, da dijete doživi zrelost i da ti bude podarena njegova dobrota! Onaj kome se čestita odgovara: Neka i tebi Allah da berićet i neka te obaspe blagoslovom! Neka te Allah dobrim nagradi, neka te opskrbi istim i neka ti nagradu uveća!",
    },
  },
  {
    id: "hisnul_muslim_146",
    category: "hisnul_muslim",
    title: {
      en: "Seeking Allah's Protection for Children",
      bs: "Traženje Allahove zaštite za djecu",
    },
    description: {
      en: "Ibn 'Abbas reported that the Messenger of Allah ﷺ used to seek protection for Al-Hasan and Al-Husayn with these words.",
      bs: "Ibn Abbas prenosi da je Allahov Poslanik ﷺ ovim riječima tražio zaštitu za Hasana i Husejna.",
    },
    arabic:
      "أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لاَمَّةٍ.",
    transliteration:
      "U'eethukuma bikalimatil-lahit-tammah, min kulli shaytanin wahammah, wamin kulli 'aynin lammah.",
    translation: {
      en: "I commend you two to the protection of Allah's perfect words, from every devil and every poisonous creature, and from every evil eye.",
      bs: "Tražim zaštitu za vas dvojicu Allahovim savršenim riječima od svakog šejtana i otrovnice, i od svakog urokljivog oka.",
    },
    reference: "Al-Bukhari 3371",
  },
  {
    id: "hisnul_muslim_147",
    category: "hisnul_muslim",
    title: {
      en: "Visiting the Sick (1): No Harm, a Purification",
      bs: "Posjeta bolesniku (1): Nije ništa, to je čišćenje",
    },
    arabic: "لاَ بأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ.",
    transliteration: "La ba'sa tahoorun in shaal-lah.",
    translation: {
      en: "No harm; it is a purification (from sins), if Allah wills.",
      bs: "Nije to ništa! To je, inšallah, čišćenje od grijeha.",
    },
    reference: "Al-Bukhari 3616",
  },
  {
    id: "hisnul_muslim_148",
    category: "hisnul_muslim",
    title: {
      en: "Visiting the Sick (2): Asking Allah to Cure You",
      bs: "Posjeta bolesniku (2): Molim Allaha da te izliječi",
    },
    description: {
      en: "Said seven times. Whoever visits a sick person whose time of death has not come and says this seven times, Allah will cure him.",
      bs: "Izgovara se sedam puta. Ko posjeti bolesnika kojem nije došao smrtni čas i ovo izgovori sedam puta, Allah će ga izliječiti.",
    },
    arabic:
      "أَسْأَلُ اللَّهَ الْعَظيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ.",
    transliteration:
      "As-alul-lahal-'atheem rabbal-'arshil-'atheem an yashfiyak.",
    translation: {
      en: "I ask Allah the Mighty, Lord of the Mighty Throne, to cure you.",
      bs: "Molim Allaha Veličanstvenog, Gospodara Arša veličanstvenog, da te izliječi.",
    },
    reference: "Abu Dawud 3106, At-Tirmidhi 2083",
  },
  {
    id: "hisnul_muslim_149",
    category: "hisnul_muslim",
    title: {
      en: "The Reward for Visiting the Sick",
      bs: "Nagrada za posjetu bolesniku",
    },
    description: {
      en: "Narrated by 'Ali ibn Abi Talib (may Allah be pleased with him), who heard the Messenger of Allah ﷺ say this.",
      bs: "Prenosi Alija ibn Ebi Talib, r.a., da je čuo Allahovog Poslanika ﷺ kako ovo govori.",
    },
    arabic:
      "قَالَ النَّبِيُّ صلى الله عليه وسلم: إِذَا عَادَ الرَّجُلُ أَخَاهُ الْمُسْلِمَ مَشَى فِي خِرَافَةِ الْجَنَّةِ حَتَّى يَجْلِسَ، فَإِذَا جَلَسَ غَمَرَتْهُ الرَّحْمَةُ، فَإِنْ كَانَ غُدْوَةً صَلَّى عَلَيْهِ سَبْعُونَ أَلْفَ مَلَكٍ حَتَّى يُمْسِيَ، وَإِنْ كَانَ مَسَاءً صَلَّى عَلَيْهِ سَبْعُونَ أَلْفَ مَلَكٍ حَتَّى يُصْبِحَ.",
    transliteration: "",
    translation: {
      en: "When a man visits his sick Muslim brother, he walks among the harvest of Paradise until he sits down. When he sits, he is covered by mercy. If it is in the morning, seventy thousand angels pray for him until the evening, and if it is in the evening, seventy thousand angels pray for him until the morning.",
      bs: "Kada čovjek posjeti svoga brata muslimana bolesnika, on bere džennetske plodove sve dok ne sjedne. A kada sjedne, obuhvati ga milost. Ako je to bilo izjutra, na njega sedamdeset hiljada meleka donosi salavat sve do noći, a ako je bilo navečer, na njega sedamdeset hiljada meleka donosi salavat sve do jutra.",
    },
  },
  {
    id: "hisnul_muslim_150",
    category: "hisnul_muslim",
    title: {
      en: "Terminal Illness (1): Joining the Highest Companions",
      bs: "Dova teškog bolesnika (1): pridruživanje Uzvišenom društvu",
    },
    arabic:
      "اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَأَلْحِقْنِي بِالرَّفِيقِ الْأَعْلَى.",
    transliteration:
      "Allahummagh-fir lee, warhamnee, wa-alhiqnee bir-rafeeqil-a'la.",
    translation: {
      en: "O Allah, forgive me, have mercy on me, and join me with the highest companions.",
      bs: "Allahu moj, oprosti mi i smiluj mi se i pridruži me Uzvišenom društvu.",
    },
    reference: "Al-Bukhari 5674, Muslim 2444",
  },
  {
    id: "hisnul_muslim_151",
    category: "hisnul_muslim",
    title: {
      en: "Terminal Illness (2): The Agonies of Death",
      bs: "Dova teškog bolesnika (2): samrtne muke",
    },
    description: {
      en: "Aisha (may Allah be pleased with her) narrated that during the illness in which he passed away, the Prophet ﷺ would dip his hands in water, wipe his face with them and say this.",
      bs: "Aiša, r.a., prenosi da je Poslanik, s.a.v.s., u bolesti od koje je preselio umakao ruke u vodu, njima potirao lice i govorio ove riječi.",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ، إِنَّ لِلْمَوْتِ سَكَرَاتٍ.",
    transliteration:
      "La ilaha illal-lah, inna lil-mawti sakarat.",
    translation: {
      en: "None has the right to be worshipped except Allah. Truly, death has its agonies.",
      bs: "Nema boga osim Allaha! Zaista smrt ima svoje muke.",
    },
    reference: "Al-Bukhari 4449",
  },
  {
    id: "hisnul_muslim_152",
    category: "hisnul_muslim",
    title: {
      en: "Terminal Illness (3): Declarations of Tawhid",
      bs: "Dova teškog bolesnika (3): riječi tevhida",
    },
    description: {
      en: "Whoever says these words during his illness and then dies, the Fire will not consume him.",
      bs: "Ko ove riječi izgovori u svojoj bolesti, pa umre, vatra ga neće dotaći.",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ وَاللَّهُ أَكْبَرُ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لاَ إِلَهَ إِلاَّ اللَّهُ لَهُ المُلْكُ وَلَهُ الْحَمْدُ، لاَ إِلَهَ إِلاَّ اللَّهُ وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ.",
    transliteration:
      "La ilaha illal-lahu wallahu akbar, la ilaha illal-lahu wahdah, la ilaha illal-lahu wahdahu la shareeka lah, la ilaha illal-lahu lahul-mulku walahul-hamd, la ilaha illal-lahu wala hawla wala quwwata illa billah.",
    translation: {
      en: "None has the right to be worshipped except Allah, and Allah is the greatest. None has the right to be worshipped except Allah, alone. None has the right to be worshipped except Allah, alone, without partner. None has the right to be worshipped except Allah; to Him belongs all sovereignty and praise. None has the right to be worshipped except Allah, and there is no might nor power except with Allah.",
      bs: "Nema boga osim Allaha i Allah je najveći. Nema boga osim Allaha Jedinog. Nema boga osim Allaha Jedinog, Koji nema saučesnika. Nema boga osim Allaha, Njemu pripada vlast i Njemu pripada hvala. Nema boga osim Allaha, i nema snage ni moći osim kod Allaha.",
    },
    reference: "At-Tirmidhi 3430",
  },
  {
    id: "hisnul_muslim_153",
    category: "hisnul_muslim",
    title: {
      en: "Encouraging the Dying to Say the Shahadah",
      bs: "Podsticanje samrtnika na izgovaranje šehadeta",
    },
    description: {
      en: "Those present should gently encourage the dying person to say \"La ilaha illallah\" (None has the right to be worshipped except Allah), because of this saying of the Prophet ﷺ.",
      bs: "Prisutni trebaju blago podsticati samrtnika da izgovori \"La ilahe illallah\" (Nema boga osim Allaha), zbog ovih riječi Poslanika, s.a.v.s.",
    },
    arabic:
      "مَنْ كَانَ آخِرُ كَلاَمِهِ لاَ إِلَهَ إِلاَّ اللَّهُ دَخَلَ الْجَنَّةَ.",
    transliteration:
      "Man kana akhiru kalamihi la ilaha illal-lah, dakhalal-jannah.",
    translation: {
      en: "He whose last words are \"None has the right to be worshipped except Allah\" will enter Paradise.",
      bs: "Onaj čije posljednje riječi budu \"Nema boga osim Allaha\" ući će u Džennet.",
    },
    reference: "Abu Dawud 3116",
  },
  {
    id: "hisnul_muslim_154",
    category: "hisnul_muslim",
    title: {
      en: "When Tragedy Strikes",
      bs: "Dova kad čovjeka zadesi nesreća",
    },
    arabic:
      "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي، وَأَخْلِفْ لِي خَيْرَاً مِنْهَا.",
    transliteration:
      "Inna lillahi wa-inna ilayhi raji'oon, Allahumma'jurnee fee museebatee wa-akhlif lee khayran minha.",
    translation: {
      en: "To Allah we belong and to Him we shall return. O Allah, reward me in my affliction and replace it for me with something better.",
      bs: "Svi smo Allahovi i Njemu se vraćamo! Allahu moj, nagradi me u ovoj mojoj nesreći i nadoknadi mi boljim od nje!",
    },
    reference: "Muslim 918",
  },
  {
    id: "hisnul_muslim_155",
    category: "hisnul_muslim",
    title: {
      en: "Closing the Eyes of the Deceased",
      bs: "Dova pri zatvaranju očiju umrlog",
    },
    description: {
      en: "The name of the deceased is mentioned in place of \"so-and-so\". \"Be a successor\" means: take care of those he has left behind, since Allah is never absent and never dies.",
      bs: "Umjesto \"tog i tog\" spominje se ime umrlog. \"Budi zamjena\" znači: brini se o onima koje je ostavio iza sebe, jer Allah nikada nije odsutan niti umire.",
    },
    arabic:
      "اللَّهُمَّ اغْفِرْ لِفُلاَنٍ وَارْفَعْ دَرَجَتَهُ فِي الْمَهْدِيِّينَ، وَاخْلُفْهُ فِي عَقِبِهِ فِي الْغَابِرِينَ، وَاغْفِرْ لَنَا وَلَهُ يَا رَبَّ الْعَالَمِينَ، وَافْسَحْ لَهُ فِي قَبْرِهِ، وَنَوِّرْ لَهُ فِيهِ.",
    transliteration:
      "Allahummagh-fir li-fulan (name of the deceased), warfa' darajatahu fil-mahdiyyeen, wakhlufhu fee 'aqibihi fil-ghabireen, waghfir lana wa lahu ya Rabbal-'alameen, wafsah lahu fee qabrih, wa nawwir lahu feeh.",
    translation: {
      en: "O Allah, forgive so-and-so (name of the deceased), raise his rank among the rightly guided, and be a successor to those he has left behind. Forgive us and him, O Lord of the worlds. Make his grave spacious for him and illuminate it for him.",
      bs: "Allahu moj, oprosti tom i tom (ime umrlog), uzdigni njegov stepen među upućenima i budi zamjena onima koje je ostavio iza sebe. Oprosti nama i njemu, o Gospodaru svjetova! Učini mu kabur prostranim i osvijetli mu ga.",
    },
    reference: "Muslim 920",
  },
  {
    id: "hisnul_muslim_156",
    category: "hisnul_muslim",
    title: {
      en: "Funeral Prayer (1): Forgive Him and Have Mercy on Him",
      bs: "Dova na dženazi (1): oprosti mu i smiluj mu se",
    },
    arabic:
      "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ، وَعَافِهِ، وَاعْفُ عَنْهُ، وَأَكْرِمْ نُزُلَهُ، وَوَسِّعْ مُدْخَلَهُ، وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ، وَنَقِّهِ مِنَ الْخَطَايَا كَمَا نَقَّيْتَ الثَّوْبَ الأَبْيَضَ مِنَ الدَّنَسِ، وَأَبْدِلْهُ دَاراً خَيْراً مِنْ دَارِهِ، وَأَهْلاً خَيْراً مِنْ أَهْلِهِ، وَزَوْجَاً خَيْراً مِنْ زَوْجِهِ، وَأَدْخِلْهُ الْجَنَّةَ، وَأَعِذْهُ مِنْ عَذَابِ القَبْرِ [وَعَذَابِ النَّارِ].",
    transliteration:
      "Allahummagh-fir lahu warhamh, wa'afihi, wa'fu 'anh, wa-akrim nuzulah, wawassi' mudkhalah, waghsilhu bilma-i waththalji walbarad, wanaqqihi minal-khataya kama naqqaytath-thawbal-abyada minad-danas, wa-abdilhu daran khayran min darih, wa-ahlan khayran min ahlih wazawjan khayran min zawjih, wa-adkhilhul-jannah, wa-a'ithhu min 'athabil-qabr, wa'athabin-nar",
    translation: {
      en: "O Allah, forgive him and have mercy on him, keep him safe and pardon him, honour his reception and make his entrance wide. Wash him with water, snow and hail, and cleanse him of sins as a white garment is cleansed of dirt. Give him a home better than his home, a family better than his family, and a spouse better than his spouse. Admit him into Paradise and protect him from the punishment of the grave [and the punishment of the Fire].",
      bs: "Allahu moj, oprosti mu i smiluj mu se, sačuvaj ga i pređi preko njegovih grijeha, učini časnim njegov boravak i proširi njegov ulaz. Operi ga vodom, snijegom i gradom i očisti ga od grijeha kao što se bijela odjeća očisti od prljavštine. Zamijeni mu kuću boljom od njegove kuće, porodicu boljom od njegove porodice i supružnika boljim od njegovog supružnika. Uvedi ga u Džennet i zaštiti ga od kaburske kazne [i od kazne u Vatri]!",
    },
    reference: "Muslim 963",
  },
  {
    id: "hisnul_muslim_157",
    category: "hisnul_muslim",
    title: {
      en: "Funeral Prayer (2): For Our Living and Our Dead",
      bs: "Dova na dženazi (2): za naše žive i mrtve",
    },
    arabic:
      "اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا، وَشَاهِدِنَا وَغَائِبِنَا، وَصَغِيرِنَا وَكَبيرِنَا، وَذَكَرِنَا وَأُنْثَانَا. اللَّهُمَّ مَنْ أَحْيَيْتَهُ مِنَّا فَأَحْيِهِ عَلَى الْإِسْلاَمِ، وَمَنْ تَوَفَّيْتَهُ مِنَّا فَتَوَفَّهُ عَلَى الإِيمَانِ، اللَّهُمَّ لاَ تَحْرِمْنَا أَجْرَهُ، وَلاَ تُضِلَّنَا بَعْدَهُ.",
    transliteration:
      "Allahummagh-fir lihayyina wamayyitina washahidina, wagha-ibina, wasagheerina wakabeerina, wathakarina wa-unthana. Allahumma man ahyaytahu minna fa-ahyihi 'alal-islam, waman tawaffaytahu minna fatawaffahu 'alal-eeman, Allahumma la tahrimna ajrah, wala tudillana ba'dah.",
    translation: {
      en: "O Allah, forgive our living and our dead, those present and those absent, our young and our old, our males and our females. O Allah, whom amongst us You keep alive, then let such a life be upon Islam, and whom amongst us You take unto Yourself, then let such a death be upon faith. O Allah, do not deprive us of his reward and do not let us stray after him.",
      bs: "Allahu moj, oprosti našim živima i našim mrtvima, našim prisutnima i našim odsutnima, našim mlađima i našim starima, našim muškarcima i našim ženama! Allahu moj, onoga koga poživiš među nama, učini da živi u islamu, a onoga koga usmrtiš, učini da umre u imanu! Allahu moj, ne uskrati nam nagradu za njega i ne daj da zalutamo poslije njega!",
    },
    reference: "Abu Dawud 3201, Ibn Majah 1498",
  },
  {
    id: "hisnul_muslim_158",
    category: "hisnul_muslim",
    title: {
      en: "Funeral Prayer (3): Under Your Protection",
      bs: "Dova na dženazi (3): pod Tvojom zaštitom",
    },
    arabic:
      "اللَّهُمَّ إِنَّ فُلاَنَ بْنَ فُلاَنٍ فِي ذِمَّتِكَ، وَحَبْلِ جِوَارِكَ، فَقِهِ مِنْ فِتْنَةِ الْقَبْرِ، وَعَذَابِ النَّارِ، وَأَنْتَ أَهْلُ الْوَفَاءِ وَالْحَقِّ، فَاغْفِرْ لَهُ وَارْحَمْهُ إِنَّكَ أَنْتَ الغَفُورُ الرَّحيمُ.",
    transliteration:
      "Allahumma inna fulanabna fulanin fee thimmatik, wa habli jiwarik, faqihi min fitnatil-qabri wa 'athabin-nar, wa anta ahlul-wafa'i wal-haqq, faghfir lahu warhamh, innaka antal-Ghafoorur-Raheem.",
    translation: {
      en: "O Allah, so-and-so son of so-and-so is under Your protection and within the bond of Your security, so protect him from the trial of the grave and the punishment of the Fire. You are worthy of fulfilment and truth. So forgive him and have mercy on him; truly You are the Oft-Forgiving, the Most Merciful.",
      bs: "Allahu moj, taj i taj, sin toga i toga, je u Tvojoj zaštiti i u dosegu Tvoje blizine, pa ga sačuvaj kaburskog iskušenja i džehennemske kazne! Ti si Dostojan da ispuniš obećanje i Ti si Istina, pa mu oprosti i smiluj mu se, jer Ti si, zaista, Onaj Koji mnogo prašta i Koji je milostiv!",
    },
    reference: "Abu Dawud 3202, Ibn Majah 1499",
  },
  {
    id: "hisnul_muslim_159",
    category: "hisnul_muslim",
    title: {
      en: "Funeral Prayer (4): Your Servant in Need of Your Mercy",
      bs: "Dova na dženazi (4): Tvoj rob treba Tvoju milost",
    },
    arabic:
      "اللَّهُمَّ عَبْدُكَ وَابْنُ أَمَتِكَ احْتَاجَ إِلَى رَحْمَتِكَ، وَأَنْتَ غَنِيٌّ عَنْ عَذَابِهِ، إِنْ كَانَ مُحْسِناً فَزِدْ فِي حَسَنَاتِهِ، وَإِنْ كَانَ مُسِيئاً فَتَجَاوَزْ عَنْهُ.",
    transliteration:
      "Allahumma 'abduka wabnu amatik, ihtaja ila rahmatik, wa-anta ghaniyyun 'an 'athabih, in kana muhsinan fazid fee hasanatih, wa-in kana museean fatajawaz 'anh.",
    translation: {
      en: "O Allah, Your servant and the son of Your maidservant is in need of Your mercy and You are without need of his punishment. If he was a doer of good, then increase his good deeds, and if he was a wrongdoer, then overlook his sins.",
      bs: "Allahu moj, rob Tvoj i sin robinje Tvoje potrebuje Tvoju milost, a Tebi ne treba kazna njegova. Ako je bio dobročinitelj, povećaj mu dobra djela, a ako je bio griješnik, pređi preko grijeha njegovih!",
    },
  },
  {
    id: "hisnul_muslim_160",
    category: "hisnul_muslim",
    title: {
      en: "Funeral Prayer for a Child (1)",
      bs: "Dova na dženazi djeteta (1)",
    },
    description: {
      en: "The first sentence may be said on its own; it is also good to say the rest of the supplication.",
      bs: "Prva rečenica se može proučiti samostalno, a lijepo je proučiti i ostatak dove.",
    },
    arabic:
      "اللَّهُمَّ أَعِذْهُ مِنْ عَذَابِ القَبْرِ. اللَّهُمَّ اجْعَلْهُ فَرَطاً وَذُخْراً لِوَالِدَيْهِ، وَشَفِيعاً مُجَاباً، اللَّهُمَّ ثَقِّلْ بِهِ مَوَازِينَهُمَا، وَأَعْظِمْ بِهِ أُجورَهُمَا، وَأَلْحِقْهُ بِصَالِحِ الْمُؤْمِنِينَ، وَاجْعَلْهُ فِي كَفَالَةِ إِبْرَاهِيمَ، وَقِهِ بِرَحْمَتِكَ عَذَابَ الْجَحِيمِ، وَأَبْدِلْهُ دَاراً خَيْراً مِنْ دَارِهِ، وَأَهْلاً خَيْراً مِنْ أَهْلِهِ، اللَّهُمَّ اغْفِرْ لِأَسْلاَفِنَا، وَأَفْرَاطِنَا، وَمَنْ سَبَقَنَا بِالْإِيمَانِ.",
    transliteration:
      "Allahumma a'ith-hu min 'athabil-qabr. Allahummaj-'alhu faratan wa thukhran li-walidayh, wa shafee'an mujaba. Allahumma thaqqil bihi mawazeenahuma, wa a'thim bihi ujoorahuma, wa alhiqhu bi-salihil-mu'mineen, waj'alhu fee kafalati Ibraheem, wa qihi bi-rahmatika 'athabal-jaheem, wa abdilhu daran khayran min darih, wa ahlan khayran min ahlih. Allahummaghfir li-aslafina wa afratina wa man sabaqana bil-eeman.",
    translation: {
      en: "O Allah, protect him from the punishment of the grave. O Allah, make him a forerunner and a stored treasure for his parents, and an intercessor whose intercession is accepted. O Allah, through him make their scales heavy and their reward great. Join him with the righteous believers, place him in the care of Ibrahim, and by Your mercy protect him from the punishment of Hellfire. Give him a home better than his home and a family better than his family. O Allah, forgive our predecessors, our children who have gone before us, and those who preceded us in faith.",
      bs: "Allahu moj, sačuvaj ga kaburskog azaba! Allahu moj, učini ga prethodnicom i zalogom njegovim roditeljima, i učini ga zagovornikom čiji se zagovor prima. Allahu moj, otežaj njime vage njihovih dobrih djela i uvećaj njime njihove nagrade, i pridruži ga dobrim vjernicima, i stavi ga pod zaštitu Ibrahimovu, i sačuvaj ga Svojom milošću vatre džehennemske, i zamijeni mu kuću boljom od njegove kuće, i porodicu boljom od njegove porodice! Allahu moj, oprosti našim precima i potomcima i onima koji su nas pretekli u vjerovanju!",
    },
  },
  {
    id: "hisnul_muslim_161",
    category: "hisnul_muslim",
    title: {
      en: "Funeral Prayer for a Child (2)",
      bs: "Dova na dženazi djeteta (2)",
    },
    arabic: "اللَّهُمَّ اجْعَلْهُ لَنَا فَرَطاً، وَسَلَفاً، وَأَجْراً.",
    transliteration: "Allahummaj-'alhu lana faratan, wa salafan, wa ajra.",
    translation: {
      en: "O Allah, make him for us a forerunner, a predecessor and a cause of reward.",
      bs: "Allahu moj, učini nam ga prethodnicom, pretečom i nagradom!",
    },
  },
  {
    id: "hisnul_muslim_162",
    category: "hisnul_muslim",
    title: {
      en: "Offering Condolences (Ta'ziyah)",
      bs: "Izjava saučešća (tazija)",
    },
    description: {
      en: "In the hadith, \"be patient and hope for reward\" is addressed to a woman (the Prophet's ﷺ daughter), so the wording is adjusted to whoever is being consoled. The second sentence (\"May Allah make your reward great...\") may also be said.",
      bs: "U hadisu su riječi \"strpi se i nadaj se nagradi\" upućene ženi (Poslanikovoj, s.a.v.s., kćeri), pa se prilagođavaju onome koga tješimo. Može se reći i druga rečenica (\"Neka ti Allah uveća nagradu...\").",
    },
    arabic:
      "إِنَّ لِلَّهِ مَا أَخَذَ، وَلَهُ مَا أَعْطَى، وَكُلُّ شَيْءٍ عِنْدَهُ بِأَجَلٍ مُسَمَّى، فَلْتَصْبِرْ وَلْتَحْتَسِبْ. أَعْظَمَ اللَّهُ أَجْرَكَ، وَأَحْسَنَ عَزَاءَكَ، وَغَفَرَ لِمَيِّتِكَ.",
    transliteration:
      "Inna lillahi ma akhatha, wa lahu ma a'ta, wa kullu shay'in 'indahu bi-ajalin musamma, faltasbir waltahtasib. A'thamal-lahu ajrak, wa ahsana 'aza'ak, wa ghafara li-mayyitik.",
    translation: {
      en: "Truly, to Allah belongs what He took and to Him belongs what He gave, and everything with Him has an appointed term, so be patient and hope for Allah's reward. May Allah make your reward great, make your consolation good, and forgive your deceased.",
      bs: "Zaista je Allahovo ono što je uzeo i Njegovo je ono što je dao, i sve kod Njega ima određen rok, pa se strpi i nadaj se nagradi. Neka ti Allah uveća nagradu, neka ti da lijepu utjehu i neka oprosti tvom umrlom.",
    },
    reference: "Al-Bukhari 1284, Muslim 923",
  },
  {
    id: "hisnul_muslim_163",
    category: "hisnul_muslim",
    title: {
      en: "Placing the Deceased in the Grave",
      bs: "Dova pri spuštanju umrlog u kabur",
    },
    arabic: "بِسْمِ اللَّهِ وَعَلَى سُنَّةِ رَسُولِ اللَّهِ.",
    transliteration: "Bismil-lahi wa'ala sunnati rasoolil-lah.",
    translation: {
      en: "In the name of Allah and upon the sunnah of the Messenger of Allah.",
      bs: "U ime Allaha i u skladu sa sunnetom Allahova Poslanika.",
    },
    reference: "Abu Dawud 3213",
  },
  {
    id: "hisnul_muslim_164",
    category: "hisnul_muslim",
    title: {
      en: "After Burying the Deceased",
      bs: "Dova nakon zagrtanja kabura",
    },
    description: {
      en: "After a burial, the Prophet ﷺ would stand by the grave and say: \"Seek forgiveness for your brother and ask that he be made firm, for he is now being questioned.\"",
      bs: "Nakon ukopa Poslanik, s.a.v.s., bi stao kod kabura i rekao: \"Tražite oprosta za svoga brata i molite da bude učvršćen, jer on se sada ispituje.\"",
    },
    arabic: "اللَّهُمَّ اغْفِرْ لَهُ، اللَّهُمَّ ثَبِّتْهُ.",
    transliteration: "Allahummaghfir lah, Allahumma thabbit-h.",
    translation: {
      en: "O Allah, forgive him. O Allah, make him firm.",
      bs: "Allahu moj, oprosti mu! Allahu moj, učvrsti ga!",
    },
    reference: "Abu Dawud 3221",
  },
  {
    id: "hisnul_muslim_165",
    category: "hisnul_muslim",
    title: {
      en: "Visiting the Graves",
      bs: "Dova pri posjeti mezarju",
    },
    arabic:
      "السَّلاَمُ عَلَيْكُمْ أَهْلَ الدِّيَارِ، مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ، وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لاَحِقُونَ، [وَيَرْحَمُ اللَّهُ الْمُسْتَقدِمِينَ مِنَّا وَالْمُسْتأْخِرِينَ] أَسْأَلُ اللَّهَ لَنَا وَلَكُمُ الْعَافِيَةَ.",
    transliteration:
      "Assalamu 'alaykum ahlad-diyari minal-mu'mineena wal-muslimeen, wa inna in sha'al-lahu bikum lahiqoon, [wa yarhamul-lahul-mustaqdimeena minna wal-musta'khireen], as-alul-laha lana wa lakumul-'afiyah.",
    translation: {
      en: "Peace be upon you, O inhabitants of these dwellings, from among the believers and the Muslims. We will, Allah willing, join you. [May Allah have mercy on those of us who have gone before and those who come later.] I ask Allah for well-being for us and for you.",
      bs: "Mir vama, stanovnici ovih nastambi, vjernici i muslimani! Mi ćemo vam se, ako Bog da, priključiti. [Neka se Allah smiluje onima od nas koji su otišli prije i onima koji će doći kasnije.] Molim Allaha za spas i nama i vama.",
    },
    reference: "Muslim 974, 975",
  },
  {
    id: "hisnul_muslim_166",
    category: "hisnul_muslim",
    title: {
      en: "When the Wind Blows (1)",
      bs: "Dova kad puše vjetar (1)",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّهَا.",
    transliteration:
      "Allahumma innee as-aluka khayraha wa-a'oothu bika min sharriha.",
    translation: {
      en: "O Allah, I ask You for its good and I seek refuge in You from its evil.",
      bs: "Allahu moj, molim Te za dobro ovog vjetra, a utječem Ti se od njegova zla!",
    },
    reference: "Abu Dawud 5097",
  },
  {
    id: "hisnul_muslim_167",
    category: "hisnul_muslim",
    title: {
      en: "When the Wind Blows (2)",
      bs: "Dova kad puše vjetar (2)",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا، وَخَيْرَ مَا فِيهَا، وَخَيْرَ مَا أُرْسِلَتْ بِهِ، وَأَعُوذُ بِكَ مِنْ شَرِّهَا، وَشَرِّ مَا فِيهَا، وَشَرِّ مَا أُرْسِلَتْ بِهِ.",
    transliteration:
      "Allahumma innee as-aluka khayraha wakhayra ma feeha, wakhayra ma orsilat bih, wa-a'oothu bika min sharriha, washarri ma feeha washarri ma orsilat bih.",
    translation: {
      en: "O Allah, I ask You for its good, the good within it, and the good it was sent with, and I seek refuge in You from its evil, the evil within it, and the evil it was sent with.",
      bs: "Allahu moj, molim Te za dobro njegovo, i za dobro onoga što nosi u sebi, i za dobro onoga s čime je poslan, a utječem Ti se od zla njegova, i zla onoga što nosi u sebi, i zla onoga s čime je poslan!",
    },
    reference: "Muslim 899",
  },
  {
    id: "hisnul_muslim_168",
    category: "hisnul_muslim",
    title: { en: "When Hearing Thunder", bs: "Dova kad grmi" },
    description: {
      en: "Abdullah ibn az-Zubayr (may Allah be pleased with him) would stop talking when he heard thunder and say this.",
      bs: "Abdullah b. ez-Zubejr, r.a., kada bi začuo grmljavinu, prekinuo bi govor i izgovorio ove riječi.",
    },
    arabic:
      "سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلاَئِكةُ مِنْ خِيفَتِهِ.",
    transliteration:
      "Subhanal-lathee yusabbihur-ra'du bihamdih, walmala-ikatu min kheefatih.",
    translation: {
      en: "How perfect is He whom the thunder glorifies with His praise, as do the angels out of fear of Him.",
      bs: "Slavljen neka je Onaj Kojem grmljavina iskazuje veličinu i hvalu, a i meleki iz strahopoštovanja prema Njemu!",
    },
  },
  {
    id: "hisnul_muslim_169",
    category: "hisnul_muslim",
    title: { en: "Praying for Rain (1)", bs: "Dova za kišu (1)" },
    arabic:
      "اللَّهُمَّ اسْقِنَا غَيْثاً مُغِيثاً مَرِيئاً مَرِيعاً، نَافِعاً غَيْرَ ضَارٍّ، عَاجِلاً غَيْرَ آجِلٍ.",
    transliteration:
      "Allahummasqina ghaythan mugheethan maree'an maree'an, nafi'an ghayra darr, 'ajilan ghayra ajil.",
    translation: {
      en: "O Allah, give us rain that brings relief, wholesome and fertile rain, beneficial and not harmful, now and not later.",
      bs: "Allahu moj, pošalji nam kišu koja donosi spas, zdravu i plodonosnu, korisnu a ne štetnu, sada, a ne kasnije.",
    },
    reference: "Abu Dawud 1169",
  },
  {
    id: "hisnul_muslim_170",
    category: "hisnul_muslim",
    title: { en: "Praying for Rain (2)", bs: "Dova za kišu (2)" },
    arabic: "اللَّهُمَّ أَغِثْنَا، اللَّهُمَّ أَغِثْنَا، اللَّهُمَّ أَغِثْنَا.",
    transliteration:
      "Allahumma aghithna, allahumma aghithna, allahumma aghithna.",
    translation: {
      en: "O Allah, send us rain. O Allah, send us rain. O Allah, send us rain.",
      bs: "Allahu moj, pošalji nam kišu! Allahu moj, pošalji nam kišu! Allahu moj, pošalji nam kišu!",
    },
    reference: "Al-Bukhari 1014, Muslim 897",
  },
  {
    id: "hisnul_muslim_171",
    category: "hisnul_muslim",
    title: { en: "Praying for Rain (3)", bs: "Dova za kišu (3)" },
    arabic:
      "اللَّهُمَّ اسْقِ عِبَادَكَ، وَبَهَائِمَكَ، وَانْشُرْ رَحْمَتَكَ، وَأَحْيِ بَلَدَكَ الْمَيِّتَ.",
    transliteration:
      "Allahummas-qi 'ibadak, wabaha-imak, wanshur rahmatak, wa-ahyi baladakal-mayyit.",
    translation: {
      en: "O Allah, give water to Your servants and Your livestock, spread Your mercy, and bring Your dead land back to life.",
      bs: "Allahu moj, napoji Svoje robove i Svoju stoku, raširi Svoju milost i oživi Svoju mrtvu zemlju.",
    },
    reference: "Abu Dawud 1176",
  },
  {
    id: "hisnul_muslim_172",
    category: "hisnul_muslim",
    title: { en: "When It Rains", bs: "Dova kada pada kiša" },
    arabic: "اللَّهُمَّ صَيِّباً نَافِعاً.",
    transliteration: "Allahumma sayyiban nafi'a.",
    translation: {
      en: "O Allah, make it a beneficial rain.",
      bs: "Allahu moj, neka bude korisna kiša.",
    },
    reference: "Al-Bukhari 1032",
  },
  {
    id: "hisnul_muslim_173",
    category: "hisnul_muslim",
    title: { en: "After Rainfall", bs: "Zikr nakon kiše" },
    arabic: "مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ.",
    transliteration: "Mutirna bifadlil-lahi warahmatih.",
    translation: {
      en: "We have been given rain by the grace and mercy of Allah.",
      bs: "Kiša nam je pala Allahovom dobrotom i milošću.",
    },
    reference: "Al-Bukhari 846, Muslim 71",
  },
  {
    id: "hisnul_muslim_174",
    category: "hisnul_muslim",
    title: {
      en: "Asking for the Rain to Stop",
      bs: "Dova za prestanak kiše",
    },
    arabic:
      "اللَّهُمَّ حَوَالَيْنَا وَلاَ عَلَيْنَا، اللَّهُمَّ عَلَى الآكَامِ وَالظِّرَابِ، وَبُطُونِ الْأَوْدِيَةِ، وَمَنَابِتِ الشَّجَرِ.",
    transliteration:
      "Allahumma hawalayna wala 'alayna, allahumma 'alal-akami waththirab, wabutoonil-awdiyah, wamanabitish-shajar.",
    translation: {
      en: "O Allah, around us and not upon us. O Allah, upon the hillocks and the hills, the valley beds, and the places where trees grow.",
      bs: "Allahu moj, oko nas, a ne na nas! Allahu moj, na brežuljke i brda, na dna dolina i tamo gdje raste drveće!",
    },
    reference: "Al-Bukhari 1014, Muslim 897",
  },
  {
    id: "hisnul_muslim_175",
    category: "hisnul_muslim",
    title: {
      en: "Sighting the New Moon",
      bs: "Dova pri viđenju mlađaka",
    },
    arabic:
      "اللَّهُ أَكْبَرُ، اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْأَمْنِ وَالْإِيمَانِ، وَالسَّلاَمَةِ وَالْإِسْلاَمِ، وَالتَّوْفِيقِ لِمَا تُحِبُّ رَبَّنَا وَتَرْضَى، رَبُّنَا وَرَبُّكَ اللَّهُ.",
    transliteration:
      "Allahu akbar, Allahumma ahillahu 'alayna bil-amni wal-eeman, was-salamati wal-islam, wat-tawfeeqi lima tuhibbu Rabbana wa tarda, Rabbuna wa Rabbukal-lah.",
    translation: {
      en: "Allah is the greatest. O Allah, let this crescent rise over us with security and faith, with safety and Islam, and with success in what You love and are pleased with, our Lord. Our Lord and your Lord is Allah.",
      bs: "Allah je najveći. Allahu moj, učini da nam ovaj mlađak izađe sa sigurnošću i imanom, sa spasom i islamom, i s uspjehom u onome što Ti voliš i čime si zadovoljan, Gospodaru naš. Naš i tvoj Gospodar je Allah.",
    },
  },
  {
    id: "hisnul_muslim_176",
    category: "hisnul_muslim",
    title: {
      en: "Breaking the Fast (1): The Thirst Has Gone",
      bs: "Pri iftaru (1): nestala je žeđ",
    },
    arabic:
      "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ العُرُوقُ، وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ.",
    transliteration:
      "Thahabath-thama'u wabtallatil-'urooqu, wa thabatal-ajru in sha'Allah.",
    translation: {
      en: "The thirst has gone, the veins are moistened, and the reward is confirmed, if Allah wills.",
      bs: "Nestala je žeđ, žile su se natopile, a nagrada je osigurana, ako Allah da.",
    },
    reference: "Abu Dawud 2357",
  },
  {
    id: "hisnul_muslim_177",
    category: "hisnul_muslim",
    title: {
      en: "Breaking the Fast (2): Asking for Forgiveness",
      bs: "Pri iftaru (2): traženje oprosta",
    },
    description: {
      en: "Abdullah ibn Amr (may Allah be pleased with him) used to say this when breaking his fast.",
      bs: "Abdullah b. Amr, r.a., govorio je ovo kada bi se iftario.",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِرَحْمَتِكَ الَّتِي وَسِعَتْ كُلَّ شَيْءٍ أَنْ تَغْفِرَ لِي.",
    transliteration:
      "Allahumma innee as-aluka bi-rahmatikal-latee wasi'at kulla shay'in an taghfira lee.",
    translation: {
      en: "O Allah, I ask You by Your mercy, which encompasses all things, to forgive me.",
      bs: "Allahu moj, molim Te Tvojom milošću, koja obuhvata sve, da mi oprostiš.",
    },
    reference: "Ibn Majah 1753",
  },
  {
    id: "hisnul_muslim_178",
    category: "hisnul_muslim",
    title: {
      en: "Before Eating (1): Bismillah",
      bs: "Prije jela (1): bismillah",
    },
    description: {
      en: "The Prophet ﷺ said: \"When one of you eats, let him say 'Bismillah'. If he forgets to say it at the beginning, let him say 'Bismillahi fee awwalihi wa akhirih'.\"",
      bs: "Poslanik, s.a.v.s., rekao je: \"Kada neko od vas jede, neka kaže 'Bismillah'. Ako to zaboravi na početku, neka kaže 'Bismillahi fi evvelihi ve ahirihi'.\"",
    },
    arabic:
      "بِسْمِ اللَّهِ. بِسْمِ اللَّهِ فِي أَوَّلِهِ وَآخِرِهِ.",
    transliteration:
      "Bismillah. (If forgotten at the start:) Bismillahi fee awwalihi wa akhirih.",
    translation: {
      en: "In the name of Allah. (If forgotten at the start:) In the name of Allah, at its beginning and at its end.",
      bs: "U ime Allaha. (Ako se zaboravi na početku:) U ime Allaha, na njegovom početku i na njegovom kraju.",
    },
    reference: "Abu Dawud 3767, At-Tirmidhi 1858",
  },
  {
    id: "hisnul_muslim_179",
    category: "hisnul_muslim",
    title: {
      en: "Before Eating (2): Blessing in Food and Milk",
      bs: "Prije jela (2): bereket u hrani i mlijeku",
    },
    description: {
      en: "The Prophet ﷺ said: \"Whomever Allah feeds, let him say the first; and whomever Allah gives milk to drink, let him say the second.\"",
      bs: "Poslanik, s.a.v.s., rekao je: \"Koga Allah nahrani, neka kaže prvu dovu, a koga Allah napoji mlijekom, neka kaže drugu.\"",
    },
    arabic:
      "اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَأَطْعِمْنَا خَيْراً مِنْهُ. اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَزِدْنَا مِنْهُ.",
    transliteration:
      "(For food:) Allahumma barik lana feehi wa at'imna khayran minh. (For milk:) Allahumma barik lana feehi wa zidna minh.",
    translation: {
      en: "(For food:) O Allah, bless it for us and feed us with something better than it. (For milk:) O Allah, bless it for us and give us more of it.",
      bs: "(Za hranu:) Allahu moj, blagoslovi nam ovo i nahrani nas boljim od toga. (Za mlijeko:) Allahu moj, blagoslovi nam ovo i daj nam ga još.",
    },
    reference: "At-Tirmidhi 3455",
  },
  {
    id: "hisnul_muslim_180",
    category: "hisnul_muslim",
    title: {
      en: "After Eating (1): Without Any Power of My Own",
      bs: "Poslije jela (1): bez moje snage i moći",
    },
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا، وَرَزَقَنِيهِ، مِنْ غَيْرِ حَوْلٍ مِنِّي وَلاَ قُوَّةٍ.",
    transliteration:
      "Alhamdu lillahil-lathee at'amanee hatha warazaqaneehi min ghayri hawlin minnee wala quwwah.",
    translation: {
      en: "All praise is for Allah, who fed me this and provided it for me without any might or power on my part.",
      bs: "Hvala Allahu Koji me je ovim nahranio i opskrbio, bez moje snage i moći.",
    },
    reference: "Abu Dawud 4023, At-Tirmidhi 3458",
  },
  {
    id: "hisnul_muslim_181",
    category: "hisnul_muslim",
    title: {
      en: "After Eating (2): Abundant, Blessed Praise",
      bs: "Poslije jela (2): obilna i blagoslovljena hvala",
    },
    description: {
      en: "Another interpretation: All praise is for Allah, abundant, good and blessed praise. He is the One who suffices and feeds and is not fed; He is always sought, together with what is with Him, and none can do without Him. He is our Lord.",
      bs: "Drugo tumačenje: Hvala Allahu, hvalom obilnom, lijepom i blagoslovljenom. On je Taj Koji je dovoljan, Koji hrani, a ne hrani se; Njemu se uvijek teži, kao i onome što je kod Njega, i niko ne može bez Njega. On je naš Gospodar.",
    },
    arabic:
      "الْحَمْدُ لِلَّهِ حَمْداً كَثِيراً طَيِّباً مُبَارَكاً فِيهِ، غَيْرَمَكْفِيٍّ وَلاَمُوَدَّعٍ، وَلاَ مُسْتَغْنَىً عَنْهُ رَبَّنَا.",
    transliteration:
      "Alhamdu lillahi hamdan katheeran tayyiban mubarakan feeh, ghayra makfiyyin wala muwadda'in, wala mustaghnan 'anhu Rabbana.",
    translation: {
      en: "All praise is for Allah, abundant, good and blessed praise; praise that is never-ending, never abandoned and never dispensed with, our Lord.",
      bs: "Hvala Allahu, hvalom mnogom, lijepom i blagoslovljenom, hvalom koja nije dovoljna da Mu se odužimo, hvalom od koje se ne opraštamo i koja nam je neophodna, Gospodaru naš.",
    },
    reference: "Al-Bukhari 5458",
  },
  {
    id: "hisnul_muslim_182",
    category: "hisnul_muslim",
    title: {
      en: "A Guest's Dua for the Host",
      bs: "Dova gosta za domaćina",
    },
    arabic:
      "اللَّهُمَّ بَارِكْ لَهُمْ فِيمَا رَزَقْتَهُم، وَاغْفِرْ لَهُمْ وَارْحَمْهُمْ.",
    transliteration:
      "Allahumma barik lahum feema razaqtahum, waghfir lahum warhamhum.",
    translation: {
      en: "O Allah, bless them in what You have provided for them, forgive them and have mercy on them.",
      bs: "Allahu moj, blagoslovi im ono čime si ih opskrbio, oprosti im i smiluj im se.",
    },
    reference: "Muslim 2042",
  },
  {
    id: "hisnul_muslim_183",
    category: "hisnul_muslim",
    title: {
      en: "For Someone Who Gives You Food or Drink",
      bs: "Dova za onoga ko te nahrani ili napoji",
    },
    arabic: "اللَّهُمَّ أَطْعِمْ مَنْ أَطْعَمَنِي، وَاسْقِ مَنْ سَقَانِي.",
    transliteration: "Allahumma at'im man at'amanee wasqi man saqanee.",
    translation: {
      en: "O Allah, feed the one who fed me, and give drink to the one who gave me drink.",
      bs: "Allahu moj, nahrani onoga ko je mene nahranio i napoji onoga ko je mene napojio.",
    },
    reference: "Muslim 2055",
  },
  {
    id: "hisnul_muslim_184",
    category: "hisnul_muslim",
    title: {
      en: "For a Family Who Hosts You for Iftar",
      bs: "Dova za porodicu kod koje se iftarimo",
    },
    arabic:
      "أَفْطَرَ عِنْدَكُمُ الصَّائِمُونَ، وَأَكَلَ طَعَامَكُمُ الْأَبْرَارُ، وَصَلَّتْ عَلَيْكُمُ الْمَلاَئِكَةُ.",
    transliteration:
      "Aftara 'indakumus-sa-imoon, wa-akala ta'amakumul-abrar, wasallat 'alaykumul-mala-ikah.",
    translation: {
      en: "May those who are fasting break their fast with you, may the righteous eat your food, and may the angels pray for you.",
      bs: "Neka kod vas iftare postači, neka vašu hranu jedu dobri ljudi i neka meleki za vas mole!",
    },
    reference: "Abu Dawud 3854",
  },
  {
    id: "hisnul_muslim_185",
    category: "hisnul_muslim",
    title: {
      en: "When Invited to Eat While Fasting",
      bs: "Kad postača pozovu na jelo",
    },
    description: {
      en: "\"Let him pray\" here means: let him supplicate for his host.",
      bs: "\"Neka klanja\" ovdje znači: neka dovi za domaćina.",
    },
    arabic:
      "إِذَا دُعِيَ أَحَدُكُمْ فَلْيُجِبْ، فَإِنْ كَانَ صَائِماً فَلْيُصَلِّ، وَإِنْ كَانَ مُفْطِراً فَلْيَطْعَمْ.",
    transliteration:
      "Itha du'iya ahadukum falyujib, fa-in kana sa'iman falyusalli, wa-in kana muftiran falyat'am.",
    translation: {
      en: "If one of you is invited, let him accept. If he is fasting, let him pray (for his host), and if he is not fasting, let him eat.",
      bs: "Kada neko od vas bude pozvan, neka se odazove. Ako posti, neka dovi za domaćina, a ako ne posti, neka jede.",
    },
    reference: "Muslim 1431",
  },
  {
    id: "hisnul_muslim_186",
    category: "hisnul_muslim",
    title: {
      en: "When Fasting and Someone Is Rude to You",
      bs: "Šta kaže postač ako ga neko uvrijedi",
    },
    arabic: "إِنِّي صَائِمٌ، إِنِّي صَائِمٌ.",
    transliteration: "Innee sa-im, innee sa-im.",
    translation: {
      en: "I am fasting, I am fasting.",
      bs: "Ja postim, ja postim.",
    },
    reference: "Al-Bukhari 1894, Muslim 1151",
  },
  {
    id: "hisnul_muslim_187",
    category: "hisnul_muslim",
    title: {
      en: "On Seeing the First Fruits of the Season",
      bs: "Dova kad se vide prvi plodovi",
    },
    description: {
      en: "A sa' is a measure equal to four mudd; a mudd is the amount held in an average man's two cupped hands.",
      bs: "Sa' je mjera jednaka četirima muddovima, a mudd je količina koja stane u dvije spojene šake prosječnog čovjeka.",
    },
    arabic:
      "اللَّهُمَّ بَارِكْ لَنَا فِي ثَمَرِنَا، وَبَارِكْ لَنَا فِي مَدِينَتِنَا، وَبَارِكْ لَنَا فِي صَاعِنَا، وَبَارِكْ لَنَا فِي مُدِّنَا.",
    transliteration:
      "Allahumma barik lana fee thamarina, wabarik lana fee madeenatina, wabarik lana fee sa'ina wabarik lana fee muddina.",
    translation: {
      en: "O Allah, bless our fruit for us, bless our city for us, bless our sa' for us and bless our mudd for us.",
      bs: "Allahu moj, blagoslovi nam naše plodove, blagoslovi nam naš grad, blagoslovi nam naš sa' i blagoslovi nam naš mudd.",
    },
    reference: "Muslim 1373",
  },
  {
    id: "hisnul_muslim_188",
    category: "hisnul_muslim",
    title: { en: "When Sneezing", bs: "Kada čovjek kihne" },
    description: {
      en: "The Prophet ﷺ said: \"When one of you sneezes, let him say 'Alhamdu lillah', and let his brother or companion say to him 'Yarhamukallah'. When he says 'Yarhamukallah' to him, let him reply 'Yahdikumullahu wa yuslihu balakum'.\"",
      bs: "Poslanik, s.a.v.s., rekao je: \"Kada neko od vas kihne, neka kaže 'Elhamdulillah', a njegov brat ili drug neka mu kaže 'Jerhamukallah'. Kada mu kaže 'Jerhamukallah', neka on odgovori 'Jehdikumullahu ve juslihu balekum'.\"",
    },
    arabic:
      "الْحَمْدُ لِلَّهِ. يَرْحَمُكَ اللَّهُ. يَهْدِيكُمُ اللَّهُ وَيُصْلِحُ بَالَكُمْ.",
    transliteration:
      "(The one who sneezes:) Alhamdu lillah. (The listener:) Yarhamukal-lah. (The one who sneezed replies:) Yahdeekumul-lahu wa yuslihu balakum.",
    translation: {
      en: "(The one who sneezes:) All praise is for Allah. (The listener:) May Allah have mercy on you. (The one who sneezed replies:) May Allah guide you and set your affairs right.",
      bs: "(Onaj ko kihne:) Hvala Allahu. (Onaj ko čuje:) Allah ti se smilovao. (Onaj ko je kihnuo odgovara:) Allah vas uputio i popravio vaše stanje.",
    },
    reference: "Al-Bukhari 6224",
  },
  {
    id: "hisnul_muslim_189",
    category: "hisnul_muslim",
    title: {
      en: "When a Non-Muslim Sneezes and Praises Allah",
      bs: "Kad nemusliman kihne i zahvali Allahu",
    },
    arabic: "يَهْدِيكُمُ اللَّهُ وَيُصْلِحُ بَالَكُمْ.",
    transliteration: "Yahdeekumul-lahu wa yuslihu balakum.",
    translation: {
      en: "May Allah guide you and set your affairs right.",
      bs: "Neka vas Allah uputi i popravi vaše stanje.",
    },
    reference: "At-Tirmidhi 2739, Abu Dawud 5038",
  },
  {
    id: "hisnul_muslim_190",
    category: "hisnul_muslim",
    title: { en: "Congratulating the Groom", bs: "Čestitka mladoženji" },
    arabic:
      "بَارَكَ اللَّهُ لَكَ، وَبَارَكَ عَلَيْكَ، وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ.",
    transliteration:
      "Barakal-lahu lak, wabaraka 'alayk, wajama'a baynakuma fee khayr.",
    translation: {
      en: "May Allah bless you, send His blessings upon you, and unite you both in goodness.",
      bs: "Neka ti Allah da bereket, neka spusti bereket na tebe i neka vas sastavi u dobru.",
    },
    reference: "Abu Dawud 2130, At-Tirmidhi 1091",
  },
  {
    id: "hisnul_muslim_191",
    category: "hisnul_muslim",
    title: {
      en: "On Marriage or Acquiring a Servant or Animal",
      bs: "Pri ženidbi ili kupovini sluge ili životinje",
    },
    description: {
      en: "When one marries a woman or acquires a servant, he should say this. When buying a camel, he should take hold of the top of its hump and say the same.",
      bs: "Kada se neko oženi ili kupi slugu, neka izgovori ovu dovu. Kada kupi devu, neka je uhvati za vrh grbe i kaže isto.",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا، وَخَيْرَ مَا جَبَلْتَهَا عَلَيْهِ، وَأَعُوذُ بِكَ مِنْ شَرِّهَا، وَشَرِّ مَا جَبَلْتَهَا عَلَيْهِ.",
    transliteration:
      "Allahumma innee as-aluka khayraha wa khayra ma jabaltaha 'alayh, wa a'oothu bika min sharriha wa sharri ma jabaltaha 'alayh.",
    translation: {
      en: "O Allah, I ask You for her good and the good of the nature You have created her with, and I seek refuge in You from her evil and the evil of the nature You have created her with.",
      bs: "Allahu moj, molim Te za njeno dobro i za dobro naravi s kojom si je stvorio, i utječem Ti se od njenog zla i od zla naravi s kojom si je stvorio.",
    },
    reference: "Abu Dawud 2160, Ibn Majah 1918",
  },
  {
    id: "hisnul_muslim_192",
    category: "hisnul_muslim",
    title: {
      en: "Before Marital Intimacy",
      bs: "Dova prije spolnog odnosa",
    },
    arabic:
      "بِسْمِ اللَّهِ، اللَّهُمَّ جَنِّبْنَا الشَّيْطَانَ، وَجَنِّبِ الشَّيْطَانَ مَا رَزَقْتَنَا.",
    transliteration:
      "Bismil-lah, allahumma jannibnash-shaytan, wajannibish-shaytana ma razaqtana.",
    translation: {
      en: "In the name of Allah. O Allah, keep Satan away from us and keep Satan away from what You provide us with.",
      bs: "U ime Allaha. Allahu moj, udalji šejtana od nas i udalji šejtana od onoga čime nas opskrbiš.",
    },
    reference: "Al-Bukhari 141, Muslim 1434",
  },
  {
    id: "hisnul_muslim_193",
    category: "hisnul_muslim",
    title: { en: "When Angry", bs: "Dova kad se naljutiš" },
    arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ.",
    transliteration: "A'oothu billahi minash-shaytanir-rajeem.",
    translation: {
      en: "I seek refuge in Allah from Satan, the accursed.",
      bs: "Utječem se Allahu od prokletog šejtana.",
    },
    reference: "Al-Bukhari 3282, Muslim 2610",
  },
  {
    id: "hisnul_muslim_194",
    category: "hisnul_muslim",
    title: {
      en: "On Seeing Someone Afflicted",
      bs: "Dova kad vidiš nekoga u nevolji",
    },
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي مِمَّا ابْتَلاَكَ بِهِ، وَفَضَّلَنِي عَلَى كَثِيرٍ مِمَّنْ خَلَقَ تَفْضِيلاً.",
    transliteration:
      "Alhamdu lillahil-lathee 'afanee mimmab-talaka bih, wafaddalanee 'ala katheerin mimman khalaqa tafdeela.",
    translation: {
      en: "All praise is for Allah, who has spared me from what He has tested you with and has greatly favoured me over many of those He created.",
      bs: "Hvala Allahu Koji me je sačuvao onoga čime je tebe iskušao i Koji me je uveliko odlikovao nad mnogima od onih koje je stvorio.",
    },
  },
  {
    id: "hisnul_muslim_195",
    category: "hisnul_muslim",
    title: {
      en: "In a Gathering (1): Seeking Forgiveness",
      bs: "U društvu (1): traženje oprosta",
    },
    description: {
      en: "Ibn Umar (may Allah be pleased with him) said: \"In a single sitting we would count the Messenger of Allah ﷺ saying this one hundred times before he stood up.\"",
      bs: "Ibn Omer, r.a., kaže: \"U jednom sijelu bismo izbrojali da Allahov Poslanik, s.a.v.s., ovo izgovori stotinu puta prije nego što bi ustao.\"",
    },
    arabic:
      "رَبِّ اغْفِرْ لِي، وَتُبْ عَلَيَّ، إِنَّكَ أَنْتَ التَّوَّابُ الْغَفُورُ.",
    transliteration:
      "Rabbighfir lee wa tub 'alayya, innaka antat-Tawwabul-Ghafoor.",
    translation: {
      en: "My Lord, forgive me and accept my repentance; truly You are the Accepter of repentance, the Oft-Forgiving.",
      bs: "Gospodaru moj, oprosti mi i primi moje pokajanje, Ti si, zaista, Onaj Koji prima pokajanje i Koji mnogo prašta.",
    },
    reference: "At-Tirmidhi 3434, Abu Dawud 1516",
  },
  {
    id: "hisnul_muslim_196",
    category: "hisnul_muslim",
    title: {
      en: "In a Gathering (2): Expiation of the Gathering (Kaffaratul-Majlis)",
      bs: "U društvu (2): keffaret (otkup) za sijelo",
    },
    description: {
      en: "Said at the end of a gathering; it expiates whatever was said in it.",
      bs: "Uči se na kraju sijela, i to je otkup za ono što je u njemu rečeno.",
    },
    arabic:
      "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ.",
    transliteration:
      "Subhanakal-lahumma wabihamdik, ashhadu an la ilaha illa ant, astaghfiruka wa-atoobu ilayk.",
    translation: {
      en: "How perfect You are, O Allah, and I praise You. I bear witness that none has the right to be worshipped except You. I seek Your forgiveness and turn to You in repentance.",
      bs: "Slavljen neka si, Allahu, i hvaljen. Svjedočim da nema boga osim Tebe. Od Tebe oprost tražim i Tebi se kajem.",
    },
    reference: "At-Tirmidhi 3433, Abu Dawud 4858",
  },
  {
    id: "hisnul_muslim_197",
    category: "hisnul_muslim",
    title: {
      en: "Reply to \"May Allah Forgive You\"",
      bs: "Odgovor na dovu \"Allah ti oprostio\"",
    },
    description: {
      en: "Said in reply to someone who says to you \"Ghafarallahu lak\" (May Allah forgive you).",
      bs: "Odgovor onome ko ti kaže \"Gafera Allahu lek\" (Allah ti oprostio).",
    },
    arabic: "وَلَكَ.",
    transliteration:
      "Wa lak.",
    translation: {
      en: "And you.",
      bs: "I tebi.",
    },
    reference: "Hisn al-Muslim",
  },
  {
    id: "hisnul_muslim_198",
    category: "hisnul_muslim",
    title: {
      en: "For Someone Who Does You a Favour",
      bs: "Dova onome ko ti učini dobro",
    },
    description: {
      en: "The Prophet ﷺ said: \"Whoever is done a favour and says to the one who did it 'Jazakallahu khayran' has done his utmost in thanking him.\"",
      bs: "Poslanik, s.a.v.s., rekao je: \"Kome neko učini dobro, pa mu kaže 'Džezakallahu hajren', taj mu se u potpunosti zahvalio.\"",
    },
    arabic: "جَزَاكَ اللَّهُ خَيْراً.",
    transliteration:
      "Jazakal-lahu khayra.",
    translation: {
      en: "May Allah reward you with good.",
      bs: "Neka te Allah nagradi dobrom.",
    },
    reference: "At-Tirmidhi 2035",
  },
  {
    id: "hisnul_muslim_199",
    category: "hisnul_muslim",
    title: {
      en: "Protection from the Dajjal (False Messiah)",
      bs: "Zaštita od Dedžala",
    },
    description: {
      en: "The Dajjal (False Messiah) is one of the major signs of the Last Hour and the greatest trial to befall mankind; every Prophet warned his people about him. He will be blind in his right eye, and \"kafir\" will be written between his eyes, which every believer will be able to read. See also the supplications for after the final tashahhud.",
      bs: "Dedžal (Lažni Mesija) jedan je od velikih predznaka Sudnjeg dana i najveće iskušenje za čovječanstvo; svaki vjerovjesnik upozoravao je svoj narod na njega. Bit će slijep na desno oko, a između očiju bit će mu napisano \"kafir\", što će pročitati svaki vjernik. Vidi i dove nakon posljednjeg tešehhuda.",
    },
    arabic:
      "مَنْ حَفِظَ عَشْرَ آيَاتٍ مِنْ أَوَّلِ سُورَةِ الْكَهْفِ عُصِمَ مِنَ الدَّجَّالِ. وَالْاسْتِعَاذَةُ بِاللَّهِ مِنْ فِتْنَتِهِ عَقِبَ التَّشَهُّدِ الْأَخِيرِ مِنْ كُلِّ صَلاَةٍ.",
    transliteration: "",
    translation: {
      en: "Whoever memorises ten verses from the beginning of Surat al-Kahf will be protected from the Dajjal. One should also seek refuge in Allah from his trial after the final tashahhud of every prayer.",
      bs: "Ko nauči napamet prvih deset ajeta sure El-Kehf, bit će sačuvan od Dedžala. Također, treba tražiti utočište kod Allaha od Dedžalove smutnje nakon posljednjeg tešehhuda u svakom namazu.",
    },
    reference: "Muslim 809",
  },
  {
    id: "hisnul_muslim_200",
    category: "hisnul_muslim",
    title: {
      en: "Reply to \"I Love You for the Sake of Allah\"",
      bs: "Odgovor onome ko kaže \"Volim te radi Allaha\"",
    },
    arabic: "أَحَبَّكَ الَّذِي أَحْبَبْتَنِي لَهُ.",
    transliteration: "Ahabbakal-lathee ahbabtanee lah.",
    translation: {
      en: "May the One for whose sake you love me love you.",
      bs: "Zavolio te Onaj radi Koga si me zavolio.",
    },
    reference: "Abu Dawud 5125",
  },
  {
    id: "hisnul_muslim_201",
    category: "hisnul_muslim",
    title: {
      en: "For Someone Who Offers You a Share of His Wealth",
      bs: "Dova onome ko ti ponudi dio svog imetka",
    },
    arabic: "بَارَكَ اللَّهُ لَكَ فِي أَهْلِكَ وَمَالِكَ.",
    transliteration: "Barakal-lahu laka fee ahlika wamalik.",
    translation: {
      en: "May Allah bless your family and your wealth for you.",
      bs: "Neka ti Allah blagoslovi tvoju porodicu i tvoj imetak.",
    },
    reference: "Al-Bukhari 2049",
  },
  {
    id: "hisnul_muslim_202",
    category: "hisnul_muslim",
    title: {
      en: "For a Lender When Repaying a Loan",
      bs: "Dova zajmodavcu pri vraćanju duga",
    },
    arabic:
      "بارَكَ اللَّهُ لَكَ فِي أَهْلِكَ وَمَالِكَ، إِنَّمَا جَزَاءُ السَّلَفِ الْحَمْدُ وَالأَدَاءُ.",
    transliteration:
      "Barakal-lahu laka fee ahlika wamalik, innama jaza-os-salafil-hamdu wal-ada'.",
    translation: {
      en: "May Allah bless your family and your wealth for you. The reward for a loan is only praise and repayment.",
      bs: "Neka ti Allah blagoslovi tvoju porodicu i tvoj imetak. Nagrada za zajam je samo zahvala i vraćanje.",
    },
    reference: "Ibn Majah 2424",
  },
  {
    id: "hisnul_muslim_203",
    category: "hisnul_muslim",
    title: {
      en: "Fear of Shirk",
      bs: "Dova zbog straha od širka",
    },
    description: {
      en: "Shirk is associating others with Allah in what is exclusively His right. It can occur in belief (e.g. believing that something other than Allah can benefit or harm), in speech (e.g. swearing by other than Allah) and in action (e.g. bowing or prostrating to other than Allah).",
      bs: "Širk je pripisivanje drugih Allahu u onome što pripada samo Njemu. Može biti u vjerovanju (npr. vjerovanje da neko osim Allaha može koristiti ili štetiti), u govoru (npr. zaklinjanje nekim drugim osim Allahom) i u djelu (npr. klanjanje ili padanje na sedždu nekome drugom osim Allahu).",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أُشْرِكَ بِكَ وَأَنَا أَعْلَمُ، وَأَسْتَغْفِرُكَ لِمَا لاَ أَعْلَمُ.",
    transliteration:
      "Allahumma innee a'oothu bika an ushrika bika wa ana a'lam, wa astaghfiruka lima la a'lam.",
    translation: {
      en: "O Allah, I seek refuge in You from knowingly associating anything with You, and I ask Your forgiveness for what I do not know.",
      bs: "Allahu moj, utječem Ti se od toga da Ti svjesno išta pridružim, i molim Te za oprost za ono što ne znam.",
    },
  },
  {
    id: "hisnul_muslim_204",
    category: "hisnul_muslim",
    title: {
      en: "Reply to \"May Allah Bless You\"",
      bs: "Odgovor na dovu \"Allah te blagoslovio\"",
    },
    description: {
      en: "Aisha (may Allah be pleased with her) reported that the Messenger of Allah ﷺ was given a sheep and ordered it to be distributed. When the servant returned, Aisha would ask what the people had said, and he would reply that they said \"Barakallahu feekum\" (May Allah bless you). Aisha would then say \"Wa feehim barakallah\" (And may Allah bless them): we return their supplication in kind, and our reward remains with us.",
      bs: "Aiša, r.a., prenosi da je Allahovom Poslaniku, s.a.v.s., poklonjena ovca, pa je naredio da se podijeli. Kad bi se sluga vratio, Aiša bi ga pitala šta su ljudi rekli, a on bi odgovorio da su rekli \"Barekallahu fikum\" (Allah vas blagoslovio). Aiša bi tada rekla \"Ve fihim barekallah\" (I njih Allah blagoslovio): uzvraćamo im istom dovom, a naša nagrada ostaje nama.",
    },
    arabic: "وَفِيكَ بَارَكَ اللَّهُ.",
    transliteration:
      "Wa feeka barakal-lah.",
    translation: {
      en: "And may Allah bless you too.",
      bs: "I tebe Allah blagoslovio.",
    },
  },
  {
    id: "hisnul_muslim_205",
    category: "hisnul_muslim",
    title: {
      en: "Against Superstitious Omens",
      bs: "Dova protiv zloslutnje",
    },
    description: {
      en: "Said when one initially takes something as a good or bad omen but then rejects that thought and relies on Allah alone; it serves as an expiation, since believing in omens falls under shirk.",
      bs: "Uči se kada čovjek u prvi mah nešto shvati kao dobar ili loš predznak, a zatim tu pomisao odbaci i osloni se samo na Allaha; to je otkup, jer vjerovanje u predznake spada u širk.",
    },
    arabic:
      "اللَّهُمَّ لاَ طَيْرَ إِلاَّ طَيْرُكَ، وَلاَ خَيْرَ إِلاَّ خَيْرُكَ، وَلاَ إِلَهَ غَيْرُكَ.",
    transliteration:
      "Allahumma la tayra illa tayruk, wa la khayra illa khayruk, wa la ilaha ghayruk.",
    translation: {
      en: "O Allah, there is no omen except what You decree, there is no good except Your good, and none has the right to be worshipped except You.",
      bs: "Allahu moj, nema predznaka osim onoga što Ti odrediš, nema dobra osim Tvoga dobra i nema boga osim Tebe.",
    },
  },
  {
    id: "hisnul_muslim_206",
    category: "hisnul_muslim",
    title: {
      en: "When Riding a Vehicle or Mount",
      bs: "Dova prilikom jahanja (vožnje)",
    },
    arabic:
      "بِسْمِ اللَّهِ، وَالْحَمْدُ للَّهِ ﴿سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنقَلِبُونَ﴾، الْحَمْدُ لِلَّهِ، الْحَمْدُ لِلَّهِ، الْحَمْدُ لِلَّهِ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، سُبْحَانَكَ اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي؛ فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ.",
    transliteration:
      "Bismil-lah, walhamdu lillah, subhanal-lathee sakhkhara lana hatha wama kunna lahu muqrineen, wainna ila rabbina lamunqaliboon, alhamdu lillah, alhamdu lillah, alhamdu lillah, Allahu akbar, Allahu akbar, Allahu akbar, subhanakal-lahumma innee thalamtu nafsee faghfir lee fainnahu la yaghfiruth-thunooba illa ant.",
    translation: {
      en: "In the name of Allah, and all praise is for Allah. How perfect is He who has subjected this to us, and we could not have done so ourselves, and to our Lord we will surely return. All praise is for Allah, all praise is for Allah, all praise is for Allah. Allah is the greatest, Allah is the greatest, Allah is the greatest. How perfect You are, O Allah; I have wronged myself, so forgive me, for none forgives sins except You.",
      bs: "U ime Allaha. Hvala Allahu. Hvaljen neka je Onaj Koji nam je ovo potčinio, a mi to ne bismo mogli učiniti, i mi ćemo se, zaista, Gospodaru našem vratiti! Hvala Allahu, hvala Allahu, hvala Allahu. Allah je najveći, Allah je najveći, Allah je najveći. Slavljen neka si, Allahu! Ja sam sebi nepravdu učinio, pa mi oprosti, jer grijehe ne oprašta niko osim Tebe.",
    },
    reference: "Abu Dawud 2602, At-Tirmidhi 3446",
  },
  {
    id: "hisnul_muslim_207",
    category: "hisnul_muslim",
    title: {
      en: "When Travelling (1): Setting Out",
      bs: "Na putovanju (1): polazak na put",
    },
    description: {
      en: "Birr and taqwa: birr refers to doing what Allah has commanded, and taqwa to avoiding what He has forbidden. Upon returning, the same supplication is said with the addition: \"Ayiboona, ta'iboona, 'abidoona, li-Rabbina hamidoon\" (We return, repenting, worshipping and praising our Lord).",
      bs: "Dobročinstvo (birr) je činjenje onoga što je Allah naredio, a bogobojaznost (takva) klonjenje onoga što je zabranio. Pri povratku se uči ista dova uz dodatak: \"Ajibune, taibune, abidune, li rabbina hamidun\" (Vraćamo se, kajemo se, ibadet činimo i Gospodara našeg hvalimo).",
    },
    arabic:
      "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، ﴿سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ * وَإِنَّا إِلَى رَبِّنَا لَمُنقَلِبُونَ﴾ اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا البِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى، اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ، اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ، وَالْخَليفَةُ فِي الْأَهْلِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ، وَكَآبَةِ الْمَنْظَرِ، وَسُوءِ الْمُنْقَلَبِ فِي الْمَالِ وَالْأَهْلِ.",
    transliteration:
      "Allahu akbar, Allahu akbar, Allahu akbar. Subhanal-lathee sakhkhara lana hatha wa ma kunna lahu muqrineen, wa inna ila Rabbina lamunqaliboon. Allahumma inna nas'aluka fee safarina hathal-birra wat-taqwa, wa minal-'amali ma tarda. Allahumma hawwin 'alayna safarana hatha, watwi 'anna bu'dah. Allahumma antas-sahibu fis-safar, wal-khaleefatu fil-ahl. Allahumma innee a'oothu bika min wa'tha'is-safar, wa ka'abatil-manthar, wa soo'il-munqalabi fil-mali wal-ahl.",
    translation: {
      en: "Allah is the greatest, Allah is the greatest, Allah is the greatest. How perfect is He who has subjected this to us, and we could not have done so ourselves, and to our Lord we will surely return. O Allah, we ask You on this journey of ours for righteousness (birr) and piety (taqwa), and for deeds that please You. O Allah, make this journey of ours easy for us and shorten its distance for us. O Allah, You are the Companion on the journey and the Guardian of the family. O Allah, I seek refuge in You from the hardships of travel, from distressing sights, and from an evil return to my wealth and family.",
      bs: "Allah je najveći, Allah je najveći, Allah je najveći. Hvaljen neka je Onaj Koji nam je ovo potčinio, a mi to ne bismo mogli učiniti, i mi ćemo se, zaista, Gospodaru našem vratiti! Allahu moj, molimo Te na ovom našem putovanju za dobročinstvo i bogobojaznost i za djela kojima si Ti zadovoljan. Allahu moj, olakšaj nam ovo naše putovanje i skrati nam njegovu daljinu. Allahu moj, Ti si Drug na putovanju i Čuvar porodice. Allahu moj, utječem Ti se od napora putovanja, od ružnog prizora i od lošeg povratka imetku i porodici.",
    },
    reference: "Muslim 1342",
  },
  {
    id: "hisnul_muslim_208",
    category: "hisnul_muslim",
    title: {
      en: "Entering a Town or City",
      bs: "Dova pri ulasku u grad",
    },
    arabic:
      "اللَّهُمَّ رَبَّ السَّمَوَاتِ السَّبْعِ وَمَا أَظْلَلْنَ، وَرَبَّ الأَرَضِينَ السَّبْعِ وَمَا أَقْلَلْنَ، وَرَبَّ الشَّياطِينِ وَمَا أَضْلَلْنَ، وَرَبَّ الرِّيَاحِ وَمَا ذَرَيْنَ، أَسْأَلُكَ خَيْرَ هَذِهِ الْقَرْيَةِ، وَخَيْرَ أَهْلِهَا، وَخَيْرَ مَا فِيهَا، وَأَعُوذُ بِكَ مِنْ شَرِّهَا، وَشَرِّ أَهْلِهَا، وَشَرِّ مَا فِيهَا.",
    transliteration:
      "Allahumma rabbas-samawatis-sab'i wama athlaln, warabbal-aradeenas-sab'i wama aqlaln, warabbash-shayateeni wama adlaln, warabbar-riyahi wama tharayn, as-aluka khayra hathihil-qaryah, wa khayra ahliha, wa khayra ma feeha, wa a'oothu bika min sharriha, wa sharri ahliha, wa sharri ma feeha.",
    translation: {
      en: "O Allah, Lord of the seven heavens and all that they shade, Lord of the seven earths and all that they carry, Lord of the devils and all whom they misguide, Lord of the winds and all that they scatter: I ask You for the good of this town, the good of its people and the good of what is in it, and I seek refuge in You from its evil, the evil of its people and the evil of what is in it.",
      bs: "Allahu moj, Gospodaru sedam nebesa i onoga što natkriljuju, Gospodaru sedam zemalja i onoga što nose, Gospodaru šejtana i onih koje zavode, Gospodaru vjetrova i onoga što raznose! Molim Te za dobro ovog mjesta, za dobro njegovih stanovnika i za dobro onoga što je u njemu, i utječem Ti se od zla ovog mjesta, od zla njegovih stanovnika i od zla onoga što je u njemu.",
    },
  },
  {
    id: "hisnul_muslim_209",
    category: "hisnul_muslim",
    title: {
      en: "Entering the Market",
      bs: "Dova pri ulasku na pijacu",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ حَيٌّ لاَ يَمُوتُ، بِيَدِهِ الْخَيْرُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
    transliteration:
      "La ilaha illal-lah, wahdahu la shareeka lah, lahul-mulku walahul-hamd, yuhyee wayumeetu wahuwa hayyun la yamoot, biyadihil-khayru wahuwa 'ala kulli shayin qadeer.",
    translation: {
      en: "None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise. He gives life and causes death, and He is Ever-Living and does not die. In His hand is all good, and He is over all things competent.",
      bs: "Nema boga osim Allaha, Jedinoga, Koji nema sudruga. Njemu pripada vlast i Njemu pripada hvala. On oživljava i usmrćuje, a On je Živi Koji ne umire. U Njegovoj ruci je dobro i On sve može.",
    },
    reference: "At-Tirmidhi 3428",
  },
  {
    id: "hisnul_muslim_210",
    category: "hisnul_muslim",
    title: {
      en: "When Your Vehicle or Mount Stumbles",
      bs: "Kad jahalica (vozilo) posrne",
    },
    description: {
      en: "Do not say \"May Satan perish\", for then he swells with pride; rather say \"Bismillah\", for then he shrinks until he becomes like a fly.",
      bs: "Ne govori \"Propao šejtan\", jer se on tada uzoholi, nego reci \"Bismillah\", jer se on tada smanji dok ne postane poput muhe.",
    },
    arabic: "بِسْمِ اللَّهِ.",
    transliteration: "Bismil-lah.",
    translation: {
      en: "In the name of Allah.",
      bs: "U ime Allaha.",
    },
    reference: "Abu Dawud 4982",
  },
  {
    id: "hisnul_muslim_211",
    category: "hisnul_muslim",
    title: {
      en: "When Travelling (2): The Traveller's Farewell",
      bs: "Na putovanju (2): oproštaj putnika s onima koji ostaju",
    },
    arabic: "أَسْتَوْدِعُكُمُ اللَّهَ الَّذِي لاَ تَضِيعُ وَدَائِعُهُ.",
    transliteration: "Astawdi'ukumul-lah, allathee la tadee'u wada-i'uh.",
    translation: {
      en: "I entrust you to Allah, whose trusts are never lost.",
      bs: "Ostavljam vas u amanet Allahu, čiji se amaneti ne gube.",
    },
    reference: "Hisn al-Muslim 211 (Ibn Majah 2825 has the singular, astawdi'uka)",
  },
  {
    id: "hisnul_muslim_212",
    category: "hisnul_muslim",
    title: {
      en: "When Travelling (3): Bidding Farewell to the Traveller",
      bs: "Na putovanju (3): ispraćaj putnika",
    },
    arabic:
      "أَسْتَوْدِعُ اللَّهَ دِينَكَ، وَأَمَانَتَكَ، وَخَوَاتِيمَ عَمَلِكَ.",
    transliteration:
      "Astawdi'ul-laha deenak, wa-amanatak, wakhawateema 'amalik.",
    translation: {
      en: "I entrust to Allah your religion, your trustworthiness and the conclusion of your deeds.",
      bs: "Ostavljam u amanet Allahu tvoju vjeru, tvoje povjerenje i završetke tvojih djela.",
    },
    reference: "At-Tirmidhi 3443, Abu Dawud 2600",
  },
  {
    id: "hisnul_muslim_213",
    category: "hisnul_muslim",
    title: {
      en: "When Travelling (4): Dua for the Traveller",
      bs: "Na putovanju (4): dova za putnika",
    },
    arabic:
      "زَوَّدَكَ اللَّهُ التَّقْوَى، وَغَفَرَ ذَنْبَكَ، وَيَسَّرَ لَكَ الخَيْرَ حَيْثُ ما كُنْتَ.",
    transliteration:
      "Zawwadakal-lahut-taqwa, waghafara thanbak, wayassara lakal-khayra haythuma kunt.",
    translation: {
      en: "May Allah provide you with piety (taqwa), forgive your sins and make good easy for you wherever you may be.",
      bs: "Neka te Allah opskrbi bogobojaznošću, oprosti ti grijehe i olakša ti dobro gdje god bio.",
    },
    reference: "At-Tirmidhi 3444",
  },
  {
    id: "hisnul_muslim_214",
    category: "hisnul_muslim",
    title: {
      en: "When Travelling (5): Takbir Going Up, Tasbih Going Down",
      bs: "Na putovanju (5): tekbir pri usponu, tesbih pri spuštanju",
    },
    arabic:
      "قَالَ جَابِرٌ رضي الله عنه: كُنَّا إِذَا صَعَدْنَا كَبَّرْنَا، وَإِذَا نَزَلْنَا سَبَّحْنَا.",
    transliteration: "",
    translation: {
      en: "Jabir (may Allah be pleased with him) said: \"Whenever we went uphill we would say 'Allahu akbar' (Allah is the greatest), and whenever we went downhill we would say 'Subhanallah' (How perfect Allah is).\"",
      bs: "Džabir, r.a., kaže: \"Kada bismo se penjali, donosili bismo tekbir (Allahu ekber), a kada bismo se spuštali, donosili bismo tesbih (Subhanallah).\"",
    },
    reference: "Al-Bukhari 2993",
  },
  {
    id: "hisnul_muslim_215",
    category: "hisnul_muslim",
    title: {
      en: "When Travelling (6): At Dawn",
      bs: "Na putovanju (6): u zoru",
    },
    arabic:
      "سَمَّعَ سَامِعٌ بِحَمْدِ اللَّهِ، وَحُسْنِ بَلاَئِهِ عَلَيْنَا، رَبَّنَا صاحِبْنَا، وَأَفْضِلْ عَلَيْنَا، عَائِذاً بِاللَّهِ مِنَ النَّارِ.",
    transliteration:
      "Samma'a sami'un bi-hamdil-lahi wa husni bala'ihi 'alayna. Rabbana sahibna wa afdil 'alayna, 'a'ithan billahi minan-nar.",
    translation: {
      en: "A witness has heard our praise of Allah and of His goodly favours upon us. Our Lord, be our Companion and bestow Your favour upon us. I seek refuge in Allah from the Fire.",
      bs: "Neka posvjedoči onaj ko čuje našu zahvalu Allahu i Njegove lijepe blagodati prema nama. Gospodaru naš, budi s nama i podari nam Svoju dobrotu. Utječem se Allahu od Vatre.",
    },
    reference: "Muslim 2718",
  },
  {
    id: "hisnul_muslim_216",
    category: "hisnul_muslim",
    title: {
      en: "When Travelling (7): Stopping at a Place",
      bs: "Na putovanju (7): pri zaustavljanju",
    },
    description: {
      en: "Whoever stops at a place and says this, nothing will harm him until he departs from that place.",
      bs: "Ko se zaustavi na nekom mjestu i izgovori ovo, ništa mu neće nauditi dok ne krene s tog mjesta.",
    },
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",
    transliteration: "A'oothu bikalimatil-lahit-tammati min sharri ma khalaq.",
    translation: {
      en: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
      bs: "Utječem se savršenim Allahovim riječima od zla onoga što je stvorio.",
    },
    reference: "Muslim 2708",
  },
  {
    id: "hisnul_muslim_217",
    category: "hisnul_muslim",
    title: {
      en: "When Travelling (8): Returning Home",
      bs: "Na putovanju (8): povratak kući",
    },
    description: {
      en: "Ibn Umar (may Allah be pleased with him) reported that when the Messenger of Allah ﷺ returned from a military expedition or from Hajj, he would say \"Allahu akbar\" three times at every elevated place and then say this.",
      bs: "Ibn Omer, r.a., prenosi da bi Allahov Poslanik, s.a.v.s., kada bi se vraćao iz vojnog pohoda ili s hadža, na svakom uzvišenju tri puta donio tekbir, a zatim izgovorio ovo.",
    },
    arabic:
      "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، آيِبُونَ، تَائِبُونَ، عَابِدُونَ، لِرَبِّنا حَامِدُونَ، صَدَقَ اللَّهُ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الْأَحْزابَ وَحْدَهُ.",
    transliteration:
      "Allahu akbar, Allahu akbar, Allahu akbar. La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in qadeer. Ayiboona, ta'iboona, 'abidoona, li-Rabbina hamidoon. Sadaqal-lahu wa'dah, wa nasara 'abdah, wa hazamal-ahzaba wahdah.",
    translation: {
      en: "Allah is the greatest, Allah is the greatest, Allah is the greatest. None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things competent. We return, repenting, worshipping and praising our Lord. Allah fulfilled His promise, aided His servant, and alone defeated the Confederates.",
      bs: "Allah je najveći, Allah je najveći, Allah je najveći. Nema boga osim Allaha, Jedinoga, Koji nema sudruga. Njemu pripada vlast i Njemu pripada hvala, i On sve može. Vraćamo se, kajemo se, ibadet činimo i Gospodara našeg hvalimo. Allah je ispunio Svoje obećanje, pomogao Svome robu i Sam porazio saveznike.",
    },
    reference: "Al-Bukhari 1797, Muslim 1344",
  },
  {
    id: "hisnul_muslim_218",
    category: "hisnul_muslim",
    title: {
      en: "When Something Pleasing or Displeasing Happens",
      bs: "Kad se desi nešto lijepo ili neugodno",
    },
    description: {
      en: "When something happened that pleased him, the Prophet ﷺ would say the first; when something happened that displeased him, he would say the second.",
      bs: "Kada bi se desilo nešto što ga raduje, Poslanik, s.a.v.s., izgovorio bi prvu rečenicu, a kada bi se desilo nešto što mu nije drago, izgovorio bi drugu.",
    },
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ. الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ.",
    transliteration:
      "(When pleased:) Alhamdu lillahil-lathee bi-ni'matihi tatimmus-salihat. (When displeased:) Alhamdu lillahi 'ala kulli hal.",
    translation: {
      en: "(When pleased:) All praise is for Allah, by whose favour good things are completed. (When displeased:) All praise is for Allah in every circumstance.",
      bs: "(Kad se obraduješ:) Hvala Allahu, Čijom se blagodati upotpunjuju dobra djela. (Kad ti nešto nije drago:) Hvala Allahu u svakom stanju.",
    },
    reference: "Ibn Majah 3803",
  },
  {
    id: "hisnul_muslim_219",
    category: "hisnul_muslim",
    title: {
      en: "Virtue of Salawat on the Prophet ﷺ (1): Tenfold Blessings",
      bs: "Vrijednost salavata na Poslanika (1): deseterostruki blagoslov",
    },
    arabic:
      "قَالَ النَّبِيُّ صلى الله عليه وسلم: مَنْ صَلَّى عَلَيَّ صَلاَةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْراً.",
    transliteration: "",
    translation: {
      en: "The Prophet ﷺ said: \"Whoever sends one prayer upon me, Allah sends ten prayers upon him because of it.\"",
      bs: "Vjerovjesnik, s.a.v.s., rekao je: \"Ko na mene donese jedan salavat, Allah na njega zbog toga donese deset.\"",
    },
    reference: "Muslim 408",
  },
  {
    id: "hisnul_muslim_220",
    category: "hisnul_muslim",
    title: {
      en: "Virtue of Salawat on the Prophet ﷺ (2): It Reaches Him Wherever You Are",
      bs: "Vrijednost salavata na Poslanika (2): stiže do njega gdje god bili",
    },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: لاَ تَجْعَلُوا قَبْرِي عِيداً وَصَلُّوا عَلَيَّ؛ فَإِنَّ صَلاَتَكُم تَبْلُغُنِي حَيْثُ كُنْتُمْ.",
    transliteration: "",
    translation: {
      en: "And he ﷺ said: \"Do not make my grave a place of festivity, and send prayers upon me, for your prayers reach me wherever you are.\"",
      bs: "I rekao je, s.a.v.s.: \"Ne činite moj kabur mjestom svetkovine, i donosite salavat na mene, jer vaš salavat do mene stiže gdje god bili.\"",
    },
    reference: "Abu Dawud 2042",
  },
  {
    id: "hisnul_muslim_221",
    category: "hisnul_muslim",
    title: {
      en: "Virtue of Salawat on the Prophet ﷺ (3): The Miser",
      bs: "Vrijednost salavata na Poslanika (3): škrtac",
    },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: الْبَخِيلُ مَنْ ذُكِرْتُ عِنْدَهُ فَلَمْ يُصَلِّ عَلَيَّ.",
    transliteration: "",
    translation: {
      en: "And he ﷺ said: \"The miser is the one in whose presence I am mentioned and he does not send prayers upon me.\"",
      bs: "I rekao je, s.a.v.s.: \"Škrtac je onaj pred kim se ja spomenem, a on ne donese salavat na mene.\"",
    },
    reference: "At-Tirmidhi 3546",
  },
  {
    id: "hisnul_muslim_222",
    category: "hisnul_muslim",
    title: {
      en: "Virtue of Salawat on the Prophet ﷺ (4): Angels Convey the Salam",
      bs: "Vrijednost salavata na Poslanika (4): meleki dostavljaju selam",
    },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: إِنَّ لِلَّهِ مَلاَئِكَةً سَيَّاحِينَ فِي الْأَرْضِ يُبَلِّغُونِي مِنْ أُمَّتِي السَّلاَمَ.",
    transliteration: "",
    translation: {
      en: "And he ﷺ said: \"Allah has angels who roam the earth, conveying to me the greetings of peace from my Ummah.\"",
      bs: "I rekao je, s.a.v.s.: \"Allah ima meleke koji putuju po Zemlji i dostavljaju mi selam od mog ummeta.\"",
    },
    reference: "An-Nasa'i 1282",
  },
  {
    id: "hisnul_muslim_223",
    category: "hisnul_muslim",
    title: {
      en: "Virtue of Salawat on the Prophet ﷺ (5): He Returns the Greeting",
      bs: "Vrijednost salavata na Poslanika (5): on uzvraća selam",
    },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: مَا مِنْ أَحَدٍ يُسَلِّمُ عَلَيَّ إِلاَّ رَدَّ اللَّهُ عَلَيَّ رُوحِيَ حَتَّى أَرُدَّ عَلَيْهِ السَّلاَمَ.",
    transliteration: "",
    translation: {
      en: "And he ﷺ said: \"No one sends greetings of peace upon me except that Allah returns my soul to me so that I may return his greeting.\"",
      bs: "I rekao je, s.a.v.s.: \"Nema nikoga ko mi nazove selam, a da mi Allah ne vrati dušu da mu uzvratim selam.\"",
    },
    reference: "Abu Dawud 2041",
  },
  {
    id: "hisnul_muslim_224",
    category: "hisnul_muslim",
    title: {
      en: "Spreading Salam (1): The Path to Mutual Love",
      bs: "Širenje selama (1): put do međusobne ljubavi",
    },
    arabic:
      "قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم: لاَ تَدْخُلُوا الْجَنَّةَ حَتَّى تُؤْمِنُوا، وَلاَ تُؤْمِنُوا حَتَّى تَحَابُّوا، أَوَلاَ أَدُلُّكُم عَلَى شَيْءٍ إِذَا فَعَلْتُمُوهُ تَحَابَبْتُم، أَفْشُوا السَّلاَمَ بَيْنَكُمْ.",
    transliteration: "",
    translation: {
      en: "The Messenger of Allah ﷺ said: \"You will not enter Paradise until you believe, and you will not believe until you love one another. Shall I not tell you of something which, if you do it, you will love one another? Spread the greeting of peace (salam) among yourselves.\"",
      bs: "Allahov Poslanik, s.a.v.s., rekao je: \"Nećete ući u Džennet dok ne budete vjerovali, a nećete vjerovati dok se ne budete voljeli. Hoćete li da vas uputim na nešto što će, ako to budete činili, učiniti da se volite? Širite selam među sobom.\"",
    },
    reference: "Muslim 54",
  },
  {
    id: "hisnul_muslim_225",
    category: "hisnul_muslim",
    title: {
      en: "Spreading Salam (2): Three Traits That Complete Faith",
      bs: "Širenje selama (2): tri osobine koje upotpunjuju iman",
    },
    description: {
      en: "A saying of the Companion Ammar ibn Yasir (may Allah be pleased with him).",
      bs: "Riječi ashaba Ammara b. Jasira, r.a.",
    },
    arabic:
      "ثَلاَثٌ مَنْ جَمَعَهُنَّ فَقَدْ جَمَعَ الْإِيمَانَ: الْإِنْصَافُ مِنْ نَفْسِكَ، وَبَذْلُ السَّلاَمِ لِلْعَالَمِ، وَالْإِنْفَاقُ مِنَ الإِقْتَارِ.",
    transliteration: "",
    translation: {
      en: "Three things, whoever combines them has combined faith: being fair even against yourself, offering the greeting of peace to everyone, and spending even when you have little.",
      bs: "Tri su stvari, ko ih sakupi, sakupio je iman: pravednost i kad je na tvoju štetu, nazivanje selama svakome i udjeljivanje i kad imaš malo.",
    },
    reference: "Al-Bukhari (mu'allaq), Book of Faith",
  },
  {
    id: "hisnul_muslim_226",
    category: "hisnul_muslim",
    title: {
      en: "Spreading Salam (3): Greeting Those You Know and Do Not Know",
      bs: "Širenje selama (3): onima koje poznaješ i koje ne poznaješ",
    },
    arabic:
      "وَعَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو رَضِيَ اللَّهُ عَنْهُمَا: أنَّ رَجُلاً سَأَلَ النَّبِيَّ صلى الله عليه وسلم أيُّ الْإِسْلاَمِ خَيْرٌ قَالَ: تُطْعِمُ الطَّعَامَ، وَتَقْرأُ السَّلاَمَ عَلَى مَنْ عَرَفْتَ وَمَنْ لَمْ تَعْرِفْ.",
    transliteration: "",
    translation: {
      en: "Abdullah ibn Amr (may Allah be pleased with them both) narrated that a man asked the Prophet ﷺ: \"Which aspect of Islam is best?\" He said: \"That you feed people, and greet with peace those you know and those you do not know.\"",
      bs: "Abdullah b. Amr, r.a., prenosi da je jedan čovjek upitao Vjerovjesnika, s.a.v.s.: \"Koji je islam najbolji?\" Odgovorio je: \"Da hraniš ljude i da nazivaš selam onome koga poznaješ i onome koga ne poznaješ.\"",
    },
    reference: "Al-Bukhari 12, Muslim 39",
  },
  {
    id: "hisnul_muslim_227",
    category: "hisnul_muslim",
    title: {
      en: "Replying to the Salam of a Non-Muslim",
      bs: "Odgovor na selam nemuslimana",
    },
    description: {
      en: "The Prophet ﷺ said: \"When the People of the Book greet you with salam, reply: 'And upon you.'\"",
      bs: "Poslanik, s.a.v.s., rekao je: \"Kada vas sljedbenici Knjige (jevreji i kršćani) poselame, recite: 'I vama.'\"",
    },
    arabic:
      "وَعَلَيْكُمْ.",
    transliteration: "Wa 'alaykum.",
    translation: {
      en: "And upon you.",
      bs: "I vama.",
    },
    reference: "Al-Bukhari 6258, Muslim 2163",
  },
  {
    id: "hisnul_muslim_228",
    category: "hisnul_muslim",
    title: {
      en: "On Hearing a Rooster Crow or a Donkey Bray",
      bs: "Kad pijetao kukuriče ili magarac njače",
    },
    arabic:
      "إِذَا سَمِعْتُمْ صِيَاحَ الدِّيَكَةِ فَاسْأَلُوا اللَّهَ مِنْ فَضْلِهِ؛ فَإِنَّهَا رَأَتْ مَلَكاً وَإِذَا سَمِعْتُمْ نَهِيقَ الْحِمَارِ فَتَعَوَّذُوا بِاللَّهِ مِنَ الشَّيطَانِ؛ فَإِنَّهُ رَأَى شَيْطَاناً.",
    transliteration: "",
    translation: {
      en: "When you hear roosters crowing, ask Allah for His bounty, for they have seen an angel; and when you hear a donkey braying, seek refuge in Allah from Satan, for it has seen a devil.",
      bs: "Kada čujete pijetlove kako kukuriču, molite Allaha od Njegove dobrote, jer su vidjeli meleka. A kada čujete magarca kako njače, utječite se Allahu od šejtana, jer je vidio šejtana.",
    },
    reference: "Al-Bukhari 3303, Muslim 2729",
  },
  {
    id: "hisnul_muslim_229",
    category: "hisnul_muslim",
    title: {
      en: "On Hearing Dogs Bark or Donkeys Bray at Night",
      bs: "Kad noću čuješ lavež pasa ili njakanje magaraca",
    },
    arabic:
      "إِذَا سَمِعْتُمْ نُبَاحَ الْكِلاَبِ وَنَهِيقَ الْحَمِيرِ بِاللَّيْلِ فَتَعَوَّذُوا بِاللَّهِ مِنْهُنَّ؛ فَإِنَّهُنَّ يَرَيْنَ مَا لاَ تَرَوْنَ.",
    transliteration: "",
    translation: {
      en: "When you hear dogs barking or donkeys braying at night, seek refuge in Allah from them, for they see what you do not see.",
      bs: "Kada noću čujete lavež pasa i njakanje magaraca, utječite se Allahu od njih, jer oni vide ono što vi ne vidite.",
    },
    reference: "Abu Dawud 5103",
  },
  {
    id: "hisnul_muslim_230",
    category: "hisnul_muslim",
    title: {
      en: "For a Believer You Have Insulted",
      bs: "Dova za vjernika kojeg si uvrijedio",
    },
    arabic:
      "اللَّهُمَّ فَأَيُّمَا مُؤْمِنٍ سَبَبْتُهُ فَاجْعَلْ ذَلِكَ لَهُ قُرْبَةً إِلَيْكَ يَوْمَ الْقِيَامَةِ.",
    transliteration:
      "Allahumma fa-ayyuma mu'minin sababtuhu faj'al thalika lahu qurbatan ilayka yawmal-qiyamah.",
    translation: {
      en: "O Allah, whichever believer I have insulted, make that a means of drawing him near to You on the Day of Resurrection.",
      bs: "Allahu moj, kojeg god vjernika da sam uvrijedio, učini mu to sredstvom približavanja Tebi na Sudnjem danu.",
    },
    reference: "Al-Bukhari 6361, Muslim 2601",
  },
  {
    id: "hisnul_muslim_231",
    category: "hisnul_muslim",
    title: {
      en: "How to Praise a Fellow Muslim",
      bs: "Kako pohvaliti brata muslimana",
    },
    description: {
      en: "The Prophet ﷺ said: \"If one of you must praise his companion, let him say...\" — and only if he knows that to be true of him.",
      bs: "Poslanik, s.a.v.s., rekao je: \"Ako neko od vas baš mora pohvaliti svoga druga, neka kaže...\" — i to samo ako zna da je takav.",
    },
    arabic:
      "أَحْسِبُ فُلاَناً وَاللَّهُ حَسِيبُهُ، وَلاَ أُزَكِّي عَلَى اللَّهِ أَحَداً، أَحْسِبُهُ كَذَا وَكَذَا.",
    transliteration:
      "Ahsibu fulanan, wallahu haseebuh, wa la uzakkee 'alal-lahi ahada, ahsibuhu katha wa katha.",
    translation: {
      en: "I consider so-and-so to be such, and Allah is his Reckoner, and I do not declare anyone pure before Allah; I consider him to be such and such.",
      bs: "Smatram da je taj i taj takav, a Allah će ga obračunati, i ja nikoga ne proglašavam čistim pred Allahom; smatram ga takvim i takvim.",
    },
    reference: "Muslim 3000",
  },
  {
    id: "hisnul_muslim_232",
    category: "hisnul_muslim",
    title: {
      en: "When You Are Praised",
      bs: "Šta reći kada te hvale",
    },
    arabic:
      "اللَّهُمَّ لاَ تُؤَاخِذْنِي بِمَا يَقُولُونَ، وَاغْفِرْ لِي مَا لاَ يَعْلَمُونَ، [وَاجْعَلْنِي خَيْراً مِمَّا يَظُنُّونَ].",
    transliteration:
      "Allahumma la tu'akhithnee bima yaqooloon, waghfir lee ma la ya'lamoon, [waj'alnee khayran mimma yathunnoon].",
    translation: {
      en: "O Allah, do not hold me accountable for what they say, forgive me for what they do not know, [and make me better than what they think].",
      bs: "Allahu moj, ne uzmi me na odgovornost zbog onoga što govore, oprosti mi ono što oni ne znaju [i učini me boljim od onoga što misle].",
    },
  },
  {
    id: "hisnul_muslim_233",
    category: "hisnul_muslim",
    title: {
      en: "Talbiyah for Hajj or Umrah",
      bs: "Telbija za hadž ili umru",
    },
    arabic:
      "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ، وَالنِّعْمَةَ، لَكَ وَالْمُلْكَ، لاَ شَرِيكَ لَكَ.",
    transliteration:
      "Labbaykal-lahumma labbayk, labbayka la shareeka laka labbayk, innal-hamda wanni'mata laka walmulk, la shareeka lak.",
    translation: {
      en: "Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Truly, all praise, favour and sovereignty belong to You. You have no partner.",
      bs: "Odazivam Ti se, Allahu, odazivam Ti se! Odazivam Ti se, Ti nemaš sudruga, odazivam Ti se! Zaista, hvala, blagodat i vlast pripadaju Tebi. Ti nemaš sudruga!",
    },
    reference: "Al-Bukhari 1549, Muslim 1184",
  },
  {
    id: "hisnul_muslim_234",
    category: "hisnul_muslim",
    title: {
      en: "Takbir at the Black Stone",
      bs: "Tekbir kod Crnog kamena (Hadžerul-esveda)",
    },
    arabic:
      "طَافَ النَّبيُّ صلى الله عليه وسلم بِالْبَيْتِ عَلَى بَعِيرٍ كُلَّمَا أَتَى الرُّكْنَ أَشَارَ إِلَيْهِ بِشَيْءٍ عِنْدَهُ وَكَبَّرَ.",
    transliteration:
      "",
    translation: {
      en: "The Prophet ﷺ performed tawaf around the Ka'bah on a camel. Every time he came to the Corner (the Black Stone), he pointed to it with something he was holding and said \"Allahu akbar\" (Allah is the greatest).",
      bs: "Poslanik, s.a.v.s., obavio je tavaf oko Kabe na devi. Kad god bi došao do ugla (Crnog kamena), pokazao bi prema njemu nečim što je držao i donio tekbir (Allahu ekber).",
    },
    reference: "Al-Bukhari 1613",
  },
  {
    id: "hisnul_muslim_235",
    category: "hisnul_muslim",
    title: {
      en: "Between the Yemeni Corner and the Black Stone",
      bs: "Dova između Jemenskog ugla i Crnog kamena",
    },
    description: {
      en: "The Prophet ﷺ would say this between the Yemeni Corner and the Black Stone (Qur'an 2:201).",
      bs: "Poslanik, s.a.v.s., učio je ovo između Jemenskog ugla i Crnog kamena (Kur'an 2:201).",
    },
    arabic:
      "﴿رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ﴾.",
    transliteration:
      "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'athaban-nar.",
    translation: {
      en: "Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",
      bs: "Gospodaru naš, daj nam dobro i na ovome i na onome svijetu, i sačuvaj nas patnje u ognju!",
    },
    reference: "Abu Dawud 1892",
  },
  {
    id: "hisnul_muslim_236",
    category: "hisnul_muslim",
    title: {
      en: "At Safa and Marwah",
      bs: "Dova na Safi i Mervi",
    },
    description: {
      en: "Jabir (may Allah be pleased with him), describing the Prophet's ﷺ Hajj, said that when he approached Safa he recited the verse (Qur'an 2:158) and said \"I begin with what Allah began with.\" He climbed Safa until he could see the Ka'bah, faced the qiblah, declared Allah's oneness and greatness, and said the words of tawhid three times, making his own supplication in between. He did the same at Marwah.",
      bs: "Džabir, r.a., opisujući Poslanikov, s.a.v.s., hadž, kaže da je, kada se približio Safi, proučio ajet (Kur'an 2:158) i rekao: \"Počinjem s onim s čim je Allah počeo.\" Popeo se na Safu dok nije ugledao Kabu, okrenuo se prema kibli, izgovorio tevhid i tekbir, i tri puta izgovorio riječi tevhida, a između njih je dovio. Isto je učinio i na Mervi.",
    },
    arabic:
      "﴿إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَآئِرِ اللَّهِ﴾ أَبْدَأُ بِمَا بَدَأَ اللَّهُ بِهِ. اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ. لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الْأَحْزَابَ وَحْدَهُ.",
    transliteration:
      "Innas-safa wal-marwata min sha'a'iril-lah. Abda'u bima bada'al-lahu bih. Allahu akbar, Allahu akbar, Allahu akbar. La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadeer. La ilaha illal-lahu wahdah, anjaza wa'dah, wa nasara 'abdah, wa hazamal-ahzaba wahdah.",
    translation: {
      en: "Indeed, Safa and Marwah are among the symbols of Allah. I begin with what Allah began with. Allah is the greatest, Allah is the greatest, Allah is the greatest. None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things competent. None has the right to be worshipped except Allah alone. He fulfilled His promise, aided His servant, and alone defeated the Confederates.",
      bs: "Safa i Merva su, zaista, Allahova obilježja. Počinjem s onim s čim je Allah počeo. Allah je najveći, Allah je najveći, Allah je najveći. Nema boga osim Allaha, Jedinoga, Koji nema sudruga; Njemu pripada vlast i Njemu pripada hvala, i On sve može. Nema boga osim Allaha Jedinoga; On je ispunio Svoje obećanje, pomogao Svome robu i Sam porazio saveznike.",
    },
    reference: "Muslim 1218",
  },
  {
    id: "hisnul_muslim_237",
    category: "hisnul_muslim",
    title: {
      en: "On the Day of Arafah",
      bs: "Dova na dan Arefata",
    },
    description: {
      en: "The Prophet ﷺ said: \"The best supplication is the supplication on the Day of Arafah, and the best that I and the Prophets before me have said is this.\"",
      bs: "Poslanik, s.a.v.s., rekao je: \"Najbolja dova je dova na dan Arefata, a najbolje što smo rekli ja i vjerovjesnici prije mene je ovo.\"",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
    transliteration:
      "La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadeer.",
    translation: {
      en: "None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things competent.",
      bs: "Nema boga osim Allaha, Jedinoga, Koji nema sudruga. Njemu pripada vlast i Njemu pripada hvala, i On sve može.",
    },
    reference: "At-Tirmidhi 3585",
  },
  {
    id: "hisnul_muslim_238",
    category: "hisnul_muslim",
    title: {
      en: "At Al-Mash'ar Al-Haram (Muzdalifah)",
      bs: "Na Muzdelifi (El-Meš'aril-haram)",
    },
    arabic:
      "رَكِبَ النَّبِيُّ صلى الله عليه وسلم الْقَصْوَاءَ حَتَّى أَتَى الْمَشْعَرَ الْحَرَامَ فَاسْتَقْبَلَ الْقِبْلَةَ فَدَعَاهُ، وَكَبَّرَهُ، وَهَللَّهُ، وَوَحَّدَهُ فَلَمْ يَزَلْ وَاقِفاً حَتَّى أَسْفَرَ جِدَّاً فَدَفَعَ قَبْلَ أَنْ تَطْلُعَ الشَّمسُ.",
    transliteration: "",
    translation: {
      en: "The Prophet ﷺ rode Al-Qaswa' until he reached Al-Mash'ar Al-Haram. He faced the qiblah and supplicated to Allah, proclaimed His greatness (saying \"Allahu akbar\"), declared that none has the right to be worshipped but Him (saying \"La ilaha illallah\") and affirmed His oneness. He remained standing until the dawn light was very bright, then moved on before sunrise.",
      bs: "Poslanik, s.a.v.s., jahao je Kaswu dok nije došao do El-Meš'aril-harama. Tu se okrenuo prema kibli, dovio Allahu, donosio tekbir (\"Allahu ekber\"), tehlil (\"La ilahe illallah\") i tevhid, i stajao je dok se nije sasvim razdanilo, a zatim je krenuo prije izlaska sunca.",
    },
    reference: "Muslim 1218",
  },
  {
    id: "hisnul_muslim_239",
    category: "hisnul_muslim",
    title: {
      en: "Takbir When Stoning the Jamarat at Mina",
      bs: "Tekbir pri bacanju kamenčića na džemrete",
    },
    arabic:
      "يُكَبِّرُ كُلَّمَا رَمَى بِحَصَاةٍ عِنْدَ الْجِمَارِ الثَّلاَثِ، ثُمَّ يَتَقَدَّمُ، ويَقِفُ يَدْعُو مُسْتَقْبِلَ الْقِبلَةِ، رَافِعاً يَدَيْهِ بَعْدَ الْجَمْرَةِ الْأُولَى وَالثَّانِيَةِ. أَمَّا جَمْرَةُ الْعَقَبَةِ فَيَرْمِيهَا وَيُكَبِّرُ عِنْدَ كُلِّ حَصَاةٍ وَيَنْصَرِفُ وَلاَ يَقِفُ عِنْدَهَا.",
    transliteration: "",
    translation: {
      en: "The Prophet ﷺ would say \"Allahu akbar\" with each pebble he threw at the three Jamarat. After the first and second Jamrah, he would step forward and stand facing the qiblah, raising his hands in supplication. As for Jamrat al-'Aqabah, he would stone it, saying \"Allahu akbar\" with each pebble, and then leave without standing at it.",
      bs: "Poslanik, s.a.v.s., donosio je tekbir (\"Allahu ekber\") pri svakom kamenčiću koji bi bacio na tri džemreta. Nakon prvog i drugog džemreta iskoračio bi, stao okrenut prema kibli i dovio podignutih ruku. Džemretul-akabu bi gađao donoseći tekbir pri svakom kamenčiću, a zatim bi otišao ne zadržavajući se kod nje.",
    },
    reference: "Al-Bukhari 1751",
  },
  {
    id: "hisnul_muslim_240",
    category: "hisnul_muslim",
    title: {
      en: "When Amazed (1): Subhanallah",
      bs: "Kad se začudiš (1): subhanallah",
    },
    arabic: "سُبْحَانَ اللَّهِ!",
    transliteration: "Subhanal-lah!",
    translation: {
      en: "How perfect Allah is!",
      bs: "Slavljen neka je Allah!",
    },
  },
  {
    id: "hisnul_muslim_241",
    category: "hisnul_muslim",
    title: {
      en: "When Amazed (2): Allahu Akbar",
      bs: "Kad se začudiš (2): Allahu ekber",
    },
    arabic: "اللَّهُ أَكْبَرُ!",
    transliteration: "Allahu akbar!",
    translation: {
      en: "Allah is the greatest!",
      bs: "Allah je najveći!",
    },
  },
  {
    id: "hisnul_muslim_242",
    category: "hisnul_muslim",
    title: {
      en: "On Receiving Good News: Prostration of Gratitude",
      bs: "Pri radosnoj vijesti: sedžda zahvalnosti",
    },
    arabic:
      "كَانَ النَّبيُّ صلى الله عليه وسلم إِذَا أَتَاهُ أَمْرٌ يَسُرُّهُ أَوْ يُسَرُّ بِهِ خَرَّ سَاجِداً شُكْراً لِلَّهِ تَبَارَكَ وَتَعَالَى.",
    transliteration: "",
    translation: {
      en: "Whenever something pleasing came to the Prophet ﷺ, or he was given good news, he would fall down in prostration out of gratitude to Allah, Blessed and Exalted is He.",
      bs: "Kada bi Poslaniku, s.a.v.s., došlo nešto što ga raduje ili bi primio radosnu vijest, pao bi na sedždu iz zahvalnosti Allahu, Blagoslovljenom i Uzvišenom.",
    },
    reference: "Abu Dawud 2774, Ibn Majah 1394",
  },
  {
    id: "hisnul_muslim_243",
    category: "hisnul_muslim",
    title: {
      en: "When Feeling Pain in the Body",
      bs: "Dova kod bolova u tijelu",
    },
    description: {
      en: "Place your hand on the part of your body that hurts and say \"Bismillah\" three times, then say the second phrase seven times.",
      bs: "Stavi ruku na mjesto koje te boli i reci tri puta \"Bismillah\", a zatim sedam puta izgovori drugu rečenicu.",
    },
    arabic:
      "بِسْمِ اللَّهِ (ثَلاَثاً). أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ (سَبْعَ مَرَّاتٍ).",
    transliteration:
      "Bismillah (3 times). A'oothu billahi wa qudratihi min sharri ma ajidu wa uhathir (7 times).",
    translation: {
      en: "In the name of Allah (3 times). I seek refuge in Allah and His power from the evil of what I feel and what I fear (7 times).",
      bs: "U ime Allaha (3 puta). Utječem se Allahu i Njegovoj moći od zla onoga što osjećam i čega se pribojavam (7 puta).",
    },
    reference: "Muslim 2202",
  },
  {
    id: "hisnul_muslim_244",
    category: "hisnul_muslim",
    title: {
      en: "When You Fear Afflicting Someone with the Evil Eye",
      bs: "Kad se bojiš da ćeš nekoga ureći",
    },
    arabic:
      "إِذَا رَأَى أَحَدُكُم مِنْ أَخِيهِ، أَوْ مِنْ نَفْسِهِ، أَوْ مِنْ مَالِهِ مَا يُعْجِبُهُ [فَلْيَدْعُ لَهُ بِالْبَرَكَةِ] فَإِنَّ الْعَيْنَ حَقٌّ.",
    transliteration: "",
    translation: {
      en: "If one of you sees something he admires in his brother, in himself or in his wealth, [let him supplicate for blessing for it,] for the evil eye is real.",
      bs: "Ako neko od vas vidi kod svog brata, kod sebe ili u svom imetku nešto što mu se dopadne, [neka zamoli za bereket u tome,] jer urok je istina.",
    },
  },
  {
    id: "hisnul_muslim_245",
    category: "hisnul_muslim",
    title: {
      en: "When Frightened",
      bs: "Kada se prepadneš",
    },
    arabic: "لاَ إِلَهَ إِلاَّ اللَّهُ!",
    transliteration: "La ilaha illal-lah!",
    translation: {
      en: "None has the right to be worshipped except Allah!",
      bs: "Nema boga osim Allaha!",
    },
    reference: "Al-Bukhari 3346, Muslim 2880",
  },
  {
    id: "hisnul_muslim_246",
    category: "hisnul_muslim",
    title: {
      en: "When Slaughtering or Sacrificing an Animal",
      bs: "Pri klanju kurbana",
    },
    arabic:
      "بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ [اللَّهُمَّ مِنْكَ وَلَكَ] اللَّهُمَّ تَقَبَّلْ مِنِّي.",
    transliteration:
      "Bismil-lahi wallahu akbar, [Allahumma minka wa lak,] Allahumma taqabbal minnee.",
    translation: {
      en: "In the name of Allah, and Allah is the greatest. [O Allah, it is from You and for You.] O Allah, accept it from me.",
      bs: "U ime Allaha, Allah je najveći. [Allahu moj, ovo je od Tebe i za Tebe.] Allahu moj, primi ovo od mene.",
    },
    reference: "Muslim 1966, 1967",
  },
  {
    id: "hisnul_muslim_247",
    category: "hisnul_muslim",
    title: {
      en: "Protection from the Devils' Plots",
      bs: "Zaštita od šejtanskih spletki",
    },
    arabic:
      "أَعُوذُ بكَلِمَاتِ اللَّهِ التَّامَّاتِ الَّتِي لاَ يُجَاوِزُهُنَّ بَرٌّ وَلاَ فَاجِرٌ: مِنْ شَرِّ مَا خَلَقَ، وَبَرَأَ وَذَرَأَ، وَمِنْ شَرِّ مَا يَنْزِلُ مِنَ السَّمَاءِ، وَمِنْ شَرِّ مَا يَعْرُجُ فيهَا، وَمِنْ شَرِّ مَا ذَرَأَ فِي الْأَرْضِ، وَمِنْ شَرِّ مَا يَخْرُجُ مِنْهَا، وَمِنْ شَرِّ فِتَنِ اللَّيْلِ وَالنَّهَارِ، وَمِنْ شَرِّ كُلِّ طَارِقٍ إِلاَّ طَارِقاً يَطْرُقُ بِخَيْرٍ يَا رَحْمَنُ.",
    transliteration:
      "A'oothu bikalimatil-lahit-tammatil-latee la yujawizuhunna barrun wa la fajir, min sharri ma khalaqa wa bara'a wa thara'a, wa min sharri ma yanzilu minas-sama', wa min sharri ma ya'ruju feeha, wa min sharri ma thara'a fil-ard, wa min sharri ma yakhruju minha, wa min sharri fitanil-layli wan-nahar, wa min sharri kulli tariqin illa tariqan yatruqu bi-khayrin ya Rahman.",
    translation: {
      en: "I seek refuge in the perfect words of Allah, which neither the righteous nor the wicked can exceed, from the evil of what He has created, made and spread; from the evil of what descends from the sky and the evil of what ascends to it; from the evil of what He has spread on the earth and the evil of what comes out of it; from the evil of the trials of the night and the day; and from the evil of every night visitor, except a visitor who comes with good, O Most Merciful.",
      bs: "Utječem se savršenim Allahovim riječima, koje ne može nadići ni dobročinitelj ni griješnik, od zla onoga što je stvorio, sazdao i rasijao; od zla onoga što silazi s neba i od zla onoga što se na nebo penje; od zla onoga što je rasijao po zemlji i od zla onoga što iz nje izlazi; od zla iskušenja noći i dana; i od zla svakog noćnog posjetioca, osim posjetioca koji dolazi s dobrom, o Milostivi!",
    },
  },
  {
    id: "hisnul_muslim_248",
    category: "hisnul_muslim",
    title: {
      en: "Repentance and Forgiveness (1): More Than Seventy Times a Day",
      bs: "Pokajanje i traženje oprosta (1): više od sedamdeset puta dnevno",
    },
    arabic:
      "قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم: وَاللَّهِ إِنِّي لأَسْتَغفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ فِي الْيَوْمِ أَكْثَرَ مِنْ سَبْعِينَ مَرَّةٍ.",
    transliteration: "",
    translation: {
      en: "The Messenger of Allah ﷺ said: \"By Allah, I seek Allah's forgiveness and turn to Him in repentance more than seventy times a day.\"",
      bs: "Allahov Poslanik, s.a.v.s., rekao je: \"Tako mi Allaha, ja tražim oprost od Allaha i kajem Mu se više od sedamdeset puta na dan.\"",
    },
    reference: "Al-Bukhari 6307",
  },
  {
    id: "hisnul_muslim_249",
    category: "hisnul_muslim",
    title: {
      en: "Repentance and Forgiveness (2): A Hundred Times a Day",
      bs: "Pokajanje i traženje oprosta (2): stotinu puta dnevno",
    },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: يَا أَيُّهَا النَّاسُ تُوبُوا إِلَى اللَّهِ فَإِنِّي أَتُوبُ فِي الْيَوْمِ إِلَيْهِ مِائَةَ مَرَّةٍ.",
    transliteration: "",
    translation: {
      en: "And he ﷺ said: \"O people, turn to Allah in repentance, for I turn to Him in repentance a hundred times a day.\"",
      bs: "I rekao je, s.a.v.s.: \"O ljudi, pokajte se Allahu, jer se ja Njemu kajem stotinu puta na dan.\"",
    },
    reference: "Muslim 2702",
  },
  {
    id: "hisnul_muslim_250",
    category: "hisnul_muslim",
    title: {
      en: "Repentance and Forgiveness (3): Istighfar That Erases Sins",
      bs: "Pokajanje i traženje oprosta (3): istigfar koji briše grijehe",
    },
    description: {
      en: "The Prophet ﷺ said: \"Whoever says this, Allah will forgive him, even if he fled from the battlefield.\"",
      bs: "Poslanik, s.a.v.s., rekao je: \"Ko ovo kaže, Allah će mu oprostiti, makar pobjegao s bojnog polja.\"",
    },
    arabic:
      "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ.",
    transliteration:
      "Astaghfirul-lahal-'atheemal-lathee la ilaha illa huwal-Hayyul-Qayyoomu wa atoobu ilayh.",
    translation: {
      en: "I seek the forgiveness of Allah the Mighty, besides whom none has the right to be worshipped, the Ever-Living, the Self-Sustaining, and I turn to Him in repentance.",
      bs: "Tražim oprost od Allaha Veličanstvenog, osim Kojeg nema boga, Živog i Vječnog, i Njemu se kajem.",
    },
    reference: "Abu Dawud 1517, At-Tirmidhi 3577",
  },
  {
    id: "hisnul_muslim_251",
    category: "hisnul_muslim",
    title: {
      en: "Repentance and Forgiveness (4): The Last Part of the Night",
      bs: "Pokajanje i traženje oprosta (4): posljednji dio noći",
    },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: أَقْرَبُ مَا يَكُونُ الرَّبُّ مِنَ الْعَبْدِ فِي جَوْفِ اللَّيْلِ الآخِرِ فَإِنِ اسْتَطَعْتَ أَنْ تَكُونَ مِمَّنْ يَذْكُرُ اللَّهَ فِي تِلْكَ السَّاعَةِ فَكُنْ.",
    transliteration: "",
    translation: {
      en: "And he ﷺ said: \"The closest the Lord is to His servant is in the depth of the last part of the night, so if you are able to be among those who remember Allah at that hour, then do so.\"",
      bs: "I rekao je, s.a.v.s.: \"Gospodar je najbliži robu u dubini posljednjeg dijela noći, pa ako možeš biti od onih koji u tom času spominju Allaha, budi.\"",
    },
    reference: "At-Tirmidhi 3579",
  },
  {
    id: "hisnul_muslim_252",
    category: "hisnul_muslim",
    title: {
      en: "Repentance and Forgiveness (5): Closest in Prostration",
      bs: "Pokajanje i traženje oprosta (5): najbliže na sedždi",
    },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: أَقْرَبُ مَا يَكُونُ الْعَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِدٌ فَأَكثِرُوا الدُّعَاءَ.",
    transliteration: "",
    translation: {
      en: "And he ﷺ said: \"The closest a servant is to his Lord is when he is in prostration, so supplicate a great deal.\"",
      bs: "I rekao je, s.a.v.s.: \"Rob je najbliži svome Gospodaru dok je na sedždi, pa mnogo dovite.\"",
    },
    reference: "Muslim 482",
  },
  {
    id: "hisnul_muslim_253",
    category: "hisnul_muslim",
    title: {
      en: "Repentance and Forgiveness (6): When the Heart Is Clouded",
      bs: "Pokajanje i traženje oprosta (6): kad se srce zamagli",
    },
    description: {
      en: "\"Clouded\" means a state of heedlessness. The Prophet ﷺ was constantly increasing in remembrance of Allah and nearness to Him, so if that intensity lessened in any way, he regarded it as a shortcoming and hastened to seek Allah's forgiveness.",
      bs: "\"Zamagli se\" znači stanje nemara. Poslanik, s.a.v.s., neprestano je povećavao spominjanje Allaha i blizinu Njemu, pa ako bi to makar malo oslabilo, smatrao bi to propustom i žurio da traži Allahov oprost.",
    },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: إِنَّهُ لَيُغَانُ عَلَى قَلْبِي وَإِنِّي لأَسْتَغْفِرُ اللَّهَ فِي الْيَوْمِ مِائَةَ مَرَّةٍ.",
    transliteration: "",
    translation: {
      en: "And he ﷺ said: \"My heart becomes clouded, and I seek Allah's forgiveness a hundred times a day.\"",
      bs: "I rekao je, s.a.v.s.: \"Moje srce se zamagli, pa ja tražim oprost od Allaha stotinu puta na dan.\"",
    },
    reference: "Muslim 2702",
  },
  {
    id: "hisnul_muslim_254",
    category: "hisnul_muslim",
    title: {
      en: "Excellence of Dhikr (1): Subhanallahi wa bihamdihi",
      bs: "Vrijednost zikra (1): subhanallahi ve bihamdihi",
    },
    description: {
      en: "The Prophet ﷺ said: \"Whoever says this a hundred times a day will have his sins wiped away, even if they are like the foam of the sea.\"",
      bs: "Poslanik, s.a.v.s., rekao je: \"Ko ovo kaže stotinu puta na dan, bit će mu izbrisani grijesi, makar ih bilo koliko morske pjene.\"",
    },
    arabic:
      "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",
    transliteration:
      "Subhanal-lahi wa bihamdih.",
    translation: {
      en: "How perfect Allah is, and I praise Him.",
      bs: "Slavljen neka je Allah i hvaljen.",
    },
    reference: "Al-Bukhari 6405, Muslim 2691",
  },
  {
    id: "hisnul_muslim_255",
    category: "hisnul_muslim",
    title: {
      en: "Excellence of Dhikr (2): La ilaha illallah wahdahu",
      bs: "Vrijednost zikra (2): la ilahe illallahu vahdehu",
    },
    description: {
      en: "The Prophet ﷺ said: \"Whoever says this ten times is like one who has freed four souls from the descendants of Isma'il\" (Muslim 2693). Whoever says it a hundred times in a day receives the reward of freeing ten slaves, a hundred good deeds are recorded for him, a hundred bad deeds are erased, and it is a protection for him from Satan that day until evening (Al-Bukhari 3293, Muslim 2691).",
      bs: "Poslanik, s.a.v.s., rekao je: \"Ko ovo kaže deset puta, kao da je oslobodio četiri roba od potomaka Ismailovih\" (Muslim 2693). Ko to kaže stotinu puta na dan, ima nagradu kao da je oslobodio deset robova, upiše mu se stotinu dobrih djela, izbriše mu se stotinu loših, i to mu je zaštita od šejtana toga dana do večeri (El-Buhari 3293, Muslim 2691).",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
    transliteration:
      "La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadeer.",
    translation: {
      en: "None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things competent.",
      bs: "Nema boga osim Allaha, Jedinoga, Koji nema sudruga. Njemu pripada vlast i Njemu pripada hvala, i On sve može.",
    },
    reference: "Muslim 2693",
  },
  {
    id: "hisnul_muslim_256",
    category: "hisnul_muslim",
    title: {
      en: "Excellence of Dhikr (3): Two Words Heavy on the Scale",
      bs: "Vrijednost zikra (3): dvije riječi teške na vagi",
    },
    description: {
      en: "The Prophet ﷺ said: \"Two words are light on the tongue, heavy on the Scale and beloved to the Most Merciful: ...\"",
      bs: "Poslanik, s.a.v.s., rekao je: \"Dvije riječi su lahke na jeziku, teške na vagi i drage Milostivom: ...\"",
    },
    arabic:
      "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ.",
    transliteration:
      "Subhanal-lahi wa bihamdih, subhanal-lahil-'atheem.",
    translation: {
      en: "How perfect Allah is, and I praise Him. How perfect Allah is, the Magnificent.",
      bs: "Slavljen neka je Allah i hvaljen, slavljen neka je Allah Veličanstveni.",
    },
    reference: "Al-Bukhari 6682, Muslim 2694",
  },
  {
    id: "hisnul_muslim_257",
    category: "hisnul_muslim",
    title: {
      en: "Excellence of Dhikr (4): Dearer Than All the Sun Rises Over",
      bs: "Vrijednost zikra (4): draže od svega što Sunce obasjava",
    },
    description: {
      en: "The Prophet ﷺ said: \"That I say these words is more beloved to me than everything the sun has risen over.\"",
      bs: "Poslanik, s.a.v.s., rekao je: \"Da izgovorim ove riječi draže mi je od svega što Sunce obasjava.\"",
    },
    arabic:
      "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلاَ إِلَهَ إِلاَّ اللَّهُ، وَاللَّهُ أَكْبَرُ.",
    transliteration:
      "Subhanal-lah, wal-hamdu lillah, wa la ilaha illal-lah, wallahu akbar.",
    translation: {
      en: "How perfect Allah is, all praise is for Allah, none has the right to be worshipped except Allah, and Allah is the greatest.",
      bs: "Slavljen neka je Allah, hvala Allahu, nema boga osim Allaha i Allah je najveći.",
    },
    reference: "Muslim 2695",
  },
  {
    id: "hisnul_muslim_258",
    category: "hisnul_muslim",
    title: {
      en: "Excellence of Dhikr (5): A Thousand Good Deeds a Day",
      bs: "Vrijednost zikra (5): hiljadu dobrih djela dnevno",
    },
    description: {
      en: "Sa'd ibn Abi Waqqas (may Allah be pleased with him) said: We were with the Messenger of Allah ﷺ and he said: \"Is any one of you unable to earn a thousand good deeds every day?\" One of those sitting with him asked: \"How can one of us earn a thousand good deeds?\" He said: \"Let him say 'Subhanallah' a hundred times; a thousand good deeds will be recorded for him, or a thousand sins will be erased from him.\"",
      bs: "Sa'd b. Ebi Vekkas, r.a., kaže: Bili smo kod Allahovog Poslanika, s.a.v.s., pa je rekao: \"Zar neko od vas ne može svaki dan zaraditi hiljadu dobrih djela?\" Neko od prisutnih upita: \"Kako neko od nas može zaraditi hiljadu dobrih djela?\" Odgovorio je: \"Neka stotinu puta kaže 'Subhanallah', pa će mu se upisati hiljadu dobrih djela ili izbrisati hiljadu grijeha.\"",
    },
    arabic:
      "سُبْحَانَ اللَّهِ.",
    transliteration:
      "Subhanal-lah.",
    translation: {
      en: "How perfect Allah is.",
      bs: "Slavljen neka je Allah.",
    },
    reference: "Muslim 2698",
  },
  {
    id: "hisnul_muslim_259",
    category: "hisnul_muslim",
    title: {
      en: "Excellence of Dhikr (6): A Palm Tree in Paradise",
      bs: "Vrijednost zikra (6): palma u Džennetu",
    },
    description: {
      en: "Jabir (may Allah be pleased with him) narrated that the Prophet ﷺ said: \"Whoever says this, a palm tree is planted for him in Paradise.\"",
      bs: "Džabir, r.a., prenosi da je Poslanik, s.a.v.s., rekao: \"Ko ovo kaže, zasadi mu se palma u Džennetu.\"",
    },
    arabic:
      "سُبْحَانَ اللَّهِ الْعَظِيمِ وَبِحَمْدِهِ.",
    transliteration:
      "Subhanal-lahil-'atheemi wa bihamdih.",
    translation: {
      en: "How perfect Allah is, the Magnificent, and I praise Him.",
      bs: "Slavljen neka je Allah Veličanstveni i hvaljen.",
    },
    reference: "At-Tirmidhi 3464",
  },
  {
    id: "hisnul_muslim_260",
    category: "hisnul_muslim",
    title: {
      en: "Excellence of Dhikr (7): A Treasure of Paradise",
      bs: "Vrijednost zikra (7): džennetska riznica",
    },
    description: {
      en: "The Prophet ﷺ said: \"O Abdullah ibn Qays, shall I not show you one of the treasures of Paradise?\" He said: \"Yes, O Messenger of Allah.\" He said: \"Say: La hawla wa la quwwata illa billah.\"",
      bs: "Poslanik, s.a.v.s., rekao je: \"O Abdullahu b. Kajse, hoćeš li da ti ukažem na jednu od džennetskih riznica?\" Rekao je: \"Hoću, Allahov Poslaniče.\" Rekao je: \"Reci: La havle ve la kuvvete illa billah.\"",
    },
    arabic:
      "لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ.",
    transliteration:
      "La hawla wa la quwwata illa billah.",
    translation: {
      en: "There is no might nor power except with Allah.",
      bs: "Nema snage ni moći osim s Allahom.",
    },
    reference: "Al-Bukhari 4205, Muslim 2704",
  },
  {
    id: "hisnul_muslim_261",
    category: "hisnul_muslim",
    title: {
      en: "Excellence of Dhikr (8): The Most Beloved Words to Allah",
      bs: "Vrijednost zikra (8): Allahu najdraže riječi",
    },
    description: {
      en: "The Prophet ﷺ said: \"The most beloved words to Allah are four ... It does not matter which of them you begin with.\"",
      bs: "Poslanik, s.a.v.s., rekao je: \"Allahu su najdraže četiri riječi ... Nije važno kojom od njih počneš.\"",
    },
    arabic:
      "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلاَ إِلَهَ إِلاَّ اللَّهُ، وَاللَّهُ أَكْبَرُ.",
    transliteration:
      "Subhanal-lah, wal-hamdu lillah, wa la ilaha illal-lah, wallahu akbar.",
    translation: {
      en: "How perfect Allah is, all praise is for Allah, none has the right to be worshipped except Allah, and Allah is the greatest.",
      bs: "Slavljen neka je Allah, hvala Allahu, nema boga osim Allaha i Allah je najveći.",
    },
    reference: "Muslim 2137",
  },
  {
    id: "hisnul_muslim_262",
    category: "hisnul_muslim",
    title: {
      en: "Excellence of Dhikr (9): Words Taught to a Bedouin",
      bs: "Vrijednost zikra (9): riječi kojima je podučen beduin",
    },
    description: {
      en: "Sa'd ibn Abi Waqqas (may Allah be pleased with him) narrated that a bedouin came to the Messenger of Allah ﷺ and said: \"Teach me words to say.\" He taught him the first part. The man said: \"These are for my Lord; what is for me?\" He said: \"Say: O Allah, forgive me, have mercy on me, guide me and provide for me.\"",
      bs: "Sa'd b. Ebi Vekkas, r.a., prenosi da je jedan beduin došao Allahovom Poslaniku, s.a.v.s., i rekao: \"Poduči me riječima koje ću govoriti.\" Poučio ga je prvom dijelu. Čovjek reče: \"Ovo je za mog Gospodara, a šta je za mene?\" Rekao je: \"Reci: Allahu moj, oprosti mi, smiluj mi se, uputi me i opskrbi me.\"",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، اللَّهُ أَكْبَرُ كَبِيراً، وَالْحَمْدُ لِلَّهِ كَثِيراً، سُبْحَانَ اللَّهِ رَبِّ الْعَالَمِينَ، لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ الْعَزِيزِ الْحَكِيمِ. اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَارْزُقْنِي.",
    transliteration:
      "La ilaha illal-lahu wahdahu la shareeka lah, Allahu akbaru kabeera, wal-hamdu lillahi katheera, subhanal-lahi Rabbil-'alameen, la hawla wa la quwwata illa billahil-'Azeezil-Hakeem. Allahummaghfir lee, warhamnee, wahdinee, warzuqnee.",
    translation: {
      en: "None has the right to be worshipped except Allah, alone, without partner. Allah is the greatest, truly great, and abundant praise is for Allah. How perfect Allah is, Lord of the worlds. There is no might nor power except with Allah, the Almighty, the Wise. O Allah, forgive me, have mercy on me, guide me and provide for me.",
      bs: "Nema boga osim Allaha, Jedinoga, Koji nema sudruga. Allah je najveći, uistinu najveći, i hvala Allahu mnogobrojna. Slavljen neka je Allah, Gospodar svjetova. Nema snage ni moći osim s Allahom, Silnim i Mudrim. Allahu moj, oprosti mi, smiluj mi se, uputi me i opskrbi me.",
    },
    reference: "Muslim 2696",
  },
  {
    id: "hisnul_muslim_263",
    category: "hisnul_muslim",
    title: {
      en: "Excellence of Dhikr (10): Dua Taught to New Muslims",
      bs: "Vrijednost zikra (10): dova za novog muslimana",
    },
    description: {
      en: "Tariq al-Ashja'i (may Allah be pleased with him) said: When a man embraced Islam, the Prophet ﷺ would teach him the prayer and then instruct him to supplicate with these words.",
      bs: "Tarik el-Ešdže'i, r.a., kaže: Kada bi neko primio islam, Poslanik, s.a.v.s., poučio bi ga namazu, a zatim mu naredio da dovi ovim riječima.",
    },
    arabic:
      "اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَعَافِنِي، وَارْزُقْنِي.",
    transliteration:
      "Allahummaghfir lee, warhamnee, wahdinee, wa 'afinee, warzuqnee.",
    translation: {
      en: "O Allah, forgive me, have mercy on me, guide me, grant me well-being and provide for me.",
      bs: "Allahu moj, oprosti mi, smiluj mi se, uputi me, podari mi zdravlje i opskrbi me.",
    },
    reference: "Muslim 2697",
  },
  {
    id: "hisnul_muslim_264",
    category: "hisnul_muslim",
    title: {
      en: "Excellence of Dhikr (11): The Best Dhikr and the Best Dua",
      bs: "Vrijednost zikra (11): najbolji zikr i najbolja dova",
    },
    description: {
      en: "Narrated by Jabir ibn Abdullah (may Allah be pleased with him) from the Messenger of Allah ﷺ.",
      bs: "Prenosi Džabir b. Abdullah, r.a., od Allahovog Poslanika, s.a.v.s.",
    },
    arabic:
      "إِنَّ أَفْضَلَ الدُّعَاءِ الْحَمْدُ لِلَّهِ، وَأَفْضَلَ الذِّكْرِ لاَ إِلَهَ إِلاَّ اللَّهُ.",
    transliteration:
      "Inna afdalad-du'a'il-hamdu lillah, wa afdalath-thikri la ilaha illal-lah.",
    translation: {
      en: "Truly, the best supplication is \"Alhamdu lillah\" (All praise is for Allah), and the best remembrance is \"La ilaha illallah\" (None has the right to be worshipped except Allah).",
      bs: "Zaista je najbolja dova \"Elhamdulillah\" (Hvala Allahu), a najbolji zikr \"La ilahe illallah\" (Nema boga osim Allaha).",
    },
    reference: "At-Tirmidhi 3383, Ibn Majah 3800",
  },
  {
    id: "hisnul_muslim_265",
    category: "hisnul_muslim",
    title: {
      en: "Excellence of Dhikr (12): The Enduring Good Deeds",
      bs: "Vrijednost zikra (12): trajna dobra djela",
    },
    description: {
      en: "These words are \"the enduring good deeds\" (al-baqiyat as-salihat).",
      bs: "Ove riječi su \"trajna dobra djela\" (el-bakijatus-salihat).",
    },
    arabic:
      "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلاَ إِلَهَ إِلاَّ اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ.",
    transliteration:
      "Subhanal-lah, wal-hamdu lillah, wa la ilaha illal-lah, wallahu akbar, wa la hawla wa la quwwata illa billah.",
    translation: {
      en: "How perfect Allah is, all praise is for Allah, none has the right to be worshipped except Allah, Allah is the greatest, and there is no might nor power except with Allah.",
      bs: "Slavljen neka je Allah, hvala Allahu, nema boga osim Allaha, Allah je najveći, i nema snage ni moći osim s Allahom.",
    },
  },
  {
    id: "hisnul_muslim_266",
    category: "hisnul_muslim",
    title: {
      en: "How the Prophet ﷺ Counted Tasbih",
      bs: "Kako je Poslanik brojao tesbih",
    },
    description: {
      en: "Tasbih here refers to saying \"Subhanallah\", \"Alhamdulillah\" and \"Allahu akbar\".",
      bs: "Tesbih se ovdje odnosi na izgovaranje \"Subhanallah\", \"Elhamdulillah\" i \"Allahu ekber\".",
    },
    arabic:
      "عَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو رضي الله عنه قَالَ: رَأَيْتُ النَّبيَّ صلى الله عليه وسلم يَعْقِدُ التَّسْبِيحَ وفي زيادةٍ: بِيَمِينِهِ.",
    transliteration: "",
    translation: {
      en: "Abdullah ibn Amr (may Allah be pleased with them both) said: \"I saw the Prophet ﷺ counting tasbih on his fingers\" — and in another narration: \"with his right hand.\"",
      bs: "Abdullah b. Amr, r.a., kaže: \"Vidio sam Vjerovjesnika, s.a.v.s., kako broji tesbih na prste\", a u drugoj predaji: \"desnom rukom\".",
    },
    reference: "Abu Dawud 1502, At-Tirmidhi 3486",
  },
  {
    id: "dua_against_enemies",
    category: "dua",
    title: {
      en: "The Prophet's ﷺ Dua Against the Confederates (Al-Ahzab)",
      bs: "Poslanikova dova protiv saveznika (Ahzaba)",
    },
    description: {
      en: "The Prophet ﷺ made this supplication against the confederate tribes (al-Ahzab) who besieged Madinah during the Battle of the Trench.",
      bs: "Poslanik, s.a.v.s., izgovorio je ovu dovu protiv udruženih plemena (Ahzaba) koja su opsjedala Medinu u Bici na Hendeku.",
    },
    arabic:
      "اللَّهُمَّ مُنْزِلَ الْكِتَابِ سَرِيعَ الْحِسَابِ اهْزِمِ الأَحْزَابَ اللَّهُمَّ اهْزِمْهُمْ وَزَلْزِلْهُمْ",
    transliteration:
      "Allahumma munzilal-kitab, saree'al-hisab, ihzimil-ahzab. Allahummahzimhum wa zalzilhum.",
    translation: {
      en: "O Allah, Revealer of the Book, Swift in reckoning, defeat the Confederates. O Allah, defeat them and shake them.",
      bs: "Allahu moj, Koji si objavio Knjigu i Koji brzo svodiš račune, porazi saveznike! Allahu moj, porazi ih i uzdrmaj ih!",
    },
    reference: "Al-Bukhari 2933, Muslim 1742",
  },
  // Added in content audit
  {
    id: "taawwudh",
    category: "ayah",
    title: {
      en: "Ta'awwudh (Seeking Refuge Before Recitation)",
      bs: "Eūzu (traženje zaštite prije učenja)",
    },
    arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    transliteration: "A'udhu billahi minash-shaytanir-rajim",
    translation: {
      en: "I seek refuge in Allah from the accursed Satan.",
      bs: "Utječem se Allahu od prokletog šejtana.",
    },
    description: {
      en: "Said before reciting the Qur'an, including before Al-Fatiha in the first rak'ah of prayer.",
      bs: "Izgovara se prije učenja Kur'ana, uključujući i prije Fatihe u prvom rekatu namaza.",
    },
    reference: "Qur'an 16:98",
  },
  {
    id: "amsaytu_ushhiduka",
    category: "dua",
    title: {
      en: "Evening: I Call You to Witness",
      bs: "Navečer: Tebe uzimam za svjedoka",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ",
    transliteration:
      "Allahumma inni amsaytu ushhiduka, wa ushhidu hamalata 'arshika, wa mala'ikataka, wa jami'a khalqika, annaka antallahu la ilaha illa anta wahdaka la sharika lak, wa anna Muhammadan 'abduka wa rasuluk.",
    translation: {
      en: "O Allah, I have entered the evening calling You to witness, and calling the bearers of Your Throne, Your angels and all of Your creation to witness, that You are Allah, there is no god but You alone, without partner, and that Muhammad is Your servant and Messenger.",
      bs: "Allahu moj, dočekao sam večer uzimajući Tebe za svjedoka, i nosače Tvoga Arša, Tvoje meleke i sva Tvoja stvorenja, da si Ti Allah, da nema boga osim Tebe, Jedinog, Koji nemaš sudruga, i da je Muhammed Tvoj rob i Tvoj poslanik.",
    },
    description: {
      en: "Recite four times in the evening. Whoever says it four times, Allah frees him from the Fire.",
      bs: "Uči se četiri puta navečer. Ko je prouči četiri puta, Allah ga oslobodi od Vatre.",
    },
    reference: "Abu Dawud 5069",
  },
  {
    id: "allahumma_ma_amsa",
    category: "dua",
    title: {
      en: "Evening: Every Blessing Is From You",
      bs: "Navečer: Svaka blagodat je od Tebe",
    },
    arabic:
      "اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
    transliteration:
      "Allahumma ma amsa bi min ni'matin aw bi-ahadin min khalqika faminka wahdaka la sharika lak, falakal-hamdu wa lakash-shukr.",
    translation: {
      en: "O Allah, whatever blessing I or any of Your creation have this evening is from You alone, without partner; so to You is all praise and to You is all thanks.",
      bs: "Allahu moj, koju god blagodat ja ili bilo ko od Tvojih stvorenja imamo ove večeri, ona je samo od Tebe, Koji nemaš sudruga; Tebi pripada hvala i Tebi pripada zahvala.",
    },
    description: {
      en: "Whoever says it in the evening has fulfilled the thanks due for his night.",
      bs: "Ko ovo kaže navečer, izvršio je zahvalu za tu noć.",
    },
    reference: "Abu Dawud 5073",
  },
  {
    id: "amsayna_rabbil_alamin",
    category: "dua",
    title: {
      en: "Evening: The Good of This Night",
      bs: "Navečer: Dobro ove noći",
    },
    arabic:
      "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ: فَتْحَهَا، وَنَصْرَهَا، وَنُورَهَا، وَبَرَكَتَهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا",
    transliteration:
      "Amsayna wa amsal-mulku lillahi Rabbil-'alamin. Allahumma inni as'aluka khayra hadhihil-laylah: fathaha, wa nasraha, wa nuraha, wa barakataha, wa hudaha, wa a'udhu bika min sharri ma fiha wa sharri ma ba'daha.",
    translation: {
      en: "We have entered the evening and all sovereignty belongs to Allah, Lord of the worlds. O Allah, I ask You for the good of this night: its victories, its help, its light, its blessings and its guidance; and I seek refuge in You from the evil in it and the evil after it.",
      bs: "Dočekali smo večer, a vlast pripada Allahu, Gospodaru svjetova. Allahu moj, molim Te za dobro ove noći: njene pobjede, njenu pomoć, njeno svjetlo, njen bereket i njenu uputu, i utječem Ti se od zla koje je u njoj i zla koje dolazi poslije nje.",
    },
    reference: "Abu Dawud 5084",
  },
  {
    id: "amsayna_ala_fitratil_islam",
    category: "dua",
    title: {
      en: "Evening: Upon the Fitrah of Islam",
      bs: "Navečer: Na prirodnoj vjeri islamu",
    },
    arabic:
      "أَمْسَيْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ، حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
    transliteration:
      "Amsayna 'ala fitratil-Islam, wa 'ala kalimatil-ikhlas, wa 'ala dini nabiyyina Muhammadin ﷺ, wa 'ala millati abina Ibrahima hanifan musliman wa ma kana minal-mushrikin.",
    translation: {
      en: "We have entered the evening upon the natural religion of Islam, upon the word of sincerity, upon the religion of our Prophet Muhammad ﷺ, and upon the way of our father Ibrahim, who was upright, a Muslim, and was not of the polytheists.",
      bs: "Dočekali smo večer na prirodnoj vjeri islamu, na riječi iskrenosti (tevhida), na vjeri našeg Poslanika Muhammeda ﷺ i na vjeri našeg oca Ibrahima, koji je bio pravovjeran, musliman, i nije bio od mnogobožaca.",
    },
    reference: "Ahmad 15360",
  },
  {
    id: "kahf_friday",
    category: "deed",
    title: {
      en: "Reading Surah Al-Kahf on Friday",
      bs: "Učenje sure El-Kehf petkom",
    },
    arabic:
      "مَنْ قَرَأَ سُورَةَ الْكَهْفِ فِي يَوْمِ الْجُمُعَةِ أَضَاءَ لَهُ مِنَ النُّورِ مَا بَيْنَ الْجُمُعَتَيْنِ",
    translation: {
      en: "Whoever reads Surah Al-Kahf on Friday, light will shine for him between the two Fridays.",
      bs: "Ko prouči suru El-Kehf petkom, obasjat će ga svjetlo od tog do sljedećeg petka.",
    },
    description: {
      en: "Surah Al-Kahf is the 18th surah (110 ayat). It may be read from Thursday sunset until Friday sunset.",
      bs: "El-Kehf je 18. sura (110 ajeta). Može se učiti od zalaska sunca u četvrtak do zalaska sunca u petak.",
    },
    reference: "Al-Hakim 3392; Al-Bayhaqi (Sahih al-Jami' 6470)",
  },
  {
    id: "laylatul_qadr_dua",
    category: "dua",
    title: {
      en: "Dua for Laylat al-Qadr",
      bs: "Dova u Lejletul-kadru",
    },
    arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    transliteration: "Allahumma innaka 'afuwwun tuhibbul-'afwa fa'fu 'anni.",
    translation: {
      en: "O Allah, You are the Pardoner and You love to pardon, so pardon me.",
      bs: "Allahu moj, Ti si Onaj Koji prašta i voliš praštati, pa mi oprosti.",
    },
    description: {
      en: "Taught by the Prophet ﷺ to 'Aishah when she asked what to say if she knew which night was Laylat al-Qadr.",
      bs: "Poslanik ﷺ je ovu dovu podučio Aišu kada ga je pitala šta da kaže ako sazna koja je noć Lejletul-kadr.",
    },
    reference: "At-Tirmidhi 3513; Ibn Majah 3850",
  },
];

export const INITIAL_PRESETS: Preset[] = [
  {
    id: "salat_fajr",
    title: { en: "Fajr Prayer (2 Rakats)", bs: "Sabah namaz (2 rekata)" },
    description: "Step-by-step recitations for both rakats of the Fajr prayer",
    order: 0,
    items: [
      // Rakat 1
      {
        itemId: "allahuakbar",
        type: "dhikr",
        target: 1,
        count: 0,
        useGlobalCount: false,
      }, // Takbir
      {
        itemId: "subhanaka_allahumma",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      }, // Istiftah
      {
        itemId: "taawwudh",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "fatiha",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "ikhlas",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      }, // Short surah
      {
        itemId: "allahuakbar",
        type: "dhikr",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "subhana_rabbiyal_azim",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      }, // Ruku
      {
        itemId: "sami_allahu_liman_hamidah",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      }, // Rise
      {
        itemId: "rabbana_walakal_hamd",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "allahuakbar",
        type: "dhikr",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "subhana_rabbiyal_ala",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      }, // Sujud 1
      {
        itemId: "allahuakbar",
        type: "dhikr",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "rabbighfirli",
        type: "dua",
        target: 2,
        count: 0,
        useGlobalCount: false,
      }, // Sit
      {
        itemId: "allahuakbar",
        type: "dhikr",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "subhana_rabbiyal_ala",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      }, // Sujud 2

      // Rakat 2
      {
        itemId: "allahuakbar",
        type: "dhikr",
        target: 1,
        count: 0,
        useGlobalCount: false,
      }, // Stand up
      {
        itemId: "fatiha",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "falaq",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      }, // Short surah
      {
        itemId: "allahuakbar",
        type: "dhikr",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "subhana_rabbiyal_azim",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      }, // Ruku
      {
        itemId: "sami_allahu_liman_hamidah",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      }, // Rise
      {
        itemId: "rabbana_walakal_hamd",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "allahuakbar",
        type: "dhikr",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "subhana_rabbiyal_ala",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      }, // Sujud 1
      {
        itemId: "allahuakbar",
        type: "dhikr",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "rabbighfirli",
        type: "dua",
        target: 2,
        count: 0,
        useGlobalCount: false,
      }, // Sit
      {
        itemId: "allahuakbar",
        type: "dhikr",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "subhana_rabbiyal_ala",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      }, // Sujud 2

      // Tashahhud
      {
        itemId: "allahuakbar",
        type: "dhikr",
        target: 1,
        count: 0,
        useGlobalCount: false,
      }, // Sit up
      {
        itemId: "tashahhud",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "salawat_ibrahimiyyah",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "rabbana_atina",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "taslim",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      }, // Right
      {
        itemId: "taslim",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      }, // Left
    ],
  },
  {
    id: "after_prayer",
    title: { en: "After Prayer (Salah)", bs: "Poslije namaza" },
    description:
      "Adhkar after the obligatory prayer (recite the three Quls 3x after Fajr and Maghrib)",
    order: 1,
    items: [
      {
        itemId: "astaghfirullah",
        type: "dhikr",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "allahumma_antas_salam",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_67",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "subhanallah",
        type: "dhikr",
        target: 33,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "alhamdulillah",
        type: "dhikr",
        target: 33,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "allahuakbar",
        type: "dhikr",
        target: 33,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "la_ilaha_illallah_wahdahu",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "ayatul_kursi",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "ikhlas",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "falaq",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "nas",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
    ],
  },
  {
    id: "tasbih",
    title: { en: "Tasbih", bs: "Tesbih" },
    description: "33x SubhanAllah, 33x Alhamdulillah, 33x Allahu Akbar",
    order: 2,
    items: [
      {
        itemId: "subhanallah",
        type: "dhikr",
        target: 33,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "alhamdulillah",
        type: "dhikr",
        target: 33,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "allahuakbar",
        type: "dhikr",
        target: 33,
        count: 0,
        useGlobalCount: false,
      },
    ],
  },
  {
    id: "morning_adhkar",
    title: { en: "Morning Adhkar", bs: "Jutarnji zikr" },
    description: "Morning adhkar from Hisnul Muslim, recited after Fajr",
    order: 3,
    items: [
      {
        itemId: "ayatul_kursi",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "ikhlas",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "falaq",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "nas",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "asbahna",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "allahumma_bika_asbahna",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "sayyidul_istighfar",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_80",
        type: "dua",
        target: 4,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_81",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_82",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hasbiyallah",
        type: "dua",
        target: 7,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_84",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_85",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "bismillah_ladhi",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "radhitu_billahi",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "ya_hayyu_ya_qayyum",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_89",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_90",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "subhanallahi_wa_bihamdihi",
        type: "dhikr",
        target: 100,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "la_ilaha_illallah_wahdahu",
        type: "dua",
        target: 10,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_94",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_95",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_96",
        type: "dua",
        target: 100,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "salawat",
        type: "dhikr",
        target: 10,
        count: 0,
        useGlobalCount: false,
      },
    ],
  },
  {
    id: "evening_adhkar",
    title: { en: "Evening Adhkar", bs: "Večernji zikr" },
    description: "Evening adhkar from Hisnul Muslim, recited after Asr or Maghrib",
    order: 4,
    items: [
      {
        itemId: "ayatul_kursi",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "ikhlas",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "falaq",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "nas",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "amsayna",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "allahumma_bika_amsayna",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "sayyidul_istighfar",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "amsaytu_ushhiduka",
        type: "dua",
        target: 4,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "allahumma_ma_amsa",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_82",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hasbiyallah",
        type: "dua",
        target: 7,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_84",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_85",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "bismillah_ladhi",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "radhitu_billahi",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "ya_hayyu_ya_qayyum",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "amsayna_rabbil_alamin",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "amsayna_ala_fitratil_islam",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "subhanallahi_wa_bihamdihi",
        type: "dhikr",
        target: 100,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "la_ilaha_illallah_wahdahu",
        type: "dua",
        target: 10,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "a_uzu_bi_kalimat",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "salawat",
        type: "dhikr",
        target: 10,
        count: 0,
        useGlobalCount: false,
      },
    ],
  },
  {
    id: "before_sleep",
    title: { en: "Before Sleep", bs: "Prije spavanja" },
    description: "Sunnah adhkar before sleeping, ending with the dua said lying down",
    order: 5,
    items: [
      {
        itemId: "ikhlas",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "falaq",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "nas",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "ayatul_kursi",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "amanar_rasul",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_102",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_104",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_105",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "subhanallah",
        type: "dhikr",
        target: 33,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "alhamdulillah",
        type: "dhikr",
        target: 33,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "allahuakbar",
        type: "dhikr",
        target: 34,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_111",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
    ],
  },
  {
    id: "protection_ruqyah",
    title: { en: "Protection (Ruqyah)", bs: "Zaštita (rukja)" },
    description: "Daily protection against evil eye and harm",
    order: 6,
    items: [
      {
        itemId: "fatiha",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "ayatul_kursi",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "evil_eye_protection",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "ikhlas",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "falaq",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "nas",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "bismillah_ladhi",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "a_uzu_bi_kalimat",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
    ],
  },
  {
    id: "istighfar_tawbah",
    title: {
      en: "Istighfar (Forgiveness)",
      bs: "Istigfar (traženje oprosta)",
    },
    description: "Seeking forgiveness from Allah",
    order: 7,
    items: [
      {
        itemId: "sayyidul_istighfar",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_96",
        type: "dua",
        target: 100,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "astaghfirullah",
        type: "dhikr",
        target: 100,
        count: 0,
        useGlobalCount: true,
      },
      {
        itemId: "subhanallahi_wa_bihamdihi",
        type: "dhikr",
        target: 100,
        count: 0,
        useGlobalCount: true,
      },
    ],
  },
  {
    id: "distress_relief",
    title: { en: "Distress Relief", bs: "Olakšanje od nevolje" },
    description: "Sunnah duas and dhikr for times of distress and grief",
    order: 8,
    items: [
      {
        itemId: "hisnul_muslim_122",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_123",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_124",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_120",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_121",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "la_hawla",
        type: "dhikr",
        target: 33,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "astaghfirullah",
        type: "dhikr",
        target: 33,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "la_ilaha_illallah",
        type: "dhikr",
        target: 33,
        count: 0,
        useGlobalCount: false,
      },
    ],
  },
  {
    id: "friday_special",
    title: { en: "Friday Special", bs: "Posebni zikr petkom" },
    description: "Recommended acts for Friday",
    order: 9,
    items: [
      {
        itemId: "kahf_friday",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "salawat",
        type: "dhikr",
        target: 100,
        count: 0,
        useGlobalCount: true,
      },
      {
        itemId: "read_quran",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: true,
      },
    ],
  },
  {
    id: "ramadan_special",
    title: { en: "Ramadan Special", bs: "Ramazanski program" },
    description: "Daily plan for Ramadan",
    order: 10,
    items: [
      {
        itemId: "read_quran",
        type: "dua",
        target: 20,
        count: 0,
        useGlobalCount: true,
      },
      {
        itemId: "sunnah_prayers",
        type: "dua",
        target: 1, // 12 sunnahs
        count: 0,
        useGlobalCount: true,
      },
      {
        itemId: "salah_duha",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: true,
      },
      {
        itemId: "sadaqah",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: true,
      },
      {
        itemId: "astaghfirullah",
        type: "dhikr",
        target: 100,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "la_ilaha_illallah",
        type: "dhikr",
        target: 100,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "salawat",
        type: "dhikr",
        target: 100,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "ayatul_kursi",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "hisnul_muslim_176",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "laylatul_qadr_dua",
        type: "dua",
        target: 1,
        count: 0,
        useGlobalCount: false,
      },
    ],
  },
];
