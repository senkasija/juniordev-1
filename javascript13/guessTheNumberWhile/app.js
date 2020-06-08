



function guess() {

    var number = document.getElementById("number").value;

    var targetNumber = Math.random();
    var targetNumber = targetNumber * 6;
    var targetNumber = Math.floor(targetNumber);
    console.log(targetNumber);

   var i = 0;
    while (i<1) {        
        if (number == targetNumber){
            document.getElementById("result").innerHTML="You've guessed it - congratulations! It's number "+targetNumber+".";
            document.getElementById("guess").disabled = true;
        } else {
            document.getElementById("result").innerHTML = "Sorry, your guess is not correct... The secret number is not " + number;
    }
    i++;
}