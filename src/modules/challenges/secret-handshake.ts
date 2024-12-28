// export function commands(value: number): string[] {
//   // Define a mapping of bit values to corresponding actions
//   const actionsMap: Record<number, string> = {
//     1: "wink",
//     2: "double blink",
//     4: "close your eyes",
//     8: "jump",
//   };
  
//   // Initialize an empty array to store the actions
//   let actions: string[] = [];
  
//   // Iterate over the bit values 1, 2, 4, and 8
//   for (const bit of [1, 2, 4, 8]) {
//     // If the bit is set in the input value, add the corresponding action to the actions array
//     if (value & bit) {
//       actions.push(actionsMap[bit]);
//     }
//   }
  
//   // If the 16th bit is set in the input value, reverse the order of the actions
//   if (value & 16) {
//     actions.reverse();
//   }
  
//   // Return the list of actions
//   return actions;
// }

// Class definition
export class SecretHandshake {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  commands(): string[] {
    // Define a mapping of bit values to corresponding actions
    const actionsMap: Record<number, string> = {
      1: "wink",
      2: "double blink",
      4: "close your eyes",
      8: "jump",
    };
    
    // Initialize an empty array to store the actions
    let actions: string[] = [];
    
    // Iterate over the bit values 1, 2, 4, and 8
    for (const bit of [1, 2, 4, 8]) {
      // If the bit is set in the input value, add the corresponding action to the actions array
      if (this.value & bit) {
        actions.push(actionsMap[bit]);
      }
    }
    
    // If the 16th bit is set in the input value, reverse the order of the actions
    if (this.value & 16) {
      actions.reverse();
    }
    
    // Return the list of actions
    return actions;
  }
}

// Example usage:
const handshake = new SecretHandshake(31);
console.log(handshake.commands()); // Output: ["double blink", "wink"]