
let total = 0;
const menu = [
    { nombre: "margarita", precio: 800, ingredientes: "Salsa de tomate, ajo, oregano, albahaca, aceite de oliva" },
    { nombre: "fugazzeta", precio: 900, ingredientes: "Salsa de tomate, mozzarella, cebolla" },
    { nombre: "calabresa", precio: 900, ingredientes: "Salsa de tomate, mozzarella, calabresa" },
    { nombre: "rucula", precio: 950, ingerdientes: "Salsa de tomate, mozzarella, rucula, jamon crudo, parmesano"},
];


class pizzas{
    constructor(nombre, ingredientes, precio,cantidad,) {
        this.nombre = nombre
        this.ingredientes = ingredientes
        this.precio = precio
        this.cantidad= cantidad
    }
}
let margarita = new pizzas("Margarita", "Salsa de tomate, ajo, oregano, albahaca, aceite de oliva", 800,0)
let fugazzeta = new pizzas("Fugazzeta", "Salsa de tomate, mozzarella, cebolla", 900,0)
let calabresa = new pizzas("Calabresa", "Salsa de tomate, mozzarella, calabresa", 900,0)
let rucula = new pizzas("Rucula y jamon crudo", "Salsa de tomate, mozzarella, rucula, jamon crudo, parmesano", 950, 0)


// FUNCION DE DESCUENTO
function descuento() {
     {
        let pregDesc = prompt("Ingrese cupon de descuento").toUpperCase()
        if (pregDesc == "DESCUENTO") {
            let totalDesc = (total * 0.9);
            console.log("Total con descuento : $" + totalDesc)
        } else {
            alert("Este cupon expiro o no es valido")
            let otroCupon = prompt("Quiere probar otro cupon? (Si/No)").toUpperCase()
            if (otroCupon == "si"){
                pregDesc = prompt("Ingrese cupon de descuento ").toUpperCase()
            }
            else if (otroCupon == "no") {
                iniciar= false
            }
        }

    }
    

}

let iniciar = true;
do{
    let comenzar = prompt("Elija una opcion (inresando el numero correspondiente) : \n1-Menu\n2-Ordenar\n3-Salir")

    while (comenzar != 1 && comenzar != 2 && comenzar != 3) {
        alert("Por favor, elija una de las 4 opciones")

        comenzar = prompt("Elija una opcion (inresando el numero correspondiente) : \n1-Menu\n2-Ordenar\n3-Salir")
    } 
        // MENU
    if (comenzar == 1) {

        let todosLosProductos = menu.map((menu) => menu.nombre + " $" + menu.precio);
        alert(todosLosProductos.join(" - "));
    
    }

        // ORDENAR
    else if (comenzar == 2) {
        let pedido = prompt("Que pizza quiere pedir? (esc para salir)").toLowerCase();
        do {
            switch (pedido) {
                case "margarita":
                    margarita.cantidad++;
                    total = total + margarita.precio;
                    alert("Se agrego una margarita a tu pedido")
                    break;
                case "rucula":
                    rucula.cantidad++;
                    total = total + rucula.precio;
                    alert("Se agrego una rucula a tu pedido")
                    break;
                case "fugazzeta":
                    fugazzeta.cantidad++;
                    total = total + fugazzeta.precio;
                    alert("Se agrego una fugazzeta a tu pedido")
                    break;
                case "calabresa":
                    calabresa.cantidad++;
                    total = total + calabresa.precio;
                default:
                    alert("no contamos con esa variedad");
                    break;
            }
            pedido = prompt("Que pizza quiere pedir? (esc para terminar)").toLowerCase();
        
        } while (pedido != "esc") { iniciar = false }
        
        console.log("Su pedido es : \n" + margarita.cantidad + " Margarita \n" + rucula.cantidad + " Rucula \n" + fugazzeta.cantidad + " Fugazzeta \n" + calabresa.cantidad + " Calabresa")

        console.log("Total del pedido : $" + total)

        if (total!=0){descuento()}
    }
        // SALIR
    else if (comenzar == 3) {
        iniciar=false
    }
  

}while(iniciar==true)
 
alert("Muchas gracias!")