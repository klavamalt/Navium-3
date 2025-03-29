let hideCount = 0;

const buttons = document.querySelectorAll('.close-missing');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      const element = event.target.parentNode.parentNode;

      element.classList.add('hide');

      setTimeout(() => {
        element.style.display = 'none';
        hideCount++;
        if (hideCount === 4) {
          setTimeout(() => {
            Array.from(document.querySelectorAll('.close-missing'))
              .slice()
              .reverse()
              .forEach((btn, index) => {
                const el = btn.parentNode.parentNode;

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