const bearLight = document.querySelector('.bearLight');
const bearAudio = document.getElementById('bearAudio');

bearLight.addEventListener('click', () => {
  bearAudio.currentTime = 0; // сбрасываем на начало
  bearAudio.play();
});
