const button =  document.querySelector("button")
const memeImage = document.querySelector("img")
const memeTitle = document.querySelector("h2")
const madeBy = document.querySelector(".author")


async function generateMeme(){
  const data = await fetch("https://meme-api.com/gimme/wholesomememes")
       .then((res)=>res.json())
       .then((data)=>{
        console.log(data);
        memeTitle.innerText = data.title
        madeBy.innerText=`Made by: ${data.author}`
        memeImage.src =  data.url
       })

      //  console.log("Hello");
}




generateMeme()

button.addEventListener("click",()=>{
    generateMeme()
})