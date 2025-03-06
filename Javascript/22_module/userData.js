const userDetails = {
    name:"Roshan",
    bornYear:2004,
    getAge(){
        const currentYear =  new Date().getFullYear()
        return currentYear - this.bornYear
    }

}

console.log("Do you want to know my age?");


export {userDetails}