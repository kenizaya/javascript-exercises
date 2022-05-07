const removeFromArray = function(arr, ...theArgs) {

    let args = [...arr];
    let index;

    for (let i = 0; i < theArgs.length; i++) {
        index = args.indexOf(theArgs[i]);
        if (index !== -1) {
            args.splice(index, 1);
        }
        
    }

    return args;

};

// Do not edit below this line
module.exports = removeFromArray;
