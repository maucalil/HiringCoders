class Book {
    constructor(title, author, pages) {
        this.title = title; 
        this.author = author;
        this.pages = pages;
    }

    read() {
        return `Estou lendo ${this.title} from ${this.author}.`
    }
}

let book = new Book('Intro to C++', 'Deitel', 3000);
console.log(book.read());

// Herança

class ITBook extends Book {
    constructor(title, author, pages, technology) {
        super(title, author, pages); // herdando da classe Book
        this.technology = technology;
    }
}
let techBook = new ITBook('Intro to C++', 'Deitel', 3000, 'Algoritimos');
console.log("\n" + techBook);

// Encapsulamento

class Person {
    constructor(name) {
        this._name = name;
    }

    get name() { 
        return this._name; 
    }

    set name(value) {
        this._name = value;
    }
}

let person = new Person("Maurício")
person.name = "Mauras"
console.log("\n" + person.name)