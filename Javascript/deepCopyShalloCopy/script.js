const obj1 = {
    name:"Roshan",
    age:20,
    address:{
        city:"Delhi",
        pincode:110039
    }
}

const obj2 = obj1

obj2.name="Rahul"

const user1 = {
    name:"Raj",
    study:"BCA",
    collage:{
        name:"Ignou",
        stream:"CS"
    }
}

const user2 = {...user1}

user2.name="Rehan"

user2.collage.stream = "Bio"