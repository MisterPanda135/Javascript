function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
let value1 = toCelsius(10);
let value2 = toCelsius;
console.log(typeof value1, typeof value2);// displayed number function omdat value1 een nummer is en value2 een fucntion