export class GradeSchool {
  private db: { [key: number]: string[] } = {};

  roster(): { [key: number]: string[] } {
    // Return a deep copy of the roster to prevent external modification
    return JSON.parse(JSON.stringify(this.db));
  }

  add(student: string, grade: number): void {
    // Remove the student from any existing grade
    for (const key in this.db) {
      this.db[key] = this.db[key].filter(name => name !== student);
    }

    // Add the student to the specified grade
    if (!this.db[grade]) {
      this.db[grade] = [];
    }
    this.db[grade].push(student);
    this.db[grade].sort();
  }

  grade(grade: number): string[] {
    // Return a copy of the grade array to prevent external modification
    return this.db[grade] ? [...this.db[grade]] : [];
  }
}