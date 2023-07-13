class Game {
    constructor(startMoney) {
        this.stats = new Statistics();
        this.wallet = new Wallet(startMoney);

        document.getElementById("start").addEventListener("click", this.startGame.bind(this));
        this.spanWallet = document.querySelector(".panel span.wallet");
        this.boards = [...document.querySelectorAll("div.color")];
        this.inputBid = document.getElementById("bid");
        this.spanResult = document.querySelector(".score span.result");
        this.spanGames = document.querySelector(".score span.number");
        this.spanWins = document.querySelector(".score span.win");
        this.spanLosses = document.querySelector(".score span.loss");

        this.render();
    };

    render(colors = ["grey", "grey", "grey"], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {
        this.boards.forEach((board, index) => {
            board.style.backgroundColor = colors[index];
        });

        this.spanWallet.textContent = money;
        if (result) {
            result = `You won ${wonMoney}$.`;
        } else if (!result && result !== "") {
            result = `You lost ${bid}$.`;
        }
        this.spanResult.textContent = result;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];
    };

    startGame() {
        if (this.inputBid.value < 1) return alert("Minimal bid is 1$");
        // get input value
        const bid = Math.floor(this.inputBid.value);

        if (!this.wallet.checkIfCanPlay(bid)) {
            return alert("You don't have enough funds, try with smaller bid.")
        };

        this.wallet.changeWallet(bid, "-");

        this.draw = new Draw();
        const colors = this.draw.drawResult();
        const win = Result.checkIfWin(colors);
        const moneyWin = Result.moneyWinInGame(win, bid);
        this.wallet.changeWallet(moneyWin);

        //update statistics
        this.stats.addGameToStatistics(win, bid);

        //render after play
        this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, moneyWin)
    };
};

