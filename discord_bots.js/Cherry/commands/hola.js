exports.run = (client, message, Discord, args) => {
    message.channel.send(`:wave::skin-tone-2:`)
        .then(m => {
            m.edit(`Hola, ${message.author.tag.slice(0,-5)} :)`)
        });
}