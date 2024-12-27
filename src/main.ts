// https://github.com/lehungio/typescript/issues/1
import { greet } from './modules/challenges/hello-world';
console.log(greet('World'));

// https://github.com/lehungio/typescript/issues/2
import { twoFer } from './modules/challenges/two-fer';
console.log(twoFer('LehungIO'));

// https://github.com/lehungio/typescript/issues/3
import { colorCode } from './modules/challenges/resistor-color';
console.log(colorCode('black'));

// https://github.com/lehungio/typescript/issues/4
import { resistorColorDuoDecoder } from './modules/challenges/resistor-color-duo';
console.log(resistorColorDuoDecoder(['brown', 'black'])); // 10

// https://github.com/lehungio/typescript/issues/5
import { resistorColorTrioDecoder } from './modules/challenges/resistor-color-trio';
console.log(resistorColorTrioDecoder(['brown', 'black', 'red'])); // 1 kiloohms