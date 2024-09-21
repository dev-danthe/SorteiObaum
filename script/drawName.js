document.getElementById('drawName').addEventListener('click', drawName);

//Esta parte foi escrita por Zinnk  ↓↓↓↓↓↓↓
document
  .getElementById('removerEspacos')
  .addEventListener('click', removerEspacos);

function removerEspacos() {
  let textarea = document.getElementById('namesInput');
  let cleanedText = textarea.value
    .split('\n')
    .map((name) => name.trim().replace(/\s\d+$/, ''))
    .filter((name) => name)
    .join('\n');
  textarea.value = cleanedText;
}
//Esta parte foi escrita por Zinnk ↑↑↑↑↑↑↑

function drawName() {
    let names = document.getElementById('namesInput').value.split('\n');
    let randomName = names[Math.floor(Math.random() * names.length)];
    localStorage.setItem('drawnName', randomName);
    window.open('../pages/peao.html', '_self');
    }

    document.getElementById('removerEspacos').addEventListener('click', function() {
      let zinnkImg = document.getElementById('zinnkImg');
      zinnkImg.classList.add('rotate');

      zinnkImg.addEventListener('animationend', function() {
          zinnkImg.classList.remove('rotate');
      }, { once: true });
  });