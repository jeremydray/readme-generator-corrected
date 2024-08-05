// TODO: Include packages needed for this application

const generateReadme = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions =
    [
        {
            type: 'input',
            message: 'What is the title of the project? ',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter instructions on how to install the application: ',
            name: 'instructions',
        },
        {
            type: 'input',
            message: 'Enter a description of how to use the application: ',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter guidelines of how to contribute to the application: ',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Enter instructions of how to test the application: ',
            name: 'testing',
        },
        {
            type: 'list',
            message: 'Choose what license will be used:',
            choices: ['MIT', 'Apache License 2.0', 'GNU General Public License v3', 'BSD 3-Clause License', 'Mozilla Public License 2.0'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'Enter you GitHub username: ',
            name: 'githubName',
        },
        {
            type: 'input',
            message: 'Enter your email address for follow up questions: ',
            name: 'email',
        }
    ]

// TODO: Create a function to initialize app
// TODO: Create a function to write README file

function init() {
    inquirer
        .prompt(questions)
        .then(inputs => {

            const readmeContent = generateReadme(inputs);
            fs.writeFile('README.md', readmeContent, (err) => {
                err ? console.error(err) : console.log('README created!')
            })
        });
}

// Function call to initialize app
init();
