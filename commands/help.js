const Discord = require('discord.js');
const pack = require('../package.json');

exports.run = (client, message, args) => {
    var cmd = args.join(" ");
    // Main help menu
    if(!cmd) {
    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}'s Help Menu`, client.user.displayAvatarURL())
    .setImage(client.helpimg)
    .setColor(client.color)
    .setDescription(`${pack.description}`)
    .addField('__**Anime**__', `\`${client.prefix}help anime\``, true)
    .addField('__**Action**__', `\`${client.prefix}help actions\``, true)
    .addField('__**Reddit**__', `\`${client.prefix}help reddit\``, true)
    .addField('__**NSFW**__', `\`${client.prefix}help nsfw\``, true)
    .addField('__**Utility**__', `\`${client.prefix}help utility\``, true)
    .addField('__**Meme**__', `\`${client.prefix}help meme\``, true)
    .addField('__**Prefix Info**__', `You can call all of the commands using \`${client.prefix}\``)
    .addField('__**Useful Links**__', `[Website](${client.website}) | [Invite](${client.invite}) | [Support](${client.support})`, false)
    .setFooter(`${client.user.username} | By: ${client.ownertag}`)
    return message.channel.send(embed);
    }
    // Anime help menu
    if(cmd === "anime") {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} | Anime`, client.user.displayAvatarURL())
        .addField('__**k!anime**__', 'Search for anime on kitsu.', false)
        .addField('__**k!manga**__', 'Search for manga on kitsu.', false)
        .setColor(client.color)
        .setFooter(`${client.user.username} | By: ${client.ownertag}`)
        return message.channel.send(embed);
    }
    // Action help menu
    if(cmd === "actions") {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} | Actions`, client.user.displayAvatarURL())
        .addField('__**k!command**__', 'Description here', false)
        .setColor(client.color)
        .setFooter(`${client.user.username} | By: ${client.ownertag}`)
        return message.channel.send(embed);
    }
    // Reddit help menu
    if(cmd === "reddit") {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} | Reddit`, client.user.displayAvatarURL())
        .addField('__**k!command**__', 'Description here', false)
        .setColor(client.color)
        .setFooter(`${client.user.username} | By: ${client.ownertag}`)
        return message.channel.send(embed);
    }
    // NSFW help menu
    if(cmd === "nsfw") {
        // If channel is not NSFW it will send this error.
        let embednotnsfw = new Discord.MessageEmbed()
        .setTitle('NSFW Error')
        .setDescription('You can only use this in a NSFW channel.')
        .setColor(client.color)

         if(!message.channel === message.channel.nsfw) {
             return message.channel.send(embednotnsfw);
         }
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} | NSFW`, client.user.displayAvatarURL())
        .addField('__**k!hentai**__', 'Get random hentai.', false)
        .addField('__**k!thighs**__', 'Get random anime thighs.', false)
        .addField('__**k!3dthighs**__', 'Get random 3D thighs.', false)
        .addField('__**k!ass**__', 'Get random anime ass.', false)
        .addField('__**k!3dass**__', 'Get random 3D anime ass.', false)
        .addField('__**k!hgif**__', 'Get random hentai gif.', false)
        .addField('__**k!pgif**__', 'Get random 3D porn gif.', false)
        .setColor(client.color)
        .setFooter(`${client.user.username} | By: ${client.ownertag}`)
        return message.channel.send(embed);
    }
    // Utility help menu
    if(cmd === "utility") {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} | Utility`, client.user.displayAvatarURL())
        .addField('__**k!command**__', 'Description here', false)
        .setColor(client.color)
        .setFooter(`${client.user.username} | By: ${client.ownertag}`)
        return message.channel.send(embed);
    }
    // Meme help menu
    if(cmd === "meme") {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} | Meme`, client.user.displayAvatarURL())
        .addField('__**k!command**__', 'Description here', false)
        .setColor(client.color)
        .setFooter(`${client.user.username} | By: ${client.ownertag}`)
        return message.channel.send(embed);
    }
    // Developer help menu
    if(cmd === "dev") {
        // This if statement is to check if the user is owner or not, make sure to put your ID in the config.json.
        if (message.author.id !== `${client.ownerID}`) {
           return message.channel.send("You're not permitted to use this command.");
        }
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} | Developer`, client.user.displayAvatarURL())
        .addField('__**k!command**__', 'Description here', false)
        .setColor(client.color)
        .setFooter(`${client.user.username} | By: ${client.ownertag}`)
        return message.channel.send(embed);
    }
}