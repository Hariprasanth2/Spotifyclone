
const audio = document.getElementById("audio");

const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const progressBar = document.getElementById("progressBar");

const nowImg = document.getElementById("nowImg");
const nowTitle = document.getElementById("nowTitle");
const nowDesc = document.getElementById("nowDesc");

const cards = document.querySelectorAll(".music-card");

let currentIndex = -1;


function playSong(index) {
  const card = cards[index];

  audio.src = card.dataset.audio;
  audio.play();

  nowImg.src = card.dataset.img;
  nowTitle.textContent = card.dataset.title;
  nowDesc.textContent = card.dataset.desc;

  playBtn.className = "fa-solid fa-circle-pause player-btns";
  currentIndex = index;
}


cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    if (currentIndex === index) {
      togglePlay();
    } else {
      playSong(index);
    }
  });
});

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.className = "fa-solid fa-circle-pause player-btns";
  } else {
    audio.pause();
    playBtn.className = "fa-solid fa-circle-play player-btns";
  }
}

playBtn.addEventListener("click", togglePlay);


nextBtn.addEventListener("click", () => {
  if (currentIndex === -1) return;
  currentIndex = (currentIndex + 1) % cards.length;
  playSong(currentIndex);
});


prevBtn.addEventListener("click", () => {
  if (currentIndex === -1) return;
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  playSong(currentIndex);
});

audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  progressBar.value = (audio.currentTime / audio.duration) * 100;
});

progressBar.addEventListener("input", (e) => {
  if (!audio.duration) return;
  audio.currentTime = (e.target.value / 100) * audio.duration;
});


audio.addEventListener("ended", () => {
  currentIndex = (currentIndex + 1) % cards.length;
  playSong(currentIndex);
});
