const Discord = require('discord.js');
const Enmap = require('enmap');
const fs = require('fs');

const color = require("./data/utils/colors.json");

const client = new Discord.Client();

client.version = "1.0.0";
client.prefix = "/";
client.color = color;

fs.readdir("./data/events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./data/events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Enmap();

fs.readdir("./data/commands/info", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./data/commands/info/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
    });
});

fs.readdir("./data/commands/tools", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./data/commands/tools/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
    });
});

fs.readdir("./data/commands/op", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./data/commands/op/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
    });
});

client.on('message', message => {

    if(message.content === "hey wiki") {


}

})

client.login(process.env.BOT_TOKEN);
