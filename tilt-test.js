const Players = require('./utils')
const command = '!tilt add Ben'
const tiltCalls = ['!tilt', '!tilted']
const tiltFunctions = ['add', 'balance', 'balances', 'reset']


const messageArray = command.split(' ')
const tiltCall = messageArray[0]
const tiltCommand = messageArray[1]

// Tilt call is made
if (tiltCalls.includes(tiltCall)) {

    switch(tiltCall) {
        case '!tilt':
            if (tiltFunctions.includes(tiltCommand)) {

                // Tilt function is valid
                switch(tiltCommand){
                    // Add a player
                    case 'add':
                        let addName = command.slice(10)
                        console.log(Players.addPlayer(addName))
                        return

                    // Check a player's balance
                    case 'balance':
                        let balanceName = command.slice(14)
                        console.log(Players.getPlayerBalance(balanceName))
                        return

                    // Check all player balances
                    case 'balances':
                        console.log(Players.getAllBalances())
                        return

                    // Reset all balances
                    case 'reset':
                        let resetName = command.slice(12)
                        console.log(Players.resetPlayer(resetName))
                        return
                    }

            } else {
                // Tilt function is valid
                console.log('Command not reconginzed.')
            }

        case '!tilted':
            let playerName = command.slice(8)
            console.log(Players.gotTilted(playerName))
            return
    }
}