// All the methods are functions but not all functions are methods

// normal functions
// function ADD(a, b){
//     console.log(a + b)
// }


// We call a fuction a method when a it is defined inside a object.
// Method

const maths = {
    pie: 3.141591,
    add: function (a,b){
        return (a+b)
    },
    subtract: function (a,b){
        return (a-b)
    },
    square: function(a){
        return (a*a)
    },
    abs:function(a){
        return a<0?-(a):a
    }
}

console.log(maths.abs(maths.subtract(1,5)))

