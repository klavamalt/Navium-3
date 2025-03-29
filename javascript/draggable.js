const box = document.querySelector('.box');
const draggables = document.querySelectorAll('.draggable');

let activeEl = null;
let offsetX = 0,
  offsetY = 0;

let isDragging = false;

const move = (x, y) => {
  if (!activeEl) return;

  isDragging = true;

  const boxRect = box.getBoundingClientRect();

  let newX = x - boxRect.left - offsetX;
  let newY = y - boxRect.top - offsetY;

  newX = Math.max(0, Math.min(newX, box.clientWidth - activeEl.offsetWidth));
  newY = Math.max(0, Math.min(newY, box.clientHeight - activeEl.offsetHeight));

  activeEl.style.left = `${newX}px`;
  activeEl.style.top = `${newY}px`;
};

draggables.forEach((el) => {
  el.addEventListener('mousedown', (e) => {
    activeEl = el;
    isDragging = false;

    const elRect = el.getBoundingClientRect();
    offsetX = e.clientX - elRect.left;
    offsetY = e.clientY - elRect.top;

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  });
});

function mouseMoveHandler(e) {
  move(e.clientX, e.clientY);
}

function mouseUpHandler() {
  if (activeEl) {
    activeEl = null;
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  }
}

draggables.forEach((el) => {
  el.addEventListener('touchstart', (e) => {
    activeEl = el;
    isDragging = false;

    const touch = e.touches[0];
    const elRect = el.getBoundingClientRect();
    offsetX = touch.clientX - elRect.left;
    offsetY = touch.clientY - elRect.top;

    document.addEventListener('touchmove', touchMoveHandler, {
      passive: false,
    });
    document.addEventListener('touchend', touchEndHandler);
  });
});

function touchMoveHandler(e) {
  e.preventDefault(); // важно для блокировки прокрутки при drag
  const touch = e.touches[0];
  move(touch.clientX, touch.clientY);
}

function touchEndHandler() {
  if (activeEl) {
    activeEl = null;
    document.removeEventListener('touchmove', touchMoveHandler);
    document.removeEventListener('touchend', touchEndHandler);
  }
}

// модалка

const totalDrModals = 10;

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
