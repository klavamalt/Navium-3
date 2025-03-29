const printButton = document.querySelector('.printFoto');
const fotka01 = document.getElementById('fotka01');
const fotka02 = document.getElementById('fotka02');
const modal01 = document.getElementById('fotikModalWin01');
const modal02 = document.getElementById('fotikModalWin02');

let activeIndex = 0;
let zCounter = 10; // Начинаем с 10, чтобы оставить запас

printButton.addEventListener('click', () => {
  const currentFotka = activeIndex === 0 ? fotka01 : fotka02;
  const nextFotka = activeIndex === 0 ? fotka02 : fotka01;
  const currentModal = activeIndex === 0 ? modal01 : modal02;
  const nextModal = activeIndex === 0 ? modal02 : modal01;

  // Сжимаем текущую с задержкой
  setTimeout(() => {
    currentFotka.style.paddingBottom = 'clamp(0px, 10.417vw, 200px)';
  }, 1000);

  // Скрываем текущую модалку сразу
  if (currentModal) currentModal.style.display = 'none';

  // Поднимаем следующую фотку выше
  zCounter++;
  nextFotka.style.zIndex = zCounter;

  // Увеличиваем следующую фотку
  nextFotka.style.paddingBottom = 'clamp(0px, 23.438vw, 450px)';

  // Показываем следующую модалку с задержкой
  setTimeout(() => {
    if (nextModal) nextModal.style.display = 'flex';
  }, 800);

  // Переключаем активную
  activeIndex = activeIndex === 0 ? 1 : 0;
});
