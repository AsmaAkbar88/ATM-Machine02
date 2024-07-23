#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk"

let myBalance = 50000
let myPin = 2233

let pinAns = await inquirer.prompt(
    [
        {
            name: "pin",
        message: chalk.yellowBright(" \n Enter your PIN code:  "),
        type: "number"
        }
    ]
    );
    if(pinAns.pin === myPin)
        {console.log(chalk.whiteBright(" \n Welcom to ATM Machine\n ")),
            console.log("_".repeat(60));
            


    console.log(" \n PIN is Correct...! Login Successfuly \n ")
    console.log("_".repeat(20));
    

let operationAns = await inquirer.prompt(
    [
        { name: "operation",
            message: chalk.greenBright(" \N Please select from the option below  "),
            type: "list",
            choices: ["Withdraw" , "Check Balance", "Fast Cash"]
        }
    ]
);
if(operationAns.operation === "Withdraw")
    {let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "Cash Wihtdraw \n Please enter amount: ",
                type: "number"
            }
        ]
    )
    if(myBalance > amountAns.amount)

        {console.log(` \n ${amountAns.amount} withdraw Successfuly \n `)
       
        


console.log (`your remining balance is ${myBalance - amountAns.amount} 


Thanks for using ATM Machine`)
console.log("__".repeat(40));}

else{console.log(chalk.redBright(`\n Insufficient Balance \n`),


(`Thanks for using ATM Machine`))
console.log("__".repeat(40));}

};


if(operationAns.operation === "Fast Cash")
    {let fastCashAns = await inquirer.prompt(
        [
            {
                name: "FC",
                message: chalk.yellow(" Choose withdraw Method \n Select Amount: "),
                type: "list",
                choices: ["500","1000","15000","20000","25000","30000"]
            }
        ]
    )
    if(myBalance > fastCashAns.FC)

        {console.log(`\n ${fastCashAns.FC} withdraw Successfuly
     `)
console.log (`your remining balance is:  ${myBalance - fastCashAns.FC} 


Thanks for using ATM Machine`)
console.log("__".repeat(40));}
};

if(operationAns.operation === "Check Balance")
    
    {
    console.log(`\n 
    Your Balance is: ${myBalance} \n

    Thanks for using ATM Machine`)
}


        }
        else{console.log(chalk.red(`\n   incorrect PIN code \n
        
        Tray again`))}