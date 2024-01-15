const fs = require("fs");
class CeaserCipher {
  constructor(inputPath = null, outputPath = null) {
    this.inputPath = inputPath;
    this.outputPath = outputPath;
    this.data = "";
    if (this.inputPath != null) {
      this.readFilec();
      this.writeFileEncrypted();
    }
  }

  getAsciCode = (char) => {
    return char.charCodeAt(0);
  };

  IsAlphaChar = (char) => {
    return (char >= 65 && char <= 90) || (char >= 97 && char <= 122);
  };

  swap = (charCode) => {
    if (charCode >= 97 && charCode < 119) {
      return charCode + 4;
    } else {
      return 97 + (4 - (123 - charCode));
    }
  };

  isLowerCase = (char) => {
    return char.toLowerCase() == char;
  };

  asciToChar = (char) => {
    return String.fromCharCode(char);
  };

  encrypt = (char) => {
    let getAsci = this.getAsciCode(char);
    if (this.IsAlphaChar(getAsci)) {
      let newCharAsciCode = this.asciToChar(
        this.swap(this.getAsciCode(char.toLowerCase()))
      );
      return this.isLowerCase(char)
        ? newCharAsciCode
        : newCharAsciCode.toUpperCase();
    } else {
      return char;
    }
  };

  readFilec() {
    try {
      this.data = fs.readFileSync(this.inputPath, "utf-8");
    } catch (err) {
      console.error(err);
    }
  }

  writeFileEncrypted() {
    let data = "";
    for (let i of this.data) {
      data += this.encrypt(i);
    }
    fs.writeFileSync(this.outputPath, data, { flag: "a" }, (err) => {
      if (err) {
        return console.error(err);
      }
    });
  }
}

module.exports = {
  CeaserCipher,
};
