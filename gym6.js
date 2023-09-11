let primero = document.querySelector('h3')
let segundo = document.querySelector('h4')
let tercero = document.querySelector('h5')
let cuerto = document.querySelector('h6')

function arrayDiff(a, b) { //Declaramos a y b como parametros
    return a.filter(item => !b.includes(item));//filter itera todos los elementos de a y los compara 
}//los comparamos usando includes que checa que el elemento actual de a esta dentro de b
primero.innerText = arrayDiff([1, 2, 2, 2, 3], [1]) // llamamos a la funcion pasandole dos arrays

function plusTwo(a, b) {
    return a.concat(b)
}
primero.innerText = plusTwo([1, 2], [3, 4])

function match(candidate, job) {
    if (candidate.minSalary <= job.maxSalary) { // si el salario es menor al ofrecido
        return `${candidate.name} fue contratado como ${job.description}`;
    } else {
        return `${candidate.name} NO fue contratado como ${job.description} Porque el sueldo es ${job.maxSalary}`;
    }
}

let Amalia = { minSalary: 120000, edad: 12, name: 'Amalia soto' };
let Alex = { minSalary: 100000, edad: 8, name: 'Alex Nava' };
let as = { maxSalary: 130000, description: 'astronauta' };
let pa = { maxSalary: 80000, description: 'panadero' };

primero.innerText = match(Amalia, pa);

function formarPalabras(words) {
  
    let finalSentence = words.slice(0,-1).join("; ")

    return finalSentence += " and " + words[words.length-1]
}
primero.innerText = formarPalabras(['Perro', 'Turtle', 'horse', 'butterfly']);