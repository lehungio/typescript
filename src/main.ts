// https://github.com/lehungio/typescript/issues/1
import { greet } from './modules/challenges/hello-world';
const greetInput = 'World';
console.log(`Challenge 1 - Greet: greet('${greetInput}') => ${greet(greetInput)}`);

// https://github.com/lehungio/typescript/issues/2
import { twoFer } from './modules/challenges/two-fer';
const twoFerInput = 'LehungIO';
console.log(`Challenge 2 - Two Fer: twoFer('${twoFerInput}') => ${twoFer(twoFerInput)}`);

// https://github.com/lehungio/typescript/issues/3
import { colorCode } from './modules/challenges/resistor-color';
const colorCodeInput = 'black';
console.log(`Challenge 3 - Resistor Color: colorCode('${colorCodeInput}') => ${colorCode(colorCodeInput)}`);

// https://github.com/lehungio/typescript/issues/4
import { resistorColorDuoDecoder } from './modules/challenges/resistor-color-duo';
const resistorColorDuoDecoderInput: ('black' | 'brown' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'grey' | 'white')[] = ['brown', 'black'];
console.log(`Challenge 4 - Resistor Color Duo: resistorColorDuoDecoder(${JSON.stringify(resistorColorDuoDecoderInput)}) => ${resistorColorDuoDecoder(resistorColorDuoDecoderInput)}`);

// https://github.com/lehungio/typescript/issues/5
import { resistorColorTrioDecoder } from './modules/challenges/resistor-color-trio';
const resistorColorTrioDecoderInput: ('black' | 'brown' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'grey' | 'white')[] = ['brown', 'black', 'red'];
console.log(`Challenge 5 - Resistor Color Trio: resistorColorTrioDecoder(${JSON.stringify(resistorColorTrioDecoderInput)}) => ${resistorColorTrioDecoder(resistorColorTrioDecoderInput)}`);

// https://github.com/lehungio/typescript/issues/6
import { isLeap } from './modules/challenges/leap';
const isLeapInput1 = 1996;
const isLeapInput2 = 2024;
const isLeapInput3 = 2025;
console.log(`Challenge 6 - Leap Year: isLeap(${isLeapInput1}) => ${isLeap(isLeapInput1)}`);
console.log(`Challenge 6 - Leap Year: isLeap(${isLeapInput2}) => ${isLeap(isLeapInput2)}`);
console.log(`Challenge 6 - Leap Year: isLeap(${isLeapInput3}) => ${isLeap(isLeapInput3)}`);

// https://github.com/lehungio/typescript/issues/7
import { toRna } from './modules/challenges/rna-transcription';
const toRnaInput = 'ACGTGGTCTTAA';
console.log(`Challenge 7 - RNA Transcription: toRna('${toRnaInput}') => ${toRna(toRnaInput)}`);

// https://github.com/lehungio/typescript/issues/8
import { age } from './modules/challenges/space-age';
const ageInput1 = 'earth';
const ageInput2 = 1000000000;
console.log(`Challenge 8 - Space Age: age('${ageInput1}', ${ageInput2}) => ${age(ageInput1, ageInput2)}`);