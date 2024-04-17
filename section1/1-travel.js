const destiny = prompt("What's your travel destiny?")
const dailyCost = 150;
let days = ++prompt("How many days will your travel last?")
let budget = parseFloat(prompt("What's your budget for this travel?"))

if(days*dailyCost < budget){
    console.log("You have enough money for your travel!")
} else if(days*dailyCost == budget){
    console.log("You have just the right amount of money for your travel, be careful of not exceeding your budget");
} else{
    console.log("You don't have enough money for your travel, please consider changing your budget or the days of your travel");
}
