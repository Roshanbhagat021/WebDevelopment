const extendedInfo = document.querySelector(".extended-details")
const countryCode = window.location.search.slice(1)

async function fetchCountryData() {
    try {
      const fetchedData = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
      // const fetchedData = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital");
      const data = await fetchedData.json();
    //   console.log(data[0]);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  

  fetchCountryData()


function createDataContainer(data){
    console.log(data.currencies[Object.keys(data.currencies)[0]].name);

    const container = `<img src=${data.flags.png} alt="">
        <div class="more-details">
            <h2>${data.name.common}</h2>
            <div class="regional-details">
                <div class="first-part">
                    <p><b>Native Name: </b>${data.name.official}</p>
                    <p><b>Population: </b>${data.population}</p>
                    <p><b>Region: </b>${data.region}</p>
                    <p><b>Sub Region: </b>${data.subregion}</p>
                    <p><b>Capital: </b>${data.capital}</p>
                </div>
                <div class="second-part">
                    <p><b>Top Level Domain: </b>${data.tld}</p>
                    <p><b>Currencies: </b>${data.currencies[Object.keys(data.currencies)[0]].name}</p>
                    <p><b>Languages: </b>${Object.values(data.languages)}</p>
                </div>
            </div>
            <div class="border-countries">
                <p><b>Border Countries: </b><span>France</span><span>Germany</span><span>Netherlands</span></p>
            </div>
        </div>`

        extendedInfo.innerHTML = container
}



  async function displayData() {
    const data = await fetchCountryData()
    createDataContainer(data[0])
    
}

displayData()