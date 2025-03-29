function setupMarquee(id, direction = 'left', speed = 1) {
  const track = document.getElementById(id);
  const content = track.innerHTML;
  track.innerHTML = content + content;

  requestAnimationFrame(() => {
    const resetPoint = track.scrollWidth / 2;
    let pos = direction === 'left' ? 0 : -resetPoint;

    function animate() {
      pos += direction === 'left' ? -speed : speed;
      track.style.transform = `translateX(${pos}px)`;

      if (direction === 'left' && Math.abs(pos) >= resetPoint) {
        pos = 0;
      }

      if (direction === 'right' && pos >= 0) {
        pos = -resetPoint;
      }

      requestAnimationFrame(animate);
    }

    animate();
  });
}

setupMarquee('marquee-left', 'left', 1.5);
setupMarquee('marquee-right', 'right', 1.5);
setupMarquee('marquee-third', 'left', 1.5);
