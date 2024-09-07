const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Sisestage ohutemperatuur: `, temp => {

    if (temp > 4.0) {
        console.log(`Ei ole jaatumise ohtu.`);
    } 
    else
        console.log(`On jaatumise oht.`);
        rl.close();
});