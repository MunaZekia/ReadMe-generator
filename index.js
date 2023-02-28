const inquirer = require("inquirer")
const fs= require("fs")
const path=require("path")
const generateMarkdown= require("./utils/generateMarkdown")
const prompt = inquirer.createPromptModule();
prompt([
    {
       type: "input", 
       name: "title",
       message: "enter project title"
    },
    {
        type: "input", 
        name: "description",
        message: "enter project description"
     },
     {
        type: "input", 
        name: "usage",
        message: "enter user instructions"
     },
     {
        type: "input", 
        name: "installation",
        message: "How do you install you program?"
     },
     {
        type: "list", 
        name: "license",
        message: "select project license", 
        choices: ['MIT','BSD','GPL','None']
     },{
      type: "input",
      name: "github",
      message: "What is your GitHub username?"
     },{
      type: "input",
      name: "email",
      message: "What is your email address?"

     }


]) .then(answer => {
    console.log(answer)
    fs.writeFile(path.join(__dirname,"/examples/","README.md"),generateMarkdown(answer),(error,data)=>{
        if (error)throw error; 
        console.log(data)
    })
})



