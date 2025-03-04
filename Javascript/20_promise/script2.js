fetch("https://ummyjson.com/product?limit=100")
.then((a)=>a.json())
.then((data)=>{
    console.log(data.products);
}).catch(console.log) 