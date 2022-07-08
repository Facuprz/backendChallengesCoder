class User{
    constructor(name, lastName, books, pets){
        this.name = name;
        this.lastName = lastName;
        this.books = [];
        this.pets = ['dog'];
    }

    getFullName = function(){
        return console.log(`Mi name is ${this.name} ${this.lastName}`);
    }

    addPets = function(pet){
        this.pets.push(pet);
    }

    countPets = function(){
        console.log(`I have ${this.pets.length} pets`);
    }

    addBooks = function(book, author){
        this.books.push({ title: book , author: author });
    }

    getBooksNames = function(){
        let bookNames = this.books.map(book =>{
            return `${book.title}`
        });
        console.log(bookNames);
    }

} 

let user1 = new User ('Bruce', 'Wayne');

user1.getFullName();

user1.addPets('bat');
user1.countPets();

user1.addBooks('The Hunger Games', 'Suzanne Collins');
user1.addBooks('The Intelligent Investor ','Benjamin Graham');
user1.getBooksNames();