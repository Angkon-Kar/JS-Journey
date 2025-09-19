// Miles to kilometers converter
let miles = 130;
let kilometers = miles * 1.60934;
console.log(`The distance of ${kilometers} kms is equal to ${miles} miles`);

// BMI calculator
let heightInches = 70;
let weightPounds = 160;

let heightCm = heightInches * 2.54;
let weightKilos = weightPounds / 2.2046;
let heightMeters = heightCm / 100;
let bmi = weightKilos / (heightMeters ** 2);

console.log(`Height: ${heightCm} cm`);
console.log(`Weight: ${weightKilos} kg`);
console.log(`BMI: ${bmi}`);