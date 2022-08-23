// 問1
let numbers = [2, 5, 12, 13, 15, 18, 22];
function isEven() {
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] %2 === 0){
      num = numbers[i];
      console.log(num + 'は偶数です');
    }
  }
}
isEven();

// 問2
class Car{
  constructor(gas, num){
    this.gas = gas;
    this.num = num;
  }
  getNumGas(){
  console.log(`ガソリンは${this.gas}です。ナンバーは${this.num}です。`);
  }
}

// let suv = new Car(70.2, 1234);
// suv.getNumGas();
