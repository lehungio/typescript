type EqualFn<T> = (lhs: T, rhs: T) => boolean;
type GetterFn<T> = () => T;
type SetterFn<T> = (value: T) => T;
type ChangeFn = () => void;
type UpdateFn<T> = (value?: T) => T;
type UnsubscribeFn = () => void;

type InputPair<T> = [GetterFn<T>, SetterFn<T>];

class Cell<T> {
  private static cells: Cell<any>[] = [];

  constructor(private _value: T, private updateFn?: UpdateFn<T>) {
    Cell.cells.push(this);
  }

  public static refresh(): void {
    let changeOccurred = false;

    for (const cell of Cell.cells) {
      if (cell.updateFn) {
        const oldValue = cell._value;
        cell._value = cell.updateFn();
        changeOccurred = oldValue !== cell._value;
      }
    }

    if (changeOccurred) {
      Observer.notifyAll();
    }
  }

  public set value(newValue: T) {
    this._value = newValue;
  }

  public get value(): T {
    return this._value;
  }
}

class Observer {
  private static observers: Observer[] = [];

  constructor(private updateFn: ChangeFn) {
    Observer.observers.push(this);
  }

  public static notifyAll(): void {
    for (const observer of Observer.observers) {
      observer.updateFn();
    }
  }

  public static unsubscribe(observer: Observer): void {
    const index = Observer.observers.indexOf(observer);
    if (index !== -1) {
      Observer.observers.splice(index, 1);
    }
  }
}

export function createInput<T>(initialValue: T): InputPair<T> {
  const cell = new Cell<T>(initialValue);

  const getInput: GetterFn<T> = () => cell.value;
  const setInput: SetterFn<T> = (newValue: T) => {
    cell.value = newValue;
    Cell.refresh();
    return cell.value;
  };

  return [getInput, setInput];
}

export function createComputed<T>(
  updateFn: UpdateFn<T>,
  initialValue?: T,
  equal?: boolean | EqualFn<T>
): GetterFn<T> {
  const initial = initialValue ?? updateFn();
  const cell = new Cell<T>(initial, updateFn);

  const getComputed: GetterFn<T> = () => cell.value;
  return getComputed;
}

export function createCallback(updateFn: ChangeFn): UnsubscribeFn {
  const observer = new Observer(updateFn);

  const unsubscribe: UnsubscribeFn = () => Observer.unsubscribe(observer);
  return unsubscribe;
}
