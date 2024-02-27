// // const express = require('express');
// // const nodemailer = require('nodemailer');
// // const multer = require('multer');
// // const fs = require('fs');

// // const app = express();
// // const port = 3000;

// // // Konfiguracja multera do obsługi załączonych plików
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, './uploads'); // Folder, do którego będą zapisywane pliki
// //   },
// //   filename: (req, file, cb) => {
// //     cb(null, file.originalname); // Nazwa pliku będzie taka sama jak oryginalna nazwa pliku
// //   }
// // });
// // const upload = multer({ storage: storage });

// // // Ustawienia dla transportera nodemailer
// // const transporter = nodemailer.createTransport({
// //   service: 'gmail',
// //   auth: {
// //     user: 'twoj@gmail.com', // Twoja poczta Gmail
// //     pass: 'TwojeHaslo' // Twoje hasło do konta Gmail
// //   }
// // });

// // // Obsługa żądania POST z formularza
// // app.post('/przetwarzaj-formularz', upload.any(), (req, res) => {
// //   const mailOptions = {
// //     from: 'twoj@gmail.com', // Twój adres e-mail
// //     to: 'kmieciklu@gmail.com', // Adres e-mail docelowy
// //     subject: 'Nowy formularz PIT',
// //     text: 'Załączniki z formularza PIT',
// //     attachments: req.files.map(file => ({
// //       filename: file.originalname,
// //       path: file.path
// //     }))
// //   };

// //   // Wysłanie e-maila z załącznikami
// //   transporter.sendMail(mailOptions, (error, info) => {
// //     if (error) {
// //       console.log(error);
// //       res.status(500).send('Wystąpił błąd podczas wysyłania e-maila.');
// //     } else {
// //       console.log('E-mail został wysłany: ' + info.response);
// //       res.send('E-mail został pomyślnie wysłany.');
// //     }
// //   });
// // });

// // // Serwer nasłuchujący na porcie 3000
// // app.listen(port, () => {
// //   console.log(`Serwer uruchomiony na http://localhost:${port}`);
// // });



// const express = require('express');
// const bodyParser = require('body-parser');
// const pdf = require('html-pdf');
// const fs = require('fs');

// const app = express();
// const port = 3000;

// // Parsowanie danych formularza
// app.use(bodyParser.urlencoded({ extended: true }));

// // Ścieżka do folderu, w którym będą zapisywane pliki PDF
// const pdfPath = './pdfs/';

// // Obsługa żądania POST z formularza
// app.post('/przetwarzaj-formularz', (req, res) => {
//   const formData = req.body;

//   // Tworzenie kodu HTML na podstawie danych z formularza
//   const htmlContent = `
//     <h1>Dane klienta do rozliczenia PIT w Polsce z uwzględnieniem dochodów z Norwegii</h1>
//     <!-- Wstaw tutaj resztę kodu HTML z formularza -->

//     <h2>Podsumowanie danych</h2>
//     <p>Imię: ${formData.p1}</p>
//     <p>Nazwisko: ${formData.p2}</p>
//     <!-- Dodaj tutaj pozostałe pola formularza -->
//   `;

//   // Generowanie pliku PDF
//   pdf.create(htmlContent).toFile(`${pdfPath}formularz.pdf`, (err, result) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Wystąpił błąd podczas generowania pliku PDF.');
//     } else {
//       console.log('Plik PDF został wygenerowany:', result.filename);
//       res.download(result.filename); // Pobieranie wygenerowanego pliku PDF
//     }
//   });
// });

// // Serwer nasłuchujący na porcie 3000
// app.listen(port, () => {
//   console.log(`Serwer uruchomiony na http://localhost:${port}`);
// });


// //////////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', function() {
//     // Obsługa kliknięcia przycisku "Generuj PDF"
//     document.getElementById('generatePdfBtn').addEventListener('click', function() {
//       const formData = new FormData(document.getElementById('contactForm'));

//       // Konwertowanie obiektu FormData do obiektu JSON
//       const jsonData = {};
//       formData.forEach((value, key) => {
//         jsonData[key] = value;
//       });

//       // Wysłanie danych formularza do serwera w formacie JSON
//       fetch('/przetwarzaj-formularz', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(jsonData)
//       })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Wystąpił błąd podczas generowania pliku PDF.');
//         }
//         return response.blob();
//       })
//       .then(blob => {
//         // Tworzenie linku do pobrania pliku PDF
//         const url = window.URL.createObjectURL(blob);
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = 'formularz.pdf';
//         document.body.appendChild(a);
//         a.click();
//         window.URL.revokeObjectURL(url);
//       })
//       .catch(error => {
//         console.error('Błąd:', error);
//         alert('Wystąpił błąd podczas generowania pliku PDF.');
//       });
//     });
//   });


   // Inicjalizacja EmailJS
//    (function(){
//     emailjs.init("kmieciklu@gmail.com"); // Zastąp YOUR_USER_ID swoim identyfikatorem użytkownika z EmailJS
// })();

// // Funkcja do generowania pliku PDF i wysyłania e-maila
// function saveAndSendForm() {
//     // Pobierz dane z formularza
//     var formData = new FormData(document.getElementById("contactForm"));
//     var data = {};
//     formData.forEach((value, key) => {data[key] = value});
//     var json = JSON.stringify(data);

//     // Wygeneruj plik PDF na podstawie danych z formularza
//     var pdf = new jsPDF();
//     pdf.text(json, 10, 10); // Przykładowe dodanie danych do pliku PDF

//     // Wyślij e-mail z załącznikiem (plikiem PDF)
//     var emailParams = {
//         to_email: "kmieciklu@gmail.com", // Zastąp TO_EMAIL_ADDRESS adresem e-mail odbiorcy
//         from_name: "test ankiety", // Zastąp FROM_NAME swoim imieniem lub nazwą
//         message: "Wiadomość zawierająca formularz w załączniku",
//         attachment: pdf.output('datauristring') // Dodaj plik PDF jako załącznik
//     };

//     // Wyślij e-mail za pomocą EmailJS
//     emailjs.send("service_45xdq8o", "template_5b6m9i5", emailParams) // Zastąp YOUR_SERVICE_ID i YOUR_TEMPLATE_ID odpowiednimi identyfikatorami z EmailJS
//         .then(function(response) {
//             console.log('E-mail został wysłany!', response);
//         }, function(error) {
//             console.log('Błąd podczas wysyłania e-maila:', error);
//         });
// }

/////////////////////////////////////////////////////////
function saveAndSendForm() {
    // Pobierz formularz
    var form = document.getElementById('contactForm');
    
    // Stwórz obiekt FormData z danymi formularza
    var formData = new FormData(form);
    
    // Wygeneruj PDF
    generatePDF(formData);
    
    // Wysyłanie e-maila z danymi formularza
    sendEmail(formData);
  }
  
  function generatePDF(formData) {
    // Stwórz nowy dokument PDF
    var doc = new jsPDF();
    
    // Pobierz dane z formularza
    formData.forEach(function(value, key) {
      doc.text(20, 10, key + ': ' + value);
    });
    
    // Zapisz dokument PDF
    doc.save('formularz.pdf');
  }
  
  function sendEmail(formData) {
    // Dane do wysłania e-maila za pomocą EmailJS
    var service_id = 'service_45xdq8o';
    var template_id = 'template_5b6m9i5';
    var user_id = 'kmieciklu@gmail.com'; // Opcjonalnie, jeśli korzystasz z user_id
    
    // Wysłanie e-maila za pomocą EmailJS
    emailjs.send(service_id, template_id, formData, user_id)
      .then(function(response) {
        console.log('E-mail został wysłany:', response);
      }, function(error) {
        console.log('Błąd podczas wysyłania e-maila:', error);
      });
  }