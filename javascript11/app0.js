//Calculate Tip
function calculateTip() {
    var billAmt = document.getElementById("billamt").value; //iznos računa
    var serviceQual = document.getElementById("serviceQual").value; 
    //selekcija zadovoljstva izražena u procentima
    var numOfPeople = document.getElementById("peopleamt").value;
    //broj ljudi na koje će se deliti napojnica
  
    //validate input
    if (billAmt === "" || serviceQual == 0) {
      alert("Please enter values");
      return;//gde se vraža vrednost? na početak koda?
    }
    //Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
      numOfPeople = 1;
      document.getElementById("each").style.display = "none";
      //ako je prazan broj ljudi ili samo jedan, ne pojavljuje se tekst EACH
    } else {
      document.getElementById("each").style.display = "block";
      //ako nije prazan pojavljuje se i to u bloku, tj ispod drugog teksta
    }
  
    //Calculate tip
    var total = (billAmt * serviceQual) / numOfPeople;
    console.log(total);
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    console.log(total);
    //next line allows us to always have two digits after decimal point
    //ali i on zaokružuje na drugu decimalu
    total = total.toFixed(2);
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