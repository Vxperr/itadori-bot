module.exports = {
    name: 'github',
    description: 'sends a link to viperrs github.',
    execute(message, args){
        message.channel.send('https://github.com/vxperr');
    }
}