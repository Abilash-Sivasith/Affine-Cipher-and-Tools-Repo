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
        gcd = findGreatestCommonDivisor(b % a, a)
        return gcd  
    }
}


// TESTING
let text = findGreatestCommonDivisor(8,4)
console.log(text) // should return 4