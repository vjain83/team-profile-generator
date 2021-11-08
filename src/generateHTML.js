
const generateManager = function (manager) {
  return ` 
  <div class="col-lg-4 col-sm-12 mt-4 mb-4">
    <div class="card">
      <div class="card-header"style ="background-color: rgb(0, 225, 255)";>
      <h2 class="text-left" style = "font-size:20px">${manager.getName()}</h2>
      <p style="font-size:20px"><i class='fab fa-black-tie' style='font-size:24px'> Manager</i></p>
      </div>
        <div class="card-body">
          <p>Id : ${manager.getId()}</p>
          <p>Email address : <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
          <p>Office Number : ${manager.getOfficeNumber()}</p>
        </div>
    </div>
  </div>`


}

const generateEngineer = function (engineer) {
  return `
<div class="col-lg-4 col-sm-12 mt-4 mb-4">
<div class="card">
  <div class="card-header"style ="background-color: rgb(0, 225, 255)";>
  <h2 class="text-left" style ="font-size:20px">${engineer.getName()}</h2>
  <p style="font-size:20px"><i class='fas fa-glasses' style='font-size:24px'></i> Engineer</p></div>
  <div class="card-body">
      <p>Id : ${engineer.getId()}</p>
      <p>Email address : <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
      <p>Github : <a href="https://github.com/${engineer.getGithub()}">Github Profile</a></p>
    </div>
  </div>
</div>`
}

const generateIntern = function (intern) {
  return `
    <div class="col-lg-4 col-sm-12 mt-4 mb-4">
        <div class="card">
               <div class="card-header"style ="background-color: rgb(0, 225, 255)";>
               <h2 class="text-left" style = "font-size:20px">${intern.getName()}</h2>
               <p style="font-size:20px"><i class='fas fa-graduation-cap' style='font-size:24px'></i> Intern</p></div>
               <div class="card-body">
                  <p>Id : ${intern.getId()}</p>
                  <p>Email address : <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                  <p>School : ${intern.getSchool()}</p>
                  </div>
              
       </div>
    </div>`
}

// generate html page 
generateHTML = (data) => {

  // array for html page 
  pageArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();


    // call manager function
    if (role === 'Manager') {
      const managerCard = generateManager(employee);

      pageArray.push(managerCard);
    }

    // call engineer function
    if (role === 'Engineer') {
      const engineerCard = generateEngineer(employee);

      pageArray.push(engineerCard);
    }

    // call intern function 
    if (role === 'Intern') {
      const internCard = generateIntern(employee);

      pageArray.push(internCard);
    }

  }

  // joining strings 
  const employeeCards = pageArray.join('')

  // return to generated page
  const teamProfile = generateTeamPage(employeeCards);
  return teamProfile;

}

const generateTeamPage = function (employeeCards) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Profile Generator</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />

    <title>Team-Profile-Generator</title>
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="text-center w-100 p-2 mb" id="navbar" style ="background-color: rgb(0, 225, 255)";>
      <h1>Team Data Sheet</h1>
    </header>
    <main>
      <div class="container align-content-center bg-white">
        <div class="row mt-4 justify-content-center">
          ${employeeCards}
        </div>
      </div>
    </main>
  </body>
</html>
`
}

module.exports = generateHTML;