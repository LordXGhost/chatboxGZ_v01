var botui = new BotUI('GZ');
let toggle = document.getElementById("toggle");
let chatbotGZ = document.getElementById("GZ");

//Ajout bouton pour afficher/masquer le chatbot
toggle.addEventListener("click", () => {
    if(getComputedStyle(chatbotGZ).display !== "none"){
        chatbotGZ.style.display = "none";
    } else {
        chatbotGZ.style.display = "block";
    }
});

function closeChatbot () {
document.getElementById("GZ").style.display = "none";
}


botui.message.add({
    content: 'Salut, je suis le bot de Génération Zhéros',
});
botui.message.add({
    loading: true,
    delay: 1000,
    content: "Je peux te donner plus d'informations concernant Génération Zhéros, il te suffit de cliquer sur le thème de ton choix pour discuter avec moi"
}).then(() => botui.action.button({
    delay: 1000,
    action: [
        {
            text: "Génération Zhéros c'est quoi ?",
            value: "what"
        },
        {
            text: "Comment ca fonctionne ?",
            value: "how"
        },
    ]
})).then(function (res) {
    if (res.value === "what") {
        botui.message.add({
            loading: true,
            delay: 1000,
            content: 'GZ est une application sur le développement durable'
        })
    } else {
        botui.message.add({
            loading: true,
            delay: 1000,
            content: "C'est une application simple a utiliser, il te suffit de t'inscrire"
        })
    }
}).then(() => botui.action.button({
    delay: 1000,
    action: [
        {
            text: "En savoir plus sur son fonctionnement ?",
            value: "how"
        },
        {
            text: "Ou trouver l'application ?",
            value: "where"
        }
    ]
})).then(function (res) {
    if (res.value === "how") {
        botui.message.add({
            loading: true,
            delay: 1000,
            content: "Ce bouton donne plus de détails sur le fonctionnement de l'application"
        })
    } else {
        botui.message.add({
            loading: true,
            delay: 1000,
            content: "Sur les stores Android et Ios!"
        })
    }
}).then(() => botui.message.add({
    loading: true,
    delay: 1000,
    content: "Si tu souhaites continuer a me parler, je vais te poser quelques questions sur tes habitudes :)"
}))
    .then(() => botui.message.add({
        loading: true,
        delay: 1000,
        content: "Es-tu flexitarien ou végétarien ?"
    }))
    .then(() => botui.action.button({
        delay: 1000,
        action: [
            {
                text: "Je suis flexitarien",
                value: "choice1"
            },
            {
                text: "Je suis végétarien",
                value: "choice2"
            },
        ]
    })).then(function (res) {
    if (res.value === "choice1") {
        botui.message.bot({
            loading: true,
            delay: 1000,
            content: `Vous etes flexitarien, combien de fois par semaine mangez-vous de la viande ?`,
            value: "flexitarien"
        })
    } else {
        botui.message.bot({
            loading: true,
            delay: 1000,
            content: "Bravo, c'est une belle étape vers le développement durable",
            value: "vegetarian"
        })
    }
}).then(function (res) {
    if (res.value === "flexitarien") {
        botui.action.button({
            delay: 1000,
            action: [
                {
                    text: "2 / semaine",
                    value: "2"
                },
                {
                    text: "1 / semaine",
                    value: "1"
                },
            ]
        }).then(() => botui.message.add({
            loading: true,
            delay: 1000,
            content: `Ok vous mangez de la viande ${res.text}!`
        }))
    }
});
