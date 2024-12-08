# TypeScript Challenges

## Overview

Welcome to the **TypeScript Challenges Package**! This package is designed to help beginners and intermediate developers learn TypeScript through practical coding exercises and programming challenges. Whether you are just starting or looking to sharpen your skills, this package provides a variety of functions and challenges to enhance your understanding of TypeScript.

## Features

- **Learn TypeScript Basics**: Explore fundamental concepts with easy-to-understand functions.
- **Programming Challenges**: Solve challenges that reinforce your learning and improve problem-solving skills.
- **Well-structured Code**: Clear examples and implementations to guide you through the learning process.
- **Testing with Jest**: Built-in tests to validate your solutions and ensure code quality.

## Installation

You can install the package via npm:

```bash
npm install @lehungio/typescript
```

## Usage

To use the functions provided in this package, simply require it in your TypeScript file:

- Import and Use the Classes in a Consumer Project

```ts
// Import specific classes
import { HelloWorld, DoorPassword } from '@lehungio/typescript';

// Or import the entire module
import * as Challenges from '@lehungio/typescript';

const helloWorld = new Challenges.HelloWorld();
helloWorld.greet(); // Output: "Hello, World!"
```

- If your project uses CommonJS, modify index.ts to use module.exports:

```ts
// index.ts (CommonJS)
const HelloWorld = require('./classes/challenges/HelloWorld.ts');

module.exports = { HelloWorld };
```

## Programming Challenges

The package includes a series of programming challenges to help you practice your skills. Each challenge is designed to address different TypeScript concepts.

### Example Challenge
Challenge: Write a function that takes an array of numbers and returns the sum.

#### Solution:

```ts
function sumArray(arr: number[]): number {
    return arr.reduce((acc, num) => acc + num, 0);
}
```

## Running Tests

To ensure everything is working correctly, you can run the tests included with the package. Make sure you have Jest installed, then run:

```bash
npm test
npx jest __tests__/HelloWorld.test.ts
```

## Contributing
Contributions are welcome! If you have ideas for new features, challenges, or improvements, please submit a pull request or open an issue.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.

## Contact
If you have any questions or feedback, feel free to reach out!

- Email: me@lehungio.com 
- GitHub: @lehungio
- [Challenge Me!!!](https://github.com/lehungio/typescript/issues/new?assignees=&labels=new&projects=&template=DEFAULT.md&title=Programming+Challenge%3A+%5BChallenge+Name%5D%5BNamespace%5D)