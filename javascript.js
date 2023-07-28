function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    let choice = ["rock", "paper", "scissors"]
    return choice[rand]
}




let userWins = 0
let compWins = 0
let ties = 0
let winner = ""

let userWinsDisplay = document.createElement('div')
let compWinsDisplay = document.createElement('div')
let textDisplay = document.createElement('div')
let tieDisplay = document.createElement('div')




function logText(e) {

    computerSelection = getComputerChoice()
    console.log(this.classList.value)

    let playerSeclection = this.classList.value
    let battle = playerSeclection + computerSelection;

    


    if (playerSeclection === computerSelection)
    {
        winner = "Tie";
        ties++
    }

    if (battle == "rockscissors")
    {
        winner = "You win! Rock beats scissors"
        userWins++
    }
    else if (battle == "scissorsrock")
    {
        winner = "You lose! Rock beats scissors"
        compWins++
    }
    else if (battle == "scissorspaper")
    {
        winner = "You win! Scissors beats paper"
        userWins++
    }
    else if (battle == "paperscissors")
    {
        winner = "You lose! Paper beats scissors"
        compWins++
    }
    else if (battle == "paperrock")
    {
        winner = "You win! Paper beats rock"
        userWins++
    }
    else if (battle == "rockpaper")
    {
        winner = "You lose! Paper beats rock"
        compWins++
    }

    let container = document.querySelector('.container')

    userWinsDisplay.textContent = `Wins: ${userWins}`
    compWinsDisplay.textContent = `Loses: ${compWins}`
    tieDisplay.textContent = `Ties: ${ties}`
    textDisplay.textContent = `${winner}`
    

    container.style.cssText = 'display: flex; flex-direction: column; align-items: center;'

    
    container.appendChild(userWinsDisplay)
    container.appendChild(compWinsDisplay) 
    container.appendChild(tieDisplay)
    container.appendChild(textDisplay)
        
        
}


const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', logText))






