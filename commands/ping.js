module.exports = {
    name: 'ping',
    description: 'sends a message to test if the bot is working.',
    execute(message, args){
        message.channel.send('please stop.');
    }
}
