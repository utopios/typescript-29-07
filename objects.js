const person = {
    firstname: "ihab",
    lastname: "abadi",
    displayInformation() {
        console.log(this.firstname + " "+ this.lastname)
    }
}

console.log(person)

person.displayInformation()

function Person(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
    // this.displayInformation = function() {
    //     console.log(this.firstname + " "+ this.lastname)
    // }
}

Person.prototype.displayInformation = function() {
    console.log(this.firstname + " "+ this.lastname)
}

const p1 = new Person("ihab", "abadi")
p1.displayInformation()
console.log(p1)
console.log(p1.firstname + " "+ p1.lastname)

class User {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    set firstname(value) {
        this._firstname = value
    }

    get firstname() {
        return this._firstname
    }
}

class Trainer extends User {
    constructor(firstname, lastname, training) {
        super(firstname, lastname)
        this.training = training
    }
}

const u1 = new User("ihab", "Abadi")