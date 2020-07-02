//single dom
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'))

// multi dom
// console.log(document.querySelectorAll('.item'))
// console.log(document.getElementsByClassName('item'))
// console.log(document.getElementsByTagName('div'))

// const items = document.querySelectorAll('.item')
// items.forEach((item) => console.log(item));

const ul = document.querySelector('.items')

// ul.remove()
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello'
// ul.children[2].textContent = 'Bye'
// ul.children[1].innerHTML = '<h2>Sumon</h2>'

const btn = document.querySelector('.btn');
// btn.style.background = 'blue';

// btn.addEventListener('mouseover', (e) =>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     ul.children[1].innerHTML = '<h2>Sumon</h2>'

// })
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.innerHTML = 'Please fill both fields.';
        msg.classList.add('error');
        setTimeout(()=>msg.remove(),3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
            nameInput.value+' : '+emailInput.value));

        userList.appendChild(li)

        nameInput.value = '';
        emailInput.value = '';
    }
};
