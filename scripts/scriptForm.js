
//ukrywanie pytania 
document.addEventListener('DOMContentLoaded', function () {

  var selectElement1 = document.getElementById('p8-opcje');
  var divElement1 = document.querySelector('.divp9');

  function toggleDivVisibility1() {
      if (selectElement1.value === 'p8-opcja1') {
          divElement1.style.display = '';
      } else {
          divElement1.style.display = 'none';
      }
  }

  selectElement1.addEventListener('change', toggleDivVisibility1);
  toggleDivVisibility1();


///////////////////////////////////////////////////
   var selectElement2 = document.getElementById('p11-opcje');
   var divElement2 = document.querySelector('.divp11');
 
   function toggleDivVisibility2() {
       if (selectElement2.value === 'p11-opcja1') {
           divElement2.style.display = '';
       } else {
           divElement2.style.display = 'none';
       }
   }
 
   selectElement2.addEventListener('change', toggleDivVisibility2);
   toggleDivVisibility2();


////////////////////////////////////////////////////////////////
var selectElement3 = document.getElementById('p17-opcje');
var divElement3 = document.querySelector('.divp17');
 
function toggleDivVisibility3() {
    if (selectElement3.value === 'p17-opcja2') {
        divElement3.style.display = '';
    } else {         
      divElement3.style.display = 'none';
    }
}
 
   selectElement3.addEventListener('change', toggleDivVisibility3);
   toggleDivVisibility3();


////////////////////////////////////////////////////////////////
var selectElement4 = document.getElementById('p16-opcje');
var divElement4 = document.querySelector('.divp16');
 
function toggleDivVisibility4() {
    if (selectElement4.value === 'p16-opcja2') {
        divElement4.style.display = '';
    } else {
        divElement4.style.display = 'none';
    }
}
 
selectElement4.addEventListener('change', toggleDivVisibility4);
toggleDivVisibility4();


////////////////////////////////////////////////////////////////
var selectElement5 = document.getElementById('p10-opcje');
var divElement5 = document.querySelector('.divp10');
    
function toggleDivVisibility5() {
    if (selectElement5.value === 'p10-opcja1') {
        divElement5.style.display = '';
    } else {
        divElement5.style.display = 'none';
    }
}
    
selectElement5.addEventListener('change', toggleDivVisibility5);
toggleDivVisibility5();

///////////////////////////////////////////////////////////////////


var selectElement6 = document.getElementById('p10-opcje');
var divElement6 = document.querySelector('.div7');
var selectElement6p = document.querySelector('.divPlik10');
var selectElement6d = document.querySelector('.divp11');
    
function toggleDivVisibility6() {
    if (selectElement6.value === 'p10-opcja2') {
        divElement6.style.display = 'block';
        selectElement6p.style.display = 'none';
        selectElement6d.style.display = 'none';
    } else {
        divElement6.style.display = '';
        selectElement6p.style.display = '';
        
    }
}
    
selectElement6.addEventListener('change', toggleDivVisibility6);
toggleDivVisibility6();



///////////////////////////////////////////////////////////////////
var selectElement7 = document.getElementById('p10a-opcje');
var divElement7 = document.querySelector('.div7');//Brak możliwości rozliczenia się ze współmałżonkiem
var selectElement7p = document.querySelector('.divPlik10');//plik
var selectElement7d = document.querySelector('.divp11');//ukryj do 11
    
function toggleDivVisibility7() {
    if (selectElement7.value === 'p10a-opcja2') {//linjowy
        divElement7.style.display = 'block';
        selectElement7p.style.display = 'none';
        selectElement7d.style.display = 'none';
    } else if (selectElement7.value === 'p10a-opcja1'){//skala
        divElement7.style.display = '';
        selectElement7p.style.display = 'block';
        selectElement7d.style.display = 'block';
    } else{//puste
        divElement7.style.display = 'none';
        selectElement7p.style.display = 'none';
        selectElement7d.style.display = 'none';
    }
}
    
selectElement7.addEventListener('change', toggleDivVisibility7);
toggleDivVisibility7();


////////////////////////////////////////////////////////////////
var selectElement8 = document.getElementById('p14-opcje');
var divElement8 = document.querySelector('.divp14');
    
function toggleDivVisibility8() {
    if (selectElement8.value === 'p14-opcja1') {//tak
        divElement8.style.display = 'block';
    } else {
        divElement8.style.display = 'none';
    }
}
    
selectElement8.addEventListener('change', toggleDivVisibility8);
toggleDivVisibility8();



////////////////////////////////////////////////////////////////
var selectElement9 = document.getElementById('p15-opcje');
var divElement9 = document.querySelector('.divp15');
    
function toggleDivVisibility9() {
    if (selectElement9.value === 'p15-opcja2') {//tak
        divElement9.style.display = 'block';
    } else {
        divElement9.style.display = 'none';
    }
}
    
selectElement9.addEventListener('change', toggleDivVisibility9);
toggleDivVisibility9();




});
