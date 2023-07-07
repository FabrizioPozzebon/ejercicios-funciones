function saludar(nombre){
    console.log( "hola " + nombre);
}
saludar("Fabrizio")

function multiplicar(numeroUno,numeroDos){
    let resultado = numeroUno*numeroDos
    console.log(resultado)
}
multiplicar(5,6)

function areaTriangulo(numeroUno,numeroDos){
    return numeroUno*numeroDos / 2
}
console.log(areaTriangulo(5,3))

function perimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3
}
console.log (perimetroTriangulo(4, 5, 6))

function calcularPrecio (precio, cantidad){
    let precioTotal = precio * cantidad;
    if (cantidad >= 20){
        precioTotal = precioTotal - (precioTotal * 0.2);
        return precioTotal
    }
}
calcularPrecio(20,20)
console.log(calcularPrecio(20,25))

function esMayorDeEdad (){
let edad1 = prompt ("ingrese su edad")
if (edad1 < 18){
    console.log("Eres menor de edad")
}
else {
    console.log("Eres mayor de edad")
}
}
esMayorDeEdad()

function calcularImpuesto() {
    let ingresoAnual = prompt ("ingrese su ingreso anual")
    if (ingresoAnual <= 10000){
        console.log (ingresoAnual = ingresoAnual - (ingresoAnual * 0.1))
    }
    else if (ingresoAnual > 10000 || ingresoAnual <= 20000){
        console.log (ingresoAnual = ingresoAnual - (ingresoAnual * 0.15))
    }
    else if (ingresoAnual > 20000){
        console.log (ingresoAnual = ingresoAnual - (ingresoAnual * 0.2))
    }
}
calcularImpuesto()

function verificarDia() {
    let dia = prompt ("Ingrese dia de la semana") 
    let diaLaboral = ("Dia laboral")
    let finDeSemana = ("Fin de semana")
    switch (dia){
        case"1":
        console.log (diaLaboral)
        break
        case"2":
        console.log (diaLaboral)
        break
        case"3":
        console.log (diaLaboral)
        break
        case"4":
        console.log (diaLaboral)
        break
        case"5":
        console.log (diaLaboral)
        break
        case"6":
        console.log (finDeSemana)
        break
        case"7":
        console.log (finDeSemana)
        break
        default: console.log("Dia de la semana inexistente")
        break
    }
}
verificarDia()