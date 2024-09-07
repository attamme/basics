const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Kas soovite istekoha valida ("ise") voi loosida ("loos")?: `, valimine => {
    if (valimine == "ise"){
        rl.question(`Kas soovite istuda akne aares ("aken") voi mitte ("muu")?: `, istmeValik => {
            if (istmeValik == "muu"){
                console.log(`Valisite ise. Vahekaigukoht.`);
            }
            else {
                console.log(`Valisite ise. Aknakoht.`);
            }
        rl.close();
        })
    }
    else {
        let iste = Math.floor(Math.random()*3)
        if (iste < 2){
            console.log(`Istekoht loositi. Aknakoht.`);
        }
        else {
            console.log(`Istekoht loositi. Vahekaigukoht.`);
        } 
    rl.close();
    }
});