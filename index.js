function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
     .replace(/e/gi, "enter")
     .replace(/i/gi, "imes")
     .replace(/a/gi, "ai")
     .replace(/o/gi, "ober")
     .replace(/u/gi, "ufat");

    if(document.getElementById("texto").value.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        titulomensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./imagenes/encriptado.jpeg";
    }else{
        muñeco.src = "./imagenes/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Escribe el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");

    }

}