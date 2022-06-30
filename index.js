let nombre = prompt("ingresa tu nombre");
let apellido = prompt("ingresa tu apellido");
let nick = prompt("ingresa tu nickname para personalizar tu producto");
let email = prompt("ingresa tu email");
let direccion = prompt("Ingresa la dirección adonde quieras enviar el pedido");
let ubicacion = prompt("ingresa la provincia a la que perteneces (Solo Cuyo)").toLowerCase();

console.log(nombre, ubicacion, email);

if ((ubicacion == "mendoza") || (ubicacion == "san juan") || (ubicacion == "san luis")){
    alert("¡El envío se realizara a tu provincia cuando el producto este listo!");
    alert("tu pedido se enviará a: " + direccion);
} else { 
        alert("¡Aún no hacemos envios a tu provincia!");
    }





