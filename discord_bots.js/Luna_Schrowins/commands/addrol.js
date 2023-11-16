exports.run = (client, message, args, Discord) => {
    let member = message.mentions.members.first();
    let namerol = args.slice(1).join(' ');

    let rol = message.guild.roles.find("name", namerol);
    let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");

    if(!perms) return message.channel.send("`|Error` `|` No tienes Permisos para usar este comando.");
     
    if(message.mentions.users.size < 1) return message.reply('Debes mencionar a un miembro.');
    if(!namerol) return message.channel.send('Escribe el nombre del rol a agregar, `l.addrol @username [rol]`');
    if(!rol) return message.channel.send('No encontre el rol en el servidor.');
    
    member.addRole(rol).catch(console.error);
    message.channel.send(`El rol **${role.name}** fue agregado correctamente a **${member.user.username}**.`);
}