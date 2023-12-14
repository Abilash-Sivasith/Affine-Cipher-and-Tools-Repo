"""Provided a secret text, the code can both decrpyt and encypt text"""

import doctest

ALPABET_MAPPING = {
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
}


def find_gcd(a,b):
    '''find the gcd of a and b '''
    if a == 0 :
        return b
    elif b == 0:
        return a
    else:
        gcd = find_gcd(b % a , a)
        return gcd
    
    
def linear_combinations(a,b, visualizer = False):
    '''finds the linear combination '''
    if a == 0 :
        return  0 , 1
    elif b  == 0 :
        return 1 , 0
    else:
        x_lots_of_b , x_lots_of_a = linear_combinations(b % a ,a)
        if visualizer is True:
            gcd = find_gcd(a,b)
            print(f'{gcd} = ({a} * {x_lots_of_a - (b // a) * x_lots_of_b}) + ({b} * {x_lots_of_b})')
        return (x_lots_of_a - (b // a) * x_lots_of_b ), x_lots_of_b
    
#linear_combinations(52,16, visualizer= True)


def affine_encoder(a,b,num):
    '''encodes the provided num using the a*num + b formula'''
    gcd = find_gcd(a,26)
    if gcd != 1:
        return 'The "a" provided will not work as gcd(a,26) != 1'
    else:
        encoded = a*num + b 
        return encoded
    
def get_key(letter):
    '''gets the numerical value for the letter provided'''
    for lett , num_lett in ALPABET_MAPPING.items():
        if letter == lett:
            return num_lett
        
def get_letter_provided_num(provided_num):
    '''gets the corresponsing letter from the provided num using the alaphbet mapping'''
    for lett , num_lett in ALPABET_MAPPING.items():
        if provided_num == num_lett:
            return lett
        
    return 'Something went wrong'

def encode_sentance(plain_text , a , b):
    '''encode the provided sentance
    >>> secret = 'Hello my name is Abilash Sivasith' 
    >>> encoded_text = encode_sentance(secret , 7 , 8)
    >>> print(encoded_text)
    F K H H C O U V I O K M E I P M H I E F E M Z I E M L F 
    >>> bad_choice_of_a = encode_sentance(secret , 6 , 8)
    >>> print(bad_choice_of_a)
    Fail , this is becasue your choice of "a" does not have a inverse in modula 26
    '''
    list_of_letters_to_encode = []
    encoded_string = ''
    for letter in plain_text.lower():
        if letter.isalnum():
            list_of_letters_to_encode.append(letter)
    for letters in list_of_letters_to_encode:
        numerical_letter_value = get_key(letters)
        encoded_letter_num = affine_encoder(a,b,numerical_letter_value)
        if isinstance(encoded_letter_num , int) == True:
            encoded_letter_num = encoded_letter_num % 26
            encoded_letter = get_letter_provided_num(encoded_letter_num)
            encoded_string += str(encoded_letter) + ' '
        else:
            return 'Fail , this is becasue your choice of "a" does not have a inverse in modula 26'
    return encoded_string.upper()

def text_decrypter(secret_text , a , b):
    '''decrpyts the provided text given a known "a" and "b". '''
    x_lots_of_a  , x_lots_of_b = linear_combinations(a,26)
    a_inverse = x_lots_of_a % 26
    list_of_letters_to_decode = []
    decoded_string = ''
    for letter in secret_text.lower():
        if letter.isalnum():
            list_of_letters_to_decode.append(letter)
    for letters in list_of_letters_to_decode:
        letter_to_encoded_num = get_key(letters)
        decoded_num  =( a_inverse * (letter_to_encoded_num - b)) % 26
        real_letter = get_letter_provided_num(decoded_num)
        decoded_string += str(real_letter) + ' '
    return decoded_string.upper()


doctest.testmod()
