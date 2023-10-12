let primero = document.querySelector('h3')
let segundo = document.querySelector('h4')
let tercero = document.querySelector('h5')
let cuerto = document.querySelector('h6')
// primero.innerText = "Hola"
// let numeros = [3, 5, 6, 7, 8, 9]
// let david = {
//     nombre: 'david entero',
//     edad: 24,
//     cabello: "castanio"
// }

// recibe Array de enteros.  ---- listo
// Devuelve un array  ---- listo
// donde el primer elemento es el conteo de números positivos---- listo
// y el segundo elemento es la suma de los números negativos. ---- listo
// El número 0 no es considerado ni positivo ni negativo.---- listo
// Si la entrada es un array vacío o nulo, devuelve un array vacío.
let testData1 = [1, 2, 3, 0, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let testData2 = [1, 2, 3, 7, 0, 8, 9, 0, 10, -14, -15, -3];
let testData3 = [34, 200, 35, -15, -3];

function countPositivesSumNegatives(input) {
    let contadorPositivos = 0;
    let negativos = 0;

    if (input == null || input.length == 0) {
        return []
    } else {
        for (i = 0; i < input.length; i++) {
            if (input[i] > 0) {
                console.log(input[i]);
                contadorPositivos++;
            } else if (input[i] < 0) {
                negativos = negativos + input[i];
            }
        }
        return [contadorPositivos, negativos]
    }
}

/* 
function icyHot(temp1, temp2)  si un numero esta entre 0 y 100 regresa falso si no true
} */
function icyHot(temp1, temp2) {

    if ((temp1 > 100 || temp1 < 0) && (temp2 > 100 || temp2 < 0)) {
        return true
    } else {
        return false
    }
}
//primero.innerText = icyHot(140,7)

function comboString(a, b) {    // si a es mas grande que b ponla en short si no ponla en large
    let short, long;
    if (a.length < b.length) {
        short = a;
        long = b;
    } else {
        short = b;
        long = a;
    }
    return short + long + short
}

//primero.innerText = comboString('Hola','HH')
function reverse3(nums) {
    //    reverse3([1, 2, 3]) → 3,2,1
    //    reverse3([5, 11, 9]) → 9,11,5
    let numsInvertido;
    numsInvertido = nums.slice().reverse();
    return numsInvertido;
    //return [nums[2],nums[1],nums[0]]
}
//primero.innerText = reverse3([100,5,9])

function societyName(friends) {
    //societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
    let respuesta = [];
    for (let i = 0; i < friends.length; i++) {
        respuesta.push(friends[i][0])

    }

    return respuesta.join('').toUpperCase()
}
//primero.innerText = societyName(['amalia','soto','Oscar','Alejandro','nava'])

function countBy(x, n) { //count n numbers by X
    let z = [];
    for (let index = 0; index < n; index++) {
        z.push((index + 1) * x)
    }
    return z;
}//primero.innerText = (countBy(2,5))

function solution(number) { // regresa la suma de los numeros que sean multiplos de 3 o 5 
    let suma = 0
    for (let i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            suma = suma + i;
        }

    }
    return suma
}
//primero.innerText = solution(10)

function spinWords(string) {// return the same string, but with all five or more letter words reversed. 
    let spinedString = []

    string.split(' ').forEach(word => {
        if (word.length >= 5) {
            spinedString.push(word.split('').reverse().join(''))
        }
        else {
            spinedString.push(word)
        }
    });
    return spinedString.join(' ')
}
primero.innerText = spinWords("Hola y to soy Aamalia y teng o mucha hambre")


function findOdd(A) {
    let objectOfCounts = {}

    for (const number of A) {
        if (objectOfCounts[number]) {
            objectOfCounts[number]++
        } else {
            objectOfCounts[number] = 1;
        }
    }

    let oddOccurrenceNumber = 0

    for (const key in objectOfCounts) {
        if (objectOfCounts[key] % 2 !== 0) {
            oddOccurrenceNumber = parseInt(key)
            break;
        }
    }
    return oddOccurrenceNumber;
}

//primero.innerText = findOdd([5,4,3,2,1,5,4,3,2,10,10]) 

function digitalRoot(n) { //is the recursive sum of all the digits in a number.
    if (n > 10) {
        let final = 0
        stringyNumber = n.toString();
        for (let i = 0; i < stringyNumber.length; i++) {
            final = final + parseInt(stringyNumber[i])

        }
        return digitalRoot(final)
    } else {
        return n
    }
}
//primero.innerText = digitalRoot(111)

function likes(names) {
    switch (names.length) {
        case 0:
            return "no one likes this";
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}

//primero.innerText = likes(['Alex', 'Jacob', 'Mark', 'Max'])

function arrayDiff(a, b) {
    a.forEach(element => {
        if (b.includes(element)) {
            a = a.filter(item => item !== element)
        }
    });
    return a
}
//primero.innerText = arrayDiff([1,2,2], [2])

function createPhoneNumber(numbers) {
    let converted = `(${numbers.splice(0, 3).join('')}) ${numbers.splice(0, 3).join('')}-${numbers.splice(0, 4).join('')}.`
    return (converted)
}
//primero.innerText = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
function findOutlier(integers) {
    let pares = integers.filter(integers => integers % 2 == 0)
    let impares = integers.filter(integers => integers % 2 !== 0)
    return pares.length === 1 ? pares[0] : impares[0];

}
//primero.innerText = findOutlier([2,6,8,10,3])










function checarSiEsParOImpar(numero) { // cehca si un numero es par o impar
    if (numero % 2 == 0) { // % se llama operacion modulo o restante
        return 'par';
    } else {
        return "impar"
    }
}
//primero.innerText = checarSiEsParOImpar(111111111111);

function likes(listaUsuarios) {

    switch (listaUsuarios.length) {
        case 0:
            return 'No le dio like nadie'
        case 1:
            return `Le dio like ${listaUsuarios[0]}`
        case 2:
            return `Le dio like ${listaUsuarios[0]} y ${listaUsuarios[1]} `
        case 3:
            return `Le dio like ${listaUsuarios[0]}, ${listaUsuarios[1]} y ${listaUsuarios[2]}`
        default:
            return `Le dio like ${listaUsuarios[0]}, ${listaUsuarios[1]} y ${listaUsuarios.length - 2} personas mas`
    }
}
//primero.innerText = likes(['Juan', 'Maria', 'Roberto', 'eriberto', 'holicia', 'perro','holicia','perro'])
//primero.innerText = likes(['eriberto','holicia','perro'])
//primero.innerText = likes(['holicia','perro'])
//primero.innerText = likes(['Maria'])

function celsiusFarenhait(params) {
    let celsius = params
    let farenhait;
    farenhait = celsius + 10
    return farenhait
}
//primero.innerText = celsiusFarenhait(125);

function checkPassword(pass) { // checa que sea mas de 6 letras y que no tenga espacios
    if (pass.length > 6 && pass.indexOf(' ') == -1) {
        return "welcome"
    } else {
        return 'we are sorry, the password must be more than 6 characters and cannot have spaces'
    }
}
//primero.innerText = checkPassword("peropero45");
//segundo.innerText = checkPassword("este oso");
//tercero.innerText = checkPassword("pedro");


// we have two arrays [],[], each array has two numbers = [450,4]
// consider the sum of each array [10,1] and [7,9]
// 11 and 16, 16 is the biggest number
//so we have tu return the biggest array, of 16 = return [7,9]

//exception is if they are the same 2,2 and 3,1, return the first A
function biggerTwo(a, b, c) {
    //a = [42,9]
    const sumOfA = a[0] + a[1]   //additon or sum of the first array elemts 
    // we save it or keep it in the variable sumofA
    const sumOfB = b[0] + b[1]

    const sumOfC = c[0] + c[1]

    if (sumOfA >= sumOfB) {// sacar b
        if (sumOfA >= sumOfC) {
            return a
        } else {
            return c
        }
    }
    else { // sacar 1
        if (sumOfB >= sumOfC) {
            return b
        } else {
            return c
        }
    }
}
//primero.innerText = biggerTwo([42,9],[2,1],[4,6]); // 42,9
//segundo.innerText = biggerTwo([20,70],[50,60],[500,60]); // 8,99
//tercero.innerText = biggerTwo([0,0],[3,1],[0,4]); //2,2

document.getElementById('rock').addEventListener('click', function () {
    piedraPapelTijeras('r');
});

document.getElementById('paper').addEventListener('click', function () {
    piedraPapelTijeras('p');
});

document.getElementById('scissors').addEventListener('click', function () {
    piedraPapelTijeras('s');
});

function piedraPapelTijeras(userChoice) {
    const resultado = document.getElementById('result')
    let options = ['r', 'p', 's']
    let randomNumber = Math.floor(Math.random() * 3)
    let computerchoice = options[randomNumber]

    if (userChoice == computerchoice) {
        return resultado.innerText = `Es empate`;
    }
    else if (
        (userChoice == 'r' && computerchoice == 's') ||
        (userChoice == 's' && computerchoice == 'p') ||
        (userChoice == 'p' && computerchoice == 'r')
    ) {
        return resultado.innerText = `tu ${userChoice} le gana a la compu ${computerchoice} `;
    } else {
        return resultado.innerText = `tu ${userChoice} pierde contra a la compu ${computerchoice} `
    }
}
function isEven(number) {
    //if (Number.isInteger(number/2)) {
    if (number % 2 == 0) {
        return number + ' is even'
    } else {
        return number + ' is odd'
    }
}
//primero.innerText = isEven(22) 

function changeToAmericanSchool(score) { // A 90 a 100 B de 80 a 89 C de 70 a 79
    // D de 60 a 69 F 59 o menos        
    if (score >= 90 && score <= 100) {
        return score + ' A'
    } else if (score >= 80 && score < 90) {
        return score + ' B'
    } else if (score >= 70 && score < 80) {
        return score + ' C'
    } else if (score >= 60 && score < 70) {
        return score + ' D'
    }
    else if (score <= 59 && score >= 0) {
        return score + ' F'
    }
    else return score + ' numero no valido'
}
//primero.innerText = changeToAmericanSchool(Math.floor(Math.random() * 200) - 50) 

function tipoDeNumero(num) {
    if (num > 0) {
        return 'positive'
    }
    else if (num < 0) {
        return 'negative'
    }
    else if (num == 0) {
        return 'zero'
    }
}
primero.innerText = tipoDeNumero(-4564567)


function checarEstacion(month) {

    if (month == 'december' || month == 'january' || month == 'february') {
        return 'winter'
    } else if (month == 'march' || month == 'april' || month == 'may') {
        return 'spring'
    }
    else if (month == 'june' || month == 'july' || month == 'august') {
        return 'summer'
    }
    else {
        return 'autumn' // september october and novemeber are in the else
    }
}
primero.innerText = checarEstacion('JUNE'.toLocaleLowerCase())


function disccountCalculator(cost) {
    // this store has a 10 % discount, but if you buy more than 100$ the discount is 15%
    // we recive the full amount and return the discount and the total
    if (cost < 100) {
        return 'Original price is $' + cost + ' -10% disccount: $' + cost * .90
    } else {
        return 'Original price is $' + cost + ' -15% disccount: $' + cost * .85
    }
}
primero.innerText = disccountCalculator(500)

function firstLetterVowel(words) {
    // check if the firtst letter is a vowel
    const vowels = ['a', 'e', 'i', 'o', 'u']
    lowerCaseWords = words.toLowerCase()
    if (vowels.includes(lowerCaseWords[0])) {
        return 'First letter is a vowel'
    } else {
        return 'First letter is a consonant'
    }
}
primero.innerText = firstLetterVowel("OMMENTARIES")
segundo.innerText = firstLetterVowel("comenytarios")

// make a function that converts kms into meters 2km = 2000m
function forExample(contador) {
    let arrayList = [];
    for (let i = 0; i < contador; i++) {
        console.log(i + 1);
        arrayList.push((i + 1))
    }
    return arrayList;
}

//primero.innerText = forExample(45)

function evenNumbers(params) { // even is par odd is impar 
    let arrayList = [];
    for (let i = 1; i < params; i++) {
        if (i % 2 == 0) {
            arrayList.push((i))
        }
        //arrayList.push((i+1)) 
    }
    return arrayList;
}
//primero.innerText = evenNumbers(7)

// [program that checks the number of vowels in a sentence]
// 'Hola que onda' has 6 vowels
function vowelCounter(sentence) {
    // make a vtriable with the vowels - first step
    // make a counter for found vowels
    // make a for that runs all the string sentence letter bu letter
    // inside the for increase the counter for each vowel found
    const vowels = ['a', 'e', 'i', 'u', 'o'];
    let counter = 0;

    for (let i = 0; i < sentence.length; i++) {
        if ((vowels).includes(sentence[i])) {
            counter++
        }
    }
    return counter
}
primero.innerText = vowelCounter("gg jk klty hhbn ytiyb")

function lottoTicket(a, b, c) {
    // we need to check if all are equal
    if (a === b && b === c) {
        if (a === 2) {
            return 10
        }
        return 5
    }
    if (a != b && a != c) {
        return 1
    } else {
        return 0
    }
}
primero.innerText = lottoTicket(0, 1, 2)


function middleThree(string) {
    let middle = Math.floor(string.length / 2) //Math.floor redondea hacia abajo
    //Math.ceil redondea ahcia arriba
    return string.substring(middle - 1, middle + 2)
}
primero.innerText = middleThree('mariadasdasdsaamuch')

function abbrevName(name) {

    wordsArray = name.toUpperCase().split(' ')//('Patrick Feeney') ==> ['patrick','feeney']

    return wordsArray[0][0] + '.' + wordsArray[1][0]
}
primero.innerText = abbrevName('Patrick Feeney')


function removeChar(str) {

    return str.substring(1, str.length - 1)
};
primero.innerText = removeChar('aAlejandr')


function makeChocolate(small, big, goal) {
    const remainder = goal - (big * 5)
    if (remainder <= small && remainder >= 0) {
        return remainder
    }
    if (remainder < 0) {// sis  epuede cubrir
        return goal % 5
    }
    return -1
}
primero.innerText = makeChocolate(9, 2, 16) // 9 + 10 total 19

function teenSum(a, b) {
    if (a >= 13 && a <= 19 || b >= 13 && b <= 19) {
        return 19
    }
    return a + b

}
primero.innerText = teenSum(10, 13)

function filter_list(l) {
    let numberArray = []
    for (let index = 0; index < l.length; index++) {
        if (typeof l[index] === 'number') {
            numberArray.push(l[index])
        }
    }
    return numberArray
}
primero.innerText = filter_list([10, 'hola', 13, 2, 'Jaci', 5, 7, 6])

function createPhoneNumber(n) {
    if (n.length !== 10) {
        return ("No tiene 10 numeros");
    }
    return `(${n.slice(0, 3).join('')}) ${n.slice(3, 6).join('')}-${n.slice(6, 10).join('')}`
}
primero.innerText = createPhoneNumber([9, 5, 3, 8, 4, 6, 9, 5, 7, 6])

function moveZeros(arr) {
    let resultados = [];// Creamos un array vacio para guarda todo
    let countZeros = 0;//Guarda cuantos 0 hay
    console.log("el total de ceros al inicio es " + countZeros);
    for (let i = 0; i < arr.length; i++) {//clico que itera arr 
        console.log('Elemento actual ' + arr[i]);
        if (arr[i] === 0) { //si el elemento actual de arr es = 0
            countZeros++//cuenta cuantos 0 hay
        } else {
            resultados.push(arr[i]) //Si no es 0 guardalos en el array vacio 
        }
    }
    console.log("el total de ceros al final es " + countZeros); //4.lenght

    for (let i = 0; i < countZeros ; i++) {//Ponemos el numero de 0 al final array resultados
        resultados.push(0)
    }
    return resultados
}
primero.innerText = moveZeros([21, 'choco', 0, 1, 0, 1, 0, 3, false, 1])

function arrayDiff(a, b) { //Declaramos a y b como parametros
return a.filter(item=>!b.includes(item));//filter itera todos los elementos de a y los compara 
}//los comparamos usando includes que checa que el elemento actual de a esta dentro de b
primero.innerText = arrayDiff ([1,2,2,2,3], [1]) // llamamos a la funcion pasandole dos arrays

function plusTwo(a, b){
  return a.concat(b)
}
primero.innerText = plusTwo([1, 2], [3, 4])


