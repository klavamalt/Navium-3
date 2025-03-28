const book = document.getElementById('book')

const pageFlip = new St.PageFlip(book, {
  // width: window.innerWidth * 0.8, // 80vw
  // height: window.innerHeight * 0.6, // 60vh
  width: 725,
  height: 997,
  // size: 'stretch',
  showCover: false,
  maxShadowOpacity: 0.3,
  mobileScrollSupport: true
})

pageFlip.loadFromHTML(document.querySelectorAll('.my-pages'))

// при изменении размера окна
window.addEventListener('resize', () => {
  const newWidth = window.innerWidth * 0.8
  const newHeight = window.innerHeight * 0.6
  pageFlip.update({ width: newWidth, height: newHeight })
})
