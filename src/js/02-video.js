import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timeKey = 'videoplayer-current-time';

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
  player
    .setCurrentTime(currentVideoTime)
    .then(() => {
      player.play();
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}
import Player from '@vimeo/player';
player.on('timeupdate', Throttle(durationSaveToStorage, 1000));
// функция которая ловит ивент лоад, если в локальном хранилище есть запись, достань их
function newStart() {
  if (!localStorage.getItem(timeKey)) {
    return;
  }
  const currentVideoTime = localStorage.getItem(timeKey);

  player
    .setCurrentTime(currentVideoTime)
    .then(() => {
      player.play();
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}
