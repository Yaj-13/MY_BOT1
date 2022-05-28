const messageCreate = require("../../events/messageCreate")
const {MessageEmbed} = require('discord.js');
 const fetch = require("node-fetch");
module.exports = {
    name: "cat",
    async execute(client,msg,args){
        let data = await fetch("http://meme-api.herokuapp.com/gimme/cats").then(res => res.json());

	   const cat_embed = new MessageEmbed()
	    .setTitle("owo")
	    .setURL(data.postLink)
	    .setColor("#ffff00")
	    .setImage(data.url)

	  msg.reply({embeds: [cat_embed]})
    }



}
