let Airplane = {};
module.exports = { myAirplane: "CloudJet",
displayAirplane: function() {
    return this.myAirplane;}
};

const Airplane = require('./2-airplane.js');
console.log(Airplane.displayAirplane());
