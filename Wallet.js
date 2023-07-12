class Wallet {
    constructor(money) {
        let _money = money;

        //actual wallet value
        this.getWalletValue = () => _money;

        //check if player can play
        this.checkIfCanPlay = value => {
            if (money >= value) return true;
            return false;
        };
    };
};

const wallet = new Wallet(100);