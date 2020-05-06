

function racunaj() {
    var prvaCifra = document.getElementById("prviBroj").value;
    var drugaCifra = document.getElementById("drugiBroj").value;

    var digitron = document.getElementById("digitron");
    var operacija = digitron.options[digitron.selectedIndex].value;  
    

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
    document.getElementById("rezultat").innerHTML = rezultat(prvaCifra, drugaCifra);
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



   