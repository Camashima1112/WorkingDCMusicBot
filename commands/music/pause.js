module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Não estás num canal de voz !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Não te encontras no mesmo canal de voz que eu !`);
        
        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Não há nenhuma música a tocar !`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Esta música já está pausada !`);

        const success = client.player.pause(message);

        if (success) message.channel.send(`${client.emotes.success} - A música ${client.player.getQueue(message).playing.title} foi pausada !`);
    },
};