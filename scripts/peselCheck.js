function validatePESEL(pesel) {
    if (!/^\d{11}$/.test(pesel)) {
      return false;
    }
  
    var weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    var sum = 0;
    for (var i = 0; i < 10; i++) {
      sum += parseInt(pesel.charAt(i)) * weights[i];
    }
  
    var checksum = (10 - (sum % 10)) % 10;
    var lastDigit = parseInt(pesel.charAt(10));
  
    return checksum === lastDigit;
  }
  
  document.getElementById("p5").addEventListener("input", function() {
    var pesel = this.value;
    var isValid = validatePESEL(pesel);
    if (isValid) {
      console.log("Numer PESEL jest poprawny.");
      // Tutaj możesz dodać kod reakcji na poprawny numer PESEL
    } else {
      console.log("Numer PESEL jest niepoprawny.");
      // Tutaj możesz dodać kod reakcji na niepoprawny numer PESEL
    }
  });