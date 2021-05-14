module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Não estás num canal de voz !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Não te encontras no mesmo canal de voz que eu !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Especifica a música que queres ouvir !`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};