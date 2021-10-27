const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username? (Required)',
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else{
                    console.log("Please enter your GitHub username!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if(emailInput){
                    return true;
                } else{
                    console.log('Please enter your email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project. (Required)',
            validate: description => {
                if(description){
                    return true;
                } else {
                    console.log('Please enter a description of your project!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide a step-by-step instructions on how to run your project. (Required)',
            validate: installation => {
                if(installation){
                    return true;
                } else {
                    console.log('Please enter installation instructions!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide some instructions and examples for use. (Required)',
            validate: usage => {
                if(usage){
                    return true;
                } else{
                    console.log('Please enter your instructions for use!')
                }
            }
        },
        {
            type: "confirm",
            name: "confirmContribution",
            message:
              'Would you like to allow others to contribute to your project?',
            default: true,
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide guidelines on how to contribute to your project. (Required)',
            when: ({ confirmContribution }) => {
                if (confirmContribution) {
                  return true;
                } else {
                  return false;
                }
              },
            validate: contribution => {
                if(contribution){
                    return true;
                } else{
                    console.log("Please enter some guidelines for contribution!")
                }
            }  
        },
        {
            type: "input",
            name: "test",
            message: 'Enter instructions on how to run tests on your project. (Required)',
            validate: test => {
                if(test){
                    return true;
                } else{
                    console.log("Please explain how to run tests!")
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which of the following licenses will you use for your project?',
            choices: [
                'apache',
                'mit',
                'gnu',
                'no license'
            ]
        }
        
    ];

    // TODO: Create a function to write README file
    const writeFile = fileContent => {
        return new Promise((resolve, reject) => {
            fs.writeFile('./dist/README.md', fileContent, err => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve({
                    ok: true,
                    message: 'File created!'
                });
            });
        });
    };
    
    // TODO: Create a function to initialize app
    function init() {
        return inquirer.prompt(questions)
        .then(readMeData => {
            return readMeData;
        })
    };
    
    // Function call to initialize app
    init()
        .then(readMeData => {
            console.log(readMeData);
            return generateMarkdown(readMeData);
        })
        .then(pageMD => {
            return writeFile(pageMD);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse.message);
        })
        .catch(err => {
            console.log(err);
        })