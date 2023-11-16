const readline = require('readline');

let rl = readline.createInterface(
    process.stdin, process.stdout);

let eingabe = process.stdin;
let ausgabe = process.stdout;



let question = [
    {
        question: ("Wie heißt du?" + eingabe)
        answer: ("Du heißt also:" + ausgabe)
    },
    {
        question: ("Wie alt bist du?" + eingabe)
        answer: ("Du bist also schon:" + ausgabe)

    }
];

function displayQuestion() {
    question = rl;

}

rl.question('What is your Name? ', (name) => {
    console.log('Your Name is: ' + name)
});
rl.question('Wie alt bist du? ', (age) => {
    console.log('Ach du bist also: ' + age)
});















//TODO erstelle 5 fragen auf die geantwortet werden kann
// und gebe die antworten aus!!
//git repository erstellen und pushen!