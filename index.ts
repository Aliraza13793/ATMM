#! usr/bin/env node
import inquirer from "inquirer";
interface atm{
    userid:string;
    accountype:string
    userpin:number;
    transactiontype:string;
    amount:number;

}
const answers:atm =await inquirer.prompt([
    {
        type:'input',
        name:"userid",
        message:"Enter User ID",
    },
    {
        type:'input',
        name:"userpin",
        message:"Enter User PIN",
    },
    {
        type:"list",
        name:'accountype',
        choices:['current','saving'],
        message:"Enter Account Type",
    },
    {
        type:'list',
        name:"transactiontype",
        choices:['fastcash','withdrawl','deposit'],
        message:"Enter Transaction Type",
        when(answers){
            return answers.accountype
        },
    },
        {
            type:'list',
            name:"amount",
            choices:[1000,2000,3000,5000],
            message:'Select your amount',
            when(answers){
                return answers.transactiontype=='fastcash'
            },
        },
        {
            type:'number',
            name:"amount",
            message:'Enter your amount',
            when(answers){
                return answers.transactiontype=='withdrawl'
            },
        },
        {
            type:"number",
            name:'amount',
            message:'Enter you amount',
            when(answers){
                return answers.transactiontype=='deposit'
            },

        },


])
if (answers.userid && answers.userpin){
    const balance:number=7000;
    console.log(balance)
    const enteramount=answers.amount;
    // if (balance+enteramount){
    //     const depositamonut=balance+enteramount;
    //     console.log(`Dposit amount ${depositamonut}`)
    // }
     if (balance>=enteramount){
        const remianingbal=balance-enteramount;
        console.log(`remaing balance is ${remianingbal}`)
    }else{
        console.log("insuificent balance")
    }
}
 