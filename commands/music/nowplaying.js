module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Não estás num canal de voz !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Não te encontras no mesmo canal de voz que eu !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Não há nenhuma música a ser tocada !`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: 'Este é o bot mega fixe do Faustino :D' },
                fields: [
                    { name: 'Canal', value: track.author, inline: true },
                    { name: 'Pedido por', value: track.requestedBy.username, inline: true },
                    { name: 'Tem playlist', value: track.fromPlaylist ? 'Sim' : 'Não', inline: true },

                    { name: 'Visualizações', value: track.views, inline: true },
                    { name: 'Duração', value: track.duration, inline: true },
                    { name: 'Filtros ativados', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Repeat', value: client.player.getQueue(message).repeatMode ? 'Sim' : 'Não', inline: true },
                    { name: 'Está pausado', value: client.player.getQueue(message).paused ? 'Sim' : 'Não', inline: true },

                    { name: 'Barra de Progresso', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};