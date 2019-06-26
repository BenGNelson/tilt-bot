const Discord = require('discord.js');
const config = require('./config.json');

const bot = new Discord.Client();
const token = config.token


// Basic bot response on message
bot.on('message', function(message)
{
    // Switch for different message
    switch(message.content){

        // Do this for message 
        
    }
});

bot.on('ready', function(){
    console.log("Bot launched...");
});

bot.login(token);
