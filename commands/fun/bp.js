const messageCreate = require("../../events/messageCreate")
const {MessageEmbed} = require('discord.js');
 const fetch = require("node-fetch");
module.exports = {
    name: "bp",
	permissions: ["965099429206052884"],
    async execute(client,msg,args){
        let data = await fetch("http://meme-api.herokuapp.com/gimme/BlackpinkGallery").then(res => res.json());

	   const dog_embed = new MessageEmbed()
	    .setTitle("BLACKPINK IN YOUR AREA")
	    .setURL(data.postLink)
	    .setColor("#ff006f")
	    .setImage(data.url)

	  msg.reply({embeds: [dog_embed]})
    }
}