// Sweet Alert
Swal.fire(
  "Make Sure To Use A VPN! <br> And Take A Tour With Me 😍"
).then((result) => {
  if (result.isConfirmed) {
    introJs().start();
  }
})

const url = "https://api.tvmaze.com/shows/5/episodes";
const searchForm = document.querySelector("#searchForm");
const select = document.querySelector("#select");

async function getData() {
  const data = await axios(url);
  const movies = data.data;
  let optionEl;
  console.log(movies);

  // Show Toggle
  $(document).ready(() => {
    $("#show").on("click touchstart", (e) => {
      e.preventDefault();
      $("#movies").toggle(showAll());
    });
  });

  function showAll() {
    let output = "";
    $.each(movies, (index, movie) => {
      output += `
      <div class="col-md-3 my-2 g-3">
      <div class="card  h-100" >
       <img src="${movie.image.medium}" class="card-img-top" alt="...">
       <div class="card-body d-flex flex-column">
         <h4 class="card-title text-center">${movie.name}</h4>
         <h5 class="card-title text-center">Season : <span class="secondaryOne-color">${
           movie.season
         }</span></h5>
         <h6 class="card-title text-center">Episode: <span class="yellow-color">${
           movie.number
         }</span></h6>
         <p class="card-text font-3">${
           movie.summary.substring(0, 90) + " ..."
         }</p>
         <div class="row ">
         <p class="col-6  text-start"><i class="fas fa-clock mx-2"></i>${
           movie.runtime
         } Mins</p>
         <p class="col-6 text-end">
            <i class="text-warning fa-solid fa-star mx-1"></i>
            <span class="rating">${movie.rating.average}</span>
         </p>
         </div>
         <div></div>
 
         <a href="${
           movie.url
         }"  class="text-center mt-auto btn btn-watch"target="_blank">Watch Now</a>
 
       </div>
       </div>
       </div>

            `;
    });
    $("#movies").html(output);
  }
  // Making Each Option In Select Tag //

  movies.map((movie, index) => {
    optionEl += `
    <option class="option" value="${movie.id}" id="${index}">S0${movie.season}E0${movie.number} - ${movie.name}</option>
    `;
    select.innerHTML = optionEl;
  });

  // Showing The Episode After Clicking On It's Option //

  select.addEventListener("change", (e) => {
    let option = parseInt(e.target.value);
    console.log(option);
    movies.map((movie) => {
      let optionCard = "";
      if (movie.id === option) {
        optionCard = `
        <div class="col-10 offset-1 my-2">
        <div class="card h-100" >
         <img src="${movie.image.medium}" class="card-img-top" alt="...">
        <div class="card-body d-flex flex-column">
        <h4 class="card-title text-center">${movie.name}</h4>
        <h5 class="card-title text-center">Season : <span class="secondaryOne-color">${
          movie.season
        }</span></h5>
        <h6 class="card-title text-center">Episode: <span class="yellow-color">${
          movie.number
        }</span></h6>
        <p class="card-text font-3">${
          movie.summary
        }</p>
        <div class="row">
        <p class="col-6  text-start"><i class="fas fa-clock mx-2"></i>${
          movie.runtime
        } Mins</p>
        <p class="col-6 text-end">
           <i class="text-warning fa-solid fa-star mx-1"></i>
           <span class="rating">${movie.rating.average}</span>
        </p>
        </div>
        <a href="${
          movie.url
        }"  class="btn btn-watch mt-auto"target="_blank">Watch Now</a>
      </div>
      </div>
      </div>
        `;
        document.querySelector("#movies").innerHTML = optionCard;
      }
    });
  });

  // Search Functionality

  searchForm.addEventListener("keydown", (e) => {
    const searchText = e.target.value;
    let card = "";
    movies.filter((movie) => {
      if (
        movie.name.toLowerCase().includes(searchText.toLowerCase())
        // && searchText.length >= 1
      ) {
        card += `

      <div class="col-md-3 my-2 g-3">
     <div class="card h-100" >
      <img src="${movie.image.medium}" class="card-img-top" alt="...">
      <div class="card-body d-flex flex-column">
        <h4 class="card-title text-center">${movie.name}</h4>
        <h5 class="card-title text-center">Season : <span class="secondaryOne-color">${
          movie.season
        }</span></h5>
        <h6 class="card-title text-center">Episode: <span class="yellow-color">${
          movie.number
        }</span></h6>
        <p class="card-text font-3">${
          movie.summary.substring(0, 90) + " ..."
        }</p>
        <div class="row">
        <p class="col-6 text-start"><i class="fas fa-clock mx-2"></i>${
          movie.runtime
        } Mins</p>
        <p class="col-6 text-end">
           <i class="text-warning fa-solid fa-star mx-1"></i>
           <span class="rating">${movie.rating.average}</span>
        </p>
        </div>
        <div></div>

        <a href="${
          movie.url
        }"  class="text-center mt-auto btn btn-watch"target="_blank">Watch Now</a>

      </div>
      </div>
      </div>
      
      `;
      }

      document.querySelector("#movies").innerHTML = card;
    });
  });
}

getData();
