const pack = require('../package.json');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
const moment = require('moment');
require('moment-duration-format');
const embed = new Discord.MessageEmbed()
    .setTitle(`__${client.user.username}'s Info__`)
    .setThumbnail(client.user.displayAvatarURL())
    // You can change this description in the package.json file in the main directory.
    .setDescription(`${pack.description}`)
    .addField('__Guilds__', client.guilds.cache.size, true)
    .addField('__Users__', client.users.cache.size, true)
    .addField('__Emojis__', client.emojis.cache.size, true)
    .addField('__Channels__', client.channels.cache.size, true)
    .addField('__Uptime__', moment.duration(client.uptime).format('d[d ]h[h ]m[m ]s[s]'), true)
    .addField('__Memory Usage__', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`, true)
    .addField('__Prefix__', `\`${client.prefix}\``, true)
    .addField('__Developer__', `<@${client.ownerID}>`, true)
    .addField('__Library__', `Discord.js v12.0.2`, true)
    .addField('__Useful Links__', `[Website](${client.website}) | [Invite](${client.invite}) | [Support](${client.support})`, false)
    .setFooter(`${client.user.username} | By: ${client.ownertag}`)
    .setColor(client.color)
    .setImage(client.botimg)
return message.channel.send(embed);

}