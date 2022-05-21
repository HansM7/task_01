class Usuario{
    constructor(name,lastname,book=[],pet=[]) {
        this.name=name,
        this.lastname=lastname,
        this.book=book,
        this.pet=pet
    }

    getFullName(){
        return `My name's: ${this.name} ${this.lastname}`
    }

    addPets(pet) {
        this.pet = [...this.pet, pet]
      }
    
    countPets() {
        return this.pet.length;
    }
    
    addBook(title, autor) {
        this.book = [...this.book, { title, autor }]
    }
    
    getBooksNames() {
        return this.book.map((item)=>item.title)
        // return this.book.map((item)=>item) RETURN OBJECT OPTIONAL
    }
}

// CLASS INSTANTIATION

const user = new Usuario("Hans","Melchor");

// CALLING THE METHODS

console.log(user.getFullName())

user.addPets('Dog')
user.addPets('Cat')

console.log(user.countPets())

user.addBook('The city and the dogs', 'Mario Vargas LLosa')

console.log(user.getBooksNames())