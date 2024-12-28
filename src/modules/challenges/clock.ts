// Solution 01 - Make default - Run error
// export class Clock {
//   private hours: number;
//   private minutes: number;

//   constructor(hours: number, minutes: number = 0) {
//       this.hours = hours;
//       this.minutes = minutes;
//       this.rollover();
//   }

//   static at(hours: number, minutes: number = 0) {
//       return new Clock(hours, minutes);
//   }

//   plus(minutes: number) {
//       this.minutes += minutes;
//       this.rollover();
//       return this;
//   }
  
//   minus(minutes: number) {
//       this.minutes -= minutes;
//       this.rollover();
//       return this;
//   }

//   toString() {
//       let hoursStr = this.hours.toString().padStart(2, '0');
//       let minutesStr = this.minutes.toString().padStart(2, '0');
//       return `${hoursStr}:${minutesStr}`;
//   }

//   private rollover() {
//       this.hours = (this.hours + Math.floor(this.minutes / 60)) % 24;
//       this.minutes = this.minutes % 60;
//       if (this.minutes < 0) {
//           this.minutes += 60;
//           this.hours = (this.hours === 0) ? 23 : this.hours - 1;
//       }
//       if (this.hours < 0) {
//           this.hours += 24;
//       }
//   }
// }


// Solution 02: Copilot
export class Clock {
  private hours: number;
  private minutes: number;

  constructor(hours: number, minutes: number = 0) {
      this.hours = hours;
      this.minutes = minutes;
      this.rollover();
  }

  static at(hours: number, minutes: number = 0) {
      return new Clock(hours, minutes);
  }

  plus(minutes: number) {
      this.minutes += minutes;
      this.rollover();
      return this;
  }
  
  minus(minutes: number) {
      this.minutes -= minutes;
      this.rollover();
      return this;
  }

  toString() {
      let hoursStr = this.hours.toString().padStart(2, '0');
      let minutesStr = this.minutes.toString().padStart(2, '0');
      return `${hoursStr}:${minutesStr}`;
  }

  equals(other: Clock) {
      return this.hours === other.hours && this.minutes === other.minutes;
  }

  // This method ensures that both hours and minutes are correctly normalized, even when minutes are negative. 
  // The hours are adjusted accordingly to ensure the time is accurate.
  private rollover() {
    // Normalize minutes and adjust hours accordingly
    this.hours += Math.floor(this.minutes / 60);
    this.minutes = ((this.minutes % 60) + 60) % 60;

    if (this.minutes < 0) {
        this.minutes += 60;
        this.hours--;
    }

    // Normalize hours to be within 0-23 range
    this.hours = (((this.hours % 24) + 24) % 24);

    if (this.hours < 0) {
        this.hours += 24;
    }
  }
}

// Wrong Logic for minus minuntes
  // private rollover() {
  //     this.hours = (this.hours + Math.floor(this.minutes / 60)) % 24;
  //     this.minutes = this.minutes % 60;
  //     if (this.minutes < 0) {
  //         this.minutes += 60;
  //         this.hours = (this.hours === 0) ? 23 : this.hours - 1;
  //     }
  //     if (this.hours < 0) {
  //         this.hours += 24;
  //     }
  // }

  // 1 hour distance to the right logic
  // private rollover() {
  //   // Normalize minutes and adjust hours accordingly
  //   this.hours += Math.floor(this.minutes / 60);
  //   this.minutes = this.minutes % 60;

  //   if (this.minutes < 0) {
  //       this.minutes += 60;
  //       this.hours--;
  //   }

  //   // Normalize hours to be within 0-23 range
  //   this.hours = ((this.hours % 24) + 24) % 24;
  // }
