let button = document.querySelector("#button");

let textElement = document.querySelector("#text");
let textElement2 = document.querySelector("#text2");
let textElement3 = document.querySelector("#text3");
let textElement4 = document.querySelector("#text4");
let player1Wins = 0;
let player2Wins = 0;
let playerDraws = 0;

let dobbelStenenAantal1
let dobbelStenenAantal2

const getSum = (totaal, nummer) => totaal + nummer;

button.addEventListener("click", () => {
    waardes();
});

let waardes = () => {
    const dobbelsteen1 = [0, 0];
    const dobbelsteen2 = [0, 0];
    
    for (let i = 0; i < 2; i++){
        dobbelsteen1[i] = Math.floor(Math.random() * 6) + 1;
        dobbelsteen2[i] = Math.floor(Math.random() * 6) + 1;
    }
    player1Total = dobbelsteen1.reduce(getSum);
    player2Total = dobbelsteen2.reduce(getSum);

    // dobbelStenenAantal1 = dobbelsteen1.map(() => (Math.floor(Math.random() * 6) + 1));
    // dobbelStenenAantal2 = dobbelsteen2.map(() => (Math.floor(Math.random() * 6) + 1));

    // player1Total = dobbelStenenAantal1.reduce(getSum);
    // player2Total = dobbelStenenAantal2.reduce(getSum);

    console.log("Player 1: " + player1Total + " " +  dobbelsteen1[0] + " " + dobbelsteen1[1]);
    console.log("Player 2: " + player2Total + " " + dobbelsteen2[0] + " " + dobbelsteen2[1]);

    if (player1Total > player2Total){
        textElement3.textContent = "Player 1 wins!";
        player1Wins++
    }if (player1Total < player2Total){
        textElement3.textContent = "Player 2 wins!";
        player2Wins++
    }if (player1Total == player2Total) {
        textElement3.textContent = "Its a draw.";
        playerDraws++
    }
    // textElement.textContent = dobbelStenenAantal1[0] + ", " + dobbelStenenAantal1[1] + "\n" + " Player1 wins:" + player1Wins;
    // textElement2.textContent = dobbelStenenAantal2[0] + ", " + dobbelStenenAantal2[1] + "\n" + " Player2 wins:" + player2Wins;
    // textElement4.textContent = "Draws: " + playerDraws;
}
