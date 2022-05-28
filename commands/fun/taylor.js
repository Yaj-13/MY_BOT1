const messageCreate = require("../../events/messageCreate")
const {MessageEmbed} = require('discord.js');
 const fetch = require("node-fetch");
module.exports = {
    name: "taylor",
    async execute(client,msg,args){
        let data = await fetch("http://meme-api.herokuapp.com/gimme/TaylorSwiftPictures").then(res => res.json());

	   const tay_embed = new MessageEmbed()
	    .setTitle("My queen🥺")
	    .setURL(data.postLink)
	    .setColor("#e6c300")
	    .setImage(data.url)

	  msg.reply({embeds: [tay_embed]})
    }
}