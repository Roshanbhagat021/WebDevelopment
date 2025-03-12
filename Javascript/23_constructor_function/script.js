// function CreateReportCard(stdName, stdClass,EngMarks, HinMarks, MathMarks ){
//         this.stdName =stdName
//         this.stdClass = stdClass
//         this.EnglishMarks=EngMarks
//         this.HindiMarks=HinMarks
//         this.MathMarks=MathMarks  
// }

// function getTotalMarks (){
//     return(this.EnglishMarks + this.HindiMarks + this.MathMarks); 
// }

// CreateReportCard.prototype.getTotalMarks = getTotalMarks;



// const student1 = CreateReportCard("Raj",12,45,87,56);
// const student2 = new CreateReportCard("Rajan",12,40,70,50);


// function sayHi(){
    
//     this.name = "Roshah"
//     // return {x:"h/irami"}
//     // return "Hi";
// }
// // sayHi.prototype.greet = function(){
// // console.log("Hello",this.name);
// // }

// h1 = new sayHi()
// // h1.greet()


// console.log(h1);

"use strict"
class bankClients{
    #balance
    constructor(n,age,b){
        this.name = n
        this.age = age
        this.#balance = b
    }
    getFullName= function(){
        console.log(this.name,this.petname)
    }
 petname = "Rajuaaaa"
}


const user1 =  new bankClients("raju",45,80000000000)
// console.log(user1.#balance);
console.log(this);