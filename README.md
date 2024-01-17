# caesar-cipher

# Character Encryption Module

## Description

This module provides a function for encrypting individual characters using a simple character-shifting algorithm. It only encrypts letters, leaving other characters unchanged.

## Functions

### getAsciCode(char)

- Purpose: Returns the ASCII code of the input character.
- Parameters:

  - `char`: The character to get the ASCII code for.

- Return value: The ASCII code of the character.

### IsAlphaChar(char)

- Purpose:Checks if the input character is an alphabetic character (A-Z or a-z).
- Parameters:

  - `char`: The character to check.

- Return value: `true` if the character is an alphabet, `false` otherwise.

### swap(charCode)

- Purpose: Shifts the ASCII code of an alphabetic character by 4 positions, wrapping around if necessary.
- Parameters:

  - `charCode`: The ASCII code of the character to shift.

- Return value: The shifted ASCII code.

### isLowerCase(char)

- Purpose: Checks if the input character is a lowercase letter.
- Parameters:

  - `char`: The character to check.

- Return value: `true` if the character is lowercase, `false` otherwise.

### asciToChar(char)

- Purpose: Converts an ASCII code back to its corresponding character.
- Parameters:

  - `char`: The ASCII code to convert.

- Return value: The corresponding character.

### encrypt(char)

- Purpose:Encrypts a single character using the character-shifting algorithm.
- Parameters:

  - `char`: The character to encrypt.

- Return value: The encrypted character.

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

- The encryption algorithm is relatively simple and can be easily broken. It is not intended for secure encryption purposes.
- The module only handles single characters. To encrypt entire strings, you'll need to iterate over each character and apply the `encrypt` function.

# CeaserCipher as A Class

## Description

This class implements a simple Caesar cipher for encrypting text. It shifts each letter in the text by a fixed number of positions in the alphabet, wrapping around at the end.

## Usage

1.  **Import the class:**

```
const { CeaserCipher } = require("./path/to/CeaserCipher");
```

2.  **Import the class**:

```
const { CeaserCipher } = require("./path/to/CeaserCipher");

```

3.  **Create an instance**:

```
const cipher = new CeaserCipher(inputPath, outputPath);

```

- `inputPath` (optional): The path to the file containing the text to encrypt. If not provided, input will be taken later.
- `outputPath` (optional): The path to the file where the encrypted text will be written. If not provided, output will not be written to a file.

4.  **Encrypt text ( if inputPath not provided)**:

```
const encryptedText = cipher.encryptText(textToEncrypt);

```

5.  **Write encrypted text to file (if outputPath provided):**

```
cipher.writeEncryptedTextToFile();

```

## Methods

- **constructor(inputPath, outputPath)**: Initializes the cipher with optional input and output file paths.
- **encryptText(text)**: Encrypts the given text and returns the encrypted text.
- **writeEncryptedTextToFile()**: Writes the encrypted text to the specified output file.

## Class Methods

- **getAsciCode(char)**: Returns the ASCII code of a character.
- **IsAlphaChar(char)**: Checks if a character is an alphabet character.
- **swap(charCode)**: Shifts an ASCII code by the encryption shift value, wrapping around at the end of the alphabet.
- **isLowerCase(char)**: Checks if a character is lowercase.
- **asciToChar(char)**: Converts an ASCII code back to a character.
- **readFilec()**: Reads the input file and stores the text in the `data` property.
- **writeFileEncrypted()**: Encrypts the data and writes it to the output file.

## Example

JavaScript

```
const cipher = new CeaserCipher("input.txt", "output.txt");
// Text is automatically read and encrypted from input.txt to output.txt

```

## Notes

- The default encryption shift is 4 positions.
- This class is intended for educational purposes and is not suitable for secure encryption.
