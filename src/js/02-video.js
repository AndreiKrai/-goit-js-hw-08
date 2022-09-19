import Player from '@vimeo/player';
console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timeKey = 'videoplayer-current-time';
console.log(iframe);
player.on('timeupdate', durationSaveLocalStorage);

function durationSaveLocalStorage({ seconds }) {
  localStorage.setItem(timeKey, seconds);
}

window.addEventListener('load', newSrart);

function newSrart() {
  if (!localStorage.getItem(timeKey)) {
    return;
  }
  const currentVideoTime = localStorage.getItem(timeKey);
  player.setCurrentTime(currentVideoTime ?? 0);
}
