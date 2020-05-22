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
/*---------------------------------------------------------------------*/


/*---------------------------------------------------------------------*/
/*---------- 2. DOMAĆI ZADATAK: prekrement i decrement -----------------*/
/*---------------------------------------------------------------------*/

let i = 5;
console.log(`operand i je: ${i}`);
let j = i++;
//i++ označava sufiksno uvećanje operanda i za 1, a znači isto što i = i + 1;
console.log(`let j = i++ je i dalje: ${j},`);
console.log(`ali operand i je sada: ${i} jer je uvećan za 1`); 
//Sufiksno uvećanje (post-increment) i++ uvećava operand i, ali vraća njegovu neuvećanu vrednost
let x = 5
console.log(`operand x je: ${x}`);
let y = ++x;
console.log(`let y = ++x je: ${y}`);
console.log(`i operand x je takođe: ${x} jer su uvećani za 1`); 
//Prefiksno uvećanje (pre-increment) ++x uvećava operand x i vraća njegovu uvećanu vrednost

let z = 5;
console.log(`operand z je: ${z}`);
let d = z--;
//i-- označava sufiksno umanjene operanda i za 1, a znači isto što i = i - 1;
console.log(`let d = z-- je i dalje: ${d},`);
console.log(`ali operand z je sada: ${z} jer je umanjen za 1`); 
//Sufiksno umanjene (post-decrement) i-- umanjuje operand i, ali vraća njegovu neumanjenu vrednost
let e = 5
console.log(`operand e je: ${e}`);
let f = --e;
console.log(`let f = --e je: ${f}`);
console.log(`i operand e je takođe: ${e} jer su umanjeni za 1`); 
//Prefiksno umanjenje (pre-increment) ++x uvećava operand x i vraća njegovu uvećanu vrednost

/*---------------------------------------------------------------------*/
/*---------- 2. DOMAĆI ZADATAK: prekrement i decrement - END -----------*/
/*---------------------------------------------------------------------*/


/*---------------------------------------------------------------------*/
/*---------- 3. DOMAĆI ZADATAK: Upitnik sa randomom ---------------------*/
/*---------------------------------------------------------------------*/


document.getElementById("proveri").onclick = function() {
                
    var randomNumber = Math.random();
    console.log (randomNumber);
    
    randomNumber = randomNumber * 6;
    
    randomNumber = Math.floor(randomNumber);
   //funkcija Math.floor vraća celi broj koji je jednak broju dobijenim funkcijom Math. random() broju ili manji od njega
    
    if (document.getElementById("pogodi").value == randomNumber) {
        
        alert("Bravo majstore!");
        
    } else {
        
        alert("Ništa :( Broj je: " + randomNumber);
        
    }
    
}

/*---------------------------------------------------------------------*/
/*---------- 3. DOMAĆI ZADATAK: Upitnik sa randomom - END -------------*/
/*---------------------------------------------------------------------*/


/*---------------------------------------------------------------------*/
/*---------- 4. DOMAĆI ZADATAK: Promena boje zavisno od temperature  -------------*/
/*---------------------------------------------------------------------*/


function getColor() {
                
     letters = '0123456789ABCDEF'.split('');
  
    var colorBLue = '#0000';
    var colorGreen = '#00';
    var colorRed = '#FF';
    var temp = "-1";

    if(temp < 0){

        for (var i = 0; i < 2; i++ ) {

            colorBLue += letters[Math.floor(Math.random() * 16)];
        }
    }
    if (temp > 0 && temp < 15){
        for (var i = 0; i < 4; i++ ) {

            colorGreen += letters[Math.floor(Math.random() * 16)];
        }
    }
    if (temp > 15 && temp < 30){
        for (var i = 0; i < 4; i++ ) {

            colorRed += letters[Math.floor(Math.random() * 16)];
        }
    }
console.log(colorBLue, colorGreen, colorRed);

}
getColor();



/*---------------------------------------------------------------------*/
/*---------- 4. DOMAĆI ZADATAK: Promena boje zavisno od temperature - END -------------*/
/*---------------------------------------------------------------------*/



    /*
    *postoji četiri nivoa grešaka:
    - opšta notifikacija - log;
    - info message 
    - upozorenje
    - stvarna greška: leksičke, logičke, 
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