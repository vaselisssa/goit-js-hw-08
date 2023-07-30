import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// ініціалізація плеєра
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// відстежування події timeupdate - оновлення часу відтворення
// зберігання часу відтворення у локальне сховище з відновленням відтворення зі збереженої позиції під час перезавантаження сторінки

player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
