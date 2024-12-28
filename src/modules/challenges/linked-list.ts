export class Node<T> {
    value: T;
    next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

export class LinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private length: number = 0;

    push(value: T): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            if (this.tail) {
                this.tail.next = newNode;
                this.tail = newNode;
            }
        }
        this.length++;
    }

    pop(): T | null {
        if (!this.head) return null;

        if (this.head === this.tail) {
            const value = this.head.value;
            this.head = this.tail = null;
            this.length--;
            return value;
        }

        let current = this.head;
        while (current.next && current.next !== this.tail) {
            current = current.next;
        }

        const value = this.tail ? this.tail.value : null;
        this.tail = current;
        this.tail.next = null;
        this.length--;
        return value;
    }

    shift(): T | null {
        if (!this.head) return null;
        const value = this.head.value;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }
        this.length--;
        return value;
    }

    unshift(value: T): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    delete(value: T): void {
        if (!this.head) return;

        if (this.head.value === value) {
            this.shift();
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            if (current.next === this.tail) {
                this.tail = current;
            }
            current.next = current.next.next;
            this.length--;
        }
    }

    count(): number {
        return this.length;
    }
}