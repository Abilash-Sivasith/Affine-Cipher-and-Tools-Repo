"""
Function that take a given encoded test and counts letter frequency. 
With the knowlege of the most common frequency an affine cipher can be easily decrypted.


"""

def find_letter_frequency(text):
    """finds the frequency of letters"""
    count_of_letter = dict()
    for letter in text.strip():
        if letter != ' ':
            if letter not in count_of_letter:
                count_of_letter[letter] = 1
            else:
                count_of_letter[letter] += 1
    sorted_letter_frequency = sorted(count_of_letter.items(), key=lambda x:x[1], reverse= True)
    return sorted_letter_frequency


text_string = 'Y F X M P C E S P Z C J T D F D P Q F W Q Z C P Y N T A S P C T Y R X P D D L R P D'
print(find_letter_frequency(text_string))
