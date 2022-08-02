
let pedido = prompt("Que pizza quiere pedir? (esc para salir)");

let cantMargarita = 0;
let cantFugazzeta = 0;
let cantRucula = 0;
let total = 0;
let rucula = 0;
let fugazzeta = 0;
let margarita = 0;
do {
    switch (pedido) {
        case "margarita" :
            cantMargarita++;
            margarita = 600;
            alert("Se agrego una margarita a tu pedido")
            break;
        case "rucula": 
            cantRucula++
            rucula = 800;
            alert("Se agrego una rucula a tu pedido")
            break;
        case "fugazzeta":
            cantFugazzeta++;
            fugazzeta = 700;
            alert("Se agrego una fugazzeta a tu pedido")
            break;
        default:
            alert("no contamos con esa variedad");
            break;
    }
    pedido = prompt("Que pizza quiere pedir? (esc para salir)");
    
    total = rucula + margarita + fugazzeta;

} while (pedido != "esc")




    
console.log("Su pedido es : \n" + cantFugazzeta + " Fugazzeta \n" + cantMargarita +" Margarita \n"+ cantRucula+ " Rucula")

console.log("Total del pedido : $"+ total)



