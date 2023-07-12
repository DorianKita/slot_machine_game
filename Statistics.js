class Statistics {
    constructor() {
        this.gameResults = [];
    };

    addGameToStatistics(win, bid) {
        let gameResult = { win, bid }
        this.gameResults.push(gameResult)
        console.log(gameResult)
    }

};

const stat = new Statistics();