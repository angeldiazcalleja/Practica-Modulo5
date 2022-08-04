const carrito = [
    {
    id: 13200,
    name: "Latas de refresco",
    price: 0.75,
    count: 18, 
    prime: true,
    },

    {
    id: 18524,
    name: "Pavo en tacos",
    price: 6.25,
    count: 2, 
    prime: false,
    },

    {
    id: 25620,
    name: "Detergente",
    price: 9.95,
    count: 4, 
    prime: false,
    },

    {
    id: 85963,
    name: "Saco comida perro",
    price: 21,
    count: 3, 
    prime: true,
    },

]
var indice;

for (i = 0; i < carrito.length; i++) {
    if (carrito [i].id == 18524) {
        indice =i;
    };
}

carrito.splice (indice, 1);

for (producto of carrito) {
    mostrar (producto);
}


function mostrar (producto) {
    console.log ("id:" + producto.id);
    console.log ("name:" + producto.name);
    console.log ("price:" + producto.price);
    console.log ("count:" + producto.count);
    console.log ("prime:" + producto.prime);
    console.log ("----------");
 }



//Calcular el total del carrito de la compra 

var total = 0;

for (i=0; i < carrito.length; i++) {
    total += carrito[i].price * carrito[i].count;
    console.log (carrito[i].name + " ", carrito[i].price * carrito [i].count)
}

 console.log ("Total de la compra: " ,total + "€");
 console.log ("------");

 //Filtrar por los productos que sean prime


for (i=0; i < carrito.length; i++) {
    if (carrito[i].prime ==true) mostrar (carrito[i])
}

//Mostrar mensaje de los posibles gastos de envío

let prime = true;
for (i=0; i < carrito.length; i++)
   if (carrito[i].prime === false) {
      prime = false;
   }

   if (prime === true) {
    console.log ("Este pedido es gratuito para usted");
   } else {
    console.log ("Este pedido tiene unos gastos de envío de 4.5€");
   }


   //Mostrar el carrito en un listado de HTML básico

document.write ("<h1> Lista de la compra </h1>")

for (i=0; i < carrito.length; i++)
document.write("<h3><li>" + carrito[i].name + ": " + carrito[i].price + "€" + "<br></br>" + "Cantidad: " + carrito[i].count + "<br></br>" + "</li></h3>")


//Aplicar descuento del 5% si la compra es mayor de 100€

if (total >= 50)
 total = total * 0.95

 console.log ("Total de la compra: " ,total + "€");
 console.log ("------");
