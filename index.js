const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');

var favColor;
var userName;

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
    userName = answers.username;
    favColor = answers.favColor;
    fetchProfile();
});

function fetchProfile() {
    var query = "https://api.github.com/users/"+userName;
    axios.get(query).then(response => {
        console.log(response);
    });
}