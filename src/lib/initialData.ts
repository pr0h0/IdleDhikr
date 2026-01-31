import { Dhikr, Preset, Dua } from "@/types";

export const INITIAL_DHIKRS: Dhikr[] = [
  // Daily Tasbih (33x)
  {
    id: "subhanallah",
    category: "daily",
    title: { en: "SubhanAllah", bs: "Subhaanallah" },
    arabic: "سُبْحَانَ اللَّهِ",
    countDaily: 0,
    countTotal: 0,
    lastUpdated: 0,
    target: 33,
  },
  {
    id: "alhamdulillah",
    category: "daily",
    title: { en: "Alhamdulillah", bs: "Elhamdullilah" },
    arabic: "الْحَمْدُ لِلَّهِ",
    countDaily: 0,
    countTotal: 0,
    lastUpdated: 0,
    target: 33,
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
      bs: "U ime Allaha, Milostivog, Samilosnog! Hvala Allahu, Gospodaru svjetova, Milostivom, Samilosnom, Vladaru Dana sudnjeg! Samo Tebe obožavamo i samo od Tebe pomoć molimo! Uputi nas na Pravi put, na Put onih kojima si blagodati podario, a ne na put onih na koje se srdžba izlila i koji su zalutali.",
    },
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
      en: 'Say, "He is Allah, [who is] One, Allah, the Eternal Refuge...',
      bs: 'Reci: "On je Allah - Jedan! Allah je Utočište svakom! Nije rodio i rođen nije, i niko Mu ravan nije!"',
    },
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
      en: 'Say, "I seek refuge in the Lord of daybreak, From the evil of that which He created, And from the evil of darkness when it settles, And from the evil of the blowers in knots, And from the evil of an envier when he envies."',
      bs: 'Reci: "Utječem se Gospodaru svitanja, od zla onoga što On stvara, i od zla mrkle noći kada razastre tmine, i od zla smutljivca kad smutnje sije, i od zla zavidljivca kad zavist ne krije!"',
    },
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
      en: 'Say, "I seek refuge in the Lord of mankind, The Sovereign of mankind. The God of mankind, From the evil of the retreating whisperer - Who whispers [evil] into the breasts of mankind - From among the jinn and mankind."',
      bs: 'Reci: "Tražim zaštitu Gospodara ljudi, Vladara ljudi, Boga ljudi, od zla šejtana napasnika, koji zle misli unosi u srca ljudi – od džina i od ljudi!"',
    },
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
      bs: "Mi smo ti, uistinu, mnogo dobro dali, zato se Gospodaru svome moli i kurban kolji, onaj koji tebe mrzi sigurno će bez pomena ostati.",
    },
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
      en: "By time, Indeed, mankind is in loss, Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.",
      bs: "Tako mi vremena – čovjek, doista, gubi, samo ne oni koji vjeruju i dobra djela čine, i koji jedni drugima istinu preporučuju i koji jedni drugima preporučuju strpljenje.",
    },
  },
  {
    id: "kafirun",
    category: "surah",
    title: { en: "Surah Al-Kafirun", bs: "Sura Kafirun" },
    arabic:
      "قُلْ يَـٰٓأَيُّهَا ٱلْكَـٰفِرُونَ ١ لَآ أَعْبُدُ مَا تَعْبُدُونَ ٢ وَلَآ أَنتُمْ عَـٰبِدُونَ لَآ أَعْبُدُ ٣ وَلَآ أَنَا۠ عَابِدٌۭ مَّا عَبَدتُّمْ ٤ وَلَآ أَنتُمْ عَـٰبِدُونَ مَآ أَعْبُدُ ٥ لَكُمْ دِينُكُمْ وَلِىَ دِينِ ٦",
    transliteration:
      "Qul ya ayyuhal-kafirun. La a'budu ma ta'budun. Wa la antum 'abiduna ma a'bud. Wa la ana 'abidum ma 'abadtum. Wa la antum 'abiduna ma a'bud. Lakum dinukum wa liya din.",
    translation: {
      en: 'Say, "O disbelievers, I do not worship what you worship. Nor are you worshippers of what I worship. Nor will I be a worshipper of what you worship. Nor will you be worshippers of what I worship. For you is your religion, and for me is my religion."',
      bs: 'Reci: "O vi nevjernici, ja se neću klanjati onima kojima se vi klanjate, a ni vi se nećete klanjati Onome kome se ja klanjam; ja se nisam klanjao onima kojima ste se vi klanjali, a i vi se niste klanjali Onome kome se ja klanjam, vama – vaša vjera, a meni – moja!"',
    },
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
      bs: "Allah je - nema boga osim Njega - Živi i Vječni! Ne obuzima Ga ni drijemež ni san! Njegovo je ono što je na nebesima i ono što je na Zemlji! Ko se može pred Njim zauzimati za nekoga bez dopuštenja Njegova?! On zna šta je bilo i prije njih i šta će biti poslije njih, a od onoga što On zna - drugi znaju samo onoliko koliko On želi. Moć Njegova obuhvata i nebesa i Zemlju i Njemu ne dojadi održavanje njihovo; On je Svevišnji, Veličanstveni!",
    },
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
      bs: 'Poslanik vjeruje u ono što mu se objavljuje od Gospodara njegova, i vjernici – svaki vjeruje u Allaha, i meleke Njegove, i knjige Njegove, i poslanike Njegove: "Mi ne izdvajamo nijednog od poslanika Njegovih." I oni govore: "Čujemo i pokoravamo se; oprosti nam, Gospodaru naš; tebi ćemo se vratiti." Allah nikoga ne opterećuje preko mogućnosti njegovih: u njegovu korist je dobro koje učini, a na njegovu štetu zlo koje uradi. Gospodaru naš, ne kazni nas ako zaboravimo ili što nehotice učinimo! Gospodaru naš, ne tovari na nas breme kao što si ga tovario na one prije nas! Gospodaru naš, ne stavljaj nam u dužnost ono što ne možemo podnijeti, pobriši grijehe naše i oprosti nam, i smiluj se na nas. Ti si Gospodar naš pa nam pomozi protiv naroda koji ne vjeruje!',
    },
  },
  {
    id: "rabbana_atina",
    category: "ayah",
    title: { en: "Rabbana Atina", bs: "Rabbana Atina" },
    transliteration:
      "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar.",
    arabic:
      "رَبَّنَآ ءَاتِنَا فِى ٱلدُّنْيَا حَسَنَةًۭ وَفِى ٱلْـَٔاخِرَةِ حَسَنَةًۭ وَقِنَا عَذَابَ ٱلنَّارِ",
    translation: {
      en: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.",
      bs: "Gospodaru naš, podaj nam dobro i na ovome i na onome svijetu, i sačuvaj nas patnje u ognju!",
    },
  },
  {
    id: "rabbana_la_tuzigh",
    category: "ayah",
    transliteration:
      "Rabbana la tuzigh qulubana ba'da idh hadaytana wa hab lana mil-ladunka rahmah. Innaka antal-Wahhab.",
    title: { en: "Rabbana La Tuzigh", bs: "Rabbana La Tuzigh" },
    arabic:
      "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ ٱلْوَهَّابُ",
    translation: {
      en: "Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower.",
      bs: "Gospodaru naš, ne dopusti srcima našim da skrenu, kada si nam već na Pravi put ukazao, i daruj nam Svoju milost; Ti si, uistinu, Onaj koji mnogo daruje!",
    },
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
  },
  {
    id: "rabbi_zidni",
    category: "ayah",
    title: { en: "Dua for Knowledge", bs: "Dova za znanje" },
    arabic: "رَّبِّ زِدْنِى عِلْمًۭا",
    transliteration: "Rabbi zidni 'ilma.",
    translation: {
      en: "My Lord, increase me in knowledge.",
      bs: "Gospodaru moj, Ti znanje moje proširi.",
    },
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
      en: "Allah is sufficient for me. There is no worthy of worship but Him. I have placed my trust in Him, He is Lord of the Majestic Throne.",
      bs: "Dovoljan mi je Allah, nema boga osim Njega, na Njega se oslanjam. On je Gospodar Arša veličanstvenog.",
    },
  },

  // Prayer Duas
  {
    id: "subhanaka_allahumma",
    category: "dua",
    title: { en: "Opening Dua (Istiftah)", bs: "Subhaneke" },
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
    title: { en: "In Ruku", bs: "Na rukuu" },
    arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    transliteration: "Subhana Rabbiyal-'Azim.",
    translation: {
      en: "Glory be to my Lord, the Almighty.",
      bs: "Slavljen neka je Gospodar moj Veliki.",
    },
    hidden: true,
  },
  {
    id: "sami_allahu_liman_hamidah",
    category: "dua",
    title: { en: "Rising from Ruku", bs: "Dizanje sa rukua" },
    arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ",
    transliteration: "Sami'allahu liman hamidah.",
    translation: {
      en: "Allah hears those who praise Him.",
      bs: "Čuje Allah onoga ko Mu zahvaljuje.",
    },
    hidden: true,
  },
  {
    id: "rabbana_walakal_hamd",
    category: "dua",
    transliteration: "Rabbana wa lakal-hamd.",
    title: { en: "Standing after Ruku", bs: "Stajanje nakon rukua" },
    arabic: "رَبَّنَا وَلَكَ الْحَمْدُ",
    translation: {
      en: "Our Lord, to You be praise.",
      bs: "Gospodaru naš, Tebi hvala.",
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
      bs: "Slavljen neka je Gospodar moj Svevišnji.",
    },
    hidden: true,
  },
  {
    transliteration: "Rabbighfir li.",
    id: "rabbighfirli",
    category: "dua",
    title: { en: "Between Sujoods", bs: "Između dvije sedžde" },
    arabic: "رَبِّ اغْفِرْ لِي",
    translation: { en: "Lord, forgive me.", bs: "Gospodaru, oprosti mi." },
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
      en: "O Allah, You are As-Salam (The Source of Peace), and from You comes Peace, blessed are You, O Possessor of Glory and Honor.",
      bs: "Allahu moj, Ti si Mir i od Tebe je mir, blagoslovljen si, o Posjedniče Veličanstvenosti i Plemenitosti.",
    },
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
      en: "O Allah! We implore You for help and beg forgiveness of You and believe in You and rely on You and praise You and we are thankful to You and are not ungrateful to You and we alienate and forsake those who disobey You. O Allah! You alone do we worship and for You do we pray and prostrate and we betake to please You and present ourselves for the service in Your cause and we hope for Your mercy and fear Your chastisement. Undoubtedly, Your torment is going to overtake infidels.",
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
      en: "There is no god but Allah, Alone, who has no partner. His is the dominion and His is the praise, and He is Able to do all things.",
      bs: "Nema boga osim Allaha, Jedinog, Koji druga nema. Njemu pripada sva vlast i Njemu pripada sva hvala i On nad svime ima moć.",
    },
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
  },
  {
    transliteration:
      "Asbahna wa asbahal-mulku lillah, wal-hamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir. Rabbi as'aluka khayra ma fi hadhal-yawmi wa khayra ma ba'dah, wa a'udhu bika min sharri ma fi hadhal-yawmu wa sharri ma ba'dah. Rabbi a'udhu bika minal-kasali wa su'il-kibar. Rabbi a'udhu bika min 'adhabin fin-nari wa 'adhabin fil-qabr.",
    id: "asbahna",
    category: "dua",
    title: { en: "Asbahna (Morning)", bs: "Asbahna (Jutarnji)" },
    arabic:
      "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
    translation: {
      en: "We have entered the morning and at this very time the whole kingdom belongs to Allah, and all praise is due to Allah. There is no god but Allah, the One; He has no partner. His is the Sovereignty and His is the Praise and He has power over all things. O Allah, I ask You for the good of this day and the good of what follows it, and I seek refuge in You from the evil of this day and the evil of what follows it. O Allah, I seek refuge in You from laziness and from the evil of old age. O Allah, I seek refuge in You from the punishment in the Fire and the punishment in the Grave.",
      bs: "Jutro smo dočekali i sva vlast pripada Allahu. Hvala Allahu, nema boga osim Allaha, Jedinog, Koji druga nema. Njemu pripada sva vlast i Njemu pripada sva hvala i On nad svime ima moć. Gospodaru, molim Te za dobro ovoga dana i dobro poslije njega, a utječem Ti se od zla ovoga dana i zla poslije njega. Gospodaru, utječem Ti se od ljenosti i zla oholosti. Gospodaru, utječem Ti se od patnje u Vatri i patnje u kaburu.",
    },
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
      en: "We have entered the evening and at this very time the whole kingdom belongs to Allah, and all praise is due to Allah. There is no god but Allah, the One; He has no partner. His is the Sovereignty and His is the Praise and He has power over all things. O Allah, I ask You for the good of this night and the good of what follows it, and I seek refuge in You from the evil of this night and the evil of what follows it. O Allah, I seek refuge in You from laziness and from the evil of old age. O Allah, I seek refuge in You from the punishment in the Fire and the punishment in the Grave.",
      bs: "Noć smo dočekali i sva vlast pripada Allahu. Hvala Allahu, nema boga osim Allaha, Jedinog, Koji druga nema. Njemu pripada sva vlast i Njemu pripada sva hvala i On nad svime ima moć. Gospodaru, molim Te za dobro ove noći i dobro poslije nje, a utječem Ti se od zla ove noći i zla poslije nje. Gospodaru, utječem Ti se od ljenosti i zla oholosti. Gospodaru, utječem Ti se od patnje u Vatri i patnje u kaburu.",
    },
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
      en: "O Allah, by You we enter the evening and by You we enter the morning, by You we live and by You we die, and to You is the Final Return.",
      bs: "Allahu moj, Tvojom voljom ulazimo u noć i Tvojom voljom ulazimo u jutro, Tvojom voljom živimo, i Tvojom voljom umiremo, i pred Tebe ćemo stati.",
    },
  },
  {
    id: "radhitu_billahi",
    category: "dua",
    title: { en: "Radhitu Billahi", bs: "Zadovoljan sam Allahom" },
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
      "Bismillahil-ladhi la yadurru ma'as-mihi shay'un fil-ardi wa la fis-sama'i wa huwas-sami'ul-'alim.",
    title: { en: "Bismillahil-ladhi", bs: "Bismillahil-lezi" },
    arabic:
      "بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    translation: {
      en: "In the Name of Allah with Whose Name there is protection against every kind of harm in the earth or in the heaven, and He is the All-Hearing and All-Knowing.",
      bs: "U ime Allaha, s čijim imenom ništa ne može naškoditi ni na Zemlji ni na nebu, i On sve čuje i sve zna.",
    },
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
      en: "O Ever Living One, O Eternal One, by Your mercy I call on You to set right all my affairs. Do not place me in charge of my soul even for the blinking of an eye.",
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
      en: "I seek refuge in the perfect words of Allah from every devil and every poisonous reptile, and from every evil eye.",
      bs: "Tražim zaštitu Allahovim savršenim riječima od svakog šejtana i otrovne životinje, i od svakog zlog oka.",
    },
  },

  // General & Deeds
  {
    id: "enter_home",
    category: "dua",
    title: { en: "Entering Home", bs: "Ulazak u kuću" },
    arabic:
      "بِسْمِ اللهِ وَلَجْنَا، وَ بِسْمِ اللهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا",
    transliteration:
      "Bismillahi walajna, wa bismillahi kharajna, wa 'ala Rabbina tawakkalna.",
    translation: {
      en: "In the name of Allah we enter and in the name of Allah we leave, and upon our Lord we rely.",
      bs: "S Allahovim imenom ulazimo i s Allahovim imenom izlazimo. Na Gospodara našeg se oslanjamo.",
    },
  },
  {
    id: "leave_home",
    category: "dua",
    title: { en: "Leaving Home", bs: "Izlazak iz kuće" },
    arabic:
      "بِسْمِ اللهِ ، تَوَكَّلْتُ عَلَى اللهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ",
    transliteration:
      "Bismillahi tawakkaltu 'alallah, wa la hawla wa la quwwata illa billah.",
    translation: {
      en: "In the name of Allah, I rely upon Allah, and there is no power and no strength except with Allah.",
      bs: "U ime Allaha, oslanjam se na Allaha, nema moći niti snage osim kod Allaha.",
    },
  },
  {
    id: "read_quran",
    category: "deed",
    title: { en: "Reading Quran (1 Page)", bs: "Učenje Kur'ana (1 Stranica)" },
    arabic:
      "اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لِأَصْحَابِهِ",
    translation: {
      en: "Read the Quran, for it will come as an intercessor for its reciters on the Day of Resurrection.",
      bs: "Učite Kur'an, jer će on doći na Sudnjem danu kao zagovornik onima koji su ga učili.",
    },
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
  },
  {
    id: "sunnah_prayers",
    category: "deed",
    title: { en: "12 Sunnah Rakats", bs: "12 rekata sunneta" },
    arabic:
      "مَا مِنْ عَبْدٍ مُسْلِمٍ يُصَلِّي لِلَّهِ كُلَّ يَوْمٍ ثِنْتَيْ عَشْرَةَ رَكْعَةً تَطَوُّعًا غَيْرَ فَرِيضَةٍ إِلاَّ بَنَى اللَّهُ لَهُ بَيْتًا فِي الْجَنَّةِ",
    translation: {
      en: "Whoever prays twelve rak'ahs in a day and night (2 before Fajr, 4 before Dhuhr, 2 after Dhuhr, 2 after Maghrib, 2 after Isha), a house will be built for him in Paradise.",
      bs: "Ko klanja dvanaest rekata (sunneta) u toku dana i noći (2 prije sabaha, 4 prije podne, 2 poslije podne, 2 poslije akšama, 2 poslije jacije), Allah će mu sagraditi kuću u Džennetu.",
    },
  },
  {
    id: "salah_duha",
    category: "deed",
    title: { en: "Salatul Duha", bs: "Duha namaz" },
    arabic:
      "أَوْصَانِي خَلِيلِي بِثَلاَثٍ: صِيَامِ ثَلاَثَةِ أَيَّامٍ مِنْ كُلِّ شَهْرٍ، وَرَكْعَتَيِ الضُّحَى، وَأَنْ أُوتِرَ قَبْلَ أَنْ أَنَامَ",
    translation: {
      en: "My beloved friend (the Prophet) advised me to do three things: to fast three days a month, to pray the two rak'ahs of Duha, and to pray Witr before sleeping.",
      bs: "Moj prijatelj (Poslanik, a.s.) oporučio mi je tri stvari: post tri dana u svakom mjesecu, dva rekata Duha-namaza i vitr-namaz prije spavanja.",
    },
  },
];

export const INITIAL_PRESETS: Preset[] = [
  {
    id: "salat_fajr",
    title: "Salat Fajr (2 Rakats)",
    description: "Complete guide for Fajr prayer",
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
    title: "After Prayer (Salah)",
    description: "Tasbih and Dhikr after obligatory prayer",
    order: 1,
    items: [
      {
        itemId: "astaghfirullah",
        type: "dhikr",
        target: 3,
        count: 0,
        useGlobalCount: true,
      },
      {
        itemId: "allahumma_antas_salam",
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
    ],
  },
  {
    id: "tasbih",
    title: "Tasbih",
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
    title: "Morning Routine",
    description: "Recommended morning adhkar",
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
        itemId: "radhitu_billahi",
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
        itemId: "hasbiyallah",
        type: "dua",
        target: 7,
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
        itemId: "salah_duha",
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
        useGlobalCount: true,
      },
      {
        itemId: "la_ilaha_illallah",
        type: "dhikr",
        target: 100,
        count: 0,
        useGlobalCount: true,
      },
    ],
  },
  {
    id: "evening_adhkar",
    title: "Evening Routine",
    description: "Recommended evening adhkar",
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
        itemId: "radhitu_billahi",
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
        itemId: "hasbiyallah",
        type: "dua",
        target: 7,
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
        itemId: "a_uzu_bi_kalimat",
        type: "dua",
        target: 3,
        count: 0,
        useGlobalCount: false,
      },
      {
        itemId: "subhanallahi_wa_bihamdihi",
        type: "dhikr",
        target: 100,
        count: 0,
        useGlobalCount: true,
      },
      {
        itemId: "astaghfirullah",
        type: "dhikr",
        target: 100,
        count: 0,
        useGlobalCount: true,
      },
    ],
  },
  {
    id: "before_sleep",
    title: "Before Sleep",
    description: "Sunnah adhkar before sleeping",
    order: 5,
    items: [
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
    ],
  },
  {
    id: "protection_ruqyah",
    title: "Protection (Ruqyah)",
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
    title: "Istighfar (Forgiveness)",
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
        itemId: "rabbighfirli",
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
    title: "Distress Relief",
    description: "Adhkar for times of difficulty",
    order: 8,
    items: [
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
    title: "Friday Special",
    description: "Recommended acts for Friday",
    order: 9,
    items: [
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
];
