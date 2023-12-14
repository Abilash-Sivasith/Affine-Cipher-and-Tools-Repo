/* 
provided a secret text, the function can both decrpyt and encrypt it
*/

const alphabetMapping = {
    'a': 0,
    'b': 1,
    'c': 2,
    'd': 3,
    'e': 4,
    'f': 5,
    'g': 6,
    'h': 7,
    'i': 8,
    'j': 9,
    'k': 10,
    'l': 11,
    'm': 12,
    'n': 13,
    'o': 14,
    'p': 15,
    'q': 16,
    'r': 17,
    's': 18,
    't': 19,
    'u': 20,
    'v': 21,
    'w': 22,
    'x': 23,
    'y': 24,
    'z': 25
    };

function findGreatestCommonDivisor(a,b){
    // finds the greated common divisor or nums 'a' and 'b'
    if (a == 0){
        return b;
    } if (b == 0) {
        return a
        
    } else {
         let gcd = findGreatestCommonDivisor(b % a, a)
        return gcd  
    }
}
// TESTING - findGreatestCommonDivisor function 
// let text = findGreatestCommonDivisor(8,4)
// console.log(text) // should return 4

function linearCombination(a,b){
    if (a == 0){
        return [0, 1];
        }
    else if (b == 0){
        return [1, 0];
        } 
    else {
            var [xLotsOfB , xLotsOfA] = linearCombination(b % a, a);
            var calculation = xLotsOfA - Math.floor(b / a) * xLotsOfB;
            var gcd = findGreatestCommonDivisor(a,b);
            console.log(gcd + ' = (' + calculation + ' * ' + a +') + (' + b + ' * ' + xLotsOfB + ')') 
            return calculation, xLotsOfB
        }
    }

// TESTING - LinearCombination function
// let testingLinearCombination = linearCombination(2,4);
// console.log(testingLinearCombination)

function affineEncoder(a, b, num){
    /* encodes the provided num using the a*num + b formula (the num is being encoded) */
    /* assumes that the user only uses the 26 letters in the english alphabet */
    var gcd = findGreatestCommonDivisor(a, 26);
    if (gcd != 1){
        return 'The "a" provided will not work as gcd(' + a + ', 26) != 1'
    } else {
        var encoded = a * num + b;
        return encoded
    }
}

// TESTING - affineEncoder function
// let testingAffineEncoder = affineEncoder(3, 8, 5)
// console.log(testingAffineEncoder) 

// let testingAffineEncoderWhenGCDNotEqualOne = affineEncoder(18, 1, 5)
// console.log(testingAffineEncoderWhenGCDNotEqualOne)

function getNumFromLetter(letter){
    /* gets the numerical value for the letter provided */
    let letterToWorkOn = letter.toLowerCase();
    for (let key in alphabetMapping){
        if (letterToWorkOn == key){
            let numericalLetterValue = alphabetMapping[key]
            return numericalLetterValue
        }
    }
    return null
}

// TESTING - getNumfromLetter function 
// let testingGetNumFromLetterFunction = getNumFromLetter('a');
// console.log(testingGetNumFromLetterFunction)


function isValidLetter(value) {
    // Convert the value to lowercase and check if it's a single character in the range 'a' to 'z'
    return /^[a-zA-Z]$/.test(value);
}

function getLetterProvidedNum(providedNum){
    /*gets the corresponding letter from the provded num*/
    for (let key in alphabetMapping){
        if (providedNum == alphabetMapping[key]){
            let letterToReturn = key;
            return letterToReturn;
        }
    }
    return null
}

// TESTING - hetLetterProvdedNum function
// let testingGetLetterProvidedNum = getLetterProvidedNum(2)
// console.log(testingGetLetterProvidedNum)

function encodeSentance(plainText, a, b){
    /* encodes the provided sentance */
    let listOfLettersToEncode = [];
    let encodedString = 'q';
    for (let i = 0; i < plainText.length; i++){
        if (isValidLetter(plainText[i] == true)){
            let letterToPush = plainText[i].toLowerCase();
            listOfLettersToEncode.push(letterToPush)
        }
    }
    // let listOfLettersToEncodeLower = listOfLettersToEncode.toLowerCase();
    for (let i = 0; i < listOfLettersToEncode; i++){
        let numLetter = numericalLetterValue(listOfLettersToEncode[i])
        let encodedLetterValue = affineEncoder(a,b,numLetter)
        if (isinstance(encodedLetterValue, num) == true){
            encodedLetterValue = encodedLetterValue % 26;
            let encoderLetter;
        } 
        else {
            return 'Fail, this is becaise your choise of "a" does not have an inverse in modulo 26'  
        }
    // let returnStatement = encodedString.toUpperCase();
    return encodedString
    }
}


// TESTING - encodeSentance function 
// let stringToTest = 'Hello'
// let testingEncodeStringFUnction = encodeSentance(stringToTest, 3,5)
// console.log(testingEncodeStringFUnction)