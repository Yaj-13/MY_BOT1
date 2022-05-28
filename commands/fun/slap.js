const messageCreate = require("../../events/messageCreate")
const {MessageEmbed} = require('discord.js');
const fetch = require("node-fetch");


module.exports = {
    name: "slap",
    async execute(client,msg,args){
        let data = await fetch("https://api.otakugifs.xyz/gif?reaction=slap").then(res => res.json());
        let target = msg.mentions.members.first()
		if (!target)  return msg.reply(" you have to mention someone");


	   const meme_embed = new MessageEmbed()
	    .setTitle(`<@${msg.author.username}> 👋🏻slaps👋🏻 <@${target.user.username}>`)
	    .setURL(data.postLink)
	    .setColor("#660066")
	    .setImage(data.url)

	  msg.reply({embeds: [meme_embed]})
    }



}