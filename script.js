
function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const DiceResult = document.getElementById("DiceResult");
    const DiceImages = document.getElementById("DiceImages");
    const diceSound = document.getElementById("diceSound");
    const errorMessage = document.getElementById("errorMessage");
    const values = [];
    const images = [];

    errorMessage.textContent = '';

    if(numOfDice < 1){
        errorMessage.textContent = `Please select a valid number to roll the dice`;
        return;
    }
    diceSound.play();

    for(let i=0; i < numOfDice ; i++){
        const value = Math.floor(Math.random()*6 + 1);
        values.push(value);
        images.push(`<img src = "dice-${value}.png" alt="Dice ${value}">`);
    }
    DiceResult.style.opacity = "1";
    DiceResult.textContent = `Dice : ${values.join(', ')}`;
    DiceImages.style.opacity = "1";
    DiceImages.innerHTML = images.join('');

}