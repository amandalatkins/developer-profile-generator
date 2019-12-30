const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'Enter a Github username: '
    },
    {
        type: 'list',
        name: 'favColor',
        message: 'What is your favorite color?',
        choices: ['Pink','Red','Blue','Green','Purple','Orange','Yellow']
    }
]).then(answers => {
    console.log(answers);
});