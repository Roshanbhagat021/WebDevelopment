// All the methods are functions but not all functions are methods

// normal functions
// function ADD(a, b){
//     console.log(a + b)
// }


// We call a fuction a method when a it is defined inside a object.
// Method

const maths = {
    pie: 3.141591,
    a:45,
    b:78,
    add: function (a,b){
        return (a,b)
    },
    subtract: function (a,b){
        return (a-b)
    },
    square: function(a){
        return (a*a)
    },
    // this is also a valid way to define a method
    abs(a){
        return a<0?-(a):a
    },
    cube(num){
        return num **3
    }
}

console.log(maths.cube(8))

