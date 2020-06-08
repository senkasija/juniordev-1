//uraditi BMI kalkulator koji radi: sa dodatnim funkcijama za merenje kalorija
//za sredu je ovaj zadatak
//za ponedeljak: postaviti bar jedno pitanja

/** zadatak za danas
 * Napraviti svoju todo listu: dizajn + funkcionalnost
 * Upotrebiti callback
 * upotrebiti property event.which
 */

 /* Pitanja: 
    * function listLength(){ 	return item.length; } //PITANJE: Šta radi ova funkcija? vraća broj elemenata u nizu li?
    * function crossOut() {li.classList.toggle("done"); }PITANJE: Ne vidim kada se upisanom tekstu ovaj stil pridaje
    * 	function deleteListItem(){ li.classList.add("delete"); }//PITANJE: zašto umesto stila delete na bismo koristili metodu remove();? Šta je efikasnije?

 */ 
class MyToDo {
   constructor(){
      this.enterButton = document.getElementById("enter");
      this.input = document.getElementById("userInput");
      this.ul = document.querySelector("ul");
      this.item = document.getElementsByTagName("li")
      this.events();
/**
 * Varijable koje preuzimaju podatke i pamte ih kako bi bile spremne za upis
 */
   }
   
   inputLength() {
      return this.input.value.length;
   }

   createListElement() {
      this.li = document.createElement("li");
      this.li.appendChild(document.createTextNode(this.input.value));
      this.ul.appendChild(this.li);
      this.input = "";
   }
   addAfterClick() {
      if (this.inputLength() > 0) {
         this.createListElement();
      } else {
         alert("Polje je prazno");
      }
   }


   events(){
      this.enterButton.addEventListener("click", () => this.addAfterClick());
   }




}
new MyToDo();

//Nizovi i kombinacije niz-objekat
/* Cardio 2
analogni sat4
css animacije
srednjoškolska matematika: stepefni pomeranja kazaljke
napraviti sunce u css i zemlju koja rotira oko sunca u css
bmi calculator
*/