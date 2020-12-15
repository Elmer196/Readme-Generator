const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = [
    {
        type: "input",
        name: 'projectTitle',
        message: "What is the title of the project?",
    },

    {
        type: "input",
        name: "projectDescription",
        message: "Briefly describe your project",
    },

    {
        type: "input",
        name: "projectInstallation",
        message: "Give an explanation of the installation process, if any",
    },

    {
        type: "input",
        name: "projectUsage",
        message: "What is the use of this project?",
    },

    {
        type: "input",
        name: "projectContribution",
        message: "Are there any guidlines to contribute to the project?",
    },

    {
        type: "input",
        name: "projectTest",
        message: "What are the testing instructions?",
    },

    {
        type: "list",
        name: "projectLicense",
        message: "Pick the license to be used on this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },

    {
        type: "input",
        name: "gitUser",
        message: "What is your GitHub username?",
    },

    {
        type: "input",
        name: "projectEmail",
        message: "What is your email address?",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("README.md file has been created")
    });
}

const writeFileAsync = util.promisify(writeToFile);

// function to initialize program
async function init() {
    try{
        const responses = await inquirer.prompt(questions);
        console.log("Your responses: ", responses);
        const generateReadMe = generateMarkdown(responses);
        console.log(generateReadMe);

        await writeFileAsync('README.md', generateReadMe);
    }
    catch (error) {
        console.log(error);
    }

}

// function call to initialize program
init();
