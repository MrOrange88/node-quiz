const readline = require('readline');

let questions = [
    {
        question: "Wie heißt du?",
        answer: "Du heißt also:"
    },
    {
        question: "Wie alt bist du?",
        answer: "Du bist also schon:"
    },
    {
        question: "Wie 🙊 bist du?",
        answer: "Du bist also schon:"
    },
    {
        question: "Wie 😅 bist du?",
        answer: "Du bist also schon:"
    },
    {
        question: "Wie 🖕 bist du?",
        answer: "Du bist also schon:"
    }
]

function askSomething(question, answer, done) {
    const rl = readline.createInterface(
        process.stdin, 
        process.stdout
    )
    rl.question(question + " ", (input) => {
        console.log(answer, input)
        rl.close()
        done && done()
    })
}

function nextQuestion(nextIndex = 0) {
    if (nextIndex < questions.length) {
        const q = questions[nextIndex]
        askSomething(q.question, q.answer, function() {
            nextQuestion(nextIndex + 1)
        })
    }
}

nextQuestion()

// TODO kann ich schleifen nutzen? Für die x Fragen die ich habe
// TODO Kann ich die Callback Schreibweise durch etwas ersetzen, das nicht zu Pyramiden führt

// callback schreibweise
// yield generator schreibweise
// promise schreibweise
// async/await


//TODO erstelle 5 fragen auf die geantwortet werden kann
// und gebe die antworten aus!!
//git repository erstellen und pushen!
// JavaScript arbeitet primär in einem EventLoop
// Theads
// iteration
// rekursion

/*
    Was ist ein Algorithmus?

    1. Eine Lösung für ein klar definiertes Problem
    2. Deterministisch - Hat ein vordefiniertes Ende
       Alle Ereignisse eindeutig vorherbestimmt
*/