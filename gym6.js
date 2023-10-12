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

    let finalSentence = words.slice(0, -1).join("; ")

    return finalSentence += " and " + words[words.length - 1]
}

primero.innerText = formarPalabras(['Perro', 'Turtle', 'horse', 'butterfly']);

function countSheeps(sheep) {
    let contador = 0;
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === true) {
            contador++
        }

    }
    return contador

}
primero.innerText = countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true])

function to24hourtime(hour, minute, period) {
    if (period === "pm") {
        console.log('es de tarde');
        return (hour + 12).toString() + minute.toString()

    } else {

        if (hour < 10) {
            return "0" + hour.toString() + minute.toString()
        }
        return hour.toString() + minute.toString()
    }

}
primero.innerText = to24hourtime(10, 30, "pm");

function reverseMessage(str) {
    let separado = str.split('');
    let arrayGirado = separado.reverse();
    let unido = arrayGirado.join('');
    return unido
}
primero.innerText = reverseMessage('Hello there');
//('Ereht Olleh')

function frontAgain(str) {
    let frase = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[0] === str[-1]) {
            frase++
        } else {
            return false
        }

    }
    return true
}

/* primero.innerText = frontAgain('edited') //→ true

function maxMod5(a, b) {
    if (a == b) {
        return 0}
    else if (a > b = a ||) {

        }
    } else {

    }
}
primero.innerText = maxMod5(6, 2) //→ 6
 */
/* 
const scores = [{ user: 'x239', score: 100 }, { user: 'yx383', score: 30 }, { user: 'aztek9000', score: 23.4 }, { user: 'wildflower900', score: 13.2 }];
function getScoreAverage(scores) {
    let sum = 0;
    //Array.forEach
    // scores.forEach(x => {
    //   sum = sum + x.score;
    // })
    for (let value of scores) {
        sum = sum + value.score;

        console.log(value)
        //{user: 'x239', score: 100}
        // value.score
        // 100
        // {user: 'yx383', score: 30}
        // value.score
        // 30
        // ...
    }
    const promedio = sum / scores.length;
    return promedio;
} */

// getScoreAverage(scores)

function fizzBuzz(num) {
    //lso divisibles de 3 deben de llebar fizz
    //los divisibles de 5 deben de llevar buzz
    let result = []
    for (let i = 1; i < num + 1; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            result.push(' fizzbuzz ')

        } else if (i % 3 == 0) {
            result.push(' fizz')
        } else if (i % 5 == 0) {
            result.push(' buzz')
        }
        else {
            result.push(i)
        }

    }
    return result
}
primero.innerText = fizzBuzz(60);

function getCount(str) {
    let vowel = 0

    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
        if (str[i]=== 'a' || str[i]==='e' ||str[i]==='i'|| str[i]==='o' ||str[i]=== 'u') { 
            vowel = vowel + 1
        }
    }
    return vowel;
}
primero.innerText = getCount("abracadabra");

function goto(level,button) {
    if (level >= 0 && level <= 3 && typeof( level=== 'number' && Number.isInteger())) { 
        switch (button) {
            case '0':
            case '1': 
            case '2':
            case '3':  
            return parseInt(button) - level;
            default:
            break;
        }
    }
}

//como validad que una variable sea un número 
primero.innerText = (goto(0,'2'),2);


function findMultiples(integer, limit) {
    const multiplos = [];
    for ( let i = integer; i <= limit; i += integer ) {
      multiplos.push(i);
    }
   return multiplos; 
  }
  primero.innerText = findMultiples(1,2);

  function disemvowel(str) {
    let vowels =[]
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    if (str[i]=== 'a' || str[i]==='e' ||str[i]==='i'|| str[i]==='o' ||str[i]=== 'u') {
       vowels = vowels.splice(str[i]);
    } 
        
    }
    return str
  }

  primero.innerText = disemvowel("This website is for losers LOL!");

  function elevator(left, right, call){
    // code on! :)
  }
  primero.innerText = elevator(0, 1, 1); // => "right"

// 12-10-23 Si listamos todos los números naturales bajo el 10 que sean múltiplos de 3 o 5, obtenemos 3, 5, 6 y 9. La suma de estos múltiplos es 23.

//Elabora la solución de modo que retorne la suma de todos los múltiplos de 3 o 5 bajo el número entregado. Además, si el número es negativo, debe retornar 0.

//Nota: Si el número es múltiplo tanto de 3 como de 5, debe sumarse solo una vez.
function solution(number){
    
  
}
primero.innerText = solution()