const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Sisestage kirja suurus: `, suurus => {
    rl.question(`Sisestage kirja teema pealkiri: `, pealkiri => {
        rl.question(`Kas kirjaga on kaasas fail?: `, fail => {
            if ( pealkiri == "" || fail == "jah" && suurus > 1){
                console.log(`Kiri on spamm.`)
            }
            else {
                console.log(`Kiri ei ole spamm.`)
            }
        rl.close();
        })
    })
});