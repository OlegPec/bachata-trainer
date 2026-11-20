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
    file: 'DJ Tronky, Manny Rod — El Merengue (Bachata Version) (90s).mp3',
    file_full: 'DJ Tronky, Manny Rod — El Merengue (Bachata Version).mp3',
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
    file: 'Román, DJ Khalid — LUNA (Bachata Version) (90s).mp3',
    file_full: 'Román, DJ Khalid — LUNA (Bachata Version).mp3',
    bpm: 105,
    offset: 0.57,
    ready: true,
    segments: []
  },
  {
    id: 'mojito',
    title: 'DJ Cat, Thalia — Mojito (Bachata Remix)',
    file: 'DJ Cat, Thalia — Mojito (Bachata Remix) (90s).mp3',
    file_full: 'DJ Cat, Thalia — Mojito (Bachata Remix).mp3',
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
    file: 'Grupo Extra, Ataca, La Alemana, El Tiguere — Solo Mia (90s).mp3',
    file_full: 'Grupo Extra, Ataca, La Alemana, El Tiguere — Solo Mia.mp3',
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
    file: 'Dani J, DJ Tony Pecino — Tulum (90s).mp3',
    file_full: 'Dani J, DJ Tony Pecino — Tulum.mp3',
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
	  "file": "Jean & Alex — Te Pido Que Vuelvas (90s).mp3",
	  "file_full": "Jean & Alex — Te Pido Que Vuelvas.mp3",
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
	  "file": "Marc Anthony — Punta Cana (90s).mp3",
	  "file_full": "Marc Anthony — Punta Cana.mp3",
	  "bpm": 108,
	  "offset": 1.2,
	  "ready": false,
	  "segments": [],
	  "accents": []
	},
	{
	  "id": "track-611212198",
	  "title": "Jiory, Frank Santos, DJ Husky — Cintura",
	  "file": "Jiory, Frank Santos, DJ Husky — Cintura (90s).mp3",
	  "file_full": "Jiory, Frank Santos, DJ Husky — Cintura.mp3",
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
	  "file": "Grupo Extra — Traicionera (90s).mp3",
	  "file_full": "Grupo Extra — Traicionera.mp3",
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
	  "file": "Chris Paradise — Yo Vs El (90s).mp3",
	  "file_full": "Chris Paradise — Yo Vs El.mp3",
	  "bpm": 106,
	  "offset": 0,
	  "ready": false,
	  "segments": [],
	  "accents": []
	},
	{
	  "id": "track-1082943917",
	  "title": "Daniel Santacruz — Este Amor",
	  "file": "Daniel Santacruz — Este Amor (90s).mp3",
	  "file_full": "Daniel Santacruz — Este Amor.mp3",
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
	  "file": "Jiory, Chris Paradise — Peligrosa (90s).mp3",
	  "file_full": "Jiory, Chris Paradise — Peligrosa.mp3",
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
	},
	{
	  "id": "track-3449131767",
	  "title": "dj tronky, jensen, Mayinbito — Secreto De Locos",
	  "file": "dj tronky, jensen, Mayinbito — Secreto De Locos (90s).mp3",
	  "file_full": "dj tronky, jensen, Mayinbito — Secreto De Locos.mp3",
	  "bpm": 108,
	  "offset": 1.1,
	  "ready": false,
	  "segments": [
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
		  "type": "normal",
		  "beats": 32
		},
		{
		  "type": "normal",
		  "beats": 16
		},
		{
		  "type": "normal",
		  "beats": 32
		}
	  ],
	  "accents": []
	},
	{
	  "id": "track-2736653126",
	  "title": "Roman, DJ Tony Pecino — La Reina",
	  "file": "Roman, DJ Tony Pecino — La Reina (90s).mp3",
	  "file_full": "Roman, DJ Tony Pecino — La Reina.mp3",
	  "bpm": 105,
	  "offset": 0.32,
	  "ready": false,
	  "segments": [
		{
		  "type": "appendix",
		  "beats": 4
		},
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
		  "beats": 16
		},
		{
		  "type": "normal",
		  "beats": 16
		},
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
		  "beats": 16
		},
		{
		  "type": "normal",
		  "beats": 32
		}
	  ],
	  "accents": []
	},
	{
	  "id": "track-4092651917",
	  "title": "Mickey Then — Asesina Matame",
	  "file": "Mickey Then — Asesina Matame (90s).mp3",
	  "file_full": "Mickey Then — Asesina Matame.mp3",
	  "bpm": 113,
	  "offset": 0.46,
	  "ready": false,
	  "segments": [
		{
		  "type": "normal",
		  "beats": 16
		}
	  ],
	  "accents": [
		{
		  "startBeat": 140,
		  "beats": 4
		}
	  ]
	},
	{
	  "id": "track-976129157",
	  "title": "Melvin War, Vladi — 11pm",
	  "file": "Melvin War, Vladi — 11pm (90s).mp3",
	  "file_full": "Melvin War, Vladi — 11pm.mp3",
	  "bpm": 104,
	  "offset": 0,
	  "ready": false,
	  "segments": [],
	  "accents": []
	},
	{
	  "id": "track-2095687762",
	  "title": "Prince Royce feat. Marc Anthony — Adicto",
	  "file": "Prince Royce feat. Marc Anthony — Adicto (90s).mp3",
	  "file_full": "Prince Royce feat. Marc Anthony — Adicto.mp3",
	  "bpm": 116,
	  "offset": 1.52,
	  "ready": true,
	  "segments": [
		{
		  "type": "normal",
		  "beats": 16
		}
	  ],
	  "accents": []
	},
	{
	  "id": "track-743102870",
	  "title": "Daniel Santacruz — Flaca",
	  "file": "Daniel Santacruz — Flaca (90s).mp3",
	  "file_full": "Daniel Santacruz — Flaca.mp3",
	  "bpm": 105,
	  "offset": 1.38,
	  "ready": false,
	  "segments": [],
	  "accents": []
	},
	{
	  "id": "track-1523346563",
	  "title": "Kewin Cosmos (DJ York, DJ Manuel Citro) — Como Los 90's",
	  "file": "Kewin Cosmos (DJ York, DJ Manuel Citro) — Como Los 90's (90s).mp3",
	  "file_full": "Kewin Cosmos (DJ York, DJ Manuel Citro) — Como Los 90's.mp3",
	  "bpm": 110,
	  "offset": 0,
	  "ready": false,
	  "segments": [
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
		  "beats": 16
		}
	  ],
	  "accents": []
	},
	{
	  "id": "track-2384409455",
	  "title": "DJC, Natti Natasha x Becky G — Ram Pam Pam (Bachata Remix)",
	  "file": "DJC, Natti Natasha x Becky G — Ram Pam Pam (Bachata Remix).mp3",
	  "bpm": 110.2,
	  "offset": 1.2,
	  "ready": false,
	  "segments": [
		{
		  "type": "normal",
		  "beats": 16
		},
		{
		  "type": "normal",
		  "beats": 16
		},
		{
		  "type": "normal",
		  "beats": 16
		}
	  ],
	  "accents": []
	},
	{
  "id": "track-2071985786",
  "title": "DJC, Camilo — Ropa Cara (Bachata Remix)",
  "file": "DJC, Camilo — Ropa Cara (Bachata Remix) (90s).mp3",
  "file_full": "DJC, Camilo — Ropa Cara (Bachata Remix).mp3",
  "bpm": 106.1,
  "offset": 0.74,
  "ready": false,
  "segments": [
		{
		  "type": "appendix",
		  "beats": 2
		},
		{
		  "type": "normal",
		  "beats": 16
		},
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
		},
		{
		  "type": "appendix",
		  "beats": 4
		},
		{
		  "type": "normal",
		  "beats": 32
		}
	  ],
	  "accents": []
	},
	{
	  "id": "track-1800295728",
	  "title": "Chris Paradise — Mala Mala Mala",
	  "file": "Chris Paradise — Mala Mala Mala (90s).mp3",
	  "file_full": "Chris Paradise — Mala Mala Mala.mp3",
	  "bpm": 110,
	  "offset": 0.54,
	  "ready": false,
	  "segments": [
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
		  "beats": 24
		},
		{
		  "type": "appendix",
		  "beats": 4
		}
	  ],
	  "accents": []
	},
	{
	  "id": "track-2455002558",
	  "title": "Vinny Rivera, DJ Tony Pecino — No Te Enamores",
	  "file": "Vinny Rivera, DJ Tony Pecino — No Te Enamores (90s).mp3",
	  "file_full": "Vinny Rivera, DJ Tony Pecino — No Te Enamores.mp3",
	  "bpm": 105,
	  "offset": 0.07,
	  "ready": false,
	  "segments": [
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
		  "beats": 4
		}
	  ],
	  "accents": []
	},
	{
	  "id": "track-2872790865",
	  "title": "Vinny Rivera Ralphy Dreamz — Silver Skies",
	  "file": "Vinny Rivera Ralphy Dreamz — Silver Skies (90s).mp3",
	  "file_full": "Vinny Rivera Ralphy Dreamz — Silver Skies.mp3",
	  "bpm": 107,
	  "offset": 1.58,
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
		  "type": "appendix",
		  "beats": 4
		}
	  ],
	  "accents": []
	},
	{
	  "id": "track-914187607",
	  "title": "Prince Royce — Dec. 21",
	  "file": "Prince Royce — Dec. 21 (90s).mp3",
	  "file_full": "Prince Royce — Dec. 21.mp3",
	  "bpm": 112,
	  "offset": 0.65,
	  "ready": false,
	  "segments": [],
	  "accents": []
	},
	{
	  "id": "track-117460274",
	  "title": "DJ Clau x Dj Dave Aguilar — Perdon (Bachata Version)",
	  "file": "DJ Clau x Dj Dave Aguilar — Perdon (Bachata Version) (90s).mp3",
	  "file_full": "DJ Clau x Dj Dave Aguilar — Perdon (Bachata Version).mp3",
	  "bpm": 105,
	  "offset": 0.54,
	  "ready": false,
	  "segments": [
		{
		  "type": "normal",
		  "beats": 16
		}
	  ],
	  "accents": []
	},
	{
	  "id": "track-883992772",
	  "title": "Pablo Dazan, DJ Tony Pecino — Tu Me Delatas",
	  "file": "Pablo Dazan, DJ Tony Pecino — Tu Me Delatas (90s).mp3",
	  "file_full": "Pablo Dazan, DJ Tony Pecino — Tu Me Delatas.mp3",
	  "bpm": 105,
	  "offset": 0.25,
	  "ready": false,
	  "segments": [],
	  "accents": []
	},
	{
	  "id": "track-512997532",
	  "title": "Mr.Don, Johandy, DJ Khalid — Amigos Con Derechos",
	  "file": "Mr.Don, Johandy, DJ Khalid — Amigos Con Derechos (90s).mp3",
	  "file_full": "Mr.Don, Johandy, DJ Khalid — Amigos Con Derechos.mp3",
	  "bpm": 110,
	  "offset": 1.1,
	  "ready": false,
	  "segments": [
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
		  "beats": 4
		}
	  ],
	  "accents": []
	},
	{
	  "id": "track-1337890597",
	  "title": "Romeo Santos — Eres Mía",
	  "file": "Romeo Santos — Eres Mía (90s).mp3",
	  "file_full": "Romeo Santos — Eres Mía.mp3",
	  "bpm": 123,
	  "offset": 0.86,
	  "ready": false,
	  "segments": [
		{"type": "normal","beats": 32},
		{"type": "normal","beats": 32},
		{"type": "normal","beats": 32},
		{"type": "normal","beats": 32},
		{"type": "normal","beats": 16},
		{"type": "normal","beats": 32},
		{"type": "appendix","beats": 4},
		{"type": "normal","beats": 32},
		{"type": "normal","beats": 32},
		{"type": "normal","beats": 32},
		{"type": "normal","beats": 16},
		{"type": "normal","beats": 32},
		{"type": "appendix","beats": 4},
		{"type": "normal","beats": 32},
		{"type": "normal", "beats": 32},
		{"type": "normal","beats": 32},
		{"type": "appendix","beats": 4}
	  ],
	  "accents": []
	},
	{
	  "id": "track-3907821861",
	  "title": "DJ Tony Pecino, Vinny Rivera — Rumba",
	  "file": "DJ Tony Pecino, Vinny Rivera — Rumba (90s).mp3",
	  "file_full": "DJ Tony Pecino, Vinny Rivera — Rumba.mp3",
	  "bpm": 108,
	  "offset": 0.34,
	  "ready": false,
	  "segments": [],
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
  //     {"type":"normal", "beats":32},
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
