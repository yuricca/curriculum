// 問1
let numbers = [2, 5, 12, 13, 15, 18, 22];
function isEven(num) {
  for(let i = 0; i < num.length; i++){
    if(num[i] %2 === 0){
      console.log(num[i] + 'は偶数です');
    }
  }
}
isEven(numbers);

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
