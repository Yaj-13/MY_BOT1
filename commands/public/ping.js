const messageCreate = require("../../events/messageCreate")

module.exports = {

    name: "ping",

    execute(client,msg,args){
        msg.reply("pong")
    }



}