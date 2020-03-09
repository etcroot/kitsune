// Importing libraries and/or file imports.
const { Client, MessageEmbed } = require("discord.js");
const client = new Client();
const fs = require("fs");
const { token } = require("./assets/cfg/auth.json");

// Defining global values from the constants file.
// You can use these variables anywhere without needing to import the config/constants file everywhere.
// Edit these values in /assets/cfg/constants.json
const constant = require('./assets/cfg/constants.json');
client.prefix = constant.prefix;
client.website = constant.website;
client.support = constant.support;
client.invite = constant.invite;
client.streamurl = constant.streamurl;
client.ownerID = constant.ownerID;
client.ownertag = constant.ownertag;
client.color = constant.color;
client.perms = constant.perms;
client.beta = constant.beta;
client.premium = constant.premium;
client.mainguild = constant.mainguild;
client.botimg = constant.botimg;
client.helpimg = constant.helpimg;
client.infoimg = constant.infoimg;
client.premimg = constant.premimg;
client.cmdimg = constant.cmdimg;
client.voteimg = constant.voteimg;

// Load event directory.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

// On client message event.
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.guild) return;
    if(message.content.toLowerCase() === `<@${client.user.id}>` || message.content.toLowerCase() === `<@!${client.user.id}>`) {
    const embed = new MessageEmbed()
    .setTitle(`__${client.user.username}'s Prefix & Help__`)
    .setDescription([`
    Use \`${client.prefix}help\` to get all my commands.
    `])
    .setColor(client.color)
    return message.channel.send(embed);
  }
  if(message.content.indexOf(client.prefix) !== 0) return;
  const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
  }
});

// Login with the token, change it in /assets/cfg/auth.json
client.login(token);