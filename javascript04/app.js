

function promeniBoju(){

 var boje = document.getElementById("mojaLista");

 var izabranaBoja = boje.options[boje.selectedIndex].value;

console.log( typeof boje.options);
 
 if (izabranaBoja == "1") {
        document.getElementById("kocka").style.backgroundColor = "red";
    } else if (izabranaBoja == "2") {
        document.getElementById("kocka").style.backgroundColor = "green";
    } else {
        document.getElementById("kocka").style.backgroundColor = "blue";
        document.getElementById("promeniBoju").disabled = true;
    }
   /* boje.selectedIndex++; 
    console.log(boje.selectedIndex);
    objekakat se kopira po referenci, a varijabla se direktono kopira
    */
}

function psabiranje(a, b){
    c = a + b;
    console.log(c);
}
function fsabiranje(a, b){
    c = a + b;
    return c; //biargumentna funckija, ternarni operator je if petalja u jednoj liniji
  /* zadatak: koristeći select box napraviti jednostavan kalkulatur. u selektu su operatori: tri input polja i jedno Dugmence
    napraviti set varijabli i istražiti sve dostupne operatore javascripta*/
}
     
        