const findTheOldest = function(obj) {
    
    let index;
    let age = [];

    obj.map(person => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        }
        let a = person.yearOfDeath - person.yearOfBirth;
        age.push(a);
    });
    index = age.indexOf(Math.max(...age));

    return obj[index];
};


// Do not edit below this line
module.exports = findTheOldest;
