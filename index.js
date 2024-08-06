const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shapes.js');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for you logo:',
        validate: (answer) => answer.length > 3 ? 'Must be three characters or less.' : true
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color (a keyword or hexadecimal number) for the text:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Enter a shape for your logo:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color (a keyword or hexadecimal number) for the shape:'
    }
]

async function createLogo() {
    try {
        const answers = await inquirer.prompt(questions);
        const { text, textColor, shape, shapeColor } = answers;
        
        let newShape;

        switch (shape) {
            case 'circle':
                newShape = new Circle(shapeColor);
                break;
            case 'triangle':
                newShape = new Triangle(shapeColor);
                break;
            case 'square':
                newShape = new Square(shapeColor);
                break;
        }

        const svg = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${newShape.render()}
            <text x="150" y="120" text-anchor="middle" font-family="Arial" font-size="40" fill="${textColor}">${text}</text>
        </svg>
        `;

        fs.writeFileSync('logo.svg', svg);
        console.log('Logo saved');

    } catch (error) {
        console.error(error);
    }
}

createLogo();