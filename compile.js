const path = require('path');
const fs = require('fs');
const solc = require('solc');

const registerPath = path.resolve(__dirname, 'contracts', 'register.sol');
const source = fs.readFileSync(registerPath, 'utf8');

const input = {
    language: 'Solidity',
    sources: {
        'register.sol': {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};

// console.log(JSON.parse(solc.compile(JSON.stringify(input))).contracts['register.sol'])

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts['register.sol'].Register;