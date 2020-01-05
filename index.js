const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
const html = require('./html.js');
const electron = require('electron-html-to');

var sendToPDF = electron({
    converterPath: electron.converters.PDF,
    allowLocalFilesAccess: true
});

var favColor;
var userName;
var pdfContent;

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
        choices: ['Pink','Red','Blue','Green','Purple','Orange']
    }
]).then(answers => {
    userName = answers.username;
    favColor = answers.favColor;
    fetchProfile();
});

function fetchProfile() {
    var query = "https://api.github.com/users/"+userName;
    axios.get(query).then(response => {
        var userData = response.data;
        query += "/starred"; 
        axios.get(query).then(starredResponse => {
            pdfContent = html.renderPdfContent(userData, favColor, starredResponse.data);
            renderPDF();
        });
    });
}

function renderPDF() {
    console.log('Rendering PDF...');
    sendToPDF({
        html: pdfContent,
        pdf: {
            pageSize: 'Letter',
            printBackground: true
        }
    }, (err, result) => {
        if (err) {
            return console.log(err);
        }
        fs.mkdir('profiles', () => result.stream.pipe(fs.createWriteStream('profiles/'+userName+'.pdf')));
       
        console.log('Success!');
        sendToPDF.kill();
    });
}