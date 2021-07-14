const games = require('./database')

// take input from user

const readline = require('readline-sync')

const user_input = readline.question("Do you want to search for a game?(Y/N) ")

// If yes, show companies and ask if the user wants to see a specific company game

if (user_input.toLocaleUpperCase() === 'Y') {
    console.log('This are the companies avaiable: ')
    console.log('\nRiot Games', '\nValve', '\nBlizzard\n')

    const company_entry = readline.question("What company do you choose? ")
    const answer = games.filter(game => game.company === company_entry)

    console.table(answer)
}
// If not, show all games by companies' name in alfhabetical order
else {
    const answer_none = games.sort((a,b) => a.launch - b.launch) // sort it by launch year
    console.log("This are all games we have:\n")
    console.table(answer_none)
}



