<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Dane klienta
    $imie = $_POST['p1'];
    $nazwisko = $_POST['p2'];
    $telefon = $_POST['p3'];
    $email = $_POST['p4'];
    $pesel = $_POST['p5'];
    // Adres zamieszkania
    $ulica_zamieszkania = $_POST['p6-ulica-zamieszkania'];
    $kod_zamieszkania = $_POST['p6-kod-zamieszkania'];
    $kraj_zamieszkania = $_POST['p6-kraj-zamieszkania'];
    // Adres Urzędu Skarbowego
    $urzad_skarbowy = $_POST['p7'];
    $ulica_us = $_POST['p7-ulica-us'];
    $kod_us = $_POST['p7-kod-us'];
    $kraj_us = $_POST['p7-kraj-us'];
    // Inne dane
    $nip = $_POST['p9'];
    $forma_opodatkowania = $_POST['p10-opcje'];
    $forma_opodatkowania_dodatkowa = $_POST['p10a-opcje'];
    $rozliczenie_zwiazku = $_POST['p11-opcje'];
    // Jeśli klient chce się rozliczyć z małżonkiem
    if ($rozliczenie_zwiazku == "tak") {
        $imie_malzonka = $_POST['p12'];
        $pesel_malzonka = $_POST['p13'];
        $adres_malzonka = $_POST['p14-ulica-zamieszkania'] . ', ' . $_POST['p14-kod-zamieszkania'] . ', ' . $_POST['p14-kraj-zamieszkania'];
        $dochody_malzonka = $_POST['p15-opcje'];
    }
    
    // Obsługa przesłanych plików
    $plik1 = $_FILES['plik1']['tmp_name'];
    $plik2 = $_FILES['plik2']['tmp_name'];

    // Tworzenie treści maila
    $to = "kmieciklu@gmail.com";
    $subject = "Formularz PIT - Dane klienta: $imie $nazwisko";
    $message = "
    Imię: $imie
    Nazwisko: $nazwisko
    Telefon: $telefon
    Email: $email
    PESEL: $pesel
    Adres zamieszkania: $ulica_zamieszkania, $kod_zamieszkania, $kraj_zamieszkania
    Adres Urzędu Skarbowego: $urzad_skarbowy, $ulica_us, $kod_us, $kraj_us
    NIP: $nip
    Forma opodatkowania: $forma_opodatkowania
    Dodatkowa forma opodatkowania: $forma_opodatkowania_dodatkowa
    Rozliczenie z małżonkiem: $rozliczenie_zwiazku
    ";
    // Jeśli klient chce się rozliczyć z małżonkiem
    if ($rozliczenie_zwiazku == "tak") {
        $message .= "
        Imię małżonka: $imie_malzonka
        PESEL małżonka: $pesel_malzonka
        Adres małżonka: $adres_malzonka
        Dochody małżonka: $dochody_malzonka
        ";
    }

    // Tworzenie wiadomości e-mail
    $boundary = md5("random");

    // Nagłówki e-maila
    $headers = "From: $email" . "\r\n" .
        "Reply-To: $email" . "\r\n" .
        "MIME-Version: 1.0\r\n" .
        "Content-Type: multipart/mixed; boundary = $boundary\r\n";

    // Treść e-maila
    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= chunk_split(base64_encode($message));
    $body .= "--$boundary\r\n";

    // Dołączanie załączników
    $file1 = file_get_contents($plik1);
    $file2 = file_get_contents($plik2);

    // Załącznik 1
    $body .= "Content-Type: application/octet-stream; name=\"" . basename($plik1) . "\"\r\n";
    $body .= "Content-Disposition: attachment; filename=\"" . basename($plik1) . "\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n";
    $body .= "\r\n" . chunk_split(base64_encode($file1)) . "\r\n";
    $body .= "--$boundary\r\n";

    // Załącznik 2
    $body .= "Content-Type: application/octet-stream; name=\"" . basename($plik2) . "\"\r\n";
    $body .= "Content-Disposition: attachment; filename=\"" . basename($plik2) . "\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n";
    $body .= "\r\n" . chunk_split(base64_encode($file2)) . "\r\n";
    $body .= "--$boundary--\r\n";

    // Wysyłanie maila
    if (mail($to, $subject, $body, $headers)) {
        echo "Wiadomość została wysłana pomyślnie!";
    } else {
        echo "Wystąpił błąd podczas wysyłania wiadomości.";
    }
}

?>
