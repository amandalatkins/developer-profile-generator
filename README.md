# Developer Profile Generator

## Summary
This application prompts its user to enter a GitHub username and select a color. It then takes these inputs to generate a custom PDF of that GitHub user's profile with the selected color as the background.

## Prerequisites
* [NodeJS](https://nodejs.org/)

## Installing

Clone the repository to your local development environment.

```
git clone https://github.com/amandalatkins/developer-profile-generator.git
```

Navigate to the developer-profile-generator folder using the command prompt.

Run `npm install` to install all dependencies.

## Using the Application

```
node index.js
```

### Preview:
![Application Preview](images/demo.gif)

## Code Snippets

The following code snippet shows how this application queries the GitHub API.

```javascript
// Fetch the GitHub profile and stars data
function fetchProfile() {
    // query for the profile data
    var query = "https://api.github.com/users/"+userName;

    // run axios to get the profile data
    axios.get(query).then(response => {
        // store the profile data
        var userData = response.data;
        // add to the existing query url to get the stars api response
        query += "/starred"; 

        // run axious to get the stars data
        axios.get(query).then(starredResponse => {
            // run the function from html.js and supply it with all of our data. save the returned html string literal in global pdfContent variable
            pdfContent = html.renderPdfContent(userData, favColor, starredResponse.data);
            renderPDF();
        });
    });
}
```

The following code snippet shows how this application renders the generated content to an actual PDF file.

```javascript
// This function renders the PDF using electron-html-to
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

        // Make 'profiles' directory if it doesn't exist already. Then write a new pdf file with our pdfContent using electron-html-to
        fs.mkdir('profiles', () => result.stream.pipe(fs.createWriteStream('profiles/'+userName+'.pdf')));
       
        console.log('Success!');
        sendToPDF.kill();
    });
}
```

## Built With
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [NodeJS](https://nodejs.org/)
* Node Packages:
    * [Axios](https://www.npmjs.com/package/axios)
    * [Inquirer](https://www.npmjs.com/package/inquirer)
    * [Electron](https://www.npmjs.com/package/electron)
    * [Electron HTML To](https://www.npmjs.com/package/electron-html-to)

## Authors
Amanda Atkins
* [Portfolio](https://digitalrainstorm.com/)
* [GitHub](https://github.com/amandalatkins)
* [LinkedIn](https://www.linkedin.com/in/amandalatkins)

## License
This project is licensed under the ISC License.