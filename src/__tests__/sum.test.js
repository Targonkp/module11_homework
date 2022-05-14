const createAdder = require('../sum.js');

describe ("tests for createAdder", () => {
    it ("a = 20", () => {
        let add = createAdder(20);
        expect(add(5)).toBe(25);
    }),
    it ("a > 20", () => {
        let add = createAdder(25);
        expect(add(10)).toBe(35);
    }),
    it ("a < 20", () => {
        expect(createAdder(10)).toBe("a меньше 20");
    })
})


// describe ("describe", () => {
//     it ("check num isPrime = true", () => {
//         expect(testFunc(2)).toBe(true);
//     }),
//     it ("check num isPrime = false", () => {
//         expect(testFunc(3)).toBe(false);
//     }),
//     it ("check num isPrime = false", () => {
//         expect(testFunc(101)).toBe("Данные неверны");
//     })
// })
//
