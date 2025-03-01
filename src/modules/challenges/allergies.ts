export class Allergies {
  private score: number;
  private allergens: { [key: string]: number } = {
    eggs: 1,
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128,
  };

  constructor(score: number) {
    this.score = score;
  }

  allergicTo(allergen: string): boolean {
    return (this.score & this.allergens[allergen]) !== 0;
  }

  list(): string[] {
    return Object.keys(this.allergens).filter((allergen) =>
      this.allergicTo(allergen)
    );
  }
}
