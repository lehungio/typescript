import { describe, it, expect, xit } from "@jest/globals";
import { Gigasecond } from "../../../modules/challenges/gigasecond";

describe("Gigasecond", () => {
  it("date only specification of time", () => {
    const gs = new Gigasecond(new Date(Date.parse("2011-04-25")));
    const expectedDate = new Date(Date.parse("2043-01-01T01:46:40Z"));
    expect(gs.date()).toEqual(expectedDate);
  });

  it("second test for date only specification of time", () => {
    const gs = new Gigasecond(new Date(Date.parse("1977-06-13")));
    const expectedDate = new Date(Date.parse("2009-02-19T01:46:40Z"));
    expect(gs.date()).toEqual(expectedDate);
  });

  it("third test for date only specification of time", () => {
    const gs = new Gigasecond(new Date(Date.parse("1959-07-19")));
    const expectedDate = new Date(Date.parse("1991-03-27T01:46:40Z"));
    expect(gs.date()).toEqual(expectedDate);
  });

  it("full time specified", () => {
    const gs = new Gigasecond(new Date(Date.parse("2015-01-24T22:00:00Z")));
    const expectedDate = new Date(Date.parse("2046-10-02T23:46:40Z"));
    expect(gs.date()).toEqual(expectedDate);
  });

  it("full time with day roll-over", () => {
    const gs = new Gigasecond(new Date(Date.parse("2015-01-24T23:59:59Z")));
    const expectedDate = new Date(Date.parse("2046-10-03T01:46:39Z"));
    expect(gs.date()).toEqual(expectedDate);
  });

  it("does not mutate the input", () => {
    const gs = new Gigasecond(new Date(Date.parse("2015-01-24T23:59:59Z")));
    const expectedDate = new Date(Date.parse("2046-10-03T01:46:39Z"));
    gs.date();
    expect(gs.date()).toEqual(expectedDate);
  });

  it("TODO Second from now", () => {
    const gs = new Gigasecond(new Date(Date.parse("2015-01-24T23:59:59Z")));
    // expect(gs.secondsFromNow()).toEqual(1000000000);
  });

  it("Second between dates", () => {
    const gs = new Gigasecond(new Date(Date.parse("2015-01-24T23:59:59Z")));
    const expectedDate = new Date(Date.parse("2046-10-03T01:46:39Z"));
    expect(gs.secondsBetweenDates(expectedDate)).toEqual(1000000000);
  });

  it("TODO seconds to date with current date", () => {
    const expectedDate = new Date(Date.parse("2046-10-03T01:46:39Z"));
    // expect(Gigasecond.secondsToDate(expectedDate)).toEqual(1000000000);
  });

  it("Seconds to days with 1 Gigasecond to 11574 days", () => {
    expect(Gigasecond.secondsToDays(1000000000)).toEqual(11574);
  });
});

describe('Gigasecond Seconds From Now', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  it('should correctly calculate seconds from now', () => {
    const startDate = new Date();
    const gigasecond = new Gigasecond(startDate);

    // Simulate a small delay to ensure the test is realistic
    setTimeout(() => {
      const secondsFromNow = gigasecond.secondsFromNow();
      const expectedSeconds = Math.floor((gigasecond['futureDate'].getTime() - new Date().getTime()) / 1000);

      // Allow a small margin of error due to execution time
      expect(secondsFromNow).toBeCloseTo(expectedSeconds, -1);
    }, 1000);
  });

  test('secondsFromNow should return the correct number of seconds', () => {
    const startDate = new Date();
    const gigasecond = new Gigasecond(startDate);
    
    // Fast forward time by 1 second to ensure the test is not flaky
    jest.advanceTimersByTime(1000);

    const secondsFromNow = gigasecond.secondsFromNow();
    const expectedSeconds = Math.floor((gigasecond.date().getTime() - new Date().getTime()) / 1000);

    expect(secondsFromNow).toBe(expectedSeconds);
  });
});

describe('Gigasecond Seconds To Date', () => {
  describe('secondsToDate', () => {
    it('should return the correct number of seconds between now and the target date', () => {
      const now = new Date();
      const futureDate = new Date(now.getTime() + 5000); // 5 seconds in the future

      const seconds = Gigasecond.secondsToDate(futureDate);

      expect(seconds).toBeCloseTo(5, 0); // Allowing for slight timing differences
    });

    it('should return a negative number if the target date is in the past', () => {
      const now = new Date();
      const pastDate = new Date(now.getTime() - 5000); // 5 seconds in the past

      const seconds = Gigasecond.secondsToDate(pastDate);

      expect(seconds).toBeCloseTo(-5, 0); // Allowing for slight timing differences
    });

    it('should return zero if the target date is now', () => {
      const now = new Date();

      const seconds = Gigasecond.secondsToDate(now);

      expect(seconds).toBe(0);
    });
  });
});