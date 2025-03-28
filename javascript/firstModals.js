const total = 7;

// Открытие по карточкам
for (let i = 1; i <= total; i++) {
  const card = document.getElementById(`card0${i}`);
  const modalId = `modal0${i}`;

  card?.addEventListener('click', () => {
    for (let j = 1; j <= total; j++) {
      const modal = document.getElementById(`modal0${j}`);
      if (modal) modal.style.display = 'none';
    }

    const targetModal = document.getElementById(modalId);
    if (targetModal) targetModal.style.display = 'flex';
  });
}

// Закрытие по .modalClose
const closeButtons = document.querySelectorAll('.modalClose');

closeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modalBg');
    if (modal) modal.style.display = 'none';
  });
});

// Закрытие по .modalBg, но игнорируем .firstScreenModal
const modalBgs = document.querySelectorAll('.modalBg');

// Общее закрытие по фону
modalBgs.forEach((bg) => {
  bg.addEventListener('click', (e) => {
    // Закрываем только если клик был по самому фону, а не по вложенному элементу
    if (e.target === e.currentTarget) {
      closeAllModals();
    }
  });
});

// Закрытие по Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAllModals();
  }
});

// 👇 Функция закрытия всех модалок
function closeAllModals() {
  // modal01–07
  for (let i = 1; i <= 7; i++) {
    const modal = document.getElementById(`modal0${i}`);
    if (modal) modal.style.display = 'none';
  }

  // drModalWin01–10
  for (let i = 1; i <= 10; i++) {
    const win = document.getElementById(
      `drModalWin${i.toString().padStart(2, '0')}`
    );
    if (win) win.style.display = 'none';
  }
}
