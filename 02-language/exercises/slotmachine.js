/*
* In this exerciseI change a bit the requirement :-) hope you like it!
* I change the Reel with only boolean values, so the reel can only be 0 or 1, 
* with a collection of symbols that can be used to display the result.
*/

class Reel {
    #symbols = ['🍒', '🍋', '🍊', '🍉', '🍇', '🍓', '🍍', '🍏'];
    #currentPosition = 0;

    spin() {
        // Simulate a spin by randomly selecting a position in the symbols array
        this.#currentPosition = Math.floor(Math.random() * this.#symbols.length);
    }

    getCurrentSymbol() {
        // get the current symbol after spinning
        return this.#symbols[this.#currentPosition];
    }
}

class SlotMachine {
    #reelCount = 3;
    #coins = 0;
    #reels = [];

    constructor() {
        
        // create the reels and initial cash
        for (let i = 0; i < this.#reelCount; i++) {
            this.#reels.push(new Reel());
        }

        this.#coins = 0;
    }

    play(){

        // a new coins is added
        this.#coins++;

        // spin the reels
        this.#reels.forEach(reel => reel.spin());
        
        // get the symbol for each reel
        const symbols = this.#reels.map(reel => reel.getCurrentSymbol());

        // set is a specialized dictionary (SET) that only keeps unique values
        const uniqueSymbols = new Set(symbols);

        console.log(`| ${symbols.join(' | ')} |`);

        let winCoins = 0;

        if (uniqueSymbols.size === 1) {
            winCoins = this.#coins;
            this.#coins = 0; // reset the coins;

            console.log(`Congratulations!!! You won ${winCoins} coins!!.`);
        } else {
            console.log(`Good luck next time!.`);
        }

        return {
            won: uniqueSymbols.size === 1,
            coins: winCoins,
        };
    }
}


module.exports = {
    SlotMachine
}