let user = prompt("Welkom! Wat is je naam?", "");

if (user != null) {
    greeting = "Hey " + user + "!";
}
console.log(greeting)

let guessNumber = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...", "");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



if (user != getRandomInt){
    message = "Dat is niet correct.";
    let guessNumber = prompt("Probeer nog een keer!", "");
    
} else {
    console.log("Gefeliciteerd je hebt gewonnen!");
    
}
console.log(message);

for (i = 1 ; i <= 25  ; i++){
    console.log("Dag " + user + ". Tot de volgende keer!")
}

