interface Shape {
    name: string
}
interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
}

type StringNumberPair = [string, number];
const myStringNumber: StringNumberPair = ["user", 12];

export class Point {
    readonly constValue = 10
    // Overloads
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any) {
        // To be implemented
    }

    display() :void {
        console.log("Point object")
    }
}


interface Person {
    name: string,
    age: number

    
}
interface WithId {
    readonly id: number,
    //getId(): number
}
class User implements Person, WithId {
    name: string;
    age: number;
    private _id: number;
    static count:number = 0
    constructor(name:string, age:number) {
        this.name = name
        this.age = age
        this._id = ++User.count
    }

    get id():number {
        return this._id
    }
    // getId(): number {
    //     return this.id
    // }
}

const u1 :User = new User('ihab', 37)
console.log(u1.id)