



function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);

    if (rand == 0)
        return "rock"
    else if (rand == 1)
        return "paper";
    else
        return "scissors";

}




const buttons = document.querySelectorAll('button')

function logText(e) {

    computerSelection = getComputerChoice()
    console.log(this.classList.value)
    let playerSeclection = this.classList.value
    let battle = playerSeclection + computerSelection;

    
    if (playerSeclection === computerSelection)
        return "Tie";

    if (battle == "rockscissors")
        console.log("You win! Rock beats scissors")
    else if (battle == "scissorsrock")
        console.log("You lose! Rock beats scissors")
    else if (battle == "scissorspaper")
        console.log("You win! Scissors beats paper")
    else if (battle == "paperscissors")
        console.log("You lose! Paper beats scissors")
    
    else if (battle == "paperrock")
        console.log("You win! Paper beats rock")
    else if (battle == "rockpaper")
        console.log("You lose! Paper beats rock")
}

buttons.forEach(button => button.addEventListener('click', logText))






console.log(playerSeclection)
console.log("HOLEELFJLDKJFSLDJFLDKSJFLKJ")



function game() {
    let userWins = 0;
    let compWins = 0;




    for (let i = 0; i < 3; i++)
    {
        let x = playRound(getComputerChoice());
        console.log(x);
        if (x.includes("win"))
            userWins ++;
        else if (x.includes("lose"))
            compWins ++;


        let userWinsDisplay = document.createElement('div')
        let compWinsDisplay = document.createElement('div')

        let container = document.querySelector('.container')

        userWinsDisplay.textContent = `${userWins}`
        compWinsDisplay.textContent = `${compWins}`


        container.appendChild(userWinsDisplay)
        container.appendChild(userWinsDisplay) 
    }

}

game()
