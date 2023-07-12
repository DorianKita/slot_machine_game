class Statistics {
    constructor() {
        this.gameResults = [];
    };

    //method for adding game statistics
    addGameToStatistics(win, bid) {
        let gameResult = { win, bid }
        this.gameResults.push(gameResult)
        console.log(gameResult)
    }

    //method for displaying game statistics
    showGameStatistics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(game => game.win).length
        let losses = this.gameResults.filter(game => !game.win).length
        return [games, wins, losses];
    }
};

const stat = new Statistics();