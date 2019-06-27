const Discord = require('discord.js')
const config = require('./config.json')

const Players = require('./utils')

const bot = new Discord.Client()
const token = config.token

const tiltCalls = ['!tilt', '!tilted']
const tiltFunctions = ['add', 'balance', 'balances', 'reset', 'help']

// Basic bot response on message
bot.on('message', function(message)
{
    const messageContent = message.content
    const messageArray = messageContent.split(' ')
    const tiltCall = messageArray[0]
    const tiltCommand = messageArray[1]

    // Tilt call is made
    if (tiltCalls.includes(tiltCall)) {

        // !tilt
        switch(tiltCall) {
            case '!tilt':
                if (tiltFunctions.includes(tiltCommand)) {

                    // Tilt function is valid
                    switch(tiltCommand){
                        // Add a player
                        case 'add':
                            let addName = messageContent.slice(10)
                            message.channel.send(Players.addPlayer(addName));
                            return

                        // Check a player's balance
                        case 'balance':
                            let balanceName = messageContent.slice(14)
                            message.channel.send(Players.getPlayerBalance(balanceName));
                            return

                        // Check all player balances
                        case 'balances':
                            message.channel.send(Players.getAllBalances());
                            return

                        // Reset all balances
                        case 'reset':
                            let resetName = messageContent.slice(12)
                            message.channel.send(Players.resetPlayer(resetName));
                            return

                        // Tilt help message
                        case 'help':
                            message.channel.send({embed: {
                                color: 3447003,
                                title: 'Tilt Bot Options:',
                                fields: [
                                { name: 'Command', value: '!add\n!balance <name>\n!balances\n!reset <name>', inline: true},
                                { name: 'Description', value: 'Adds a new player\nReturns a player\'s balance\nShows all player balances\nResets a player\'s balance to zero', inline: true},
                                ]
                            }
                            });
                        }

                } else {
                    // Tilt function is valid
                    message.channel.send('Beep boop. Command not reconginzed.');
                }

            // !tilted
            case '!tilted':
                let playerName = messageContent.slice(8)
                message.channel.send(Players.gotTilted(playerName));
                return
        }
    }
})

bot.on('ready', function(){
    console.log('Bot launched...')
    bot.user.setActivity('SMITE');
})

bot.login(token)
