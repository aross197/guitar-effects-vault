// ===== Render Artists =====
const grid = document.getElementById('artists-grid');
const detailPanel = document.getElementById('detail-panel');
const detailContent = document.getElementById('detail-content');
const searchInput = document.getElementById('search');
const genreFilter = document.getElementById('genre-filter');
const decadeFilter = document.getElementById('decade-filter');

function renderArtists(data) {
  grid.innerHTML = '';
  if (data.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-muted)">No matches found.</p>';
    return;
  }
  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'artist-card';
    card.innerHTML = `
      <h3>${item.artist}</h3>
      <div class="album">${item.album} (${item.year})</div>
      <div class="meta">${item.song}</div>
      <div class="tags">
        <span class="tag">${item.genre}</span>
        <span class="tag">${item.decade}</span>
      </div>
    `;
    card.addEventListener('click', () => showDetail(item));
    grid.appendChild(card);
  });
}

function showDetail(item) {
  grid.classList.add('hidden');
  detailPanel.classList.remove('hidden');

  const pedalsHtml = item.pedals.map(p => `
    <div class="setting-card">
      <h4>${p.name}</h4>
      <p>${p.settings}</p>
    </div>
  `).join('');

  detailContent.innerHTML = `
    <div class="detail-header">
      <h2>${item.artist}</h2>
      <div class="subtitle">${item.album} • ${item.year} • ${item.song}</div>
    </div>

    <div class="section-title">Amp</div>
    <div class="settings-grid">
      <div class="setting-card">
        <h4>Amp</h4>
        <p>${item.amp}</p>
      </div>
      <div class="setting-card">
        <h4>Settings</h4>
        <p>${item.ampSettings}</p>
      </div>
    </div>

    <div class="section-title">Pedals</div>
    <div class="settings-grid">
      ${pedalsHtml}
    </div>

    <div class="section-title">Guitar</div>
    <div class="setting-card" style="max-width:400px">
      <p>${item.guitar}</p>
    </div>

    <div class="section-title">Notes</div>
    <div class="notes">${item.notes}</div>

    <div class="section-title">Tabs (simplified)</div>
    <div class="tabs-block">${item.tabs}</div>
  `;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('close-detail').addEventListener('click', () => {
  detailPanel.classList.add('hidden');
  grid.classList.remove('hidden');
});

// ===== Filtering =====
function applyFilters() {
  const q = searchInput.value.toLowerCase().trim();
  const genre = genreFilter.value;
  const decade = decadeFilter.value;

  const filtered = effectsData.filter(item => {
    const matchesSearch = !q || 
      item.artist.toLowerCase().includes(q) ||
      item.album.toLowerCase().includes(q) ||
      item.song.toLowerCase().includes(q) ||
      item.amp.toLowerCase().includes(q) ||
      item.pedals.some(p => p.name.toLowerCase().includes(q));

    const matchesGenre = !genre || item.genre === genre;
    const matchesDecade = !decade || item.decade === decade;

    return matchesSearch && matchesGenre && matchesDecade;
  });

  renderArtists(filtered);
}

searchInput.addEventListener('input', applyFilters);
genreFilter.addEventListener('change', applyFilters);
decadeFilter.addEventListener('change', applyFilters);

// Initial render
renderArtists(effectsData);

// ===== Recorder =====
let mediaRecorder;
let recordedChunks = [];
let audioStream;

const recordBtn = document.getElementById('record-btn');
const stopBtn = document.getElementById('stop-btn');
const playBtn = document.getElementById('play-recording-btn');
const statusEl = document.getElementById('recording-status');
const playback = document.getElementById('recording-playback');

recordBtn.addEventListener('click', async () => {
  try {
    audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(audioStream);
    recordedChunks = [];

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) recordedChunks.push(e.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: 'audio/webm' });
      playback.src = URL.createObjectURL(blob);
      playback.classList.remove('hidden');
      playBtn.disabled = false;
      statusEl.textContent = 'Recording saved – hit Play';
      statusEl.classList.remove('recording');

      // Stop the mic tracks
      audioStream.getTracks().forEach(t => t.stop());
    };

    mediaRecorder.start();
    recordBtn.disabled = true;
    stopBtn.disabled = false;
    playBtn.disabled = true;
    statusEl.textContent = '● Recording...';
    statusEl.classList.add('recording');
  } catch (err) {
    statusEl.textContent = 'Microphone access denied or unavailable';
    console.error(err);
  }
});

stopBtn.addEventListener('click', () => {
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop();
    recordBtn.disabled = false;
    stopBtn.disabled = true;
  }
});

playBtn.addEventListener('click', () => {
  playback.play();
});
