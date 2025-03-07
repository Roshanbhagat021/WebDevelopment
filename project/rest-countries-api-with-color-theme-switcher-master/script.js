const countryContainer = document.querySelector(".country-container");
const searchCountryInputBox = document.querySelector(".search-country");
const filterHead = document.querySelector(".filter-head");
const filterOptions = document.querySelector(".filter-options");
const AllfilterOptions = document.querySelectorAll(".filter-options div");

async function fetchCountryData() {
  try {
    // const fetchedData = await fetch("https://restcountries.com/v3.1/all");
    const fetchedData = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,capital,cca3,population,region"
    );
    // const fetchedData = await fetch("https://restcountries.com/v3.1/name/india?fullText=true&fields=name,flags,capital,cca3,population,region");
    const data = await fetchedData.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

filterHead.addEventListener("click", () => {
  filterOptions.classList.toggle("hidden");
});



function createCountryCard({cca3,flags,name,population,region,capital}) {
  const linktosinglecountry = document.createElement("a");
  linktosinglecountry.href = `singlecountry.html?cca3=${cca3}`;

  const cardHtml = `
        <div class="country-card">
          <img src="${flags.png}" alt="${flags.png}">
          <div class="country-details">
              <h3>${name.common}</h3>
              <p><b>Poulation: </b><span>${population.toLocaleString()}</span></p>
              <p><b>Region: </b><span>${region}</span></p>
              <p><b>Capital:</b> ${capital[0]?capital[0]: "No Official Capital"}</span></p>
          </div>
        </div>`;

  linktosinglecountry.innerHTML = cardHtml;
  countryContainer.append(linktosinglecountry);
}


let countriesData = "";

async function displayData() {
  const data = await fetchCountryData();
  countriesData = data;
  data.forEach((country) => {
    // console.log(country);
    createCountryCard(country);
  });
}

searchCountryInputBox.addEventListener("input", () => {
  const regionData = countriesData.reduce((acc, el) => {
    acc[el.region] = (acc[el.region] || 0) + 1;
    return acc;
  }, {});
  console.log(regionData);
  countryContainer.innerHTML = "";
  let filteredData = countriesData.filter((country) => {
    return country.name.common
      .toLowerCase()
      .includes(searchCountryInputBox.value.toLowerCase());
  });
  console.log(filteredData);
  filteredData.forEach((country) => {
    // console.log(country);
    createCountryCard(country);
  });
});

function filterByRegion(rg) {
  countryContainer.innerHTML = "";
  let filteredData = countriesData.filter((country) => {
    return country.region.toLowerCase() == rg.toLowerCase();
  });
  filteredData.forEach((country) => {
    createCountryCard(country);
  });
}

AllfilterOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    if (e.target.innerText == "All") {
      countryContainer.innerHTML = "";
      countriesData.forEach((country) => {
        createCountryCard(country);
      });
      return;
    }
    filterByRegion(e.target.innerText);
  });
});

displayData();
