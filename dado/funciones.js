function dado() {
    let numero = document.getElementById('num').value; 
    let salida = document.getElementById('salida'); 
    let aleatorizar = Math.floor(Math.random() * numero) + 1; 
    salida.textContent = aleatorizar;
}