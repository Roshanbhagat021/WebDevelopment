const button =  document.querySelector("button")
const memeImage = document.querySelector("img")
const memeTitle = document.querySelector("h2")


function generateMeme(){
   fetch("https://meme-api.com/gimme/wholesomememes")
       .then((res)=>res.json())
       .then((data)=>{
        console.log(data);
        memeTitle.innerText = data.title
        // memeImage.src = data.preview[data.preview.length-1]
       })
}


generateMeme()