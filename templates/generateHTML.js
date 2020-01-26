const generateHTML = function(teamstr) {
    console.log("Inside gen html");
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      
      <title>Team Generator</title>
        <style>
        body {
             margin: 0%;
             height: 100vh;
        }
        .header {
             background-color: rgb(206, 194, 194);
             border: solid black;
             text-align: center;
             font-size: 30px;
             font: rgb(0, 30, 128);
             font-family: 'Times New Roman', sans-serif; 
        }
        .container-body {
             display: flex;
             justify-content: space-evenly;
        }
        .card {
             background-color: rgba(0, 30, 128, 0.966);
             font: white;
             margin-top: 4%;
             border: solid black;
             font-size: x-large;
             font-family: 'Times New Roman', sans-serif;
        }
        .card-header{
             margin: 10%;
             color: white;
        }
        .card-body{
             margin: 5%;
             color: white;
        }
        </style>
      </head>
    
      <body>
        <div class=header>
            <h1>Here's Your Team!</h1>
        </div>
        <div class="container-body">
           ${teamstr} 
        </div>
      </body>
    
      </html>`;
  };
  
  const generateCard = function(arr) {
    
    let roleInfo;
  
    if (arr.title === "Manager") {
      roleInfo = `Office Number: ${arr.officeNumber}`;
    } else if (arr.title === "Engineer") {
      roleInfo = `Github Username: ${arr.github}`;
    } else if (arr.title === "Intern") {
      roleInfo = `School: ${arr.school}`;
    }
  
    return `<div class="card">
  <div class="card-header">
  <h2>${arr.name}</h2>  
  <h2>${arr.title}</h2>
  <hr>
  </div>
  <div class="card-body">
  <ul>
      <li>ID: ${arr.id}</li>
      <li>Email: ${arr.email}</li>
      <li>${roleInfo} </li>
  </ul>
  </div>
  </div>`;
  };
  
  exports.generateHTML = generateHTML;
  exports.generateCard = generateCard;