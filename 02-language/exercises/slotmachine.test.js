const {SlotMachine} = require('./slotmachine');

test('slotmachine function', () => {
  
    // create the slot machine
    const slotMachine = new SlotMachine();

    // play the slot machine until we win

    let result = slotMachine.play();
    let coins = 0;
    
    while(!result.won){
        result = slotMachine.play();

        if (!result.won){
            expect(result.coins).toBe(0);
        }

        ++coins;
    }

    expect(result.won).toBe(true);
    expect(result.coins).toBe(coins + 1); 

});