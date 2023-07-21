function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);

    if (rand == 0)
        return "rock"
    else if (rand == 1)
        return "paper";
    else
        return "scissors";

}

function playRound(playerSeclectionn, computerSelection){
    let playerSeclection = playerSeclectionn.toLowerCase();
    let battle = playerSeclection + computerSelection;



    if (playerSeclection === computerSelection)
        return "Tie";


    if (battle == "rockscissors")
        return "You win! Rock beats scissors";
    else if (battle == "scissorsrock")
        return "You lose! Rock beats scissors";
    else if (battle == "scissorspaper")
        return "You win! Scissors beats paper";
    else if (battle == "paperscissors")
        return "You lose! Paper beats scissors";
    
    else if (battle == "paperrock")
            return "You win! Paper beats rock";
    else if (battle == "rockpaper")
            return "You lose! Paper beats rock";




}

function game() {
    let userWins = 0;
    let compWins = 0;

    for (let i = 0; i < 5; i++)
    {
        let x = playRound(prompt("Enter something"), getComputerChoice());
        console.log(x);
        if (x.includes("win"))
            userWins ++;
        else if (x.includes("lose"))
            compWins ++;
        else
            continue;
        



    }
    if (userWins > compWins)
        console.log("YOU WIN! Score is " + userWins + " to " + compWins);
    else if (compWins > userWins)
        console.log("YOU LOSE! Score is " + userWins + " to " + compWins);
    else
        console.log("TIE");
}

game()
