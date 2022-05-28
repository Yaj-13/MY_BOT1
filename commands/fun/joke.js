const messageCreate = require("../../events/messageCreate")
const {MessageEmbed} = require('discord.js');
// const random = new Random();
// const { Random } = require("something-random-on-discord").Random;
const giveMeAJoke = require("discord-jokes");




module.exports = {
	name: "joke",
	
	async execute(client, msg, args)  {
		giveMeAJoke.getRandomDadJoke (function(joke) {
			const dog_embed = new MessageEmbed()
			    .setTitle("LAUGH PLEASE")
			    .setColor("#cc0066")
			    .setDescription(joke)	
				msg.reply({embeds: [dog_embed]})
           
		})
	  
	}
  }
















// const fetch = require("node-fetch");
// module.exports = {
//     name: "joke",
// 	permissions: ["965099429206052884"],
//     async execute(client,msg,args){
//         let data = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist").then(res => res.json());

// 	   const dog_embed = new MessageEmbed()
// 	    .setTitle("LAUGH PLEASE")
// 	    .setColor("#10c906")
// 	    .setDescription(`**${data.joke || data.setup}**`, `${data.delivery || ""}`)
        

// 	  msg.reply({embeds: [dog_embed]})
//     }
// }