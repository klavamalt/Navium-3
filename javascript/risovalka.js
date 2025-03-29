const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let painting = false;
let brushColor = colorPicker.value;

colorPicker.addEventListener('input', (e) => {
  brushColor = e.target.value;
});

canvas.addEventListener('mousedown', (e) => {
  painting = true;
  draw(e);
});
canvas.addEventListener('mouseup', () => {
  painting = false;
  ctx.beginPath();
});
canvas.addEventListener('mousemove', draw);

canvas.addEventListener('touchstart', (e) => {
  e.preventDefault();
  painting = true;
  drawTouch(e);
});
canvas.addEventListener('touchmove', (e) => {
  e.preventDefault();
  drawTouch(e);
});
canvas.addEventListener('touchend', () => {
  painting = false;
  ctx.beginPath();
});

function draw(e) {
  if (!painting) return;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.strokeStyle = brushColor;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function drawTouch(e) {
  if (!painting) return;

  const rect = canvas.getBoundingClientRect();
  const touch = e.touches[0];

  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;

  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.strokeStyle = brushColor;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function resizeCanvas() {
  const prevWidth = canvas.width;
  const prevHeight = canvas.height;

  // сохраняем текущую картинку
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = prevWidth;
  tempCanvas.height = prevHeight;
  const tempCtx = tempCanvas.getContext('2d');
  tempCtx.drawImage(canvas, 0, 0);

  // устанавливаем новые размеры
  const newWidth = canvas.offsetWidth;
  const newHeight = canvas.offsetHeight;
  canvas.width = newWidth;
  canvas.height = newHeight;

  // масштабируем старое содержимое в новые размеры
  ctx.drawImage(
    tempCanvas,
    0,
    0,
    prevWidth,
    prevHeight,
    0,
    0,
    newWidth,
    newHeight
  );
}

resizeCanvas();

window.addEventListener('resize', resizeCanvas);
