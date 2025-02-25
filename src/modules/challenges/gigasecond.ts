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
}
