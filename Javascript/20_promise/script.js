const p1 = new Promise((resolve,reject)=>{
    // setTimeout(()=>{
    //     resolve()
    // },5000)
    resolve("This is a promise")
})

debugger


p1.then((a)=>{
    console.log(a);
}).catch((a)=>{
    console.log(a);
})
const p2 = new Promise((resolve,reject)=>{
    // setTimeout(()=>{
    //     resolve()
    // },5000)
    resolve("This is a promise2")
})

p2.then((a)=>{
    console.log(a);
}).catch((a)=>{
    console.log(a);
})




setTimeout(()=>{
    console.log("This is a setTime out ");
})


console.log("THis is synchronus code");