export function sum(a: number, b: number): number {
    return a + b;
}

export function division(a: number, b: number): number {
    if(b != 0) {
        return a / b
    } else {
        throw new Error("Impossible")
    }

  }