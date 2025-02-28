// importing prompt package to get user input
const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);


// player object to track money and current tool
const player = {
    toolLevel: 0,
    currentMoney: 0,
    toolList: [
        teeth = {
            toolName: 'Teeth',
            profit: 1,
        }, 
        scissors = {
            toolName: 'Rusty Scissors',
            proft: 5,
        },
        push = {
            toolName: 'Push Lawnmower',
            profit: 50,
        },
        battery = {
            toolName: 'Battery Lawnmower',
            profit: 100,
        },
        intern = {
            toolName: 'Unpaid Interns',
            profit: 250,
        },
    ],

};

// cutGradd function - handles game action of cutting grass with current tool, adding $ based on tool
const cutGrass = () => {

}

// main game loop
let input = prompt(`Cut the grass using ${player.toolList[player.toolLevel].toolName}? Yes/No `);


input = input.toLowerCase();
input = input.slice(0, 1);


if(input == 'y'){
    console.log(`You cut some lawns using ${player.toolList[player.toolLevel].toolName}, earning ${player.toolList[player.toolLevel].profit}$!`);
    player.currentMoney += player.toolList[player.toolLevel].profit;
}


