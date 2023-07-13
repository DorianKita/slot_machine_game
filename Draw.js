class Draw {
    constructor() {
        this.options = ["red", "green", "blue"];
        let _result = this.drawResult();

        //access to _result
        this.getResult = () => _result
    };

    //
    drawResult() {
        let colors = [];
        this.options.forEach(option => {
            const index = Math.floor(Math.random(option) * this.options.length)
            colors.push(this.options[index])
        })
        return colors
    };
};

// const draw = new Draw();