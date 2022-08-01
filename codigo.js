
let pedido = prompt("Que pizza quiere pedir? (esc para salir)");

let cantMargarita = 0;
let cantFugazzeta = 0;
let cantRucula = 0;

let total = 0;
let precioFuga = 0;
let precioMargarita = 0;
let precioRucula = 0;
do {
    
    switch (pedido) {
        case "margarita":
            cantMargarita++
            precioMargarita++
            alert("Se agrego una margarita a tu pedido")
            break;
        case "rucula": 
            cantRucula++
            precioRucula++
            alert("Se agrego una rucula a tu pedido")
            break;
        case "fugazzeta":
            cantFugazzeta++
            precioFuga++
            alert("Se agrego una fugazzeta a tu pedido")
            break;
        default:
            alert("no contamos con esa variedad");
            break;
    }
    pedido = prompt("Que pizza quiere pedir? (esc para salir)");
} while (pedido != "esc")

total = (precioFuga*700) + (precioMargarita*600) + (precioRucula*800);
    
console.log("Su pedido es : \n" + cantFugazzeta + " Fugazzeta \n" + cantMargarita +" Margarita \n"+ cantRucula+ " Rucula")

console.log("Total del pedido : $"+ total)



