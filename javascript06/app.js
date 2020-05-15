/*
** najčešće se koristi
** bolja za nizove sa utvrđenim indeksom, te for petlju koristimo kada znamo koliko puta petlja treba da se izvrši
** preglednija jer su i početna vrednost, uslov i inkrement na jednom mestu
** while koristimo kada ne znamo koliko puta će se ponoviti iteracija, već će se ponavljati dok se ne ispuni uslov
** for koristimo kada znamo koliko puta treba da se ponovi iteracija
** for in služi za iteraciju kroz sva svojstva objekta
** do while izvrđava se bar jedno, while dok god je uslov zadovoljen
*/

var x = "ljutih gusara";
var y = "Jedan ";

var gusari = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, "nijedan"];

for (i=0; i < gusari.length; i++){


    var kolikoGusara = gusari[i];
    console.log(kolikoGusara);
    var  ostatakGusara = "Ostalo ih " + --gusari[i];
    pesma = [
        `${kolikoGusara} ${x}<br>Došlo u moj krevet<br>${y} pao s kreveta<br>${ostatakGusara}<p>`,
        `${kolikoGusara} ${x}<br>Još ne znaju ko sam<br>Jednog sam uspavao<br>${ostatakGusara}<p>`,
        `${kolikoGusara} ${x}<br>Ja ih oštro gledam<br>${y}pao u nesvest<br>${ostatakGusara}<p>`,
        `${kolikoGusara} ${x}<br>Pobeglo na brest<br>${y}pao na glavu<br>${ostatakGusara}<p>`,
        `${kolikoGusara} ${x}<br>Zbrisalo u svet<br>${y}se izgubio<br>${ostatakGusara}<p>`,
        `${kolikoGusara} ${x}<br>Lete ko leptiri<br>${y}pao u bunar<br>${ostatakGusara}<p>`,
        `${kolikoGusara} ${x}<br>Bes u njima vri<br>${y}puko od muke<br>${ostatakGusara}<p>`,
        `${kolikoGusara} ${x}<br>A protiv njih ja<br>Jednog sam zviznuo<br>${ostatakGusara}<p>`,
        `${kolikoGusara} ${x}<br>A pogled im ledan<br>${y}se okliznuo<br>${ostatakGusara}<p>`,
        `${kolikoGusara} ${x}<br>Postao je medan<br>Prosto se istopio<br>${ostatakGusara}<p>`,
        "U svakom pogledu<br>Prošla me je strava<br>Sad je sve u redu<br>Može da se spava<p>" 
    ]
    document.write(pesma[i]);
}

/*var pesmaObjekat = {
    prvaStrofa: `${kolikoGusara} ${x}<br>Došlo u moj krevet<br>${y} pao s kreveta<br>${ostatakGusara}<p>`,
    drugaStrofa: `${kolikoGusara} ${x}<br>Još ne znaju ko sam<br>Jednog sam uspavao<br>${ostatakGusara}<p>`,
    trecaStrofa: `${kolikoGusara} ${x}<br>Ja ih oštro gledam<br>${y}pao u nesvest<br>${ostatakGusara}<p>`
}*/
for (var indeks1 in pesma)  {
    console.log(indeks1 + ": " + pesma[indeks1]);   
}

/*gusari.forEach(element =>console.log(element));*/