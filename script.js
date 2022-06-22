import Person from './person.js';

const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const age = document.querySelector('#age');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');

// function that makes a new class "user" and writes the new user properties to the html
const writeThis = () => {
    if(firstName.value !== '' && lastName.value !== '' && age.value !== ''){
        let user = new Person(firstName.value, lastName.value, age.value);
    result.innerHTML = user.personMaker;
    }else{
        alert('Please enter a name and age!');
    }
}

btn.addEventListener('click', () => {
    writeThis();
});