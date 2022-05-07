const sumAll = function(start, end) {

    let temp;

    if (typeof start != "number" || typeof end != "number" ||
        start < 0 || end < 0) {
        return "ERROR"
    }

    if (start > end) {
        temp = start;
        start = end;
        end = temp;
    }


    result = 0;

    for (let i = start; i <= end; i++) {
        result += i;
    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;
