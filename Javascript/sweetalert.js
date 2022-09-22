// utilizo la libreria sweet alert para reemplazar la idea de bienvenida de antes

function bienvenida() {

    swal("Ingrese su nombre de usuario", {
        content: "input",
    })
        .then((value) => {
            swal(`Su nombre de usuario es ${value}`)
        })
}

bienvenida()




// Aplicando DOM (esto es lo que aun no pude agregar, igual es un detalle mas estetico de la pagina)
// modifico el nombre de bienvenida del encabezado segun el nombre de usuario ingresado
// let bienvenidaUsuario = document.getElementById("encabezado")
// let bienvenidaUsuario = document.getElementById("encabezado")
// bienvenidaUsuario.innerText = `Bienvenidx ${content}`
























// let nuevoUsuario = prompt("Ingrese nombre de usuario")
// if (nuevoUsuario == "") {
//     alert("No ingresaste un nombre de usuario")
// } else {
//     alert("Su nuevo nombre de usuario es " + nuevoUsuario)
// }





