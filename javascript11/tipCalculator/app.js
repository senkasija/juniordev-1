//Calculate Tip
function calculateTip() {
    var grupnaOcena = document.getElementById("grupnaOcena").value; //iznos računa
    var ocenaAktivnosti = document.getElementById("ocenaAktivnosti").value; 
    //selekcija zadovoljstva izražena u procentima
    var brojUcenika = Number(document.getElementById("brojUcenika").value);
    //broj ljudi na koje će se deliti napojnica
  
    //validate input
    if (grupnaOcena === "" || ocenaAktivnosti == 0) {
      alert("Please enter values");
      return;//gde se vraža vrednost? na početak koda?
    }
    //Check to see if this input is empty or less than or equal to 1
    if (brojUcenika === "" || brojUcenika <= 1) {
      brojUcenika = 1;
      document.getElementById("each").style.display = "none";
      //ako je prazan broj ljudi ili samo jedan, ne pojavljuje se tekst EACH
    } else {
      document.getElementById("each").style.display = "block";
      //ako nije prazan pojavljuje se i to u bloku, tj ispod drugog teksta
    }
  
    //Calculate tip
    var total = grupnaOcena * brojUcenika;
    var aktivnost = ocenaAktivnosti*brojUcenika;
    var total = Math.round((total + aktivnost)/brojUcenika);
    console.log(aktivnost);
   
    //next line allows us to always have two digits after decimal point
    //ali i on zaokružuje na drugu decimalu
    total = total.toFixed(0);
    console.log(total);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  
  }
  
  //Hide the tip amount on load
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  
  //click to call function
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };