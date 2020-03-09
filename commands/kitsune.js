  
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

        let embednotnsfw = new MessageEmbed()
        .setTitle('NSFW Error')
        .setDescription('You can only use this in a NSFW channel.')
        .setColor(client.color)
        // NSFW Channel check will send the above embed if the channel is not set to NSFW.
        if(!message.channel === message.channel.nsfw) {
            return message.channel.send(embednotnsfw);
            
        }
        const url = await fetch('https://nekobot.xyz/api/image?type=hkitsune')
			.then(response => response.json())
			.then(body => body.message);
            let embed = new MessageEmbed()
            .setAuthor(`${client.user.username} | Kitsune`, client.user.displayAvatarURL())
            .setURL(url)
            .setColor(client.color)
            .setImage(url)
            .setFooter(`${client.user.username} | By: ${client.ownertag}`)
            message.channel.send(embed);
}