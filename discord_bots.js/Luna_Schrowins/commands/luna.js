exports.run = (client, message, args, Discord) => {
    let texto = args.join(" ");
    let first = ["uhmm...    ", "espera dejame pensar...    ", "ahmm...    ", "no se...  hmm...    "];
    let rpts = ["Sí", "Nope", "¿Por qué?", "Por faaavor", "Tal vez", "Nope, no sé", "Definitivamente", "puede ser..."," ¡Claro! "," See "," No "," Por supuesto! "," Por supuesto que no "];
    if (!texto) return message.reply('Preguntame algo :)');
    message.channel.send(`${first[Math.floor(Math.random() * first.length)]} \n${rpts[Math.floor(Math.random() * rpts.length)]}`);
}