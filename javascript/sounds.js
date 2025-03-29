const fotikSound = document.getElementById('fotikSounds');
const fotoButtons = document.querySelectorAll('.printFoto');

fotoButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    fotikSound.currentTime = 0;
    fotikSound.play();
  });
});

const tooth = document.querySelector('.tooth');
const toothSound = document.getElementById('toothSound');

tooth.addEventListener('click', () => {
  if (!tooth.classList.contains('shake')) {
    tooth.classList.add('shake');

    // Дилей перед звуком (300 мс)
    setTimeout(() => {
      toothSound.currentTime = 0;
      toothSound.play();
    }, 700);

    setTimeout(() => {
      // tooth.remove(); // если нужно убрать совсем
    }, 2000);
  }
});

const dino = document.querySelector('.dino');
const dinoSound = document.getElementById('dino-sound');

dino.addEventListener('click', () => {
  // звук
  dinoSound.currentTime = 0;
  dinoSound.play();

  // анимация
  dino.classList.remove('roar'); // сбрасываем, если уже был
  void dino.offsetWidth; // хак, чтобы анимация перезапускалась
  dino.classList.add('roar');
});
