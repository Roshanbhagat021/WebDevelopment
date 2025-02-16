const responsiveMenu = document.querySelector("#responsive-menu");
const menuIconElement = document.querySelector("#menu-icon");
const closeIconElement = document.querySelector("#close-btn");
const localitiesContainer = document.querySelector("#localities");
const seeMoreBtn = document.querySelector(".last-place");
const seeLessBtn = document.querySelector(".fold");


menuIconElement.addEventListener("click", () => {
  responsiveMenu.classList.add("open"); // Add the "open" class to show the menu
});

closeIconElement.addEventListener("click", () => {
  responsiveMenu.classList.remove("open"); // Remove the "open" class to hide the menu
});

async function fetchData() {
  try {
    const response = await fetch("data/location-details.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching the JSON file:", error);
  }
}

async function main() {
  let data = await fetchData();
  data.locations.forEach((el) => {
    const placeDiv = document.createElement("div");
    const divElement = document.createElement("div");
    const h3Element = document.createElement("h3");
    const paraElement = document.createElement("p");
    const imgElement = document.createElement("img");

    h3Element.innerText = el.name;
    paraElement.innerText = el.place_count;
    imgElement.src = "./assets/arrow.svg";

    divElement.append(h3Element, paraElement);
    placeDiv.classList.add("places");
    placeDiv.classList.add("more-places");
    placeDiv.append(divElement);

    localitiesContainer.append(placeDiv);
  });
}


seeMoreBtn.addEventListener("click", () => {
  seeMoreBtn.classList.add("expended");
  main();

main().then(() => {
    const placeDiv = document.createElement("div");
    const paraElement = document.createElement("p");
    const imgElement = document.createElement("img");

    placeDiv.classList.add("places");
    placeDiv.classList.add("last-place");
    placeDiv.classList.add("more-places");
    placeDiv.classList.add("fold")

    paraElement.innerText = "see less";
    imgElement.src = "./assets/uparrow.svg";

    placeDiv.append(paraElement, imgElement);
    
    localitiesContainer.append(placeDiv);
    const expendedPlaces = [...document.getElementsByClassName("more-places")];
    placeDiv.addEventListener("click",()=>{
        expendedPlaces.forEach((el)=>{
            el.style.display ="none"
        })
        seeMoreBtn.classList.remove("expended");
        
    })

});

});


document.getElementById('email').addEventListener('change', function() {
    const input = document.getElementById('contact-input');
    input.type = 'email';
    input.placeholder = 'Email';
    });

    document.getElementById('phone').addEventListener('change', function() {
    const input = document.getElementById('contact-input');
    input.type = 'number';
    input.placeholder = 'Phone';
    });


