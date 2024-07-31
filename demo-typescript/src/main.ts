// const firstname:string = "ihab"

import { Inventory, InventoryItem, Product, RealElectronicProduct } from "./big.lab1";

// let anyValue : any = 10

// anyValue = "test"

// const names: string[] = ["name1", "name2"]

// names.push(firstname)


// function printId(id: number | string) {
//     if (typeof id === "string") {
//   // id is of type string
//   console.log(id.toUpperCase());
//     } else {
//   // id is of type number
//   console.log(id);
//     }
//   }

//   printId(10)
//   printId("test")
//   printId("new value")


// type PointType = {
//     x: number,
//     y: number
// }

// interface PointInterface {
//     x:number,
//     y:number
// }

// interface PointInterface {
//     z:number
// }



// type Point = PointInterface 

// const element = {x:10, y:100}

// const newElement = element as Point


// Solution of lab3
// interface User {
//     name: string;
//     age: number;
//     occupation: string;
// }

// interface Admin {
//     name: string;
//     age: number;
//     role: string;
// }

// type Person = User | Admin

// const persons : Person[] = [
//     {
//         name: 'Toto Dupont',
//         age: 35,
//         occupation: 'Postman'
//     },
//     {
//         name: 'Jeanne Doe',
//         age: 25,
//         role: 'Admin'
//     }
// ]

// function isUser(obj: any): obj is User {
//     return obj && typeof obj.name === 'string' && typeof obj.age === 'number' && typeof obj.occupation ===  'string'
// }

// persons.forEach(person => {
//     console.log(`Name: ${person.name}, Age: ${person.age}`)
//     if(isUser(person)) {
//         const val = person as User
//         console.log(`Occupation: ${val.occupation}`)
//     }else {
//         const val = person as Admin
//         console.log(`Role: ${val.role}`)
//     }
   
// })

// type greeterFunction = {
//     (message:string): void,
//     name: string
// }

// function useGreeterFunction(element: greeterFunction, message:string):void {
//     console.log(element.name)
//     element(message)
// }

// const greeter: greeterFunction = ((message: string) => {
//     console.log("add some extra " + message);
//   }) as greeterFunction;

// greeter.name = "added name"

// useGreeterFunction(greeter, "ihab")

// function firstElement<Type>(arr: Type[]): Type | undefined {
//     return arr[0];
// }

// firstElement(["e", "e3"])
// firstElement([10, 30])
// firstElement([true, false])


// function makeDate(timestamp: number): Date;
// function makeDate(m: number, d: number, y: number): Date;

// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
//     return new Date()
// }

// function getName({name}: Person):void {
//     console.log(name)
// }

// import {formatDate} from "./lab4"

// console.log(formatDate("2024-07-29", true))

// import { Point } from "./demo-obj";

// const point = new Point(10, "20")
// const point2 = new Point("value")

// point.display()


// interface IElement {
//     id:string
//   }
//   class Stack<T extends IElement> {
//     private _stack: T[];
//     constructor() {
//        this._stack = [];    
//     }
//     push(element:T) {
//         this._stack.push(element);
//     }
//     getElementById(id:string): T | undefined {
//         return this._stack.find(e => e.id === id);
//     }

//     get stack():T[] {
//         return this._stack
//     }
//   }
//   type StackElement = {name?:string} & IElement

//   let myStack: Stack<StackElement> = new Stack();
//   myStack.push({id: '&', name:'ihab'});
//   myStack.push({id: 'b'});
//   myStack.push({id: 'c'});

//   myStack.stack.forEach((e:StackElement) => {
//     console.log(e.name)
//   })
  
//   console.log(myStack.getElementById('b'));



// interface Item<T> {
//     id: number
//     name:number
//     category: "Clothing" | "Food"
// }

// interface Product<T> extends Item<T> {
//     price:number
// }

// type CustomProduct = {color: string}

export let electronicItem : InventoryItem<RealElectronicProduct> = {
    id: 100,
    category: 'Electronics',
    metadata: {
        wattage: 500,
        model: 'X500'
    },
    name: 'e1',
    price: 100,
    quantiy: 1000
}
const inventory : Inventory<InventoryItem<RealElectronicProduct>>= new Inventory()
inventory.addItem(electronicItem)
inventory.updateItem(100,{price: 90})
console.log(inventory.findItemsByCategory("Electronics"))
console.log(electronicItem)