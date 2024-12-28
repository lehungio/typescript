// Solution 1: Can not pass the Unique Name test
// export class Robot {
//   private static usedNames = new Set<string>();
//   name: string;

//   private static getRandomLetter(): string {
//     const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     return letters[Math.floor(Math.random() * letters.length)]; // random letter  from A to Z
//   }

//   private static getRandomNumber(): string {
//     return Math.floor(Math.random() * 1000).toString().padStart(3, '0'); // random number from 0 to 999
//   }

//   // more random
//   private static randomDigit(): string {
//     return Math.floor(Math.random() * 10).toString(); // random digit from 0 to 9
//   }

//   private static generateName(): string {
//     let name;
//     do {
//       name = `${this.getRandomLetter()}${this.getRandomLetter()}${this.getRandomNumber()}`;
//       // name = `${this.getRandomLetter()}${this.getRandomLetter()}${this.randomDigit()}${this.randomDigit()}${this.randomDigit()}`;
//     } while (Robot.usedNames.has(name));
//     Robot.usedNames.add(name);

//     // Check if the name was successfully added to the set
//     if (!Robot.usedNames.has(name)) {
//       throw new Error(`Failed to add name: ${name}`);
//     }

//     return name;
//   }

//   constructor() {
//     this.name = Robot.generateName();
//   }

//   resetName(): void {
//     Robot.usedNames.delete(this.name);
//     this.name = Robot.generateName();
//   }

//   static releaseNames(): void {
//     Robot.usedNames.clear();
//   }
// }

// Solution 2: Pre-generate all possible names
// ✓ all the names can be generated (404293 ms)
// const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const DIGITS = '0123456789';

// function generateAllPossibleNames(): string[] {
//   const names: string[] = [];
//   for (const letter1 of LETTERS) {
//     for (const letter2 of LETTERS) {
//       for (let i = 0; i <= 999; i++) {
//         const number = i.toString().padStart(3, '0');
//         names.push(`${letter1}${letter2}${number}`);
//       }
//     }
//   }

//   // console.log(`Total number of Robot names: ${names.length}`);
//   return names;
// }

// export class Robot {
//   private static allNames = generateAllPossibleNames();
//   private static usedNames = new Set<string>();
//   name: string;

//   private static getRandomName(): string {
//     if (Robot.allNames.length === 0) {
//       throw new Error('No more robot names available');
//     }
//     const index = Math.floor(Math.random() * Robot.allNames.length);
//     const name = Robot.allNames.splice(index, 1)[0];
//     Robot.usedNames.add(name);
//     return name;
//   }

//   constructor() {
//     this.name = Robot.getRandomName();
//   }

//   resetName(): void {
//     Robot.usedNames.delete(this.name);
//     this.name = Robot.getRandomName();
//   }

//   static releaseNames(): void {
//     Robot.allNames = generateAllPossibleNames();
//     Robot.usedNames.clear();
//   }
// }

// Solution 3: optimized solution
const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS = '0123456789';

function generateAllPossibleNames(): string[] {
  const names: string[] = [];
  for (const letter1 of ABC) {
    for (const letter2 of ABC) {
      for (let i = 0; i <= 999; i++) {
        const number = i.toString().padStart(3, '0');
        names.push(`${letter1}${letter2}${number}`);
      }
    }
  }
  return names;
}

export class Robot {
  private static allNames = generateAllPossibleNames();
  private static usedNames = new Set<string>();
  name: string;

  private static getRandomName(): string {
    if (Robot.allNames.length === 0) {
      throw new Error('No more robot names available');
    }
    const index = Math.floor(Math.random() * Robot.allNames.length);
    const name = Robot.allNames.splice(index, 1)[0];
    Robot.usedNames.add(name);
    return name;
  }

  constructor() {
    this.name = Robot.getRandomName();
  }

  resetName(): void {
    Robot.usedNames.delete(this.name);
    this.name = Robot.getRandomName();
  }

  static releaseNames(): void {
    Robot.allNames = generateAllPossibleNames();
    Robot.usedNames.clear();
  }
}