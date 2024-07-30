// Base class Media
class Media {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  }
  
  // Subclass Book
  class Book extends Media {
    constructor(title, author, year, pageCount) {
      super(title, author, year);
      this.pageCount = pageCount;
    }
  
    getType() {
      return 'Book';
    }
  }
  
  // Subclass Film
  class Film extends Media {
    constructor(title, author, year, duration) {
      super(title, author, year);
      this.duration = duration; // Duration in minutes
    }
  
    getType() {
      return 'Film';
    }
  }
  
  // Subclass Magazine
  class Magazine extends Media {
    constructor(title, author, year, issueNumber) {
      super(title, author, year);
      this.issueNumber = issueNumber;
    }
  
    getType() {
      return 'Magazine';
    }
  }
  
  // Library class
  class Library {
    constructor() {
      this.collection = [];
    }
  
    // Asynchronous method to add media
    async addMedia(media) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.collection.push(media);
          console.log(`${media.title} has been added to the library.`);
          resolve(media);
        }, 1000); // Simulates an asynchronous operation
      });
    }
  
    // Asynchronous method to remove media by title
    async removeMedia(title) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.collection = this.collection.filter(media => media.title !== title);
          console.log(`${title} has been removed from the library.`);
          resolve(title);
        }, 1000); // Simulates an asynchronous operation
      });
    }
  
    // Asynchronous method to find media by title
    async findMediaByTitle(title) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const foundMedia = this.collection.filter(media => media.title === title);
          console.log(`Search completed for title "${title}".`);
          resolve(foundMedia);
        }, 1000); // Simulates an asynchronous operation
      });
    }
  
    // Asynchronous method to find media by author
    async findMediaByAuthor(author) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const foundMedia = this.collection.filter(media => media.author === author);
          console.log(`Search completed for author "${author}".`);
          resolve(foundMedia);
        }, 1000); // Simulates an asynchronous operation
      });
    }
  
    // Method to display the contents of the library
    displayLibrary() {
      this.collection.forEach(media => {
        console.log(`Title: ${media.title}, Author: ${media.author}, Year: ${media.year}`);
        console.log(`Type: ${media.getType()}`);
        if (media instanceof Book) {
          console.log(`Page count: ${media.pageCount}`);
        } else if (media instanceof Film) {
          console.log(`Duration: ${media.duration} minutes`);
        } else if (media instanceof Magazine) {
          console.log(`Issue number: ${media.issueNumber}`);
        }
        console.log('----------------------');
      });
    }
  
    // Asynchronous method to save the library state to a JSON file (simulation)
    async saveLibrary() {
      return new Promise((resolve) => {
        setTimeout(() => {
          const jsonLibrary = JSON.stringify(this.collection);
          console.log("Library saved: ", jsonLibrary);
          resolve(jsonLibrary);
          // Code to save to a file if the environment allows
        }, 1000); // Simulates an asynchronous operation
      });
    }
  
    // Asynchronous method to load the library state from a JSON file (simulation)
    async loadLibrary(jsonLibrary) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.collection = JSON.parse(jsonLibrary);
          console.log("Library loaded: ", this.collection);
          resolve(this.collection);
          // Code to load from a file if the environment allows
        }, 1000); // Simulates an asynchronous operation
      });
    }
  }
  
  // Asynchronous usage example
  (async () => {
    const myLibrary = new Library();
  
    let book1 = new Book("The Little Prince", "Antoine de Saint-Exupéry", 1943, 96);
    const film1 = new Film("Inception", "Christopher Nolan", 2010, 148);
    const magazine1 = new Magazine("National Geographic", "Various", 2021, 7);
  
    book1 = await myLibrary.addMedia(book1);
    await myLibrary.addMedia(film1);
    await myLibrary.addMedia(magazine1);
  
    console.log("Library after adding media:");
    myLibrary.displayLibrary();
  
    console.log("Search by title 'Inception':");
    const foundFilms = await myLibrary.findMediaByTitle("Inception");
    console.log(foundFilms);
  
    await myLibrary.removeMedia("The Little Prince");
    console.log("Library after removing 'The Little Prince':");
    myLibrary.displayLibrary();
  
    const jsonLibrary = await myLibrary.saveLibrary();
    await myLibrary.loadLibrary(jsonLibrary);
  })();