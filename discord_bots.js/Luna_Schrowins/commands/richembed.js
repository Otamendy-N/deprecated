exports.run = (client, message, args, Discord) => {
    const embed = {
        "title": "title ~~(did you know you can have markdown here too?)~~",

        "color": 12118500,
        "timestamp": "2019-01-21T00:52:36.734Z",
        "footer": {
        "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
        "text": "footer text"
        },
        "thumbnail": {
        "url": "https://cdn.discordapp.com/embed/avatars/0.png"
        },
        "image": {
        "url": "https://cdn.discordapp.com/embed/avatars/0.png"
        },
        "author": {
        "name": "author name",
        "url": "https://discordapp.com",
        "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
        },
        "fields": [
        {
            "name": "🤔",
            "value": "some of these properties have certain limits..."
        },
        {
            "name": "😱",
            "value": "try exceeding some of them!"
        },
        {
            "name": "🙄",
            "value": "an informative error should show up, and this view will remain as-is until all issues are fixed"
        },
        {
            "name": "<:thonkang:219069250692841473>",
            "value": "are inline fields",
            "inline": true
        }]};
    message.channel.send({ embed });
}