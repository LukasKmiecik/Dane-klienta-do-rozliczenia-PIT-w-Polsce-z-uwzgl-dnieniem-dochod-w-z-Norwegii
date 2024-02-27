var checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        var id = this.id.replace('p18-opcja', ''); // Pobierz numer opcji
        var ukrytyDiv = document.getElementById('ukrytyDiv' + id);
        if (this.checked) {
            ukrytyDiv.style.display = 'block';
        } else {
            ukrytyDiv.style.display = 'none';
        }
    });
});


///////////////////////////////////////////////////////////// dzieci
var ankietaDiv = document.getElementById('ukrytyDiv1');
var dodajDzieckoBtn = document.getElementById('dodajDzieckoBtn');
var numerDziecka = 1;

dodajDzieckoBtn.addEventListener('click', function() {
    numerDziecka++;
    var noweDzieckoDiv = document.createElement('div');
    noweDzieckoDiv.id = 'dziecko' + numerDziecka;

    noweDzieckoDiv.innerHTML = '<label for="imie' + numerDziecka + '">Imię:</label>' +
                                '<input type="text" id="imie' + numerDziecka + '" name="imie' + numerDziecka + '" required><br>' +
                                '<label for="dataUrodzenia' + numerDziecka + '">Data urodzenia:</label>' +
                                '<input type="date" id="dataUrodzenia' + numerDziecka + '" name="dataUrodzenia' + numerDziecka + '" required><br>' +
                                '<label for="pesel' + numerDziecka + '">PESEL:</label>' +
                                '<input type="text" id="pesel' + numerDziecka + '" name="pesel' + numerDziecka + '" required><br>';
    
    ankietaDiv.insertBefore(noweDzieckoDiv, dodajDzieckoBtn);
});


////////////////////////////////////////////////////////////// darowizny
var darowiznyDiv = document.getElementById('ukrytyDiv6');
var dodajDarowizneBtn = document.getElementById('dodajDarowizneBtn');
var numerDarowizny = 1;

dodajDarowizneBtn.addEventListener('click', function() {
    numerDarowizny++;
    var nowaDarowiznaDiv = document.createElement('div');
    nowaDarowiznaDiv.id = 'darowizna' + numerDarowizny;

    nowaDarowiznaDiv.innerHTML = '<label for="potwierdzenieDarowizny' + numerDarowizny + '">Załącz potwierdzenie darowizny:</label>' +
                                  '<br>' +
                                  '<input type="file" id="potwierdzenieDarowizny' + numerDarowizny + '" name="potwierdzenieDarowizny' + numerDarowizny + '">' +
                                  '<br>' +
                                  '<label for="nazwaOrganizacji' + numerDarowizny + '">Nazwa organizacji:</label>' +
                                  '<br>' +
                                  '<input type="text" id="nazwaOrganizacji' + numerDarowizny + '" name="nazwaOrganizacji' + numerDarowizny + '">' +
                                  '<br>' +
                                  '<label for="adresOrganizacji' + numerDarowizny + '">Adres organizacji:</label>' +
                                  '<br>' +
                                  '<input type="text" id="adresOrganizacji' + numerDarowizny + '" name="adresOrganizacji' + numerDarowizny + '">';

    darowiznyDiv.insertBefore(nowaDarowiznaDiv, dodajDarowizneBtn);
});