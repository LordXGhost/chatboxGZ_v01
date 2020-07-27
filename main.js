document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
        }
    });
});

function output(input) {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
        // .replace(/ m'inscrire/g, "");
        // .replace(/comment ca va /g, "")
        // .replace(/cest quoi GZ/g, "")
        // .replace(/fonctionne/g, "")
        // .replace(/ merci/g, "");

//compare arrays
//then search keyword
//then random alternative

    if (compare(trigger, reply, text)) {
        product = compare(trigger, reply, text);
        // } else if (text.match(/robot/gi)) {
        //     product = robot[Math.floor(Math.random() * robot.length)];
    } else {
        product = alternative[Math.floor(Math.random() * alternative.length)];
    }

    //update DOM
    addChat(input, product);

    document.getElementById("chatbot").innerHTML = product;
    speak(product);

    //clear input value
    document.getElementById("input").value = "";
}

function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
        for (let y = 0; y < replyArray.length; y++) {
            if (triggerArray[x][y] === string) {
                items = replyArray[x];
                item = items[Math.floor(Math.random() * items.length)];
            }
        }
    }
    return item;
}

function addChat(input, product) {
    const mainDiv = document.getElementById("main");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.innerHTML = `You: <span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);

    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.innerHTML = `Chatbot Génération Zhéros: <span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    speak(product);
}

function speak(string) {

}

const trigger = [
//0
    ["bonjour", "salut", "hello"],
//1
    ["ca va"],
//2
    ["quoi", "fonctionne"],
//3
    ["cool"],
//4
    ["apporte", "pourquoi"],
//5
    ["inscrire"],
//6
    ["Merci"],
//7
    ["Au revoir", "ciao"]
];

const reply = [
//0
    ["Hello!", "Bonjour!", "Hey!", "Salut!"],
//1
    [
        "Je vais bien... merci",
    ],
//2
    [
        "GZ est une application sur le développement durable",
        "C'est une application simple a utiliser, il te suffit de t'inscrire"
    ],
//3
    ["Content de l'apprendre"],
//4
    ["Devenir un Zhéros!", "Tu pourras améliorer ton impact environnemental"],
//5
    ["Sur les stores Android et Ios!"],
//6
    ["De rien", "Pas de probleme"],
//7
    ["Au revoir", "A bientot"],
];

const alternative = [
    "Je n'ai pas compris",
    "J'écoute...",
];
