const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const pageTemplate = require('./src/template')
const employeeList = []
const startApp = () => 
{
    
    addEmployee()
}
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'selcectEmployee',
            message: 'Would you like to add an employee?',
            default: true
        }
        ])
    .then((answers) => {
        if(answers.selcectEmployee)
        {
            pickTeam()
        }
        else
        {
            generatePage()
        }
    }) 
}
    const pickTeam = () =>
    {
        return inquirer.prompt([
            {
                type: 'list',
                name: 'employeeAdd',
                message: 'What type of employee?',
                choices: ['Manager', 'Engineer', 'Intern'],
            },
            {
                type: 'text',
                name: 'employeeName',
                message: 'What is the name of the employee'
            },
            {
                type: 'text',
                name: 'employeeId',
                message: 'What is the employee id number?'
            },
            {
                type: 'text',
                name: 'employeeEmail',
                message: "What is the employee's email address?"
            }
        ]).then((answers) => {
            console.log(answers);
            switch (answers.employeeAdd) {
                case 'Manager':
                    console.log('Manager');
                    managerPick(answers)
                    break;
                case 'Engineer':
                    console.log("Engineer");
                    engineerPick(answers)
                    break
                case 'Intern':
                    console.log('Intern');
                    internPick(answers)
                default:
                    break;
            }
        })
    }
const managerPick = (answers) => 
{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is thier office number'
        }
    ])
    .then((data) => {
        console.log(answers)
        console.log(data);
        const manager = new Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, data.officeNumber)
        employeeList.push(manager)
        console.log(employeeList)
        addEmployee()
    });
}
const engineerPick = (answers) => 
{
    return inquirer.prompt([
        {
            type: 'text',
            name: 'github',
            message: 'What is thier gitHub username?'
        }
    ]).then((data) => 
    {
        const engineer = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, data.github)
        employeeList.push(engineer)
        addEmployee()
    })
}
const internPick = (answers) => 
{
    return inquirer.prompt([
        {
            type: 'text',
            name: 'school',
            message: 'What school did they go to?'
        }
    ]).then((data) =>
    {
        const intern = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, data.school)
        employeeList.push(intern)
        addEmployee()
    })
}
const generatePage = () =>
{
    console.log('Page created');
    console.log(employeeList);
    fs.writeFile('index.html', pageTemplate(employeeList), (err) => 
    {
        if(err)
        {
            console.log(err)
        }
    })
}


startApp()