const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Sisestage oma nimi: `, nimi => {
    rl.question(`Sisestage lubatud kiirus (km/h): `, lubatudKiirus => {
        rl.question(`Sisestage tegelik kiirus (km/h): `, tegelikKiirus => {
            //arvutan trahvi
            let trahv = (tegelikKiirus - lubatudKiirus) * 3
            //jalgin et trahv ei uletaks 190
            trahv = Math.min(trahv, 190);
            console.log(`${nimi}, kiiruse uletamise eest on teie trahv ${trahv} eurot.`);
            rl.close();
        })
    })
});