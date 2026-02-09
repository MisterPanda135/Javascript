let button = document.querySelector("#button");

let textElement = document.querySelector("#text");
let textElement2 = document.querySelector("#text2");
let textElement3 = document.querySelector("#text3");
let textElement4 = document.querySelector("#text4");
let player1Wins = 0;
let player2Wins = 0;
let playerDraws = 0;

const getSum = (totaal, nummer) => totaal + nummer;

button.addEventListener("click", () => {
    waardes();
});

let waardes = () => {
    const dobbelstenen = [
        [0],
        [0],
        [0],
        [0],
    ];
    
    dobbelstenenAamtal = dobbelstenen.map(arr => arr.map(() => (Math.floor(Math.random() * 6) + 1)));
    
    p1 = dobbelstenenAamtal.slice(0, 2);
    p2 = dobbelstenenAamtal.slice(2);
    
    player1 = p1.flat();
    player2 = p2.flat();

    player1Total = player1.reduce(getSum);
    player2Total = player2.reduce(getSum);
    console.log("Player 1: " + player1Total);
    console.log("Player 2: " + player2Total);

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
    textElement.textContent = dobbelstenenAamtal[0] + ", " + dobbelstenenAamtal[1] + "\n" + " Player1 wins:" + player1Wins;
    textElement2.textContent = dobbelstenenAamtal[2] + ", " + dobbelstenenAamtal[3]+ "\n" + " Player2 wins:" + player2Wins;
    textElement4.textContent = "Draws: " + playerDraws;
}
