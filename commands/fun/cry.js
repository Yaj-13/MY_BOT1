const messageCreate = require("../../events/messageCreate")
const {MessageEmbed} = require('discord.js');
const fetch = require("node-fetch");


module.exports = {
    name: "cry",
    async execute(client,msg,args){
        let data = await fetch("https://api.otakugifs.xyz/gif?reaction=cry").then(res => res.json());
        



	   const meme_embed = new MessageEmbed()
	    .setTitle("crying")
	    .setURL(data.postLink)
	    .setColor("#0000ff")
	    .setImage(data.url)

	  msg.reply({embeds: [meme_embed]})
    }



}