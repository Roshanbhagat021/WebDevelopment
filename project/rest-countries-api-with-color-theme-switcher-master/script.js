const countryContainer = document.querySelector(".country-container");

async function fetchCountryData() {
  try {
    const fetchedData = await fetch("https://restcountries.com/v3.1/all");
    // const fetchedData = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital");
    const data = await fetchedData.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}



function createCountryCard(countryInfo) {
    console.log(countryInfo);
  const linktosinglecountry = document.createElement("a") 
  linktosinglecountry.href = `singlecountry.html?${countryInfo.cca3}`


  const countryCard = document.createElement("div");
  countryCard.classList.add("country-card");

  const flagImage = document.createElement("img");
  flagImage.setAttribute("src", `${countryInfo.flags.png}`);

  const countryDetails = document.createElement("div");
  countryDetails.classList.add("country-details");

  // const countryName = document.createElement("h3")
  // countryName.innerText = "India"

  // const population = document.createElement("p")
  // population.innerText = "465416521"


  const details = `
                <h3>${countryInfo.name.common}</h3>
                <p><b>Poulation: </b><span>${countryInfo.population}</span></p>
                <p><b>Region: </b><span>${countryInfo.region}</span></p>
                <p><b>Capital:</b> <span>${countryInfo.capital}</span></p>
                    `;

  countryDetails.innerHTML = details;
  countryCard.append(flagImage, countryDetails);
  linktosinglecountry.append(countryCard)
  countryContainer.append(linktosinglecountry);
}

// createCountryCard();
// createCountryCard();
// createCountryCard();
// createCountryCard();
// createCountryCard();    


async function displayData() {
    const data = await fetchCountryData()
    data.forEach((country)=>{
        // console.log(country.flags.svg);
        createCountryCard(country)
    })
}

displayData()