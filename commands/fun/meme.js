const messageCreate = require("../../events/messageCreate")
const {MessageEmbed} = require('discord.js');
const fetch = require("node-fetch");


module.exports = {
    name: "meme",
    async execute(client,msg,args){
        let data = await fetch("http://meme-api.herokuapp.com/gimme/memes").then(res => res.json());

	   const meme_embed = new MessageEmbed()
	    .setTitle("Lets make you laugh😁")
	    .setURL(data.postLink)
	    .setColor("#FFD700")
	    .setImage(data.url)

	  msg.reply({embeds: [meme_embed]})
    }



}