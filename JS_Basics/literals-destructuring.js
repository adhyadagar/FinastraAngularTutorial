// working with objects
// object literal : property short-hand
function user(firstName, lastName) {
    return {
    // firstName: firstName, // key : value
    firstName,
    lastName, // literals
    fullName: firstName + " " + lastName,
    };
   }
    
   // destructuring : unpacking the values from an object
   // const u = user("john", "doe");
   // const fullName = u.fullName;
   // const name = u.fullName;
   const { fullName: name, firstName, age } = user("john", "doe");
   //console.log(fullName);
   console.log(name);
   console.log(firstName, age);