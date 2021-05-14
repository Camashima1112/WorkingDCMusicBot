const axios = require(`axios`)
module.exports = {
    name: 'joke',
    aliases: ['lol'],
    category: 'fun',
    utilisation: '{prefix}joke',

		execute(message, client, Client, bot,) {
			let getJoke = {
						let response = await axios.get('https://official-joke-api.appspot.com/random_joke')
						let joke = response.data;
					return joke;
					console.log(jokeValue());
			let jokeValue = await getJoke();
					message.reply(`Here's your joke: \n ${jokeValue.setup} \n\n 
										${jokeValue.punchline}`
					)			
			}
			},
}