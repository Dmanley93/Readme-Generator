// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// # Your Project Title
// ## Description
// ## Installation
// ## Usage 
// ## Credits
// ## License

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What would you like your Project Title to be called?',
      name: 'title',
    },
    {
      type: 'checkbox',
      message: 'Please select your badge(s)',
      name: 'badge',
      choices: ["HTML", "Javascript", "CSS", 'Node'],
    },
    {
      type: 'checkbox',
      message: 'What do you need to install to use this application?',
      name: 'install',
      choices: ["fs", "inquirer", "both"]
    },
    {
      type: 'input',
      message: 'How does someone use this app?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Who is created with helping with this project?',
      name: 'credit',
    },
    {
      type: 'checkbox',
      message: 'Choose your license.',
      name: 'license',
      choices: ["GNU", "MIT", "Apache"]
    },
  ])
  .then((response) => {
    const tableOfContents = 
    `[Installation](#installation)
     [Usage](#usage)
     [License](#license)
     [Contributing](#contributing)
     [Tests](#tests)
     [Questions](#questions)`;

     const licenses = [
       {name: "MIT",
       shield:"[![License:MIT](https://img.shields.io/badge/license-MIT-blue)]",
       name: "GNU",
       shield:"[![License:GNU](https://img.shields.io/badge/license-GNU-green)]",
       name: "Apache",
       shield:"[![License:Apache](https://img.shields.io/badge/license-Apache-red)]",}
     ]
     licenses.forEach(getLicense);
     function getLicense(item, index) {
       
     }
   console.log(response.license)
        fs.writeFile('log.txt', responseText, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
