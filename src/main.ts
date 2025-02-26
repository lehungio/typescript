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

// Challege 24 - List Lunacy (list-ops)
// manipulate arrays (or lists) and perform various operations using TypeScript. Consider this a playground to test your skills in handling collections of data.
// implement standard operations such as map, filter, reduce, and more to manipulate lists in TypeScript
import { List } from './modules/challenges/list-ops';
const list1 = List.create(1, 2);
const list2 = List.create(3);
const list3 = List.create<number>();
const list4 = List.create(4, 5, 6);
const listOfLists = List.create(list2, list3, list4);
console.log(`Challenge 24 - List Ops: list1.append(list2) => ${list1.append(list2).toString()}`);
console.log(`Challenge 24 - List Ops: list1.concat(listOfLists) => ${list1.concat(listOfLists).toString()}`);
console.log(`Challenge 24 - List Ops: list1.filter((el) => el % 2 === 1).toString() => ${list1.filter((el) => el % 2 === 1).toString()}`);
console.log(`Challenge 24 - List Ops: list1.length() => ${list1.length()}`);
console.log(`Challenge 24 - List Ops: list1.map((el) => ++el) => ${list1.map((el) => ++el)}`);
console.log(`Challenge 24 - List Ops: list1.foldl((acc, el) => acc + el, 0) => ${list1.foldl((acc, el) => acc + el, 0)}`);
console.log(`Challenge 24 - List Ops: list1.foldr((acc, el) => acc + el, 0) => ${list1.foldr((acc, el) => acc + el, 0)}`);
console.log(`Challenge 24 - List Ops: list1.reverse() => ${list1.reverse()}`);
list1.forEach((el) => console.log(`Challenge 24 - List Ops: list1.forEach((el) => console.log(el)) => ${el}`));

// Challenge 25 - Word Count
// Implement a function that counts the occurrences of words in a given phrase.
import { count } from './modules/challenges/word-count';
const wordCountInput = 'word';
console.log(`Challenge 25 - Word Count: count('${wordCountInput}') => ${JSON.stringify(count(wordCountInput))}`);
const wordCountInput2 = 'one of each';
console.log(`Challenge 25 - Word Count: count('${wordCountInput2}') => ${JSON.stringify(count(wordCountInput2))}`);
const wordCountInput3 = 'one fish two fish red fish blue fish';
console.log(`Challenge 25 - Word Count: count('${wordCountInput3}') => ${JSON.stringify(count(wordCountInput3))}`);
const wordCountInput4 = 'one,two,three';
console.log(`Challenge 25 - Word Count: count('${wordCountInput4}') => ${JSON.stringify(count(wordCountInput4))}`);
const wordCountInput5 = 'one,\ntwo,\nthree';
console.log(`Challenge 25 - Word Count: count('${wordCountInput5}') => ${JSON.stringify(count(wordCountInput5))}`);
const wordCountInput6 = 'car: carpet as java: javascript!!&@$%^&"';
console.log(`Challenge 25 - Word Count: count('${wordCountInput6}') => ${JSON.stringify(count(wordCountInput6))}`);
const wordCountInput7 = 'testing, 1, 2 testing';
console.log(`Challenge 25 - Word Count: count('${wordCountInput7}') => ${JSON.stringify(count(wordCountInput7))}`);
const wordCountInput8 = 'go Go GO Stop stop';
console.log(`Challenge 25 - Word Count: count('${wordCountInput8}') => ${JSON.stringify(count(wordCountInput8))}`);
const wordCountInput9 = "First: don't laugh. Then: don't cry.";
console.log(`Challenge 25 - Word Count: count('${wordCountInput9}') => ${JSON.stringify(count(wordCountInput9))}`);

// Challenge 26 - difference-of-squares
// Find the difference between the square of the sum and the sum of the squares of the first N natural numbers.
import { Squares } from './modules/challenges/difference-of-squares';
const squares = new Squares(5);
console.log(`Challenge 26 - Difference of Squares: squares.squareOfSum => ${squares.squareOfSum}`);
console.log(`Challenge 26 - Difference of Squares: squares.sumOfSquares => ${squares.sumOfSquares}`);
console.log(`Challenge 26 - Difference of Squares: squares.difference => ${squares.difference}`);

// Challenge 27 - Gigasecond
// Calculate the date that someone will celebrate their 1 Gs anniversary.
import { Gigasecond } from './modules/challenges/gigasecond';
const gigasecond = new Gigasecond(new Date('2011-04-25'));
console.log(`Challenge 27 - Gigasecond: gigasecond.date() => ${gigasecond.date()}`);
const gigasecondChallenge27 = new Gigasecond(new Date('2025-02-25'));
console.log(`Challenge 27 - Gigasecond: gigasecondChallenge27.date() => ${gigasecondChallenge27.date()}`);
console.log(`Challenge 27 - Gigasecond: gigasecondChallenge27.secondsFromNow() => ${gigasecondChallenge27.secondsFromNow()}`);
console.log(`Challenge 27 - Gigasecond: gigasecondChallenge27.secondsBetweenDates(new Date('2044-10-05T01:46:40Z')) => ${gigasecondChallenge27.secondsBetweenDates(new Date('2044-10-05T01:46:40Z'))}`);
console.log(`Challenge 27 - Gigasecond: Gigasecond.secondsToDate(new Date('2044-10-05T01:46:40Z')) => ${Gigasecond.secondsToDate(new Date('2044-10-05T01:46:40Z'))}`);
console.log(`Challenge 27 - Gigasecond: Gigasecond.secondsToDays(1000000000) => ${Gigasecond.secondsToDays(1000000000)}`);
console.log(`Challenge 27 - Gigasecond: Gigasecond.secondsToDays(60) => ${Gigasecond.secondsToDays(60)}`);
console.log(`Challenge 27 - Gigasecond: Gigasecond.secondsToDays(60*60*24) => ${Gigasecond.secondsToDays(60*60*24)}`);

// Challenge 28 - Reverse String
// Reverse a string using TypeScript.
import { reverse } from './modules/challenges/reverse-string';
const reverseStringInput = 'hello';
console.log(`Challenge 28 - Reverse String: reverse('${reverseStringInput}') => ${reverse(reverseStringInput)}`);

// Challenge 29 - Triangle
// Determine the type of triangle based on the lengths of its sides.
import { Triangle } from './modules/challenges/triangle';
console.log(`Challenge 29 - Triangle Check`);
const triangle = new Triangle(3, 4, 5);
console.log(`Challenge 29 - Triangle: triangle.isEquilateral => ${triangle.isEquilateral}`);
console.log(`Challenge 29 - Triangle: triangle.isIsosceles => ${triangle.isIsosceles}`);
console.log(`Challenge 29 - Triangle: triangle.isScalene => ${triangle.isScalene}`);
const triangle2 = new Triangle(3, 3, 3);
console.log(`Challenge 29 - Triangle: triangle2.isEquilateral => ${triangle2.isEquilateral}`);
console.log(`Challenge 29 - Triangle: triangle2.isIsosceles => ${triangle2.isIsosceles}`);
console.log(`Challenge 29 - Triangle: triangle2.isScalene => ${triangle2.isScalene}`);

// Challenge 30 - Collatz Conjecture
// The Collatz Conjecture is a sequence of numbers that starts with a positive integer and applies a set of rules to determine the next number in the sequence.
import { steps } from './modules/challenges/collatz-conjecture';
const collatzConjectureInput = 16;
console.log(`Challenge 30 - Collatz Conjecture: steps(${collatzConjectureInput}) => ${steps(collatzConjectureInput)}`); 
const collatzConjectureInput2 = 12;
console.log(`Challenge 30 - Collatz Conjecture: steps(${collatzConjectureInput2}) => ${steps(collatzConjectureInput2)}`); 
const collatzConjectureInput3 = 1000000;
console.log(`Challenge 30 - Collatz Conjecture: steps(${collatzConjectureInput3}) => ${steps(collatzConjectureInput3)}`); 
