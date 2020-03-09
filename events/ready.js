var bot = require('../package.json');

exports.run = (client) => {
    console.log(`[${client.user.username}] is ready, use ${client.prefix}help to fetch all of my commands.`);
    console.log(`[${client.user.username}] Invite: https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=${client.perms}&scope=bot`);
    // To change the bot version for the stream status please change it in package.json in the bot main directory.
    client.user.setActivity(`${client.prefix}help | v${bot.version}`, {
      type: "STREAMING",
      url: client.streamurl
    });
  }