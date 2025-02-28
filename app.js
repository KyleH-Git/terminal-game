// importing prompt package to get user input
const prompt = require('prompt-sync')();
console.log('Welcome to Landscaper! Struggle against the endless tides of grass in this exciting mowing game.\n');
const company = prompt('What is your Company name? ');
console.log(`${company} is just getting started in the landscaping game, so you will just have your teeth to cut grass with now.\nHopefully you can get some equipment upgrades!`);


// player object to track money and current tool
const player = {
    toolLevel: 0,
    currentMoney: 0,
    toolList: [
        teeth = {
            toolName: 'Teeth',
            profit: 1,
            toolCost: 0,
        }, 
        scissors = {
            toolName: 'Rusty Scissors',
            proft: 5,
            toolCost: 5,
        },
        push = {
            toolName: 'Push Lawnmower',
            profit: 50,
            toolCost: 25,
        },
        battery = {
            toolName: 'Battery Lawnmower',
            profit: 100,
            toolCost: 250,
        },
        intern = {
            toolName: 'Unpaid Interns',
            profit: 250,
            toolCost: 500,
        },
    ],

};

// cutGrass - handles game action of cutting grass with current tool, adding $ based on tool
const cutGrass = () => {
    let input = prompt(`Cut the grass using ${player.toolList[player.toolLevel].toolName}? Yes/No `);


    input = input.toLowerCase();
    input = input.slice(0, 1);
    
    
    if(input == 'y'){
        console.log(`You cut some lawns using ${player.toolList[player.toolLevel].toolName}, earning ${player.toolList[player.toolLevel].profit}$!`);
        player.currentMoney += player.toolList[player.toolLevel].profit;
    } else {
        console.log(`${company} decided to take the day off today! Enjoy your break, the grass will keep growing as you do.`);
    }
}

// buyUpgrade - handles upgrading player tool, subtracting cost from current money && upgrading the tool by increasing toolLevel

const buyUpgrade = () => {
    //check that player is not at max toolLevel
    if(player.toolLevel < 4){
        //prompt player to buy upgrade
        let input = prompt(`Would you like to upgrade your current tool to ${player.toolList[player.toolLevel + 1].toolName}? Yes/No `);
        //check input, if yes - check that player has enough money
        input = input.toLowerCase();
        input = input.slice(0, 1);
        if(input === 'y' && player.currentMoney > player.toolList[player.toolLevel + 1].toolCost){
            //subtract money for upgrade, increase player toolLevel
            player.toolLevel += 1;
            player.currentMoney -= player.toolList[toolLevel].toolCost;
            console.log(`You spend ${player.toolList[player.toolLevel].toolCost} upgrading your ${player.toolList[player.toolLevel - 1].toolName} to a ${player.toolList[toolLevel].toolName}`);
        } else {
        //if not enough money - tell player how much more they need
            console.log(`${company} is lacking the necessary funds! You need to earn ${player.toolList[player.toolLevel + 1].toolCost - player.currentMoney}$ more to be able to get this upgrade!`);
        }
        //if no exit function
    }
}

// GET ME OUT
const breakLoop = () => {
    let input = prompt('done testing?');
    if(input === 'y'){
        player.currentMoney = 100000000000000000000000000;
        player.toolLevel = 4;
    }
}
// main game loop

while(player.currentMoney < 1000 && player.toolLevel < 4){
    cutGrass();
    buyUpgrade();
    breakLoop();
}

console.log(`Congratulations! Off of the back of your unpaid interns ${company} has finally hit it big and opened up multiple sub-contractors. Now you'll never have to work again!\n You Win!`)
