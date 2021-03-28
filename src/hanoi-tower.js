const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let hanoi = {
    turns, 
    seconds   
    }
  
  hanoi.turns = (Math.pow(2, disksNumber)) - 1;
  hanoi.seconds = Math.floor((hanoi.turns * 3600) / turnsSpeed);
  console.log(hanoi);
}


  /* remove line with error and write your code here
  Создаю пустой массив, вычисляю hanoi.turns по формуле Math.pow(2, disksNumber) - 1 
  и вот вычисляю число секунд следующей строчкой
  Заработало в формулировке hanoi.seconds = Math.floor(hanoi.turns / (turnsSpeed / 3600));
  — сначала поделить скорость на 3600, и только потом делить ходы на полученное число
  2^n-1*/

