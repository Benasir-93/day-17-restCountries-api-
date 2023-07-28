 //rest countries api fetch
 var restcountries = fetch("https://restcountries.com/v2/all");
  restcountries
    .then((data) => data.json())
    .then((data1) => {
        // create div for heading
        var container=document.createElement("div")
        container.setAttribute("class","container")
        container.innerHTML=`<h2>Rest Countries And It's Weather</h2><br>`;
        document.body.append(container)
        //for  loop 
      for (let i = 0; i < data1.length; i++) {
        console.log(data1[i]);

        
        var div = document.createElement("div");
        div.innerHTML = `
        <div class="col mb-5">
          <div class="card me-5 p-3 border border-danger" style="width:300px; background-image:linear-gradient(30deg,rgb(241, 229, 229),rgb(201, 201, 253),rgb(252, 243, 228))">
            <div class="card-body">
              <h3 class="card-title">${data1[i].name}</h3>
              <img src="${data1[i].flag}" class="card-img-top mb-3" alt="...">
              <h5 class="mb-2 text-primary">${data1[i].capital}</h5>
              <p class="mb-2">${data1[i].region}</p>
              <p mb-2>${data1[i].callingCodes}</p>
              <a href="#" class="btn btn-primary align-center" onclick="showWeather(${data1[i].latlng[0]}, ${data1[i].latlng[1]}, ${i})" data-bs-toggle="modal" data-bs-target="#exampleModal-${i}">click to weather</a>
            </div>
          </div>
        </div>
     `;

        document.body.append(div);
      }
    });

// weather api and its function
  function showWeather(latitude, longitude, index) {
    var apiKey = "203fc74f14df86ff8bdf7b1f4ab6bf1c";
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(url)
      .then((data) => data.json())
      .then((data1) => {
        //create div and fetch details in this div
        var div = document.createElement("div");
        div.innerHTML = `
            <div class="modal" id="exampleModal-${index}">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content text-white" style="background-image:linear-gradient(30deg,rgb(95, 95, 112),rgb(44, 43, 42),rgb(228, 98, 98))">
                        <div class="modal-body">
                            <h5>Latitude: ${data1.coord.lat}</h5><br>
                            <h5>Longitude: ${data1.coord.lon}</h5><br>
                            <h5>Humidity: ${data1.main.humidity}</h5><br>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.append(div);
      });
  }

