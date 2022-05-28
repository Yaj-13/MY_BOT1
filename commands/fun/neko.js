const messageCreate = require("../../events/messageCreate")
const {MessageEmbed} = require('discord.js');
const fetch = require("node-fetch");


module.exports = {
    name: "neko",
    async execute(client,msg,args){
        let data = await fetch("https://api.otakugifs.xyz/gif/allreactions").then(res => res.json());
        



	   const meme_embed = new MessageEmbed()
	    .setTitle("neko neko neko")
	    .setURL(data.postLink)
	    .setColor("#cc0066")
	    .setImage(data.url)

	  msg.reply({embeds: [meme_embed]})
    }



}