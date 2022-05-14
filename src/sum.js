function createAdder(a){
    if (a >= 20){
    return function addA(b) {
        console.log(b);
        return a + b;
    }
    }
    else
    {
        return "a меньше 20";
    }
}

// let add = createAdder(10);
// console.log(add(5))

module.exports = createAdder;