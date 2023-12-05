//Función que invierte una cadena 
function invertirCadena(params) {

    const arrayLetras= params.split('')
    return arrayLetras.reverse().join('')
}

let boton= document.getElementById('botoncito')
let caja= document.getElementById('cajita')





boton.addEventListener('click', function(){
    let texto=caja.value;
    let textoInvertido = invertirCadena(texto)
    document.getElementById('parrafo-uno').innerHTML = textoInvertido
})
