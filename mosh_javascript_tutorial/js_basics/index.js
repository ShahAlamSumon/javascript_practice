var person = {
    name: 'Sumon',
    age: 30,
};

person.name = 'Shah'
person['name'] = 'Alam'

var selectColors = ['red','black','blue'];

function greet(name){
    console.log('Hello '+name);
}

function square(num){
    return num * num ;
}

var num = square(4)
// greet('Shah Alam Sumon');
console.log(num)
