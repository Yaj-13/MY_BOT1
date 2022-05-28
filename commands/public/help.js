const messageCreate = require("../../events/messageCreate")
const {MessageEmbed} = require('discord.js');
// const fetch = require("node-fetch");


module.exports = {
    name: "help",
    async execute(client,msg,args){
        

	   const meme_embed = new MessageEmbed()
	    .setTitle("commands u can use")
	    .setColor("#009900")
	    .setDescription("these the commands you can use by your role\n\n\n admins and who have premissions to do it\n\n adding responds\n '&'to add the word \n % to add the respond \n ~add respond to save the respond\n\n members\n\n ~hug to hug someone (you have to mention someone)\n ~kiss to kiss someone (you have to mention someone)\n~slap to slap someone (you have to mention someone)\n ~cat for cats pics~hug to hug someone (you have to mention someone)\n ~taylor to send taylor's pics ~hug to hug someone (you have to mention someone)\n ~meme to send memes\n ~bp to send balckpink pics\n~user to get information about a user (you have to mention someone)\n~avatar to get avater any user (you have to mention someone)\n~joke to to get a joke \n~scy to get cry gif")

	  msg.reply({embeds: [meme_embed]})
    }



}