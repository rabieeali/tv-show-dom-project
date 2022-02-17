$(document).ready(() => {
  $("#searchForm").on("keyup", (e) => {
    let searchText = $("#searchText").val();
    e.preventDefault();
    getMovies(searchText);
  });
});

$(document).ready(() => {
  $("#showAll").on("click", (e) => {
    e.preventDefault();
    $("#movies").toggle(showAll());
  });
});

function showAll() {
  axios
    .get("https://api.tvmaze.com/shows/5/episodes")
    .then((response) => {
      let movies = response.data;
      let output = "";
      $.each(movies, (index, movie) => {
        output += `
                <div class="col-md-3 my-3">
                   <div class="card h-100" >
                     <img src="${
                       movie.image.medium
                     }" class="card-img-top" alt="...">
                     <div class="card-body text-capitalize text-center d-flex flex-column justify-content-evenly">
                        <h4 class="card-title yellow-color">${movie.name}</h4>
                        <h5> Season :<span class="light-color">${
                          movie.season
                        }</span></h5>
                        <h6> Episode :<span class="secondaryThree-color"> ${
                          movie.number
                        }</span></h6>
                        <p class="card-text sliced">${
                          movie.summary.substring(0, 90) + " ..."
                        }</p>
                        <a target="_blank" href="${
                          movie.url
                        }" class="btn btn-watch d-flex justify-content-center align-self-">Watch</a>
                       </div>
                     </div>
                 </div>

                `;
      });
      $("#movies").html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getMovies(searchText) {
  axios
    .get("https://api.tvmaze.com/shows/5/episodes")
    .then((response) => {
      let movies = response.data;
      let output = "";
      $.each(movies, (index, movie) => {
        output += `
  <div class="col-md-3 my-3">
     <div class="card h-100" style="width: 18rem; min-height:10rem">
       <img src="${movie.image.medium}" class="card-img-top" alt="...">
       <div class="card-body text-capitalize text-center d-flex flex-column justify-content-evenly">
          <h4 class="card-title yellow-color">${movie.name}</h4>
          <h5> Season :<span class="light-color">${movie.season}</span></h5>
          <h6> Episode :<span class="secondaryThree-color"> ${
            movie.number
          }</span></h6>
          <p class="card-text sliced">${
            movie.summary.substring(0, 90) + " ..."
          }</p>
          <a target="_blank" href="${
            movie.url
          }" class="btn btn-watch d-flex justify-content-center align-self-">Watch</a>
         </div>
       </div>
   </div>

              `;
      });

      //   movies.map((movie) => {
      //     let title = movie.name.toLowerCase();
      //     console.log(searchText);
      //     if (title.includes(searchText)) {
      //       $("#movies").html(output);
      //     }
      //   });

      $("#movies").html(output);

      console.log(movies);
    })

    .catch((error) => {
      console.log(error);
    });
}

// const daytaGirande = async () => {
//   const filmayeJazab = await axios.get(
//     "https://api.tvmaze.com/shows/5/episodes"
//   );
//   return filmayeJazab;
// };

// const injaFilmatMiyan = daytaGirande().then((res) => {
//   const movies = res.data;
// //   console.log(movies);

//   let element = "";
//   movies.forEach((movie) => {
//     element += `
//       <div class="col-md-3 my-3">
//       <div class="card h-100" style="width: 18rem; min-height:10rem">
//         <img src="${movie.image.medium}" class="card-img-top" alt="...">
//         <div class="card-body text-capitalize text-center d-flex flex-column justify-content-evenly">
//            <h4 class="card-title yellow-color">${movie.name}</h4>
//            <h5> Season :<span class="light-color">${movie.season}</span></h5>
//            <h6> Episode :<span class="secondaryThree-color"> ${
//              movie.number
//            }</span></h6>
//            <p class="card-text sliced">${
//              movie.summary.substring(0, 90) + " ..."
//            }</p>
//            <a target="_blank" href="${
//              movie.url
//            }" class="btn btn-watch d-flex justify-content-center align-self-">Watch</a>
//           </div>
//         </div>
//     </div>
//       `;
//   });
//   document.querySelector("#movies").innerHTML = element;
// });

// const searchForm = document.querySelector("#searchForm");
// searchForm.addEventListener("keyup", (e) => {
//   const searchText = e.target.value;
//   console.log(searchText);
//   search(searchText)
// });

// function search(searchText){
//     if(movies.name.includes(searchText)){
//         console.log('ali');
//     }else{
//         console.log('mamad');
//     }
//  }
