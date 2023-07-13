class Result {
    static moneyWinInGame(result, bid) {
        if (result) return bid * 3
        else return 0
    };

    static checkIfWin(drawResult) {
        if (drawResult[0] === drawResult[1] && drawResult[1] === drawResult[2] || drawResult[0] !== drawResult[1] && drawResult[1] !== drawResult[2] && drawResult[0] !== drawResult[2]) return true;
        return false;
    }
};



