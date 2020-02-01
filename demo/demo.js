import 'what-input';

const html = document.documentElement;
const themeSwitcher = document.getElementById('themeSwitcher');

themeSwitcher.addEventListener('change', () => {

  if (themeSwitcher.value === 'auto') {
    delete html.dataset.theme;
  } else if (themeSwitcher.value === 'light') {
    html.dataset.theme = 'light';

  } else if (themeSwitcher.value === 'dark') {
    html.dataset.theme = 'dark';
  }
});
