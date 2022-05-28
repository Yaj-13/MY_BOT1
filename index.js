const Discord = require('discord.js');
const fs = require("fs");
const{REST} = require("@discordjs/rest");
const{Routes}=require("discord-api-types/v9");
const { token,prefix} = require('./config.json');
const sqlite3 = require("sqlite3").verbose();
const axios = require("axios");
const{Client, Intents, Collection} = require("discord.js");
const client = new Client({intents:[ Intents.FLAGS.GUILDS, Intents. FLAGS.GUILD_MESSAGES]});
     
client.commands=new Collection();
client.events=new Collection();

['commands', "events"].forEach(handler =>{
    require(`./handlers/${handler}`)(client);
})


const adding = ["one","two"];
let checker = "";
let resp = "";
let content ="";
let t_resp = " ";
client.on("messageCreate", msgg =>{
    content = msgg.content.toLowerCase();
    console.log(content)

    if (content.charAt(0) === "&" ||content.charAt(0) === "%"||content === "$" + "add respond"){
        
        if (content.charAt(0) === "&"){
        adding[0] =content.replace("&", "");
        msgg.reply("now add the respond")
        }
        if (content.charAt(0) === "%"){
            adding[1] =content.replace("%", "");
            msgg.reply("now write ~add respond")
            }
            
            if (content === "$" + "add respond"){
                console.log("add response detected")
                const db = new sqlite3.Database('./RESPDB.db',sqlite3.OPEN_READWRITE, (err) =>{
                    if (err) return console.error(err.message);
                    console.log("con")
                });
                console.log("before check")
                db.each("select user_word from RESP WHERE user_word =?",[adding[0]],function(err,row){
                    console.log("check presence")
                    checker= row.user_word;
                });
                    if (checker === adding[0]){
                        msgg.reply("the respond is there");
                        }
                    else{
                        console.log("else")
                        db.run('INSERT INTO RESP (user_word, the_resp) VALUES(?,?)',[adding[0],adding[1]],(err)=>{
                            if (err) return console.error(err.message);
                           msgg.reply("the respond has been saved");
                        }); 
                    }
                    console.log("end");
                    db.close((err) => {
                        if (err) return console.error(err.message);
                        });
            }
    }else if (!content.charAt(0) === "~"){
       
        console.log("else responds");
    
    
        const db = new sqlite3.Database('./RESPDB.db',sqlite3.OPEN_READWRITE, (err) =>{
           if (err) return console.error(err.message);
            console.log("con")
        });
        console.log("after conn");
        db.each("SELECT user_word,the_resp from RESP WHERE user_word =?",[content],function(err,row){
            if (err) return console.error(err.message);
            resp = row.the_resp;
            if (!resp) return;
            msgg.reply(resp);
    
        });
        
        console.log("end");
         db.close((err) => {
         if (err) return console.error(err.message);
         }); 
    
    }
    
   
})


client.login(token)
