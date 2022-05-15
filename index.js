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
            type: 'text',
            name: 'managerName',
            message: 'Whats is your managers name for the project?'
        },
        {
            type: 'text',
            name: 'managerID',
            message: "What is the manager's employee ID number?"
        },
        {
            type: 'text',
            name: 'managerEmail',
            message: "What is the manager's email address?"
        },
        {
            type: 'text',
            name: 'managerOfficeNumber',
            message: "What is the manager's office number?"
        },
        // {
        //     type: 'confirm',
        //     name: 'selcectEmployee',
        //     message: 'Would you like to add an employee to your team?',
        //     default: true
        // }
        ])
    .then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber)
        employeeList.push(manager)
        employeeCheck()
    }) 
}
const employeeCheck = () =>
{
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'selcectEmployee',
            message: 'Would you like to add an employee to your team?',
            default: true
        }
    ]).then((answers) =>
    {
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
                choices: ['Engineer', 'Intern'],
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
        employeeCheck()
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
        employeeCheck()
    })
}
const generatePage = () =>
{
    console.log('Page created');
    fs.writeFile('index.html', pageTemplate(employeeList), (err) => 
    {
        if(err)
        {
            console.log(err)
        }
    })
}


startApp()