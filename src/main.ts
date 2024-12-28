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

// https://github.com/lehungio/typescript/issues/9
import { DnDCharacter } from './modules/challenges/dnd-character';
const dndCharacter = new DnDCharacter();
console.log(`Challenge 9 - Dungeons & Dragons Character: ${JSON.stringify(dndCharacter)}`);

// https://github.com/lehungio/typescript/issues/10
import { score } from './modules/challenges/darts';
const scoreInput1 = 0;
const scoreInput2 = 1;
console.log(`Challenge 10 - Darts: score(${scoreInput1}, ${scoreInput2}) => ${score(scoreInput1, scoreInput2)} (Bulls-eye: distance <= 1)`);

// https://github.com/lehungio/typescript/issues/11
import { isPangram } from './modules/challenges/pangram';
const isPangramInput = 'the quick brown fox jumps over the lazy dog';
console.log(`Challenge 11 - Pangram: isPangram('${isPangramInput}') => ${isPangram(isPangramInput)}`);

// https://github.com/lehungio/typescript/issues/12
import { hey } from './modules/challenges/bob';
const heyInput = 'WATCH OUT!';
const coolInput = 'Cool Bean!';
console.log(`Challenge 12 - Bob: hey('${heyInput}') => ${hey(heyInput)}`);
console.log(`Challenge 12 - Bob: hey('${coolInput}') => ${hey(coolInput)}`);

// https://github.com/lehungio/typescript/issues/13
import { Matrix } from './modules/challenges/matrix';
const matrixInput = '1 2 3\n4 5 6\n7 8 9';  // 3x3 matrix
const matrix = new Matrix(matrixInput);
console.log(`Challenge 13 - Matrix: matrix.rows => ${JSON.stringify(matrix.rows)}`);
console.log(`Challenge 13 - Matrix: matrix.columns => ${JSON.stringify(matrix.columns)}`);