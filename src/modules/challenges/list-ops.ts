export class List<T> {
  private values: T[];

  private constructor(...values: T[]) {
    this.values = values;
  }

  static create<T>(...values: T[]): List<T> {
    return new List(...values);
  }

  append(list: List<T>): List<T> {
    return new List(...this.values, ...list.values);
  }

  concat(lists: List<List<T>>): List<T> {
    let result: T[] = [...this.values];
    lists.values.forEach(list => {
      result = [...result, ...list.values];
    });
    return new List(...result);
  }

  filter(predicate: (value: T) => boolean): List<T> {
    return new List(...this.values.filter(predicate));
  }

  length(): number {
    return this.values.length;
  }

  map<U>(mapper: (value: T) => U): List<U> {
    return new List(...this.values.map(mapper));
  }

  foldl<U>(reducer: (acc: U, value: T) => U, initial: U): U {
    return this.values.reduce(reducer, initial);
  }

  foldr<U>(reducer: (acc: U, value: T) => U, initial: U): U {
    return this.values.reduceRight(reducer, initial);
  }

  reverse(): List<T> {
    return new List(...this.values.reverse());
  }

  forEach(callback: (value: T) => void): void {
    this.values.forEach(callback);
  }

  toString(): string {
    return `[${this.values.join(', ')}]`;
  }
}