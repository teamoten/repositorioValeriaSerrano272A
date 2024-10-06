function promediar() {
    const nota1 = +document.querySelector('#nota1').value;
    const nota2 = +document.querySelector('#nota2').value;
    const nota3 = +document.querySelector('#nota3').value;
    const salida = document.querySelector('#salida');
    const promedio = (nota1 * 0.35) + (nota2 * 0.35) + (nota3 * 0.30);


 if (nota1 >=1 && nota1 <=10 && nota2 >=1 && nota2 <=10 && nota3 >=1 && nota3 <=10) {
    if (promedio >=6 - 0.0001 && promedio <=10){
        salida.textContent = promedio.toFixed(2) + ' -> APROBADO';
    } else{
        salida.textContent = promedio.toFixed(2) + ' -> REPROBADO';
    }
    if (promedio >=9 - 0.0001){
        frase.textContent = "Excelente desempeño";
    } else if (promedio >= 7 && promedio <9) {
        frase.textContent = "Muy buen desempeño"
    } else if (promedio >=6 && promedio <7) {
        frase.textContent = "Aprobado, pero debes mejorar"
    } else {
        frase.textContent = "Esfuérzate más en el siguiente periodo"
    }
} else {
    salida.textContent = 'Ingrese notas válidas del 1 al 10'
}
}
