# caesar-cipher

# Character Encryption Module

## Description

This module provides a function for encrypting individual characters using a simple character-shifting algorithm. It only encrypts letters, leaving other characters unchanged.

## Functions

### getAsciCode(char)

-   Purpose: Returns the ASCII code of the input character.
-   Parameters:
    
    -   `char`: The character to get the ASCII code for.
    
-   Return value: The ASCII code of the character.

### IsAlphaChar(char)

-   Purpose:Checks if the input character is an alphabetic character (A-Z or a-z).
-   Parameters:
    
    -   `char`: The character to check.
    
-   Return value:  `true` if the character is an alphabet,  `false` otherwise.

### swap(charCode)

-   Purpose: Shifts the ASCII code of an alphabetic character by 4 positions, wrapping around if necessary.
-   Parameters:
    
    -   `charCode`: The ASCII code of the character to shift.
    
-   Return value: The shifted ASCII code.

### isLowerCase(char)

-   Purpose: Checks if the input character is a lowercase letter.
-   Parameters:
    
    -   `char`: The character to check.
    
-   Return value:  `true` if the character is lowercase,  `false` otherwise.

### asciToChar(char)

-   Purpose: Converts an ASCII code back to its corresponding character.
-   Parameters:
    
    -   `char`: The ASCII code to convert.
    
-   Return value: The corresponding character.

### encrypt(char)

-   Purpose:Encrypts a single character using the character-shifting algorithm.
-   Parameters:
    
    -   `char`: The character to encrypt.
    
-   Return value: The encrypted character.

## Usage

2.  Import the module:

JavaScript

```
const encryption = require('./encryptionModule');



3.  Use the `encrypt` function to encrypt characters:

JavaScript

```
const encryptedChar = encryption.encrypt('a'); // Returns 'e'


# Additional Notes

-   The encryption algorithm is relatively simple and can be easily broken. It is not intended for secure encryption purposes.
-   The module only handles single characters. To encrypt entire strings, you'll need to iterate over each character and apply the `encrypt` function.