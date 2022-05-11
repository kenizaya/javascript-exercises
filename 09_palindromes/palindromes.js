const palindromes = function (s) {
    s =  s.replace(/\W|_/g, '').toLowerCase();
    const half = Math.floor(s.length/2);
    const arr = s.split("", half);

    return arr.reverse().join("") === ((s.length % 2 === 0) ?
        s.substring(half) : s.substring(half + 1));
};

// Do not edit below this line
module.exports = palindromes;
