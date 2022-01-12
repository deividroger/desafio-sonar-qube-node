
const calc = require('./calc')

test("add 1 + 2 to be equal 3", ()=>{

    expect(calc.sum(1,2)).toBe(3);
});

test("2 * 2 to be equal 4", ()=>{

    expect(calc.times(2,2)).toBe(4);
});


test("2 - 2 to be equal 0", ()=>{

    expect(calc.minus(2,2)).toBe(0);
});
