const ingresaTexto = document.getElementById("ingresaTexto");

const botonEncriptar = document.getElementById("botonEncriptar");

const botonDesencriptar = document.getElementById("botonDesencriptar");

const botonCopiar
= document.getElementById("botonCopiar");

const mensajeFinal
= document.getElementById("mensajeFinal");

const munieco
= document.getElementById("munieco");

const rightInfo
= document.getElementById("rightInfo");

const right
= document.getElementById("right");

let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

botonEncriptar.addEventListener("click", () => {
    const texto = ingresaTexto.value.toLowerCase()
    function encriptar(newText){
        for(let i=0; i<remplazar.length; i++){
            if (newText.includes(remplazar[i][0])) {
                newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
            };
        };
        return newText
    }
    const textoEncriptado = encriptar(texto);
    mensajeFinal.innerHTML = textoEncriptado;
    ingresaTexto.value = "";
    munieco.style.display = "none";
    rightInfo.style.display = "none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");

    //console.log(encriptar(texto))
});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresaTexto.value.toLowerCase()
    function desencriptar(newText){
        for(let i=0; i < remplazar.length; i++){
            if (newText.includes(remplazar[i][1])) {
                newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
            };
        };
        return newText
    }
    const textoDesencriptado = desencriptar(texto);
        mensajeFinal.innerHTML = textoDesencriptado;
        ingresaTexto.value = "";
        munieco.style.display = "none";
        rightInfo.style.display = "none";
        botonCopiar.style.display = "block";
        right.classList.add("ajustar");
        mensajeFinal.classList.add("ajustar");

    
});

botonCopiar.addEventListener("click", () =>{
    let texto = mensajeFinal;
    texto.select();
    document.execCommand("copy");
    //navigator.clipboard.writeText(texto.value);
    alert("Texto Copiado");
    mensajeFinal.innerHTML = "";
    munieco.style.display = "block";
    rightInfo.style.display = "block";
    botonCopiar.style.display = "none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresaTexto.focus();
});

