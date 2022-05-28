const messageCreate = require("../../events/messageCreate")
const {MessageEmbed} = require('discord.js');
const fetch = require("node-fetch");


module.exports = {
    name: "user",
     execute(client,msg,args){
        let target = msg.mentions.members.first()
		if (!target) msg.reply(" you have to mention someone");


	   const meme_embed = new MessageEmbed()
	    .setTitle("informations")
	    .setColor("#009900")
	    //.setImage(data.url)
        .setFields(
            {name: `username:`, value: target.user.username },
            {name: `ID:`, value: target.user.id },
            {name: `created at:`, value: `${target.user.createdAt.toLocaleString()}` },
            {name: `joined at:`, value: `${target.joinedAt.toLocaleString()}` },
        )
        .setThumbnail(target.user.avatarURL({ dynamic: true}))


	  msg.reply({embeds: [meme_embed]})
    }



}