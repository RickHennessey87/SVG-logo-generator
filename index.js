const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for you logo:',
        validate: (answer) => answer.length > 3 ? 'Must be three characters or less.' : true
    }
]

async function createLogo() {
    try {
        const answers = await inquirer.prompt(questions);
        const text = answers.text
        const svg = `
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="40" font-family="Arial" font-size="40" fill="black">${text}</text>
        </svg>
        `;

        fs.writeFileSync('logo.svg', svg);
        
        console.log('Logo saved');
    } catch (error) {
        console.error(error);
    }
}

createLogo();