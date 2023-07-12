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

        //updating wallet state
        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type = "+") {
                    return _money += value;
                } else if (type + "-") {
                    return _money -= value;
                } else {
                    throw new Error("incorrect action type")
                }
            } else {
                console.log(typeof value);
                throw new Error("wrong value")
            }
        }
    };
};

const wallet = new Wallet(100);