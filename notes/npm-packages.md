# How to Create and Publish an npm Package with TypeScript

## Overview
This guide walks you through creating a new npm package written in TypeScript and publishing it to the npm registry.

## Prerequisites
- Node.js (version 14 or above recommended)
- npm (bundled with Node.js)
- An npm account (https://www.npmjs.com/signup) for publishing packages
- Basic familiarity with TypeScript and npm

## Steps

### 1. Set Up Your Project
Create a new directory and initialize an npm project:
mkdir my-typescript-package
cd my-typescript-package
npm init -y

This creates a package.json file with default values.

### 2. Install Dependencies
Install TypeScript and its definitions for Node.js:
npm install --save-dev typescript @types/node

If you want to add testing (optional):
npm install --save-dev jest @types/jest ts-jest

### 3. Configure TypeScript
Create a tsconfig.json file:
npx tsc --init

Adjust as needed:
{
  "compilerOptions": {
    "target": "ES2019",
    "module": "CommonJS",
    "declaration": true,
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src"]
}

### 4. Write Your Code
Create a src directory and add an entry file:
mkdir src
src/index.ts:
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

### 5. Update package.json
Update package.json:
{
  "name": "my-typescript-package",
  "version": "1.0.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "jest"
  },
  "files": [
    "dist/**/*"
  ],
  "devDependencies": {
    "typescript": "^x.x.x",
    "@types/node": "^x.x.x",
    "jest": "^x.x.x",
    "@types/jest": "^x.x.x",
    "ts-jest": "^x.x.x"
  }
}

### 6. Build Your Package
npm run build
This creates the dist folder with compiled JavaScript and type definitions.

### 7. Test Your Package (Optional)
- Install ts-jest
```
npm install --save-dev jest ts-jest @types/jest
npx ts-jest config:init

// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```

If using Jest, create src/index.test.ts:
import { greet } from "./index";

test("greet function", () => {
  expect(greet("World")).toBe("Hello, World!");
});

Run tests:
npm test

### 8. Prepare for Publishing
Optionally create .npmignore if needed.
Log in to npm:
npm login

### 9. Publish Your Package
Ensure your version is correct in package.json.
npm publish
Your package is now on the npm registry.

### 10. Use Your Package
Consumers can install and use your package:
npm install my-typescript-package

Usage:
import { greet } from "my-typescript-package";
console.log(greet("Alice")); // "Hello, Alice!"

---
## Summary
- Initialize: npm init -y
- Install TypeScript: npm install --save-dev typescript
- Configure: npx tsc --init
- Code in src
- Build: npm run build
- Test (optional): npm test
- Publish: npm publish

You now have a fully typed, tested, and published npm package!
