function saludo() {
    let useName = "ana";
    console.log(useName); //variable que puede se accedida dentro de la misma funcion

    if (useName === "ana") {
        console.log(`hola ${useName}!`) //variable que puede ser accedida dentro de un bloque de la misma funcion
    }
}
saludo();
console.log(useName); //la variable no puede ser accedida desde afuera