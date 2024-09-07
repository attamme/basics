const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Sisestage enda vanus: `, vanus => {
    rl.question(`Sisestage enda sugu (M, m voi N, n): `, sugu => {
        rl.question(`Sisestage treeningu tuup (1, 2 voi 3): `, treening => {
            let maxpulss
            if (sugu == "M" || sugu == "m"){
                maxpulss = 220 - vanus
            }
            if (sugu == "N" || sugu == "n"){
                maxpulss = 206 - vanus * 0.88
            }
            let min
            let max
            if (treening == '1'){
                min = 0.5 * maxpulss
                max = 0.7 * maxpulss
            }
            else if (treening == '2'){
                min = 0.7 * maxpulss
                max = 0.8 * maxpulss
            }
            if (treening == '3'){
                min = 0.8 * maxpulss
                max = 0.87 * maxpulss
            }
                    
            console.log(`Pulsisagedus peaks olema vahemikus ` + Math.round(min) + ' kuni ' + Math.round(max) + '.');
            
            rl.close();
        })
    })
});