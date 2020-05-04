

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
    console.log(boje.selectedIndex);*/
}
        