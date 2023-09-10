/* 
    1. make an option array(option = ["rock","paper,"sissro"])
    2. promt use how many game they want to play
        i) if user enter or or less than 0 or a blank end the program and display score if possible or zero.
        ii) if user enter 1 or greater then continue. 
    3. promt the user to choose the from option. for eg. (rock or paper , sissor)
        i. if user choose null or option outside dispaly, then computer wins
        
    3. make a computer choose one option randomely 
    4. Console.log user choice and computer choice 
    5. Use a function which will take user choice and compter choise and retrun result.
    6. display if the player won(in blue color) / lose(in red color) or draw(in grey colo)
    7. Add to the number of win/lose/draw depending of result
    6. Ask the user if they want to contiune or quit
        i. if user want to contiune play the game until the value user used is 0.
        ii) if user want to exit then dispaly fianl result of the match with number of win/ draw and lose.
        
*/
var prompt = require('prompt-sync')();
var colors = require('ansi-colors');

const option = ["rock","paper","sissor"]

console.log("Welcome to Rock - Paper - Sissor game")
console.log("Rules are as following")
console.log("Rock will beat Sissor, Paper will beat Rock, Sissor will beat paper. If its same then its a Draw")


var times = prompt("how many time do you want to play?: ")






for(let i = 0; i < times; i++){
    var pick =  prompt("Please pick your choice Rock, Paper or Sissors : ")
    var playerPick = pick.toLowerCase()
    const computerChoice = option[Math.floor(Math.random() * option.length)];  
    console.log( playerPick, computerChoice);
    winner(playerPick,computerChoice)
    console.log(userDraw, userLose, userWin)

}


function winner(user,computer){
    let userWin = 0;
    let userDraw = 0;
    let userLose = 0;
    switch(user){
        case "paper":
                if(computer == "paper"){
                    console.log("Draw")
                    return userDraw++
                }
                if(computer == "rock"){
                    console.log("Win")
                    userWin++
                }
                if(computer == "sissor"){
                    console.log("Lose")
                    userLose++
                }

            break
        case "rock":
            if(computer == "paper"){
                console.log("Lose")
            }
            if(computer == "rock"){
                console.log("Draw")
            }
            if(computer == "sissor"){
                console.log("Win")
            }
            break;
        case "sissor":
            if(computer == "paper"){
                console.log("Win")
            }
            if(computer == "rock"){
                console.log("Lose")
            }
            if(computer == "sissor"){
                console.log("Draw")
            }
            break;
    }
    
    
            
}