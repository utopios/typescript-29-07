// const firstname:string = "ihab"

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
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin

const persons : Person[] = [
    {
        name: 'Toto Dupont',
        age: 35,
        occupation: 'Postman'
    },
    {
        name: 'Jeanne Doe',
        age: 25,
        role: 'Admin'
    }
]

function isUser(obj: any): obj is User {
    return obj && typeof obj.name === 'string' && typeof obj.age === 'number' && typeof obj.occupation ===  'string'
}

persons.forEach(person => {
    console.log(`Name: ${person.name}, Age: ${person.age}`)
    if(isUser(person)) {
        const val = person as User
        console.log(`Occupation: ${val.occupation}`)
    }else {
        const val = person as Admin
        console.log(`Role: ${val.role}`)
    }
   
})

type greeterFunction = {
    (message:string): void,
    name: string
}

function useGreeterFunction(element: greeterFunction, message:string):void {
    console.log(element.name)
    element(message)
}

useGreeterFunction((a)=>{console.log("add some extra" + a)}, "ihab")
