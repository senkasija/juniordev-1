/*---------------------------------------------------------------------*/
/*---------------- 1. DOMAĆI ZADATAK: var, let, const------------------*/
/*--------------------------------------------------------------------*/

/* 
Var je ključna reč za promenljivu do standarda EC6, kada su uvedene ključne reči let i const. 
Dok se const jasno razlikuje od ostale dve, manja je razlika između var i let pa neki misle da je let samo modernija oznaka za promenljivu.
*/

/*----------------EC5 (var) -----------------*/

/* case 0 
  
var name1;
name2;
console.log(name1); //output: name1 je undefined
console.log(name2);//output: greška - name2 is not defined
//ako promenljiva nije definisana, mora biti deklarisana (inicijalizovana)
*/

/* case 1
var name1 = "Ivan";
console.log(name1);//output: Ivan
name1 = "Nikola";
console.log(name1); //output: 47
//ukoliko promenljivu ne deklarišemo ključnom rečju var, JS će podrazumevati da je reč o promenljivoj
*/
/* case 2
function okomePricamo(){
   var name1 = "Ivan";
   name2 = "Nikola";
}
okomePricamo();
console.log(name1); //output: greška: promenljiva name1 is not defined - zato što se nalazi unutar bloka funkcije i ne vidi se na globalnom planu
console.log(name2); //output: Nikola - varijabla bez ključne reči var ima globalnu oblast važenja i može se pozvati van bloka funkcije
*/
/* case 3
var osoba = true;
if (osoba) {
    var name1 = "Ivan";
    name2 = "Nikola";
}
console.log(name1); //output: Ivan - primenljiva deklarisana rečju var se vidi se na globalnom planu iako je u bloku
console.log(name2); //output: Nikola - varijabla bez ključne reči var ima globalnu oblast važenja i može se pozvati van bloka koda
*/

/*----------------EC6 (let) -----------------*/
/* case 0
let name1;
console.log(name1); //output: name1 je undefined
 */

/* case 1 
let name1 = "Ivan";
console.log(name1);  // output: Ivan
let name1 = "Nikola";
// console.log(name1); // output: greška - Kako je promenljiva name2 već deklarisana rečju let, 
// onda JS neće dopustiti ponovno deklarisanje i pravljenje nove promenljive name2 te će prijaviti grešku da je name1 već deklarisan.
*/

/* case 2
function okomePricamo(){
    let name1 = "Ivan";
}
okomePricamo();
console.log(name1);//output: greška: name1 is not defined - zato što se nalazi unutar bloka funkcije i ne vidi se na globalnom planu
*/

/* case 3
let osoba = true;
if (osoba) {
    let name1 = "Ivan";
}
console.log(name1); //output: greška: name1 is not defined - zato što se nalazi unutar bloka i ne vidi se na globalnom planu
*/

/*----------------EC6 (const) -----------------*/

/* case 0
const name1;
console.log(name1); //output: greška - promenljiva deklarisana ključnom rečju const mora biti inicijalizovana
 */

/* case 1
const name1 = "Ivan";
console.log(name1);  // output: Ivan
const name1 = "Nikola";
console.log(name1); // output: greška - Kako je promenljiva name2 već deklarisana rečju const, 
//onda JS neće dopustiti ponovno deklarisanje i pravljenje nove promenljive name2 te će prijaviti grešku da je name1 već deklarisan.
 */

/* case 2 i 3 za varijablu const su identični kao i u slučaju rezervisane reči let
function okomePricamo(){
    const name1 = "Ivan";
}
okomePricamo();
console.log(name1);//output: greška: name1 is not defined - zato što se nalazi unutar bloka funkcije i ne vidi se na globalnom planu
*/

/*---------------------------------------------------------------------*/
/*-------------------- 1. DOMAĆI ZADATAK: END -------------------------*/
/*--------------------------------------------------------------------*/

    /*
    *postoji četiri nivoa grešaka:
    - opšta notifikacija - log;
    - info message 
    - upozorenje
    - stvarna greška: leksičke, logičke, 
    */
  /*
    razlika između prekrementa i decrementa
    
    *  uraditi i upitnik sa randomom

    drugi domaći zadatak: 
    Promena boje na osnovu temperature. Sve  boje su heksadecimalne.
    */
   /*
   dva načina pisanja varijabla:
    *camel case - početno malo , a zatim veliko
    *Hungarian notation - početno slovo pokazuje tip podatka, koje javascript ne razlikuje
   var sFistName;
   var iAge
   Cilj je postići što jasniji naziv uz što manje teksta.
   */
  /*
  preporučuje se najviše 4 nestinga u petlji, više od toga ukazuje na lošu logiku i da onda trebba razložiti na više logičkih sekcenci
  */