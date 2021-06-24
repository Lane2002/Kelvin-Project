//kelvin temp.
const kevin = 293;
//celsius is 273 deg less than kelvin.
const celsius = kelvin = 230;
//deg c * 9/5 + 32.
let fahrenheit = celsius * (9 / 5) + 32;
//round down.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);

//convert to Newton
let newton = celsius * (33 / 100);

//round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton`);


