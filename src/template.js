const generatePage = (team) =>
{
    // console.log(team);
    const generateManager = (manager) =>
    {
        return `
        <div class="card employee">
            <div class="card-header text-white bg-primary">
                <h2>${manager.getName()}</h2>
                <h3 class="card-title">${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `
    }
    const generateEngineer = (engineer) =>
    {
        return `
        <div class="card employee">
            <div class="card-header text-white bg-primary">
                <h2>${engineer.getName()}</h2>
                <h3 class="card-title">${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        `
    }
    const generateIntern = (intern) =>
    {
        return `
        <div class="card employee">
            <div class="card-header text-white bg-primary">
            <h2>${intern.getName()}</h2>
            <h3 class="card-title">${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `
    }

    const section = []
    section.push(team.filter(employee => 
        employee.getRole() === 'Manager')
        .map(manager => generateManager(manager)))

        section.push(team.filter(employee =>
            employee.getRole() === 'Engineer')
            .map(engineer => generateEngineer(engineer)).join(''))

        section.push(team.filter(employee =>
            employee.getRole() === 'Intern')
            .map(intern => generateIntern(intern)).join(''))
        
    return section.join('')
}
module.exports = pickedTeam =>
{
    // console.log(pickedTeam);
    return`
    <!DOCTYPE html>
    <html lang='en'>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                    <h1 class="text-center text-white">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row col-12 d-flex justify-content-center">
                ${generatePage(pickedTeam)}
                </div>
            </div>
        </div>
    
    
    </body>
    
    
    </html>`
}