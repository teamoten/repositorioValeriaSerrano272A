function contador() {
    let segundos = +document.querySelector('#segundos').value;
    setTimeout(finalizar, 1000 * segundos);
}
 function finalizar() {
    let mostrar = document.querySelector('#salida');
    let alarma = document.querySelector('#alarma');
    alarma.play();
    mostrar.textContent = 'ON';
    mostrar.style = 'color: red; font-size: 40px';
 }
 function reiniciar() {
    location.reload();
 }
