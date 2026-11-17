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
    segments: []
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
  //     {type:'normal', beats:32},
  //     {type:'normal', beats:16}, // короткий квадрат из 2 восьмёрок
  //     {type:'normal', beats:32}  // новый квадрат
  //   ]
  // }
];
