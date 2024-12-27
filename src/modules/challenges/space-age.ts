const EARTH_YEAR_IN_SECONDS = 31557600;

const ORBITAL_PERIODS: { [key in Planet]: number } = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

type Planet = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune';

export function age(planet: Planet, seconds: number): number {
  const earthYears = seconds / EARTH_YEAR_IN_SECONDS;
  const planetYears = earthYears / ORBITAL_PERIODS[planet];
  return parseFloat(planetYears.toFixed(2));
}