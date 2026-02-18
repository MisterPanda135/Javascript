let textElement = document.querySelector("#text");
let playerLives = 10;
const paragraph = "javascript";
const arr = [];
for (let i = 0; i < paragraph.length; i ++){
    arr[i] = "_";
}

function getValue() {
    const value = document.getElementById("Guess").value;
    if (value != ""){
        if (value.length == 1){
            log(value);
        }
    }
}

function log(value){
    
    const searchTerm = value;
    const indexOfFirst = paragraph.indexOf(searchTerm);
    let indexOfSecond = paragraph.indexOf(searchTerm, indexOfFirst + 1);
    let indexOfThird = paragraph.indexOf(searchTerm, indexOfSecond + 1);
    let indexOfFourth = paragraph.indexOf(searchTerm, indexOfThird + 1);

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

}
