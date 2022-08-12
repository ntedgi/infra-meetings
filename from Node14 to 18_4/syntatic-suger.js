// replaceAll
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replaceAll('dog', 'monkey'));


// operator &&= ||= 
 
let name = {
    firstName: "orna",
    lastName: null,
};

name.firstName &&= "meny";
name.lastName &&= "tieb";

console.log(name.firstName);
console.log(name.lastName);

name.firstName ||= "meny";
name.lastName ||= "tieb";

console.log(name.firstName);
console.log(name.lastName);