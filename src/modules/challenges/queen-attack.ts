export class QueenAttack {
  white: [number, number];
  black: [number, number];

  constructor(
    positioning: { white?: [number, number]; black?: [number, number] } = {}
  ) {
    this.white = positioning.white || [7, 3];
    this.black = positioning.black || [0, 3];

    this.validatePosition(this.white);
    this.validatePosition(this.black);

    if (this.white[0] === this.black[0] && this.white[1] === this.black[1]) {
      throw new Error("Queens cannot share the same space");
    }
  }

  private validatePosition(position: [number, number]) {
    const [row, col] = position;
    if (row < 0 || row > 7 || col < 0 || col > 7) {
      throw new Error("Queen must be placed on the board");
    }
  }

  get canAttack(): boolean {
    const [whiteRow, whiteCol] = this.white;
    const [blackRow, blackCol] = this.black;

    // Same row or same column
    if (whiteRow === blackRow || whiteCol === blackCol) {
      return true;
    }

    // Diagonal attack
    if (Math.abs(whiteRow - blackRow) === Math.abs(whiteCol - blackCol)) {
      return true;
    }

    return false;
  }

  toString(): string {
    const board = Array.from({ length: 8 }, () => Array(8).fill("_"));

    board[this.white[0]][this.white[1]] = "W";
    board[this.black[0]][this.black[1]] = "B";

    return board.map((row) => row.join(" ")).join("\n");
  }
}
