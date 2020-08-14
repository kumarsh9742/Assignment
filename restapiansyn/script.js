
let maindiv = document.querySelector(".main-div");
let countryData = document.querySelector('country-data');
let moviedata = document.getElementById('moviedata');

function restCountryF(){
        let url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                getRestCountries(data,'getWeatherFetchData');
            })
            .catch(err => {
                console.log("Error:", err);
            });
    }

    function getWeatherFetchData(value, code, country) {
        let urlValues = '';
        let weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";
        let weatherAPIKey = '&appid=b0a707fd0c86424bc03e92aa9aba1ab1';
        let weatherMetric = '&units=metric';
        urlValues += weatherURL + value + ',' + code + weatherAPIKey + weatherMetric
        console.log(urlValues);
    
        fetch(urlValues)
            .then(res => res.json())
            .then((data) => {
                alert('You selected Country: ' + country + ' with capital ' + data.name + ' and Temperature(in celsius) ' + data.main.temp);
            }).catch((err) => {
                alert("Couldn't find data for the selected country, Try again!");
                
            });
    
    }

   async function restCountryA(){
        let url = 'https://restcountries.eu/rest/v2/all';
    try {
        let response = await fetch(url);
        let data = await response.json();
        getRestCountries(data,'getWeatherAwaitData');
       } catch (error) {
        console.log("Error:", error);
      }
    }

    async  function getWeatherAwaitData(data1,code,country) {
        let urlValues = '';
        let weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";
        let weatherAPIKey = '&appid=b0a707fd0c86424bc03e92aa9aba1ab1';
        let weatherMetric = '&units=metric';
        urlValues += weatherURL + data1 + ',' + code + weatherAPIKey + weatherMetric
        //api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={your ap
        console.log(urlValues);
        try {
            let response = await fetch(urlValues);
            let data = await response.json();
            alert('You selected Country: ' + country + ' with capital ' + data.name + ' and Temperature(in celsius) ' + data.main.temp);
        } catch (error) {
            alert("Couldn't find data for the selected country, Try again!");
            console.log("Error:", error);
        }
        
    
    }



function getRestCountries(data,getData) {
    console.log(getData);
    let getWeatherData =getData;

    let tags = '';
    let count = 1;
    let divRow = document.createElement('div');
    for (let i = 0; i < data.length; i++) {

        divRow.setAttribute('class', 'row');
        let divCol = document.createElement('div');
        divCol.setAttribute('class', 'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-3 ml-1 mr-1');
        tags = `
            <div class="card card-custom-css">
                <div class="card-header">
                   ${count}). ${data[i].name}
                </div>
                <img src="${data[i].flag}" id="${data[i].alpha2Code}" class="card-img-top cust-card-img" alt="${data[i].name}">
                <div class="card-body card-body-custom-css">
                    <p class="card-text">
                        Capital: <span class="badge badge-success"> ${data[i].capital} </span><br>
                        Country Codes: <span class="badge "> ${data[i].alpha2Code}, ${data[i].alpha3Code}</span><br>
                        Region: <span class="badge "> ${data[i].region}</span>
                    </p>
                </div>
                <div class="card-footer text-muted text-center">
                <button class="btn btn-sm btn-primary" data-toggle="alert" id="whoData" onclick="${getWeatherData}('${data[i].capital}','${data[i].alpha2Code}','${data[i].name}')">View Current Weather</button>
            </div>
            </div>
            `;
        count++;
        divCol.innerHTML = tags;
        divRow.appendChild(divCol);
        maindiv.appendChild(divRow);
    }
}

async function getImdbResults(){
    try{
       let searchText = document.getElementById('search').value;
      
       let url =`http://www.omdbapi.com/?s=${searchText}&apikey=401a0a4f`;
      
        let response = await fetch(url);
        let data = await response.json();

        console.log(data);
     
        for(let mdata=0 ;mdata<data.Search.length;mdata++ ){
           
             var col = document.createElement('div');
           

          if (data != null && data.Response != 'False') {
            let movieDisplayArea = `<div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <span class='text-primary'>${data.Search[mdata].Title}</span>  
                    </button>
                  </h2>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class = 'card container'>
                   <div class = 'row xs-column-reverse '>
                    <div class = 'col-md-8 top-padding mb-3'>
                     <p class = 'card-text'>
                      <br><br>
                       <div class="d-flex justify-content-between">
                        <span style="color : gray"><b>${data.Search[mdata].Title}</b></span><br><br>
                       
                     </div><br>
                     <span class="Year">${data.Search[mdata].Year}</span>
                     <br>
                    <span>${data.Search[mdata].imdbID}</span><br><br>
                  </div>
                  <div class="col-md-4 right-padding">
                 <img src ="${data.Search[mdata].Poster}" class = 'card-img' id = 'image'>
                  </p>
                </div>
                </div>
              </div>
             </div>
          </div>
          </div>`;
            
            col.innerHTML = movieDisplayArea;
          
            moviedata.appendChild(col);
           
        } else {

            document.getElementById('moviedata').innerHTML = '';
            throw data.Error;
        }
        
    }  

    } catch (error) {
        alert(`Error! No data found! ${error}`)
        console.log("Error:", error);
    }

}
