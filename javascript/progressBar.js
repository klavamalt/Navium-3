const progressMask = document.getElementById('progressMask');
const totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  const progressHeight = (window.pageYOffset / totalHeight) * 100;
  progressMask.style.height = progressHeight + '%';
};
