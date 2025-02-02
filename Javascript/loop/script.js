const friends = ["Deepak", "Raj", "Vishal", "Shubham", "Sandeep"]
const userName = "Roshan"

function indroduceMe(name,profession,age){
    console.log(`Hi my name is ${name}, I am a ${profession}, and i am ${age} years old.`)
}

for (var i = 0; i<friends.length; i++){
    console.log(friends[i])

}

indroduceMe("Roshan", "Web developer",20)