const fs = require('fs')

const incAmount = 2

const savePlayers = (players) => {
    const dataJSON = JSON.stringify(players)
    fs.writeFileSync('players.json', dataJSON)
}

const addPlayer = (name) => {
    //Load players and check for duplicate player
    const players = loadPlayers()
    const duplicatePlayer = players.find((player) => player.name.toLowerCase() === name.toLowerCase())

    // Player doesn't exist
    if (!duplicatePlayer) {
        players.push({
            name: name,
            balance: 0
        })
        savePlayers(players)
        return `${name} has been added!`
    } else {
        return 'Player already exists!'
    }
}

const loadPlayers = () => {
    try {
        // Read players
        const dataBuffer = fs.readFileSync('players.json')
        const playerJSON = dataBuffer.toString()
        return JSON.parse(playerJSON)
    } catch (e) {
        // Return empty array if file does not exist
        return []
    }
}

const getPlayerBalance = (name) => {
    const players = loadPlayers()
    const player = players.find((player) => player.name.toLowerCase() === name.toLowerCase())

    // Player exists
    if (player) {
        return `Balance: ${player.balance}`
    } else {
        return 'Player does not exist!'
    }
}

const getAllBalances = () => {
    const players = loadPlayers()
    
    return JSON.stringify(players)
    
}

const gotTilted = (name) => {
    const players = loadPlayers()
    const player = players.find((player) => player.name.toLowerCase() === name.toLowerCase())

    // Player exists
    if (player) {
        player.balance += incAmount
        savePlayers(players)
        return `${player.name} is tilted! Their new balance is ${player.balance}!`
    } else {
        return 'Player does not exist!'
    }
}

const resetPlayer = (name) => {
    const players = loadPlayers()
    const player = players.find((player) => player.name.toLowerCase() === name.toLowerCase())

    // Player exists
    if (player) {
        player.balance = 0
        savePlayers(players)
        return `${player.name} has paid up! Their new balance is ${player.balance}`
    } else {
        return 'Player does not exist!'
    }
}

module.exports = {
    savePlayers,
    addPlayer,
    loadPlayers,
    getPlayerBalance,
    getAllBalances,
    gotTilted,
    resetPlayer
}