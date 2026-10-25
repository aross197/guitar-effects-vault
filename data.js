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
  },

  // ===== NEW ENTRIES =====
  {
    id: "srv-texas-flood",
    artist: "Stevie Ray Vaughan",
    album: "Texas Flood",
    year: 1983,
    decade: "1980s",
    genre: "Blues",
    song: "Pride and Joy / Texas Flood",
    amp: "Fender Vibroverb + Super Reverb / Dumble-style later",
    ampSettings: "Volume high, Treble & Middle up, Bass controlled",
    pedals: [
      { name: "Ibanez Tube Screamer (TS-808 / TS-9)", settings: "Drive low-medium, Tone mid, Level high (as a boost)" },
      { name: "Vox Wah", settings: "Used on some tracks" }
    ],
    guitar: "Fender Stratocaster (\"Number One\" with heavy strings)",
    notes: "SRV's tone is pure power and dynamics. Heavy strings, Tube Screamer as a clean boost into a cranked Fender, and massive hands.",
    tabs: `e|-----------------|
B|-----------------|
G|-----------------|
D|-2-2-4-2-2-4-2-2-|
A|-2-2-2-2-2-2-2-2-|
E|-0-0-0-0-0-0-0-0-|  (Pride and Joy shuffle idea)`
  },
  {
    id: "frusciante-bssm",
    artist: "John Frusciante",
    album: "Blood Sugar Sex Magik",
    year: 1991,
    decade: "1990s",
    genre: "Rock",
    song: "Under the Bridge / Give It Away",
    amp: "Marshall Silver Jubilee + Fender Twin / Showman",
    ampSettings: "Clean to mild breakup",
    pedals: [
      { name: "Boss DS-2", settings: "Turbo mode for heavier parts" },
      { name: "Electro-Harmonix Holy Grail / Big Muff", settings: "For atmosphere" },
      { name: "Ibanez WH10 Wah", settings: "Signature wah tone" }
    ],
    guitar: "Fender Stratocaster / Jaguar",
    notes: "Frusciante's BSSM tones mix funky cleans, raw distortion, and emotional clean arpeggios. Very dynamic and song-serving.",
    tabs: `e|-1-1-1-1-1-1-1-1-|
B|-1-1-1-1-1-1-1-1-|
G|-2-2-2-2-2-2-2-2-|
D|-3-3-3-3-3-3-3-3-|
A|-3-3-3-3-3-3-3-3-|
E|-1-1-1-1-1-1-1-1-|  (Under the Bridge intro idea)`
  },
  {
    id: "knopfler-sultans",
    artist: "Mark Knopfler",
    album: "Dire Straits (Sultans of Swing era)",
    year: 1978,
    decade: "1970s",
    genre: "Rock",
    song: "Sultans of Swing",
    amp: "Fender Twin Reverb / Vibrolux",
    ampSettings: "Clean with sparkle, reverb on",
    pedals: [
      { name: "Minimal pedals", settings: "Mostly guitar into amp" },
      { name: "Occasional delay / chorus later", settings: "Very subtle" }
    ],
    guitar: "Fender Stratocaster (fingerstyle)",
    notes: "Pure fingerpicked Strat into a clean Fender amp. The tone is all in the hands, pick attack, and dynamics. Minimal effects.",
    tabs: `e|---------------------|
B|-------5-6-5---------|
G|---5-7-------7-5-----|
D|-7---------------7-5-|
A|---------------------|
E|---------------------|  (Sultans main riff idea)`
  },
  {
    id: "blackmore-machine-head",
    artist: "Ritchie Blackmore",
    album: "Machine Head (Deep Purple)",
    year: 1972,
    decade: "1970s",
    genre: "Rock",
    song: "Smoke on the Water / Highway Star",
    amp: "Marshall Super Lead 100",
    ampSettings: "Volume high, Treble & Presence up",
    pedals: [
      { name: "Hornby Skewes Treble Booster", settings: "Classic Blackmore boost" },
      { name: "Wah (occasionally)", settings: "Used sparingly" }
    ],
    guitar: "Fender Stratocaster",
    notes: "Blackmore's tone is aggressive, mid-focused, and full of attitude. Treble booster into a Marshall was key for that cutting rock sound.",
    tabs: `e|-----------------|
B|-----------------|
G|-----------------|
D|-0-3-5---0-3-6-5-|
A|-0-3-5---0-3-6-5-|
E|-----------------|  (Smoke on the Water riff)`
  },
  {
    id: "clapton-layla",
    artist: "Eric Clapton",
    album: "Layla and Other Assorted Love Songs",
    year: 1970,
    decade: "1970s",
    genre: "Blues",
    song: "Layla",
    amp: "Marshall + Fender Champ (for some leads)",
    ampSettings: "Edge of breakup to mild overdrive",
    pedals: [
      { name: "Minimal", settings: "Mostly amp driven" },
      { name: "Wah (occasionally)", settings: "Used on some tracks" }
    ],
    guitar: "Fender Stratocaster (\"Blackie\" later) / Gibson",
    notes: "The Layla era mixed Clapton's blues phrasing with Duane Allman's slide. Tones were relatively raw and amp-driven.",
    tabs: `e|-10-10-10-10-8-8-8-8-|
B|--8--8--8--8-6-6-6-6-|
G|---------------------|
D|---------------------|
A|---------------------|
E|---------------------|  (Layla main riff idea)`
  },
  {
    id: "beck-blow-by-blow",
    artist: "Jeff Beck",
    album: "Blow by Blow",
    year: 1975,
    decade: "1970s",
    genre: "Rock",
    song: "Cause We've Ended As Lovers",
    amp: "Marshall + Fender",
    ampSettings: "Clean to mild drive, very dynamic",
    pedals: [
      { name: "Wah", settings: "Expressive use" },
      { name: "Delay / reverb", settings: "Atmospheric" }
    ],
    guitar: "Fender Stratocaster",
    notes: "Beck's tone is all about touch, vibrato, and expression. He used the guitar volume and tone controls extensively instead of pedals.",
    tabs: `e|---------------------|
B|---------------------|
G|-----7-9-7-----------|
D|-7-9-------9-7-------|
A|---------------------|
E|---------------------|  (melodic idea)`
  },
  {
    id: "santana-abraxas",
    artist: "Carlos Santana",
    album: "Abraxas",
    year: 1970,
    decade: "1970s",
    genre: "Rock",
    song: "Black Magic Woman / Oye Como Va",
    amp: "Mesa/Boogie Mark series (later) / Fender",
    ampSettings: "Warm, mid-rich, sustained",
    pedals: [
      { name: "Minimal early on", settings: "Amp and guitar focused" },
      { name: "Wah + delay later", settings: "For leads" }
    ],
    guitar: "Gibson SG / Les Paul / PRS (later)",
    notes: "Santana's singing sustain and Latin-infused melodies. Focus on midrange and long, vocal-like phrasing.",
    tabs: `e|-----------------|
B|-----------------|
G|-----5-7-5-------|
D|-5-7-------7-5---|
A|-----------------|
E|-----------------|  (Black Magic Woman idea)`
  },
  {
    id: "edge-joshua-tree",
    artist: "The Edge",
    album: "The Joshua Tree",
    year: 1987,
    decade: "1980s",
    genre: "Rock",
    song: "Where the Streets Have No Name / With or Without You",
    amp: "Vox AC30",
    ampSettings: "Clean with edge",
    pedals: [
      { name: "Electro-Harmonix Deluxe Memory Man", settings: "Dotted eighth delay" },
      { name: "Korg SDD-3000", settings: "Key digital delay" },
      { name: "Boss CS-2 / compression", settings: "For consistency" }
    ],
    guitar: "Fender Explorer / Strat / Gibson Explorer",
    notes: "The Edge's signature is rhythmic delay. Dotted-eighth notes create the huge, atmospheric U2 sound.",
    tabs: `e|-0-0-0-0-0-0-0-0-|
B|-0-0-0-0-0-0-0-0-|
G|-1-1-1-1-1-1-1-1-|
D|-2-2-2-2-2-2-2-2-|
A|-2-2-2-2-2-2-2-2-|
E|-0-0-0-0-0-0-0-0-|  (Streets arpeggio idea)`
  },
  {
    id: "iommi-paranoid",
    artist: "Tony Iommi",
    album: "Paranoid",
    year: 1970,
    decade: "1970s",
    genre: "Metal",
    song: "Iron Man / Paranoid / War Pigs",
    amp: "Laney Supergroup + modified Marshalls",
    ampSettings: "High gain, dark and heavy",
    pedals: [
      { name: "Dallas Rangemaster Treble Booster", settings: "Classic Iommi boost" },
      { name: "Wah", settings: "Used on some tracks" }
    ],
    guitar: "Gibson SG (left-handed, light strings, downtuned)",
    notes: "The birth of heavy metal tone. Light strings, downtuning, treble booster into Laneys created that dark, crushing sound.",
    tabs: `e|-----------------|
B|-----------------|
G|-----------------|
D|-0-0-0-0-0-0-0-0-|
A|-0-0-0-0-0-0-0-0-|
E|-0-2-3-0-2-3-0-0-|  (Iron Man riff idea)`
  },
  {
    id: "angus-highway-to-hell",
    artist: "Angus Young",
    album: "Highway to Hell",
    year: 1979,
    decade: "1970s",
    genre: "Rock",
    song: "Highway to Hell / Girls Got Rhythm",
    amp: "Marshall Super Lead / JTM",
    ampSettings: "Cranked, bright and aggressive",
    pedals: [
      { name: "Schaffer-Vega Diversity System (wireless)", settings: "Added compression and boost" },
      { name: "Minimal pedals", settings: "Mostly amp" }
    ],
    guitar: "Gibson SG",
    notes: "Raw, high-energy rock tone. Angus relies heavily on the SG and cranked Marshalls with lots of attitude and stage energy.",
    tabs: `e|-----------------|
B|-----------------|
G|-----------------|
D|-2-2-2-2-4-4-4-4-|
A|-2-2-2-2-4-4-4-4-|
E|-0-0-0-0-2-2-2-2-|  (Highway to Hell riff)`
  },
  {
    id: "moore-still-got-the-blues",
    artist: "Gary Moore",
    album: "Still Got the Blues",
    year: 1990,
    decade: "1990s",
    genre: "Blues",
    song: "Still Got the Blues",
    amp: "Marshall + Soldano SLO",
    ampSettings: "High gain with clarity",
    pedals: [
      { name: "Boss DS-1 / overdrive", settings: "For extra drive" },
      { name: "Delay", settings: "For leads" }
    ],
    guitar: "Gibson Les Paul (\"Stripe\" / Standard)",
    notes: "Moore's tone is thick, singing, and full of emotion. High-gain but still bluesy and articulate.",
    tabs: `e|---------------------|
B|---------------------|
G|-----7-9-7-----------|
D|-7-9-------9-7-------|
A|---------------------|
E|---------------------|  (melodic blues idea)`
  },
  {
    id: "morello-rage",
    artist: "Tom Morello",
    album: "Rage Against the Machine",
    year: 1992,
    decade: "1990s",
    genre: "Metal",
    song: "Killing in the Name / Bulls on Parade",
    amp: "Peavey 5150 / Marshall",
    ampSettings: "High gain",
    pedals: [
      { name: "DigiTech Whammy", settings: "Signature pitch effects" },
      { name: "Dunlop Cry Baby Wah", settings: "Aggressive wah" },
      { name: "Boss DD-3 Delay + EQ", settings: "For killswitch and effects" }
    ],
    guitar: "Custom \"Arm the Homeless\" / Telecaster-style",
    notes: "Morello treats the guitar like a DJ / turntable. Whammy, killswitch, and creative effects create unique textures.",
    tabs: `e|-----------------|
B|-----------------|
G|-----------------|
D|-0-0-0-0-0-0-0-0-|
A|-0-0-0-0-0-0-0-0-|
E|-0-0-0-0-0-0-0-0-|  (Killing in the Name drop D idea)`
  },
  {
    id: "dimebag-cowboys",
    artist: "Dimebag Darrell",
    album: "Cowboys from Hell",
    year: 1990,
    decade: "1990s",
    genre: "Metal",
    song: "Cowboys from Hell / Cemetery Gates",
    amp: "Solid State Randall + later Krank",
    ampSettings: "High gain, scooped mids, tight low end",
    pedals: [
      { name: "MXR 6-Band EQ", settings: "Scooped mids" },
      { name: "DigiTech Whammy", settings: "For dives and effects" },
      { name: "Dunlop Cry Baby", settings: "Wah leads" }
    ],
    guitar: "Dean ML (custom)",
    notes: "Southern metal tone: tight, aggressive, and full of personality. The Whammy and harmonic squeals are signature.",
    tabs: `e|-----------------|
B|-----------------|
G|-----------------|
D|-0-0-0-0-3-3-3-3-|
A|-0-0-0-0-3-3-3-3-|
E|-0-0-0-0-1-1-1-1-|  (Cowboys riff idea)`
  },
  {
    id: "brian-may-night-at-opera",
    artist: "Brian May",
    album: "A Night at the Opera",
    year: 1975,
    decade: "1970s",
    genre: "Rock",
    song: "Bohemian Rhapsody / Killer Queen",
    amp: "Vox AC30",
    ampSettings: "Clean to mild overdrive, treble boosted",
    pedals: [
      { name: "Treble Booster (custom / Dallas Rangemaster style)", settings: "Essential for the cut" },
      { name: "Delay (later)", settings: "For layering" }
    ],
    guitar: "Red Special (home-built)",
    notes: "Brian May's unique Red Special + AC30 + treble booster creates that bright, harmonized, orchestral guitar sound.",
    tabs: `e|-7-7-7-7-5-5-5-5-|
B|-8-8-8-8-5-5-5-5-|
G|-7-7-7-7-5-5-5-5-|
D|-----------------|
A|-----------------|
E|-----------------|  (Bohemian idea)`
  },
  {
    id: "vai-passion-warfare",
    artist: "Steve Vai",
    album: "Passion and Warfare",
    year: 1990,
    decade: "1990s",
    genre: "Rock",
    song: "For the Love of God",
    amp: "Bogner / Marshall / Carvin",
    ampSettings: "High gain with clarity and sustain",
    pedals: [
      { name: "Ibanez Jem with floating trem", settings: "Extensive use" },
      { name: "Eventide / delay & harmonizer", settings: "For atmosphere" },
      { name: "Wah + volume pedal", settings: "Expression" }
    ],
    guitar: "Ibanez JEM (Universe / custom)",
    notes: "Virtuosic, highly expressive, and effects-rich. Vai uses the full range of the instrument and modern processing.",
    tabs: `e|---------------------|
B|---------------------|
G|-----9-11-9----------|
D|-9-11-------11-9-----|
A|---------------------|
E|---------------------|  (melodic idea)`
  },
  {
    id: "satriani-surfing",
    artist: "Joe Satriani",
    album: "Surfing with the Alien",
    year: 1987,
    decade: "1980s",
    genre: "Rock",
    song: "Surfing with the Alien / Always with Me, Always with You",
    amp: "Marshall + later Peavey / JVM",
    ampSettings: "High gain, articulate",
    pedals: [
      { name: "Boss DS-1 / overdrive", settings: "Classic drive" },
      { name: "Cry Baby Wah", settings: "Expressive" },
      { name: "Delay + chorus", settings: "For leads" }
    ],
    guitar: "Ibanez JS series",
    notes: "Instrumental rock tone with strong melodies, wide vibrato, and clear high-gain articulation.",
    tabs: `e|---------------------|
B|---------------------|
G|-----9-11-9----------|
D|-9-11-------11-9-----|
A|---------------------|
E|---------------------|  (Surfing idea)`
  }
];
