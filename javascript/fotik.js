const printButtons = document.querySelectorAll('.printFoto');
const fotka01 = document.getElementById('fotka01');
const fotka02 = document.getElementById('fotka02');

const mobileFotka01 = document.querySelector('.section02Mobile2 .fotka:first-child');
const mobileFotka02 = document.querySelector('.section02Mobile2 .fotka:not(:first-child)');

const modal01 = document.getElementById('fotikModalWin01');
const modal02 = document.getElementById('fotikModalWin02');

let activeIndex = 0;
let zCounter = 10; // Начинаем с 10, чтобы оставить запас


printButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const currentFotka = activeIndex === 0 ? (isMobile ? mobileFotka01 : fotka01) : (isMobile ? mobileFotka02 : fotka02);
    const nextFotka = activeIndex === 0 ? (isMobile ? mobileFotka02 : fotka02) : (isMobile ? mobileFotka01 : fotka01);
    const currentModal = activeIndex === 0 ? modal01 : modal02;
    const nextModal = activeIndex === 0 ? modal02 : modal01;

    // Сжимаем текущую с задержкой
    setTimeout(() => {
      currentFotka.style.paddingBottom = 'clamp(0px, 10.417vw, 10.417vw)';
    }, 1000);

    // Скрываем текущую модалку сразу
    if (currentModal) currentModal.style.display = 'none';

    // Поднимаем следующую фотку выше
    zCounter++;
    nextFotka.style.zIndex = zCounter;

    // Увеличиваем следующую фотку
    if (isMobile) {
      nextFotka.style.paddingBottom = '300px';
    } else {
      nextFotka.style.paddingBottom = 'clamp(0px, 23.438vw, 450px)';
    }

    // Показываем следующую модалку с задержкой
    setTimeout(() => {
      if (nextModal) nextModal.style.display = 'flex';
    }, 800);

    // Переключаем активную
    activeIndex = activeIndex === 0 ? 1 : 0;
  });
});