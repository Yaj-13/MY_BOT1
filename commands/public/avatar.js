const messageCreate = require("../../events/messageCreate")
const {MessageEmbed} = require('discord.js');
const fetch = require("node-fetch");


module.exports = {
    name: "avatar",
     execute(client,msg,args){
        let target = msg.mentions.members.first()
		if (!target) msg.reply(" you have to mention someone");


	   const meme_embed = new MessageEmbed()
	    .setTitle("avatar")
	    .setColor("#009900")
	    //.setImage(data.url)
        
        .setImage(target.user.avatarURL({ dynamic: true}))


	  msg.reply({embeds: [meme_embed]})
    }



}