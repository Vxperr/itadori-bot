const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ';';

client.once('ready', () => {
    console.log('Itadori is ready to exorcise cursed spirits!');

    client.user.setActivity("movies.", {
        type: "WATCHING",
    });
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('please stop.')
    } else if (command == 'github'){
    message.channel.send('https://github.com/vxperr')
    }
})

client.login('no token for u');
