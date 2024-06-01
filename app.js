function randomizer(){
    let suits = [{symbol:"♦", color: "red"},{symbol:"♥", color: "red"},{symbol:"♠", color: "black"},{symbol:"♣", color: "black"}];
    let choose_suit=suits[Math.floor(Math.random() * suits.length)];
    
    let numbers = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    let number_chooser = numbers[Math.floor(Math.random()*numbers.length)];

    return {
        choose_suit,
        number_chooser

    }; 
}

setInterval(()=>{
let card = randomizer();
    //Upper Suit
    document.querySelector(".row-top").innerText = card.choose_suit.symbol;
    document.querySelector(".row-top").style.color = card.choose_suit.color;
    //Middle number / Letter
    document.querySelector(".row-middle").innerText = card.number_chooser;
    document.querySelector(".row-middle").style.color = card.choose_suit.color;
    //Bottom Suit
    document.querySelector(".row-bottom").innerText = card.choose_suit.symbol;
    document.querySelector("row-bottom").style.color = card.choose_suit.color;
},600)