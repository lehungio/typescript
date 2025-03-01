const DEFAULT_STUDENTS: Student[] = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Fred",
  "Ginny",
  "Harriet",
  "Ileana",
  "Joseph",
  "Kincaid",
  "Larry",
];

const PLANT_CODES = {
  G: "grass",
  V: "violets",
  R: "radishes",
  C: "clover",
} as const;

type Student = string;
type Plant = (typeof PLANT_CODES)[keyof typeof PLANT_CODES];
type Plants = Plant[];
type Pots = Plants[];

export class Garden {
  private studentPlants: Record<Student, Plants> = {};

  constructor(diagram: string, students: Student[] = DEFAULT_STUDENTS) {
    const rows = diagram.split("\n");
    students.sort();

    students.forEach((student, idx) => {
      this.studentPlants[student] = [
        PLANT_CODES[rows[0][2 * idx] as keyof typeof PLANT_CODES],
        PLANT_CODES[rows[0][2 * idx + 1] as keyof typeof PLANT_CODES],
        PLANT_CODES[rows[1][2 * idx] as keyof typeof PLANT_CODES],
        PLANT_CODES[rows[1][2 * idx + 1] as keyof typeof PLANT_CODES],
      ];
    });
  }

  public plants(student: Student): Plants {
    return this.studentPlants[student] || [];
  }
}
