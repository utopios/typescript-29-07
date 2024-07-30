const firstname:string = "ihab"

let anyValue : any = 10

anyValue = "test"

const names: string[] = ["name1", "name2"]

names.push(firstname)


function printId(id: number | string) {
    if (typeof id === "string") {
  // id is of type string
  console.log(id.toUpperCase());
    } else {
  // id is of type number
  console.log(id);
    }
  }

  printId(10)
  printId("test")
  printId("new value")


type PointType = {
    x: number,
    y: number
}

interface PointInterface {
    x:number,
    y:number
}

interface PointInterface {
    z:number
}



type Point = PointInterface 

const element = {x:10, y:100}

const newElement = element as Point




