exports.renderPdfContent = (data, favColor, stars) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${data.name}</title>
    <style>
        * { box-sizing: border-box; font-family:Helvetica, Arial, sans-serif }
        h1,h2,h3,h4,h5,h6 {
            padding: 0;
            margin: 0;
        }
        body {
            margin:0;
            padding:0;
        }
        section {
            height: 11in;
            width: 8.5in;
            overflow:hidden;
            /* border: 1px solid #000; */
        }
        header {
            position:relative;
            height: 30%;
            background-color: #f00;
            padding: 20px;
        }
        header > img {
            position:relative;
            float:left;
            top: 50%;
            transform: translateY(-50%);
            left:3%;
            width: 30%;
            height: auto;
            border-radius: 50%;
        }
        header > .links {
            float:left;
            position:relative;
            top: 50%;
            transform: translateY(-50%);
            left: 6%;
            width: 61%;
        }
        header td {
            vertical-align: bottom;
        }

        hr {
            background-color: #fff;
            border:0;
            height: 1px;
        }

        .Pink {
            background-color: #d6336c;
            border-color: #d6336c;
            color: #fff;
        }
        .Red {
            background-color: #e03131;
            border-color: #e03131;
            color: #fff;
        }
        .Blue {
            background-color: #1c7ed6;
            border-color: #1c7ed6;
            color: #fff;
        }
        .Green {
            background-color: #37b24d;
            border-color: #37b24d;
            color: #fff;
        } 
        .Purple {
            background-color: #7048e8;
            border-color: #7048e8;
            color: #fff;
        }   
        .Orange {
            background-color: #f76707;
            border-color: #f76707;
            color: #fff;
        }
        header h1 {
            font-size: 40px;
        }
        .bio, .stats {
            width: 75%;
            margin: 0 auto;
            font-size: 20px;
        }
        .bio {
            padding: 50px 0;
            text-align:center;
        }
        .header-link {
            font-size: 18px;
            text-decoration: none;
            color: inherit;
        }
        .header-link:not(:last-of-type) {
            padding-right: 15px;
            margin-right: 15px;
        }
        .header-link img {
            height: 16px;
            width: auto;
            margin-right: 5px;
            margin-top: px;
            position: relative;
            top: 1px;
        }
        .stats table {
            width: 100%;
        }
        .stats td {
            box-sizing: border-box;
            width: 50%;
            padding: 20px;
            text-align:center
        }
    </style>
</head>
<body>

    <section>
        <header class="${favColor}">
            <img src="${data.avatar_url}">
            <div class="links">
                <h1>${data.name}</h1>
                <hr/>
                <a href="https://google.com/maps/place/${data.location.split(' ').join('+')}" class="header-link"><img src="${__dirname}/images/location-arrow-solid.svg"/>${data.location}</a>
                <a href="${data.html_url}" class="header-link"><img src="${__dirname}/images/github-brands.svg"/>GitHub</a>
                <a href="${data.blog}" class="header-link"><img src="${__dirname}/images/rss-solid.svg"/>Blog</a>
                    </tr>
                </table>
            </div>
        </header>
        <div class="bio">
            <p>${data.bio}</p>
        </div>
        <div class="stats">
            <table>
                <tr>
                    <td class="${favColor}">
                        <h3><strong>Public Repositories</strong></h3>
                        <p>${data.public_repos}</p>
                    </td>
                    <td class="${favColor}">
                        <h3><strong>Followers</strong></h3>
                        <p>${data.followers}</p>
                    </td>
                </tr>
                <tr>
                    <td class="${favColor}">
                        <h3><strong>Github Stars</strong></h3>
                        <p>${stars.length}</p>
                    </td>
                    <td class="${favColor}">
                        <h3><strong>Following</strong></h3>
                        <p>${data.following}</p>
                    </td>
                </tr>
            </table>
        </div>
    </section>
    
</body>
</html>`; 

}