// importing prompt package to get user input
const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);


// player object to track money and current tool
const player = {
    currentTool: 'Teeth',
    currentMoney: 0,
    toolList: ['teeth', 'rusty scissors', 'push lawnmower', 'battery lawnmower', 'unpaid interns'],

};

// cutGradd function - handles game action of cutting grass with current tool, adding $ based on tool
const cutGrass = () => {

}

// main game loop
let input = prompt(`Cut the grass using ${player.currentTool}? Yes/No `);


input = input.toLowerCase();
input = input.slice(0, 1);


if(input == 'y'){
   
    
}


