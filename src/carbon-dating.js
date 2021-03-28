const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) !== 'string' ||  isNaN(sampleActivity) == true
  || Number(sampleActivity) > 15 || Number(sampleActivity) <= 0) {
    return false;
  }else{
    let result = Math.log(MODERN_ACTIVITY/sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
    result = Math.ceil(result);
    return result;
  }  
  console.log(typeOf(sampleActivity));
};
