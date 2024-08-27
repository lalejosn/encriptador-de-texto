function esTextoValido(texto) {

    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

function encriptarTexto() {
    const texto = document.getElementById("textoSinEncriptar").value;

    if (!esTextoValido(texto)) {
        alert("El texto debe contener solo letras minúsculas sin acentos.");
        return;
    }

    let textoEncriptado = texto;


    textoEncriptado = textoEncriptado.replace(/e/g, "enter");
    textoEncriptado = textoEncriptado.replace(/i/g, "imes");
    textoEncriptado = textoEncriptado.replace(/a/g, "ai");
    textoEncriptado = textoEncriptado.replace(/o/g, "ober");
    textoEncriptado = textoEncriptado.replace(/u/g, "ufat");

    document.getElementById("textoEncriptado").value = textoEncriptado;
}

function desencriptarTexto() {
    const texto = document.getElementById("textoEncriptado").value;

    if (!esTextoValido(texto)) {
        alert("El texto debe contener solo letras minúsculas sin acentos.");
        return;
    }

    let textoDesencriptado = texto;

    textoDesencriptado = textoDesencriptado.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");

    document.getElementById("textoSinEncriptar").value = textoDesencriptado;
}

document.getElementById('textoEncriptado').addEventListener('input', function() {
    const overlay = document.getElementById('overlay');
    if (this.value.trim() !== "") {
        overlay.classList.add('hidden');
    } else {
        overlay.classList.remove('hidden');
    }
});

document.getElementById('textoEncriptado').addEventListener('focus', function() {
    const overlay = document.getElementById('overlay');
    overlay.classList.add('hidden');
});

document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('textoEncriptado');
    const overlay = document.getElementById('overlay');

    function actualizarOverlay() {
        if (textarea.value.trim() !== "") {
            overlay.classList.add('hidden');
        } else {
            overlay.classList.remove('hidden');
        }
    }

    textarea.addEventListener('input', actualizarOverlay);

    textarea.addEventListener('focus', function() {
        overlay.classList.add('hidden');
    });

    textarea.addEventListener('blur', actualizarOverlay);


    actualizarOverlay();
});