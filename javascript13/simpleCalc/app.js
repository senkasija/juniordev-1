
//funkcija koja određuje šta će da se desi kada se aktivira dugme
function racunaj() {
    //deponuje vrednosti polja za broj
    var prvaCifra = Number( document.getElementById("prviBroj").value);
    var drugaCifra = Number(document.getElementById("drugiBroj").value);
    //deponuje vrednosti računske operacije iz objekta select
    var digitron = document.getElementById("digitron");
    var operacija = digitron.options[digitron.selectedIndex].value;  
    
    //funkcija koja izvršava operacije i vraća vrednost operacije
    function rezultat(x, y){
       
        if (operacija == "plus") 
        {
            var ovodaseUpise = x + y;
           // var plus = ovodaseUpise; 
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
  /*  
    console.log(igra);
    console.log(igra++);
    console.log(++igra);
    console.log(++igra);
    console.log(typeof igra);
    console.log(!igra);
    console.log(delete igra);
  */
}

/*var x = 1;
var y = 2;
var z = 3;

console.log(x++);
console.log(++y);

console.log(x==y);*/

/*i=1;
while((i%7) !=0 && i%3!=0 && i>20 && i<30){
    console.log(i);
    i++;
    //for petlja brojačkog tipa, primer, kako radi, primer
}


console.log("i: "+ i);
console.log("i++: "+ i++);
console.log("i: "+ i);
console.log("++i: "+ ++i);
console.log("i: "+ i);
console.log("--i: "+ --i);
console.log("i: "+ i);
//var y = i;
console.log("i--: "+ i--);
console.log("y: " + i);

if (i && y){
    console.log("true and false is false");
}
if (i || y){
    console.log("true ili false is true");
}*/





   