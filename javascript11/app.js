
function izracunaj(){

    var ucenik = document.getElementById("ucenik").value;

    var pravopis = Number(document.getElementById("pravopis").value);
    var gramatika = Number(document.getElementById("gramatika").value);
    var stil = Number(document.getElementById("stil").value);
    var kompozicija = Number(document.getElementById("kompozicija").value);
    var tema = Number(document.getElementById("tema").value);
    var zbir = pravopis + gramatika + stil + kompozicija + tema;

        function izracunajOcenu(){


        var ocena = (zbir * 100)/100;
        if(ocena >= 41 && ocena <= 55){
            var ocena = 2;
        } else if (ocena >= 56 && ocena <= 70){
            var ocena = 3;
        } else if (ocena >= 71 && ocena <= 85){
            var ocena = 4;
        } else if (ocena >= 86 && ocena <= 100){
            var ocena = 5;
        } else {
            if(ocena === 0) {
                alert ("Označite prvo rezultate!");
                return;
            }
            var ocena = 1; 
        }
        var datum = new Date();
        var vreme = 
        document.getElementById("bodovi").innerHTML = zbir;
        document.getElementById("ime").innerHTML = ucenik;
        document.getElementById("ocena").innerHTML = ocena;
        document.getElementById("datum").innerHTML = datum;

    }
    izracunajOcenu();
    
}


 //click to call function
 document.getElementById("calculate").onclick = function() {
    izracunaj();
  
  };