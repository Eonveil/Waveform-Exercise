// Initialize Wavesurfer
const wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: '#4F4A85',
  progressColor: '#383351',
  url: 'audio.mp3', // The audio file to load
});

const playBtn = document.getElementById('playBtn');

// Toggle play/pause on button click
playBtn.addEventListener('click', () => {
  wavesurfer.playPause();
});

// Update button text when playing/paused
wavesurfer.on('play', () => {
  playBtn.textContent = 'Pause';
});
wavesurfer.on('pause', () => {
  playBtn.textContent = 'Play';
});

// Play/pause on interaction with the waveform
wavesurfer.on('interaction', () => {
  wavesurfer.playPause();
});