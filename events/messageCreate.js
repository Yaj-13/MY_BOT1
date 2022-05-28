 const { Message } = require('discord.js');
const { token,prefix} = require('../config.json');
const sqlite3 = require("sqlite3").verbose();
const axios = require("axios");

module.exports = {
	name: 'messageCreate',
	
	execute(msg,client) {

        if(!msg.content.slice(prefix) ||msg.author.bot)return;
        const args=msg.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        // const validPermissions = [
        //     "965091130406502500",
        //     "965091295896940544",
        //     "965092468116840448",
        //     "965093658707787776",
        //     "965094488320122900",
        //     "965099429206052884",
        // ]

        try {
         let commandFiles= client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
         if (!commandFiles) return;
         commandFiles.execute(client,msg, args)
        } catch (error) {
            console.error(error);
        }
	},
};
