const palindromes = function (s) {
    s =  s.replace(/\W|_/g, '').toLowerCase();

    return s.split("").reverse().join("") === s;
};

// Do not edit below this line
module.exports = palindromes;
