const extendedInfo = document.querySelector(".extended-details")
// const countryCode = window.location.search.slice(6)
const countryCode = new URLSearchParams(location.search).get("cca3")
const sceletonEffectContainer = document.querySelector(".sceleton-effect-container")
const modeSwitcher = document.querySelector(".mode-switcher")
const modeSwitcherIcon = document.querySelector(".mode-switcher i")

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





async function fetchCountryData(cc) {
    try {
      const fetchedData = await fetch(`https://restcountries.com/v3.1/alpha/${cc}`);
      // const fetchedData = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital");
      const data = await fetchedData.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  


async function createDataContainer(data){
    let borderCountries = ""
    if (data?.borders) {
      const borderPromises = data.borders.map(async (ccode) => {
        const borderData = await fetchCountryData(ccode);
        return `<a href="singlecountry.html?cca3=${borderData[0].cca3}"><span>${borderData[0].name.common}</span></a>`;
      });
      borderCountries = (await Promise.all(borderPromises)).join('');
    }

    const container = `
      <img src="${data.flags.png}" alt="Flag of ${data.name.common}">
      <div class="more-details">
        <h2>${data.name.common}&nbsp; <a title="Open to Wikipedia" target="_blank" style="color:blue;" href="https://en.wikipedia.org/wiki/${data.name.common}"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>&nbsp;&nbsp;<a title="Open with googlemaps" target="_blank" style="color:blue;" href="${data.maps.googleMaps}"><i class="fa-solid fa-location-dot"></i></a></h2>
        <div class="regional-details">
          <div class="first-part">
            <p><b>Native Name:</b> ${data.name.nativeName?Object.values(data.name.nativeName)[0].official:data.name.common}</p>
            <p><b>Population:</b> ${data.population.toLocaleString()}</p>
            <p><b>Region:</b> ${data.region}</p>
            <p><b>Sub Region:</b> ${data.subregion?data.subregion:"No Official Subregion"}</p>
            <p><b>Capital:</b> ${data.capital ? data.capital : "No Official Capital"}</p>
          </div>
          <div class="second-part">
            <p><b>Top Level Domain:</b> ${data.tld.join(', ')}</p>
            <p><b>Currencies:</b> ${data.currencies ? Object.values(data.currencies).map(currency => currency.name).join(', ') : "No Official Currency"}</p>
            <p><b>Languages:</b> ${data.languages ? Object.values(data.languages).join(', ') : "No Official Language"}</p>
          </div>
        </div>
        <div class="border-countries">
          <p><b>Border Countries:</b> ${borderCountries ? borderCountries : "Country has no bordering nations"}</p>
        </div>
      </div>`;

        extendedInfo.innerHTML = container
}



  async function displayData() {
    const [data] = await fetchCountryData(countryCode)
    sceletonEffectContainer.style.display = "none"
    document.title = data.name.common
    document.querySelector("link[rel*='icon']").href = data.flags.png;
    createDataContainer(data)
  }

displayData()