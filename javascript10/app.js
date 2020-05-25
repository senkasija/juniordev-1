

//dath and math object: 16, 17 i 27 proći ove lekcije i uraditi Tip Kalkulator


function elementMetamorphe(text = ''){
    // ovu funkciju je pozivao iz console tako da postupak već liči na modularno programiranje

    var metamorphe  = document.getElementById("metamorphe");//ovaj div je objekat metamorphe

    var rounded  = document.getElementById("rounded").value;
    var border_size  = Number(document.getElementById("border_size").value);
    var border_color  = document.getElementById("border_color").value;
    var color  = document.getElementById("color").value;
    var background  = document.getElementById("background").value;
    const width  = Number(document.getElementById("width").value);
    const height = Number(document.getElementById("height").value);
    

   
    
    console.log(width); //vrednost width je 0 - automatski pripisuje objektu Number 0 ukoliko je prazan string.
    console.log(typeof width);
    console.log(width.value);
    /*
    console.log(height);
    console.log(height.value);
    */
    //console.log(typeof background); // ovo je string. intput type=text;



    //if(height.value != ''  && height.value != null && height.value != undefined ) {
     //   metamorphe.style = "height:" + height.value + "px";
   // }

   //console.log(height);
   //console.log(width);

   var style = "";

   if(height > 0 ) {
        style += "height:" + height + "px;"; 
        console.log(height); 
// dobijam string: "height:" + height + "px;" ako stavim pod jednostruke navodnike, bez njih dobijam string: height:10px;
//za pozivanje stila i njegove vrednosti u JS potreban je sledeći izraz .style.height:10px;
    }

    if(width > 0 ) {
        //ako je broj veći od nule, onda se definiše ovaj stil
        style += "width:" + width + "px;"; //PITANJE: zašto je se vrednosti dodaje promenljiva stil???
    }

    if(border_size > 0 ) {
         style += "border-width:" + border_size + "px;";
    }

    if(rounded != '' ) {
         style += "border-radius:" + rounded + "px;";
    }


    if(color != '' ) {
         style += "color:" + color + ";";
    }

    if(background != '') {
        style += "background-color:" + background + ";";
    }

    if(border_color != '') {
        style += "border-color:" + border_color + ";";
    }


    if(text != '' && text != null && text != undefined) {
        metamorphe.innerHTML = text; 
        //upisuje tekst u div ako je varijabli tekst dat argument, a pošto je vrednost prazan string nema ničega
    }

    console.log(style);
    metamorphe.style= style; // stil je svojstvo objekta metamorphe i regulerno mu se pridaje vrednost: border-color:"red";
    


}