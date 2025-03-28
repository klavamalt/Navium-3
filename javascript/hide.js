const pairs = [
  { btn: 'clsoe01', block: 'missingImg01' },
  { btn: 'clsoe02', block: 'missingImg02' },
  { btn: 'clsoe03', block: 'missingImg03' },
  { btn: 'clsoe04', block: 'missingImg04' },
];

let hideCount = 0;

pairs.forEach(({ btn, block }) => {
  const button = document.getElementById(btn);
  const element = document.querySelector(`.${block}`);

  button.addEventListener('click', () => {
    element.classList.add('hide');

    setTimeout(() => {
      element.style.display = 'none';
      hideCount++;
      if (hideCount === pairs.length) {
        setTimeout(() => {
          pairs
            .slice()
            .reverse()
            .forEach(({ block }, index) => {
              const el = document.querySelector(`.${block}`);
              setTimeout(() => {
                el.style.display = 'flex';
                requestAnimationFrame(() => {
                  el.classList.remove('hide');
                });
              }, index * 300);
            });

          hideCount = 0;
        }, 1000);
      }
    }, 500);
  });
});
