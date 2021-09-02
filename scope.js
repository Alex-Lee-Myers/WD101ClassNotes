/*
Scope is simply the hierarcchy of variables within our code.
    -Global Scope (or Parent Scope)
    -Local Scope (or Child Scope)
*/

let global = "Earth";

function scopeExample() {
    let local = "Bloomington";
    console.log(local);
    console.log(`${local} is but one of many cities on ${global}`);
}

scopeExample();
//console.log(local); //not defined, it's tied to the scopeExample function.  Local variable cannot be accessed outside the function.