
//funkcija koja određuje šta će da se desi kada se aktivira dugme
function racunaj() {
    //deponuje vrednosti polja za broj
    var prvaCifra = document.getElementById("prviBroj").value;
    var drugaCifra = document.getElementById("drugiBroj").value;
    //deponuje vrednosti računske operacije iz objekta select
    var digitron = document.getElementById("digitron");
    var operacija = digitron.options[digitron.selectedIndex].value;  
    
    //funkcija koja izvršava operacije i vraća vrednost operacije
    function rezultat(x, y){
       
        if (operacija == "plus") 
        {
            var ovodaseUpise = Number(x) + Number(y);
            var plus = ovodaseUpise; 
        } 
        else if (operacija == "minus")
        {
             var ovodaseUpise = x - y;
        } 
        else if (operacija == "puta")
        {
             var ovodaseUpise = x * y;
        } else 
        {
             var ovodaseUpise = x / y;
        }
        return ovodaseUpise;
    }
    //pozivanje funkcije za izvršavanje operacije 
    document.getElementById("rezultat").innerHTML = rezultat(prvaCifra, drugaCifra);
    //varijabla koja deponuje vrednost rezultata
    var igra = document.getElementById("rezultat").value;
    
    /*------------------------------ OPERATORI --------------------------------*/
    
    console.log(igra);
    console.log(igra++);
    console.log(++igra);
    console.log(++igra);
    console.log(typeof igra);
    console.log(!igra);
    console.log(delete igra);
  
}

var i = 0;
console.log("i: "+ i);
console.log("i++: "+ i++);
console.log("i: "+ i);
console.log("++i: "+ ++i);
console.log("i: "+ i);
console.log("--i: "+ --i);
console.log("i: "+ i);
var y = i;
console.log("i--: "+ i--);
console.log("y: " + i);

if (i && y){
    console.log("true and false is false");
}
if (i || y){
    console.log("true ili false is true");
}





   