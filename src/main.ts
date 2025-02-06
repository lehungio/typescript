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

// https://github.com/lehungio/typescript/issues/14
import { Robot } from './modules/challenges/robot-name';
const robot1 = new Robot();
const robot2 = new Robot();
console.log(`Challenge 14 - Robot Name: robot1.name => ${robot1.name}`);
console.log(`Challenge 14 - Robot Name: robot2.name => ${robot2.name}`);
robot1.resetName();
console.log(`Challenge 14 - Robot Name: robot1.name => ${robot1.name}`);
console.log(`Challenge 14 - Robot Name: robot2.name => ${robot2.name}`);
Robot.releaseNames();
const robot3 = new Robot();
console.log(`Challenge 14 - Robot Name: robot3.name => ${robot3.name}`);
const robot4 = new Robot();
console.log(`Challenge 14 - Robot Name: robot4.name => ${robot4.name}`);

// https://github.com/lehungio/typescript/issues/14
import { Robot as Robot2 } from './modules/challenges/robot-name';
const robot5 = new Robot2();
const robot6 = new Robot2();
console.log(`Challenge 14 - Robot Name: robot5.name => ${robot5.name}`);
console.log(`Challenge 14 - Robot Name: robot6.name => ${robot6.name}`);
robot5.resetName();
console.log(`Challenge 14 - Robot Name: robot5.name => ${robot5.name}`);
console.log(`Challenge 14 - Robot Name: robot6.name => ${robot6.name}`);
Robot2.releaseNames();
const robot7 = new Robot2();
console.log(`Challenge 14 - Robot Name: robot7.name => ${robot7.name}`);
const robot8 = new Robot2();
console.log(`Challenge 14 - Robot Name: robot8.name => ${robot8.name}`);

// https://github.com/lehungio/typescript/issues/15
import { GradeSchool } from './modules/challenges/grade-school';
let school = new GradeSchool();
console.log(`Challenge 15 - Grade School: school.roster() => ${JSON.stringify(school.roster())}`);
school.add('Anime', 2);
console.log(`Challenge 15 - Grade School: school.roster() => ${JSON.stringify(school.roster())}`);
school.add('Doraemon', 10);
school.add('Nobita', 100);
school.add('Dragon Ball', 2);
console.log(`Challenge 15 - Grade School: school.roster() => ${JSON.stringify(school.roster())}`);
school.add('Chelsea', 3);
school.add('Songoku', 50);
console.log(`Challenge 15 - Grade School: school.roster() => ${JSON.stringify(school.roster())}`);
console.log(`Challenge 15 - Grade School: school.grade(100) => ${JSON.stringify(school.grade(100))}`);
console.log(`Challenge 15 - Grade School: school.grade(10) => ${JSON.stringify(school.grade(10))}`);
console.log(`Challenge 15 - Grade School: school.grade(50) => ${JSON.stringify(school.grade(50))}`);

// https://github.com/lehungio/typescript/issues/16
import { Clock } from './modules/challenges/clock';
let clock = new Clock(8, 0);
console.log(`Challenge 16 - Clock: clock.toString() => ${clock.toString()}`);
console.log(`Challenge 16 - Clock: clock.plus(245).toString() => ${clock.plus(245).toString()}`);
console.log(`Challenge 16 - Clock: clock.minus(15).toString() => ${clock.minus(15).toString()}`);

// https://github.com/lehungio/typescript/issues/17
import { SecretHandshake } from './modules/challenges/secret-handshake';
const secretHandshake = new SecretHandshake(8);
console.log(`Challenge 17 - Secret Handshake: secretHandshake.commands() => ${JSON.stringify(secretHandshake.commands())}`);
const secretHandshake2 = new SecretHandshake(4);
console.log(`Challenge 17 - Secret Handshake: secretHandshake2.commands() => ${JSON.stringify(secretHandshake2.commands())}`);
const secretHandshake3 = new SecretHandshake(2);
console.log(`Challenge 17 - Secret Handshake: secretHandshake3.commands() => ${JSON.stringify(secretHandshake3.commands())}`);
const secretHandshake4 = new SecretHandshake(1);
console.log(`Challenge 17 - Secret Handshake: secretHandshake4.commands() => ${JSON.stringify(secretHandshake4.commands())}`);
const secretHandshake5 = new SecretHandshake(16);
console.log(`Challenge 17 - Secret Handshake: secretHandshake5.commands() => ${JSON.stringify(secretHandshake5.commands())}`);
const secretHandshake6 = new SecretHandshake(17);
console.log(`Challenge 17 - Secret Handshake: secretHandshake6.commands() => ${JSON.stringify(secretHandshake6.commands())}`);
const secretHandshake7 = new SecretHandshake(32);
console.log(`Challenge 17 - Secret Handshake: secretHandshake7.commands() => ${JSON.stringify(secretHandshake7.commands())}`);

// https://github.com/lehungio/typescript/issues/18
import { find } from './modules/challenges/binary-search';
const findInput = [1, 3, 4, 6, 8, 9, 11];
const findTarget = 6;
console.log(`Challenge 18 - Binary Search: find(${JSON.stringify(findInput)}, ${findTarget}) => Index: ${find(findInput, findTarget)}`);
console.log(`Challenge 18 - Binary Search: find(${JSON.stringify(findInput)}, 11) => Index: ${find(findInput, 11)}`);
console.log(`Challenge 18 - Binary Search: find(${JSON.stringify(findInput)}, 9) => Index: ${find(findInput, 9)}`);

// https://github.com/lehungio/typescript/issues/19
import { LinkedList } from './modules/challenges/linked-list';
const linkedList = new LinkedList<number>();
linkedList.push(10);
linkedList.push(20);
console.log(`Challenge 19 - Linked List: linkedList.pop() => ${linkedList.pop()}`);
console.log(`Challenge 19 - Linked List: linkedList.pop() => ${linkedList.pop()}`);
linkedList.push(30);
console.log(`Challenge 19 - Linked List: linkedList.shift() => ${linkedList.shift()}`);
linkedList.push(40);
linkedList.push(50);
console.log(`Challenge 19 - Linked List: linkedList.shift() => ${linkedList.shift()}`);
console.log(`Challenge 19 - Linked List: linkedList.pop() => ${linkedList.pop()}`);
console.log(`Challenge 19 - Linked List: linkedList.shift() => ${linkedList.shift()}`);
console.log(`Challenge 19 - Linked List: linkedList.count() => ${linkedList.count()}`);
linkedList.push(60);
console.log(`Challenge 19 - Linked List: linkedList.count() => ${linkedList.count()}`);
console.log(`Challenge 19 - Linked List: linkedList.pop() => ${linkedList.pop()}`);
console.log(`Challenge 19 - Linked List: linkedList.pop() => ${linkedList.pop()}`);
console.log(`Challenge 19 - Linked List: linkedList.pop() => ${linkedList.pop()}`);
console.log(`Challenge 19 - Linked List: linkedList.pop() => ${linkedList.pop()}`);
console.log(`Challenge 19 - Linked List: linkedList.count() => ${linkedList.count()}`);
linkedList.push(70);
linkedList.push(80);
console.log(`Challenge 19 - Linked List: linkedList.unshift(90) => ${linkedList.unshift(90)}`);
console.log(`Challenge 19 - Linked List: linkedList.unshift(100) => ${linkedList.unshift(100)}`);
console.log(`Challenge 19 - Linked List: linkedList.shift() => ${linkedList.shift()}`);
console.log(`Challenge 19 - Linked List: linkedList.shift() => ${linkedList.shift()}`);
console.log(`Challenge 19 - Linked List: linkedList.shift() => ${linkedList.shift()}`);
console.log(`Challenge 19 - Linked List: linkedList.shift() => ${linkedList.shift()}`);
console.log(`Challenge 19 - Linked List: linkedList.count() => ${linkedList.count()}`);

// Rational Rascals
// Rational numbers are numbers that can be expressed as the quotient of two integers
// Goal: Create a class that can perform basic arithmetic operations on rational numbers
// https://github.com/lehungio/typescript/issues/20
import { Rational } from './modules/challenges/rational-numbers';
const rational1 = new Rational(1, 2);
const rational2 = new Rational(1, 1);
const rational3 = new Rational(1, 3);
const rational4 = new Rational(1, 4);
console.log(`Challenge 20 - Rational Numbers: rational1.toString() => ${rational1.toString()}`);
console.log(`Challenge 20 - Rational Numbers: rational2.toString() => ${rational2.toString()}`);
console.log(`Challenge 20 - Rational Numbers: rational3.toString() => ${rational3.toString()}`);
console.log(`Challenge 20 - Rational Numbers: rational4.toString() => ${rational4.toString()}`);
console.log(`Challenge 20 - Rational Numbers: rational1.add(rational2).toString() => ${rational1.add(rational2).toString()}`);
console.log(`Challenge 20 - Rational Numbers: rational1.sub(rational2).toString() => ${rational1.sub(rational2).toString()}`);
console.log(`Challenge 20 - Rational Numbers: rational1.mul(rational2).toString() => ${rational1.mul(rational2).toString()}`);
console.log(`Challenge 20 - Rational Numbers: rational1.div(rational2).toString() => ${rational1.div(rational2).toString()}`);
console.log(`Challenge 20 - Rational Numbers: rational3.div(rational4).toString() => ${rational3.div(rational4).toString()}`);
console.log(`Challenge 20 - Rational Numbers: rational3.mul(rational4).toString() => ${rational3.mul(rational4).toString()}`);
console.log(`Challenge 20 - Rational Numbers: rational3.add(rational4).toString() => ${rational3.add(rational4).toString()}`);
console.log(`Challenge 20 - Rational Numbers: rational3.sub(rational4).toString() => ${rational3.sub(rational4).toString()}`);

// Atbash Cipher Chronicles: Secrets of the Backwards Alphabet
// https://github.com/lehungio/typescript/issues/21
import { encode, decode } from './modules/challenges/atbash-cipher';
const encodeInput = 'Testing,1 2 3, testing.';
console.log(`Challenge 21 - Atbash Cipher: encode('${encodeInput}') => ${encode(encodeInput)}`);
const decodeInput = 'gvhgr mt123 gvhgr mt';
console.log(`Challenge 21 - Atbash Cipher: decode('${decodeInput}') => ${decode(decodeInput)}`);
const encodeInput01 = 'lehungio';
console.log(`Challenge 21 - Atbash Cipher: encode('${encodeInput01}') => ${encode(encodeInput01)}`);

// Simple Cipher Chronicles: Secrets of the Shift
// https://github.com/lehungio/typescript/issues/22
import { SimpleCipher } from './modules/challenges/simple-cipher';
const simpleCipher = new SimpleCipher();
const encodeInput02 = 'iamapandabear';
console.log(`Challenge 22 - Simple Cipher: encode('${encodeInput02}') => ${simpleCipher.encode(encodeInput02)}`);
const decodeInput02 = 'qayaeaagaciai';
console.log(`Challenge 22 - Simple Cipher: decode('${decodeInput02}') => ${simpleCipher.decode(decodeInput02)}`);
const encodeInput03 = 'zzzzzzzzzz';
console.log(`Challenge 22 - Simple Cipher: encode('${encodeInput03}') => ${simpleCipher.encode(encodeInput03)}`);
const decodeInput03 = 'zabcdefghi';
console.log(`Challenge 22 - Simple Cipher: decode('${decodeInput03}') => ${simpleCipher.decode(decodeInput03)}`);
const encodeInput04 = 'lehungio';
const simpleCipher2 = new SimpleCipher('abc');
console.log(`Challenge 22 - Simple Cipher: encode('${encodeInput04}') => ${simpleCipher2.encode(encodeInput04)}`);
const decodeInput04 = 'lfjuoiip';
console.log(`Challenge 22 - Simple Cipher: decode('${decodeInput04}') => ${simpleCipher2.decode(decodeInput04)}`);

// Challege 23 - Wordy
// The exercise provides a string that describes an arithmetic problem in plain English. 
// Your task is to parse this string and compute the answer according to the operation described.
import { answer } from './modules/challenges/wordy';
const wordyInput = 'What is 1 plus 1?';
console.log(`Challenge 23 - Wordy: answer('${wordyInput}') => ${answer(wordyInput)}`);
const wordyInput2 = 'What is 1 plus 1 plus 1?';
console.log(`Challenge 23 - Wordy: answer('${wordyInput2}') => ${answer(wordyInput2)}`);
const wordyInput3 = 'What is 1 plus 5 minus -2?';
console.log(`Challenge 23 - Wordy: answer('${wordyInput3}') => ${answer(wordyInput3)}`);
const wordyInput4 = 'What is 20 minus 4 minus 13?';
console.log(`Challenge 23 - Wordy: answer('${wordyInput4}') => ${answer(wordyInput4)}`);
const wordyInput5 = 'What is 17 minus 6 plus 3?';
console.log(`Challenge 23 - Wordy: answer('${wordyInput5}') => ${answer(wordyInput5)}`);
const wordyInput6 = 'What is 2 multiplied by -2 multiplied by 3?';
console.log(`Challenge 23 - Wordy: answer('${wordyInput6}') => ${answer(wordyInput6)}`);
const wordyInput7 = 'What is -3 plus 7 multiplied by -2?';
console.log(`Challenge 23 - Wordy: answer('${wordyInput7}') => ${answer(wordyInput7)}`);
