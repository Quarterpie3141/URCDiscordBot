const { SlashCommandBuilder, EmbedBuilder  } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		// Create a new embed object
		const embed = new EmbedBuilder()
			.setColor('#0099ff') // Set the color of the embed
			.setTitle('Pong!') // Set the title of the embed
			.setURL('example.domain.com')
			.setDescription('This is a ping response embed.') // Set the description
			.setThumbnail('https://i.imgur.com/AfFp7pu.png')
			.addFields(
				{ name: 'Regular field title', value: 'Some value here' },
				{ name: '\u200B', value: '\u200B' },
				{ name: 'Inline field title', value: 'Some value here', inline: true },
				{ name: 'Inline field title', value: 'Some value here', inline: true },
				{ name: 'Inline field title', value: 'Some value here', inline: true },
			)
			.setTimestamp() // You can add other fields and customize the embed further
			.setFooter({ text: 'Ping command', iconURL: 'https://youricon.url/here.png' }); // Optional footer

		// Reply to the interaction with the embed
		await interaction.reply({ embeds: [embed] });
	},
};