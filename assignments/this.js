/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global object binding - "this" without any correlation will refer to the global object
* 2. Implicit binding - bind "this" to the object to the left of the dot where function was called
* 3. New binding - when using the "new" keyword like in a constructor function, "this" points to that new object being created 
* 4. Explicit binding - "this" gets explicitly defined by the call or apply methods
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
let impObj = {
    car: 'Audi',
    sayStuff: function() {
        console.log(`That's a really cool ${this.car}`)
    }
}

impObj.sayStuff();

// Principle 3

// code example for New Binding
function newBinding(car) {
    this.car = car;
    this.sayStuff = function() {
        console.log(`That's a really cool ${this.car}`)
    }
}

let Tesla = new newBinding('Tesla')
Tesla.sayStuff();

// Principle 4

// code example for Explicit Binding
let randFunc = function(tires){
    this.tires = tires;
    newBinding.call(this, tires);
}
