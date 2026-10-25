const effectsData = [
  {
    id: "hendrix-are-you-experienced",
    artist: "Jimi Hendrix",
    album: "Are You Experienced",
    year: 1967,
    decade: "1960s",
    genre: "Rock",
    song: "Purple Haze",
    amp: "Marshall Super Lead 100 (or Fender Twin)",
    ampSettings: "Volume 7-8 • Treble 6 • Middle 5 • Bass 4 • Presence 6",
    pedals: [
      { name: "Fuzz Face (Dallas Arbiter)", settings: "Fuzz full, Volume to taste" },
      { name: "Octavia (Roger Mayer)", settings: "Used for the solo" },
      { name: "Uni-Vibe", settings: "Speed medium, Intensity high" }
    ],
    guitar: "Fender Stratocaster (right-handed, restrung upside down)",
    notes: "Classic psychedelic tone. The Fuzz Face into a cranked Marshall is the core. Uni-Vibe for the swirling effect.",
    tabs: `e|-----------------|
B|-----------------|
G|-----0-2-0-------|
D|-2-2-------2-0---|
A|-----------------|
E|-----------------|  (main riff idea)`
  },
  {
    id: "page-led-zeppelin-iv",
    artist: "Jimmy Page",
    album: "Led Zeppelin IV",
    year: 1971,
    decade: "1970s",
    genre: "Rock",
    song: "Black Dog / Stairway to Heaven",
    amp: "Marshall Super Lead + Supro (for cleaner tones)",
    ampSettings: "Cranked for natural distortion • Treble & Presence high",
    pedals: [
      { name: "Vox Cry Baby Wah", settings: "Used selectively" },
      { name: "Maestro Echoplex", settings: "Slapback and longer delays" }
    ],
    guitar: "Gibson Les Paul Standard (\"Number One\")",
    notes: "Page used the natural overdrive of the Marshall. For Stairway clean tones he often used the Supro or direct into the board.",
    tabs: `e|-5-5-5-5-5-5-5-5-|
B|-5-5-5-5-5-5-5-5-|
G|-5-5-5-5-5-5-5-5-|
D|-7-7-7-7-7-7-7-7-|
A|-7-7-7-7-7-7-7-7-|
E|-5-5-5-5-5-5-5-5-|  (Black Dog power chords idea)`
  },
  {
    id: "vanhalen-vanhalen",
    artist: "Eddie Van Halen",
    album: "Van Halen",
    year: 1978,
    decade: "1970s",
    genre: "Rock",
    song: "Eruption / Ain't Talkin' 'Bout Love",
    amp: "Marshall Super Lead (\"the brown sound\")",
    ampSettings: "Volume on 10, all other knobs around 5-6, Variac lowered",
    pedals: [
      { name: "MXR Phase 90", settings: "Speed medium" },
      { name: "Echoplex EP-3", settings: "Slapback" },
      { name: "MXR Flanger", settings: "Used on some tracks" }
    ],
    guitar: "Frankenstrat (home-built)",
    notes: "The legendary brown sound came from a dimed Marshall + Variac + the Frankenstrat with a PAF in the bridge.",
    tabs: `e|-12-15-12-15-12-15-12-15-|
B|-------------------------|
G|-------------------------|
D|-------------------------|
A|-------------------------|
E|-------------------------|  (Eruption tapping idea)`
  },
  {
    id: "gilmour-dark-side",
    artist: "David Gilmour",
    album: "The Dark Side of the Moon",
    year: 1973,
    decade: "1970s",
    genre: "Rock",
    song: "Money / Time / Us and Them",
    amp: "Hiwatt DR103 + Fender Twin",
    ampSettings: "Clean with edge of breakup",
    pedals: [
      { name: "Electro-Harmonix Big Muff", settings: "Sustain high, Tone mid" },
      { name: "MXR Dynacomp", settings: "For consistency" },
      { name: "Univox Uni-Vibe", settings: "Slow chorus/vibrato" },
      { name: "Binson Echorec", settings: "The famous delay" }
    ],
    guitar: "Fender Stratocaster (black with maple neck)",
    notes: "Gilmour's tone is about clarity, sustain, and beautiful delay trails. The Binson Echorec is key to the spacey leads.",
    tabs: `e|---------------------|
B|---------------------|
G|-----7-9-7-----------|
D|-7-9-------9-7-------|
A|-----------------9-7-|
E|---------------------|  (Money main riff idea)`
  },
  {
    id: "slash-appetite",
    artist: "Slash",
    album: "Appetite for Destruction",
    year: 1987,
    decade: "1980s",
    genre: "Rock",
    song: "Sweet Child O' Mine / Welcome to the Jungle",
    amp: "Marshall JCM800 / Super Lead",
    ampSettings: "Gain high, Presence & Treble up, Bass controlled",
    pedals: [
      { name: "Boss DS-1 or SD-1", settings: "Used for extra drive" },
      { name: "Cry Baby Wah", settings: "Classic rock wah" },
      { name: "MXR 10-Band EQ", settings: "Scooped mids sometimes" }
    ],
    guitar: "Gibson Les Paul Standard (\"Kris Derrig\" replica later)",
    notes: "Hot-rodded Marshalls + Les Paul = the Appetite tone. Very aggressive midrange and sustain.",
    tabs: `e|-15-14-12-14-15-14-12-14-|
B|-------------------------|
G|-------------------------|
D|-------------------------|
A|-------------------------|
E|-------------------------|  (Sweet Child intro idea)`
  },
  {
    id: "cobain-nevermind",
    artist: "Kurt Cobain",
    album: "Nevermind",
    year: 1991,
    decade: "1990s",
    genre: "Rock",
    song: "Smells Like Teen Spirit / Come As You Are",
    amp: "Mesa/Boogie Studio .22 or Fender Twin + DS-1",
    ampSettings: "Clean amp + heavy distortion pedal",
    pedals: [
      { name: "Boss DS-1", settings: "Distortion high, Tone mid-high, Level high" },
      { name: "Electro-Harmonix Small Clone", settings: "Chorus for Come As You Are" },
      { name: "Tech 21 SansAmp", settings: "Later used live" }
    ],
    guitar: "Fender Jaguar / Mustang",
    notes: "The quiet-loud dynamic came from clean amp + stomping the DS-1. Small Clone chorus is essential for Come As You Are.",
    tabs: `e|-----------------|
B|-----------------|
G|-----------------|
D|-3-3-3-3-x-x-x-x-|
A|-3-3-3-3-x-x-x-x-|
E|-1-1-1-1-x-x-x-x-|  (Teen Spirit power chords)`
  },
  {
    id: "mayer-continuum",
    artist: "John Mayer",
    album: "Continuum",
    year: 2006,
    decade: "2000s",
    genre: "Blues",
    song: "Gravity / Slow Dancing in a Burning Room",
    amp: "Two-Rock / Dumble-style + Fender Twin",
    ampSettings: "Edge of breakup, rich mids",
    pedals: [
      { name: "Klon Centaur (or clone)", settings: "Low gain, high volume for boost" },
      { name: "TS-9 / TS808", settings: "Mild overdrive" },
      { name: "Strymon Timeline / El Capistan", settings: "Subtle delay" }
    ],
    guitar: "Fender Stratocaster (\"Black1\" / SRV inspired)",
    notes: "Modern blues tone: transparent overdrive, touch-sensitive, lots of midrange and dynamics.",
    tabs: `e|---------------------|
B|-8-8-8-8-6-6-6-6-----|
G|-----------------7-5-|
D|---------------------|
A|---------------------|
E|---------------------|  (Gravity melody idea)`
  },
  {
    id: "young-rust",
    artist: "Neil Young",
    album: "Rust Never Sleeps",
    year: 1979,
    decade: "1970s",
    genre: "Rock",
    song: "Hey Hey, My My",
    amp: "Fender Deluxe + Twin (\"Old Black\")",
    ampSettings: "Cranked for natural grit",
    pedals: [
      { name: "Big Muff (sometimes)", settings: "For heavier moments" },
      { name: "Mutron Octave Divider", settings: "Used selectively" }
    ],
    guitar: "Gibson Les Paul (\"Old Black\")",
    notes: "Neil's tone is about volume, feedback, and the unique voice of Old Black through cranked Fenders.",
    tabs: `e|-----------------|
B|-----------------|
G|-----------------|
D|-2-2-2-2-2-2-2-2-|
A|-2-2-2-2-2-2-2-2-|
E|-0-0-0-0-0-0-0-0-|  (Hey Hey main riff)`
  }
];
