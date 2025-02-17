const pokemonsContainer = document.querySelector(".pokemons");


for (var i = 1; i < 100; i++) {
  const newImage = document.createElement("img");
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`;
  newImage.src = imageUrl;
  newImage.alt = `image${i}`;
  pokemonsContainer.appendChild(newImage);
}

function createWrapper() {
  const wrapperContainer = document.createElement("div");
  wrapperContainer.classList.add("wrapper");
  const addNewCardBtn = document.createElement("div");
  addNewCardBtn.classList.add("createNewCard");
  addNewCardBtn.innerText = "+";
  wrapperContainer.appendChild(addNewCardBtn);
  pokemonsContainer.appendChild(wrapperContainer);
  wrapperContainer.addEventListener("click", () => {
    wrapperContainer.remove();
    const newImage = document.createElement("img");
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`;
    newImage.src = imageUrl;
    newImage.alt = `image${i++}`;
    pokemonsContainer.append(newImage);
    createWrapper()
  });
  
}

createWrapper()


