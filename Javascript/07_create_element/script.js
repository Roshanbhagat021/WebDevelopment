const pokemonsContainer = document.querySelector(".pokemons")

for (let i=1; i<100; i++){
    const newImage = document.createElement("img")
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`
    newImage.src=imageUrl;
    newImage.alt  = `image${i}`
    // pokemonsContainer.appendChild(newImage)
}


 // newImage.addEventListener("click",()=>{
    //     const link = document.createElement("a")
    //     link.href = imageUrl
    //     link.download = `image${i}`

    //     document.body.appendChild(link)
    //     link.click()
    //     document.body.removeChild(link)
    // })
