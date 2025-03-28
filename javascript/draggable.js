const box = document.querySelector('.box');
const draggables = document.querySelectorAll('.draggable');

let activeEl = null;
let offsetX = 0,
  offsetY = 0;

let isDragging = false;

const move = (e) => {
  if (!activeEl) return;

  isDragging = true; // как только мышь двигается — это уже не клик

  const boxRect = box.getBoundingClientRect();

  let newX = e.clientX - boxRect.left - offsetX;
  let newY = e.clientY - boxRect.top - offsetY;

  newX = Math.max(0, Math.min(newX, box.clientWidth - activeEl.offsetWidth));
  newY = Math.max(0, Math.min(newY, box.clientHeight - activeEl.offsetHeight));

  activeEl.style.left = `${newX}px`;
  activeEl.style.top = `${newY}px`;
};

draggables.forEach((el) => {
  el.addEventListener('mousedown', (e) => {
    activeEl = el;
    isDragging = false; // сбрасываем при новом нажатии

    const elRect = el.getBoundingClientRect();
    offsetX = e.clientX - elRect.left;
    offsetY = e.clientY - elRect.top;

    document.addEventListener('mousemove', move);
  });
});

document.addEventListener('mouseup', () => {
  if (activeEl) {
    activeEl = null;
    document.removeEventListener('mousemove', move);
  }
});

// Модалка
// const modal = document.querySelector('.modalBox');
// const flower = document.querySelector('.flower');

// flower.addEventListener('click', (e) => {
//   if (!isDragging) {
//     e.stopPropagation();
//     modal.style.display = 'flex';
//   }
// });

const totalDrModals = 10;

// Добавим обработку открытия окон
for (let i = 1; i <= totalDrModals; i++) {
  const index = i.toString().padStart(2, '0'); // "01", "02", ...

  const trigger = document.getElementById(`drModal${index}`);
  const targetId = `drModalWin${index}`;

  trigger?.addEventListener('click', (e) => {
    // не открываем окно, если это был drag
    if (isDragging) {
      isDragging = false; // сбрасываем, чтобы не влиял на следующий клик
      return;
    }

    // Сначала скрыть все
    for (let j = 1; j <= totalDrModals; j++) {
      const win = document.getElementById(
        `drModalWin${j.toString().padStart(2, '0')}`
      );
      if (win) win.style.display = 'none';
    }

    // Показать нужное окно
    const targetWin = document.getElementById(targetId);
    if (targetWin) targetWin.style.display = 'flex';
  });
}
