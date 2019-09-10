
let key1 = document.getElementById('key1');

document.addEventListener('keypress', () => {
    key1.textContent = event.key;
  })

let code1 = document.getElementById('code1');

document.addEventListener('keypress', () => {
    code1.textContent = event.code;
  })


let which1 = document.getElementById('which1');

document.addEventListener('keypress', () => {
    which1.textContent = event.which; 
  }) 