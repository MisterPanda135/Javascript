const textElement = document.querySelector("#text");
let playerLives = 10;
const paragraph = "javascript";
const arr = [];
for (let i = 0; i < paragraph.length; i ++){
    arr[i] = "_";
}
textElement.textContent = arr.join(" ") + " " + "Levens:" + playerLives;

function getValue() {
    value = document.getElementById("Guess").value;
    if (value != ""){
        if (value.length == 1){
            log(value);
        }
    }
}

function log(value){
    
    searchTerm = value;
    indexOfFirst = paragraph.indexOf(searchTerm);
    indexOfSecond = paragraph.indexOf(searchTerm, indexOfFirst + 1);
    indexOfThird = paragraph.indexOf(searchTerm, indexOfSecond + 1);
    indexOfFourth = paragraph.indexOf(searchTerm, indexOfThird + 1);

    if (indexOfFirst > -1){
        console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
        arr[indexOfFirst] = searchTerm;
        if (indexOfSecond > -1){
            console.log(`The index of the second "${searchTerm}" is ` + indexOfSecond);
            arr[indexOfSecond] = searchTerm;
            if (indexOfThird > -1){
                console.log(`The index of the third "${searchTerm}" is ` + indexOfThird);
                arr[indexOfThird] = searchTerm;
                if (indexOfFourth > -1) {
                    console.log(`The index of the fourth "${searchTerm}" is ` + indexOfFourth);
                    arr[indexOfFourth] = searchTerm;
                }
            }
        }
    }else {
        playerLives--;
    }
    if (playerLives > 0){
        textElement.textContent = arr.join(" ") + " " + "Levens:" + playerLives;
    }else{
        textElement.textContent = "Je hebt geen levens meer!"
    }

    if (arr.join("") === paragraph){
        textElement.textContent = "Je hebt gewonnen!";
    }

}
