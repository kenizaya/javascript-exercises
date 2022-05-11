const fibonacci = function(n) {

    let prev = 0;
    let current = 1;
    let fib = 1;

    if (n < 0) {return "OOPS";}
    
    for (let i = 1; i < n; i++) {
        fib = prev + current;
        prev = current;
        current = fib;
    }
    
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
