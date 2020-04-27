

/*modifikovati program guess the number, napraviti tekst box, nećemo preko prompta, vežba 3, rezultat da se pokaže u text area, da stilizujemo pomalo , 
drugi zadatak je obrada grešaka, da napravimo opciju za deljenje, na gitu da postavim, da ima tri boxa, deljenik, delilac, rezutlat.
Kasnije ćemo raditi ivente, a onda bubnjeve.
Ja ću se čuti sa Pavlom da mu objasnim.
*/

function guess() {
    var secret = 22;
    var guess = document.getElementById("number").value;

    if (guess == secret) {
        document.getElementById("result").innerHTML="You've guessed it - congratulations! It's number "+secret+".";
    }
    else {
        document.getElementById("result").innerHTML = "Sorry, your guess is not correct... The secret number is not " + guess;
    }
}
