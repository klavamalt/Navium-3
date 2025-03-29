document.addEventListener('DOMContentLoaded', () => {
  const chai = document.getElementById('chai');
  const teaSound = document.getElementById('teaSound');

  if (!chai) {
    return;
  }

  chai.addEventListener('click', () => {
    teaSound.currentTime = 0;
    teaSound.play();

    chai.classList.remove('boil');
    void chai.offsetWidth;
    chai.classList.add('boil');
  });
});
