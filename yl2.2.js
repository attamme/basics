const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Sisestage Leedu perenimi: `, pnimi => {
    if (pnimi.slice(-2) =="ne")
        console.log(`Abielus`);
    else if (pnimi.slice(-2) =="te")
        console.log(`Vallaline`);
    else if (pnimi.slice(-1) =="e")
        console.log(`Maaramata`);
    else
        console.log(`Pole leedulanna nimi`)
        rl.close();
});