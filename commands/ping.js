const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setDescription(`**Pong!** - Ping: \`${Math.round(client.ws.ping)}ms\``)
    .setColor(client.color)
    return message.channel.send(embed);

}