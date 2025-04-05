const audioPaths = [
  '/ヌケガラデイズ(なめこ).mp3', // 1曲目
  '/ヌケガラデイズ(なめこ).mp3'  // 2曲目
];
let audio = new Audio(audioPaths[0]); // 最初に1曲目を読み込む
let currentTrack = 0; // 現在再生中の曲のインデックス
let isPlaying = false;

audio.addEventListener('load', () => {
  //audio.loop = true; // ループ再生は各曲の終了時に制御
});

document.addEventListener('click', () => {
  if (audio.paused || !isPlaying) {
    if (audio.paused) {
      audio.play();
      isPlaying = true;
    } else {
      audio.pause();
      isPlaying = false;
    }
  }
});

audio.addEventListener('ended', () => {
  if (isPlaying) {
    currentTrack++; // 次の曲へ
    if (currentTrack >= audioPaths.length) {
      currentTrack = 0; // 最後の曲の場合は1曲目に戻る
    }
    audio.src = audioPaths[currentTrack]; // 次の曲を読み込む
    audio.play(); // 次の曲を再生
  }
});









var modal = document.getElementById("myModal");
var btn = document.getElementById("Coin");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



