document.getElementById("addressForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var street = document.getElementById("street").value;
  var postalCode = document.getElementById("postalCode").value;
  var country = document.getElementById("country").value;
  
  // Sprawdzenie poprawności adresu za pomocą wyrażeń regularnych
  var streetRegex = /^[a-zA-Z\s\d]+$/;
  var postalCodeRegex = /^\d{2}-\d{3}$/;
  var countryRegex = /^[a-zA-Z\s]+$/;
  
  if (!streetRegex.test(street)) {
    alert("Nieprawidłowa ulica i numer domu.");
    return;
  }
  
  if (!postalCodeRegex.test(postalCode)) {
    alert("Nieprawidłowy kod pocztowy i miejscowość.");
    return;
  }
  
  if (!countryRegex.test(country)) {
    alert("Nieprawidłowy kraj.");
    return;
  }
  
  alert("Adres jest poprawny.");
});
  