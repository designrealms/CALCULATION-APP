document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  const buttons = Array.from(document.querySelectorAll('button'));

  buttons.map(button => {
    button.addEventListener('click', (e) => {
      const value = e.target.innerText;

      switch(value) {
        case '=':
          try {
            display.innerText = eval(display.innerText);
          } catch {
            display.innerText = 'Error';
          }
          break;
        case 'C':
          display.innerText = '';
          break;
        default:
          display.innerText += value;
      }
    });
  });
});
