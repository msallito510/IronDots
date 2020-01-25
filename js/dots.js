class Player {
  constructor(maxRows, maxColumns) {
    this.initialBody = [
      { row: 1, column: 4 },
      { row: 1, column: 3 },
      { row: 1, column: 2 },
      { row: 1, column: 1 }
    ];
    this.body = [...this.initialBody];
    this.maxRows = maxRows;
    this.maxColumns = maxColumns;
    this.populateWithDots = undefined;
  }
}
