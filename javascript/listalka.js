const book = document.getElementById('book');

function getResponsiveSize() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  if (w >= 1740) {
    return { width: 725, height: 997 };
  } else if (w >= 1440) {
    return { width: 600, height: 825 };
  } else if (w >= 1025) {
    return { width: 375, height: 516 };
  } else if (w >= 769) {
    return { width: 528, height: 726 };
  } else if (w >= 463) {
    return { width: 375, height: 516 };
  } else if (w <= 463) {
    return { width: 375, height: 516 };
  }
}

let size = getResponsiveSize();

const pageFlip = new St.PageFlip(book, {
  width: size.width,
  height: size.height,
  showCover: false,
  maxShadowOpacity: 0.3,
  mobileScrollSupport: true,
});

pageFlip.loadFromHTML(document.querySelectorAll('.my-pages'));

window.addEventListener('resize', () => {
  const newSize = getResponsiveSize();
  pageFlip.update({
    width: newSize.width,
    height: newSize.height,
  });
});
