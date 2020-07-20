class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return this.title +' written by '+ this.author+ ' in '+ this.year;
    }
    getAge(){
        const bookAge = new Date().getFullYear() - this.year;
        return 'Age of '+this.title+' book is '+ bookAge;
    }
}
// Magazine Sub Classs
class Magazine extends Book{
    constructor(title, author, year, month){
        super(title, author, year);
        this.month = month;
    }
}

// Initiat object 
// const book1 = new Book('Android dev','Baily',2008);
// console.log(book1.getSummary());
const mag1 = new Magazine('Teac reader', 'Microsoft','2001','Jan');
console.log(mag1);
console.log(mag1.getSummary());
