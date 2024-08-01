// const firstname:string = "ihab"

import { GroupManager, Groupable, Inventory, InventoryItem, Product, RealElectronicProduct } from "./big.lab1";

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

export let electronicItem: InventoryItem<RealElectronicProduct> & Groupable = {
    id: 100,
    category: 'Electronics',
    metadata: {
        wattage: 500,
        model: 'X500'
    },
    name: 'e1',
    price: 100,
    quantiy: 1000,
    getKey() {
        return this.category
    }
}
const inventory: Inventory<InventoryItem<RealElectronicProduct>> = new Inventory()


// inventory.addItem(electronicItem)

// inventory.adjustPrices(10)
// inventory.adjustPrices("10")

// //inventory.updateItem(100,{price: 90})
// console.log(inventory.findItemsByCategory("Electronics"))
// console.log(electronicItem)

// const groupManager: GroupManager<InventoryItem<RealElectronicProduct>> = new GroupManager()

// groupManager.groupItems(inventory.findItemsByCategory("Electronics") as Array<InventoryItem<RealElectronicProduct>>)

// type Point = { 
//     x: number; 
//     y: number 
//   };
// type P = keyof Point

// const p: P = "y"

// function accessOfValueKey(obj: Point, key:P) {
//     return obj[key]
// }

// interface User {
//     name: String,
//     isAdmin: boolean,
//     age: number
// }

// type SecureUser<T extends User> = T['age'] extends true ? T & { adminSecret: string } : T

// function enhanceUser<T extends User>(user: T): SecureUser<T> {
//     if (!user.isAdmin) {
//         return user as SecureUser<T>
//     } else {
//         return { ...user, adminSecret: "erzere" }
//     }
// }

// console.log(enhanceUser({ name: "ihab", isAdmin: true, age: 10 }))

// interface Person {
//     name: String,
//     age: number
// }


// type PartialPerson = {
//     [k in keyof Person]?: Person[k]
// }



// type ReadOnlyPerson = {
//     readonly [k in keyof Person]?: Person[k]
// }


function log(target: any, name: string, descriptor: PropertyDescriptor) {

    console.log(target)
    console.log(name)
    console.log(descriptor)

    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${name} with`, args);
        const result = original.apply(this, args);
        console.log(`Result of ${name} is`, result);
        return result;
    };
    return descriptor;
}



// function enhanceLog(kind: string) {

//     return function (target: any, name: string, descriptor: PropertyDescriptor) {
//         console.log(target)
//         console.log(name)
//         console.log(descriptor)

//         const original = descriptor.value;
//         descriptor.value = function (...args: any[]) {
//             if(kind === "debug") {
//                 console.log("This debug method")
//             }
//             console.log(`Calling ${name} with`, args);
//             const result = original.apply(this, args);
//             console.log(`Result of ${name} is`, result);
//             return result;
//         };
//         return descriptor;
//     }
// }

// class Calculator {


//     @enhanceLog("debug")
//     add(x: number, y: number) {
//         return x + y
//     }

//     @enhanceLog("log")
//     multiplaction(x:number, y:number) {
//         return x * y
//     }
// }

// const cal = new Calculator()

// cal.add(10, 20)
// cal.multiplaction(1,5)


// //DEcoration of class

// function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
//     console.log('Class decorated:', constructor);
//     return class extends constructor {
//         newProperty = "new property";
//         hello = "override";
//     }
// }

// function classDecorator2<T extends {new(...args:any[]):{}}>(constructor:T) {
//     console.log('Class decorated:', constructor);
    
//     return class extends constructor {
//         hello = "override 2";
//         hello2 = "hello2"
//     }
// }

// @classDecorator2
// class MyClass {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//         this.hello = m;
//     }
// }

// const m = new MyClass("value of hello");

// console.log(m)


// function convertToNumber(input: string): number {
//     let number = parseFloat(input);
//     if (isNaN(number)) {
//         throw new Error("Input must be a valid number");
//     }
//     return number;
// }
// function processUserData(input: string): void {
//     try {
//         let number = convertToNumber(input);
//         console.log(`Le nombre entré est ${number}.`);
//     } catch (error) {
//         const err = error as Error
//         console.error(`An error occurred: ${err.message}`);
//     }finally {

//     }
// }
// processUserData("42");  
// processUserData("abc");


// class A {

//     @log
//     methodA() {

//     }
// }

// class B extends A{
//     methodA(): void {
//         console.log("Before B")
//         super.methodA()
//     }
// }

// new B().methodA()


interface CatchOptions {
    logLevel: 'debug' | 'error';
    notifyOnError: boolean;
}

function CatchAndLog(options: CatchOptions) {
    return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            try {
                return originalMethod.apply(this, args);
            } catch (e) {
                const error = e as Error
                console.error(`Error in ${propertyKey}: ${error}`);
                if (options.logLevel === 'debug') {
                    console.debug(`Stack Trace for ${propertyKey}: ${error.stack}`);
                }
                if (options.notifyOnError) {
                    console.log(`Notification sent for error in method ${propertyKey}`);
                    throw e
                }
            }
        };
        return descriptor;
    };
}


class PaymentProcessor {
    @CatchAndLog({logLevel:"error", notifyOnError: false})
    processPayment(amount: number, accountID: string) {
        if (amount <= 0) {
            throw new Error("Invalid amount for payment processing");
        }
        console.log(`Processing payment of $${amount} for account ${accountID}`);
    }
}


const processor = new PaymentProcessor();
processor.processPayment(0, "12345");