const projet = require("./information")
//console.log(projet)

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `je m 'appelle ${projet.name} je suis a lécole ${projet.school}`,
    e : "oO",
    T : "U "
}));
