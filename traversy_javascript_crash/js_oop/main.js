// const s1 = 'Hello';
// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);

// alert('Hey!!');
// console.log(window);

const book1 = {
    title: 'Python Book',
    auther : 'O raily',
    year : 2013,
    getSummary: function(){
        return this.title+' was written by '+this.auther+' at '+this.year; 
    }
}
const book2 = {
    title: 'Javascript Book',
    auther : 'O raily',
    year : 2016,
    getSummary: function(){
        return this.title+' was written by '+this.auther+' at '+this.year; 
    }
}
// console.log(book1.getSummary());
console.log(Object.values(book2));
console.log(book2.getSummary());