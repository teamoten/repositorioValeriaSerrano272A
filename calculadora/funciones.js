function mostrarResultado(resultado){
    document.getElementById('display').value = resultado;
}
function suma(){
    let num1 = +document.getElementById('num1').value; //el signo + hace que no lo tome como texto
    let num2 = +document.getElementById('num2').value; 
    mostrarResultado(num1 + num2); //acá se determina la función matemática que se realizará
}
function resta(){
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    mostrarResultado(num1 - num2);
}
function multiplicacion(){
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    mostrarResultado(num1 * num2);
}
function division(){
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    mostrarResultado(num1 / num2);
}
function potencia(){
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    mostrarResultado(Math.pow(num1, num2));
}
function raiz(){
    let num2 = +document.getElementById('num2').value;
    mostrarResultado(Math.sqrt(num2));
}
function ce(){
   let display = document.getElementById('display').value = ' '; //para que se elimine
   let num1 = document.getElementById('num1').value = ' ';
   let num2 = document.getElementById('num2').value = ' ';
}