
let cantMargarita = 0;
let cantFugazzeta = 0;
let cantRucula = 0;
let total = 0;
let rucula = 800;
let fugazzeta = 700;
let margarita = 600;
function ordenar(){
    let pedido = prompt("Que pizza quiere pedir? (esc para terminar)");
    do {
        switch (pedido) {
            case "margarita" :
                cantMargarita++;
                total = total + margarita;
                alert("Se agrego una margarita a tu pedido")
                break;
            case "rucula": 
                cantRucula++;
                total = total + rucula;
                alert("Se agrego una rucula a tu pedido")
                break;
            case "fugazzeta":
                cantFugazzeta++;
                total = total + fugazzeta;
                alert("Se agrego una fugazzeta a tu pedido")
                break;
            default:
                alert("no contamos con esa variedad");
                break;
        }
        pedido = prompt("Que pizza quiere pedir? (esc para salir)");
        
    } while (pedido != "esc")
   

    console.log("Su pedido es : \n" + cantFugazzeta + " Fugazzeta \n" + cantMargarita + " Margarita \n" + cantRucula + " Rucula")

    console.log("Total del pedido : $" + total)
    
let pregDesc = prompt("Ingrese cupon de descuento")
    if (pregDesc=="descuento"){
        let totalDesc = (total * 0.9);
        console.log("Total con descuento : $" + totalDesc)
    }else{alert("Este cupon expiro o no es valido")}

}
 
ordenar()




