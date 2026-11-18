// ЕДИНЫЙ СПИСОК ПЕСЕН ТРЕНАЖЁРА.
// Положи обрезанные MP3 в папку audio/, затем добавляй сюда их настройки.
// Обычные 4 восьмёрки = 32 счёта; аппендикс на 4 счёта = { type: 'appendix', beats: 4 }.
// Каждый normal начинает новый квадрат: beats:16 = 2 восьмёрки, затем новый normal начинается с нового квадрата.
// Пустой segments означает обычный счёт 1–8 без размеченных аппендиксов.
// ready: true ставь только после проверки BPM, начала музыкального «раз» и структуры.
window.BACHATA_TRACKS = [
  {
    id: 'el-merengue',
    title: 'DJ Tronky, Manny Rod — El Merengue (Bachata Version)',
    file: 'DJ Tronky, Manny Rod — El Merengue (Bachata Version).mp3',
    bpm: 124.1,
    offset: 0.12,
    ready: true,
    segments: [],
	accents: [
		{
		  startBeat: 92,
		  beats: 4
		}
	]
  },
  {
    id: 'luna',
    title: 'Román, DJ Khalid — LUNA (Bachata Version)',
    file: 'Román, DJ Khalid — LUNA (Bachata Version).mp3',
    bpm: 105,
    offset: 0.57,
    ready: true,
    segments: []
  },
  {
    id: 'mojito',
    title: 'DJ Cat, Thalia — Mojito (Bachata Remix)',
    file: 'DJ Cat, Thalia — Mojito (Bachata Remix).mp3',
    bpm: 107,
    offset: 0.56,
    ready: true,
    segments: [
		{"type": "normal", "beats": 16}
	]
  },
  {
    id: 'solo-mia',
    title: 'Grupo Extra, Ataca, La Alemana, El Tiguere — Solo Mia',
    file: 'Grupo Extra, Ataca, La Alemana, El Tiguere — Solo Mia.mp3',
    bpm: 110,
    offset: 0.51,
    ready: true,
    segments: [
		{"type": "normal", "beats": 32},
		{"type": "normal", "beats": 32},
		{"type": "normal", "beats": 32},
		{"type": "normal", "beats": 32},
		{"type": "normal", "beats": 16}
	]
  },
  {
    id: 'tulum',
    title: 'Dani J, DJ Tony Pecino — Tulum',
    file: 'Dani J, DJ Tony Pecino — Tulum.mp3',
    bpm: 105,
    offset: 1.2,
    ready: false,
    segments: [
		{"type": "appendix", "beats": 2},
		{"type": "normal", "beats": 16},
		{"type": "normal", "beats": 32},
		{"type": "appendix", "beats": 4}
	],
	accents: [
		{
		  startBeat: 146,
		  beats: 4
		}
	]
  },
  {
	  "id": "track-102611605",
	  "title": "Jean & Alex — Te Pido Que Vuelvas",
	  "file": "Jean & Alex — Te Pido Que Vuelvas.mp3",
	  "bpm": 116,
	  "offset": 0.51,
	  "ready": false,
	  "segments": [
		{
		  "type": "normal",
		  "beats": 32
		},
		{
		  "type": "appendix",
		  "beats": 4
		},
		{
		  "type": "normal",
		  "beats": 32
		},
		{
		  "type": "normal",
		  "beats": 32
		},
		{
		  "type": "normal",
		  "beats": 16
		}
	  ],
	  "accents": [
		{
		  "startBeat": 64,
		  "beats": 4
		}
	  ]
	},
	{
	  "id": "track-3112859044",
	  "title": "Marc Anthony — Punta Cana",
	  "file": "Marc Anthony — Punta Cana.mp3",
	  "bpm": 108,
	  "offset": 1.2,
	  "ready": false,
	  "segments": [],
	  "accents": []
	},
	{
	  "id": "track-611212198",
	  "title": "Jiory, Frank Santos, DJ Husky — Cintura",
	  "file": "Jiory, Frank Santos, DJ Husky — Cintura.mp3",
	  "bpm": 120,
	  "offset": 0,
	  "ready": false,
	  "segments": [
		{
		  "type": "normal",
		  "beats": 16
		},
		{
		  "type": "normal",
		  "beats": 32
		},
		{
		  "type": "normal",
		  "beats": 32
		},
		{
		  "type": "normal",
		  "beats": 32
		},
		{
		  "type": "normal",
		  "beats": 32
		},
		{
		  "type": "normal",
		  "beats": 32
		},
		{
		  "type": "appendix",
		  "beats": 2
		}
	  ],
	  "accents": []
	},
	{
	  "id": "track-2680409649",
	  "title": "Grupo Extra — Traicionera",
	  "file": "Grupo Extra — Traicionera.mp3",
	  "bpm": 115,
	  "offset": 0,
	  "ready": false,
	  "segments": [
		{
		  "type": "appendix",
		  "beats": 4
		},
		{
		  "type": "normal",
		  "beats": 16
		}
	  ],
	  "accents": []
	},
	{
	  "id": "track-1319791719",
	  "title": "Chris Paradise — Yo Vs El",
	  "file": "Chris Paradise — Yo Vs El.mp3",
	  "bpm": 106,
	  "offset": 0,
	  "ready": false,
	  "segments": [],
	  "accents": []
	},
	{
	  "id": "track-1082943917",
	  "title": "Daniel Santacruz — Este Amor",
	  "file": "Daniel Santacruz — Este Amor.mp3",
	  "bpm": 120,
	  "offset": 0.38,
	  "ready": false,
	  "segments": [
		{
		  "type": "appendix",
		  "beats": 3
		}
	  ],
	  "accents": [
		{
		  "startBeat": 95,
		  "beats": 4
		}
	  ]
	},
	{
	  "id": "track-4288096538",
	  "title": "Jiory, Chris Paradise — Peligrosa",
	  "file": "Jiory, Chris Paradise — Peligrosa.mp3",
	  "bpm": 121,
	  "offset": 0.3,
	  "ready": false,
	  "segments": [
		{
		  "type": "normal",
		  "beats": 16
		}
	  ],
	  "accents": []
	}





  // Добавляй следующие треки через запятую:
  // ,{
  //   id: 'track-02',
  //   title: 'Исполнитель — Название',
  //   file: '02.mp3',
  //   bpm: 120,
  //   offset: 0.20,
  //   ready: true,
  //   segments: [
  //	 {"type": "appendix", "beats": 2}
  //     {type:'normal', beats:32},
  //     {type:'normal', beats:16}, // короткий квадрат из 2 восьмёрок
  //     {type:'normal', beats:32}  // новый квадрат
  //   ],
  //   accents: [
  //	{
  //	  startBeat: 146,
  //	  beats: 4
  //	}
  //   ]
  // }
];
