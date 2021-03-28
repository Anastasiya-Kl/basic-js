const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arrMembers) {
  comandName = [];
  if(!Array.isArray(arrMembers)) {
    return false;
  }
  arrMembers.forEach(element => {
    if(typeof(element) === 'string') {
      newElem = element.trim();
      comandName.push(newElem[0].toUpperCase());
      }      
    })    
  
  comandName = comandName.sort().join("");
    return comandName;
      
};
