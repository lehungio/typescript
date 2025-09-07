export class Gigasecond {
  private readonly GIGASECOND = 10 ** 9 * 1000; // Convert to milliseconds
  private readonly futureDate: Date;

  constructor(private readonly moment: Date) {
    // Create a new date to avoid mutating the input
    this.futureDate = new Date(moment.getTime() + this.GIGASECOND);
  }

  date(): Date {
    // Return a new Date object to prevent mutation
    return new Date(this.futureDate.getTime());
  }

  secondsFromNow(): number {
    const now = new Date();
    // Calculate difference in milliseconds and convert to seconds
    return Math.floor((this.futureDate.getTime() - now.getTime()) / 1000);
  }

  secondsBetweenDates(targetDate: Date): number {
    // Calculate the difference in seconds between the target date and the current date
    return Math.floor((targetDate.getTime() - this.moment.getTime()) / 1000);
  }

  static secondsToDate(targetDate: Date): number {
    const now = new Date();
    // Calculate the difference in seconds between the target date and the current date
    return Math.floor((targetDate.getTime() - now.getTime()) / 1000);
  }

  static secondsToDays(seconds: number): number {
    const SECONDS_PER_DAY = 24 * 60 * 60; // 24 hours * 60 minutes * 60 seconds
    return Math.floor(seconds / SECONDS_PER_DAY);
  }
}
