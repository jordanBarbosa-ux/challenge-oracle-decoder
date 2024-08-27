const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/


function btnEncriptar()
{
    const textEncriptado = encriptar(textArea.value)
    mensaje.value = textEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"

}

function btnDesncriptar()
{
    const textEncriptado = desencriptar(textArea.value)
    mensaje.value = textEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    

}
function copiarText()
{
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    mensaje.style.backgroundImage = "url(imagenes/Muneco.png)"
}



function encriptar(stringEncriptador)
{
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptador = stringEncriptador.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptador.includes(matrizCodigo[i][0]))
        {
            stringEncriptador = stringEncriptador.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
        
    }
    return stringEncriptador
}





function desencriptar(stringDesencriptador)
{
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptador = stringDesencriptador.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptador.includes(matrizCodigo[i][1]))
        {
            stringDesencriptador = stringDesencriptador.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
        
    }
    return stringDesencriptador
}

