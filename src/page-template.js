
const generateEmployeeCards = (...teamData) => {
    return `
        ${teamData
            .filter((employee) => {
                if(employee.getRole() === 'Manager'){
                    return true;
                }
                return false;
            })
            .map(manager => {
            return`
            <div class="row align-items-center">
            <div class="card bg-info text-dark shadow-lg p-3 mb-5 bg-body rounded border" style="width: 18rem;">
            <div class="card-body bg-light border border-5">
              <h3 class="card-title">${manager.getName()}</h3>
              <div>
                <b><h5>${manager.getRole()}</h5></b>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16">
                <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z"/>
              </svg>
            </div>
            <ul class="list-group list-group-flush  text-dark">
              <li class="list-group-item rounded-pill">ID: ${manager.getId()}</li>
              <li class="list-group-item rounded-pill">Email: <a href="mailto:${manager.getEmail()}" class="card-link">${manager.getEmail()}</a></li>
              <li class="list-group-item rounded-pill">Office Number: ${manager.officeNumber}</li>
            </ul>
          </div>
          </div>
        `;
        })}

        ${teamData
            .filter((employee) => {
                if(employee.getRole() === 'Engineer'){
                    return true;
                }
                return false;
            })
            .map(engineer => {
            return`
            <div class="row align-items-center">
            <div class="card bg-info text-dark shadow-lg p-3 mb-5 bg-body rounded border" style="width: 18rem;">
            <div class="card-body bg-light border border-5">
              <h3 class="card-title">${engineer.getName()}</h3>
              <div>
                <b><h5>${engineer.getRole()}</h5></b>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cpu-fill" viewBox="0 0 16 16">
                <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z"/>
              </svg>
            </div>
            <ul class="list-group list-group-flush  text-dark">
              <li class="list-group-item rounded-pill">ID: ${engineer.getId()}</li>
              <li class="list-group-item rounded-pill">Email: <a href="mailto:${engineer.getEmail()}" class="card-link">${engineer.getEmail()}</a></li>
              <li class="list-group-item rounded-pill">Github: <a href="https://github.com/${engineer.getGithub()}" class="card-link">${engineer.getGithub()}</a></li>
            </ul>
          </div>
          </div>
        `;
        }).join('')}

        ${teamData
            .filter((employee) => {
                if(employee.getRole() === 'Intern'){
                    return true;
                }
            })
            .map(intern => {
            return`
            <div class="row align-items-center">
            <div class="card bg-info text-dark shadow-lg p-3 mb-5 bg-body rounded border" style="width: 18rem;">
            <div class="card-body bg-light border border-5">
              <h3 class="card-title">${intern.getName()}</h3>
              <div>
                <b><h5>${intern.getRole()}</h5></b>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
              </svg>
               
            </div>
            <ul class="list-group list-group-flush  text-dark">
            <li class="list-group-item rounded-pill">ID: ${intern.getId()}</li>
            <li class="list-group-item rounded-pill">Email: <a href="mailto:${intern.getEmail()}" class="card-link">${intern.getEmail()}</a></li>
            <li class="list-group-item rounded-pill">School: ${intern.getSchool()}</li>
            </ul>
          </div>
          </div>
        `;
        }).join('')}
    `;
};

module.exports = (...teamData) => {

    //const { name, id, email, officeNumber } = teamData;
    console.log(teamData);

    //return generated webpage with Team information collected from inquirer prompts (in templateData) interpolated
    return`
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My TechTeam</title>
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <nav class="navbar navbar-dark bg-info rounded-pill">
            <div class="container">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"/>
                </svg>
                <h1>My TechTeam</h1>
            </div>
        </nav>

        <main>
            <div class="container">
            ${generateEmployeeCards(...teamData)}
            </div>
        </main>

        <!--Bootstrap plugins-->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <body>
    </html>`;
};