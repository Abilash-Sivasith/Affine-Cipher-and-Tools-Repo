/*
Function that take a given encoded test and counts letter frequency. 
With the knowlege of the most common frequency an affine cipher can be easily decrypted.

Written By: Abilash Sivasith
*/


function findLetterFreqeuncy(text){
    // finds the frequency of letters
    let letterCountDict = {};

    for (let i = 0; i < text.length;i++) {
        let letter = text[i].toLowerCase();
        if (letter != ' '){
            if (!(letter in letterCountDict)){
                letterCountDict[letter] = 1;
            } else {
                letterCountDict[letter]++;
            }
        }
    }
    return letterCountDict
}


let exampleText = 'Hello world'
let test1 = ''
test1 = findLetterFreqeuncy(exampleText)
console.log(test1)