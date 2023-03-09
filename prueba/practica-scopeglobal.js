var uno;
uno = 4;
var dos = 5;

function p1() {
    var tres = uno * 3;
    console.log(tres);
}
p1()
//uso de la variable global en una funcion

function p2() {
    var uno = 2 * 3;
    console.log(uno)
}
p2()
console.log(uno)
//redeclaracion dentro de la funcion