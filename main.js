
function calculadora() {
    let continuar = true;

    while (continuar) {
        let operacion = prompt("Elige una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir");
        
        if (operacion === "5") {
            alert("¡Gracias por usar la calculadora!");
            continuar = false;
            break;
        }
        
        if (["1", "2", "3", "4"].indexOf(operacion) === -1) {
            alert("Opción inválida. Por favor, elige un número entre 1 y 5.");
            continue; 
        }
        
        let num1 = parseFloat(prompt("Introduce el primer número:"));
        let num2 = parseFloat(prompt("Introduce el segundo número:"));

        if (isNaN(num1) || isNaN(num2)) {
            alert("Por favor, introduce números válidos.");
            continue;
        }
        
        let resultado;
        switch (operacion) {
            case "1":
                resultado = num1 + num2;
                alert("El resultado de la suma es: " + resultado);
                break;
            case "2":
                resultado = num1 - num2;
                alert("El resultado de la resta es: " + resultado);
                break;
            case "3":
                resultado = num1 * num2;
                alert("El resultado de la multiplicación es: " + resultado);
                break;
            case "4":
                if (num2 === 0) {
                    alert("No se puede dividir entre cero.");
                } else {
                    resultado = num1 / num2;
                    alert("El resultado de la división es: " + resultado);
                }
                break;
        }
    }
}

calculadora();
