//SE VE A TRAVES DE LA CONSOLA, YA QUE NO SE COMO MOSTRAR UN ARRAY POR UN ALERT.

let nuevaEmpresa
let cantidad = 4;
const empresasRegistradas = [
    { id: 1, nombre: "Broota INC", precio: 200 },
    { id: 2, nombre: "Farmaloop LLC", precio: 180 },
    { id: 3, nombre: "Ecopass INC", precio: 210 },
];

do {
    nuevaEmpresa = {
        id: empresasRegistradas.length + 1,
        nombre: prompt("Ingrese el nombre de la nueva empresa para transar acciones:"),
        precio: prompt("Ingrese el precio de la accion de la nueva empresa:")
    };

    empresasRegistradas.push(nuevaEmpresa);
} while (empresasRegistradas.length != cantidad);

const nuevoListado = empresasRegistradas.concat([{
    id: 5,
    nombre: "Kidsbook Enterprise",
    precio: 60
}]);

console.log(nuevoListado)