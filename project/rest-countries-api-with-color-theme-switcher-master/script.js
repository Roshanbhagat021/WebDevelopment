const countryContainer = document.querySelector(".country-container");
const searchCountryInputBox = document.querySelector(".search-country");
const filterHead = document.querySelector(".filter-head");
const filterOptions = document.querySelector(".filter-options");
const AllfilterOptions = document.querySelectorAll(".filter-options div");
const modeSwitcher = document.querySelector(".mode-switcher");
const modeSwitcherIcon = document.querySelector(".mode-switcher i");

const setTheme = (theme) => {
  document.body.classList.toggle("dark", theme === "dark");
  modeSwitcherIcon.classList.toggle("fa-regular", theme === "dark");
  modeSwitcherIcon.classList.toggle("fa-solid", theme === "light");
};

let theme = localStorage.getItem("theme") || "light";
localStorage.setItem("theme", theme);
setTheme(theme);

modeSwitcher.addEventListener("click", () => {
  theme = theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme);
  setTheme(theme);
});



async function fetchCountryData() {
  createShimmierEffect(20);
  try {
    const fetchedData = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,capital,cca3,population,region,maps"
    );
    const data = await fetchedData.json();
    removeShimmierEffect();
    return data;
  } catch (error) {
    console.log(error);
  }
}

function createShimmierEffect(noOfCards) {
  for (let i = 0; i < noOfCards; i++) {
    const sceletonDiv = document.createElement("div");
    sceletonDiv.classList.add("sceleton-card");
    countryContainer.append(sceletonDiv);
  }
}

function removeShimmierEffect() {
  const sceletonLoader = document.querySelectorAll(".sceleton-card");
  sceletonLoader.forEach((e) => {
    e.remove();
  });
}

createShimmierEffect(10);
removeShimmierEffect();

function createCountryCard({ cca3, flags, name, population, region, capital }) {
  const linktosinglecountry = document.createElement("a");
  linktosinglecountry.href = `singlecountry.html?cca3=${cca3}`;

  const cardHtml = `
        <div class="country-card">
          <img src="${flags.png}" alt="${flags.png}" >
          <div class="country-details">
              <h3>${name.common}</h3>
              <p><b>Poulation: </b><span>${population.toLocaleString()}</span></p>
              <p><b>Region: </b><span>${region}</span></p>
              <p><b>Capital:</b> ${
                capital[0] ? capital[0] : "No Official Capital"
              }</span></p>
          </div>
        </div>`;

  linktosinglecountry.innerHTML = cardHtml;
  countryContainer.append(linktosinglecountry);
}

let allCountriesData = "";

async function displayData() {
  const data = await fetchCountryData();
  allCountriesData = data;
  data.forEach((country) => {
    createCountryCard(country);
  });
}

searchCountryInputBox.addEventListener("input", () => {
  // const regionData = allCountriesData.reduce((acc, el) => {
  //   acc[el.region] = (acc[el.region] || 0) + 1;
  //   return acc;
  // }, {});

  countryContainer.innerHTML = "";
  let filteredData = allCountriesData.filter((country) => {
    return country.name.common
      .toLowerCase()
      .includes(searchCountryInputBox.value.toLowerCase());
  });

  if (filteredData.length) {
    filteredData.forEach((country) => {
      createCountryCard(country);
    });
  } else {
    const countryNotFoundText = document.createElement("h1");
    countryNotFoundText.classList.add("countryNotFoundText");
    countryNotFoundText.innerText = "No such country found...";
    countryNotFoundText.style.textWrap = "nowrap";
    countryContainer.append(countryNotFoundText);
  }
});

filterHead.addEventListener("click", () => {
  filterOptions.classList.toggle("hidden");
});

async function filterByRegion(rg) {
  const data = await fetchCountryData();
  countryContainer.innerHTML = "";
  let filteredData = data.filter((country) => {
    return country.region.toLowerCase() == rg.toLowerCase();
  });
  allCountriesData = filteredData;
  filteredData.forEach((country) => {
    createCountryCard(country);
  });
}

AllfilterOptions.forEach((option) => {
  option.addEventListener("click", async (e) => {
    if (e.target.innerText == "All") {
      countryContainer.innerHTML = "";
      displayData();
      return;
    }
    filterByRegion(e.target.innerText);
  });
});

displayData();
