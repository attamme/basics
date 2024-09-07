const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Sisestage ainepunktide arv: `, ainepunkt => {
    rl.question(`Sisestage nadala arv: `, nadal => {
        let tulemus = ainepunkt * 26 / nadal
        console.log(`${Math.round(tulemus)}`);
        rl.close();
    })
});