
var wordBank = ["iron man", "captain america", "hawkeye", "the hulk", "thor", "black widow", "spiderman", "doctor strange", "black panther", "vision", "scarlet witch", "war machine", "falcon", "ant man", "captain marvel", "guardians of the galaxy", "nick fury"];
var correctAndBlanks = "";
var wrongLetters = [];
var score = 0;
var livesRemaining = 6;
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)].toUpperCase();
console.log(randomWord);
var thanosPic = document.getElementById("thanos");
var gg = document.getElementById("gg");

function beginGame() {


    for (var i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === " ") {
            correctAndBlanks += (" ");
        }
        else {
            correctAndBlanks += ("_");
        }
    }

}
function refreshPage() {
    window.location.reload();
}

beginGame();
document.querySelector("#lives").innerHTML = livesRemaining;
document.querySelector("#scoreboard").innerHTML = score;
document.querySelector("#wordLine").innerHTML = correctAndBlanks
console.log(correctAndBlanks);

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
// function isLetter(str) {
//     return str.length === 1 && str.match(/[a-z]/i);
// }



document.onkeyup = function (event) {
    var userPick = event.key.toUpperCase();
    

    for (var j = 0; j < randomWord.length; j++) {
        if (randomWord.indexOf(userPick, j) == j) {
            correctAndBlanks = correctAndBlanks.replaceAt(j, userPick);
            document.querySelector("#wordLine").innerHTML = correctAndBlanks;



        }
    }
    

    if (randomWord.indexOf(userPick) == -1 && wrongLetters.indexOf(userPick) == -1) {
        wrongLetters.push(userPick);
        document.querySelector("#wrongGuesses").innerHTML = wrongLetters
        livesRemaining--;
        document.querySelector("#lives").innerHTML = livesRemaining;

    }
    
  
   

    if (livesRemaining === 5) {
        thanos.setAttribute("style", "width:40px");
    
        }
        else if (livesRemaining === 4) {
            thanos.setAttribute("style", "width:60px");
        }
        else if (livesRemaining === 3) {
            thanos.setAttribute("style", "width:80px");
        }
        else if (livesRemaining === 2) {
            thanos.setAttribute("style", "width:100px");
        }
        else if (livesRemaining === 1) {
            thanos.setAttribute("style", "width:150px");
        }
        else if (livesRemaining === 0) {
            thanos.setAttribute("style", "width:150px");
        }

        

        
        

    if (correctAndBlanks == randomWord) {
        score++;
        document.querySelector("#scoreboard").innerHTML = score;
        randomWord = wordBank[Math.floor(Math.random() * wordBank.length)].toUpperCase();
        correctAndBlanks = ("");
        wrongLetters = [];
        document.querySelector("#wrongGuesses").innerHTML = wrongLetters
        livesRemaining = 6;
        document.querySelector("#lives").innerHTML = livesRemaining;
        beginGame();
        document.querySelector("#wordLine").innerHTML = correctAndBlanks;
        thanos.setAttribute("style", "width:20px");
        

    }

    if (livesRemaining === 0) {
        // alert('"SNAP!"');
        // alert('Nick Fury: "Send a SOS out to Captain Marvel ASAP!!!!"')
        thanos.setAttribute("style", "width:0px");
        gg.setAttribute("style", "width:600px");


    }
    
    
    } 
    
   

   

