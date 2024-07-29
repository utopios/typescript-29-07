class Media {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        console.log(this.constructor.name)
    }
}

class Book extends Media {
    constructor(title, author, year, pageCount) {
        super(title, author, year);
        this.pageCount = pageCount;
    }
}

class Film extends Media {
    constructor(title, author, year, duration) {
        super(title, author, year);
        this.duration = duration;
    }
}

class Magazine extends Media {
    constructor(title, author, year, issueNumber) {
        super(title, author, year);
        this.issueNumber = issueNumber;
    }
}

class Library {
    constructor() {
        this.collection = [];
    }

    addMedia(media) {
        this.collection.push(media);
    }

    removeMedia(title) {
        this.collection = this.collection.filter(media => media.title !== title);
    }

    findMediaByTitle(title) {
        return this.collection.find(media => media.title === title);
    }

    findMediaByAuthor(author) {
        return this.collection.find(media => media.author === author);
    }


    displayLibrary() {
        this.collection.forEach(media => {
            console.log(`Title: ${media.title}, Author: ${media.author}, Year: ${media.year}`);
            if (media instanceof Book) {
                console.log(`Number of page: ${media.pageCount}`);
            } else if (media instanceof Film) {
                console.log(`duration: ${media.duration} minutes`);
            } else if (media instanceof Magazine) {
                console.log(`Magazine number: ${media.issueNumber}`);
            }
            console.log('----------------------');
        });
    }

    saveLibrary() {
        const jsonLibrary = JSON.stringify(this.collection)
        console.log("Library saved")
        //Our code for save lbrary inside json file
    }

    loadLibrary(jsonLibrary) {
        this.collection = JSON.parse(jsonLibrary)

    }
}