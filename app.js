const textArea = document.querySelector(".text-area");
const mensajes = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensajes.value = textoEncriptado
    textArea.value = "";
    mensajes.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensajes.value = textoEncriptado
    textArea.value = "";
}

function btnCopiar() {
    const mensajes = document.querySelector(".mensaje");
    mensajes.select(); 
    mensajes.setSelectionRange(0,99999); 
    navigator.clipboard.writeText(mensajes.value); 

    alert("Texto copiado al portapapeles")
    
}


function encriptar (stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"] ,["o","ober"],["u","ufat "] ]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length ; i++ ) {
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}

function desencriptar (stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"] ,["o","ober"],["u","ufat "] ]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length ; i++ ) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}