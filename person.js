//class of person
class Person {
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    get personMaker() {
        return `Hello ${this.fname} ${this.lname} you are ${this.age} years young!`;
    }
}
    export default Person;