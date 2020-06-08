
function izracunaj(){

    var ucenik = document.getElementById("ucenik").value;

    var pravopis = Number(document.getElementById("pravopis").value);
    var gramatika = Number(document.getElementById("gramatika").value);
    var stil = Number(document.getElementById("stil").value);
    var kompozicija = Number(document.getElementById("kompozicija").value);
    var tema = Number(document.getElementById("tema").value);
    var zbir = pravopis + gramatika + stil + kompozicija + tema;
    var ukupnoBodova = Number(document.getElementById("ukupno").value);

        function izracunajOcenu(){

        var p = (100*zbir)/ukupnoBodova;
        p = Math.round(p * 100) / 100;
        p = p.toFixed(0);
        //console.log(p);

        if(p >= 41 && p <= 55){
            var p = 2;
        } else if (p >= 56 && p <= 70){
            var p = 3;
        } else if (p >= 71 && p <= 85){
            var p = 4;
        } else if (p >= 86 && p <= 100){
            var p = 5;
        } else {
            if(p === 0) {
                alert ("Označite prvo rezultate!");
                return;
            }
            var ocena = 1; 
        }
        var datum = new Date(); 
        document.getElementById("bodovi").innerHTML = zbir;
        document.getElementById("ime").innerHTML = ucenik;
        document.getElementById("ocena").innerHTML = p;
        document.getElementById("datum").innerHTML = datum.toUTCString();

    }
    izracunajOcenu();
    
}


 //click to call function
 document.getElementById("calculate").onclick = function() {
    izracunaj();
  
  };