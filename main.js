var botui = new BotUI('GZ');

botui.message.add({
    content: 'Hello, je suis le bot GZ',
});
botui.message.add({
    loading: true,
    delay: 1000,
    content: "Je peux te donner plus d'informations concernant Génération Zhéros, il te suffit de cliquer pour discuter avec moi"
}).then(() => botui.action.button({
    delay: 1000,
    action: [
        {
            id: 1,
            text: "GZ c'est quoi ?",
            value: "Go1"
        }]
})).then(() => botui.message.add({
    loading: true,
    delay: 1000,
    content: 'GZ est une application sur le développement durable'
}))
    .then(() => botui.action.button({
        delay: 1000,
        action: [
            {
                id: 2,
                text: "Comment ca fonctionne ?",
                value: "Go2"
            }
        ]
    })).then(() => botui.message.add({
    loading: true,
    delay: 1000,
    content: "C'est une application simple a utiliser, il te suffit de t'inscrire"
}))
    .then(() => botui.action.button({
        delay: 1000,
        action: [
            {
                id: 3,
                text: "Ou trouver l'application ?",
                value: "Go3"
            }
        ]
    })).then(() => botui.message.add({
    loading: true,
    delay: 1000,
    content: 'Sur les stores Android et Ios!'
}))
    .then(() => botui.message.add({
        loading: true,
        delay: 1000,
        content: "Etes-vous flexitarien ou végétarien ?"
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
            value: "végétarien"
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
