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
    order: 1,
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

  // --- HISNUL MUSLIM ADDITIONS ---
  {
    id: "hisnul_muslim_75",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Jutarnji i večernji zikr",
    },
    arabic:
      "أَعُوذُ بِاللَّهِ مِنَ الشَّيطَانِ الرَّجِيمِ ﴿اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَوَاتِ وَالْأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾.",
    transliteration: "Recite Ayat-Al-Kursiy (Al-Baqarah :255)",
    translation: {
      en: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
      bs: "Allah je - nema boga osim Njega - Živi i Vječni! Ne obuzima Ga ni drijemež ni san! Njegovo je ono što je na nebesima i ono što je na Zemlji! Ko se može pred Njim zauzimati za nekoga bez dopuštenja Njegova?! On zna šta je bilo i prije njih i šta će biti poslije njih, a od onoga što On zna - drugi znaju samo onoliko koliko On želi. Moć Njegova obuhvata i nebesa i Zemlju i Njemu ne dojadi održavanje njihovo; On je Svevišnji, Veličanstveni!",
    },
  },
  {
    id: "hisnul_muslim_76",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Jutarnji i večernji zikr",
    },
    arabic:
      "بسم الله الرحمن الرحيم ﴿قُلْ هُوَ اللَّهُ أَحَدٌ* اللَّهُ الصَّمَدُ* لَمْ يَلِدْ وَلَمْ يُولَدْ* وَلَمْ يَكُن لَّهُ كُفُواً أَحَدٌ﴾. بسم الله الرحمن الرحيم ﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ* مِن شَرِّ مَا خَلَقَ* وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ* وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ* وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾. بسم الله الرحمن الرحيم ﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ* مَلِكِ النَّاسِ* إِلَهِ النَّاسِ* مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ* الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ* مِنَ الْجِنَّةِ وَ النَّاسِ﴾",
    transliteration:
      "Then recite [Soorah al-Ikhlaas (112)], [Soorah al-Falaq (113)] and [Soorah an-Naas (114)]",
    translation: {
      en: "[Soorah al-Ikhlaas 112] 1  Say, He is Allah, [who is] One, 2  Allah, the Eternal Refuge. 3  He neither begets nor is born, 4  Nor is there to Him any equivalent.[Soorah al-Falaq 113]  1  Say, I seek refuge in the Lord of daybreak 2  From the evil of that which He created 3  And from the evil of darkness when it settles 4  And from the evil of the blowers in knots 5  And from the evil of an envier when he envies. [Soorah an-Naas 114] 1  Say, I seek refuge in the Lord of mankind, 2  The Sovereign of mankind. 3  The God of mankind, 4  From the evil of the retreating whisperer - 5  Who whispers [evil] into the breasts of mankind - 6  From among the jinn and mankind.",
      bs: "[Sura Ihlas 112] 1  Reci: 'On je Allah - Jedan!  2  Allah je Utočište svakom!  3  Nije rodio i rođen nije,  4  i niko Mu ravan nije!' [Sura Felek 113]  1  Reci: 'Utječem se Gospodaru svitanja  2  od zla onoga što On stvara,  3  i od zla mrkle noći kada razastre tmine,  4  i od zla smutljivca kad smutnje sije,  5  i od zla zavidljivca kad zavist ne krije!' [Sura Nas 114]  1  Reci: 'Tražim zaštitu Gospodara ljudi,  2  Vladara ljudi,  3  Boga ljudi,  4  od zla šejtana-napasnika,  5  koji zle misli unosi u srca ljudi -  6  od džina i od ljudi!'",
    },
  },
  {
    id: "hisnul_muslim_77",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Jutarnji i večernji zikr",
    },
    arabic:
      "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيرَ مَا بَعْدَهُ ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ. [ وإذا أمسى قال: أمسينا وأمسى الملك للَّه] [وإذا أمسى قال: رب أسألك خير ما في هذه الليلة، وخير ما بعدها، وأعوذ بك من شر ما في هذه الليلة، وشر ما بعدها.]",
    transliteration:
      "Asbahna wa-asbahal-mulku lillah walhamdu lillah la ilaha illal-lah, wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa AAala kulli shayin qadeer, rabbi as-aluka khayra ma fee hathihil-laylah, wakhayra ma baAAdaha, wa-aAAoothu bika min sharri hathihil-laylah, washarri ma baAAdaha, rabbi aAAoothu bika minal-kasal, wasoo-il kibar, rabbi aAAoothu bika min AAathabin fin-nar, waAAathabin fil-qabr.‘We have reached the morning and at this very time unto Allah belongs all sovereignty, and all praise is for Allah. None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise and He is over all things omnipotent. My Lord, I ask You for the good of this night and the good of what follows it and I take refuge in You from the evil of this night and the evil of what follows it. My Lord, I take refuge in You from laziness and senility. My Lord, I take refuge in You from torment in the Fire and punishment in the grave.’…likewise, one says in the morning:Amsayna wa-amsal-mulku lillah….‘We have reached the evening and at this very time unto Allah belongs all sovereignty…’",
    translation: {
      en: "‘We have reached the morning and at this very time unto Allaah, belongs all sovereignty , and all praise is for Allaah. None has the right to be worshipped except Allaah, alone, without any partner, to Him belong all sovereignty and praise and He is over all things omnipotent. My Lord, I ask You for the good of this day and the good of what follows it and I take refuge in You from the evil of this day and the evil of what follows it . My Lord, I take refuge in You from laziness and senility. My Lord, I take refuge in You from torment in the Fire and punishment in the grave.’",
      bs: "Jutro dočekasmo i jutro osvanu, a sva vlast pripada Allahu. Hvala Allahu i nema boga osim Allaha Jedinog, Koji druga nema. Njemu pripada sva vlast i svaka zahvala i On je Svemoćan. Gospodaru, molim Te za dobro ovog dana i dobro nakon njega, a utječem Ti se od zla ovog dana i zla nakon njega. Gospodaru, utječem Ti se od ljenosti i zla oholosti. Gospodaru, utječem Ti se od patnje u Vatri i patnje u kaburu.",
    },
  },
  {
    id: "hisnul_muslim_78",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Jutarnji i večernji zikr",
    },
    arabic:
      "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا ، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ. [وإذا أمسى قال: اللَّهم بك أمسينا، وبك أصبحنا، وبك نحيا، وبك نموت، وإليك المصير.]",
    transliteration:
      "Allahumma bika asbahna wabika amsayna, wabika nahya ,wabika namootu wa-ilaykan-nushoor.)[In the evening:] (Allahumma bika amsayna, wabika asbahna, wabika nahya wabika namootu wa-ilaykal-maseer.",
    translation: {
      en: "O Allah, by your leave we have reached the morning and by Your leave we have reached the evening, by Your leave we live and die and unto You is our resurrection.[In the evening:]O Allah, by Your leave we have reached the evening and by Your leave we have reached the morning, by Your leave we live and die and unto You is our return.",
      bs: "Allahu, Tvojom voljom dočekasmo jutro i Tvojom voljom dočekasmo večer, Tvojom voljom živimo, Tvojom voljom umiremo i Tebi ćemo biti proživljeni. Uvečer se kaže: Allahu, Tvojom voljom dočekasmo večer i Tvojom voljom dočekasmo jutro, Tvojom voljom živimo, Tvojom voljom umiremo i Tebi se vraćamo.",
    },
  },
  {
    id: "hisnul_muslim_79",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Jutarnji i večernji zikr",
    },
    arabic:
      "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنوبَ إِلاَّ أَنْتَ.",
    transliteration:
      "Allahumma anta rabbee la ilaha illa ant, khalaqtanee wa-ana AAabduk, wa-ana AAala AAahdika wawaAAdika mas-tataAAt, aAAoothu bika min sharri ma sanaAAt, aboo-o laka biniAAmatika AAalay, wa-aboo-o bithanbee, faghfir lee fa-innahu la yaghfiruth-thunooba illa ant.",
    translation: {
      en: "O Allah, You are my Lord, none has the right to be worshipped except You, You created me and I am Your servant and I abide to Your covenant and promise as best I can, I take refuge in You from the evil of which I have committed. I acknowledge Your favour upon me and I acknowledge my sin, so forgive me, for verily none can forgive sin except You.",
      bs: "Allahu, Ti si Gospodar moj, nema boga osim Tebe, stvorio si me i ja sam rob Tvoj, ja sam na tragu zavjeta Tebi i obećanja datog Tebi koliko mogu. Tebi se priklanjam pred zlom koje sam počinio, Tebi priznajem blagodati Tvoje prema meni i Tebi priznajem grijehe svoje, pa oprosti mi, jer niko osim Tebe grijehe ne oprašta.",
    },
  },
  {
    id: "hisnul_muslim_80",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Words of remembrance for morning and evening",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتِكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ، وَأَنَّ مُحَمَّداً عَبْدُكَ وَرَسُولُكَ أربعَ مَرَّاتٍ.[ وإذا أمسى قال: اللَّهم إني أمسيت...]",
    transliteration:
      "Allahumma innee asbahtu oshhiduk, wa-oshhidu hamalata AAarshik, wamala-ikatak, wajameeAAa khalqik, annaka antal-lahu la ilaha illa ant, wahdaka la shareeka lak, wa-anna Muhammadan AAabduka warasooluk .) (four times in the morning & evening)(Note: for the evening, one reads (amsaytu) instead of (asbahtu).",
    translation: {
      en: "O Allah, verily I have reached the morning and call on You, the bearers of Your throne, Your angles, and all of Your creation to witness that You are Allah, none has the right to be worshipped except You, alone, without partner and that Muhammad is Your Servant and Messenger. four times in the morning & eveningNote: for the evening, one reads amsaytu instead of asbahtu.",
      bs: "Allahu moj, s Tobom sam osvanuo, i pozivam Tebe za svjedoka, i nosioce Tvoga Arša, i Tvoje meleke, i sva Tvoja stvorenja, da si Ti Allah, nema boga osim Tebe, Jedinog, koji nema sudruga, i da je Muhammed Tvoj rob i Tvoj poslanik. četiri puta ujutro i navečer Napomena: navečer se uči 's Tobom sam omrknuo'...",
    },
  },
  {
    id: "hisnul_muslim_81",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Words of remembrance for morning and evening",
    },
    arabic:
      "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ. [وإذا أمسى قال: اللَّهم ما أمسى بي...]",
    transliteration:
      "Allahumma ma asbaha bee min niAAmatin, aw bi-ahadin min khalqik, faminka wahdaka la shareeka lak, falakal-hamdu walakash-shukr.)(Note: for the evening, one reads (amsa) instead of (asbaha).",
    translation: {
      en: "O Allah, what blessing I or any of Your creation have risen upon, is from You alone, without partner, so for You is all praise and unto You all thanks.…whoever says this in the morning has indeed offered his day’s thanks and whoever says this in the evening has indeed offered his night’s thanks.Note: for the evening, one reads amsa instead of asbaha.",
      bs: "Allahu moj, svaka blagodat koja je osvanula kod mene ili kod nekog od Tvojih stvorenja, samo je od Tebe, Ti nemaš sudruga, Tebi pripada hvala i Tebi pripada zahvalnost. Ko ovo prouči ujutro, zahvalio se za taj dan...",
    },
  },
  {
    id: "hisnul_muslim_82",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Words of remembrance for morning and evening",
    },
    arabic:
      "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ القَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ ثلاثَ مرَّاتٍ.",
    transliteration:
      "Allahumma AAafinee fee badanee, allahumma AAafinee fee samAAee, allahumma AAafinee fee basaree, la ilaha illa ant.(three times).)(Allahumma innee aAAoothu bika minal-kufr, walfaqr, wa-aAAoothu bika min AAathabil-qabr, la ilaha illa ant (three times).",
    translation: {
      en: "O Allah, grant my body health, O Allah, grant my hearing health, O Allah, grant my sight health. None has the right to be worshipped except You.three times O Allah, I take refuge with You from disbelief and poverty, and I take refuge with You from the punishment of the grave. None has the right to be worshipped except You. three times",
      bs: "Allahu moj, podari zdravlje mom tijelu, Allahu moj, podari zdravlje mom sluhu, Allahu moj, podari zdravlje mom vidu, nema boga osim Tebe. Allahu moj, utječem Ti se od nevjerstva i siromaštva, i utječem Ti se od kaburske kazne, nema boga osim Tebe. tri puta",
    },
  },
  {
    id: "hisnul_muslim_83",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Words of remembrance for morning and evening",
    },
    arabic:
      "حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيهِ تَوَكَّلتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ سَبْعَ مَرّاتٍ.",
    transliteration:
      "Hasbiyal-lahu la ilaha illa huwa, AAalayhi tawakkalt, wahuwa rabbul-AAarshil-AAatheem (Recite seven times in Arabic.",
    translation: {
      en: "Allah is Sufficient for me, none has the right to be worshipped except Him, upon Him I rely and He is Lord of the exalted throne.’ Recite seven times in Arabic.",
      bs: "Dovoljan mi je Allah, nema boga osim Njega, na Njega se oslanjam i On je Gospodar Arša veličanstvenog. sedam puta",
    },
  },
  {
    id: "hisnul_muslim_84",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Jutarnji i večernji zikr",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ: فِي دِينِي وَدُنْيَايَ وَأَهْلِي، وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَينِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.",
    transliteration:
      "Allahumma innee as-alukal-AAafwa walAAafiyah, fid-dunya wal-akhirah, allahumma innee as-alukal-AAafwa walAAafiyah fee deenee, wadunyaya wa-ahlee, wamalee, allahummas-tur AAawratee, wa-amin rawAAatee, allahummah-fathnee min bayni yaday, wamin khalfee, waAAan yameenee, waAAan shimalee, wamin fawqee, wa-aAAoothu biAAathamatika an oghtala min tahtee.",
    translation: {
      en: "O Allah, I ask You for pardon and well-being in this life and the next. O Allah, I ask You for pardon and well-being in my religious and worldly affairs, and my family and my wealth. O Allah, veil my weaknesses and set at ease my dismay. O Allah, preserve me from the front and from behind and on my right and on my left and from above, and I take refuge with You lest I be swallowed up by the earth.",
      bs: "O Allahu, molim Te za oprost i zdravlje na dunjaluku i na ahiretu. O Allahu, molim Te za oprost i zdravlje u mojoj vjeri i mom dunjaluku, mojoj porodici i mom imetku. O Allahu, pokrij moje sramote i umiri moje strahove. O Allahu, sačuvaj me s moje prednje strane, i sa moje zadnje strane, i sa moje desne strane, i sa moje lijeve strane, i odozgo, i utječem se Tvojom veličinom da ne budem mučki ubijen odozdo.",
    },
  },
  {
    id: "hisnul_muslim_85",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Jutarnji i večernji zikr",
    },
    arabic:
      "اللَّهُمَّ عَالِمَ الغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطانِ وَشَرَكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.",
    transliteration:
      "Allahumma AAalimal-ghaybi washshahadah, fatiras-samawati wal-ard, rabba kulli shayin wamaleekah, ashhadu an la ilaha illa ant, aAAoothu bika min sharri nafsee wamin sharrish-shaytani washirkih, waan aqtarifa AAala nafsee soo-an aw ajurrahu ila muslim.",
    translation: {
      en: "O Allah, Knower of the unseen and the seen, Creator of the heavens and the Earth, Lord and Sovereign of all things, I bear witness that none has the right to be worshipped except You. I take refuge in You from the evil of my soul and from the evil and shirk of the devil, and from committing wrong against my soul or bringing such upon another Muslim.shirk: to associate others with Allah in those things which are specific to Him. This can occur in 1 belief, e.g. to believe that other than Allah has the power to benefit or harm, 2 speech, e.g. to swear by other than Allah and 3 action, e.g. to bow or prostrate to other than Allah.",
      bs: "O Allahu, Poznavaoče nevidljivog i vidljivog, Stvoritelju nebesa i Zemlje, Gospodaru svega i njegov Vladaru, svjedočim da nema boga osim Tebe, utječem Ti se od zla moje duše, i od zla šejtana i njegovog širka, i da počinim zlo svojoj duši ili da ga pripišem nekom muslimanu.",
    },
  },
  {
    id: "hisnul_muslim_86",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Jutarnji i večernji zikr",
    },
    arabic:
      "بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلاَ فِي السّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ ثلاثَ مرَّاتٍ.",
    transliteration:
      "Bismil-lahil-lathee la yadurru maAAas-mihi shay-on fil-ardi wala fis-sama-i wahuwas-sameeAAul-AAaleem. (three times).",
    translation: {
      en: "In the name of Allah with whose name nothing is harmed on earth nor in the heavens and He is The All-Seeing, The All-Knowing.’three times",
      bs: "U ime Allaha, s čijim imenom ništa ne može naškoditi na Zemlji niti na nebu, i On sve čuje i sve zna.",
    },
  },
  {
    id: "hisnul_muslim_87",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Jutarnji i večernji zikr",
    },
    arabic:
      "رَضِيتُ بِاللَّهِ رَبَّاً، وَبِالْإِسْلاَمِ دِيناً، وَبِمُحَمَّدٍ صلى الله عليه وسلم نَبِيّاً ثلاثَ مرَّاتٍ.",
    transliteration:
      "Radeetu billahi rabban wabil-islami deenan wabiMuhammadin nabiyya. (three times)",
    translation: {
      en: "I am pleased with Allah as a Lord, and Islam as a religion and Muhammad as a Prophet.’three times",
      bs: "O Allahu, s Tobom smo osvanuli i s Tobom smo omrkli, s Tobom živimo i s Tobom umiremo, i Tebi se vraćamo.",
    },
  },
  {
    id: "hisnul_muslim_88",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Jutarnji i večernji zikr",
    },
    arabic:
      "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغيثُ أَصْلِحْ لِي شَأْنِيَ كُلَّهُ وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.",
    transliteration:
      "Ya hayyu ya qayyoom, birahmatika astagheeth, aslih lee sha/nee kullah, wala takilnee ila nafsee tarfata AAayn.",
    translation: {
      en: "O Ever Living, O Self-Subsisting and Supporter of all, by Your mercy I seek assistance, rectify for me all of my affairs and do not leave me to myself, even for the blink of an eye.",
      bs: "Mi smo osvanuli i vlast je osvanula Allahova, i hvala Allahu, nema boga osim Allaha, Jednog, koji nema sudruga, Njemu pripada vlast i Njemu pripada hvala i On sve može. Gospodaru moj, molim Te za dobro ovoga dana i dobro poslije njega, a utječem Ti se od zla ovoga dana i zla poslije njega. Gospodaru moj, utječem Ti se od lijenosti i loše starosti. Gospodaru moj, utječem Ti se od kazne u Vatri i kazne u kaburu.",
    },
  },
  {
    id: "hisnul_muslim_89",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Jutarnji i večernji zikr",
    },
    arabic:
      "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُـمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ:فَتْحَهُ، وَنَصْرَهُ، وَنورَهُ، وَبَرَكَتَهُ، وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ. [وإذا أمسى قال: أمسينا وأمسى الملك للَّه ربّ العالمين اللَّهم إني أسألك خير هذه الليلة: فتحها، ونصرها، ونورها، وبركتها، وهداها، وأعوذ بك من شر ما فيها، وشر ما بعدها.]",
    transliteration:
      "Asbahna wa-asbahal-mulku lillahi rabbil-AAalameen, allahumma innee as-aluka khayra hathal-yawm, fat-hahu, wanasrahu, wanoorahu, wabarakatahu, wahudahu, wa-aAAoothu bika min sharri ma feehi, washarri ma baAAdah.)[For the evening, the supplication is read as follows: ](Amsayna wa-amsal-mulku lillahi rabbil-AAalameen, allahumma innee as-aluka khayra hathihil-laylah, fat-haha, wanasraha, wanooraha, wabarakataha, wahudaha, wa-aAAoothu bika min sharri ma feeha washarri ma baAAdaha.",
    translation: {
      en: "We have reached the morning and at this very time all sovereignty belongs to Allah, Lord of the worlds. O Allah, I ask You for the good of this day, its triumphs and its victories, its light and its blessings and its guidance, and I take refuge in You from the evil of this day and the evil that follows it.[For the evening, the supplication is read as follows:]We have reached the evening and at this very time all sovereignty belongs to Allah, Lord of the worlds. O Allah, I ask You for the good of tonight, its triumphs and its victories, its light and its blessings and its guidance, and I take refuge in You from the evil of tonight and the evil that follows it.",
      bs: "O Allahu, Ti si moj Gospodar, nema boga osim Tebe, stvorio si me i ja sam Tvoj rob, i ja sam na Tvom zavjetu i obećanju koliko mogu. Utječem Ti se od zla onoga što sam uradio, priznajem Ti Tvoju blagodat prema meni i priznajem svoj grijeh, pa mi oprosti, jer grijehe ne oprašta niko osim Tebe.",
    },
  },
  {
    id: "hisnul_muslim_90",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Jutarnji i večernji zikr",
    },
    arabic:
      "أَصْبَحْنا عَلَى فِطْرَةِ الْإِسْلاَمِ، وَعَلَى كَلِمَةِ الْإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صلى الله عليه وسلم، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ، حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ الْمُشرِكِينَ. [وإذا أمسى قال: أمسينا على فطرة الإسلام...]",
    transliteration:
      "Asbahna AAala fitratil-islam, waAAala kalimatil-ikhlas, waAAala deeni nabiyyina Muhammad waAAala millati abeena Ibraheem, haneefan musliman wama kana minal-mushrikeen.)(Note: for the evening, one reads amsayna instead of asbahna.",
    translation: {
      en: "We rise upon the fitrah of Islam, and the word of pure faith, and upon the religion of our Prophet Muhammad and the religion of our forefather Ibraheem, who was a Muslim and of true faith and was not of those who associate others with Allah.fitrah: the religion of Islam, the way of Ibraheem u.Note: for the evening, one reads amsayna instead of asbahna.",
      bs: "O Allahu, podari zdravlje mom tijelu, o Allahu, podari zdravlje mom sluhu, o Allahu, podari zdravlje mom vidu, nema boga osim Tebe. O Allahu, utječem Ti se od nevjerstva i siromaštva, i utječem Ti se od kaburske kazne, nema boga osim Tebe.",
    },
  },
  {
    id: "hisnul_muslim_91",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Jutarnji i večernji zikr",
    },
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ مائة مرَّةٍ.",
    transliteration: "Subhanal-lahi wabihamdih.)one hundred times",
    translation: {
      en: "How perfect Allah is and I praise Him.one hundred times",
      bs: "O Allahu, ja Te molim za oprost i zdravlje na dunjaluku i na ahiretu...",
    },
  },
  {
    id: "hisnul_muslim_92",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Jutarnji i večernji zikr",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ عشرَ مرَّات ، أَوْ مرَّةً واحدةً عندَ الكَسَلِ.",
    transliteration:
      "La ilaha illal-lah, wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa AAala kulli shay-in qadeer. [ten times or once if lazy]",
    translation: {
      en: "None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise, and He is over all things omnipotent. [ten times or once if lazy]",
      bs: "O Živi, o Vječni, za Tvoju milost molim, popravi svako moje stanje i ne prepusti me samom sebi ni jednog trena.",
    },
  },
  {
    id: "hisnul_muslim_93",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Jutarnji i večernji zikr",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ، وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ مائةَ مرَّةٍ إذا أصبحَ.",
    transliteration:
      "La ilaha illal-lah, wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa AAala kulli shay-in qadeer. (one hundred times every day)",
    translation: {
      en: "None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise, and He is over all things omnipotent.one hundred times every day",
      bs: "Radujem se da mi je Allah Gospodar, islam vjera i Muhammed, s.a.v.s., poslanik.",
    },
  },
  {
    id: "hisnul_muslim_94",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Jutarnji i večernji zikr",
    },
    arabic:
      "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ ثلاثَ مرَّاتٍ إذا أصبحَ.",
    transliteration:
      "Subhanal-lahi wabihamdih, AAadada khalqihi warida nafsih, wazinata AAarshih, wamidada kalimatih.)(three times",
    translation: {
      en: "How perfect Allah is and I praise Him by the number of His creation and His pleasure, and by the weight of His throne, and the ink of His words.three times",
      bs: "Slavljen neka je Allah i hvala Njemu. 100 puta",
    },
  },
  {
    id: "hisnul_muslim_95",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Jutarnji i večernji zikr",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً، وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً إذا أصبحَ.",
    transliteration:
      "Allahumma innee as-aluka AAilman nafiAAan, warizqan tayyiban, waAAamalan mutaqabbalan.",
    translation: {
      en: "O Allah, I ask You for knowledge which is beneficial and sustenance which is good, and deeds which are acceptable.",
      bs: "Nema boga osim Allaha jednog jedinog, On nema sudruga, Njemu pripada vlast i Njemu pripada hvala, i On sve može. 10 puta ili 1 put",
    },
  },
  {
    id: "hisnul_muslim_96",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Jutarnji i večernji zikr",
    },
    arabic:
      "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ مِائَةَ مَرَّةٍ فِي الْيَوْمِ.",
    transliteration:
      "Astaghfirullaaha wa 'atoobu 'ilayhi[one hundred times a day]",
    translation: {
      en: "‘I seek Allaah’s forgiveness and I turn to Him in repentance.’ [one hundred times a day]",
      bs: "Nema boga osim Allaha jednog jedinog, On nema sudruga, Njemu pripada vlast i Njemu pripada hvala, i On sve može. 100 puta",
    },
  },
  {
    id: "hisnul_muslim_97",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Jutarnji i večernji zikr",
    },
    arabic:
      "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ ثلاثَ مرَّاتٍ إذا أمسى.",
    transliteration:
      "aAAoothu bikalimatil-lahit-tammati min sharri ma khalaq.) (three times in the evening",
    translation: {
      en: "I take refuge in Allah’s perfect words from the evil He has created.three times in the evening",
      bs: "Slavljen neka je Allah i hvala Njemu, onoliko koliko je Njegovih stvorenja, i koliko je On zadovoljan, i koliko je težak Njegov Arš, i koliko ima tinte Njegovih riječi.",
    },
  },
  {
    id: "hisnul_muslim_98",
    category: "hisnul_muslim",
    title: {
      en: "Words of remembrance for morning and evening",
      bs: "Jutarnji i večernji zikr",
    },
    arabic:
      "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبَيِّنَا مُحَمَّدٍ عشرَ مرَّاتٍ.",
    transliteration:
      "Allaahumma salli wa sallim 'alaa Nabiyyinaa Muhammadin[ten times]",
    translation: {
      en: "‘O Allaah, send prayers and peace upon our Prophet Muhammad.’ [ten times]",
      bs: "O Allahu, ja Te molim za korisno znanje, i dobru opskrbu, i primljeno djelo.",
    },
  },
  {
    id: "hisnul_muslim_99",
    category: "hisnul_muslim",
    title: {
      en: "What to say before sleeping",
      bs: "Jutarnji i večernji zikr",
    },
    arabic:
      "يَجْمَعُ كَفَّيْهِ ثُمَّ يَنْفُثُ فِيهِمَا فَيَقْرَأُ فِيهِمَا:بسم الله الرحمن الرحيم ﴿قُلْ هُوَ اللَّهُ أَحَدٌ * اللَّهُ الصَّمَدُ* لَمْ يَلِدْ وَلَمْ يُولَدْ* وَلَمْ يَكُن لَّهُ كُفُواً أَحَدٌ﴾. بسم الله الرحمن الرحيم ﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ* مِن شَرِّ مَا خَلَقَ* وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ* وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ* وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾. بسم الله الرحمن الرحيم ﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ* مَلِكِ النَّاسِ* إِلَهِ النَّاسِ* مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ* الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ* مِنَ الْجِنَّةِ وَ النَّاسِ﴾ ثُمَّ يَمْسَحُ بِهِمَا مَا اسْتَطَاعَ مِنْ جَسَدِهِ يَبْدَأُ بِهِمَا عَلَى رَأْسِهِ وَوَجْهِهِ وَمَا أَقبَلَ مِنْ جَسَدِهِ يفعلُ ذلك ثلاثَ مرَّاتٍ.",
    transliteration: "",
    translation: {
      en: "When retiring to his bed every night, the Prophet would hold his palms together, spit A form of spitting comprising mainly of air with little spittle in them, recite the last three chapters Al-Ikhlas, Al-Falaq, An-Nas of the Quran and then wipe over his entire body as much as possible with his hands, beginning with his head and face and then all parts of the body, he would do this three times.",
      bs: "Tražim oprost od Allaha i kajem Mu se.",
    },
  },
  {
    id: "hisnul_muslim_100",
    category: "hisnul_muslim",
    title: { en: "What to say before sleeping", bs: "Dova prije spavanja" },
    arabic:
      "﴿اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْـــــــــــدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾.",
    transliteration: "Recite Ayat-Al-Kursiy (Al-Baqarah :255)",
    translation: {
      en: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
      bs: "Allah je - nema boga osim Njega - Živi i Vječni! Ne obuzima Ga ni drijemež ni san! Njegovo je ono što je na nebesima i ono što je na Zemlji! Ko se može pred Njim zauzimati za nekoga bez dopuštenja Njegova?! On zna šta je bilo i prije njih i šta će biti poslije njih, a od onoga što On zna - drugi znaju samo onoliko koliko On želi. Moć Njegova obuhvata i nebesa i Zemlju i Njemu ne dojadi održavanje njihovo; On je Svevišnji, Veličanstveni!",
    },
  },
  {
    id: "hisnul_muslim_101",
    category: "hisnul_muslim",
    title: { en: "What to say before sleeping", bs: "Dova prije spavanja" },
    arabic:
      "﴿آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ كُلٌّ آمَنَ بِاللَّهِ وَمَلآئِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لاَ نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ وَقَالُواْ سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ* لاَ يُكَلِّفُ اللَّهُ نَفْساً إِلاَّ وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لاَ تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلاَ تَحْمِلْ عَلَيْنَا إِصْراً كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا رَبَّنَا وَلاَ تُحَمِّلْنَا مَا لاَ طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَآ أَنتَ مَوْلاَنَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ﴾.",
    transliteration: "Recite last two verses of Soorah (Al-Baqarah :285-286)",
    translation: {
      en: " 285  The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah and His angels and His books and His messengers, [saying], We make no distinction between any of His messengers. And they say, We hear and we obey. [We seek] Your forgiveness, our Lord, and to You is the [final] destination. 286  Allah does not charge a soul except [with that within] its capacity. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people.",
      bs: "Poslanik vjeruje u ono što mu se objavljuje od Gospodara njegova, i vjernici - svaki vjeruje u Allaha, i meleke Njegove, i knjige Njegove, i poslanike Njegove: 'Mi ne izdvajamo nijednog od poslanika Njegovih.' I oni govore: 'Čujemo i pokoravamo se; oprosti nam, Gospodaru naš; tebi ćemo se vratiti.' Allah nikoga ne opterećuje preko mogućnosti njegovih: u njegovu korist je dobro koje učini, a na njegovu štetu zlo koje uradi. Gospodaru naš, ne kazni nas ako zaboravimo ili što nehotice učinimo! Gospodaru naš, ne tovari na nas breme kao što si ga tovario na one prije nas! Gospodaru naš, ne stavljaj nam u dužnost ono što ne možemo podnijeti, pobriši grijehe naše i oprosti nam, i smiluj se na nas. Ti si Gospodar naš pa nam pomozi protiv naroda koji ne vjeruje!",
    },
  },
  {
    id: "hisnul_muslim_102",
    category: "hisnul_muslim",
    title: { en: "What to say before sleeping", bs: "Dova prije spavanja" },
    arabic:
      "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِن أَمْسَكْتَ نَفْسِي فارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا، بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ.",
    transliteration:
      "Bismika rabbee wadaAAtu janbee wabika arfaAAuh, fa-in amsakta nafsee farhamha, wa-in arsaltaha fahfathha bima tahfathu bihi AAibadakas-saliheen.",
    translation: {
      en: "In Your name my Lord, I lie down and in Your name I rise, so if You should take my soul then have mercy upon it, and if You should return my soul then protect it in the manner You do so with Your righteous servants.",
      bs: "Kada neko od vas ustane iz postelje pa se ponovo vrati u nju, neka je otrese krajem svoje odjeće tri puta, jer on ne zna šta je poslije njega u nju ušlo. A kada legne, neka kaže: U Tvoje ime, Gospodaru moj, liježem na bok i u Tvoje ime ustajem. Ako mi uzmeš dušu, smiluj joj se, a ako je vratiš u život, čuvaj je onim čime čuvaš Svoje dobre robove.",
    },
  },
  {
    id: "hisnul_muslim_103",
    category: "hisnul_muslim",
    title: { en: "What to say before sleeping", bs: "Dova prije spavanja" },
    arabic:
      "اللَّهُمَّ إِنَّكَ خَلَقْتَ نَفْسِي وَأَنْتَ تَوَفَّاهَا، لَكَ مَمَاتُهَا وَمَحْياهَا، إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا، وَإِنْ أَمَتَّهَا فَاغْفِرْ لَهَا. اللَّهُمَّ إِنِّي أَسْأَلُكَ العَافِيَةَ.",
    transliteration:
      "Allahumma innaka khalaqta nafsee wa-anta tawaffaha, laka mamatuha wamahyaha in ahyaytaha fahfathha, wa-in amattaha faghfir laha. Allahumma innee as-alukal-AAafiyah.",
    translation: {
      en: "O Allah, verily You have created my soul and You shall take it’s life, to You belongs it’s life and death. If You should keep my soul alive then protect it, and if You should take it’s life then forgive it. O Allah, I ask You to grant me good health.",
      bs: "O Allahu, Ti si stvorio moju dušu i Ti je uzimaš, Tebi pripada njena smrt i njen život. Ako je oživiš, čuvaj je, a ako je usmrtiš, oprosti joj. O Allahu, ja Te molim za zdravlje.",
    },
  },
  {
    id: "hisnul_muslim_104",
    category: "hisnul_muslim",
    title: { en: "What to say before sleeping", bs: "Dova prije spavanja" },
    arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.",
    transliteration: "Allahumma qinee AAathabaka yawma tabAAathu AAibadak.",
    translation: {
      en: "O Allah, protect me from Your punishment on the day Your servants are resurrected.",
      bs: "O Allahu, sačuvaj me od Tvoje kazne na Dan kada proživiš Svoje robove. 3 puta",
    },
  },
  {
    id: "hisnul_muslim_105",
    category: "hisnul_muslim",
    title: { en: "What to say before sleeping", bs: "Dova prije spavanja" },
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.",
    transliteration: "Bismikal-lahumma amootu wa-ahya.",
    translation: {
      en: "In Your name O Allah, I live and die.",
      bs: "U Tvoje ime, o Allahu, umirem i živim.",
    },
  },
  {
    id: "hisnul_muslim_106",
    category: "hisnul_muslim",
    title: { en: "What to say before sleeping", bs: "Dova prije spavanja" },
    arabic:
      "سُبْحَانَ اللَّهِ ثلاثاً وثلاثين وَالْحَمْدُ لِلَّهِ ثلاثاً وثلاثين وَاللَّهُ أَكْبَرُ أربعاً وثلاثينَ.",
    transliteration:
      "Subhanal-lah. (thirty-three times) Alhamdu lillah. (thirty-three times) Allahu akbar. (thirty-four times)",
    translation: {
      en: "How Perfect Allah is. thirty-three times All praise is for Allah.thirty-three times Allah is the greatest.thirty-four times",
      bs: "Recite: Subhanallah 33 puta, Elhamdulillah 33 puta, Allahu ekber 34 puta.",
    },
  },
  {
    id: "hisnul_muslim_107",
    category: "hisnul_muslim",
    title: { en: "What to say before sleeping", bs: "Dova prije spavanja" },
    arabic:
      "اللَّهُمَّ رَبَّ السَّمَوَاتِ السَّبْعِ وَرَبَّ الأَرْضِ، وَرَبَّ الْعَرْشِ الْعَظِيمِ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ، فَالِقَ الْحَبِّ وَالنَّوَى، وَمُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيلِ، وَالْفُرْقَانِ، أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ. اللَّهُمَّ أَنْتَ الأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ، وَأَنْتَ الآخِرُ فَلَيسَ بَعْدَكَ شَيْءٌ، وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ، وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُونَكَ شَيْءٌ، اقْضِ عَنَّا الدَّيْنَ وَأَغْنِنَا مِنَ الْفَقْرِ.",
    transliteration:
      "Allahumma rabbas-samawatis-sabAA, warabbal-AAarshil-AAatheem, rabbana warabba kulli shay/, faliqal-habbi wannawa, wamunazzilat-tawra, wal-injeel, walfurqan, aAAoothu bika min sharri kulli shayin anta akhithun binasiyatih. Allahumma antal-awwal, falaysa qablaka shay/, wa-antal-akhir, falaysa baAAdaka shay/, wa-antath-thahir falaysa fawqaka shay/, waantal-batin, falaysa doonaka shay/, iqdi AAannad-dayna wa-aghnina minal-faqr.",
    translation: {
      en: "O Allah, Lord of the seven heavens and the exalted throne, our Lord and Lord of all things, Splitter of the seed and the date stone, Revealer of the Tawrah, the Injeel and the Furqan, I take refuge in You from the evil of all things You shall seize by the forelock i.e. You have total mastery over. O Allah, You are The First so there is nothing before You and You are The Last so there is nothing after You.You are Aththahir so there is nothing above You and You are Al-Batin so there is nothing closer than You.Settle our debt for us and spare us from poverty.Tawrah: The book revealed to Moosa u.Injeel: The book revealed to Easa u.Furqan: One of the many names of the Quran, means: The Criterion which distinguishes between truth and falsehood.Aththahir: Indicates the greatness of His attributes and the insignificance of every single creation in respect to His greatness and Highness, for He is above all of His creation as regards His essence and attributes.Al-Batin: Indicates His awareness and knowledge of all secrets, of that which is in the hearts and the most intimate of things just as it indicates His closeness and nearness to all in a manner which befits His majesty.",
      bs: "O Allahu, Gospodaru sedam nebesa i Gospodaru Prijestolja veličanstvenog, Gospodaru naš i Gospodaru svega, Ti koji daješ da zrnevlje i košpice proklijaju, Objavitelju Tevrata, Indžila i Kur'ana, utječem Ti se od zla svake stvari kojom Ti upravljaš. O Allahu, Ti si Prvi, i prije Tebe nije bilo ništa, i Ti si Posljednji, i poslije Tebe neće biti ništa, i Ti si Vidljivi, i iznad Tebe nema ništa, i Ti si Nevidljivi, i mimo Tebe nema ništa, ispuni za nas dug i zaštiti nas od siromaštva.",
    },
  },
  {
    id: "hisnul_muslim_108",
    category: "hisnul_muslim",
    title: { en: "What to say before sleeping", bs: "Dova prije spavanja" },
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا، وَكَفَانَا، وَآوَانَا، فَكَمْ مِمَّنْ لاَ كَافِيَ لَهُ وَلاَ مُؤْوِيَ.",
    transliteration:
      "Alhamdu lillahil-lathee atAAamana wasaqana, wakafana, wa-awana, fakam mimman la kafiya lahu wala mu'wee.",
    translation: {
      en: "All praise is for Allah, Who fed us and gave us drink, and Who is sufficient for us and has sheltered us, for how many have none to suffice them or shelter them.",
      bs: "Hvala Allahu koji nas je nahranio i napojio, i zaštitio nas i utočište nam dao, jer koliko ima onih koji nemaju zaštitnika niti utočišta.",
    },
  },
  {
    id: "hisnul_muslim_109",
    category: "hisnul_muslim",
    title: { en: "What to say before sleeping", bs: "Dova prije spavanja" },
    arabic:
      "اللَّهُمَّ عَالِمَ الغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.",
    transliteration:
      "Allahumma AAalimal-ghaybi washshahadah, fatiras-samawati wal-ard, rabba kulli shayin wamaleekah, ashhadu an la ilaha illa ant, aAAoothu bika min sharri nafsee wamin sharrish-shaytani washirkih, wa-an aqtarifa AAala nafsee soo-an aw ajurrahu ila muslim.",
    translation: {
      en: "O Allah, Knower of the seen and the unseen, Creator of the heavens and the earth, Lord and Sovereign of all things I bear witness that none has the right to be worshipped except You. I take refuge in You from the evil of my soul and from the evil and shirk of the devil, and from committing wrong against my soul or bringing such upon another Muslim.shirk: to associate others with Allah in those things which are specific to Him. This can occur in 1 belief, e.g. to believe that other than Allah has the power to benefit or harm, 2 speech, e.g. to swear by other than Allah and 3 action, e.g. to bow or prostrate to other than Allah.",
      bs: "O Allahu, Poznavaoče nevidljivog i vidljivog, Stvoritelju nebesa i Zemlje, Gospodaru svega i njegov Vladaru, svjedočim da nema boga osim Tebe, utječem Ti se od zla moje duše, i od zla šejtana i njegovog širka, i da počinim zlo svojoj duši ili da ga pripišem nekom muslimanu.",
    },
  },
  {
    id: "hisnul_muslim_110",
    category: "hisnul_muslim",
    title: { en: "What to say before sleeping", bs: "Dova prije spavanja" },
    arabic:
      "يَقْرَأُ ﴿الم﴾ تَنْزِيلَ السَّجْدَة ِ، وَتَبَارَكَ الَّذي بِيَدِهِ الْمُلْكُ.",
    transliteration: "",
    translation: {
      en: "The Prophet never used to sleep until he had recited Soorat As-Sajdah chapter 32 and Soorat Al-Mulk chapter 67.",
      bs: "Učiti sure 32 Es-Sedžda i 67 El-Mulk.",
    },
  },
  {
    id: "hisnul_muslim_111",
    category: "hisnul_muslim",
    title: { en: "What to say before sleeping", bs: "Dova prije spavanja" },
    arabic:
      "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لاَ مَلْجَأَ وَلاَ مَنْجَا مِنْكَ إِلاَّ إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ.",
    transliteration:
      "Allahumma aslamtu nafsee ilayk, wafawwadtu amree ilayk, wawajjahtu wajhee ilayk, wa-alja/tu thahree ilayk, raghbatan warahbatan ilayk, la maljaa wala manja minka illa ilayk, amantu bikitabikal-lathee anzalt, wabinabiyyikal-lathee arsalt.",
    translation: {
      en: "O Allah, I submit my soul unto You, and I entrust my affair unto You, and I turn my face towards You, and I totally rely on You, in hope and fear of You.Verily there is no refuge nor safe haven from You except with You. I believe in Your Book which You have revealed and in Your Prophet whom You have sent.If you then die, you will die upon the fitrah.fitrah: the religion of Islam, the way of Ibraheem u.",
      bs: "O Allahu, Tebi sam se predao, i Tebi svoje lice okrenuo, i Tebi svoj posao prepustio, i na Tebe se oslonio, iz želje i straha od Tebe. Nema skloništa niti spasa od Tebe osim kod Tebe. Vjerujem u Tvoju Knjigu koju si objavio i u Tvog Vjerovjesnika kojeg si poslao.",
    },
  },
  {
    id: "hisnul_muslim_1",
    category: "hisnul_muslim",
    title: {
      en: "supplications for when you wake up",
      bs: "Dove prilikom buđenja",
    },
    arabic:
      ".الْحَمْدُ للَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا، وَإِلَيْهِ النُّشُورُ",
    transliteration:
      "Alhamdu lillahil-lathee ahyana baAAda ma amatana wa-ilayhin-nushoor.",
    translation: {
      en: "All praise is for Allah who gave us life after having taken it from us and unto Him is the resurrection.",
      bs: "Hvala Allahu koji nas je oživio nakon što nas je usmrtio, i Njemu se vraćamo.",
    },
  },
  {
    id: "hisnul_muslim_2",
    category: "hisnul_muslim",
    title: {
      en: "supplications for when you wake up",
      bs: "Dove prilikom buđenja",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَريكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، سُبْحَانَ اللَّهِ، وَالْحَمْدُ للَّهِ، وَلاَ إِلَهَ إِلاَّ اللَّهُ، وَاللَّهُ أَكبَرُ، وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ الْعَلِيِّ الْعَظِيمِ، رَبِّ اغْفرْ لِي",
    transliteration:
      "La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa AAala kulli shay-in qadeer, subhanal-lah, walhamdu lillah, wala ilaha illal-lah wallahu akbar, wala hawla wala quwwata illa billahil-AAaliyyil AAatheem. Rabbigh-fir lee",
    translation: {
      en: "None has the right to be worshipped except Allah, alone without associate, to Him belongs sovereignty and praise and He is over all things wholly capable. How perfect Allah is, and all praise is for Allah, and none has the right to be worshipped except Allah, Allah is the greatest and there is no power nor might except with Allah, The Most High, The Supreme.O my Lord forgive me",
      bs: "Nema boga osim Allaha jednog jedinog, On nema sudruga, Njemu pripada vlast i hvala, On sve može. Slavljen neka je Allah, hvala Allahu, nema boga osim Allaha, Allah je najveći, nema snage ni moći osim u Allaha, Uzvišenog, Veličanstvenog. Gospodaru moj, oprosti mi.",
    },
  },
  {
    id: "hisnul_muslim_3",
    category: "hisnul_muslim",
    title: {
      en: "supplications for when you wake up",
      bs: "Dove prilikom buđenja",
    },
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي فِي جَسَدِي، وَرَدَّ عَلَيَّ رُوحِي، وَأَذِنَ لي بِذِكْرِهِ",
    transliteration:
      "Alhamdu lillahil-lathee AAafanee fee jasadee waradda AAalayya roohee wa-athina lee bithikrih.",
    translation: {
      en: "All praise is for Allah who restored to me my health and returned my soul and has allowed me to remember Him.",
      bs: "Hvala Allahu koji je ozdravio moje tijelo, vratio mi moju dušu i dozvolio mi da Ga se sjećam.",
    },
  },
  {
    id: "hisnul_muslim_4",
    category: "hisnul_muslim",
    title: {
      en: "supplications for when you wake up",
      bs: "Dove prilikom buđenja",
    },
    arabic:
      "﴿ إِنَّ فِي خَلْقِ السَّمَوَاتِ وَالأَرْضِ وَاخْتِلاَفِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لأُوْلِي الألْبَابِ * الَّذِينَ يَذْكُرُونَ اللَّهَ قِيَاماً وَقُعُوداً وَعَلَىَ جُنُوبِهِمْ وَيَتَفَكَّرُونَ فِي خَلْقِ السَّمَوَاتِ وَالأَرْضِ رَبَّنَا مَا خَلَقْتَ هَذا بَاطِلاً سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ* رَبَّنَا إِنَّكَ مَن تُدْخِلِ النَّارَ فَقَدْ أَخْزَيْتَهُ وَمَا لِلظَّالِمِينَ مِنْ أَنصَارٍ* رَّبَّنَا إِنَّنَا سَمِعْنَا مُنَادِياً يُنَادِي لِلإِيمَانِ أَنْ آمِنُواْ بِرَبِّكُمْ فَآمَنَّا رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الأبْرَارِ* رَبَّنَا وَآتِنَا مَا وَعَدتَّنَا عَلَى رُسُلِكَ وَلاَ تُخْزِنَا يَوْمَ الْقِيَامَةِ إِنَّكَ لاَ تُخْلِفُ الْمِيعَادَ* فَاسْتَجَابَ لَهُمْ رَبُّهُمْ أَنِّي لاَ أُضِيعُ عَمَلَ عَامِلٍ مِّنكُم مِّن ذَكَرٍ أَوْ أُنثَى بَعْضُكُم مِّن بَعْضٍ فَالَّذِينَ هَاجَرُواْ وَأُخْرِجُواْ مِن دِيَارِهِمْ وَأُوذُواْ فِي سَبِيلِي وَقَاتَلُواْ وَقُتِلُواْ لأُكَفِّرَنَّ عَنْهُمْ سَيِّئَاتِهِمْ وَلأُدْخِلَنَّهُمْ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الأَنْهَارُ ثَوَاباً مِّن عِندِ اللَّهِ وَاللَّهُ عِندَهُ حُسْنُ الثَّوَابِ * لاَ يَغُرَّنَّكَ تَقَلُّبُ الَّذِينَ كَفَرُواْ فِي الْبِلاَدِ * مَتَاعٌ قَلِيلٌ ثُمَّ مَأْوَاهُمْ جَهَنَّمُ وَبِئْسَ الْمِهَادُ * لَكِنِ الَّذِينَ اتَّقَوْاْ رَبَّهُمْ لَهُمْ جَنَّاتٌ تَجْرِي مِنْ تَحْتِهَا الأَنْهَارُ خَالِدِينَ فِيهَا نُزُلاً مِّنْ عِندِ اللَّهِ وَمَا عِندَ اللَّهِ خَيْرٌ لِّلأَبْرَارِ * وَإِنَّ مِنْ أَهْلِ الْكِتَابِ لَمَن يُؤْمِنُ بِاللَّهِ وَمَا أُنزِلَ إِلَيْكُمْ وَمَآ أُنزِلَ إِلَيْهِمْ خَاشِعِينَ لِلَّهِ لاَ يَشْتَرُونَ بِآيَاتِ اللَّهِ ثَمَناً قَلِيلاً أُوْلَئِكَ لَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ إِنَّ اللَّهَ سَرِيعُ الْحِسَابِ*يَا أَيُّهَا الَّذِينَ آمَنُواْ اصْبِرُواْ وَصَابِرُواْ وَرَابِطُواْ وَاتَّقُواْ اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ ﴾",
    transliteration: "From Verse 3:190 till the end of the chapter Al-Imran",
    translation: {
      en: " 190  Indeed, in the creation of the heavens and the earth and the alternation of the night and the day are signs for those of understanding. 191  Who remember Allah while standing or sitting or [lying] on their sides and give thought to the creation of the heavens and the earth, [saying], Our Lord, You did not create this aimlessly; exalted are You [above such a thing]; then protect us from the punishment of the Fire. 192  Our Lord, indeed whoever You admit to the Fire - You have disgraced him, and for the wrongdoers there are no helpers. 193  Our Lord, indeed we have heard a caller calling to faith, [saying], 'Believe in your Lord,' and we have believed. Our Lord, so forgive us our sins and remove from us our misdeeds and cause us to die with the righteous. 194  Our Lord, and grant us what You promised us through Your messengers and do not disgrace us on the Day of Resurrection. Indeed, You do not fail in [Your] promise. 195  And their Lord responded to them, Never will I allow to be lost the work of [any] worker among you, whether male or female; you are of one another. So those who emigrated or were evicted from their homes or were harmed in My cause or fought or were killed - I will surely remove from them their misdeeds, and I will surely admit them to gardens beneath which rivers flow as reward from Allah, and Allah has with Him the best reward. 196  Be not deceived by the [uninhibited] movement of the disbelievers throughout the land. 197  [It is but] a small enjoyment; then their [final] refuge is Hell, and wretched is the resting place. 198  But those who feared their Lord will have gardens beneath which rivers flow, abiding eternally therein, as accommodation from Allah. And that which is with Allah is best for the righteous. 199  And indeed, among the People of the Scripture are those who believe in Allah and what was revealed to you and what was revealed to them, [being] humbly submissive to Allah. They do not exchange the verses of Allah for a small price.Those will have their reward with their Lord. Indeed, Allah is swift in account. 200  O you who have believed, persevere and endure and remain stationed and fear Allah that you may be successful.",
      bs: "190  Zaista, u stvaranju nebesa i Zemlje i izmjeni noći i dana su znamenja za razumom obdarene,  191  one koji Allaha spominju stojeći, sjedeći i ležeći na bokovima svojim, i razmišljaju o stvaranju nebesa i Zemlje: 'Gospodaru naš, nisi Ti ovo uzalud stvorio; hvaljen Ti budi i sačuvaj nas patnje u Vatri!  192  Gospodaru naš, onoga koga Ti budeš u Vatru bacio, Ti si ga već ponizio, a nasilnicima neće niko pomoći.  193  Gospodaru naš, mi smo čuli glasnika koji poziva u vjeru: 'Vjerujte u Gospodara vašeg!' – pa smo povjerovali. Gospodaru naš, oprosti nam grijehe naše i pređi preko hrđavih postupaka naših, i učini da poslije smrti budemo s onima dobrima.  194  Gospodaru naš, podaj nam ono što si nam obećao po poslanicima Svojim i na Sudnjem danu nas ne osramoti! Ti ćeš, doista, svoja obećanja ispuniti!'  195  I Gospodar njihov im se odazva: 'Nijednom trudbeniku između vas trud njegov neću poništiti, ni muškarcu ni ženi – vi ste jedni od drugih. Onima koji su se iselili i koji su iz zavičaja svoga prognani i koji su na putu Mome mučeni i koji su se borili i poginuli, sigurno ću preko hrđavih djela njihovih preći i sigurno ću ih u džennetske bašče, kroz koje će rijeke teći, uvesti; divna će to nagrada od Allaha biti - a u Allaha je nagrada najljepša.'  196  Neka te nikako ne obmanjuje to što oni koji ne vjeruju po raznim zemljama putuju:  197  kratko uživanje, a poslije – Džehennem će boravište njihovo biti; a užasno je to odmorište!  198  A one koji se Gospodara svoga boje čekaju džennetske bašče kroz koje će rijeke teći, u kojima će vječno ostati – takav će biti doček od Allaha. A ono što je u Allaha bolje je za one koji su dobri.  199  Ima i sljedbenika Knjige koji vjeruju u Allaha i u ono što se objavljuje vama i u ono što je objavljeno njima, ponizni su prema Allahu, ne zamjenjuju Allahove riječi za nešto što malo vrijedi; oni će nagradu od Gospodara svoga dobiti. – Allah će zaista brzo račune svidjeti.  200  O vjernici, budite strpljivi i izdržljivi, na granicama bdijte i Allaha se bojte, da biste postigli ono što želite.",
    },
  },
  {
    id: "hisnul_muslim_10",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for entering the restroom",
      bs: "Dova prije ulaska u toalet",
    },
    arabic:
      "[بِسْمِ اللَّهِ] اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبائِث.",
    transliteration:
      "(Bismil-lah) allahumma innee aAAoothu bika minal-khubthi wal-khaba-ith.",
    translation: {
      en: "In the name of Allah. O Allah, I take refuge with you from all evil and evil-doers.",
      bs: "U ime Allaha. O Allahu, utječem Ti se od zla i zlih džina muških i ženskih.",
    },
  },
  {
    id: "hisnul_muslim_11",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for leaving the restroom",
      bs: "Dova pri izlasku iz toaleta",
    },
    arabic: "غُفْرَانَكَ.",
    transliteration: "Ghufranak.",
    translation: {
      en: "I ask You Allah for forgiveness.",
      bs: "Za tvoj oprost molim.",
    },
  },
  {
    id: "hisnul_muslim_12",
    category: "hisnul_muslim",
    title: {
      en: "What to say before performing ablution",
      bs: "Dova prije uzimanja abdesta",
    },
    arabic: "بِسْمِ اللَّهِ.",
    transliteration: "Bismil-lah.",
    translation: {
      en: "In the name of Allah.",
      bs: "U ime Allaha.",
    },
  },
  {
    id: "hisnul_muslim_13",
    category: "hisnul_muslim",
    title: {
      en: "What to say upon completing ablution",
      bs: "Dova nakon uzimanja abdesta",
    },
    arabic:
      "أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ...",
    transliteration:
      "Ashhadu an la ilaha illal-lahu wahdahu la shareeka lah, wa-ashhadu anna Muhammadan AAabduhu warasooluh.",
    translation: {
      en: "I bear witness that none has the right to be worshipped except Allah, alone without partner, and I bear witness that Muhammad is His slave and Messenger.",
      bs: "Svjedočim da nema boga osim Allaha, Jednog Jedinog, koji nema sudruga, i svjedočim da je Muhammed Njegov rob i Njegov poslanik.",
    },
  },
  {
    id: "hisnul_muslim_14",
    category: "hisnul_muslim",
    title: {
      en: "What to say upon completing ablution",
      bs: "Dova nakon uzimanja abdesta",
    },
    arabic:
      "اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
    transliteration:
      "Allahummaj-AAalnee minat-tawwabeena wajAAalnee minal-mutatahhireen.",
    translation: {
      en: "O Allah, make me of those who return to You often in repentance and make me of those who remain clean and pure.",
      bs: "O Allahu, učini me od onih koji se kaju i učini me od onih koji se čiste.",
    },
  },
  {
    id: "hisnul_muslim_15",
    category: "hisnul_muslim",
    title: {
      en: "What to say upon completing ablution",
      bs: "Dova nakon uzimanja abdesta",
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
      en: "What to say when leaving the home",
      bs: "Dova pri izlasku iz kuće",
    },
    arabic:
      "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَاَ حَوْلَ وَلَا قُوَّةَ إِلاَّ بِاللَّهِ.",
    transliteration:
      "Bismil-lah, tawakkaltu AAalal-lah, wala hawla wala quwwata illa billah.",
    translation: {
      en: "In the name of Allah, I place my trust in Allah, and there is no might nor power except with Allah.",
      bs: "U ime Allaha, oslanjam se na Allaha, nema snage ni moći osim u Allaha.",
    },
  },
  {
    id: "hisnul_muslim_17",
    category: "hisnul_muslim",
    title: {
      en: "What to say when leaving the home",
      bs: "Dova pri izlasku iz kuće",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أَضِلَّ، أَوْ أُضَلَّ، أَوْ أَزِلَّ، أَوْ أُزَلَّ، أَوْ أَظْلِمَ، أَوْ أُظْلَمَ، أَوْ أَجْهَلَ، أَوْ يُجْهَلَ عَلَيَّ.",
    transliteration:
      "Allahumma innee aAAoothu bika an adilla aw odal, aw azilla aw ozall, aw athlima aw othlam, aw ajhala aw yujhala AAalay.",
    translation: {
      en: "O Allah, I take refuge with You lest I should stray or be led astray, or slip or be tripped, or oppress or be oppressed, or behave foolishly or be treated foolishly.slip: i.e. to commit a sin unintentionally",
      bs: "O Allahu, utječem Ti se da ne zalutam ili ne budem zaveden, da ne posrnem ili ne budem naveden na grijeh, da ne činim nepravdu ili da meni ne bude učinjena, da ne postupim nerazumno ili da se prema meni ne postupi nerazumno.",
    },
  },
  {
    id: "hisnul_muslim_18",
    category: "hisnul_muslim",
    title: {
      en: "What to say when entering the home",
      bs: "Dova pri ulasku u kuću",
    },
    arabic:
      "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا، ثُمَّ لِيُسَلِّمْ عَلَى أَهْلِهِ.",
    transliteration:
      "Bismil-lahi walajna, wabismil-lahi kharajna, waAAala rabbina tawakkalna.",
    translation: {
      en: "In the name of Allah we enter and in the name of Allah we leave, and upon our Lord we place our trust.",
      bs: "U ime Allaha ulazimo i u ime Allaha izlazimo, i na našeg Gospodara se oslanjamo.",
    },
  },
  {
    id: "hisnul_muslim_19",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for going to the mosque",
      bs: "Dova na putu ka džamiji",
    },
    arabic:
      "اللّهُـمَّ اجْعَـلْ فِي قَلْبـي نُوراً ، وَفي لِسَـانِي نُوراً، وَفِي سَمْعِي نُوراً, وَفِي بَصَرِيِ نُوراً, وَمِنْ فََوْقِي نُوراً , وَ مِنْ تَحْتِي نُوراً, وَ عَنْ يَمِينيِ نُوراَ, وعَنْ شِمَالِي نُوراً, وَمْن أَماَمِي نُوراً, وَمِنْ خَلْفيِ نُوراَ, واجْعَلْ فِي نَفْسِي نُوراً, وأَعْظِمْ لِي نُوراً, وَعظِّمْ لِي نُوراً, وَاجْعَلْ لِي نُوراً, واجْعَلنِي نُوراً, أللَّهُمَّ أَعْطِنِي نُوراً, واجْعَلْ فِي عَصَبِي نُوراً, وَفِي لَحْمِي نُوراً, وَفِي دَمِي نُوراً وَفِي شَعْرِي نُوراً, وفِي بَشَرِي نُوراً أَللَّهُمَّ اجِعَلْ لِي نُوراً فِي قّبْرِي وَ نُوراَ فِي عِظاَمِي وَزِدْنِي نُوراً, وَزِدْنِي نُوراَ , وَزِدْنِي نُوراً وَهَبْ لِي نُوراً عَلَى نُوراً ",
    transliteration:
      "Allaahummaj 'al fee qalbee nooran, wa fee lisaanee nooran, wa fee sam'ee nooran, wa fee basaree nooran, wa min fawqee nooran, wa min tahtee nooran, wa 'an yameenee nooran, wa 'an shimaalee nooran, wa min 'amaamee nooran, wa min khalfee nooran. Wa j'al fee nafsee nooran, wa 'a'dhim lee nooran, wa 'a'dhim lee nooran. Waj'al lee nooran, waj'alnee nooran. Allaahumma a'tineje nooran, waj'al fee 'asabee nooran, wa fee lahmee nooran, wa fee damee nooran, wa fee sha'ree nooran, wa fee basharee nooran.[Allaahummaj'al lee nooran fee qabree, wa nooran fee 'idhaamee.][Wa zidnee nooran, wa zidnee nooran, wa zidnee nooran.][Wa hab lee nooran 'alaa noor.]",
    translation: {
      en: "‘O Allaah, place within my heart light; and upon my tongue light; and within my ears light; and within my eyes light; and place above me light; and beneath me light; and on my right light; and on my left light; and in front of me light; and behind me light; and place light within my soul; and augment light for me; and greaten light for me; and grant me light and make me light. O Allaah, bestow upon me light; and place light in my tendons; and light in my flesh; and light in my blood; and in light in my hair and light in my skin.’ [O Allaah, place light for me in my grave and light in my bones]. [And increase me with light and increase me with light and increase me with light]. [And grant me light upon light.]’",
      bs: "O Allahu, podari mi svjetlo u srce, svjetlo na jezik, svjetlo u uši, svjetlo u oči, svjetlo iznad mene, svjetlo ispod mene, svjetlo s desne strane, svjetlo s lijeve strane, svjetlo ispred mene, svjetlo iza mene. Učini u mojoj duši svjetlo, povećaj mi svjetlo, veličaj mi svjetlo, podari mi svjetlo i učini me svjetlom. O Allahu, daj mi svjetlo, i stavi svjetlo u moje živce, i u moje meso svjetlo, i u moju krv svjetlo, i u moju kosu svjetlo, i u moju kožu svjetlo. [O Allahu, stavi mi svjetlo u moj kabur i svjetlo u moje kosti]. [I povećaj mi svjetlo, i povećaj mi svjetlo, i povećaj mi svjetlo]. [I podari mi svjetlo nad svjetlom].",
    },
  },
  {
    id: "hisnul_muslim_20",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for entering the mosque",
      bs: "Dova pri ulasku u džamiju",
    },
    arabic:
      "يَبْدَأُ بِرِجْلِهِ الْيُمْنَى ، وَيَقُولُ: أَعُوذُ بِاللَّهِ العَظِيمِ، وَبِوَجْهِهِ الْكَرِيمِ، وَسُلْطَانِهِ الْقَدِيمِ، مِنَ الشَّيْطَانِ الرَّجِيمِ [بِسْمِ اللَّهِ، وَالصَّلَاةُ] [وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ] اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ.",
    transliteration:
      "aAAoothu billahil-AAatheem wabiwajhihil-kareem wasultanihil-qadeem minash-shaytanir-rajeem, [bismil-lah, wassalatu] [wassalamu AAala rasoolil-lah] , allahumma iftah lee abwaba rahmatik.",
    translation: {
      en: "I take refuge with Allah, The Supreme and with His Noble Face, and His eternal authority from the accursed devil. In the name of Allah, and prayers and peace be upon the Messenger of Allah. O Allah, open the gates of Your mercy for me.",
      bs: "Utječem se Allahu Veličanstvenom, Njegovom Plemenitom Licu i Njegovoj vječnoj vlasti od prokletog šejtana. [U ime Allaha, i salavat] [i selam na Allahovog Poslanika] O Allahu, otvori mi vrata Svoje milosti.",
    },
  },
  {
    id: "hisnul_muslim_21",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for leaving the mosque",
      bs: "Dova pri izlasku iz džamije",
    },
    arabic:
      "يَبْدَأُ بِرِجْلِهِ الْيُسْرَى وَيَقُولُ: بِسْمِ اللَّهِ وَالصّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِك، اللَّهُمَّ اعْصِمْنِي مِنَ الشَّيْطَانِ الرَّجِيمِ.",
    transliteration:
      "Bismil-lah wassalatu wassalamu AAala rasoolil-lah, allahumma innee as-aluka min fadlik, allahumma iAAsimnee minash-shaytanir-rajeem.",
    translation: {
      en: "In the name of Allah, and prayers and peace be upon the Messenger of Allah. O Allah, I ask You from Your favour. O Allah, guard me from the accursed devil.",
      bs: "U ime Allaha, i salavat i selam na Allahovog Poslanika. O Allahu, molim Te za Tvoju dobrotu. O Allahu, sačuvaj me od prokletog šejtana.",
    },
  },
  {
    id: "hisnul_muslim_22",
    category: "hisnul_muslim",
    title: {
      en: "What to say upon hearing the Athan (call to prayer)",
      bs: "Zikr poslije ezana",
    },
    arabic:
      "يَقُولُ مِثْلَ مَا يَقُولُ المُؤَذِّنُ إِلاَّ فِي حَيَّ عَلَى الصَّلَاةِ وَحَيَّ عَلَى الْفَلَاحِ فَيقُولُ: لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ.",
    transliteration: "",
    translation: {
      en: "‘One repeats just as the mu-aththin one who calls to prayer says, except when he says: Hayya AAalas-salah or hayya AAalal-falah ‘come to prayer, come to success’ instead, one should say: La hawla wala quwwata illa billah. ‘There is no might nor power except with Allah.’",
      bs: "Onaj ko čuje ezan ponavlja isto što i mujezin, osim kod riječi: 'Hajje 'alas-salah' Dođi na namaz i 'Hajje 'alal-felah' Dođi na spas, tada treba reći: 'La havle ve la kuvvete illa billah' Nema snage ni moći osim kod Allaha.",
    },
  },
  {
    id: "hisnul_muslim_23",
    category: "hisnul_muslim",
    title: {
      en: "What to say upon hearing the Athan (call to prayer)",
      bs: "Zikr poslije ezana",
    },
    arabic:
      "يَقُولُ: وَأَنَا أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ، رَضِيتُ بِاللَّهِ رَبَّاً، وَبِمُحَمَّدٍ رَسُولاً، وَبِالْإِسْلاَمِ دِينَاً يَقُولُ ذَلِكَ عَقِبَ تَشَهُّدِ الْمُؤَذِّنِ.",
    transliteration:
      "Immediately following the declaration of faith called by the mu-aththin, one says:Wa-ana ashhadu an la ilaha illal-lahu wahdahu la shareeka lah, wa-anna Muhammadan AAabduhu warasooluh, radeetu billahi rabban wabimuhammadin rasoolan wabil-islami deena.",
    translation: {
      en: "Immediately following the declaration of faith called by the mu-aththin, one says:‘And I too bear witness that none has the right to be worshipped except Allah, alone, without partner, and that Muhammad is His salve and Messenger. I am pleased with Allah as a Lord, and Muhammad as a Messenger and Islam as a religion.’",
      bs: "Odmah nakon što mujezin prouči šehadet riječi svjedočenja, reći: 'Ve ene ešhedu en la ilahe illallahu vahdehu la šerike lehu, ve enne Muhammeden 'abduhu ve resuluhu, reditu billahi rabben, ve bi Muhammedin resulen ve bil-islami dinen.' I ja svjedočim da nema boga osim Allaha, Jednog, koji nema sudruga, i da je Muhammed Njegov rob i Poslanik. Zadovoljan sam da mi je Allah Gospodar, Muhammed poslanik i islam vjera.",
    },
  },
  {
    id: "hisnul_muslim_24",
    category: "hisnul_muslim",
    title: {
      en: "What to say upon hearing the Athan (call to prayer)",
      bs: "Zikr poslije ezana",
    },
    arabic:
      "يُصَلِّي عَلَى النَّبِيِّ صلى الله عليه وسلم بَعْدَ فَرَاغِهِ مِنْ إِجَابَةِ الْمُؤَذِّنِ.",
    transliteration: "",
    translation: {
      en: "‘One should then send prayers on the Prophet sal-Allaahu 'alayhe wa sallam after answering the call of the mu.adhdhin’.",
      bs: "Donijeti salavat na Poslanika, sallallahu alejhi ve sellem, nakon završetka odgovaranja mujezinu.",
    },
  },
  {
    id: "hisnul_muslim_25",
    category: "hisnul_muslim",
    title: {
      en: "What to say upon hearing the Athan (call to prayer)",
      bs: "Zikr poslije ezana",
    },
    arabic:
      "يَقُولُ: اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلاَةِ الْقَائِمَةِ، آتِ مُحَمَّداً الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَامَاً مَحمُوداً الَّذِي وَعَدْتَهُ، [إِنَّكَ لَا تُخْلِفُ الْمِيعَادَ].",
    transliteration:
      "Allahumma rabba hathihid-daAAwatit-tammah, wassalatil-qa-imah ati Muhammadan alwaseelata wal-fadeelah, wabAAath-hu maqaman mahmoodan allathee waAAadtah, innaka la tukhliful-meeAAad.",
    translation: {
      en: "‘O Allah, Owner of this perfect call and Owner of this prayer to be performed, bestow upon Muhammad al-waseelah and al-fadeelah and send him upon a praised platform which You have promised him. Verily, You never fail in Your promise.’al-waseelah: A station in paradise.al-fadeelah: A rank above the rest of creation.praised platform: One in which all of creation will praise him on, in order to bring about the account quickly and be relieved from the lengthy standing or the role of intercession.",
      bs: "O Allahu, Gospodaru ovog savršenog poziva i namaza koji se uspostavlja, podari Muhammedu Vesilu i Fadilu, i proživi ga na hvaljenom mjestu koje si mu obećao, [Ti, doista, ne kršiš obećanje]. Vesila: mjesto u Džennetu. Fadila: stepen iznad ostalih stvorenja.",
    },
  },
  {
    id: "hisnul_muslim_26",
    category: "hisnul_muslim",
    title: {
      en: "What to say upon hearing the Athan (call to prayer)",
      bs: "Zikr poslije ezana",
    },
    arabic:
      "يَدْعُو لِنَفسِهِ بَيْنَ الْأَذَانِ وَالْإِقَامَةِ فَإِنَّ الدُّعَاءَ حِينَئِذٍ لاَ يُرَدُّ.",
    transliteration: "",
    translation: {
      en: "One should also supplicate for himself during the time between the athan and the iqamah as supplication at such time is not rejected.",
      bs: "Učiti dovu za sebe između ezana i ikameta, jer se dova tada ne odbija.",
    },
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
      "Allahumma lakal-hamdu anta kasawtaneeh, as-aluka min khayrihi wakhayri ma suniAAa lah, wa-aAAoothu bika min sharrihi washarri ma suniAAa lah.",
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
    transliteration: "Tublee wayukhliful-lahu taAAala.",
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
    transliteration: "Ilbas jadeedan waAAish hameedan wamut shaheedan.",
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
      en: "Invocations for the beginning of the prayer",
      bs: "Dove na početku namaza",
    },
    arabic:
      "اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ، اللَّهُمَّ نَقِّنِي مِنْ خَطَايَايَ كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ، اللَّهُمَّ اغْسِلْني مِنْ خَطَايَايَ، بِالثَّلْجِ وَالْماءِ وَالْبَرَدِ.",
    transliteration:
      "Allahumma baAAid baynee wabayna khatayaya kama baAAadta baynal-mashriqi walmaghrib, allahumma naqqinee min khatayaya kama yunaqqath-thawbul-abyadu minad-danas, allahummagh-silnee min khatayaya biththalji walma/i walbarad.",
    translation: {
      en: "O Allah, distance me from my sins just as You have distanced The East from The West, O Allah, purify me of my sins as a white robe is purified of filth, O Allah, cleanse me of my sins with snow, water, and ice.",
      bs: "O Allahu, udalji mene od mojih grijeha kao što si udaljio istok od zapada. O Allahu, očisti me od mojih grijeha kao što se bijela odjeća čisti od prljavštine. O Allahu, operi me od mojih grijeha snijegom, vodom i ledom.",
    },
  },
  {
    id: "hisnul_muslim_28",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for the beginning of the prayer",
      bs: "Dove na početku namaza",
    },
    arabic:
      "سُبْحانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلاَ إِلَهَ غَيْرُكَ.",
    transliteration:
      "Subhanakal-lahumma wabihamdika watabarakas-muka wataAAala jadduka wala ilaha ghayruk.",
    translation: {
      en: "How perfect You are O Allah, and I praise You. Blessed be Your name, and lofty is Your position and none has the right to be worshipped except You.",
      bs: "Slavljen si Ti, o Allahu, i hvaljen. Blagoslovljeno je Tvoje ime, uzvišena je Tvoja veličina i nema drugog boga osim Tebe.",
    },
  },
  {
    id: "hisnul_muslim_29",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for the beginning of the prayer",
      bs: "Dove na početku namaza",
    },
    arabic:
      "وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفَاً وَمَا أَنَا مِنَ الْمُشْرِكِينَ، إِنَّ صَلاَتِي، وَنُسُكِي، وَمَحْيَايَ، وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ، لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا مِنَ الْمُسْلِمِينَ. اللَّهُمَّ أَنْتَ المَلِكُ لاَ إِلَهَ إِلاَّ أَنْتَ، أَنْتَ رَبِّي وَأَنَا عَبْدُكَ، ظَلَمْتُ نَفْسِي وَاعْتَرَفْتُ بِذَنْبِي فَاغْفِرْ لِي ذُنُوبي جَمِيعَاً إِنَّهُ لاَ يَغْفِرُ الذُّنوبَ إِلاَّ أَنْتَ. وَاهْدِنِي لِأَحْسَنِ الأَخْلاقِ لاَ يَهْدِي لِأَحْسَنِها إِلاَّ أَنْتَ، وَاصْرِفْ عَنِّي سَيِّئَهَا، لاَ يَصْرِفُ عَنِّي سَيِّئَهَا إِلاَّ أَنْتَ، لَبَّيْكَ وَسَعْدَيْكَ، وَالخَيْرُ كُلُّهُ بِيَـــــــدَيْكَ، وَالشَّـــــرُّ لَيْسَ إِلَيْــــــكَ، أَنَا بِكَ وَإِلَيْكَ، تَبارَكْتَ وَتَعَالَيْتَ، أَسْتَغْفِرُكَ وَأَتوبُ إِلَيْكَ.",
    transliteration:
      "Wajjahtu wajhiya lillathee fataras-samawati wal-arda haneefan wama ana minal-mushrikeen, inna salatee wanusukee wamahyaya wamamatee lillahi rabbil-AAalameen, la shareeka lahu wabithalika omirtu wa-ana minal-muslimeen. Allahumma antal-maliku la ilaha illa ant. anta rabbee wa-ana AAabduk, thalamtu nafsee waAAtaraftu bithanbee faghfir lee thunoobee jameeAAan innahu la yaghfiruth-thunooba illa ant.wahdinee li-ahsanil-akhlaqi la yahdee li-ahsaniha illa ant, wasrif AAannee sayyi-aha la yasrifu AAannee sayyi-aha illa ant, labbayka wasaAAdayk,walkhayru kulluhu biyadayk, washsharru laysa ilayk, ana bika wa-ilayk, tabarakta wataAAalayt, astaghfiruka wa-atoobu ilayk.",
    translation: {
      en: "I have turned my face sincerely towards He who has brought forth the heavens and the Earth and I am not of those who associate others with Allah. Indeed my prayer, my sacrifice, my life and my death are for Allah, Lord of the worlds, no partner has He, with this I am commanded and I am of the Muslims. O Allah, You are the Sovereign, none has the right to be worshipped except You. You are my Lord and I am Your servant, I have wronged my own soul and have acknowledged my sin, so forgive me all my sins for no one forgives sins except You. Guide me to the best of characters for none can guide to it other than You, and deliver me from the worst of characters for none can deliver me from it other than You. Here I am, in answer to Your call, happy to serve you. All good is within Your hands and evil does not stem from You. I exist by your will and will return to you. Blessed and High are You, I seek Your forgiveness and repent unto You.Allah does not create pure evil which does not have any good or contain any benefit, wisdom or mercy at all, nor does He punish anyone without having commited a sin. Something can be good in terms of its creation when viewed in a particular perspective and at the same time be evil when viewed in another way. Allah created the devil and by him, He tests His servants, so there are those who hate the devil, fight him and his way and they stand at enmity towards him and his followers and there are others who are at allegiance with the devil and follow his steps. So evil exists in His creatures by His will and wisdom, not in His actions or act of creating.",
      bs: "Upravio sam svoje lice iskreno prema Onome koji je stvorio nebesa i Zemlju, i ja nisam od onih koji Njemu druge pridružuju. Zaista, moj namaz i moji obredi, moj život i moja smrt pripadaju Allahu, Gospodaru svjetova, koji nema sudruga. Tako mi je naređeno i ja sam musliman. O Allahu, Ti si Vladar, nema boga osim Tebe. Ti si moj Gospodar, a ja sam Tvoj rob. Prema sebi sam nasilje učinio i priznajem svoj grijeh, pa mi oprosti sve moje grijehe, jer grijehe ne oprašta niko osim Tebe. Uputi me na najljepši ahlak ponašanje, jer na najljepši ahlak ne upućuje niko osim Tebe, i otkloni od mene loš ahlak, jer loš ahlak ne otklanja niko osim Tebe. Odazivam Ti se i radujem Ti se, i svako dobro je u Tvojim rukama, a zlo se Tebi ne pripisuje. Ja postojim Tvojom voljom i Tebi se vraćam. Blagoslovljen si i Uzvišen. Tražim Tvoj oprost i Tebi se kajem.",
    },
  },
  {
    id: "hisnul_muslim_30",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for the beginning of the prayer",
      bs: "Dove na početku namaza",
    },
    arabic:
      "اللَّهُمَّ رَبَّ جِبْرَائِيلَ، وَمِيْكَائِيلَ، وَإِسْرَافِيلَ، فَاطِرَ السَّمَوَاتِ وَالأَرْضِ، عَالِمَ الغَيْبِ وَالشَّهَادَةِ أَنْتَ تَحْكُمُ بَيْنَ عِبَادِكَ فِيمَا كَانُوا فِيهِ يَخْتَلِفُونَ. اهْدِنِي لِمَا اخْتُلِفَ فِيهِ مِنَ الْحَقِّ بِإِذْنِكَ إِنَّكَ تَهْدِي مَنْ تَشَاءُ إِلَى صِرَاطٍ مُسْتَقيمٍ.",
    transliteration:
      "Allahumma rabba jibra-eel, wameeka-eel, wa-israfeel fatiras-samawati walard, AAalimal-ghaybi washshahadah, anta tahkumu bayna AAibadika feema kanoo feehi yakhtalifoon. ihdinee limakh-tulifa feehi minal-haqqi bi-ithnik, innaka tahdee man tasha-o ila siratin mustaqeem.",
    translation: {
      en: "O Allah, Lord of Jibra-eel, Meeka-eel and Israfeel great angles, Creator of the heavens and the Earth, Knower of the seen and the unseen. You are the arbitrator between Your servants in that which they have disputed. Guide me to the truth by Your leave, in that which they have differed, for verily You guide whom You will to a straight path.",
      bs: "O Allahu, Gospodaru Džebraila, i Mikaila, i Israfila, Stvoritelju nebesa i Zemlje, Poznavaoče nevidljivog i vidljivog, Ti sudiš među Svojim robovima u onome u čemu su se razilazili. Uputi me na istinu, Tvojom voljom, u onome u čemu su se razilazili, jer Ti, zaista, upućuješ koga hoćeš na Pravi put.",
    },
  },
  {
    id: "hisnul_muslim_31",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for the beginning of the prayer",
      bs: "Dove na početku namaza",
    },
    arabic:
      "اللَّهُ أَكْبَرُ كَبِيرَاً، اللَّهُ أَكْبَرُ كَبِيراً، اللَّهُ أَكْبَرُ كَبِيراً، وَالْحَمْدُ لِلَّهِ كَثيراً، وَالْحَمْدُ لِلَّهِ كَثيراً، وَالْحَمْدُ لِلَّهِ كَثيراً، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً ثَلاثاً أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ: مِنْ نَفْخِهِ، وَنَفْثِهِ، وَهَمْزِهِ.",
    transliteration:
      "Allahu akbaru kabeera, Allahu akbaru kabeera, Allahu akbaru kabeera, walhamdu lillahi katheera, walhamdu lillahi katheera, walhamdu lillahi katheera, wasubhanal-lahi bukratan wa-aseela.)(aAAoothu billahi minash-shaytani min nafkhihi wanafthihi wahamzih.",
    translation: {
      en: "Allah is Most Great, Allah is Most Great, Allah is Most Great, much praise is for Allah, much praise is for Allah, much praise is for Allah, and I declare the perfection of Allah in the early morning and in the late afternoon.I take refuge with Allah from the devil, from his pride, his poetry and his madness.",
      bs: "Allah je najveći, mnogo velik. Allah je najveći, mnogo velik. Allah je najveći, mnogo velik. I hvala Allahu mnogo, i hvala Allahu mnogo, i hvala Allahu mnogo. I slavljen neka je Allah ujutro i navečer. tri puta Utječem se Allahu od šejtana: od njegovog puhanja oholosti, i njegovog pljuvanja poezije, i njegovog spletkarenja ludila.",
    },
  },
  {
    id: "hisnul_muslim_32",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for the beginning of the prayer",
      bs: "Dove na početku namaza",
    },
    arabic:
      "اللَّهُمَّ لَكَ الْحَمْدُ، أَنْتَ نُورُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ، [وَلَكَ الْحَمْدُ أَنْتَ رَبُّ السَّمَواتِ وَالأَرْضِ وَمَنْ فِيهِنَّ] [وَلَكَ الْحَمْدُ لَكَ مُلْكُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ] [وَلَكَ الْحَمْدُ أَنْتَ مَلِكُ السَّمَوَاتِ وَالأَرْضِ] [وَلَكَ الْحَمْدُ] [أَنْتَ الْحَقُّ، وَوَعْدُكَ الْحَقُّ، وَقَوْلُكَ الْحَقُّ، وَلِقاؤُكَ الْحَقُّ، وَالْجَنَّةُ حَقٌّ، وَالنَّارُ حَقٌّ، وَالنَّبِيُّونَ حَقٌّ، وَمحَمَّدٌ صلى الله عليه وسلم حَقٌّ، وَالسّاعَةُ حَقٌّ] [اللَّهُمَّ لَكَ أَسْلَمتُ، وَعَلَيْكَ تَوَكَّلْتُ، وَبِكَ آمَنْتُ، وَإِلَيْكَ أَنَبْتُ، وَبِكَ خاصَمْتُ، وَإِلَيْكَ حاكَمْتُ. فَاغْفِرْ لِي مَا قَدَّمْتُ، وَمَا أَخَّرْتُ، وَمَا أَسْرَرْتُ، وَمَا أَعْلَنْتُ] [وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي] [أَنْتَ المُقَدِّمُ، وَأَنْتَ المُؤَخِّرُ لاَ إِلَهَ إِلاَّ أَنْتَ] [أَنْتَ إِلَهِي لاَ إِلَهَ إِلاَّ أَنْتَ] [وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ].",
    transliteration:
      "Allahumma lakal-hamd anta noorus-samawati wal-ardi waman feehin, walakal-hamd, anta qayyimus-samawati walardi waman feehin, [walakal-hamd, anta rabbus-samawati walardi waman feehin], [walakal-hamd, laka mulkus-samawati walardi waman feehin] [walakal-hamd, anta malikus-samawati walard] [walakal-hamd] [antal-haq, wawaAAdukal-haq, waqawlukal-haq, waliqa-okal-haq, waljannatu haq wannaru haq, wannabiyyoona haq, wa Muhammadun haq, wassaAAatu haq] [allahumma laka aslamt, waAAalayka tawakkalt, wabika amant, wa-ilayka anabt, wabika khasamt, wa-ilayka hakamt, faghfir lee ma qaddamt, wama akhkhart, wama asrart, wama aAAlant] [antal-muqaddim, wa-antal-mu-akhkhir, la ilaha illa ant] [anta ilahee la ilaha illa ant .",
    translation: {
      en: "O Allah, to You belongs all praise, You are the Light of the heavens and the Earth and all that is within them. To You belongs all praise, You are the Sustainer of the heavens and the Earth and all that is within them. To You belongs all praise. You are Lord of the heavens and the Earth and all that is within them. To You belongs all praise and the kingdom of the heavens and the Earth and all that is within them. To You belongs all praise, You are the King of the heavens and the Earth and to You belongs all praise. You are The Truth, Your promise is true, your Word is true, and the Day in which we will encounter You is true, the Garden of Paradise is true and the Fire is true, and the Prophets are true, Muhammad is true and the Final Hour is true. O Allah, unto You I have submitted, and upon You I have relied, and in You I have believed, and to You I have turned in repentance, and over You I have disputed, and to You I have turned for judgment. So forgive me for what has come to pass of my sins and what will come to pass, and what I have hidden and what I have made public. You are Al-Muqaddim and Al-Mu-akhkhir. None has the right to be worshipped except You, You are my Deity, none has the right to be worshipped except You.Meaning of Al-Muqaddim and Al-Mu-akhkhir: Allah puts forward and favours whom He wills from amongst His creation just as He defers and holds back whom He wills in accordance to His wisdom. E.g. Favouring man over the rest of creation, favouring the Prophets over the rest of mankind, favouring Muhammad over all the Prophets and Messengers…etc.",
      bs: "O Allahu, Tebi hvala, Ti si Svjetlo nebesa i Zemlje i onoga što je na njima. I Tebi hvala, Ti si Održavatelj nebesa i Zemlje i onoga što je na njima. [I Tebi hvala, Ti si Gospodar nebesa i Zemlje i onoga što je na njima] [I Tebi hvala, Tebi pripada vlast nebesa i Zemlje i onoga što je na njima] [I Tebi hvala, Ti si Kralj nebesa i Zemlje] [I Tebi hvala] [Ti si Istina, i Tvoje obećanje je istina, i Tvoj govor je istina, i susret s Tobom je istina, i Džennet je istina, i Džehennem je istina, i vjerovjesnici su istina, i Muhammed, sallallahu alejhi ve sellem, je istina, i Sudnji čas je istina]. [O Allahu, Tebi sam se predao, i na Tebe se oslonio, i u Tebe povjerovao, i Tebi se vratio, i radi Tebe se borio, i pred Tobom presudu tražio. Pa mi oprosti ono što sam ranije učinio i ono što ću kasnije učiniti, i ono što sam tajno učinio i ono što sam javno učinio] [i ono što Ti bolje znaš od mene]. [Ti si Onaj koji unapređuje i Ti si Onaj koji unazađuje, nema boga osim Tebe] [Ti si moj Bog, nema boga osim Tebe].",
    },
  },
  {
    id: "hisnul_muslim_33",
    category: "hisnul_muslim",
    title: {
      en: "Invocations during Ruki' (bowing in prayer)",
      bs: "Dove na ruku'u",
    },
    arabic: "سُبْحانَ رَبِّيَ الْعَظِيمِ. ثلاث مرَّاتٍ.",
    transliteration: "Subhana rabbiyal-AAatheem (three times)",
    translation: {
      en: "How perfect my Lord is, The Supreme.’three times",
      bs: "Slavljen neka je moj Gospodar Veličanstveni. tri puta",
    },
  },
  {
    id: "hisnul_muslim_34",
    category: "hisnul_muslim",
    title: {
      en: "Invocations during Ruki' (bowing in prayer)",
      bs: "Dove na ruku'u",
    },
    arabic:
      "سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي.",
    transliteration:
      "Subhanakal-lahumma rabbana wabihamdik, allahummagh-fir lee",
    translation: {
      en: "How perfect You are O Allah, our Lord and I praise You. O Allah, forgive me.",
      bs: "Slavljen si Ti, o Allahu, Gospodaru naš, i hvaljen. O Allahu, oprosti mi.",
    },
  },
  {
    id: "hisnul_muslim_35",
    category: "hisnul_muslim",
    title: {
      en: "Invocations during Ruki' (bowing in prayer)",
      bs: "Dove na ruku'u",
    },
    arabic: "سُبُّوُحٌ، قُدُّوسٌ، رَبُّ المَلاَئِكَةِ وَالرُّوحِ.",
    transliteration: "Subboohun quddoos, rabbul-mala-ikati warrooh.",
    translation: {
      en: "Perfect and Holy He is, Lord of the angles and the Rooh i.e. Jibra-eel.",
      bs: "Slavljeni, Sveti, Gospodar meleka i Duha Džebraila.",
    },
  },
  {
    id: "hisnul_muslim_36",
    category: "hisnul_muslim",
    title: {
      en: "Invocations during Ruki' (bowing in prayer)",
      bs: "Dove na ruku'u",
    },
    arabic:
      "اللَّهُمَّ لَكَ رَكَعْتُ، وَبِكَ آمَنْتُ، وَلَكَ أَسْلَمْتُ، خَشَعَ لَكَ سَمْعِي، وَبَصَرِي، وَمُخِّي، وَعَــــظْمِي، وَعَصَبِي، [وَمَا استَقَلَّتْ بِهِ قَدَمِي].",
    transliteration:
      "Allahumma laka rakaAAt, wabika amant, walaka aslamt, khashaAAa laka samAAee, wabasaree, wamukhkhee, waAAathmee, waAAasabee, wamas-taqalla bihi qadamee.",
    translation: {
      en: "O Allah, unto You I have bowed, and in You I have believed, and to You I have submitted. My hearing, sight, mind, bones, tendons and what my feet carry are humbled before You.",
      bs: "O Allahu, pred Tobom sam se poklonio učinio ruku', i u Tebe sam povjerovao, i Tebi sam se predao. Tebi su se ponizili moj sluh, i moj vid, i moj mozak, i moje kosti, i moji živci, [i ono što nose moje noge].",
    },
  },
  {
    id: "hisnul_muslim_37",
    category: "hisnul_muslim",
    title: {
      en: "Invocations during Ruki' (bowing in prayer)",
      bs: "Dove na ruku'u",
    },
    arabic:
      "سُبْحَانَ ذِي الْجَبَرُوتِ، وَالْمَلَكُوتِ، وَالْكِبْرِيَاءِ، وَالْعَظَمَةِ.",
    transliteration:
      "Subhana thil-jabaroot, walmalakoot, walkibriya/, walAAathamah.",
    translation: {
      en: "How perfect He is, The Possessor of total power, sovereignty, magnificence and grandeur.",
      bs: "Slavljen neka je Onaj koji posjeduje silu, i vlast, i veličinu, i uzvišenost.",
    },
  },
  {
    id: "hisnul_muslim_38",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for rising from the Ruki'",
      bs: "Dove prilikom podizanja sa ruku'a",
    },
    arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ.",
    transliteration: "SamiAAal-lahu liman hamidah",
    translation: {
      en: "May Allah answer he who praises Him.This supplication is to be made while rising.",
      bs: "Allah čuo onoga ko Ga hvali.",
    },
  },
  {
    id: "hisnul_muslim_39",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for rising from the Ruki'",
      bs: "Dove prilikom podizanja sa ruku'a",
    },
    arabic:
      "رَبَّنَا وَلَكَ الْحَمْدُ، حَمْداً كَثيراً طَيِّباً مُبارَكاً فِيهِ.",
    transliteration:
      "Rabbana walakal-hamdu hamdan katheeran tayyiban mubarakan feeh.",
    translation: {
      en: "Our Lord, for You is all praise, an abundant beautiful blessed praise.",
      bs: "Gospodaru naš, i Tebi hvala, hvala velika, lijepa i blagoslovljena.",
    },
  },
  {
    id: "hisnul_muslim_40",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for rising from the Ruki'",
      bs: "Dove prilikom podizanja sa ruku'a",
    },
    arabic:
      "مِلْءَ السَّمَوَاتِ وَمِلْءَ الأَرْضِ، وَمَا بَيْنَهُمَا، وَمِلْءَ مَا شِئْتَ مِنْ شَيءٍ بَعْدُ. أَهلَ الثَّناءِ وَالْمَجْدِ، أَحَقُّ مَا قَالَ الْعَبْدُ، وَكُلُّنَا لَكَ عَبْدٌ. اللَّهُمَّ لاَ مَانِعَ لِمَا أَعْطَيْتَ، وَلاَ مُعْطِيَ لِمَا مَنَعْتَ، وَلاَ يَنْفَعُ ذَا الجَدِّ مِنْكَ الجَدُّ.",
    transliteration:
      "Mil-as-samawati wamil-al-ard, wama baynahuma, wamil/a ma shi/ta min shay-in baAAd, ahlath-thana-i walmajd, ahaqqu ma qalal-AAabd, wakulluna laka AAabd. Allahumma la maniAAa lima aAAtayt, wala muAAtiya lima manaAAt, wala yanfaAAu thal-jaddi minkal-jad.",
    translation: {
      en: "The heavens and the Earth and all between them abound with Your praises, and all that You will abounds with Your praises. O Possessor of praise and majesty, the truest thing a slave has said of You and we are all Your slaves. O Allah, none can prevent what You have willed to bestow and none can bestow what You have willed to prevent, and no wealth or majesty can benefit anyone, as from You is all wealth and majesty.This supplication is made optionally only in conjunction with the previous one.",
      bs: "Puna nebesa i puna Zemlja, i puno ono što je između njih, i puno ono što Ti hoćeš od nečega poslije. Dostojan hvale i veličine, najpreče što je rob rekao, a svi smo mi Tvoji robovi. O Allahu, niko ne može spriječiti ono što Ti daš, niti dati ono što Ti spriječiš, niti koristi bogatstvo kod Tebe bogatašu od Tvoje kazne.",
    },
  },
  {
    id: "hisnul_muslim_41",
    category: "hisnul_muslim",
    title: { en: "Invocations during Sujood", bs: "Dove na sedždi" },
    arabic: "سُبْحَانَ رَبِّيَ الأَعْلَى ثلاث مرَّاتٍ.",
    transliteration: "Subhana rabbiyal-aAAla. (three times",
    translation: {
      en: "How perfect my Lord is, The Most High.’three times",
      bs: "Slavljen neka je moj Gospodar Najuzvišeniji. tri puta",
    },
  },
  {
    id: "hisnul_muslim_42",
    category: "hisnul_muslim",
    title: { en: "Invocations during Sujood", bs: "Dove na sedždi" },
    arabic:
      "سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي.",
    transliteration:
      "Subhanakal-lahumma rabbana wabihamdik, allahummagh- fir lee.",
    translation: {
      en: "How perfect You are O Allah, our Lord, and I praise You. O Allah, forgive me.",
      bs: "Slavljen si Ti, o Allahu, Gospodaru naš, i hvaljen. O Allahu, oprosti mi.",
    },
  },
  {
    id: "hisnul_muslim_43",
    category: "hisnul_muslim",
    title: { en: "Invocations during Sujood", bs: "Dove na sedždi" },
    arabic: "سُبوحٌ، قُدُّوسٌ، رَبُّ الْمَلَائِكَةِ وَالرُّوحِ.",
    transliteration: "Subbohoon quddos, rabbul-mala-ikati warrooh.",
    translation: {
      en: "Perfect and Holy He is, Lord of the angles and the Rooh i.e. Jibra-eel.",
      bs: "Slavljeni, Sveti, Gospodar meleka i Duha Džebraila.",
    },
  },
  {
    id: "hisnul_muslim_44",
    category: "hisnul_muslim",
    title: { en: "Invocations during Sujood", bs: "Dove na sedždi" },
    arabic:
      "اللَّهُمَّ لَكَ سَجَدْتُ وَبِكَ آمَنْتُ، وَلَكَ أَسْلَمْتُ، سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ، وَصَوَّرَهُ، وَشَقَّ سَمْعَهُ وَبَصَرَهُ، تَبَارَكَ اللَّهُ أَحْسنُ الْخَالِقينَ.",
    transliteration:
      "Allahumma laka sajadt, wabika amant, walaka aslamt, sajada wajhee lillathee khalaqahu wasawwarahu washaqqa samAAahu wabasarahu, tabarakal-lahu ahsanul-khaliqeen.",
    translation: {
      en: "O Allah, unto You I have prostrated and in You I have believed, and unto You I have submitted. My face has prostrated before He Who created it and fashioned it, and brought forth its faculties of hearing and seeing. Blessed is Allah, the Best of creators.",
      bs: "O Allahu, Tebi sedždu činim, i u Tebe vjerujem, i Tebi sam se predao. Lice moje pada na tlo pred Onim koji ga je stvorio, i uobličio, i koji mu je sluh i vid podario. Blagoslovljen neka je Allah, Najljepši Stvoritelj.",
    },
  },
  {
    id: "hisnul_muslim_45",
    category: "hisnul_muslim",
    title: { en: "Invocations during Sujood", bs: "Dove na sedždi" },
    arabic:
      "سُبْحَانَ ذِي الْجَبَرُوتِ، وَالْمَلَكُوتِ، وَالْكِبْرِيَاءِ، وَالْعَظَمَةِ.",
    transliteration:
      "Subhana thil-jabaroot, walmalakoot, walkibriya/, walAAathamah.",
    translation: {
      en: "How perfect He is, The Possessor of total power, sovereignty, magnificence and grandeur.",
      bs: "Slavljen neka je Onaj koji posjeduje silu, i vlast, i veličinu, i uzvišenost.",
    },
  },
  {
    id: "hisnul_muslim_46",
    category: "hisnul_muslim",
    title: { en: "Invocations during Sujood", bs: "Dove na sedždi" },
    arabic:
      "اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ: دِقَّهُ وَجِلَّهُ، وَأَوَّلَهُ وَآخِرَهُ، وَعَلاَنِيَّتَهُ وَسِرَّهُ.",
    transliteration:
      "Allahummagh-fir lee thanbee kullah, diqqahu wajillah, wa-awwalahu wa-akhirah, wa- AAalaniyyatahu wa-sirrah.",
    translation: {
      en: "O Allah, forgive me all of my sins, the small and great of them, the first and last of them, and the seen and hidden of them.",
      bs: "O Allahu, oprosti mi sve moje grijehe: male i velike, prve i posljednje, javne i tajne.",
    },
  },
  {
    id: "hisnul_muslim_47",
    category: "hisnul_muslim",
    title: { en: "Invocations during Sujood", bs: "Dove na sedždi" },
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ، وَبِمُعَافَاتِكَ مِنْ عُقوبَتِكَ، وَأَعُوذُ بِكَ مِنْكَ، لاَ أُحْصِي ثَنَاءً عَلَيْكَ، أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ.",
    transliteration:
      "Allahumma innee aAAoothu biridaka min sakhatik, wa-bimuAAafatika min AAuqoobatik, wa-aAAoothu bika mink, la ohsee thana-an AAalayk, anta kama athnayta AAala nafsik.",
    translation: {
      en: "O Allah, I take refuge within Your pleasure from Your displeasure and within Your pardon from Your punishment, and I take refuge in You from You. I cannot enumerate Your praise, You are as You have praised Yourself.",
      bs: "O Allahu, utječem se Tvome zadovoljstvu od Tvoje srdžbe, i Tvome oprostu od Tvoje kazne, i utječem se Tebi od Tebe. Ja Te ne mogu dovoljno pohvaliti, Ti si onakav kako si Sebe pohvalio.",
    },
  },
  {
    id: "hisnul_muslim_48",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for sitting between two prostrations",
      bs: "Dove između dvije sedžde",
    },
    arabic: "رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي.",
    transliteration: "Rabbigh-fir lee, rabbigh-fir lee.",
    translation: {
      en: "My Lord forgive me, My Lord forgive me.",
      bs: "Gospodaru moj, oprosti mi. Gospodaru moj, oprosti mi.",
    },
  },
  {
    id: "hisnul_muslim_49",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for sitting between two prostrations",
      bs: "Dove između dvije sedžde",
    },
    arabic:
      "اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَاجْبُرْنِي، وَعَافِنِي، وَارْزُقْنِي، وَارْفَعْنِي.",
    transliteration:
      "Allahummagh-fir lee, warhamnee, wahdinee, wajburnee, waAAafinee, warzuqnee warfaAAnee.",
    translation: {
      en: "O Allah, forgive me, have mercy upon me, guide me, enrich me, give me health, grant me sustenance and raise my rank.",
      bs: "O Allahu, oprosti mi, i smiluj mi se, i uputi me, i zaštiti me, i pređi preko mojih manjkavosti, i opskrbi me, i uzdigni me.",
    },
  },
  {
    id: "hisnul_muslim_50",
    category: "hisnul_muslim",
    title: {
      en: "Supplications for prostrating due to recitation of the Qur'an",
      bs: "Dove na tilavat-sedždi",
    },
    arabic:
      "سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ، وَشَقَّ سَمْعَهُ وَبَصَرَهُ بِحَوْلِهِ وَقُوَّتِهِ، ﴿فَتَبارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ.",
    transliteration:
      "Sajada wajhee lillathee khalaqahu washaqqa samAAahu wabasarahu bihawlihi waquwwatih { tabaraka Allahu ahsanu alkhaliqeen}.",
    translation: {
      en: "My face fell prostrate before He who created it and brought forth its faculties of hearing and seeing by His might and power.<< So Blessed is Allah, the best of creators.",
      bs: "Lice moje pada na tlo pred Onim koji ga je stvorio i koji mu je sluh i vid podario Svojom moći i snagom. Pa neka je Uzvišen Allah, Najljepši Stvoritelj.",
    },
  },
  {
    id: "hisnul_muslim_51",
    category: "hisnul_muslim",
    title: {
      en: "Supplications for prostrating due to recitation of the Qur'an",
      bs: "Dove na tilavat-sedždi",
    },
    arabic:
      "اللَّهُمَّ اكْتُبْ لِي بِهَا عِنْدَكَ أَجْراً، وَضَعْ عَنِّي بِهَا وِزْراً، وَاجْعَلْهَا لِي عِنْدَكَ ذُخْراً، وَتَقَبَّلْهَا مِنِّي كَمَا تَقَبَّلْتَهَا مِنْ عَبْدِكَ دَاوُدَ.",
    transliteration:
      "Allahummak-tub lee biha AAindaka ajra, wadaAA AAannee biha wizra, wajAAalha lee AAindaka thukhra, wataqabbalha minnee kama taqabbaltaha min AAabdika Dawood.",
    translation: {
      en: "O Allah, record for me a reward for this prostration, and remove from me a sin. Save it for me and accept it from me just as You had accepted it from Your servant Dawood.",
      bs: "O Allahu, zapiši mi kod Sebe nagradu za nju sedždu, i oslobodi me njome grijeha, i sačuvaj mi je kod Sebe kao zalihu, i primi je od mene kao što si je primio od Svoga roba Davuda.",
    },
  },
  {
    id: "hisnul_muslim_52",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for At-Tashahhud (sitting in prayer)",
      bs: "Tešehhud (Et-tehijjatu)",
    },
    arabic:
      "التَّحِيَّاتُ لِلَّهِ، وَالصَّلَواتُ، وَالطَّيِّباتُ، السَّلاَمُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ. أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسولُهُ.",
    transliteration:
      "Attahiyyatu lillahi wassalawatu wattayyibat, assalamu AAalayka ayyuhan-nabiyyu warahmatul-lahi wabarakatuh, assalamu AAalayna waAAala AAibadil-lahis-saliheen. Ash-hadu an la ilaha illal-lah, wa-ashhadu anna Muhammadan AAabduhu warasooluh.",
    translation: {
      en: "At-tahiyyat is for Allah. All acts of worship and good deeds are for Him. Peace and the mercy and blessings of Allah be upon you O Prophet. Peace be upon us and all of Allah’s righteous servants. I bear witness that none has the right to be worshipped except Allah and I bear witness that Muhammad is His slave and Messenger.At-tahiyyat: all words which indicate the glorification of Allah. His eternal existence, His perfection and His sovereignty.",
      bs: "Najljepši pozdravi počenja Allahu, i blagoslovi i dobra djela. Selam tebi, o Vjerovjesniče, i Allahova milost i Njegovi blagoslovi. Selam nama i Allahovim dobrim robovima. Svjedočim da nema boga osim Allaha i svjedočim da je Muhammed Njegov rob i Njegov poslanik.",
    },
  },
  {
    id: "hisnul_muslim_53",
    category: "hisnul_muslim",
    title: {
      en: "How to recite blessings on the Prophet after the Tashahhud",
      bs: "Salavati na Poslanika poslije tešehhuda",
    },
    arabic:
      "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ، وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيتَ عَلَى إِبْرَاهِيمَ، وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ.",
    transliteration:
      "Allahumma salli AAala Muhammad, wa-AAala ali Muhammad, kama sallayta AAala Ibraheema wa-AAala ali Ibraheem, innaka Hameedun Majeed, allahumma barik AAala Muhammad, wa-AAala ali Muhammad, kama barakta AAala Ibraheema wa-AAala ali Ibraheem, innaka Hameedun Majeed.",
    translation: {
      en: "O Allah, send prayers upon Muhammad and the followers of Muhammad, just as You sent prayers upon Ibraheem and upon the followers of Ibraheem. Verily, You are full of praise and majesty. O Allah, send blessings upon Mohammad and upon the family of Muhammad, just as You sent blessings upon Ibraheem and upon the family of Ibraheem. Verily, You are full of praise and majesty.send prayers: praise and exalt him in the highest and superior of gatherings: that of the closest angels to Allahal has been translated in it’s broadest sense: some scholars are of the view that the meaning here is more specific and that it means: his followers from among his family.",
      bs: "O Allahu, smiluj se Muhammedu i porodici Muhammedovoj, kao što si se smilovao Ibrahimu i porodici Ibrahimovoj, zaista si Ti Hvaljeni i Slavljeni. O Allahu, blagoslovi Muhammeda i porodicu Muhammedovu, kao što si blagoslovio Ibrahima i porodicu Ibrahimovu, zaista si Ti Hvaljeni i Slavljeni.",
    },
  },
  {
    id: "hisnul_muslim_54",
    category: "hisnul_muslim",
    title: {
      en: "How to recite blessings on the Prophet after the Tashahhud",
      bs: "Salavati na Poslanika poslije tešehhuda",
    },
    arabic:
      "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى أَزْوَاجِهِ وَذُرِّيَّتِهِ، كَمَا صَلَّيْتَ عَلَى آلِ إِبْرَاهِيمَ. وَبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى أَزْواجِهِ وَذُرِّيَّتِهِ، كَمَا بَارَكْتَ عَلَى آلِ إِبْرَاهِيمَ. إِنَّكَ حَمِيدٌ مَجِيدٌ.",
    transliteration:
      "Allahumma salli AAala Muhammad wa-AAala azwajihi wathurriyyatihi kama sallayta AAala ali Ibraheem, wabarik AAala Muhammad, wa-AAala azwajihi wathurriyyatih, kama barakta AAala ali Ibraheem. innaka Hameedun Majeed.",
    translation: {
      en: "O Allah, send prayers upon Muhammad and upon the wives and descendants of Muhammad, just as You sent prayers upon the family of Ibraheem, and send blessings upon Muhammad and upon the wives and descendants of Muhammad, just as You sent blessings upon the family of Ibraheem. Verily, You are full of praise and majesty.",
      bs: "O Allahu, smiluj se Muhammedu, i njegovim ženama i njegovom potomstvu, kao što si se smilovao porodici Ibrahimovoj. I blagoslovi Muhammeda, i njegove žene i njegovo potomstvo, kao što si blagoslovio porodicu Ibrahimovu. Zaista si Ti Hvaljeni i Slavljeni.",
    },
  },
  {
    id: "hisnul_muslim_55",
    category: "hisnul_muslim",
    title: {
      en: "Invocations after the final Tash-ahhud and before ending the prayer",
      bs: "Dove poslije posljednjeg tešehhuda, a prije predaje se lama",
    },
    arabic:
      "اللَّهُــمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ عَذَابِ جَهَنَّمَ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ.",
    transliteration:
      "Allahumma innee aAAoothu bika min AAathabil-qabr, wamin AAathabi jahannam, wamin fitnatil-mahya walmamat, wamin shari fitnatil-maseehid-dajjal.",
    translation: {
      en: "O Allah, I take refuge in You from the punishment of the grave, from the torment of the Fire, from the trials and tribulations of life and death and from the evil affliction of Al-Maseeh Ad-Dajjal.Al-Maseeh Ad-Dajjal: among the great signs of the last hour and the greatest trials to befall mankind, which every Prophet has warned about. Most of mankind will follow him. He will appear from Asbahan, Iran at the time when the Muslims will conquer Constantinople. He will be given special powers and will make the truth seem false and vice versa. He will claim to be righteous and then he will claim prophethood and finally, divinity. From his features is that he will be blind in his right eye which is a definite proof that contradicts his claim to be Allah as it is a sign of imperfection. The word Kafir will be written between his eyes which every believer, literate or illiterate will recognise.",
      bs: "O Allahu, utječem Ti se od kaburske kazne, i od džehennemske kazne, i od iskušenja života i smrti, i od zla iskušenja Mesiha Dedžala.",
    },
  },
  {
    id: "hisnul_muslim_56",
    category: "hisnul_muslim",
    title: {
      en: "Invocations after the final Tash-ahhud and before ending the prayer",
      bs: "Dove poslije posljednjeg tešehhuda, a prije predaje se lama",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَعوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَأَعوذُ بِكَ مِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ، وَأَعوذُ بِكَ مِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ. اللَّهُمَّ إِنِّي أَعوذُ بِكَ مِنَ الْمَأْثَمِ وَالْمَغْرَمِ.",
    transliteration:
      "Allahumma innee aAAoothu bika min AAathabil-qabr, wa-aAAoothu bika min fitnatil-maseehid-dajjal, wa-aAAoothu bika min fitnatil-mahya walmamat. Allahumma innee aAAoothu bika minal-ma/thami walmaghram.",
    translation: {
      en: "O Allah, I take refuge in You from the punishment of the grave, and I take refuge in You from the temptation and trial of Al-Maseeh Ad-Dajjal, and I take refuge in You from the trials and tribulations of life and death. O Allah, I take refuge in You from sin and debt.",
      bs: "O Allahu, utječem Ti se od kaburske kazne, i utječem Ti se od iskušenja Mesiha Dedžala, i utječem Ti se od iskušenja života i smrti. O Allahu, utječem Ti se od grijeha i duga.",
    },
  },
  {
    id: "hisnul_muslim_57",
    category: "hisnul_muslim",
    title: {
      en: "Invocations after the final Tash-ahhud and before ending the prayer",
      bs: "Dove poslije posljednjeg tešehhuda, a prije predaje se lama",
    },
    arabic:
      "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْماً كَثِيراً، وَلاَ يَغْفِرُ الذُّنوبَ إِلاَّ أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي، إِنَّكَ أَنْتَ الغَفورُ الرَّحيمُ.",
    transliteration:
      "Allahumma innee thalamtu nafsee thulman katheeran wala yaghfiruth-thunooba illa ant, faghfir lee maghfiratan min AAindik warhamnee, innaka antal-Ghafoorur-Raheem.",
    translation: {
      en: "O Allah, I have indeed oppressed my soul excessively and none can forgive sin except You, so forgive me a forgiveness from Yourself and have mercy upon me. Surely, You are The Most-Forgiving, The Most-Merciful.From Yourself: i.e. from Your innermost grace without deserving it and a forgiveness which is befitting to your tremendous generosity.",
      bs: "O Allahu, ja sam sebi učinio mnogo nepravde nasilja, a grijehe ne oprašta niko osim Tebe, pa mi oprosti oprostom od Tebe i smiluj mi se, zaista si Ti Onaj koji mnogo oprašta, Milostivi.",
    },
  },
  {
    id: "hisnul_muslim_58",
    category: "hisnul_muslim",
    title: {
      en: "Invocations after the final Tash-ahhud and before ending the prayer",
      bs: "Dove poslije posljednjeg tešehhuda, a prije predaje se lama",
    },
    arabic:
      "اللَّهُمَّ اغْفِرْ لِي مَا قَدَّمْتُ، وَمَا أَخَّرْتُ، وَمَا أَسْرَرْتُ، وَمَا أَعْلَنْتُ، وَمَا أَسْرَفْتُ، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي. أَنْتَ الْمُقَدِّمُ، وَأَنْتَ الْمُؤَخِّرُ لاَ إِلَهَ إِلاَّ أَنْتَ.",
    transliteration:
      "Allahummagh-fir lee ma qaddamtu, wama akhkhart, wama asrartu wama aAAlant, wama asraftt, wama anta aAAlamu bihi minnee, antal-muqaddimu wa-antal-mu-akhkhiru la ilaha illa ant.",
    translation: {
      en: "O Allah, forgive me for those sins which have come to pass as well as those which shall come to pass, and those I have committed in secret as well as those I have made public, and where I have exceeded all bounds as well as those things about which You are more knowledgeable. You are Al-Muqaddim and Al-Mu-akhkhir. None has the right to be worshipped except You.Meaning of Al-Muqaddim and Al-Mu-akhkhir: Allah puts forward and favours whom He wills from amongst His creation just as He defers and holds back whom He wills in accordance to His wisdom. E.g. Favouring man over the rest of creation, favouring the Prophets over the rest of mankind, favouring Muhammad over all the Prophets and Messengers…etc.",
      bs: "O Allahu, oprosti mi ono što sam ranije učinio i ono što ću kasnije učiniti, i ono što sam tajno učinio i ono što sam javno učinio, i ono u čemu sam pretjerao, i ono što Ti bolje znaš od mene. Ti si Onaj koji unapređuje i Ti si Onaj koji unazađuje, nema boga osim Tebe.",
    },
  },
  {
    id: "hisnul_muslim_59",
    category: "hisnul_muslim",
    title: {
      en: "Invocations after the final Tash-ahhud and before ending the prayer",
      bs: "Dove poslije posljednjeg tešehhuda, a prije predaje se lama",
    },
    arabic:
      "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ، وَشُكْرِكَ، وَحُسْنِ عِبادَتِكَ.",
    transliteration:
      "Allahumma aAAinnee AAala thikrik, washukrik, wahusni AAibadatik.",
    translation: {
      en: "O Allah, help me to remember You, to thank You, and to worship You in the best of manners.",
      bs: "O Allahu, pomozi mi da Te spominjem, da Ti zahvaljujem i da Te lijepo obožavam.",
    },
  },
  {
    id: "hisnul_muslim_60",
    category: "hisnul_muslim",
    title: {
      en: "Invocations after the final Tash-ahhud and before ending the prayer",
      bs: "Dove poslije posljednjeg tešehhuda, a prije predaje se lama",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبُخْلِ، وَأَعوذُ بِكَ مِنَ الْجُبْنِ، وَأَعُوذُ بِكَ مِنْ أَنْ أُرَدَّ إِلَى أَرْذَلِ الْعُمُرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الدُّنْيَا وَعَذَابِ الْقَبْرِ.",
    transliteration:
      "Allahumma innee aAAoothu bika minal-bukhl, wa-aAAoothu bika minal-jubn, wa-aAAoothu bika min an oradda ila arthalil- AAumur, wa-aAAoothu bika min fitnatid-dunya waAAathabil-qabr.",
    translation: {
      en: "O Allah, I take refuge in You from miserliness and cowardice, I take refuge in You lest I be returned to the worst of lives “i.e. old age, being weak, incapable and in a state of fear”, and I take refuge in You from the trials and tribulations of this life and the punishment of the grave.",
      bs: "O Allahu, utječem Ti se od škrtosti, i utječem Ti se od kukavičluka, i utječem Ti se od toga da budem vraćen u najteže starosno doba, i utječem Ti se od iskušenja dunjaluka i kaburske kazne.",
    },
  },
  {
    id: "hisnul_muslim_61",
    category: "hisnul_muslim",
    title: {
      en: "Invocations after the final Tash-ahhud and before ending the prayer",
      bs: "Dove poslije posljednjeg tešehhuda, a prije predaje se lama",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ.",
    transliteration:
      "Allahumma innee as-alukal-jannah, wa-aAAoothu bika minan-nar.",
    translation: {
      en: "O Allah, I ask You to grant me Paradise and I take refuge in You from the Fire.",
      bs: "O Allahu, ja Te molim za Džennet i utječem Ti se od Vatre.",
    },
  },
  {
    id: "hisnul_muslim_62",
    category: "hisnul_muslim",
    title: {
      en: "Invocations after the final Tash-ahhud and before ending the prayer",
      bs: "Dove poslije posljednjeg tešehhuda, a prije predaje se lama",
    },
    arabic:
      "اللَّهُمَّ بِعِلْمِكَ الغَيْبَ وَقُدْرَتِكَ عَلَى الْخَلقِ أَحْيِنِي مَا عَلِمْتَ الْحَيَاةَ خَيْراً لِي، وَتَوَفَّنِي إِذَا عَلِمْتَ الْوَفَاةَ خَيْراً لِي، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَشْيَتَكَ فِي الْغَيْبِ وَالشَّهَادَةِ، وَأَسْأَلُكَ كَلِمَةَ الْحَقِّ فِي الرِّضَا وَالْغَضَبِ، وَأَسْأَلُكَ الْقَصْدَ فِي الْغِنَى وَالْفَقْرِ، وَأَسْأَلُكَ نَعِيماً لاَ يَنْفَدُ، وَأَسْأَلُكَ قُرَّةَ عَيْنٍ لاَ تَنْقَطِعُ، وَأَسْأَلُكَ الرِّضَا بَعْدَ الْقَضَاءِ، وَأَسْــــأَلُكَ بَرْدَ الْعَيْشِ بَعْدَ الْمَوْتِ، وَأَسْأَلُكَ لَذَّةَ النَّظَرِ إِلَى وَجْهِكَ، وَالشَّوْقَ إِلَى لِقائِكَ فِي غَيرِ ضَرَّاءَ مُضِرَّةٍ، وَلاَ فِتْنَةٍ مُضِلَّةٍ، اللَّهُمَّ زَيِّنَا بِزِينَةِ الإِيمَانِ، وَاجْعَلْنَا هُدَاةً مُهْتَدِينَ.",
    transliteration:
      "Allahumma biAAilmikal-ghayb, waqudratika AAalal-khalq, ahyinee ma AAalimtal-hayata khayran lee watawaffanee itha AAalimtal-wafata khayran lee, allahumma innee as-aluka khashyataka fil-ghaybi washshahadah, wa-as-aluka kalimatal-haqqi fir-rida walghadab, wa-as-alukal-qasda fil-ghina walfaqr, wa-as-aluka naAAeeman la yanfad, wa-as-aluka qurrata AAaynin la tanqatiAA, wa-as-alukar-rida baAAdal-qada/, wa-as-aluka bardal-AAayshi baAAdal-mawt, wa-as-aluka laththatan-nathari ila wajhik, washshawqa ila liqa-ik fee ghayri darraa mudirrah, wala fitnatin mudillah, allahumma zayyinna bizeenatil-eeman wajAAalna hudatan muhtadeen.",
    translation: {
      en: "O Allah, by Your knowledge of the unseen and Your power over creation, keep me alive so long as You know such life to be good for me and take me if You know death to be better for me. O Allah, make me fearful of You whether in secret or in public and I ask You to make me true in speech, in times of pleasure and anger.I ask you to make me moderate in times of wealth and poverty and I ask You for everlasting bliss and joy which will never cease.I ask You to make me pleased with what You have decreed and for an easy life after death.I ask You for the sweetness of looking upon Your Face and a longing to encounter You in a manner which does not entail a calamity which will bring about harm nor a trial which will cause deviation. O Allah, beautify us with the adornment of faith and make us of those who guide and are rightly guided.",
      bs: "O Allahu, tako Ti Tvoga znanja o nevidljivom i Tvoje moći nad stvorenjima, poživi me dok god znaš da je život bolji za mene, a usmrti me kada znaš da je smrt bolja za mene. O Allahu, molim Te za strahopoštovanje prema Tebi u tajnosti i javnosti, i molim Te za riječ istine u zadovoljstvu i ljutnji, i molim Te za umjerenost u bogatstvu i siromaštvu, i molim Te za uživanje koje ne prestaje, i molim Te za radost koja ne prolazi, i molim Te za zadovoljstvo nakon presude, i molim Te za ugodan život nakon smrti, i molim Te za slast gledanja u Tvoje Lice, i čežnju za susretom s Tobom, bez štete koja bi me zadesila i iskušenja koje bi me u zabludu odvelo. O Allahu, ukrasi nas ukrasom vjerovanja i učini nas upućivačima koji su upućeni.",
    },
  },
  {
    id: "hisnul_muslim_63",
    category: "hisnul_muslim",
    title: {
      en: "Invocations after the final Tash-ahhud and before ending the prayer",
      bs: "Dove poslije posljednjeg tešehhuda, a prije predaje se lama",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ يَا أَللَّهُ بِأَنَّكَ الْوَاحِدُ الْأَحَدُ الصَّمَدُ الَّذِي لَمْ يَلِدْ وَلَمْ يولَدْ، وَلَمْ يَكنْ لَهُ كُفُواً أَحَدٌ، أَنْ تَغْفِرَ لِي ذُنُوبِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِّيمُ.",
    transliteration:
      "Allahumma innee as-aluka ya Allah bi-annakal-wahidul-ahadus-samad, allathee lam yalid walam yoolad, walam yakun lahu kufuwan ahad, an taghfira lee thunoobee innaka antal-Ghafoorur-Raheem.",
    translation: {
      en: "O Allah, I ask You O Allah, as You are The One, The Only, AS-Samad, The One who begets not, nor was He begotten and there is none like unto Him that You forgive me my sins for verily You are The Oft-Forgiving, Most-Merciful.AS-Samad: The Self-Sufficient Master, Possessor of perfect attributes whom all of creation turn to in all their needs.",
      bs: "O Allahu, ja Te molim, o Allahu, time što si Ti Jedan, Jedini, Utočište svakom, Onaj koji nije rodio i rođen nije, i kome niko ravan nije, da mi oprostiš moje grijehe, jer si Ti, zaista, Onaj koji mnogo oprašta, Milostivi.",
    },
  },
  {
    id: "hisnul_muslim_64",
    category: "hisnul_muslim",
    title: {
      en: "Invocations after the final Tash-ahhud and before ending the prayer",
      bs: "Dove poslije posljednjeg tešehhuda, a prije predaje se lama",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنَّ لَكَ الْحَمْدَ لَا إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ، الْمَنَّانُ، يَا بَدِيعَ السَّمَوَاتِ وَالْأَرْضِ يَا ذَا الْجَلاَلِ وَالْإِكْرَامِ، يَا حَيُّ يَا قَيُّومُ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ.",
    transliteration:
      "Allahumma innee as-aluka bianna lakal-hamd, la ilaha illa ant wahdaka la shareeka lak, almannan, ya badeeAAas-samawati wal-ard, ya thal-jalali wal-ikram, ya hayyu ya qayyoom, innee as-alukal-jannah, wa-aAAoothu bika minan-nar.",
    translation: {
      en: "O Allah, I ask You as unto You is all praise, none has the right to be worshipped except You, alone, without partner. You are the Benefactor. O Originator of the heavens and the Earth, O Possessor of majesty and honour, O Ever Living, O Self-Subsisting and Supporter of all, verily I ask You for Paradise and I take refuge with You from the Fire.",
      bs: "O Allahu, ja Te molim time što Tebi pripada hvala, nema boga osim Tebe, samog, koji nemaš sudruga, Dobročinitelju, Stvoritelju nebesa i Zemlje, o Veličanstveni i Plemeniti, o Živi, o Vječni, ja Te molim za Džennet i utječem Ti se od Vatre.",
    },
  },
  {
    id: "hisnul_muslim_65",
    category: "hisnul_muslim",
    title: {
      en: "Invocations after the final Tash-ahhud and before ending the prayer",
      bs: "Dove poslije posljednjeg tešehhuda, a prije predaje se lama",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنَّي أَشْهَدُ أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ الْأَحَدُ الصَّمَدُ الَّذِي لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُواً أَحَدٌ.",
    transliteration:
      "Allahumma inne as-aluka biannee ashhadu annaka antal-lah, la ilaha illa ant, al-ahadus-samad, allathee lam yalid walam yoolad walam yakun lahu kufuwan ahad.",
    translation: {
      en: "O Allah, I ask You, as I bear witness that You are Allah, none has the right to be worshipped except You, The One, AS-Samad Who begets not nor was He begotten and there is none like unto Him.AS-Samad: The Self-Sufficient Master, Possessor of perfect attributes whom all of creation turn to in all their needs.",
      bs: "O Allahu, ja Te molim time što svjedočim da si Ti Allah, nema boga osim Tebe, Jedinog, Utočišta svakom, koji nije rodio i rođen nije, i kome niko ravan nije.",
    },
  },
  {
    id: "hisnul_muslim_66",
    category: "hisnul_muslim",
    title: {
      en: "What to say after completing the prayer",
      bs: "Zikr nakon predaje selama",
    },
    arabic:
      "أَسْتَغْفِرُ اللَّهَ ثَلاَثَاً اللَّهُمَّ أَنْتَ السَّلاَمُ، وَمِنْكَ السَّلاَمُ، تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالْإِكْرَامِ.",
    transliteration:
      "Astaghfirul-lah (three times) (Allahumma antas-salam waminkas-salam, tabarakta ya thal-jalali wal-ikram.)",
    translation: {
      en: "I ask Allah for forgiveness.three times O Allah, You are As-Salam and from You is all peace, blessed are You, O Possessor of majesty and honour. AS-Salam: The One Who is free from all defects and deficiencies.",
      bs: "Molim Allaha za oprost tri puta. O Allahu, Ti si Mir i od Tebe je mir, blagoslovljen si, o Veličanstveni i Plemeniti.",
    },
  },
  {
    id: "hisnul_muslim_67",
    category: "hisnul_muslim",
    title: {
      en: "What to say after completing the prayer",
      bs: "Zikr nakon predaje selama",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ [ثلاثاً]، اللَّهُمَّ لاَ مَانِعَ لِمَا أَعْطَيْتَ، وَلاَ مُعْطِيَ لِمَا مَنَعْتَ، وَلاَ يَنْفَعُ ذَا الْجَدِّ مِنْكَ الجَدُّ.",
    transliteration:
      "La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa AAala kulli shayin qadeer, allahumma la maniAAa lima aAAtayt, wala muAAtiya lima manaAAt, wala yanfaAAu thal-jaddi minkal-jad.",
    translation: {
      en: "None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise and He is over all things omnipotent.O Allah, none can prevent what You have willed to bestow and none can bestow what You have willed to prevent, and no wealth or majesty can benefit anyone, as from You is all wealth and majesty.",
      bs: "Nema boga osim Allaha jednog jedinog, On nema sudruga, Njemu pripada vlast i Njemu pripada hvala, i On sve može. tri puta. O Allahu, niko ne može spriječiti ono što Ti daš, niti dati ono što Ti spriječiš, niti koristi bogatstvo kod Tebe bogatašu.",
    },
  },
  {
    id: "hisnul_muslim_68",
    category: "hisnul_muslim",
    title: {
      en: "What to say after completing the prayer",
      bs: "Zikr nakon predaje selama",
    },
    arabic:
      "لَا إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ، وَلاَ نَعْبُدُ إِلاَّ إِيَّاهُ, لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لَا إِلَهَ إِلاَّ اللَّهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الكَافِرُونَ.",
    transliteration:
      "La ilaha illal-lah, wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa AAala kulli shayin qadeer. la hawla wala quwwata illa billah, la ilaha illal-lah, wala naAAbudu illa iyyah, lahun-niAAmatu walahul-fadl walahuth-thana-ol- hasan, la ilaha illal-lah mukhliseena lahud-deen walaw karihal-kafiroon.",
    translation: {
      en: "None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise and He is over all things omnipotent. There is no might nor power except with Allah, none has the right to be worshipped except Allah and we worship none except Him. For Him is all favour, grace, and glorious praise. None has the right to be worshipped except Allah and we are sincere in faith and devotion to Him although the disbelievers detest it.",
      bs: "Nema boga osim Allaha jednog jedinog, On nema sudruga, Njemu pripada vlast i Njemu pripada hvala, i On sve može. Nema snage ni moći osim u Allaha, nema boga osim Allaha, i mi ne obožavamo nikoga osim Njega. Njemu pripada blagodat, i Njemu pripada dobrota, i Njemu pripada lijepa hvala. Nema boga osim Allaha, iskreno Mu ispovijedajući vjeru, makar to mrzili nevjernici.",
    },
  },
  {
    id: "hisnul_muslim_69",
    category: "hisnul_muslim",
    title: {
      en: "What to say after completing the prayer",
      bs: "Zikr nakon predaje selama",
    },
    arabic:
      "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَاللَّهُ أَكْبَرُ ثلاثاً وثلاثين لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
    transliteration:
      "Subhanal-lah walhamdu lillah, wallahu akbar (thirty-three times). (La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa AAala kulli shayin qadeer.)",
    translation: {
      en: "How perfect Allah is, all praise is for Allah, and Allah is the greatest.thirty-three times None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise and He is over all things omnipotent.",
      bs: "Subhanallah Slavljen neka je Allah, i Elhamdullilah Hvala Allahu, i Allahu ekber Allah je najveći. 33 puta. Nema boga osim Allaha jednog jedinog, On nema sudruga, Njemu pripada vlast i Njemu pripada hvala, i On sve može.",
    },
  },
  {
    id: "hisnul_muslim_70",
    category: "hisnul_muslim",
    title: {
      en: "What to say after completing the prayer",
      bs: "Zikr nakon predaje selama",
    },
    arabic:
      "بسم الله الرحمن الرحيم ﴿قُلْ هُوَ اللَّهُ أَحَدٌ* اللَّهُ الصَّمَدُ* لَمْ يَلِدْ وَلَمْ يُولَدْ* وَلَمْ يَكُن لَّهُ كُفُواً أَحَدٌ﴾، بسم الله الرحمن الرحيم ﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ* مِن شَرِّ مَا خَلَقَ* وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ* وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ* وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾،بسم الله الرحمن الرحيم ﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ* مَلِكِ النَّاسِ* إِلَهِ النَّاسِ* مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ* الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ* مِنَ الْجِنَّةِ وَ النَّاسِ﴾ بَعْدَ كُلِّ صَلاَةٍ.",
    transliteration: "",
    translation: {
      en: "The following three Soorahs should be recited once after Zuhr, 'Asr and 'Ishaa prayers and thrice after the Fajr and Maghrib prayers.[Soorah al-Ikhlaas 112] [Soorah al-Falaq 113] [Soorah an-Naas 114]",
      bs: "Učiti sure Ihlas, Felek i Nas; po jednom nakon podne, ikindije i jacije namaza, a po tri puta nakon sabah i akšam namaza.",
    },
  },
  {
    id: "hisnul_muslim_71",
    category: "hisnul_muslim",
    title: {
      en: "What to say after completing the prayer",
      bs: "Zikr nakon predaje selama",
    },
    arabic:
      "﴿اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾ عَقِبَ كلِّ صَلاَةٍ.",
    transliteration: "",
    translation: {
      en: "It is also from the Sunnah to recite Aayat ul-Kursee after each prayer:[Soorah al-Baqarah, Aayah 255]",
      bs: "Učiti Ajetul-Kursijju nakon svakog namaza.",
    },
  },
  {
    id: "hisnul_muslim_72",
    category: "hisnul_muslim",
    title: {
      en: "What to say after completing the prayer",
      bs: "Zikr nakon predaje selama",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ عَشْرَ مَرّاتٍ بَعْدَ صَلاةِ الْمَغْرِبِ وَالصُّبْحِ.",
    transliteration:
      "La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku walahul-hamd, yuhyee wayumeet, wahuwa AAala kulli shayin qadeer.(ten times after the maghrib & fajr prayers)",
    translation: {
      en: "None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise, He gives life and causes death and He is over all things omnipotent.ten times after the maghrib and fajr prayers",
      bs: "Nema boga osim Allaha jednog jedinog, On nema sudruga, Njemu pripada vlast i Njemu pripada hvala, On oživljava i usmrćuje, i On sve može. deset puta nakon sabaha i akšama",
    },
  },
  {
    id: "hisnul_muslim_73",
    category: "hisnul_muslim",
    title: {
      en: "What to say after completing the prayer",
      bs: "Zikr nakon predaje selama",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نافِعاً، وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً بَعْدَ السّلامِ مِنْ صَلاَةِ الفَجْرِ.",
    transliteration:
      "Allahumma innee as-aluka AAilman nafiAAan, warizqan tayyiban, waAAamalan mutaqabbalan.(after salam from fajr prayer)",
    translation: {
      en: "O Allah, I ask You for knowledge which is beneficial and sustenance which is good, and deeds which are acceptable.To be said after giving salam for the fajr prayer",
      bs: "O Allahu, molim Te za korisno znanje, i dobru opskrbu, i primljeno djelo. nakon selama sabah namaza",
    },
  },
  {
    id: "hisnul_muslim_74",
    category: "hisnul_muslim",
    title: {
      en: "Istikharah (seeking Allah's Counsel)",
      bs: "Dova za istiharu",
    },
    arabic:
      "قَالَ جَابرُ بْنُ عَبْدِ اللَّهِ رَضِيَ اللَّهُ عَنْهُمَا: كَانَ رسُولُ اللَّهِ صلى الله عليه وسلم يُعَلِّمُنَا الْاسْتِخَارَةَ فِي الْأُمُورِ كُلِّهَا كَمَا يُعَلِّمُنَا السُّورَةَ مِنَ الْقُرْآنِ، يَقُولُ: إِذَا هَمَّ أَحَدُكُمْ بِالْأَمْرِ فَلْيَرْكَعْ رَكْعَتَيْنِ مِنْ غَيْرِ الْفَرِيضَةِ، ثُمَّ لْيَقُلْ: اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ العَظِيمِ؛ فَإِنَّكَ تَقْدِرُ وَلاَ أَقْدِرُ، وَتَعْلَمُ وَلاَ أَعْلَمُ، وَأَنْتَ عَلاَّمُ الغُيُوبِ، اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأمْرَ - وَيُسَمِّي حَاجَتَهُ - خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي – أَوْ قَالَ: عَاجِلِهِ وَآجِلِهِ - فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثمَّ بَارِكْ لِي فِيهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي – أَوْ قَالَ: عَاجِلِهِ وَآجِلِهِ – فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ، ثُمَّ أَرْضِنِي بِهِ.وَمَا نَدِمَ مَنِ اسْتَخَارَ الْخَالِقَ، وَشَاوَرَ الْمَخْلُوقِينَ الْمُؤْمِنِينَ وَتَثَبَّتَ فِي أَمْرِهِ، فَقَدْ قَالَ اللَّه تعالى: ﴿وَشاوِرْهُمْ فِي الْأَمْرِ فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ﴾ .",
    transliteration:
      "On the authority of Jabir Ibn AAabdullah , he said: ’The Prophet would instruct us to pray for guidance in all of our concerns, just as he would teach us a chapter from the Quran. He would say ’ If any of you intends to undertake a matter then let him pray two supererogatory units (two rakAAah nafilah) of prayer and after which he should supplicate:Allahumma innee astakheeruka biAAilmik, wa-astaqdiruka biqudratik, wa-as-aluka min fadlikal-AAatheem, fa-innaka taqdiru wala aqdir, wataAAlamu wala aAAlam ,wa-anta AAallamul ghuyoob, allahumma in kunta taAAlamu anna hathal-amr (say your need) khayrun lee fee deenee wamaAAashee waAAaqibati amree faqdurhu lee, wayassirhu lee, thumma barik lee feeh, wa-in kunta taAAlamu anna hathal-amr sharrun lee fee deenee wamaAAashee waAAaqibati amree fasrifhu AAannee wasrifnee AAanh, waqdur liyal-khayra haythu kan, thumma ardinee bih.)(One who seeks guidance from his Creator and consults his fellow believers and then remains firm in his resolve does not regret, for Allah has said:washawirhum fee al-amri fa-itha AAazamta fatawakkal AAala Allah)(chapter 3 verse 159",
    translation: {
      en: "On the authority of Jabir Ibn AAabdullah , he said: ’The Prophet would instruct us to pray for guidance in all of our concerns, just as he would teach us a chapter from the Quran. He would say ’ If any of you intends to undertake a matter then let him pray two supererogatory units two rakAAah nafilah of prayer and after which he should supplicate:‘O Allah, I seek Your counsel by Your knowledge and by Your power I seek strength and I ask You from Your immense favour, for verily You are able while I am not and verily You know while I do not and You are the Knower of the unseen. O Allah, if You know this affair -and here he mentions his need- to be good for me in relation to my religion, my life, and end, then decree and facilitate it for me, and bless me with it, and if You know this affair to be ill for me towards my religion, my life, and end, then remove it from me and remove me from it, and decree for me what is good wherever it be and make me satisfied with such.One who seeks guidance from his Creator and consults his fellow believers and then remains firm in his resolve does not regret, for Allah has said:…and consult them in the affair. Then when you have taken a decision, put your trust in Allah…",
      bs: "O Allahu, ja tražim da me uputiš Svojim znanjem, i tražim da me osnažiš Svojom moći, i molim Te iz Tvoje velike dobrote, jer Ti možeš, a ja ne mogu, i Ti znaš, a ja ne znam, i Ti si Poznavalac nevidljivog. O Allahu, ako znaš da je ova stvar spomenuti potrebu dobra za mene u mojoj vjeri, i mom životu, i ishodu mog posla - ili je rekao: na ovom i budućem svijetu - onda mi je odredi i olakšaj mi je, a zatim mi daj blagoslov u njoj. A ako znaš da je ova stvar loša po mene u mojoj vjeri, i mom životu, i ishodu mog posla - ili je rekao: na ovom i budućem svijetu - onda je otkloni od mene i otkloni mene od nje, i odredi mi dobro gdje god ono bilo, a zatim me učini zadovoljnim time.",
    },
  },
  {
    id: "hisnul_muslim_112",
    category: "hisnul_muslim",
    title: {
      en: "Invocation to say if you stir in the night",
      bs: "Dova ako se probudimo u toku noći",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ الْوَاحِدُ الْقَهّارُ، رَبُّ السَّمَوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا الْعَزيزُ الْغَفَّارُ.",
    transliteration:
      "La ilaha illal-lahul-wahidul-qahhar, rabbus-samawati wama baynahuma, alAAazeezul-ghaffar.",
    translation: {
      en: "None has the right to be worshipped except Allah, The One, AL-Qahhar.Lord of the heavens and the Earth and all between them, The Exalted in Might, The Oft-Forgiving.AL-Qahhar:The One Who has subdued all of creation and Whom all of creation are subservient to. All movements occur by His will.",
      bs: "Nema boga osim Allaha, Jednog, Onoga koji sve nadvladava El-Kahhar, Gospodara nebesa i Zemlje i onoga što je između njih, Silnog i Onoga koji mnogo oprašta.",
    },
  },
  {
    id: "hisnul_muslim_113",
    category: "hisnul_muslim",
    title: {
      en: "What to say if you are afraid to go to sleep or feel lonely and depressed",
      bs: "Dova protiv straha u snu i usamljenosti",
    },
    arabic:
      "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ غَضَبِهِ وَعِقَابِهِ، وَشَرِّ عِبَادِهِ، وَمِنْ هَمَزَاتِ الشَّياطِينِ وَأَنْ يَحْضُرُونِ.",
    transliteration:
      "aAAoothu bikalimatil-lahit-tammat min ghadabih,waAAiqabih, washarri AAibadih, wamin hamazatish-shayateen, wa-an yahduroon.",
    translation: {
      en: "I take refuge in the perfect words of Allah from His anger and punishment, and from the evil of His servants, and from the madness and appearance of devils.",
      bs: "Utječem se Allahovim savršenim riječima od Njegove srdžbe i kazne, i od zla Njegovih robova, i od šejtanskih nagovaranja i njihovog prisustva.",
    },
  },
  {
    id: "hisnul_muslim_114",
    category: "hisnul_muslim",
    title: {
      en: "What to do if you have a bad dream or nightmare",
      bs: "Šta uraditi kada se snije ružan san",
    },
    arabic: "يَنْفُثُ عَنْ يَسَارِهِ ثلاثاً.",
    transliteration: "",
    translation: {
      en: "[Spit on your left three timesSpit: A form of spitting comprising mainly of air with little spittle - Seek refuge in Allah from shaytan and the evil of what you saw Three Times - Do not relate it to anyone - Turn and sleep on the opposite side to which you were sleeping on previously. - Get up and pray if you so desire. ]",
      bs: "[Pljucnuti bez pljuvačke na lijevu stranu tri puta - Zatražiti utočište kod Allaha od šejtana i od zla onoga što je vidio tri puta - Ne pričati o tome nikome - Okrenuti se na drugu stranu].",
    },
  },
  {
    id: "hisnul_muslim_115",
    category: "hisnul_muslim",
    title: {
      en: "What to do if you have a bad dream or nightmare",
      bs: "Šta uraditi kada se snije ružan san",
    },
    arabic: "ويَقُومُ يُصَلِّي إِنْ أَرَادَ ذَلِكَ.",
    transliteration: "",
    translation: {
      en: "Get up and pray if you so desire.",
      bs: "Ustati i klanjati ako želi.",
    },
  },
  {
    id: "hisnul_muslim_116",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for Qunut in the Witr prayer",
      bs: "Dova na kunutu u vitr namazu",
    },
    arabic:
      "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ؛ فَإِنَّكَ تَقْضِي وَلاَ يُقْضَى عَلَيْكَ، إِنَّهُ لاَ يَذِلُّ مَنْ وَالَيْتَ، [وَلاَ يَعِزُّ مَنْ عَادَيْتَ]، تَبارَكْتَ رَبَّنا وَتَعَالَيْتَ.",
    transliteration:
      "Allahummah-dinee feeman hadayt, waAAafinee feeman AAafayt, watawallanee feeman tawallayt, wabarik lee feema aAAtayt, waqinee sharra ma qadayt, fa-innaka taqdee wala yuqda AAalayk, innahu la yathillu man walayt, [wala yaAAizzu man AAadayt], tabarakta rabbana wataAAalayt.",
    translation: {
      en: "O Allah, guide me along with those whom You have guided, pardon me along with those whom You have pardoned, be an ally to me along with those whom You are an ally to and bless for me that which You have bestowed. Protect me from the evil You have decreed for verily You decree and none can decree over You.For surety, he whom you show allegiance to is never abased and he whom You take as an enemy is never honoured and mighty. O our Lord, Blessed and Exalted are You.Evil you have decreed: Allah does not create pure evil which does not have any good or contain any benefit, wisdom or mercy at all, nor does He punish anyone without having commited a sin. Something can be good in terms of its creation when viewed in a particular perspective and at the same time be evil when viewed in another way.Allah created the devil and by him, He tests His servants, so there are those who hate the devil, fight him and his way and they stand at enmity towards him and his followers and there are others who are at allegiance with the devil and follow his steps. So evil exists in His creatures by His will and wisdom, not in His actions or act of creating.",
      bs: "O Allahu, uputi me među one koje si uputio, i oprosti mi među onima kojima si oprostio, i preuzmi brigu o meni među onima o kojima si preuzeo brigu, i blagoslovi mi ono što si mi dao, i sačuvaj me od zla koje si odredio, jer Ti određuješ, a Tebi se ne može odrediti. Zaista, neće biti ponižen onaj koga Ti zaštitiš, [i neće biti počašćen onaj kome si Ti neprijatelj]. Blagoslovljen si, Gospodaru naš, i Uzvišen.",
    },
  },
  {
    id: "hisnul_muslim_117",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for Qunut in the Witr prayer",
      bs: "Dova na kunutu u vitr namazu",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ، وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ، وَأَعُــــوذُ بِكَ مِنْكَ، لاَ أُحْصِي ثَنَاءً عَلَيْكَ، أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ.",
    transliteration:
      "Allahumma innee aAAoothu biridaka min sakhatik, wabimuAAafatika min AAuqoobatik, wa-aAAoothu bika mink, la ohsee thana-an AAalayk, anta kama athnayta AAala nafsik.",
    translation: {
      en: "O Allah, I take refuge within Your pleasure from Your displeasure and within Your pardon from Your punishment, and I take refuge in You from You. I cannot enumerate Your praise. You are as You have praised Yourself.",
      bs: "O Allahu, utječem se Tvome zadovoljstvu od Tvoje srdžbe, i Tvome oprostu od Tvoje kazne, i utječem se Tebi od Tebe. Ja Te ne mogu dovoljno pohvaliti, Ti si onakav kako si Sebe pohvalio.",
    },
  },
  {
    id: "hisnul_muslim_118",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for Qunut in the Witr prayer",
      bs: "Dova na kunutu u vitr namazu",
    },
    arabic:
      "اللَّهُمَّ إِيَّاكَ نعْبُدُ، وَلَكَ نُصَلِّي وَنَسْجُدُ، وَإِلَيْكَ نَسْعَى وَنَحْفِدُ، نَرْجُو رَحْمَتَكَ، وَنَخْشَى عَذَابَكَ، إِنَّ عَذَابَكَ بِالكَافِرِينَ مُلْحَقٌ. اللَّهُمَّ إِنَّا نَسْتَعينُكَ، وَنَسْتَغْفِرُكَ، وَنُثْنِي عَلَيْكَ الْخَيْرَ، وَلاَ نَكْفُرُكَ، وَنُؤْمِنُ بِكَ، وَنَخْضَعُ لَكَ، وَنَخْلَعُ مَنْ يَكْفرُكَ.",
    transliteration:
      "Allahumma iyyaka naAAbud, walaka nusallee wanasjud, wa-ilayka nasAAa wanahfid, narjoo rahmatak, wanakhsha AAathabak, inna AAathabaka bilkafireena mulhaq. Allahumma inna nastaAAeenuk, wanastaghfiruk, wanuthnee AAalaykal- khayr, wala nakfuruk, wanu/minu bik, wanakhdaAAu lak wanakhlaAAu man yakfuruk.",
    translation: {
      en: "O Allah, it is You we worship, and unto You we pray and prostrate, and towards You we hasten and You we serve. We hope for Your mercy and fear Your punishment, verily Your punishment will fall upon the disbelievers.O Allah, we seek Your aid and ask Your pardon, we praise You with all good and do not disbelieve in You.We believe in You and submit unto You, and we disown and reject those who disbelieve in You.",
      bs: "O Allahu, samo Tebe obožavamo, i Tebi namaz klanjamo i sedždu činimo, i Tebi žurimo i služimo. Nadamo se Tvojoj milosti i strahujemo od Tvoje kazne. Zaista će Tvoja kazna stići nevjernike. O Allahu, mi tražimo Tvoju pomoć, i tražimo Tvoj oprost, i hvalimo Te dobrim, i ne poričemo Te, i vjerujemo u Tebe, i pokoravamo Ti se, i odričemo se onoga ko Te poriče.",
    },
  },
  {
    id: "hisnul_muslim_119",
    category: "hisnul_muslim",
    title: {
      en: "What to say immediately following the Witr prayer",
      bs: "Zikr poslije vitr namaza",
    },
    arabic:
      "سُبْحَانَ المَلِكِ القُدُّوسِ ثلاثَ مرَّاتٍ والثَّالِثَةُ يَجْهَرُ بها ويَمُدُّ بها صَوتَهُ يقولُ: [رَبِّ الْمَلاَئِكَةِ وَالرُّوحِ].",
    transliteration:
      "Subhanal-malikil-quddoos.(three times).on the third time he would raise his voice, elongate it and add: (Rabbil-mala-ikati warrooh.)",
    translation: {
      en: "How perfect The King, The Holy One is.three times on the third time he would raise his voice, elongate it and add: Lord of the angles and the Rooh i.e. Jibra-eel.",
      bs: "Slavljen neka je Vladar Sveti - tri puta, a treći put povisiti glas i odužiti: Gospodar meleka i Duha Džebraila.",
    },
  },
  {
    id: "hisnul_muslim_120",
    category: "hisnul_muslim",
    title: {
      en: "Invocations in times of worry and grief",
      bs: "Dova protiv zabrinutosti i tuge",
    },
    arabic:
      "اللَّهُمَّ إِنِّي عَبْدُكَ، ابْنُ عَبْدِكَ، ابْنُ أَمَتِكَ، نَاصِيَتِي بِيَدِكَ، مَاضٍ فِيَّ حُكْمُكَ، عَدْلٌ فِيَّ قَضَاؤُكَ، أَسْأَلُكَ بِكُــــلِّ اسْمٍ هُوَ لَكَ، سَمَّيْتَ بِهِ نَفْسَكَ، أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ، أَوْ عَلَّمْتَهُ أَحَداً مِنْ خَلْقِكَ، أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الغَيْبِ عِنْدَكَ، أَنْ تَجْعَلَ القُرْآنَ رَبِيعَ قَلْبِي، وَنُورَ صَدْرِي، وَجَلاَءَ حُزْنِي، وَذَهَابَ هَمِّي.",
    transliteration:
      "Allahumma innee AAabduk, ibnu AAabdik, ibnu amatik, nasiyatee biyadik, madin fiyya hukmuk, AAadlun fiyya qada-ok, as-aluka bikulli ismin huwa lak, sammayta bihi nafsak, aw anzaltahu fee kitabik, aw AAallamtahu ahadan min khalqik awis-ta/tharta bihi fee AAilmil-ghaybi AAindak, an tajAAalal-Qurana rabeeAAa qalbee, wanoora sadree, wajalaa huznee wathahaba hammee.",
    translation: {
      en: "O Allah, I am Your servant, son of Your servant, son of Your maidservant, my forelock is in Your hand i.e. You have total mastery over, Your command over me is forever executed and Your decree over me is just. I ask You by every name belonging to You which You named Yourself with, or revealed in Your Book, or You taught to any of Your creation, or You have preserved in the knowledge of the unseen with You, that You make the Quran the life of my heart and the light of my breast, and a departure for my sorrow and a release for my anxiety.",
      bs: "O Allahu, ja sam Tvoj rob, sin Tvoga roba, sin Tvoje robinje, moje čelo je u Tvojoj ruci, Tvoja odredba se na meni sprovodi, Tvoja presuda o meni je pravedna. Molim Te svakim Tvojim imenom, kojim si Sebe nazvao, ili si ga u Svojoj Knjizi objavio, ili si ga nekoga od Svojih stvorenja podučio, ili si ga u znanju o nevidljivom kod Sebe zadržao, da učiniš Kur'an proljećem moga srca, i svjetlom mojih prsa, i onim što će otkloniti moju tugu i otjerati moju brigu.",
    },
  },
  {
    id: "hisnul_muslim_121",
    category: "hisnul_muslim",
    title: {
      en: "Invocations in times of worry and grief",
      bs: "Dova protiv zabrinutosti i tuge",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ.",
    transliteration:
      "Allahumma innee aAAoothu bika minal-hammi walhuzn, walAAajzi walkasali walbukhli waljubn, wadalAAid-dayni waghalabatir-rijal.",
    translation: {
      en: "O Allah, I take refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being over powered by men.",
      bs: "O Allahu, utječem Ti se od brige i tuge, i nemoći i lijenosti, i škrtosti i kukavičluka, i tereta duga i nadmoći ljudi.",
    },
  },
  {
    id: "hisnul_muslim_122",
    category: "hisnul_muslim",
    title: { en: "Invocations for anguish", bs: "Dova u nevolji" },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ الْعَظِيمُ الْحَلِيمُ، لاَ إِلَهَ إِلاَّ اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لاَ إِلَهَ إِلاَّ اللَّهُ رَبُّ السَّمَوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ.",
    transliteration:
      "La ilaha illal-lahul-AAatheemul-haleem, la ilaha illal-lahu rabbul-AAarshil-AAatheem, la ilaha illal-lahu rabbus-samawati warabbul-ardi warabbul-AAarshil-kareem.",
    translation: {
      en: "None has the right to be worshipped except Allah Forbearing. None has the right to be worshipped except Allah, Lord of the magnificent throne. None has the right to be worshipped except Allah, Lord of the heavens, Lord of the Earth and Lord of the noble throne.",
      bs: "Nema boga osim Allaha, Veličanstvenog, Blagog. Nema boga osim Allaha, Gospodara Arša Veličanstvenog. Nema boga osim Allaha, Gospodara nebesa i Gospodara Zemlje i Gospodara Arša Plemenitog.",
    },
  },
  {
    id: "hisnul_muslim_123",
    category: "hisnul_muslim",
    title: { en: "Invocations for anguish", bs: "Dova u nevolji" },
    arabic:
      "اللَّهُمَّ رَحْمَتَكَ أَرْجُو، فَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ، وَأَصْلِحْ لِي شَأْنِي كُلَّهُ، لاَ إِلَهَ إِلاَّ أَنْتَ.",
    transliteration:
      "Allahumma rahmataka arjoo fala takilnee ila nafsee tarfata AAayn, wa-aslih lee sha/nee kullah, la ilaha illa ant.",
    translation: {
      en: "O Allah, it is Your mercy that I hope for, so do not leave me in charge of my affairs even for a blink of an eye and rectify for me all of my affairs.None has the right to be worshipped except You.",
      bs: "O Allahu, Tvojoj se milosti nadam, pa me ne prepuštaj samom sebi ni treptaj oka, i popravi sve moje poslove. Nema boga osim Tebe.",
    },
  },
  {
    id: "hisnul_muslim_124",
    category: "hisnul_muslim",
    title: { en: "Invocations for anguish", bs: "Dova u nevolji" },
    arabic:
      "لاَ إِلَهَ إِلاَّ أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظّالِمِينَ.",
    transliteration:
      "La ilaha illa anta subhanaka innee kuntu minath-thalimeen.",
    translation: {
      en: "None has the right to be worshipped except You. How perfect You are, verily I was among the wrong-doers.",
      bs: "Nema boga osim Tebe, slavljen neka si Ti! Ja sam, zaista, bio od onih koji su nasilje sebi učinili.",
    },
  },
  {
    id: "hisnul_muslim_125",
    category: "hisnul_muslim",
    title: { en: "Invocations for anguish", bs: "Dova u nevolji" },
    arabic: "اللَّهُ اللَّهُ رَبِّي لاَ أُشْرِكُ بِهِ شَيْئاً.",
    transliteration:
      "None has the right to be worshipped except You. How perfect You are, verily I was among the wrong-doers.",
    translation: {
      en: "Allah, Allah is my Lord, I do not associate anything with Him.",
      bs: "Allah, Allah je moj Gospodar, ja Njemu ništa ne pridružujem.",
    },
  },
  {
    id: "hisnul_muslim_126",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for when you meet an adversary or a powerful ruler.",
      bs: "Dova kad se susretneš sa protivnikom ili moćnim vladarom",
    },
    arabic:
      "اللَّهُمَّ إِنَّا نَجْعَلُكَ فِي نُحُورِهِم، وَنَعُوذُ بِكَ مِنْ شُرُورِهِمْ.",
    transliteration:
      "Allahumma inna najAAaluka fee nuhoorihim wanaAAoothu bika min shuroorihim.",
    translation: {
      en: "O Allah, we place You before them and we take refuge in You from their evil.",
      bs: "Allahu moj, Mi Tebe stavljamo pred njih i od Tebe zaštitu tražimo od njihovog zla!",
    },
  },
  {
    id: "hisnul_muslim_127",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for when you meet an adversary or a powerful ruler.",
      bs: "Dova kad se susretneš sa protivnikom ili moćnim vladarom",
    },
    arabic:
      "اللَّهُمَّ أَنْتَ عَضُدِي، وَأَنْتَ نَصِيرِي، بِكَ أَحُولُ وَبِكَ أَصُولُ، وَبِكَ أُقاتِلُ.",
    transliteration:
      "Allahumma anta AAadudee, wa-anta naseeree, bika ajoolu wabika asoolu wabika oqatil",
    translation: {
      en: "O Allah, You are my supporter and You are my helper, by You I move and by You I attack and by You I battle.",
      bs: "Allahu moj, Ti si moj oslonac i Ti si moj pomagač, Tobom se krećem, Tobom napadam i Tobom se borim.",
    },
  },
  {
    id: "hisnul_muslim_128",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for when you meet an adversary or a powerful ruler.",
      bs: "Dova kad se susretneš sa protivnikom ili moćnim vladarom",
    },
    arabic: "حَسْبُنا اللَّهُ وَنِعْمَ الْوَكِيلُ.",
    transliteration: "Hasbunal-lahu waniAAmal-wakeel.",
    translation: {
      en: "Allah is sufficient for us, and how fine a trustee He is.",
      bs: "Dovoljan nam je Allah i divan je On Gospodar!",
    },
  },
  {
    id: "hisnul_muslim_129",
    category: "hisnul_muslim",
    title: {
      en: "Invocations against the oppression of rulers",
      bs: "Dova protiv nepravde vladara",
    },
    arabic:
      "اللَّهُمَّ ربَّ السَّمَوَاتِ السَّبْعِ، وَرَبَّ الْعَرْشِ الْعَظِيمِ، كُنْ لِي جَاراً مِنْ فُلاَنِ بْنِ فُلاَنٍ، وَأَحْزَابِهِ مِنْ خَلاَئِقِكَ، أَنْ يَفْرُطَ عَلَيَّ أَحَدٌ مِنْهُمْ أَوْ يَطْغَى، عَزَّ جَارُكَ، وَجَلَّ ثَنَاؤُكَ، وَلاَ إِلَهَ إِلاَّ أَنْتَ.",
    transliteration:
      "Allaahumma rabbas-samaawaatis-sab'i, wa Rabbal-'Arshil-'Adheem, Kun lee jaaran min (here you mention the person's name) wa 'ahzabihi min khalaa'iqika, 'an yafruta 'alayya 'ahadun minhum 'aw yatghaa,'Azza jaaruka, wa jalla thanaa'uka, wa laa 'ilaaha 'illaa 'Anta.",
    translation: {
      en: "O Allah, Lord of the seven heavens, Lord of the Magnificent Throne, be for me a support against [such and such a person] and his helpers from among your creatures, lest any of them abuse me or do me wrong. Mighty is your patronage and glorious are your praises. There is none worthy of worship but you.",
      bs: "Allahu moj, Gospodaru sedam nebesa i Gospodaru Prijestolja veličanstvenog, budi mi zaštitnik od toga i toga, sina toga i toga, i družine njegove od stvorenja Tvojih, da niko od njih ne pretera protiv mene, il 'da nasilje ne učini. Snažna je zaštita Tvoja, i uzvišena je hvala Tvoja, i nema boga osim Tebe.",
    },
  },
  {
    id: "hisnul_muslim_130",
    category: "hisnul_muslim",
    title: {
      en: "Invocations against the oppression of rulers",
      bs: "Dova protiv nepravde vladara",
    },
    arabic:
      "اللَّهُ أَكْبَرُ، اللَّهُ أَعَزُّ مِنْ خَلْقِهِ جَمِيعاً، اللَّهُ أَعَزُّ مِمَّا أَخَافُ وَأَحْذَرُ، أَعُوذُ بِاللَّهِ الَّذِي لاَ إِلَهَ إِلاَّ هُوَ، الْمُمْسِكِ السَّمَوَاتِ السَّبْعِ أَنْ يَقَعْنَ عَلَى الْأَرْضِ إِلاَّ بِإِذْنِهِ، مِنْ شَرِّ عَبْدِكَ فُلاَنٍ، وَجُنُودِهِ وَأَتْبَاعِهِ وَأَشْيَاعِهِ، مِنْ الْجِنِّ وَالإِنْسِ، اللَّهُمَّ كُنْ لِي جَاراً مِنْ شَرِّهِمْ، جَلَّ ثَنَاؤُكَ وَعَزَّ جَارُكَ، وَتَبَارَكَ اسْمُكَ، وَلاَ إِلَهَ غَيْرُكَ ثلاثَ مرَّاتٍ.",
    transliteration:
      "Allaahu Akbar, Allaahu 'a'azzu min khalqihi jamee'an, Allaahu 'a'azzu mimmaa 'akhaafu wa 'ahdharu, 'a'oothu billaahil-lathee laa ilaaha illaa huwa, almumsikis-samaawaatis-sab'i 'an yaqa'na 'alaal-'ardhi 'illaa bi'ithnihi, min sharri 'abdika (name of the person) wa junoodihi wa 'atbaa'ihi wa ashyaa'ihi minal-jinni wal'insi, Allaahumma kun lee jaaran min sharrihim, Jalla thanaa'uka wa 'azza aaruka, wa tabaarakasmuka, wa laa ilaaha ghayruka.",
    translation: {
      en: "Allah is the Most Great, Mightier than all His creation. He is Mightier than what fear and dread. I seek refuge in Allah, Who there is none worthy of worship but Him. He is the One Who holds the seven heavens from falling upon the earth except by His command. [I seek refuge in You Allah] from the evil of Your slave [name of the person], and his helpers, his followers and his supporters from among the jinn and mankind. O Allah, be my support against their evil. Glorious Your praises and mighty is Your patronage. Blessed is Your Name, there is no true God but You. Recite three times in Arabic",
      bs: "Allah je najveći, Allah je moćniji od svih stvorenja Svojih. Allah je moćniji od onoga čega se bojim i pribojavam. Utječem se Allahom, osim Kojeg drugog boga nema, Koji drži sedam nebesa da na Zemlju, bez dozvole Njegove, ne padnu, od zla roba Tvoga ime nasilnika, i vojske njegove, i pristalica njegovih, i pomagača njegovih, od džina i ljudi. Allahu moj, budi mi zaštitnik od zla njihovog. Veličanstvena je hvala Tvoja, i moćna je zaštita Tvoja, i blagoslovljeno je ime Tvoje, i nema boga osim Tebe. Proučiti tri puta",
    },
  },
  {
    id: "hisnul_muslim_131",
    category: "hisnul_muslim",
    title: {
      en: "Invocation against an enemy",
      bs: "Dova protiv neprijatelja",
    },
    arabic:
      "اللَّهُمَّ مُنْزِلَ الْكِتَابِ، سَرِيعَ الْحِسَابِ، اهْزِمِ الأَحْزَابَ، اللَّهُمَّ اهزِمْهُمْ وَزَلْزِلْهُمْ.",
    transliteration:
      "Allahumma munzilal-kitab, sareeAAal-hisab, ihzimil-ahzab, allahummah-zimhum wazalzilhum.",
    translation: {
      en: "O Allah, Revealer of the Book, Swift at reckoning, defeat the confederates. O Allah, defeat them and convulse them.",
      bs: "Allahu moj, Koji objavljuješ Knjigu, Koji brzo svodiš račune, porazi ove saveznike! Allahu moj, porazi ih i potresi ih!",
    },
  },
  {
    id: "hisnul_muslim_132",
    category: "hisnul_muslim",
    title: {
      en: "What to say if you fear people may harm you",
      bs: "Šta reći ako se bojiš da bi ti ljudi mogli nauditi",
    },
    arabic: "اللَّهُمَّ اكْفِنِيهِمْ بِمَا شِئْتَ.",
    transliteration: "Allahummak-fineehim bima shi/.",
    translation: {
      en: "O Allah, protect me from them with what You choose.",
      bs: "Allahu moj, zaštiti me od njih onako kako Ti hoćeš.",
    },
  },
  {
    id: "hisnul_muslim_133",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for if you are stricken by in your faith",
      bs: "Dova za onoga koga je spopala sumnja u vjeru",
    },
    arabic: "يَسْتَعِيذُ بِاللَّهِ و يَنْتَهِي عَمَّا شك فِيهِ.",
    transliteration:
      "Say:) I seek refuge in Allah. (Then you should desist from doing what you are in doubt about.",
    translation: {
      en: "",
      bs: "Neka zatraži utočište kod Allaha da rekne: Euzu billahi mine-š-šejtani-r-radžim i neka prestane s onim što mu došaptava.",
    },
  },
  {
    id: "hisnul_muslim_134",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for if you are stricken by in your faith",
      bs: "Dova za onoga koga je spopala sumnja u vjeru",
    },
    arabic: "يَقُولُ: آمَنْتُ بِاللَّهِ وَرُسُلِهِ.",
    transliteration: "He should say: ( Amantu billahi warusulih.)",
    translation: {
      en: "He should say: I have believed in Allah and His Messenger.",
      bs: "Neka rekne: 'Vjerujem u Allaha i Poslanika Njegova.'",
    },
  },
  {
    id: "hisnul_muslim_135",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for if you are stricken by in your faith",
      bs: "Dova za onoga koga je spopala sumnja u vjeru",
    },
    arabic:
      "يَقْرَأُ قَوْلَهُ تَعَالَى: ﴿هُوَ الْأوَّلُ وَالْآخِرُ وَالظّاهِرُ وَالْباطِنُ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ﴾.",
    transliteration:
      "He should also recite the following verse: ( Huwa al-awwalu, waal-akhiru, waalththahiru waalbatinu wahuwa bikulli shayin AAaleem)",
    translation: {
      en: "He should also recite the following verse: He is The First and The Last, Aththahir and Al-Batin and He knows well all things.ththahir: Indicates the greatness of His attributes and the insignificance of every single creation in respect to His greatness and Highness, for He is above all of His creation as regards His essence and attributes.Al-Batin: Indicates His awareness and knowledge of all secrets, of that which is in the hearts and the most intimate of things just as it indicates His closeness and nearness to all in a manner which befits His majesty.",
      bs: "On je Prvi i Posljednji, i Vidljivi i Nevidljivi; i On zna sve! Ez-Zahir: ukazuje na veličinu Njegovih osobina i neznatnost svakog stvorenja u odnosu na Njegovu veličinu i Visost, jer On je iznad svakog Svog stvorenja po Svome biću i osobina. El-Batin: ukazuje na Njegovu upućenost u sve tajne, ono što je u srcima i najintimnije stvari, kao što ukazuje na Njegovu bliskost svemu na način koji dolikuje Njegovoj veličini.",
    },
  },
  {
    id: "hisnul_muslim_136",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for the setting of a debt",
      bs: "Dova za vraćanje duga",
    },
    arabic:
      "اللَّهُمَّ اكْفِنِي بِحَلاَلِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكِ عَمَّنْ سِوَاكَ.",
    transliteration:
      "Allahummak-finee bihalalika AAan haramik, wa-aghninee bifadlika AAamman siwak.",
    translation: {
      en: "O Allah, make what is lawful enough for me, as opposed to what is unlawful, and spare me by Your grace, of need of others.",
      bs: "Allahu moj, učini da mi ono što si Ti dozvolio bude dovoljno da ne činim ono što si Ti zabranio, i učini me Svojom dobrotom neovisnim o bilo kome osim o Tebi.",
    },
  },
  {
    id: "hisnul_muslim_137",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for the setting of a debt",
      bs: "Dova za vraćanje duga",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ.",
    transliteration:
      "Allahumma innee aAAoothu bika minal-hammi walhuzn, walAAajzi walkasal, walbukhl, waljubn, wadalAAid-dayni waghalabatir-rijal",
    translation: {
      en: "O Allah, I take refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being over powered by men.",
      bs: "Allahu moj, utječem Ti se od brige i tuge, od nemoći i ljenosti, od škrtosti i kukavičluka, od tereta duga i da me ljudi ne nadvladaju.",
    },
  },
  {
    id: "hisnul_muslim_138",
    category: "hisnul_muslim",
    title: {
      en: "Invocation against the distractions of Satan during the prayer and recitation of the Quran",
      bs: "Dova protiv šejtanskih vesvesa u namazu i pri učenju Kur'ana",
    },
    arabic:
      "أَعُوذُ بِاللَّهِ مِنَ الشَّيطَانِ الرَّجِيمِ، وَاتْفُلْ عَلَى يَسَارِكَ ثلاثاً.",
    transliteration: "",
    translation: {
      en: "othman Ibn Al-AAas narrated: I said ‘O Messenger of Allah, verily the devil comes between me and my prayer and recitation making me confused’ The Messenger of Allah replied ‘That is a devil called Khanzab, so if you sense his presence then seek refuge in Allah from him and spit A form of spitting comprising mainly of air with little spittle on your left side three times.",
      bs: "Otman b. Ebi-l-'As, r.a., veli: \"Rekao sam: 'Allahov Poslaniče, šejtan se ispriječio između mene i mog namaza i učenja Kur'ana, pa me u tome brka.' Na to je Allahov Poslanik, s.a.v.s., rekao: 'To je šejtan po imenu Hinzeb. Pa kada ga osjetiš, zatraži utočište kod Allaha od njega pljucni na svoju lijevu stranu tri puta.'\"",
    },
  },
  {
    id: "hisnul_muslim_139",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for when you find something becoming difficult for you",
      bs: "Dova kad ti nešto postane teško",
    },
    arabic:
      "اللَّهُمَّ لاَ سَهْلَ إِلاَّ مَا جَعَلْتَهُ سَهْلاً، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلاً.",
    transliteration:
      "Allahumma la sahla illa ma jaAAaltahu sahla, wa-anta tajAAalul- hazana in shi'ta sahla.",
    translation: {
      en: "O Allah, there is no ease except in that which You have made easy, and You make the difficulty, if You wish, easy.",
      bs: "Allahu moj, nema lahkog osim onoga što Ti učiniš lahkim, a Ti i tugu, kad hoćeš, učiniš lahkom.",
    },
  },
  {
    id: "hisnul_muslim_140",
    category: "hisnul_muslim",
    title: {
      en: "What to say and do if you commit a sin",
      bs: "Šta reći i uraditi ako počiniš grijeh",
    },
    arabic:
      "مَا مِنْ عَبْدٍ يُذنِبُ ذَنْباً فَيُحْسِنُ الطُّهُورَ، ثُمَّ يَقُومُ فَيُصَلِّي رَكْعَتَيْنِ، ثُمَّ يَسْتَغْفِرُ اللَّهَ إِلاَّ غَفَرَ اللَّهُ لَهُ.",
    transliteration: "",
    translation: {
      en: "Any servant who commits a sin and as a result, performs ablution, prays two units of prayer i.e. two rakAAas and then seeks Allah’s forgiveness, Allah would forgive him.",
      bs: "Nema tog roba koji počini grijeh, pa lijepo uzme abdest, potom ustane i klanja dva rekata, a zatim zamoli Allaha za oprost, a da mu Allah neće oprostiti.",
    },
  },
  {
    id: "hisnul_muslim_141",
    category: "hisnul_muslim",
    title: {
      en: "Invocations against the Devil and his promptings",
      bs: "Dova protiv šejtana i njegovih nagovaranja",
    },
    arabic: "الْاسْتِعَاذَةُ بِاللَّهِ مِنْهُ.",
    transliteration: "",
    translation: {
      en: "Seeking refuge from him.",
      bs: "Traženje zaštite od Allaha protiv njega.",
    },
  },
  {
    id: "hisnul_muslim_142",
    category: "hisnul_muslim",
    title: {
      en: "Invocations against the Devil and his promptings",
      bs: "Dova protiv šejtana i njegovih nagovaranja",
    },
    arabic: "الْأَذَانُ",
    transliteration: "",
    translation: {
      en: "The Adhaan [call to prayer].",
      bs: "Ezan.",
    },
  },
  {
    id: "hisnul_muslim_143",
    category: "hisnul_muslim",
    title: {
      en: "Invocations against the Devil and his promptings",
      bs: "Dova protiv šejtana i njegovih nagovaranja",
    },
    arabic: "الْأَذْكَارُ وَقِرَاءَةُ الْقُرْآنِ.",
    transliteration: "",
    translation: {
      en: "Recitation of the Quran and the authentic texts of remembrance and supplications.e.g. ‘Do not make your homes like the graveyards, indeed the devils flee from the house in which soorat Al-Baqarah has been read’ related by Muslim 1/539, also supplication and remembrance for the morning & evening, before sleep, when getting up, entering and leaving the toilet, entering and leaving the mosque, the recitation of ayat Al-kursiyy and the last two verses of soorat Al-Baqarah before sleeping, the athan…etc.",
      bs: "Učenje Kur'ana i zikrova...",
    },
  },
  {
    id: "hisnul_muslim_144",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for when something you dislike happens, or for when you fail to achieve what you attempt to do",
      bs: "Dova kad ti se dogodi nešto što ne voliš ili kad ne uspiješ u onome što želiš",
    },
    arabic: "قَدَرُ اللَّهُ وَمَا شَاءَ فَعَلَ.",
    transliteration: "Qaddaral-lah, wama shaa faAAal.",
    translation: {
      en: "Allah has decreed and what He wills, He does.for verily ‘If’ lets in the work of the devil.",
      bs: "Allah je tako odredio i On čini šta hoće.",
    },
  },
  {
    id: "hisnul_muslim_145",
    category: "hisnul_muslim",
    title: {
      en: "Congratulations for new parents and how they should respond",
      bs: "Čestitka roditeljima novorođenčeta i odgovor na nju",
    },
    arabic:
      "بَارَكَ اللَّهُ لَكَ فِي الْمَوْهُوبِ لَكَ، وَشَكَرْتَ الْوَاهِبَ، وَبَلَغَ أَشُدَّهُ، وَرُزِقْتَ بِرَّهُ. وَيَرُدُّ عَلَيْهِ الْمُهَــــــنَّأُ فَيَقُولُ: بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ، وَجَزَاكَ اللَّهُ خَيْراً، وَرَزَقَكَ اللَّهُ مِثْلَهُ، وَأَجْزَلَ ثَوَابَكَ.",
    transliteration:
      "Baarakallaahu laka fil-mawhoobi laka, wa shakartal-waahiba, wa balagha 'ashuddahu, wa ruzigta birrahu. The reply of the person being congratulated is to say: Baarakallahu laka wa baaraka 'alayka, wa jazaakallaahu khayran, wa razaqakallaahu mithlahu, wa 'ajzala thawaabaka.",
    translation: {
      en: "May Allah bless you with His gift to you and may you the new parent give thanks, may the child reach the maturity of years, and may you be granted its righteousness. The reply of the person being congratulated is to say: May Allah bless you, and shower His blessings upon you, and may Allah reward you well and bestow upon you its like and reward you abundantly",
      bs: "Neka ti Allah blagoslovi onoga koga ti je darovao, i da budeš zahvalan Darovaocu, da doživi zrelost i da tebi bude podaren njegov dobročinstvo! Onaj kome se čestita odgovara: Neka ti Allah uzvrati blagoslovom i na tebe blagoslov spusti! Neka te Allah dobrim nagradi, i istim te opskrbio, i nagradu ti uvećao!",
    },
  },
  {
    id: "hisnul_muslim_146",
    category: "hisnul_muslim",
    title: {
      en: "How to seek Allah's protection for children",
      bs: "Kako tražiti Allahovu zaštitu za djecu",
    },
    arabic:
      "كَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم يُعَوِّذُ الحَسَنَ وَالحُسَينَ رضي الله عنهما أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لاَمَّةٍ.",
    transliteration:
      "Ibn AAabbas related that the Messenger of Allah used to commend Al-Hasan and Al-Husayn to Allah’s protection, saying:(OAAeethukuma bikalimatil-lahit-tammah, min kulli shaytanin wahammah, wamin kulli AAaynin lammah.)",
    translation: {
      en: "Ibn AAabbas related that the Messenger of Allah used to commend Al-Hasan and Al-Husayn to Allah’s protection, saying:I commend you two to the protection of Allah’s perfect words from every devil, vermin, and every evil eye.",
      bs: "Tražim zaštitu za vas dvoje Allahovim savršenim riječima od svakog šejtana i onoga što truje, i od svakog oka urekljivog.",
    },
  },
  {
    id: "hisnul_muslim_147",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for visiting the sick",
      bs: "Dova pri posjeti bolesniku",
    },
    arabic: "لاَ بأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ.",
    transliteration: "La ba'sa tahoorun in shaal-lah.",
    translation: {
      en: "Never mind, may it the sickness be a purification, if Allah wills.",
      bs: "Nije to ništa! To je, ako Bog da, čišćenje od grijeha.",
    },
  },
  {
    id: "hisnul_muslim_148",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for visiting the sick",
      bs: "Dova pri posjeti bolesniku",
    },
    arabic:
      "أَسْأَلُ اللَّهَ الْعَظيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفيَكَ سبع مرات.",
    transliteration:
      "Asalul-lahal-AAatheem rabbal-AAarshil-AAatheem an yashfeek (7times).",
    translation: {
      en: "I ask Allah The Supreme, Lord of the magnificent throne to cure you’.7times he the sick person will be cured.",
      bs: "Molim Allaha Velikoga, Gospodara Prijestolja velikog, da te izliječi! sedam puta",
    },
  },
  {
    id: "hisnul_muslim_149",
    category: "hisnul_muslim",
    title: {
      en: "The reward for visiting the sick",
      bs: "Nagrada za posjetu bolesniku",
    },
    arabic:
      "قَالَ النَّبِيُّ صلى الله عليه وسلم: إِذَا عَادَ الرَّجُلُ أَخَاهُ الْمُسْلِمَ مَشَى فِي خِرَافَةِ الْجَنَّةِ حَتَّى يَجْلِسَ، فَإِذَا جَلَسَ غَمَرَتْهُ الرَّحْمَةُ، فَإِنْ كَانَ غُدْوَةً صَلَّى عَلَيْهِ سَبْعُونَ أَلْفَ مَلَكٍ حَتَّى يُمْسِيَ، وَإِنْ كَانَ مَسَاءً صَلَّى عَلَيْهِ سَبْعُونَ أَلْفَ مَلَكٍ حَتَّى يُصْبِحَ.",
    transliteration: "",
    translation: {
      en: "Ali Ibn Abee Talib related that he heard the Messenger of Allah say: ‘If a man calls on his sick Muslim brother, it is as if he walks reaping the fruits of Paradise until he sits, and when he sits he is showered in mercy, and if this was in the morning, seventy thousand angles send prayers upon him until the evening, and if this was in the evening, seventy thousand angles send prayers upon him until the morning.",
      bs: "Kada čovjek posjeti svoga brata muslimana bolesnika, on bere džennetske plodove sve dok ne sjedne. A kada sjedne, obuhvati ga milost. Ako je to bilo izjutra, na njega sedamdeset hiljada meleka donosi salavat sve do noći, a ako je bilo navečer, na njega sedamdeset hiljada meleka donosi salavat sve do jutra.",
    },
  },
  {
    id: "hisnul_muslim_150",
    category: "hisnul_muslim",
    title: {
      en: "Invocations of the terminal ill",
      bs: "Dova onoga ko gubi nadu u život",
    },
    arabic:
      "اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَأَلْحِقْنِي بِالرَّفِيقِ الْأَعْلَى.",
    transliteration:
      "Allahummagh-fir lee, warhamnee wa-alhiqnee birrafeeqil-aAAla.",
    translation: {
      en: "‘O Allaah, forgive me, have mercy upon me and unite me with the highest companions",
      bs: "Allahu moj, oprosti mi i smiluj mi se i pridruži me Uzvišenom društvu.",
    },
  },
  {
    id: "hisnul_muslim_151",
    category: "hisnul_muslim",
    title: {
      en: "Invocations of the terminal ill",
      bs: "Dova onoga ko gubi nadu u život",
    },
    arabic:
      "جَعَلَ النَّبِيُّ صلى الله عليه وسلم عِنْدَ مَوْتِهِ يُدْخِلُ يَدَيْهِ فِي الْمَاءِ فَيَمْسَحُ بِهِمَا وَجْهَهُ، وَيَقُولُ: لاَ إِلَهَ إِلاَّ اللَّهُ إِنَّ لِلْمَوْتِ سَكَرَاتٍ.",
    transliteration:
      "'Aa.ishah (radhi-yAllaahu 'anhaa) related that The Prophet (sal-Allaahu 'alayhe wa sallam) [during his illness in which he passed away] would dip his hands in water and then he would wipe his face and say:[La ilaha illal-lah, inna lilmawti lasakarat.] ‘None has the right to be worshipped except Allaah, death does indeed contain agony.’",
    translation: {
      en: "'Aa.ishah radhi-yAllaahu 'anhaa related that The Prophet sal-Allaahu 'alayhe wa sallam [during his illness in which he passed away] would dip his hands in water and then he would wipe his face and say: ‘None has the right to be worshipped except Allaah, death does indeed contain agony.’",
      bs: "Aiša, r.a., prenosi da je Poslanik, s.a.v.s., pred smrt umakao ruke u vodu i njima potirao lice govoreći: Nema boga osim Allaha! Zaista smrt ima svoje muke agoniju.",
    },
  },
  {
    id: "hisnul_muslim_152",
    category: "hisnul_muslim",
    title: {
      en: "Invocations of the terminal ill",
      bs: "Dova onoga ko gubi nadu u život",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ وَاللَّهُ أَكْبَرُ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لاَ إِلَهَ إِلاَّ اللَّهُ لَهُ المُلْكُ وَلَهُ الْحَمْدُ، لاَ إِلَهَ إِلاَّ اللَّهُ وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ.",
    transliteration:
      "La ilaha illal-lah, wallahu akbar, la ilaha illal-lahu wahdah, la shareeka lah, la ilaha illal-lahu lahul-mulku walahul-hamd, la ilaha illal-lah, wala hawla wala quwwata illa billah.",
    translation: {
      en: "None has the right to be worshipped except Allah and Allah is the greatest.None has the right to be worshipped except Allah, alone.None has the right to be worshipped except Allah, alone, without partner.None has the right to be worshipped except Allah, to Him belongs all sovereignty and praise. None has the right to be worshipped except Allah and there is no might and no power except with Allah.",
      bs: "Nema boga osim Allaha i Allah je najveći. Nema boga osim Allaha Jedinog. Nema boga osim Allaha Jedinog, Koji nema saučesnika. Nema boga osim Allaha, Njemu pripada vlast i Njemu pripada hvala. Nema boga osim Allaha, i nema snage ni moći osim kod Allaha.",
    },
  },
  {
    id: "hisnul_muslim_153",
    category: "hisnul_muslim",
    title: {
      en: "What to encourage the dying person to say",
      bs: "Na šta podsticati onoga ko je na samrti",
    },
    arabic:
      "مَنْ كَانَ آخِرُ كَلاَمِهِ لاَ إِلَهَ إِلاَّ اللَّهُ دَخَلَ الْجَنَّةَ.",
    transliteration:
      "i.e. those around the sick should instruct and encourage him to say the shahadah. (He whose last words are: (La ilaha illal-lah.) will enter Paradise.)",
    translation: {
      en: "i.e. those around the sick should instruct and encourage him to say the shahadah. He whose last words are: None has the right to be worshipped except Allah. will enter Paradise.",
      bs: "Onaj čije zadnje riječi budu: 'La ilahe illellah' Nema boga osim Allaha, ući će u Džennet.",
    },
  },
  {
    id: "hisnul_muslim_154",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for when tragedy strikes",
      bs: "Dova kad nekoga zadesi nesreća",
    },
    arabic:
      "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي، وَأَخْلِفْ لِي خَيْرَاً مِنْهَا.",
    transliteration:
      "Inna lillahi wa-inna ilayhi rajiAAoon, allahumma/- jurnee fee museebatee wakhluf lee khayran minha.",
    translation: {
      en: "To Allah we belong and unto Him is our return.O Allah, recompense me for my affliction and replace it for me with something better.",
      bs: "Svi smo Allahovi i Njemu se vraćamo! Allahu moj, nagradi me u ovoj mojoj nesreći i nadoknadi mi boljim od nje!",
    },
  },
  {
    id: "hisnul_muslim_155",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for closing the eyes of the dead",
      bs: "Dova pri zatvaranju očiju umrlog",
    },
    arabic:
      "اللَّهُمَّ اغْفِرْ لِفُلاَنٍ بِاسْمِهِ وَارْفَعْ دَرَجَتَهُ فِي الْمَهْدِيِّينَ، وَاخْلُفْهُ فِي عَقِبِهِ فِي الْغَابِرِينَ، وَاغْفِرْ لَنَا وَلَهُ يَا رَبَّ الْعَالَمِينَ، وَافْسَحْ لَهُ فِي قَبْرِهِ، وَنَوِّرْ لَهُ فِيهِ.",
    transliteration:
      "Allahummagh-fir li-name the dead- warfaAA darajatahu fil-mahdiyyeen, wakhlufhu fee AAaqibihi fil-ghabireen, waghfir lana walahu ya rabbal-AAalameen wafsah lahu fee qabrih, wanawwir lahu feeh.",
    translation: {
      en: "O Allah, forgive -here the name of the deceased is mentioned- and raise his rank among the rightly guided, and be a successor to whom he has left behind, and forgive us and him O Lord of the worlds. Make spacious his grave and illuminate it for him.A successor: one who succeeds another due to the latter’s absence or death. This is the correct meaning of the word khaleefah; thus, it is incorrect to believe that Adam is the khaleefah vicegerent, as is commonly translated of Allah on earth because Allah is never absent, and will never die. This supplication proves the correct understanding of this term and shows that Allah succeeds us and guards whom we leave behind when we die or are absent also refer to supplication #198.",
      bs: "Allahu moj, oprosti ime umrlog i uzdigni stepen njegov među upućenim, i budi Zastupnik njegovima koje je ostavio, i oprosti nama i njemu, o Gospodaru svjetova! I učini mu kabur prostranim i osvijetli mu ga.",
    },
  },
  {
    id: "hisnul_muslim_156",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for the dead in the Funeral prayer",
      bs: "Dova za umrlog na dženazi",
    },
    arabic:
      "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ، وَعَافِهِ، وَاعْفُ عَنْهُ، وَأَكْرِمْ نُزُلَهُ، وَوَسِّعْ مُدْخَلَهُ، وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ، وَنَقِّهِ مِنَ الْخَطَايَا كَمَا نَقَّيْتَ الثَّوْبَ الأَبْيَضَ مِنَ الدَّنَسِ، وَأَبْدِلْهُ دَاراً خَيْراً مِنْ دَارِهِ، وَأَهْلاً خَيْراً مِنْ أَهْلِهِ، وَزَوْجَاً خَيْراً مِنْ زَوْجِهِ، وَأَدْخِلْهُ الْجَنَّةَ، وَأَعِذْهُ مِنْ عَذَابِ القَبْرِ [وَعَذَابِ النَّارِ].",
    transliteration:
      "Allahummagh-fir lahu warhamh, waAAafihi, waAAfu AAanh, wa-akrim nuzulah, wawassiAA mudkhalah, waghsilhu bilma-i waththalji walbarad, wanaqqihi minal-khataya kama naqqaytath-thawbal-abyada minad-danas, wa-abdilhu daran khayran min darih, wa-ahlan khayran min ahlih wazawjan khayran min zawjih, wa-adkhilhul-jannah, wa-aAAithhu min AAathabil-qabr, waAAathabin-nar",
    translation: {
      en: "O Allah, forgive and have mercy upon him, excuse him and pardon him, and make honourable his reception. Expand his entry, and cleanse him with water, snow, and ice, and purify him of sin as a white robe is purified of filth. Exchange his home for a better home, and his family for a better family, and his spouse for a better spouse. Admit him into the Garden, protect him from the punishment of the grave and the torment of the Fire.",
      bs: "Allahu moj, oprosti mu i smiluj mu se, i grijehe mu pobriši i propuste zanemari, i boravište njegovo plemenitim časnim učini, i ulazak njegovim širokim napravi, i očisti ga vodom, snijegom i gradom, i očisti ga od grijeha kao što bijelu odjeću čistiš od prljavštine! I zamijeni mu kuću boljom od kuće njegove, i porodicu boljom od porodice njegove, i supružnika boljim od supružnika njegovog, i uvedi ga u Džennet, i zaštiti ga kazne u kaburu i vatre džehennemske!",
    },
  },
  {
    id: "hisnul_muslim_157",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for the dead in the Funeral prayer",
      bs: "Dova za umrlog na dženazi",
    },
    arabic:
      "اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا، وَشَاهِدِنَا وَغَائِبِنَا، وَصَغِيرِنَا وَكَبيرِنَا، وَذَكَرِنَا وَأُنْثَانَا. اللَّهُمَّ مَنْ أَحْيَيْتَهُ مِنَّا فَأَحْيِهِ عَلَى الْإِسْلاَمِ، وَمَنْ تَوَفَّيْتَهُ مِنَّا فَتَوَفَّهُ عَلَى الإِيمَانِ، اللَّهُمَّ لاَ تَحْرِمْنَا أَجْرَهُ، وَلاَ تُضِلَّنَا بَعْدَهُ.",
    transliteration:
      "Allahummagh-fir lihayyina wamayyitina washahidina, wagha-ibina, wasagheerina wakabeerina, wathakarina wa-onthana. Allahumma man ahyaytahu minna fa-ahyihi AAalal-islam, waman tawaffaytahu minna fatawaffahu AAalal-eeman, allahumma la tahrimna ajrah, wala tudillana baAAdah.",
    translation: {
      en: "O Allah, forgive our living and our dead, those present and those absent, our young and our old, our males and our females. O Allah, whom amongst us You keep alive, then let such a life be upon Islam, and whom amongst us You take unto Yourself, then let such a death be upon faith. O Allah, do not deprive us of his reward and do not let us stray after him.",
      bs: "Allahu moj, oprosti našim živima i našim mrtvima, našim prisutnima i našim odsutnima, našim mlađima i našim starima, našim muškarcima i našim ženama! Allahu moj, onoga koga poživiš među nama, učini da živi u islamu, a onoga koga usmrtiš, učini da umre u imanu! Allahu moj, ne uskrati nam nagrade za strpljivost na gubitku niti nas stavi u iskušenje poslije njega!",
    },
  },
  {
    id: "hisnul_muslim_158",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for the dead in the Funeral prayer",
      bs: "Dova za umrlog na dženazi",
    },
    arabic:
      "اللَّهُمَّ إِنَّ فُلاَنَ بْنَ فُلاَنٍ فِي ذِمَّتِكَ، وَحَبْلِ جِوَارِكَ، فَقِهِ مِنْ فِتْنَةِ الْقَبْرِ، وَعَذَابِ النَّارِ، وَأَنْتَ أَهْلُ الْوَفَاءِ وَالْحَقِّ، فَاغْفِرْ لَهُ وَارْحَمْهُ إِنَّكَ أَنْتَ الغَفُورُ الرَّحيمُ.",
    transliteration:
      "Allahumma inna -name the dead- fee thimmatik, wahabli jiwarik, faqihi min fitnatil-qabr waAAathabin-nar, wa-anta ahlul-wafa/, walhaq, faghfir lahu warhamh, innaka antal-ghafoorur-raheem.",
    translation: {
      en: "O Allah, so-and-so is under Your care and protection so protect him from the trial of the grave and torment of the Fire. Indeed You are faithful and truthful. Forgive and have mercy upon him, surely You are The Oft-Forgiving, The Most-Merciful.",
      bs: "Allahu moj, taj i taj, sin toga i toga, je u Tvojoj zaštiti i u dosegu Tvoje blizine, pa ga sačuvaj kaburskog iskušenja i džehennemske kazne! Ti si Dostojan da ispuniš obećanje i Ti si Istina, pa mu oprosti i smiluj mu se, jer Ti si, zaista, Onaj Koji mnogo prašta i Koji je milostiv!",
    },
  },
  {
    id: "hisnul_muslim_159",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for the dead in the Funeral prayer",
      bs: "Dova za umrlog na dženazi",
    },
    arabic:
      "اللَّهُمَّ عَبْدُكَ وَابْنُ أَمَتِكَ احْتَاجَ إِلَى رَحْمَتِكَ، وَأَنْتَ غَنِيٌّ عَنْ عَذَابِهِ، إِنْ كَانَ مُحْسِناً فَزِدْ فِي حَسَنَاتِهِ، وَإِنْ كَانَ مُسِيئاً فَتَجَاوَزْ عَنْهُ.",
    transliteration:
      "Allahumma AAabduka wabnu amatik, ihtaja ila rahmatik, wa-anta ghaniyyun AAan AAathabih, in kana muhsinan fazid fee hasanatih, wa-in kana museean fatajawaz AAanh.",
    translation: {
      en: "O Allah, Your servant and the son of Your maidservant is in need of Your mercy and You are without need of his punishment. If he was righteous then increase his reward and if he was wicked then look over his sins.",
      bs: "Allahu moj, rob Tvoj i sin robinje Tvoje potrebuje Tvoju milost, a Tebi ne treba kazna njegova. Ako bude dobročinitelj, povećaj mu dobra djela, a ako bude griješnik, pređi preko grijeha njegovih!",
    },
  },
  {
    id: "hisnul_muslim_160",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for a child in the Funeral prayer",
      bs: "Dova za dijete na dženazi",
    },
    arabic:
      "اللَّهُمَّ أَعِذْهُ مِنْ عَذَابِ القَبْرِ وإن قال: اللَّهُمَّ اجْعَلْهُ فَرَطاً وَذُخْراً لِوَالِدَيْهِ، وَشَفِيعاً مُجَاباً، اللَّهُمَّ ثَقِّلْ بِهِ مَوَازِينَهُمَا، وَأَعْظِمْ بِهِ أُجورَهُمَا، وَأَلْحِقْهُ بِصَالِحِ الْمُؤْمِنِينَ، وَاجْعَلْهُ فِي كَفَالَةِ إِبْرَاهِيمَ، وَقِهِ بِرَحْمَتِكَ عَذَابَ الْجَحِيمِ، وَأَبْدِلْهُ دَاراً خَيْراً مِنْ دَارِهِ، وَأَهْلاً خَيْراً مِنْ أَهْلِهِ، اللَّهُمَّ اغْفِرْ لِأَسْلاَفِنَا، وَأَفْرَاطِنَا، وَمَنْ سَبَقَنَا بِالْإِيمَانِ إن قال ذلك فَحَسَنٌ.",
    transliteration:
      "Allaahumma 'a'ith-hu min 'athaabil-qabri.) [or say:](Allahummaj-AAalhu faratan, wathukhran liwalidayh, washafeeAAan mujaban. Allahumma thaqqil bihi mawazeenahuma wa-aAAthim bihi ojoorahuma, wa-alhiqhu bisalihil-mu'mineen, wajAAalhu fee kafalati Ibraheem, waqihi birahmatika AAathabal-jaheem, wa 'abdilhu daaran khayran min daarihi, wa 'ahlan khayran min 'ahlihi, Allaahum-maghfir li'aslaafinaa, wa afraatinaa wa man sabaqanaa bil'eemaan",
    translation: {
      en: "O Allah, protect him from the torment of the grave . [it is also good to say] O Allah, make him a precursor, a forerunner and a treasure for his parents and an answered intercessor. O Allah, make him weigh heavily in their scales of good and magnify their reward. Make him join the righteous of the believers. Place him in the care of Ibrahim. Save him by Your mercy from the torment of Hell. Give him a home better than his home and a family better than his family. O Allah, forgive those who have gone i.e. passed away before us, our children lost by death, and those who have preceded us in Faith.",
      bs: "Allahu moj, sačuvaj ga kaburske azaba! ili: Allahu moj, učini ga prethodnicom i zalogom njegovim roditeljima, i učini ga zagovornikom čiji se zagovor prima. Allahu moj, otežaj njime vage njihovih dobrih djela i uvećaj njime njihove nagrade, i pridruži ga dobrim vjernicima, i stavi ga pod zaštitu Ibrahimovu, i sačuvaj ga Svojom milošću vatre džehennemske, i zamijeni mu kuću boljom od njegove kuće, i porodicu boljom od njegove porodice! Allahu moj, oprosti našim precima i potomcima i onima koji su nas pretekli u vjerovanju!",
    },
  },
  {
    id: "hisnul_muslim_161",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for a child in the Funeral prayer",
      bs: "Dova za dijete na dženazi",
    },
    arabic: "اللَّهُمَّ اجْعَلْهُ لَنَا فَرَطاً، وَسَلَفاً، وَأَجْراً.",
    transliteration: "Allahummaj-AAalhu lana farata, wasalafan wa-ajra.",
    translation: {
      en: "O Allah, make him for us a precursor,a forerunner and a cause of reward",
      bs: "Allahu moj, učini nam ga prethodnicom, pretečom i nagradom!",
    },
  },
  {
    id: "hisnul_muslim_162",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for the bereaved",
      bs: "Dova za ožalošćenog (tazija)",
    },
    arabic:
      "إِنَّ للَّهِ مَا أَخَذَ، وَلَهُ مَا أَعْطَى، وَكُلُّ شَيْءٍ عِنْدَهُ بِأَجَلٍ مُسَمَّى... فَلْتَصْبِرْ وَلْتَحْتَسِبْ. وَإِنْ قَالَ: أَعْظَمَ اللَّهُ أَجْرَكَ، وَأَحْسَنَ عَزَاءَكَ، وَغَفَرَ لِمَيِّتِكَ فَحَسَنٌ.",
    transliteration:
      "Inna lillahi ma akhath, walahu ma aAAta, wakullu shayin AAindahu bi-ajalin musamma…faltasbir waltahtasib.",
    translation: {
      en: "Verily to Allah, belongs what He took and to Him belongs what He gave, and everything with Him has an appointed time…and then he ordered for her to be patient and hope for Allah’s reward.The words faltasbir waltahtasib are commands in the feminine 3rd person form, so they will need to be changed in respect to whom is being addressed.",
      bs: "Zaista Allahu pripada ono što je uzeo i Njegovo je ono što je dao, i sve je kod Njega do roka određenog... pa strpi se i nadaj se nagradi. Ili: Neka ti Allah poveća nagradu tebi i uljepša tvoju utjehu i neka oprosti tvom umrlom.",
    },
  },
  {
    id: "hisnul_muslim_163",
    category: "hisnul_muslim",
    title: {
      en: "Invocation to be recited when placing the dead in his grave",
      bs: "Dova pri spuštanju umrlog u kabur",
    },
    arabic: "بِسْمِ اللَّهِ وَعَلَى سُنَّةِ رَسُولِ اللَّهِ.",
    transliteration: "Bismil-lahi waAAala sunnati rasoolil-lah.",
    translation: {
      en: "In the name of Allah and upon the sunnah of the Messenger of Allah.",
      bs: "U ime Allaha i u skladu sa sunnetom Allahova Poslanika.",
    },
  },
  {
    id: "hisnul_muslim_164",
    category: "hisnul_muslim",
    title: {
      en: "Invocation to be recited after burying the dead",
      bs: "Dova nakon zagrtanja kabura",
    },
    arabic: "اللَّهُمَّ اغْفِرْ لَهُ، اللَّهُمَّ ثَبِّتْهُ.",
    transliteration: "Allaahum-maghfir lahu Allaahumma thabbithu",
    translation: {
      en: "O Allah, forgive him. O Allah, strengthen him",
      bs: "Allahu moj, oprosti mu! Allahu moj, učvrsti ga!",
    },
  },
  {
    id: "hisnul_muslim_165",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for visiting the graves",
      bs: "Dova pri posjeti mezarju",
    },
    arabic:
      "السَّلاَمُ عَلَيْكُمْ أَهْلَ الدِّيَارِ، مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ، وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لاَحِقُونَ، [وَيَرْحَمُ اللَّهُ الْمُسْتَقدِمِينَ مِنَّا وَالْمُسْتأْخِرِينَ] أَسْاَلُ اللَّهَ لَنَا وَلَكُمُ الْعَافِيَةَ.",
    transliteration:
      "Assalamu AAalaykum ahlad-diyari minal-mu/mineena walmuslimeen, wa-inna in shaal-lahu bikum lahiqoon, nas-alul-laha lana walakumul-AAafiyah.",
    translation: {
      en: "Peace be upon you all, O inhabitants of the graves, amongst the believers and the Muslims. Verily we will, Allah willing, be united with you, we ask Allah for well-being for us and you.",
      bs: "Mir vama, stanovnici staništa ovih, od vjernika i muslimana! Mi ćemo se, ako Bog da, vama priključiti! Neka se Allah smiluje i našim i vašim prethodnicima, kao i potomcima! Molim Allaha da i nama i vama oprosti!",
    },
  },
  {
    id: "hisnul_muslim_166",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for when the wind blows",
      bs: "Dova kad puše vjetar",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْــــــأَلُكَ خَيْرَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّهَا.",
    transliteration:
      "Allahumma innee as-aluka khayraha wa-aAAoothu bika min sharriha.",
    translation: {
      en: "O Allah, I ask You for it’s goodness and I take refuge with You from it’s evil.",
      bs: "Allahu moj, molim Te za dobro njegovo vjetra, a utječem Ti se od zla njegova!",
    },
  },
  {
    id: "hisnul_muslim_167",
    category: "hisnul_muslim",
    title: {
      en: "Invocations for when the wind blows",
      bs: "Dova kad puše vjetar",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا، وَخَيْرَ مَا فِيهَا، وَخَيْرَ مَا أُرْسِلَتْ بِهِ، وَأَعُوذُ بِكَ مِنْ شَرِّهَا، وَشَرِّ مَا فِيهَا، وَشَرِّ مَا أُرْسِلَتْ بِهِ.",
    transliteration:
      "Allahumma innee as-aluka khayraha wakhayra ma feeha, wakhayra ma orsilat bih, wa-aAAoothu bika min sharriha, washarri ma feeha washarri ma orsilat bih.",
    translation: {
      en: "O Allah, I ask You for it’s goodness, the good within it, and the good it was sent with, and I take refuge with You from it’s evil, the evil within it, and from the evil it was sent with.",
      bs: "Allahu moj, molim Te za dobro njegovo, i za dobro onoga što nosi u sebi, i za dobro onoga s čime je poslat, a utječem Ti se od zla njegova, i zla onoga što nosi u sebi, i zla onoga s čime je poslat!",
    },
  },
  {
    id: "hisnul_muslim_168",
    category: "hisnul_muslim",
    title: { en: "Invocation for when it thunder", bs: "Dova kad grmi" },
    arabic:
      "سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلاَئِكةُ مِنْ خِيفَتِهِ.",
    transliteration:
      "Subhanal-lathee yusabbihur-raAAdu bihamdih, walmala-ikatu min kheefatih.",
    translation: {
      en: "How perfect He is, The One Whom the thunder declares His perfection with His praise, as do the angles out of fear of Him.",
      bs: "Slavljen neka je Onaj Kojem grmljavina iskazuje veličinu i hvalu, a i meleki iz strahopoštovanja prema Njemu!",
    },
  },
  {
    id: "hisnul_muslim_169",
    category: "hisnul_muslim",
    title: { en: "Some invocations for rain", bs: "Dova za kišu" },
    arabic:
      "اللَّهُمَّ اسْقِنَا غَيْثاً مُغِيثاً مَرِيئاً مَرِيعاً، نَافِعاً غَيْرَ ضَارٍّ، عَاجِلاً غَيْرَ آجِلٍ.",
    transliteration:
      "Allahummas-qina ghaythan mugheethan maree-an mureeAAan, nafiAAan, ghayra dar, AAajilan ghayra ajil.",
    translation: {
      en: "O Allah, send upon us helpful, wholesome and healthy rain, beneficial not harmful rain, now, not later.",
      bs: "O Allahu, pošalji nam kišu koja obilno natapa, koja je zdrava, plodonosna i korisna, sada, a ne kasnije.",
    },
  },
  {
    id: "hisnul_muslim_170",
    category: "hisnul_muslim",
    title: { en: "Some invocations for rain", bs: "Dova za kišu" },
    arabic: "اللَّهُمَّ أَغِثْنَا، اللَّهُمَّ أَغِثْنَا، اللَّهُمَّ أَغِثْنَا.",
    transliteration:
      "Allahumma aghithna, allahumma aghithna, allahumma aghithna.",
    translation: {
      en: "O Allah, relieve us, O Allah, relieve us, O Allah, relieve us.",
      bs: "O Allahu, napoji nas! O Allahu, napoji nas! O Allahu, napoji nas!",
    },
  },
  {
    id: "hisnul_muslim_171",
    category: "hisnul_muslim",
    title: { en: "Some invocations for rain", bs: "Dova za kišu" },
    arabic:
      "اللَّهُمَّ اسْقِ عِبَادَكَ، وَبَهَائِمَكَ، وَانْشُرْ رَحْمَتَكَ، وَأَحْيِي بَلَدَكَ الْمَيِّتَ.",
    transliteration:
      "Allahummas-qi AAibadak, wabaha-imak, wanshur rahmatak, wa-ahyi baladakal-mayyit.",
    translation: {
      en: "O Allah, provide water for Your servants and Your cattle, spread out Your mercy and resurrect Your dead land.",
      bs: "O Allahu, napoji Svoje robove i Svoju stoku, raširi Svoju milost i oživi Svoju mrtvu zemlju.",
    },
  },
  {
    id: "hisnul_muslim_172",
    category: "hisnul_muslim",
    title: { en: "Invocation for when it rains", bs: "Dova kada pada kiša" },
    arabic: "اللَّهُمَّ صَيِّباً نَافِعاً.",
    transliteration: "Allahumma sayyiban nafiAAa.",
    translation: {
      en: "O Allah, may it be a beneficial rain cloud.",
      bs: "O Allahu, neka bude korisna kiša.",
    },
  },
  {
    id: "hisnul_muslim_173",
    category: "hisnul_muslim",
    title: { en: "Supplication after it rains", bs: "Zikr nakon padanja kiše" },
    arabic: "مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ.",
    transliteration: "Mutirna bifadlil-lahi warahmatih.",
    translation: {
      en: "We have been given rain by the grace and mercy of Allah.",
      bs: "Kiša nam je pala Allahovom dobrotom i milošću.",
    },
  },
  {
    id: "hisnul_muslim_174",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for the withholding of the rain",
      bs: "Dova za prestanak kiše",
    },
    arabic:
      "اللَّهُمَّ حَوَالَيْنَا وَلاَ عَلَيْنَا، اللَّهُمَّ عَلَى الآكَامِ وَالظِّرَابِ، وَبُطُونِ الْأَوْدِيَةِ، وَمَنَابِتِ الشَّجَرِ.",
    transliteration:
      "Allahumma hawalayna wala AAalayna, allahumma AAalal-akami waththirab, wabutoonil-awdiyah, wamanabitish-shajar.",
    translation: {
      en: "O Allah, let the rain fall around us and not upon us, O Allah, let it fall on the pastures, hills, valleys and the roots of trees.",
      bs: "O Allahu, neka pada oko nas, a ne na nas; O Allahu, na brežuljke i brda, u doline i korita, i tamo gdje raste drveće.",
    },
  },
  {
    id: "hisnul_muslim_175",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for sighting the new moon",
      bs: "Dova pri viđenju mlađaka",
    },
    arabic:
      "اللَّهُ أَكْبَرُ، اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْأَمْنِ وَالْإِيمَانِ، وَالسَّلاَمَةِ وَالْإِسْلاَمِ، وَالتَّوْفِيقِ لِمَا تُحِبُّ رَبَّنَا وَتَرْضَى، رَبُّنَا وَرَبُّكَ اللَّهُ.",
    transliteration:
      "Allahu akbar, allahumma ahillahu AAalayna bil-amni wal-eeman, wassalamati wal-islam, wattawfeeiqi lima tuhibbu watarda, rabbuna warabbukal-lah.",
    translation: {
      en: "Allah is the greatest. O Allah, let the crescent loom above us in safety, faith, peace, and Islam, and in agreement with all that You love and pleases You. Our Lord and your Lord is Allah.",
      bs: "Allah je najveći. O Allahu, učini da nam se mlađak pojavi u sigurnosti i vjerovanju, miru i Islamu, te uspjehu u onome što Ti voliš i čime si zadovoljan. Naš Gospodar i tvoj Gospodar je Allah.",
    },
  },
  {
    id: "hisnul_muslim_176",
    category: "hisnul_muslim",
    title: { en: "Invocations for breaking the fast", bs: "Dova pred iftar" },
    arabic:
      "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ العُرُوقُ، وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ.",
    transliteration:
      "Thahabath-thama-o wabtallatil-AAurooq, wathabatal-ajru in shaal-lah.",
    translation: {
      en: "The thirst has gone and the veins are quenched, and reward is confirmed, if Allah wills.",
      bs: "Nestala je žeđ, žile su se natopile, a nagrada je osigurana, ako Allah da.",
    },
  },
  {
    id: "hisnul_muslim_177",
    category: "hisnul_muslim",
    title: { en: "Invocations for breaking the fast", bs: "Dova pred iftar" },
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِرَحْمَتِكَ الَّتِي وَسِعَتْ كُلَّ شَيْءٍ أَنْ تَغْفِرَ لِي.",
    transliteration:
      "Allahumma inne as-aluka birahmatikal-latee wasiAAat kulla shay, an taghfira lee.",
    translation: {
      en: "O Allah, I ask You by Your mercy which envelopes all things, that You forgive me.",
      bs: "O Allahu, molim Te Tvojom milošću, koja obuhvata sve, da mi oprostiš.",
    },
  },
  {
    id: "hisnul_muslim_178",
    category: "hisnul_muslim",
    title: { en: "Invocations before eating", bs: "Dova prije jela" },
    arabic:
      "إِذَا أَكَلَ أَحَدُكُمْ طَعَاماً فَلْيَقُلْ بِسْمِ اللَّهِ، فَإِنْ نَسِيَ فِي أَوَّلِهِ فَلْيَقُلْ بسمِ اللَّهِ فِي أَوَّلِهِ وَآخِرِهِ.",
    transliteration:
      "When you are about to eat, you should say:(Bismil-lah.)and if you forget to say it before starting, then you should say (when you remember):Bismil-lahi fee awwalihi wa-akhirih.",
    translation: {
      en: "When you are about to eat, you should say:Bismil-lah.and if you forget to say it before starting, then you should say when you remember:In the name of Allah in it’s beginning and end.",
      bs: "Kada neko od vas hoće da jede neka kaže: 'Bismillah', a ako zaboravi da to kaže na početku, neka kaže: 'Bismillahi fi evvelihi ve ahirihi' - U ime Allaha na početku i na kraju.",
    },
  },
  {
    id: "hisnul_muslim_179",
    category: "hisnul_muslim",
    title: { en: "Invocations before eating", bs: "Dova prije jela" },
    arabic:
      "مَنْ أَطْعَمَهُ اللَّهُ الطَّعَامَ فَلْيَقُلْ: اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَأَطْعِمْنَا خَيْراً مِنْهُ، وَمَنْ سَقَاهُ اللَّهُ لَبَناً فَلْيَقُلْ اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَزِدْنَا مِنْهُ.",
    transliteration:
      "Whomever Allah feeds, should say:(Allahumma barik lana feehi wa-atAAimna khayran minh.) and whomever Allah gives milk to drink should say:(Allahumma barik lana feehi wazidna minh.)",
    translation: {
      en: "Whomever Allah feeds, should say:O Allah, bless it for us and feed us better than it. and whomever Allah gives milk to drink should say:O Allah, bless it for usand give us more of it.",
      bs: "Koga Allah nahrani, neka kaže: O Allahu, blagoslovi nam ovo i nahrani nas boljim od toga. A koga Allah napoji mlijekom, neka kaže: O Allahu, blagoslovi nam ovo i daj nam još više od ovoga.",
    },
  },
  {
    id: "hisnul_muslim_180",
    category: "hisnul_muslim",
    title: { en: "Invocations after eating", bs: "Dova poslije jela" },
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا، وَرَزَقَنِيهِ، مِنْ غَيْرِ حَوْلٍ مِنِّي وَلاَ قُوَّةٍ.",
    transliteration:
      "Alhamdu lillahil-lathee atAAamanee hatha warazaqaneehi min ghayri hawlin minnee wala quwwah.",
    translation: {
      en: "All praise is for Allah who fed me this and provided it for me without any might nor power from myself.",
      bs: "Hvala Allahu koji me je ovim nahranio i opskrbio, bez moje snage i moći.",
    },
  },
  {
    id: "hisnul_muslim_181",
    category: "hisnul_muslim",
    title: { en: "Invocations after eating", bs: "Dova poslije jela" },
    arabic:
      "الْحَمْدُ لِلَّهِ حَمْداً كَثِيراً طَيِّباً مُبَارَكاً فِيهِ، غَيْرَ [مَكْفِيٍّ وَلاَ ] مُوَدَّعٍ، وَلاَ مُسْتَغْنَىً عَنْهُ رَبَّنَا.",
    transliteration:
      "Alhamdu lillahi hamdan katheeran tayyiban mubarakan feeh, ghayra makfiyyin wala muwaddaAAin, wala mustaghnan AAanhu rabbuna.",
    translation: {
      en: "Allah be praised with an abundant beautiful blessed praise, a never-ending praise, a praise which we will never bid farewell to and an indispensable praise, He is our Lord.There are other views as regards to the understanding of this supplication, from them: Allah be praised with an abundant beautiful blessed praise. He is The One Who is sufficient, feeds and is not fed. The One Who is longed for, along with that which is with Him and The One Who is needed, He is our Lord.",
      bs: "Hvala Allahu, hvalom mnogom, lijepom i blagoslovljenom, hvalom koja nije dovoljna da Mu se odužimo, hvalom od koje se ne opraštamo i koja nam je neophodna, Gospodaru naš.",
    },
  },
  {
    id: "hisnul_muslim_182",
    category: "hisnul_muslim",
    title: {
      en: "A dinner guest's invocation for his host",
      bs: "Dova gostiju za onoga ko ih je ugostio",
    },
    arabic:
      "اللَّهُمَّ بَارِكْ لَهُمْ فِيمَا رَزَقْتَهُم، وَاغْفِرْ لَهُمْ وَارْحَمْهُمْ.",
    transliteration:
      "Allahumma barik lahum feema razaqtahum, waghfir lahum warhamhum.",
    translation: {
      en: "O Allah, bless for them, that which You have provided them, forgive them and have mercy upon them.",
      bs: "O Allahu, blagoslovi im ono čime si ih opskrbio, oprosti im i smiluj im se.",
    },
  },
  {
    id: "hisnul_muslim_183",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for someone who gives you drink or offers it to you",
      bs: "Dova za onoga ko ti ponudi piće",
    },
    arabic: "اللَّهُمَّ أَطْعِمْ مَنْ أَطْعَمَنِي، وَاسْقِ مَنْ سَقَانِي.",
    transliteration: "Allahumma atAAim man atAAamanee wasqi man saqanee.",
    translation: {
      en: "O Allah, feed him who fed me, and provide with drink him who provided me with drink.",
      bs: "O Allahu, nahrani onoga ko je mene nahranio i napoji onoga ko je mene napojio.",
    },
  },
  {
    id: "hisnul_muslim_184",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for a family who invites you to break your fast with them",
      bs: "Dova za porodicu kod koje se iftarimo",
    },
    arabic:
      "أَفْطَرَ عِنْدَكُمُ الصَّائِمُونَ، وَأَكَلَ طَعَامَكُمُ الْأَبْرَارُ، وَصَلَّتْ عَلَيْكُمُ الْمَلاَئِكَةُ.",
    transliteration:
      "Aftara AAindakumus-sa-imoon, wa-akala taAAamakumul-abrar, wasallat AAalaykumul-mala-ikah.",
    translation: {
      en: "May the fasting break their fast in your home, and may the dutiful and pious eat your food, and may the angles send prayers upon you.",
      bs: "Kod vas postači iftarili, vašu hranu jeli dobri ljudi i meleki na vas donosili salavate.",
    },
  },
  {
    id: "hisnul_muslim_185",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for someone who offers you food when you are fasting, which you decline",
      bs: "Dova onome ko ponudi hranu postaču",
    },
    arabic:
      "إِذَا دُعِيَ أَحَدُكُمْ فَلْيُجِبْ، فَإِنْ كَانَ صَائِماً فَلْيُصَلِّ، وَإِنْ كَانَ مُفْطِراً فَلْيَطْعَمْ ، وَمَعْنَى فَلْيُصَلِّ أَيْ فَلْيَدْعُ.",
    transliteration:
      "If you are not invited (to a meal) then answer. If you happen to be fasting, then supplicate (for those present) and if you are not fasting, then eat.",
    translation: {
      en: "",
      bs: "Kada neko od vas bude pozvan na hranu, neka se odazove. Ako posti, neka dovi za domaćina, a ako ne posti, neka jede.",
    },
  },
  {
    id: "hisnul_muslim_186",
    category: "hisnul_muslim",
    title: {
      en: "What to say when you are fasting and someone is rude to you",
      bs: "Šta kaže postač ako ga neko uvrijedi",
    },
    arabic: "إِنِّي صَائِمٌ، إِنِّي صَائِمٌ.",
    transliteration: "Innee sa-im, innee sa-im.",
    translation: {
      en: "I am fasting, I am fasting.",
      bs: "Ja postim, ja postim.",
    },
  },
  {
    id: "hisnul_muslim_187",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for when you see the first dates of the season",
      bs: "Dova kad se vide prvi plodovi",
    },
    arabic:
      "اللَّهُمَّ بَارِكْ لَنَا فِي ثَمَرِنَا، وَبَارِكْ لَنَا فِي مَدِينَتِنَا، وَبَارِكْ لَنَا فِي صَاعِنَا، وَبَارِكْ لَنَا فِي مُدِّنَا.",
    transliteration:
      "Allahumma barik lana fee thamarina, wabarik lana fee madeenatina, wabarik lana fee saAAina wabarik lana fee muddina.",
    translation: {
      en: "O Allah, bless our fruit for us, bless our town for us, bless our saAA for us and bless our mudd for us.A saAA is equivalent to four mudds and a mudd is equivalent to a dry measure of an average man’s two palms.",
      bs: "O Allahu, blagoslovi nam naše plodove, blagoslovi nam naš grad, blagoslovi nam naše mjere sa\' i mudd.",
    },
  },
  {
    id: "hisnul_muslim_188",
    category: "hisnul_muslim",
    title: { en: "Invocation for sneezing", bs: "Dova za onoga ko kihne" },
    arabic:
      "إِذَا عَطَسَ أَحَدُكُم فَلْيَقُلِ الْحَمْدُ لِلَّهِ، وَلْيَقُلْ لَهُ أَخُوهُ أَوْ صَاحِبُهُ: يَرْحَمُكَ اللَّهُ، فَإِذَا قَالَ لَهُ: يَرحَمُكَ اللَّهُ، فَلْيَقُلْ: يَهْدِيكُمُ اللَّهُ وَيُصْلِحُ بَالَكُمْ.",
    transliteration:
      "When one of you sneezes he should say:(Alhamdu lillah.) and his brother or companion should say to him: (Yarhamukal-lah.) and he (i.e. the one who sneezed) replies back to him:(Yahdeekumul-lahu wayuslihu balakum.)",
    translation: {
      en: "When one of you sneezes he should say:All praise if for Allah. and his brother or companion should say to him: May Allah have mercy upon you. and he i.e. the one who sneezed replies back to him:May Allah guide you and rectify your condition.",
      bs: "Kada neko od vas kihne, neka kaže 'El-hamdu lillah' Hvala Allahu, a njegov brat ili prijatelj neka mu kaže 'Jerhamukallah' Allah ti se smilovao. Kada mu to kaže, onaj koji je kihnuo neka odgovori: 'Jehdikumullah ve juslihu balekum' Allah vas uputio i popravio vaše stanje.",
    },
  },
  {
    id: "hisnul_muslim_189",
    category: "hisnul_muslim",
    title: {
      en: "What to say to the disbeliever if he sneezes and praises Allah",
      bs: "Dova za nevjernika koji kihne",
    },
    arabic: "يَهْدِيكُمُ اللَّهُ وَيُصْلِحُ بَالَكُمْ.",
    transliteration: "Yahdeekum wayuslihu balakum.",
    translation: {
      en: "May Allah guide you and rectify your condition.",
      bs: "Neka vas Allah uputi i popravi vaše stanje.",
    },
  },
  {
    id: "hisnul_muslim_190",
    category: "hisnul_muslim",
    title: { en: "Invocation for the groom", bs: "Čestitka mladoženji" },
    arabic:
      "بَارَكَ اللَّهُ لَكَ، وَبَارَكَ عَلَيْكَ، وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ.",
    transliteration:
      "Barakal-lahu lak, wabaraka AAalayk, wajamaAAa baynakuma fee khayr.",
    translation: {
      en: "May Allah bless for you your spouse and bless you, and may He unite both of you in goodness.",
      bs: "Neka te Allah blagoslovi i neka je Božiji blagoslov na tebe, i neka vas spoji u dobru.",
    },
  },
  {
    id: "hisnul_muslim_191",
    category: "hisnul_muslim",
    title: {
      en: "The groom’s supplication on the wedding night or when buying an animal",
      bs: "Dova mladoženje",
    },
    arabic:
      "إِذَا تَزَوَّجَ أَحَدُكُمُ امْرَأَةً، أَوْ إِذَا اشْتَرَى خَادِماً فَلْيَقُلْ: اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا، وَخَيْرَ مَا جَبَلْتَهَا عَلَيْهِ، وَأَعُوذُ بِكَ مِنْ شَرِّهَا، وَشَرِّ مَا جَبَلْتَهَا عَلَيْهِ، وَإِذَا اشْتَرَى بَعِيراً فَلْيَأْخُذْ بِذِرْوَةِ سَنَامِهِ وَلْيَقُلْ مِثْلَ ذَلِكَ.",
    transliteration:
      "when you marry a woman or buy a maidservant, you should say: (Allahumma innee as-aluka khayraha wakhayra ma jabaltaha AAalayh, wa-aAAoothu bika min sharriha washarri ma jabaltaha AAalayh.(and if you buy a camel, then you should take hold of it’s hump and say likewise.",
    translation: {
      en: "when you marry a woman or buy a maidservant, you should say:O Allah, I ask You for the goodness within her and the goodness that you have made her inclined towards, and I take refuge with You from the evil within her and the evil that you have made her inclined towards.and if you buy a camel, then you should take hold of it’s hump and say likewise.",
      bs: "Kada se neko od vas oženi ili kupi slugu, neka kaže: O Allahu, molim Te za njeno dobro i dobro onoga čemu si je Ti stvorio sklonim, a utječem Ti se od njenog zla i zla onoga čemu si je Ti stvorio sklonim. A ako kupi devu...",
    },
  },
  {
    id: "hisnul_muslim_192",
    category: "hisnul_muslim",
    title: {
      en: "Invocation to be recited before intercourse",
      bs: "Dova prije spolnog odnosa",
    },
    arabic:
      "بِسْمِ اللَّهِ، اللَّهُمَّ جَنِّبْنَا الشَّيْطَانَ، وَجَنِّبِ الشَّيْطَانَ مَا رَزَقْتَنَا.",
    transliteration:
      "Bismil-lah, allahumma jannibnash-shaytan, wajannibish-shaytana ma razaqtana.",
    translation: {
      en: "In the name of Allah. O Allah, keep the devil away from us and keep the devil away from what you have blessed us with.",
      bs: "U ime Allaha. O Allahu, udalji šejtana od nas i udalji šejtana od onoga čime nas opskrbiš.",
    },
  },
  {
    id: "hisnul_muslim_193",
    category: "hisnul_muslim",
    title: { en: "Invocation for anger", bs: "Dova protiv ljutnje" },
    arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ.",
    transliteration: "aAAoothu billahi minash-shaytanir-rajeem.",
    translation: {
      en: "I take refuge with Allah from the accursed devil.",
      bs: "Utječem se Allahu od prokletog šejtana.",
    },
  },
  {
    id: "hisnul_muslim_194",
    category: "hisnul_muslim",
    title: {
      en: "What to say if you see someone afflicted by misfortune",
      bs: "Dova kad se vidi nevoljnik",
    },
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي مِمَّا ابْتَلاَكَ بِهِ، وَفَضَّلَنِي عَلَى كَثِيرٍ مِمَّنْ خَلَقَ تَفْضِيلاً.",
    transliteration:
      "Alhamdu lillahil-lathee AAafanee mimmab-talaka bih, wafaddalanee AAala katheerin mimman khalaqa tafdeela.",
    translation: {
      en: "All praise is for Allah Who saved me from that which He tested you with and Who most certainly favoured me over much of His creation.",
      bs: "Hvala Allahu koji me je zaštitio od onoga čime je tebe iskušao i koji me je odlikovao nad mnogima od Svojih stvorenja.",
    },
  },
  {
    id: "hisnul_muslim_195",
    category: "hisnul_muslim",
    title: {
      en: "What to say while sitting in an assembly",
      bs: "Dova u društvu (medžlisu)",
    },
    arabic:
      "عَنِ ابْنِ عُمَرَ رضي الله عنه قَاَلَ: كَانَ يُعَدُّ لِرَسُولِ اللَّهِ صلى الله عليه وسلم فِي الْمَجْلِسِ الوَاحِدِ مِائَةُ مَرَّةٍ مِنْ قَبْلِ أَنْ يَقُومَ: رَبِّ اغْفِرْ لِي، وَتُبْ عَلَيَّ، إِنَّكَ أَنْتَ التَّوَّابُ الغَفُورُ.",
    transliteration:
      "Ibn AAumar said: It would be counted that the Messenger of Allah would say one hundred times at any one sitting before getting up: (Rabbigh-fir lee watub AAalay, innaka antat-tawwabul-ghafoor.)",
    translation: {
      en: "Ibn AAumar said: It would be counted that the Messenger of Allah would say one hundred times at any one sitting before getting up: O my Lord, forgive me and turn towards me to accept my repentance. Verily You are The Oft-Returning. The Oft-Forgiving.",
      bs: "Ibn Omer, r.a., kaže: Izbrojali bismo da Poslanik, s.a.v.s., u jednom sjelu kaže i po stotinu puta: 'Gospodaru moj, oprosti mi i primi moje pokajanje, Ti si, zaista, Onaj koji prima pokajanje i koji oprašta.'",
    },
  },
  {
    id: "hisnul_muslim_196",
    category: "hisnul_muslim",
    title: {
      en: "The Expiation of Assembly - Kaffaratul-Majlis",
      bs: "Keffaret (otkup) za sijelo",
    },
    arabic:
      "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ.",
    transliteration:
      "Subhanakal-lahumma wabihamdik, ashhadu an la ilaha illa ant, astaghfiruka wa-atoobu ilayk.",
    translation: {
      en: "How perfect You are O Allah, and I praise You. I bear witness that None has the right to be worshipped except You. I seek Your forgiveness and turn to You in repentance.",
      bs: "Slavljen neka si, Allahu, i hvaljen. Svjedočim da nema boga osim Tebe. Od Tebe oprost tražim i Tebi se kajem.",
    },
  },
  {
    id: "hisnul_muslim_197",
    category: "hisnul_muslim",
    title: {
      en: "vocation for someone who says: May Allah forgive you",
      bs: "Odgovor na dovu za oprost",
    },
    arabic: "وَلَكَ.",
    transliteration:
      "AAabdullah Ibn Sarjis said: ‘I went to see the Prophet and ate from his food and then said to him:(Ghafaral-lahu laka ya rasoolal-lah.) he replied: (wa-lak)",
    translation: {
      en: "AAabdullah Ibn Sarjis said: ‘I went to see the Prophet and ate from his food and then said to him: May Allah forgive you, O Messenger of Allah. he replied: and you.",
      bs: "I tebi.",
    },
  },
  {
    id: "hisnul_muslim_198",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for someone who does good to you",
      bs: "Dova onome ko ti učini dobro",
    },
    arabic: "جَزَاكَ اللَّهُ خَيْراً.",
    transliteration:
      "If someone does you a favour and you say: (Jazakal-lahu khayran.) then you have indeed excelled in praising him.",
    translation: {
      en: "If someone does you a favour and you say: May Allah reward you with goodness. then you have indeed excelled in praising him.",
      bs: "Neka te Allah nagradi dobrom.",
    },
  },
  {
    id: "hisnul_muslim_199",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for Allah's protection from the False Messiah",
      bs: "Zaštita od Dedžala",
    },
    arabic:
      "مَنْ حَفِظَ عَشْرَ آيَاتٍ مِنْ أَوَّلِ سُورَةِ الْكَهْفِ عُصِمَ مِنَ الدَّجَّالِ ، وَالْاسْتِعَاذَةُ بِاللَّهِ مِنْ فِتْنَتِهِ عَقِبَ التَّشَهُّدِ الْأَخِيرِ مِنْ كُلِّ صَلاَةٍ.",
    transliteration: "",
    translation: {
      en: "Dajjal: among the great signs of the last hour and the greatest trials to befall mankind, which every Prophet has warned about. Most of mankind will folow him. He will appear from Asbahan, Iran at the time when Muslims will conquer Constantinople. He will be given special powers and will make the truth seem false and vice versa. He will claim to be righteous and then he will claim prophet-hood and finally, divinity. From his features is that he will be blind in his right eye which is a definite proof that contradicts his claim to be Allah as it is a sign of imperfection. The word Kafir will be written between his eyes which every believer, literate or illiterate will recognise.Whoever memorises the first ten verses of soorat Al-Kahf will be protected from Dajjal.One should also seek refuge with Allah from the tribulations of the Dajjal after the last tashahhud in prayer.Refer to supplications #55 & #56",
      bs: "Ko nauči napamet prvih deset ajeta sure El-Kehf, bit će sačuvan od Dedžala. Također, treba tražiti utočište kod Allaha od Dedžalove smutnje na kraju svakog namaza.",
    },
  },
  {
    id: "hisnul_muslim_200",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for someone who tells you I love you for the sake of Allah",
      bs: "Onome ko ti kaže 'Volim te'",
    },
    arabic: "أَحَبَّكَ الَّذِي أَحْبَبْتَنِي لَهُ.",
    transliteration: "Ahabbakal-lathee ahbabtanee lah.",
    translation: {
      en: "May He, for whom you have loved me, love you.",
      bs: "Zavolio te Onaj radi Koga si me zavolio.",
    },
  },
  {
    id: "hisnul_muslim_201",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for someone who offers you a share of his wealth",
      bs: "Onome ko ti ponudi imetak",
    },
    arabic: "بَارَكَ اللَّهُ لَكَ فِي أَهْلِكَ وَمَالِكَ.",
    transliteration: "Barakal-lahu laka fee ahlika wamalik.",
    translation: {
      en: "May Allah bless for you, your family and wealth.",
      bs: "Neka ti Allah blagoslovi tvoju porodicu i tvoj imetak.",
    },
  },
  {
    id: "hisnul_muslim_202",
    category: "hisnul_muslim",
    title: {
      en: "Invocation (upon receipt of the loan) for someone who lends you money",
      bs: "Dova zajmodavcu pri vraćanju duga",
    },
    arabic:
      "بارَكَ اللَّهُ لَكَ فِي أَهْلِكَ وَمَالِكَ، إِنَّمَا جَزَاءُ السَّلَفِ الْحَمْدُ وَالأَدَاءُ.",
    transliteration:
      "Barakal-lahu laka fee ahlika wamalik, innama jaza-os-salafil-hamdu wal-ada'.",
    translation: {
      en: "May Allah bless for you, your family and wealth. Surely commendation and payment are the reward for a loan.",
      bs: "Neka Allah blagoslovi tvoju porodicu i tvoj imetak. Zaista je nagrada za zajam - zahvala i vraćanje.",
    },
  },
  {
    id: "hisnul_muslim_203",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for fear of Shirk",
      bs: "Dova zbog straha od širka",
    },
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أُشْرِكَ بِكَ وَأَنَا أَعْلَمُ، وَأَسْتَغْفِرُكَ لِمَا لاَ أَعْلَمُ.",
    transliteration:
      "shirk: to associate others with Allah in those things which are specific to Him. This can occur in (1) belief, e.g. to believe that other than Allah has the power to benefit or harm, (2) speech, e.g. to swear by other than Allah and (3) action, e.g. to bow or prostrate to other than Allah.)(Allahumma innee aAAoothu bika an oshrika bika wa-ana aAAlam, wa-astaghfiruka lima la aAAlam.",
    translation: {
      en: "shirk: to associate others with Allah in those things which are specific to Him. This can occur in 1 belief, e.g. to believe that other than Allah has the power to benefit or harm, 2 speech, e.g. to swear by other than Allah and 3 action, e.g. to bow or prostrate to other than Allah.O Allah, I take refuge in You lest I should commit shirk with You knowingly and I seek Your forgiveness for what I do unknowingly.",
      bs: "O Allahu, utječem Ti se da Ti svjesno pripišem druga, a oprost od Tebe tražim za ono što nesvjesno učinim.",
    },
  },
  {
    id: "hisnul_muslim_204",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for someone who tells you: May Allah bless you",
      bs: "Onome ko ti kaže 'Allah te blagoslovio'",
    },
    arabic: "وَفِيكَ بَارَكَ اللَّهُ.",
    transliteration:
      "Aaishah reported that the Messenger of Allah was given a sheep and he ordered for it’s distribution. When the servant would come back (from distributing it), AAaishah would ask: ‘What did they say?’, he replied: They would supplicate: (Barakal-lahu feekum.) AAaishah would then say: (Wafeehim barakal-lah.(we return their supplication in a similar way and our reward remains with us.",
    translation: {
      en: "Aaishah reported that the Messenger of Allah was given a sheep and he ordered for it’s distribution. When the servant would come back from distributing it, AAaishah would ask: ‘What did they say?’, he replied: They would supplicate: May Allah bless you all. AAaishah would then say: and may Allah bless them.we return their supplication in a similar way and our reward remains with us.",
      bs: "I tebe Allah blagoslovio.",
    },
  },
  {
    id: "hisnul_muslim_205",
    category: "hisnul_muslim",
    title: {
      en: "Invocation against evil portent",
      bs: "Dova protiv zloslutnje",
    },
    arabic:
      "اللَّهُمَّ لاَ طَيْرَ إِلاَّ طَيْرُكَ، وَلاَ خَيْرَ إِلاَّ خَيْرُكَ، وَلاَ إِلَهَ غَيْرُكَ.",
    transliteration:
      "This supplication is used whenever one initially thinks a casual event or occurrence to foretell good or evil, using it as a basis to determine which action he should undertake, but he then denounces such a link, relies on Allah and then says this supplication as an expiation for this act, since it falls under the category of shirk.)(Allahumma la tayra illa tayruk, wala khayra illa khayruk, wala ilaha ghayruk.",
    translation: {
      en: "This supplication is used whenever one initially thinks a casual event or occurrence to foretell good or evil, using it as a basis to determine which action he should undertake, but he then denounces such a link, relies on Allah and then says this supplication as an expiation for this act, since it falls under the category of shirk.O Allah, there is no omen but there is reliance on You, there is no good except Your good and none has the right to be worshipped except You.",
      bs: "O Allahu, nema ptice zloslutnice osim Tvoje, niti ima dobra osim Tvog, i nema boga osim Tebe.",
    },
  },
  {
    id: "hisnul_muslim_206",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for riding in a vehicle or on an animal",
      bs: "Dova prilikom jahanja (vožnje)",
    },
    arabic:
      "بِسْمِ اللَّهِ، وَالْحَمْدُ للَّهِ ﴿سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنقَلِبُونَ﴾، الْحَمْدُ لِلَّهِ، الْحَمْدُ لِلَّهِ، الْحَمْدُ لِلَّهِ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، سُبْحَانَكَ اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي؛ فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ.",
    transliteration:
      "Bismil-lah, walhamdu lillah, subhanal-lathee sakhkhara lana hatha wama kunna lahu muqrineen, wainna ila rabbina lamunqaliboon, alhamdu lillah, alhamdu lillah, alhamdu lillah, Allahu akbar, Allahu akbar, Allahu akbar, subhanakal-lahumma innee thalamtu nafsee faghfir lee fainnahu la yaghfiruth-thunooba illa ant.",
    translation: {
      en: "In the name of Allah and all praise is for Allah. How perfect He is, the One Who has placed this transport at our service and we ourselves would not have been capable of that, and to our Lord is our final destiny. All praise is for Allah, All praise is for Allah, All praise is for Allah, Allah is the greatest, Allah is the greatest, Allah is the greatest. How perfect You are, O Allah, verily I have wronged my soul, so forgive me, for surely none can forgive sins except You.",
      bs: "U ime Allaha. Hvala Allahu. Slavljen neka je Onaj koji nam je ovo potčinio; mi to ne bismo mogli učiniti. I mi ćemo se, zaista, Gospodaru našem vratiti. Hvala Allahu, hvala Allahu, hvala Allahu. Allah je najveći, Allah je najveći, Allah je najveći. Slavljen neka si, Allahu. Ja sam sebi zulum učinio, pa mi oprosti, jer grijehe ne oprašta niko drugi osim Tebe.",
    },
  },
  {
    id: "hisnul_muslim_207",
    category: "hisnul_muslim",
    title: { en: "Invocation for traveling", bs: "Dova za putovanje" },
    arabic:
      "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، ﴿سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ * وَإِنَّا إِلَى رَبِّنَا لَمُنقَلِبُونَ﴾ اللَّهُمَّ إِنّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا البِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى، اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ، اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ، وَالْخَليفَةُ فِي الْأَهْلِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ، وَكَآبَةِ الْمَنْظَرِ، وَسُوءِ الْمُنْقَلَبِ فِي الْمَالِ وَالْأَهْلِ، وإذا رَجَعَ قَالَهُنَّ وَزَادَ فِيهِنَّ: آيِبُونَ، تائِبُونَ، عَابِدُونَ، لِرَبِّنَا حَامِدُونَ.",
    transliteration:
      "Allahu akbar, Allahu akbar, Allahu akbar, subhanal-lathee sakhkhara lana hatha wama kunna lahu muqrineen, wa-inna ila rabbina lamunqaliboon, allahumma inna nas-aluka fee safarina hatha albirra wattaqwa, waminal-AAamali ma tarda, allahumma hawwin AAalayna safarana hatha, watwi AAanna buAAdah, allahumma antas-sahibu fis-safar, walkhaleefatu fil-ahl, allahumma innee aAAoothu bika min waAAtha-is-safar, waka-abatil-manthar, wasoo-il-munqalabi fil-mali wal-ahl.)(upon returning the same supplication is recited with the following addition: (Ayiboona, ta-iboona, AAabidoona, lirabbina hamidoon.)",
    translation: {
      en: "Allah is the greatest, Allah is the greatest, Allah is the greatest, How perfect He is, The One Who has placed this transport at our service, and we ourselves would not have been capable of that, and to our Lord is our final destiny. O Allah, we ask You for birr and taqwa in this journey of ours, and we ask You for deeds which please You. O Allah, facilitate our journey and let us cover it’s distance quickly. O Allah, You are The Companion on the journey and The Successor over the family, O Allah, I take refuge with You from the difficulties of travel, from having a change of hearts and being in a bad predicament, and I take refuge in You from an ill fated outcome with wealth and family.birr and taqwa: two comprehensive terms which individually, refer to all good actions and obedience i.e. performing the commanded actions and avoiding the prohibited actions. When combined together, birr refers to doing those actions which have been commanded and taqwa refers to avoiding those actions which have been prohibited.A successor: one who succeeds another due to the latter’s absence or death. This is the correct meaning of the word khaleefah; thus, it is incorrect to believe that Adam is the khaleefah vicegerent, as is commonly translated of Allah on earth because Allah is never absent, and will never die. This supplication proves the correct understanding of this term and shows that Allah succeeds us and guards whom we leave behind when we die or are absent.upon returning the same supplication is recited with the following addition: We return, repent, worship and praise our Lord.",
      bs: "Allah je najveći, Allah je najveći, Allah je najveći. Slavljen neka je Onaj koji nam je ovo potčinio... O Allahu, mi Te molimo na ovom našem putovanju za dobročinstvo i bogobojaznost, i za djela kojima si Ti zadovoljan...",
    },
  },
  {
    id: "hisnul_muslim_208",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for entering a town or city",
      bs: "Dova pri ulasku u grad",
    },
    arabic:
      "اللَّهُمَّ رَبَّ السَّمَوَاتِ السَّبْعِ وَمَا أَظْلَلْنَ، وَرَبَّ الأَرَضِينَ السَّبْعِ وَمَا أَقْلَلْنَ، وَرَبَّ الشَّياطِينِ وَمَا أَضْلَلْنَ، وَرَبَّ الرِّيَاحِ وَمَا ذَرَيْنَ، أَسْأَلُكَ خَيْرَ هَذِهِ الْقَرْيَةِ، وَخَيْرَ أَهْلِهَا، وَخَيْرَ مَا فِيهَا، وَأَعُوذُ بِكَ مِنْ شَرِّهَا، وَشَرِّ أَهْلِهَا، وَشَرِّ مَا فِيهَا.",
    transliteration:
      "Allahumma rabbas-samawatis-sabAAi wama athlaln, warabbal-aradeenas-sabAAi wama aqlaln, warabbash-shayateeni wama adlaln, warabbar-riyahi wama tharayn, as-aluka khayra hathihil-qaryah, wakhayra ahlilha wakhayra ma feeha, wa-aAAoothu bika min sharriha washarri ahliha, washarri ma feeha.",
    translation: {
      en: "O Allah, Lord of the seven heavens and all that they envelop, Lord of the seven earths and all that they carry, Lord of the devils and all whom they misguide, Lord of the winds and all whom they whisk away. I ask You for the goodness of this village, the goodness of its inhabitants and for all the goodness found within it and I take refuge with You from the evil of this village, the evil of its inhabitants and from all the evil found within it.",
      bs: "O Allahu, Gospodaru sedam nebesa i onoga što ona natkriljuju... molim Te za dobro ovog mjesta i dobro njegovih stanovnika...",
    },
  },
  {
    id: "hisnul_muslim_209",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for entering a market",
      bs: "Dova pri ulasku u tržnicu",
    },
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ حَيٌّ لاِ يَمُوتُ، بِيَدِهِ الْخَيْرُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
    transliteration:
      "La ilaha illal-lah, wahdahu la shareeka lah, lahul-mulku walahul-hamd, yuhyee wayumeetu wahuwa hayyun la yamoot, biyadihil-khayru wahuwa AAala kulli shayin qadeer.",
    translation: {
      en: "None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise. He gives life and causes death, and He is living and does not die. In His hand is all good and He is over all things, omnipotent.",
      bs: "Nema boga osim Allaha, Jedinoga, Koji nema sudruga. Njemu pripada vlast i hvala. On oživljava i usmrćuje, i On je Živi koji ne umire...",
    },
  },
  {
    id: "hisnul_muslim_210",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for when your vehicle or mount begins to fail",
      bs: "Kad jahalica (vozilo) posrne",
    },
    arabic: "بِسْمِ اللَّهِ.",
    transliteration: "Bismil-lah.",
    translation: {
      en: "In the name of Allah.",
      bs: "Bismillah - U ime Allaha.",
    },
  },
  {
    id: "hisnul_muslim_211",
    category: "hisnul_muslim",
    title: {
      en: "The traveler's invocation for the one he leaves behind",
      bs: "Dova putnika onome ko ostaje",
    },
    arabic: "أَسْتَوْدِعُكُمُ اللَّهَ الَّذِي لاَ تَضِيعُ وَدَائِعُهُ.",
    transliteration: "AstawdiAAukumul-lah, allathee la tadeeAAu wada-iAAuh.",
    translation: {
      en: "I place you in the trust of Allah, whose trust is never misplaced.",
      bs: "Ostavljam vas u amanet Allahu, čiji se amaneti ne gube.",
    },
  },
  {
    id: "hisnul_muslim_212",
    category: "hisnul_muslim",
    title: {
      en: "The resident's invocations for the traveler",
      bs: "Dova onoga ko ostaje putniku",
    },
    arabic:
      "أَسْتَوْدِعُ اللَّهَ دِينَكَ، وَأَمَانَتَكَ، وَخَوَاتِيمَ عَمَلِكَ.",
    transliteration:
      "AstawdiAAul-laha deenak, wa-amanatak, wakhawateema AAamalik.",
    translation: {
      en: "I place your religion, your faithfulness and the ends of your deeds in the trust of Allah.",
      bs: "Ostavljam u amanet Allahu tvoju vjeru, tvoje povjerenje i završetke tvojih djela.",
    },
  },
  {
    id: "hisnul_muslim_213",
    category: "hisnul_muslim",
    title: {
      en: "The resident's invocations for the traveler",
      bs: "Dova onoga ko ostaje putniku",
    },
    arabic:
      "زَوَّدَكَ اللَّهُ التَّقْوَى، وَغَفَرَ ذَنْبَكَ، وَيَسَّرَ لَكَ الخَيْرَ حَيْثُ ما كُنْتَ.",
    transliteration:
      "Zawwadakal-lahut-taqwa, waghafara thanbak, wayassara lakal-khayra haythuma kunt.",
    translation: {
      en: "May Allah endow you with taqwa, forgive your sins and facilitate all good for you, wherever you be.taqwa: a comprehensive term which refers to all good actions and obedience i.e. performing the commanded actions and avoiding the prohibited actions.",
      bs: "Neka te Allah opskrbi bogobojaznošću, oprosti ti grijehe i olakša ti dobro gdje god bio.",
    },
  },
  {
    id: "hisnul_muslim_214",
    category: "hisnul_muslim",
    title: {
      en: "Glorifying and magnifying Allah on the journey",
      bs: "Tekbir i tesbih na putovanju",
    },
    arabic:
      "قَالَ جَابِرٌ رضي الله عنه: كُنَّا إِذَا صَعَدْنَا كَبَّرْنَا، وَإِذَا نَزَلْنَا سَبَّحْنَا.",
    transliteration: "",
    translation: {
      en: "Jabir said: Whenever we went up a hill we would say Allaahu 'Akber Allah is the Most Great and when we descended we would say Subhaanallaah Glory is to Allah",
      bs: "Džabir, r.a., je rekao: Kada bismo se penjali, donosili bismo tekbir Allahu Ekber, a kada bismo se spuštali, činili bismo tesbih Subhanallah.",
    },
  },
  {
    id: "hisnul_muslim_215",
    category: "hisnul_muslim",
    title: {
      en: "The traveler's invocation at dawn",
      bs: "Dova putnika pred zoru",
    },
    arabic:
      "سَمَّعَ سَامِعٌ بِحَمْدِ اللَّهِ، وَحُسْنِ بَلاَئِهِ عَلَيْنَا، رَبَّنَا صاحِبْنَا، وَأَفْضِلْ عَلَيْنَا، عَائِذاً بِاللَّهِ مِنَ النَّارِ.",
    transliteration:
      "SamiAAa samiAAun bihamdil-lahi wahusni bala-ihi AAalayna. Rabbana sahibna wa-afdil AAalayna AAa-ithan billahi minan-nar.",
    translation: {
      en: "May a witness, be witness to our praise of Allah for His favours and bounties upon us. Our Lord, protect us, show favour on us and deliver us from every evil. I take refuge in Allah from the fire.",
      bs: "Neka čuje onaj koji sluša hvalu Allahu i Njegovo lijepo iskušenje prema nama. Gospodaru naš, budi s nama i podari nam Svoju dobrotu...",
    },
  },
  {
    id: "hisnul_muslim_216",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for a layover (stopping along the way) on the journey",
      bs: "Dova pri zaustavljanju na putu",
    },
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",
    transliteration: "aAAoothu bikalimatil-lahit-tammati min sharri ma khalaq.",
    translation: {
      en: "I take refuge in Allah’s perfect words from the evil that He has created.",
      bs: "Utječem se euzubillom, savršenim Allahovim riječima od zla onoga što je stvorio.",
    },
  },
  {
    id: "hisnul_muslim_217",
    category: "hisnul_muslim",
    title: {
      en: "What to say upon returning from a Journey",
      bs: "Dova pri povratku s putovanja",
    },
    arabic:
      "يُكَبِّرُ عَلَى كُلِّ شَرَفٍ ثَلاَثَ تَكْبِيرَاتٍ ثُمَّ يَقُولُ: لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، آيِبُونَ، تَائِبُونَ، عَابِدُونَ، لِرَبِّنا حَامِدُونَ، صَدَقَ اللَّهُ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الْأَحْزابَ وَحْدَهُ.",
    transliteration:
      "Ibn AAumar reported that the Messenger of Allah on return from a battle or from performing the pilgrimage would say at every high point: (Allahu akbar, Allahu akbar, Allahu akbar.) and then he would say: (La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa AAala kulli shay-in qadeer, ayiboona ta-iboon, AAabidoon, lirabbina hamidoon, sadaqal-lahu waAAdah, wanasara AAabdah, wahazamal-ahzaba wahdah.)",
    translation: {
      en: "Ibn AAumar reported that the Messenger of Allah on return from a battle or from performing the pilgrimage would say at every high point: Allah is the greatest, Allah is the greatest, Allah is the greatest. and then he would say: None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent. We return, repent, worship and praise our Lord. Allah fulfilled His promise, aided His Servant, and single-handedly defeated the allies.",
      bs: "Vraćamo se, kajemo se, obožavamo i Gospodara našeg hvalimo...",
    },
  },
  {
    id: "hisnul_muslim_218",
    category: "hisnul_muslim",
    title: {
      en: "What to say if something happens to please you or to displease you",
      bs: "Pri lijepom ili ružnom događaju",
    },
    arabic:
      "كَانَ النَّبِيُّ صلى الله عليه وسلم إِذَا أَتَاهُ الْأَمْرُ يَسُرُّهُ قَالَ: الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ وَإِذَا أَتَاهُ الْأَمْرُ يَكْرَهُهُ قَالَ: الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ.",
    transliteration:
      "When something happened that pleased him, the Prophet used to say:Alhamdu lillaahil-lathee bini'matihi tatimmuus-saalihaat.And if something happened that displeased him, he used to say:Alhamdulillaahi 'alaa kulli haal.",
    translation: {
      en: "When something happened that pleased him, the Prophet used to say:Alhamdu lillaahil-lathee bini'matihi tatimmuus-saalihaat. Praise is to Allah Who by His blessings all good things are perfected. And if something happened that displeased him, he used to say:Alhamdulillaahi 'alaa kulli haal.Praise is to Allah in all circumstances.",
      bs: "Kada bi mu se desilo nešto što ga raduje, Poslanik, a.s., bi rekao: 'Hvala Allahu, čijom se blagodati upotpunjuju dobra djela', a kad bi mu se desilo nešto što mu nije drago: 'Hvala Allahu na svakom stanju'.",
    },
  },
  {
    id: "hisnul_muslim_219",
    category: "hisnul_muslim",
    title: {
      en: "The excellence of asking for Allah's blessings upon the Prophet pbuh",
      bs: "Vrijednost salavata na Poslanika",
    },
    arabic:
      "قَالَ النَّبِيُّ صلى الله عليه وسلم: مَنْ صَلَّى عَلَيَّ صَلاَةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْراً.",
    transliteration: "",
    translation: {
      en: "The Prophet PBUH said: ‘Whoever sends a prayer upon me, Allah sends ten upon him.",
      bs: "Ko na mene donese jedan salavat, Allah na njega donese deset.",
    },
  },
  {
    id: "hisnul_muslim_220",
    category: "hisnul_muslim",
    title: {
      en: "The excellence of asking for Allah's blessings upon the Prophet pbuh",
      bs: "Vrijednost salavata",
    },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: لاَ تَجْعَلُوا قَبْرِي عِيداً وَصَلُّوا عَلَيَّ؛ فَإِنَّ صَلاَتَكُم تَبْلُغُنِي حَيْثُ كُنْتُمْ.",
    transliteration: "",
    translation: {
      en: "He PBUH also said: ‘Do not take my grave as a place of habitual ceremony. Send prayers upon me, for verily your prayers reach me wherever you are.",
      bs: "Ne činite moj kabur mjestom proslavljanja, i donosite salavate na mene; zaista vaš salavat stiže do mene gdje god bili.",
    },
  },
  {
    id: "hisnul_muslim_221",
    category: "hisnul_muslim",
    title: {
      en: "The excellence of asking for Allah's blessings upon the Prophet pbuh",
      bs: "Vrijednost salavata",
    },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: الْبَخِيلُ مَنْ ذُكِرْتُ عِنْدَهُ فَلَمْ يُصَلِّ عَلَيَّ.",
    transliteration: "",
    translation: {
      en: "He PBUH also said: ‘A miser is one whom when I am mentioned to him, fails to send prayers upon me.",
      bs: "Škrtac je onaj pred kojim se ja spomenem, a on ne donese salavat na mene.",
    },
  },
  {
    id: "hisnul_muslim_222",
    category: "hisnul_muslim",
    title: {
      en: "The excellence of asking for Allah's blessings upon the Prophet pbuh",
      bs: "Vrijednost salavata",
    },
    arabic:
      "وَقَالَ صلى الله عليه وسلم:إِنَّ لِلَّهِ مَلاَئِكَةً سَيَّاحِينَ فِي الْأَرْضِ يُبَلِّغُونِي مِنْ أُمَّتِي السَّلاَمَ.",
    transliteration: "",
    translation: {
      en: "The Prophet [PBUH] said:'Indeed Allah has angels who roam the earth and they convey to me the greetings or prayers of peace of my 'Ummah nation.",
      bs: "Allah ima meleke koji putuju po Zemlji i dostavljaju mi selam od mog ummeta.",
    },
  },
  {
    id: "hisnul_muslim_223",
    category: "hisnul_muslim",
    title: {
      en: "The excellence of asking for Allah's blessings upon the Prophet pbuh",
      bs: "Vrijednost salavata",
    },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: مَا مِنْ أَحَدٍ يُسَلِّمُ عَلَيَّ إِلاَّ رَدَّ اللَّهُ عَلَيَّ رُوحِيَ حَتَّى أَرُدَّ عَلَيْهِ السَّلاَمَ.",
    transliteration: "",
    translation: {
      en: "The Prophet [PBUH] said: 'No one sends greetings or prayers of peace upon me but Allah returns my soul to me so that I may return his greetings",
      bs: "Nema nikoga ko mi nazove selam, a da mi Allah ne vrati dušu da mu uzvratim selam.",
    },
  },
  {
    id: "hisnul_muslim_224",
    category: "hisnul_muslim",
    title: {
      en: "spreading the greetings of Salam (Peace)",
      bs: "Širenje selama",
    },
    arabic:
      "قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم: لاَ تَدْخُلُوا الْجَنَّةَ حَتَّى تُؤْمِنُوا، وَلاَ تُؤْمِنُوا حَتَّى تَحَابُّوا، أَوَلاَ أَدُلُّكُم عَلَى شَيْءٍ إِذَا فَعَلْتُمُوهُ تَحَابَبْتُم، أَفْشُوا السَّلاَمَ بَيْنَكُمْ.",
    transliteration: "",
    translation: {
      en: "The Messenger of Allah said: ‘You shall not enter paradise until you believe, and you shall not believe until you love one another. Shall I not inform you of something, if you were to act upon it, you will indeed achieve mutual love for one another? Spread the greeting amongst yourselves.",
      bs: "Nećete ući u Džennet dok ne budete vjerovali, a nećete vjerovati dok se ne budete voljeli...",
    },
  },
  {
    id: "hisnul_muslim_225",
    category: "hisnul_muslim",
    title: {
      en: "spreading the greetings of Salam (Peace)",
      bs: "Širenje selama",
    },
    arabic:
      "ثَلاَثٌ مَنْ جَمَعَهُنَّ فَقَدْ جَمَعَ الْإِيمَانَ: الْإِنْصَافُ مِنْ نَفْسِكَ، وَبَذْلُ السَّلاَمِ لِلْعَالَمِ، وَالْإِنْفَاقُ مِنَ الإِقْتَارِ.",
    transliteration: "",
    translation: {
      en: "Aammar said: ‘Three characteristics, whoever combines them, has completed his faith: to be just, to spread greetings to all people and to spend charitably out of the little you have.",
      bs: "Tri su stvari, koje ako sakupiš - upotpunio si vjeru: da si pravedan prema sebi, da širiš selam ljudima i da udjelješ i kad si siromašan.",
    },
  },
  {
    id: "hisnul_muslim_226",
    category: "hisnul_muslim",
    title: {
      en: "spreading the greetings of Salam (Peace)",
      bs: "Širenje selama",
    },
    arabic:
      "وَعَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا: أنَّ رَجُلاً سَأَلَ النَّبِيَّ صلى الله عليه وسلم أيُّ الْإِسْلاَمِ خَيْرٌ قَالَ: تُطْعِمُ الطَّعَامَ، وَتَقْرأُ السَّلاَمَ عَلَى مَنْ عَرَفْتَ وَمَنْ لَمْ تَعْرِفْ.",
    transliteration: "",
    translation: {
      en: "Aabdullah Ibn Aamr reported that a man asked the Prophet : ‘Which Islam is the best?’. He replied: Feed the poor, and greet those whom you know as well as those whom you do not.",
      bs: "Koji je islam najbolji? Da nahraniš gladnog i da nazivaš selam onome koga znaš i onome koga ne znaš.",
    },
  },
  {
    id: "hisnul_muslim_227",
    category: "hisnul_muslim",
    title: {
      en: "How to reply to a disbeliever if he says Salam to you",
      bs: "Odgovor na selam nemuslimanu",
    },
    arabic:
      "إذَا سَلَّمَ عَلَيْكُمْ أَهْلُ الْكِتَابِ فَقُولُوا: وَعَلَيْكُمْ.",
    transliteration: "",
    translation: {
      en: "When the people of the Book greet you, reply by saying: And upon you.",
      bs: "Kada vas poselame Ehlu-l-Kitabije židovi i kršćani, recite: 'Ve alejkum' - I vama.",
    },
  },
  {
    id: "hisnul_muslim_228",
    category: "hisnul_muslim",
    title: {
      en: "Invocation upon hearing the cock's crow or the bray of a donkey",
      bs: "Kad pjevac kukuriče ili magarac rže",
    },
    arabic:
      "إِذَا سَمِعْتُمْ صِيَاحَ الدِّيَكَةِ فَاسْأَلُوا اللَّهَ مِنْ فَضْلِهِ؛ فَإِنَّهَا رَأَتْ مَلَكاً وَإِذَا سَمِعْتُمْ نَهِيقَ الْحِمَارِ فَتَعَوَّذُوا بِاللَّهِ مِنَ الشَّيطَانِ؛ فَإِنَّهُ رَأَى شَيْطَاناً.",
    transliteration: "",
    translation: {
      en: "If you hear the crow of a rooster, ask Allah for his bounty for it has seen an angel and if you hear the braying of an ass, seek refuge in Allah for it has seen a devil.",
      bs: "Kada čujete pijevca da kukuriče, molite Allaha za Njegovu dobrotu, jer je on vidio meleka. A kada čujete magarca da rže, utječite se Allahu od šejtana, jer je on vidio šejtana.",
    },
  },
  {
    id: "hisnul_muslim_229",
    category: "hisnul_muslim",
    title: {
      en: "Invocation upon hearing a dog barking in the night",
      bs: "Pas i magarac noću",
    },
    arabic:
      "إِذَا سَمِعْتُمْ نُبَاحَ الْكِلاَبِ وَنَهِيقَ الْحَمِيرِ بِاللَّيْلِ فَتَعَوَّذُوا بِاللَّهِ مِنْهُنَّ؛ فَإِنَّهُنَّ يَرَيْنَ مَا لاَ تَرَوْنَ.",
    transliteration: "",
    translation: {
      en: "If you hear the barking of dogs or the braying of asses at night, seek refuge in Allah for they see what you do not.",
      bs: "Kada čujete lavež pasa i rzanje magaraca noću, utječite se Allahu od njih...",
    },
  },
  {
    id: "hisnul_muslim_230",
    category: "hisnul_muslim",
    title: {
      en: "Invocation for someone you have spoken ill to",
      bs: "Dova za onoga koga si uvrijedio",
    },
    arabic:
      "قَالَ النَّبِيُّ صلى الله عليه وسلم: اللَّهُمَّ فَأَيُّمَا مُؤْمِنٍ سَبَبْتُهُ فَاجْعَلْ ذَلِكَ لَهُ قُرْبَةً إِلَيْكَ يَوْمَ الْقِيَامَةِ.",
    transliteration:
      "Allahumma fa-ayyuma mu/minin sababtuhu fajAAal thalika lahu qurbatan ilayka yawmal-qiyamah.",
    translation: {
      en: "O Allah, to any believer whom I have insulted, let that be cause to draw him near to You on the Day of Resurrection.",
      bs: "O Allahu, kojeg god vjernika da sam uvrijedio, učini mu to bliskošću Tebi na Sudnjem danu.",
    },
  },
  {
    id: "hisnul_muslim_231",
    category: "hisnul_muslim",
    title: {
      en: "How a Muslim should praise another Muslim",
      bs: "Pohvala muslimana",
    },
    arabic:
      "قَالَ النَّبِيُّ صلى الله عليه وسلم: إِذَا كَانَ أَحَدُكُم مَادِحاً صَاحِبَهُ لاَ مَحَالَةَ فَلْيَقُلْ: أَحْسِبُ فُلاَناً وَاللَّهُ حَسِيبُهُ، وَلاَ أُزَكِّي عَلَى اللَّهِ أَحَداً، أَحْسِبُهُ – إِنْ كَانَ يَعْلَمُ ذَاكَ – كَذَا وَكَذَا.",
    transliteration: "",
    translation: {
      en: "He said: ‘If anyone of you is impelled to praise his brother, then he should say: ‘I deem so-and-so to be…and Allah is his reckoner…and I don’t praise anyone, putting it i.e. my praising forward, in front of Allah’s commendation, however I assume him so and so’…if he knows that of him.",
      bs: "Ako neko od vas mora pohvaliti svoga brata, neka kaže: 'Smatram tog i tog takvim, a Allah najbolje zna o njemu...'",
    },
  },
  {
    id: "hisnul_muslim_232",
    category: "hisnul_muslim",
    title: {
      en: "What a Muslim should say when he is praised",
      bs: "Šta reći kada te hvale",
    },
    arabic:
      "اللَّهُمَّ لاَ تُؤَاخِذْنِي بِمَا يَقُولُونَ، وَاغْفِرْ لِي مَا لاَ يَعْلَمُونَ، [وَاجْعَلْنِي خَيْراً مِمَّا يَظُّنُّونَ].",
    transliteration:
      "Allaahumma laa tu'aakhithnee bimaa yaqooloona, waghfir lee maa laa ya'lamoona [waj'alnee khayram-mimmaa yadhunnoon]",
    translation: {
      en: "O Allah, do not call me to account for what they say and forgive me for what they have no knowledge of [and make me better than they imagine].",
      bs: "O Allahu, ne kazni me za ono što govore, i oprosti mi ono što oni ne znaju. [I učini me boljim nego što oni misle].",
    },
  },
  {
    id: "hisnul_muslim_233",
    category: "hisnul_muslim",
    title: {
      en: "The pilgrim's announcement of his arrival for Hajj or Umrah",
      bs: "Telbija (za hadž)",
    },
    arabic:
      "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ، وَالنِّعْمَةَ، لَكَ وَالْمُلْكَ، لاَ شَرِيكَ لَكَ.",
    transliteration:
      "Labbaykal-lahumma labbayk, labbayka la shareeka laka labbayk, innal-hamda wanniAAmata laka walmulk, la shareeka lak.",
    translation: {
      en: "Here I am O Allah, in response to Your call, here I am. Here I am, You have no partner, here I am. Verily all praise, grace and sovereignty belong to You. You have no partner.",
      bs: "Odazivam Ti se, Allahu, odazivam. Odazivam Ti se, Ti nemaš sudruga, odazivam Ti se...",
    },
  },
  {
    id: "hisnul_muslim_234",
    category: "hisnul_muslim",
    title: {
      en: "Saying Allahu Akbar when passing the Black Stone",
      bs: "Tekbir kod Hadžeru-l-esveda",
    },
    arabic:
      "طَافَ النَّبيُّ صلى الله عليه وسلم بِالْبَيْتِ عَلَى بَعِيرٍ كُلَّمَا أَتَى الرُّكْنَ أَشَارَ إِلَيْهِ بِشَيْءٍ عِنْدَهُ وَكَبَّرَ.",
    transliteration:
      "The Prophet circled the KaAAbah on a camel, every time he reached the black stone he would point to it with his staff and say: (Allahu akbar)",
    translation: {
      en: "The Prophet circled the KaAAbah on a camel, every time he reached the black stone he would point to it with his staff and say: Allah is the greatest",
      bs: "Poslanik, s.a.v.s., je tavafio oko Kabe na devi, pa kad god bi došao do 'Uglja' Hadžeru-l-esveda, pokazao bi prema njemu i donio tekbir.",
    },
  },
  {
    id: "hisnul_muslim_235",
    category: "hisnul_muslim",
    title: {
      en: "Invocation to be recited between the Yemenite Corner and the Black Stone",
      bs: "Dova između Jemenskog ugla i Crnog kamena",
    },
    arabic:
      "﴿رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ﴾.",
    transliteration:
      "The Prophet PBUH used to say between the Yemeni corner and the black stone: (Rabbana atina fee alddunya hasanatan wafee al-akhirati hasanatan waqina AAathaba alnnar)[Al-Baqarah: 201]",
    translation: {
      en: "The Prophet PBUH used to say between the Yemeni corner and the black stone: O our Lord, grant us the best in this life and the best in the next life, and protect us from the punishment of the Fire.",
      bs: "Gospodaru naš, daj nam dobro na ovom svijetu i dobro na onom svijetu, i sačuvaj nas patnje u Vatri.",
    },
  },
  {
    id: "hisnul_muslim_236",
    category: "hisnul_muslim",
    title: {
      en: "Invocation to be recited while standing at Safa and Marwah",
      bs: "Dova na Safi i Mervi",
    },
    arabic:
      "لَمَّا دَنَا النَّبِيُّ صلى الله عليه وسلم مِنَ الصَّفَا قَرَأَ: ﴿إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَآئِرِ اللَّهِ﴾ أَبْدَأُ بِمَا بَدَأَ اللَّهُ بِهِ فَبَدَأَ بِالصَّفَا فَرَقِيَ عَلَيْهِ حَتَّى رَأَى الْبَيْتَ، فَاسْتَقْبَلَ الْقِبْلَةَ، فَوَحَّدَ اللَّهَ وَكبَّرَهُ وَقَالَ: لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الْأَحْزَابَ وَحْدَهُ، ثُمَّ دَعَا بَيْنَ ذلكَ. قَالَ مِثْلَ هَذَا ثَلاَثَ مَرَّاتٍ الْحَدِيثُ. وَفِيهِ: فَفَعَلَ عَلَى الْمَرْوَةِ كَمَا فَعَلَ عَلَى الصَّفَا.",
    transliteration:
      "Jabir said when describing the Prophet’s pilgrimage: ‘…and when he approached mount Safa he recited: ( Innas-safa wa-almarwata min shaAAa-iri Allah ….) (Abda-o bima badaal-lahu bih.) so he started with Safa and climed it until he could see the KaAAbah, he then faced it and said: (Allahu akbar, Allahu akbar, Allahu akbar.) and then he would say the following three times making a supplication (one should make a personal supplication) after each time: (La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa AAala kulli shayin qadeer, la ilaha illal-lahu wahdah, anjaza waAAdah, wanasara AAabdah, wahazamal -ahzaba wahdah.)(he would repeat this action at Marwah.",
    translation: {
      en: "Jabir said when describing the Prophet’s pilgrimage: ‘…and when he approached mount Safa he recited: Indeed Safa and Marwah are from the places of worship of Allah… I begin with what Allah began with. so he started with Safa and climed it until he could see the KaAAbah, he then faced it and said: Allah is the greatest, Allah is the greatest, Allah is the greatest. and then he would say the following three times making a supplication one should make a personal supplication after each time: None has the right to be worshipped except Allah, alone, without partner.To Him belongs all sovereignty and praise and He is over all things amnipotent. None has the right to be worshipped except Allah alone. He fulfilled His promise, aided His Servant and single-handedly defeated the allies. he would repeat this action at Marwah.",
      bs: "Poslanik, s.a.v.s., je, približivši se Safi, proučio: 'Safa i Merva su Allahova časna mjesta...' Počinjem s onim s čime je Allah počeo...",
    },
  },
  {
    id: "hisnul_muslim_237",
    category: "hisnul_muslim",
    title: {
      en: "Invocation to be recited on the Day of Arafat",
      bs: "Dova na dan Arefata",
    },
    arabic:
      "قَالَ النَّبِيُّ صلى الله عليه وسلم: خَيْرُ الدُّعَاءِ دُعَاءُ يَوْمِ عَرَفَةَ، وَخَيْرُ مَا قُلْتُ أَنَا وَالنَّبيُّونَ مِنْ قَبْلِي: لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
    transliteration:
      "The best of supplications is the supplication on the day of AAarafah and the best which I and the Prophets before me have said (is): (La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa AAala kulli shayin qadeer.)",
    translation: {
      en: "The best of supplications is the supplication on the day of AAarafah and the best which I and the Prophets before me have said is: None has the right to be worshipped except Allah, alone, without partner. To Him belongs all praise and sovereignty and He is over all things omnipotent.",
      bs: "Najbolja dova je dova na dan Arefata, a najbolje što sam rekao ja i vjerovjesnici prije mene je: Nema boga osim Allaha...",
    },
  },
  {
    id: "hisnul_muslim_238",
    category: "hisnul_muslim",
    title: {
      en: "Supplication to be recited at the sacred area of Muzdalifah",
      bs: "Dova na Muzdelifi",
    },
    arabic:
      "رَكِبَ النَّبِيُّ صلى الله عليه وسلم الْقَصْوَاءَ حَتَّى أَتَى الْمَشْعَرَ الْحَرَامَ فَاسْتَقْبَلَ الْقِبْلَةَ فَدَعَاهُ، وَكَبَّرَهُ، وَهَللَّهُ، وَوَحَّدَهُ فَلَمْ يَزَلْ وَاقِفاً حَتَّى أَسْفَرَ جِدَّاً فَدَفَعَ قَبْلَ أَنْ تَطْلُعَ الشَّمسُ.",
    transliteration: "",
    translation: {
      en: "The Prophet rode his camel, Al-Qaswa, until he reached the sacred area Al-Mash aril Haraam. Then he faced the Qiblah and invoked Allah, and repeatedly said the words: Allaahu Akbar Allah is the Most Great, Allaahu Ahad Allah is One and Laa ilaaha illallaah There is none worthy of worship but Allah. He remained stationary until the sky became yellow with the dawn, and then pressed on before sunrise.",
      bs: "Poslanik je jahao devu dok nije došao do Meš'aril-harama... pa je dovio, donosio tekbir i tehlil...",
    },
  },
  {
    id: "hisnul_muslim_239",
    category: "hisnul_muslim",
    title: {
      en: "Saying Allahu Akbar while stoning the three pillars at Mina",
      bs: "Bacanje kamenčića na džemretima",
    },
    arabic:
      "يُكَبِّرُ كُلَّمَا رَمَى بِحَصَاةٍ عِنْدَ الْجِمَارِ الثَّلاَثِ، ثُمَّ يَتَقَدَّمُ، ويَقِفُ يَدْعُو مُسْتَقْبِلَ الْقِبلَةِ، رَافِعاً يَدَيْهِ بَعْدَ الْجَمْرَةِ الْأُولَى وَالثَّانِيَةِ. أَمَّا جَمْرَةُ الْعَقَبَةِ فَيَرْمِيهَا وَيُكَبِّرُ عِنْدَ كُلِّ حَصَاةٍ وَيَنْصَرِفُ وَلاَ يَقِفُ عِنْدَهَا.",
    transliteration: "",
    translation: {
      en: "The Prophet PBUH said Allaahu 'Akbar Allah is the Most Great with each pebble he threw at the three pillars. Then he went forward, stood facing the Qiblah and raised his hands and called upon Allah. That was after stoning the first and second pillar As for the third, he stoned it and called out Allahu Akbar with every pebble he threw but when he was finished he left without standing at it for supplications.",
      bs: "Donosi se tekbir pri svakom bačenom kamenčiću...",
    },
  },
  {
    id: "hisnul_muslim_240",
    category: "hisnul_muslim",
    title: {
      en: "What to say when surprised or startled",
      bs: "Kad se čovjek začudi",
    },
    arabic: "سُبْحَانَ اللَّهِ!.",
    transliteration: "Subhanal-lah!.",
    translation: {
      en: "How perfect Allah is.",
      bs: "Subhanallah!",
    },
  },
  {
    id: "hisnul_muslim_241",
    category: "hisnul_muslim",
    title: {
      en: "What to say when surprised or startled",
      bs: "Kad se čovjek začudi",
    },
    arabic: "اللَّهُ أَكْبَرُ!.",
    transliteration: "Allahu akbar.",
    translation: {
      en: "Allah is the greatest.",
      bs: "Allahu Ekber!",
    },
  },
  {
    id: "hisnul_muslim_242",
    category: "hisnul_muslim",
    title: {
      en: "What to say when something that pleases you happens",
      bs: "Pri radosnom događaju",
    },
    arabic:
      "كَانَ النَّبيُّ صلى الله عليه وسلم إِذَا أَتَاهُ أَمْرٌ يَسُرُّهُ أَوْ يُسَرُّ بِهِ خَرَّ سَاجِداً شُكْراً لِلَّهِ تَبَارَكَ وَتَعَالَى.",
    transliteration: "",
    translation: {
      en: "The Prophet PBUH would prostrate in gratitude to Allah upon receiving news which pleased him or which caused pleasure. ",
      bs: "Poslanik, s.a.v.s., bi učinio sedždu zahvalnosti Allahu kada bi mu došla radosna vijest.",
    },
  },
  {
    id: "hisnul_muslim_243",
    category: "hisnul_muslim",
    title: {
      en: "What to say when you feel a pain in your body",
      bs: "Dova kod bolova u tijelu",
    },
    arabic:
      "ضَعْ يَدَكَ عَلَى الَّذِي تَألَّمَ مِنْ جَسَدِكَ وَقُلْ: بِسْمِ اللَّهِ، ثَلاَثاً، وَقُلْ سَبْعَ مَرَّاتٍ: أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ.",
    transliteration:
      "Place your hand at the site of the pain and say: (Bismil-lah (three times the supplicate seven times: (aAAoothu billahi waqudratih min sharri ma ajidu wa-ohathir.)",
    translation: {
      en: "Place your hand at the site of the pain and say: In the name of Allahthree times the supplicate seven times: I take refuge in Allah and within His omnipotence from the evil that I feel and am wary of.",
      bs: "Stavi ruku na mjesto koje te boli i reci tri puta: 'Bismillah'. Zatim reci sedam puta: 'Euzu billahi ve kudretihi min šerri ma edžidu ve uhadiru' - Utječem se Allahu i Njegovoj moći od zla koje osjećam i kojeg se pribojavam.",
    },
  },
  {
    id: "hisnul_muslim_244",
    category: "hisnul_muslim",
    title: {
      en: "What to say when you fear you may afflict something with the evil eye",
      bs: "Strah od uroka",
    },
    arabic:
      "إِذَا رَأَى أَحَدُكُم مِنْ أَخِيهِ، أَوْ مِنْ نَفْسِهِ، أَوْ مِنْ مَالِهِ مَا يُعْجِبُهُ [فَلْيَدْعُ لَهُ بِالْبَرَكَةِ] فَإِنَّ الْعَيْنَ حَقٌّ.",
    transliteration: "",
    translation: {
      en: "If you see anything of your brother that pleases you, or of his person or of his property [then ask Allah to bless him in it] for the envious eye is real.",
      bs: "Ako neko od vas vidi kod svog brata, ili pri sebi, ili u svom imetku nešto što mu se dopadne, [neka moli za blagoslov], jer je urok istina.",
    },
  },
  {
    id: "hisnul_muslim_245",
    category: "hisnul_muslim",
    title: {
      en: "What to say when you feel frightened",
      bs: "Kada se prepadneš",
    },
    arabic: "لاَ إِلَهَ إِلاَّ اللَّهُ!.",
    transliteration: "La ilaha illal-lah.",
    translation: {
      en: "None has the right to be worshipped except Allah.",
      bs: "La ilahe illallah!",
    },
  },
  {
    id: "hisnul_muslim_246",
    category: "hisnul_muslim",
    title: {
      en: "What to say when slaughtering or sacrificing an animal",
      bs: "Pri klanju kurbana",
    },
    arabic:
      "بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ [اللَّهُمَّ مِنْكَ وَلَكَ] اللَّهُمَّ تَقَبَّلْ مِنِّي.",
    transliteration:
      "Bismil-lah wallahu akbar, allahumma minka walak, allahumma taqabbal minnee.",
    translation: {
      en: "In the name of Allah, and Allah is the greatest. O Allah, it is from You and belongs to You, O Allah, accept this from me.",
      bs: "Bismillah, Allahu Ekber. O Allahu, ovo je od Tebe i za Tebe. O Allahu, primi ovo od mene.",
    },
  },
  {
    id: "hisnul_muslim_247",
    category: "hisnul_muslim",
    title: {
      en: "What to say to foil the devil's plots",
      bs: "Zaštita od šejtanskih spletki",
    },
    arabic:
      "أَعُوذُ بكَلِمَاتِ اللَّهِ التَّامَّاتِ الَّتِي لاَ يُجَاوِزُهُنَّ بَرٌّ وَلاَ فَاجِرٌ: مِنْ شَرِّ مَا خَلَقَ، وَبَرَأَ وَذَرَأَ، وَمِنْ شَرِّ مَا يَنْزِلُ مِنَ السَّمَاءِ، وَمِنْ شَرِّ مَا يَعْرُجُ فيهَا، وَمِنْ شَرِّ مَا ذَرَأَ فِي الْأَرْضِ، وَمِنْ شَرِّ مَا يَخْرُجُ مِنْهَا، وَمِنْ شَرِّ فِتَنِ اللَّيْلِ وَالنَّهَارِ، وَمِنْ شَرِّ كُلِّ طَارِقٍ إِلاَّ طَارِقاً يَطْرُقُ بِخَيْرٍ يَا رَحْمَنُ.",
    transliteration:
      "aAAoothu bikalimatil-lahit-tammat, allatee la yujawizuhunna barrun wala fajir min sharri ma khalaq, wabaraa watharaa, wamin sharri ma yanzilu minas-sama/, wamin sharri ma yaAAruju feeha, wamin sharri ma tharaa fil-ard, wamin sharri ma yakhruju minha, wamin sharri fitnanil-layli wannahar, wamin sharri kulli tariqin illa tariqan yatruqu bikhayrin ya Rahman.",
    translation: {
      en: "I take refuge within Allah’s perfect words which no righteous or unrighteous person can transgress, from all the evil that He has created, made and originated. I take refuge from the evil that descends from the sky and the evil that rises up to it. I take refuge from the evil that is spread on Earth and the evil that springs from her, and I take refuge from the evil of the tribulations of night and day, and the evil of one who visits at night except the one who brings good, O Merciful One.",
      bs: "Utječem se Allahovim savršenim riječima...",
    },
  },
  {
    id: "hisnul_muslim_248",
    category: "hisnul_muslim",
    title: {
      en: "Repentance and seeking forgiveness",
      bs: "Traženje oprosta i pokajanje",
    },
    arabic:
      "قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم: وَاللَّهِ إِنِّي لأَسْتَغفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ فِي الْيَوْمِ أَكْثَرَ مِنْ سَبْعِينَ مَرَّةٍ.",
    transliteration: "",
    translation: {
      en: "The Messenger of Allah said: ‘By Allah, I seek forgiveness and repent to Allah, more than seventy times a day.",
      bs: "Tako mi Allaha, ja zatražim oprost od Allaha i pokajem Mu se dnevno više od sedamdeset puta.",
    },
  },
  {
    id: "hisnul_muslim_249",
    category: "hisnul_muslim",
    title: { en: "Repentance and seeking forgiveness", bs: "Traženje oprosta" },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: يَا أَيُّهَا النَّاسُ تُوبُوا إِلَى اللَّهِ فَإِنِّي أَتُوبُ فِي الْيَوْمِ إِلَيْهِ مِائَةَ مَرَّةٍ.",
    transliteration: "",
    translation: {
      en: "He also said: ‘O People, Repent! Verily I repent to Allah, a hundred times a day.",
      bs: "O ljudi, pokajte se Allahu, jer se ja Njemu kajem sto puta dnevno.",
    },
  },
  {
    id: "hisnul_muslim_250",
    category: "hisnul_muslim",
    title: { en: "Repentance and seeking forgiveness", bs: "Estagfirullah" },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: مَنْ قَالَ أَسْتَغْفِرُ اللَّهَ الْعَظيمَ الَّذِي لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ القَيّوُمُ وَأَتُوبُ إِلَيهِ، غَفَرَ اللَّهُ لَهُ وَإِنْ كَانَ فَرَّ مِنَ الزَّحْفِ.",
    transliteration:
      "He also said: ‘Whoever says:(Astaghfirul-lahal-lathee la ilaha illa huwal-hayyul-qayyoomu wa-atoobu ilayh.) Allah would forgive him even if he was one who fled during the advance of an army.",
    translation: {
      en: "He also said: ‘Whoever says:I seek Allah’s forgiveness, besides whom, none has the right to be worshipped except He, The Ever Living, The Self-Subsisting and Supporter of all, and I turn to Him in repentance. Allah would forgive him even if he was one who fled during the advance of an army.",
      bs: "Ko kaže: 'Estagfirullah el-azim...' - Tražim oprost od Allaha Veličanstvenog... Allah će mu oprostiti grijehe makar pobjegao sa bojnog polja.",
    },
  },
  {
    id: "hisnul_muslim_251",
    category: "hisnul_muslim",
    title: {
      en: "Repentance and seeking forgiveness",
      bs: "Najbliži trenutak Allahu",
    },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: أَقْرَبُ مَا يَكُونُ الرَّبُّ مِنَ الْعَبْدِ فِي جَوْفِ اللَّيْلِ الآخِرِ فَإِنِ اسْتَطَعْتَ أَنْ تَكُونَ مِمَّنْ يَذْكُرُ اللَّهَ فِي تِلْكَ السَّاعَةِ فَكُنْ.",
    transliteration: "",
    translation: {
      en: "He said: ‘The nearest the Lord comes to His servant is in the middle of the night, so if you are able to be of those who remember Allah at that time, then be so.",
      bs: "Gospodar je najbliži robu u zadnjem dijelu noći...",
    },
  },
  {
    id: "hisnul_muslim_252",
    category: "hisnul_muslim",
    title: {
      en: "Repentance and seeking forgiveness",
      bs: "Najbliži trenutak Allahu",
    },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: أَقْرَبُ مَا يَكُونُ الْعَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِدٌ فَأَكثِرُوا الدُّعَاءَ.",
    transliteration: "",
    translation: {
      en: "He also said: ‘The nearest a servant is to his Lord is when he is prostrating, so supplicate much therein.",
      bs: "Rob je najbliži Gospodaru dok je na sedždi, pa mnogo dovite.",
    },
  },
  {
    id: "hisnul_muslim_253",
    category: "hisnul_muslim",
    title: { en: "Repentance and seeking forgiveness", bs: "Traženje oprosta" },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: إِنَّهُ لَيُغَانُ عَلَى قَلْبِي وَإِنِّي لأَسْتَغْفِرُ اللَّهَ فِي الْيَوْمِ مِائَةَ مَرَّةٍ.",
    transliteration: "",
    translation: {
      en: "He also said: ‘verily my heart becomes preoccupied, and verily I seek Allah’s forgiveness a hundred times a day.preoccupied: i.e. in a state of ‘forgetfulness’. The Prophet always used to increase in his remembrance of his Lord, in attaining a nearness to Allah and having consciousness of Allah to the extent that if this intensity lessened in anyway, he would regard it as a sin and would then race to seek forgiveness from Allah.",
      bs: "Moje srce se zamagli, pa ja zatražim oprost od Allaha sto puta na dan.",
    },
  },
  {
    id: "hisnul_muslim_254",
    category: "hisnul_muslim",
    title: {
      en: "The excellence of remembering Allah",
      bs: "Vrijednost zikra",
    },
    arabic:
      "قَالَ صلى الله عليه وسلم مَنْ قَالَ: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ فِي يَوْمٍ مِائَةَ مَرَّةٍ حُطَّتْ خَطَايَاهُ وَلَوْ كَانَتْ مِثْلَ زَبَدِ الْبَحْر.",
    transliteration:
      "Whoever says:(Subhanal-lahi wabihamdih.) a hundred times during the day, his sins are wiped away, even if they are like the foam of the sea.",
    translation: {
      en: "Whoever says:How perfect Allah is and I praise Him. a hundred times during the day, his sins are wiped away, even if they are like the foam of the sea.",
      bs: "Ko kaže 'Subhanallahi ve bihamdihi' sto puta na dan, bit će mu oprosteni grijesi makar ih bilo kao morske pjene.",
    },
  },
  {
    id: "hisnul_muslim_255",
    category: "hisnul_muslim",
    title: {
      en: "The excellence of remembering Allah",
      bs: "Vrijednost zikra",
    },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: مَنْ قَالَ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ عَشْرَ مِرَارٍ، كَانَ كَمَنْ أَعْتَقَ أَرْبَعَةَ أَنْفُسٍ مِنْ وَلَدِ إِسْمَاعِيلَ.",
    transliteration:
      "Abu Hurayrah reported that the Messenger of Allah said: ‘Whoever says: (La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa AAala kulli shayin qadeer.) a hundred times during the day, has the reward of freeing ten slaves, a hundred good deeds are recorded for him and a hundred bad deeds are wiped away and he has gained refuge from the devil that day until evening and none shall come with anything better except someone who has done more.",
    translation: {
      en: "Abu Hurayrah reported that the Messenger of Allah said: ‘Whoever says: None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise and He is over all things omnipotent. a hundred times during the day, has the reward of freeing ten slaves, a hundred good deeds are recorded for him and a hundred bad deeds are wiped away and he has gained refuge from the devil that day until evening and none shall come with anything better except someone who has done more.",
      bs: "Ko kaže: 'La ilahe illallah vahdehu la šerike leh...' sto puta na dan, kao da je oslobodio deset robova...",
    },
  },
  {
    id: "hisnul_muslim_256",
    category: "hisnul_muslim",
    title: {
      en: "The excellence of remembering Allah",
      bs: "Vrijednost zikra",
    },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ، حَبِيبَتَانِ إِلَى الرَّحْمَنِ: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحانَ اللَّهِ الْعَظِيمِ.",
    transliteration:
      "Aboo Hurayrah reported that the Messenger of Allah said:’(There are) Two words, (which are ) light on the tongue, heavy on the Scale and beloved to The Most Gracious: (Subhanal-lahi wabihamdih, wasubhanal-lahil-AAatheem.)",
    translation: {
      en: "Aboo Hurayrah reported that the Messenger of Allah said:’There are Two words, which are  light on the tongue, heavy on the Scale and beloved to The Most Gracious: How perfect Allah is and I praise Him. How perfect Allah is, The Supreme.",
      bs: "Dvije su riječi lahke na jeziku, teške na vagi, a drage Milostivom: Subhanallahi ve bihamdihi, Subhanallahil-azim.",
    },
  },
  {
    id: "hisnul_muslim_257",
    category: "hisnul_muslim",
    title: {
      en: "The excellence of remembering Allah",
      bs: "Vrijednost zikra",
    },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: لَأَنْ أَقُولَ سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلاَ إِلَهَ إِلاَّ اللَّهُ، وَاللَّهُ أَكْبَرُ، أَحَبُّ إِلَيَّ مِمَّا طَلَعَتْ عَلَيْهِ الشَّمسُ.",
    transliteration:
      "Aboo Hurayrah reported that the Messenger of Allah said: ‘Saying: (Subhanal-lah, walhamdu lillah, la ilaha illal-lah wallahu akbar.) is more beloved to me than everything the sun has risen over.",
    translation: {
      en: "Aboo Hurayrah reported that the Messenger of Allah said: ‘Saying: How perfect Allah is, and all praise is for Allah. None has the right to be worshipped except Allah, and Allah is the greatest. is more beloved to me than everything the sun has risen over.",
      bs: "Da kažem: 'Subhanallah, vel-hamdulillah, ve la ilahe illallah, vallahu ekber', draže mi je od svega što Sunce obasjava.",
    },
  },
  {
    id: "hisnul_muslim_258",
    category: "hisnul_muslim",
    title: {
      en: "The excellence of remembering Allah",
      bs: "Vrijednost zikra",
    },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: أَيَعْجِزُ أَحَدُكُم أَنْ يَكْسِبَ كُلَّ يَوْمٍ أَلْفَ حَسَنَةٍ فَسَأَلَهُ سَائِلٌ مِنْ جُلَسَائِهِ كَيْفَ يَكْسِبُ أَحَدُنَا أَلْفَ حَسَنَةٍ؟ قَالَ: يُسَبِّحُ مِائَةَ تَسْبِيحَةٍ، فَيُكتَبُ لَهُ أَلْفُ حَسَنَةٍ أَوْ يُحَطُّ عَنْهُ أَلْفُ خَطِيئَةٍ.",
    transliteration:
      "Sa’d said: ‘We were sitting with the Messenger of Allah , and he said: ‘Are any of you unable to gain a thousand good deeds each day?’ Somebody then asked him : How does one achieve a thousand good deeds? He replied: ‘He should say: (Subhanal-lah.) one hundred times, for a thousand good deeds are recorded for him or a thousand bad deeds are wiped away.",
    translation: {
      en: "Sa’d said: ‘We were sitting with the Messenger of Allah , and he said: ‘Are any of you unable to gain a thousand good deeds each day?’ Somebody then asked him : How does one achieve a thousand good deeds? He replied: ‘He should say: How perfect Allah is. one hundred times, for a thousand good deeds are recorded for him or a thousand bad deeds are wiped away.",
      bs: "Zar neko od vas ne može dnevno zaraditi hiljadu dobrih djela? ... Neka kaže 'Subhanallah' sto puta...",
    },
  },
  {
    id: "hisnul_muslim_259",
    category: "hisnul_muslim",
    title: {
      en: "The excellence of remembering Allah",
      bs: "Vrijednost zikra",
    },
    arabic:
      "مَنْ قَالَ: سُبْحَانَ اللَّهِ الْعَظِيمِ وَبِحَمْدِهِ غُرِسَتْ لَهُ نَخْلَةٌ فِي الْجَنَّةِ.",
    transliteration:
      "Jabbir related that the Prophet said: ‘Whoever says: (Subhanal-lahil-AAatheemi wabihamdih.) a palm tree is planted for him in paradise.",
    translation: {
      en: "Jabbir related that the Prophet said: ‘Whoever says: How perfect Allah is . The Supreme, and I praise Him. a palm tree is planted for him in paradise.",
      bs: "Ko kaže 'Subhanallahil-azim ve bihamdihi', zasadi mu se palma u Džennetu.",
    },
  },
  {
    id: "hisnul_muslim_260",
    category: "hisnul_muslim",
    title: {
      en: "The excellence of remembering Allah",
      bs: "Riznica iz Dženneta",
    },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: يَا عَبْدَ اللَّهِ بْنَ قَيْسٍ أَلاَ أَدُلُّكَ عَلَى كَنْزٍ مِنْ كُنُوزِ الْجَنَّةِ؟ فَقُلْتُ: بَلَى يَا رَسُولَ اللَّهِ، قَالَ: قُلْ لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ.",
    transliteration:
      "AAabdullah Ibn Qays related that the Prophet said to him: ‘ O ‘AAabdullah Ibn Qays, shall I not inform you of a treasure from the treasures of paradise?’ He then said: ‘Say: (La hawla wala quwwata illa billah.)",
    translation: {
      en: "AAabdullah Ibn Qays related that the Prophet said to him: ‘ O ‘AAabdullah Ibn Qays, shall I not inform you of a treasure from the treasures of paradise?’ He then said: ‘Say: There is no might nor power except with Allah.",
      bs: "O Abdullah b. Kajs, hoćeš li da ti ukažem na jednu od džennetksih riznica? Reci: La havle ve la kuvvete illa billah.",
    },
  },
  {
    id: "hisnul_muslim_261",
    category: "hisnul_muslim",
    title: {
      en: "The excellence of remembering Allah",
      bs: "Najdraže riječi Allahu",
    },
    arabic:
      "وَقَالَ صلى الله عليه وسلم: أَحَبُّ الْكَلاَمِ إِلَى اللَّهِ أَرْبَعٌ: سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلاَ إِلَهَ إِلاَّ اللَّهُ، وَاللَّهُ أَكْبَرُ، لاَ يَضُرُّكَ بِأَيِّهِنَّ بَدَأتَ.",
    transliteration:
      "the most beloved words to Allah are four: (Subhanal-lah, walhamdu lillah, wala ilaha illal-lah, wallahu akbar.(it does not matter which of them you start with.",
    translation: {
      en: "the most beloved words to Allah are four: How perfect Allah is, all praise is for Allah. None has the right to be worshipped except Allah and Allah is the greatest.it does not matter which of them you start with.",
      bs: "Najdraže riječi Allahu su četiri: Subhanallah, El-hamdu lillah, La ilahe illallah i Allahu Ekber...",
    },
  },
  {
    id: "hisnul_muslim_262",
    category: "hisnul_muslim",
    title: {
      en: "The excellence of remembering Allah",
      bs: "Podučavanje zikru",
    },
    arabic:
      "جَاءَ أَعْرَابِيٌّ إِلَى رَسُولِ اللَّهِ صلى الله عليه وسلم فَقَالَ: عَلِّمْنِي كَلاماً أَقُولُهُ: قَالَ: قُلْ: لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، اللَّهُ أَكْبَرُ كَبِيراً، وَالْحَمْدُ لِلَّهِ كَثِيراً، سُبْحَانَ اللَّهِ رَبِّ العَالَمِينَ، لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ الْعَزِيزِ الْحَكِيمِ قَالَ: فَهَؤُلاَءِ لِرَبِّي، فَمَا لِي؟ قَالَ: قُلْ: اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَارْزُقْنِي.",
    transliteration:
      "SaAAd Ibn Abee Waqqas narrated that a man came to the Messenger of Allah and said to him: ‘Teach me something which I should say?’ He said: ‘Say: (La ilaha illal-lah, wahdahu la shareeka lah, Allahu akbaru kabeera, walhamdu lillahi katheera, subhanal-lahi rabbil-AAalameen, la hawla wala quwwata illa billahil-AAazeezil-hakeem.) the man then said: ‘These are for my Lord, and what is for me?’ He replied: ‘Say:(Allahummagh-fir lee, warhamnee, wahdinee, warzuqnee.)",
    translation: {
      en: "SaAAd Ibn Abee Waqqas narrated that a man came to the Messenger of Allah and said to him: ‘Teach me something which I should say?’ He said: ‘Say: None has the right to be worshipped except Allah, alone without partener. Allah is most great and much praise is for Allah. How perfect Allah is, Lord of the worlds. There is no might nor power except with Allah, The Exalted in might, The Wise. the man then said: ‘These are for my Lord, and what is for me?’ He replied: ‘Say:O Allah, forgive me, have mercy upon me, guide me and grant me sustenance.",
      bs: "Reci: La ilahe illallah vahdehu la šerike leh, Allahu ekber kebira, vel-hamdu lillahi kesira...",
    },
  },
  {
    id: "hisnul_muslim_263",
    category: "hisnul_muslim",
    title: {
      en: "The excellence of remembering Allah",
      bs: "Dova za novog muslimana",
    },
    arabic:
      "كَانَ الرَّجُلُ إِذَا أَسْلَمَ عَلَّمَهُ النَّبيُّ صلى الله عليه وسلم الصَّلاَةَ ثُمَّ أَمَرَهُ أَنْ يَدْعُوَ بِهَؤُلاَءِ الْكَلِمَاتِ: اللَّهُمَّ اغْفِرِ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَعَافِنِي وَارْزُقْنِي.",
    transliteration:
      "Tariq Al-AshjaAAee said: ‘When someone would embrace Islam, the Prophet would teach him how to perform prayer and then order him to supplicate with the following words: (Allahummagh-fir lee, warhamnee, wahdinee, waAAafinee warzuqnee.)",
    translation: {
      en: "Tariq Al-AshjaAAee said: ‘When someone would embrace Islam, the Prophet would teach him how to perform prayer and then order him to supplicate with the following words: O Allah, forgive me, have mercy upon me, guide me, give me health and grant me sustenance.",
      bs: "Allahummagfir li, verhamni, ve ahdini, ve a'fini, verzukni.",
    },
  },
  {
    id: "hisnul_muslim_264",
    category: "hisnul_muslim",
    title: {
      en: "The excellence of remembering Allah",
      bs: "Najbolji zikr i dova",
    },
    arabic:
      "إِنَّ أَفْضَلَ الدُّعَاءِ الْحَمْدُ لِلَّهِ، وَأَفْضَلَ الذِّكْرِ لاَ إِلَهَ إِلاَّ اللَّهُ.",
    transliteration:
      "Jabir Ibn ‘AAabdullah related that the Messenger of Allah said: ‘Verily, the best supplication is: (Alhamdu lillah) and indeed, the best form of remembrance is: (La ilaha illal-lah.)",
    translation: {
      en: "Jabir Ibn ‘AAabdullah related that the Messenger of Allah said: ‘Verily, the best supplication is: All praise is for Allah. and indeed, the best form of remembrance is: None has the right to be worshipped except Allah.",
      bs: "Najbolja dova je El-hamdu lillah, a najbolji zikr je La ilahe illallah.",
    },
  },
  {
    id: "hisnul_muslim_265",
    category: "hisnul_muslim",
    title: { en: "The excellence of remembering Allah", bs: "Dobra djela" },
    arabic:
      "الباقيات الصالحات : سبحان الله والحمد لله ، ولا إله إلا الله ،والله أكبر ،و لا حول ولا قوة إلا بالله",
    transliteration:
      "The good deeds which endure are 'Subhaanallaah.', and 'Walhamdulillaah.', and 'Wa laa ilaaha illallaah'., and 'Wallaahu Akbar',and 'Wa laa hawla wa laa guwawala illaa billaah'.",
    translation: {
      en: "The good deeds which endure are 'Glorified is Allah', and 'The praise is for Allah', and 'but There is none worthy of worship Allah', and 'Allah is the Most Great', and 'There is no power and no might except by Allah'",
      bs: "Dobra djela koja vječno ostaju su: Subhanallah, El-hamdu lillah, La ilahe illallah, Allahu Ekber i La havle ve la kuvvete illa billah.",
    },
  },
  {
    id: "hisnul_muslim_266",
    category: "hisnul_muslim",
    title: {
      en: "How the Prophet glorified Allah",
      bs: "Kako je Poslanik činio tesbih",
    },
    arabic:
      "عَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو رضي الله عنه قَالَ: رَأَيْتُ النَّبيَّ صلى الله عليه وسلم يَعْقِدُ التَّسْبِيحَ وفي زيادةٍ: بِيَمِينِهِ.",
    transliteration: "",
    translation: {
      en: "Tasbeeh, it means here, to say: Subhanal-lah, alhamdu lillah, Allahu akbar. AAabdullah Ibn AAamr said: ’I saw the prophet make tasbeeh with his right hand.",
      bs: "Vidio sam Poslanika, s.a.v.s., kako tesbih čini na prste desne ruke.",
    },
  },
  {
    id: "dua_against_enemies",
    category: "dua",
    title: {
      en: "Dua against enemies",
      bs: "Dova protiv neprijatelja",
    },
    arabic:
      "اللَّهُمَّ مُنْزِلَ الْكِتَابِ سَرِيعَ الْحِسَابِ اهْزِمِ الأَحْزَابَ اللَّهُمَّ اهْزِمْهُمْ وَزَلْزِلْهُمْ",
    transliteration:
      "Allahumme Munzile-l-Kitabi, seri'u-l-hisabi ihzimi-l-ahzab! Allahumme, ihzimhum ve zelzilhum.",
    translation: {
      en: "O Allah, Revealer of the Book, Swift to take account, defeat the groups (of Confederates). O Allah, defeat them and shake them.",
      bs: "Allahu, Dostavitelju Knjige, Koji brzo sviđaš račune. Porazi protivnike! Allahu, porazi ih sve i uzdrmaj ih (razori ih)!",
    },
  },
];

export const INITIAL_PRESETS: Preset[] = [
  {
    id: "salat_fajr",
    title: { en: "Salat Fajr (2 Rakats)", bs: "Sabah Namaz (2 Rekata)" },
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
    title: { en: "After Prayer (Salah)", bs: "Poslije Namaza" },
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
    title: { en: "Morning Routine", bs: "Jutarnji Zikr" },
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
    title: { en: "Evening Routine", bs: "Večernji Zikr" },
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
    title: { en: "Before Sleep", bs: "Prije Spavanja" },
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
    title: { en: "Protection (Ruqyah)", bs: "Zaštita (Rukja)" },
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
      bs: "Estagfirullah (Traženje oprosta)",
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
    title: { en: "Distress Relief", bs: "Olakšanje od nevolje" },
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
    title: { en: "Friday Special", bs: "Posebni zikr petkom" },
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
  {
    id: "ramadan_special",
    title: { en: "Ramadan Special", bs: "Ramazanski Specijal" },
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
    ],
  },
];
