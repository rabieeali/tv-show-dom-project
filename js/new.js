// const url = "https://api.tvmaze.com/shows/5/episodes";
// const episodes =
//   "https://api.tvmaze.com/shows/5/episodebynumber?season=1&number=3";

// getMovies(url);
// function getMovies(url) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       showMovies(data);
//     });
// }

// function showMovies(data) {
//   data.forEach((movie) => {
//     const { image, name, season, number, summary, url } = movie;
//     const movieEl = document.querySelector("#movies");
//     movieEl.innerHTML += `
//           <div class="col-md-3 my-3">
//              <div class="card h-100" style="width: 18rem; min-height:10rem">
//               <img src="${image.medium}" class="card-img-top" alt="...">
//               <div class="card-body text-capitalize text-center d-flex flex-column justify-content-evenly">
//                 <h4 class="card-title yellow-color">${name}</h4>
//                 <h5> Season :<span class="light-color">${season}</span></h5>
//                 <h6> Episode :<span class="secondaryThree-color"> ${number}</span></h6>
//                 <p class="card-text sliced">${
//                   summary.substring(0, 90) + " ..."
//                 }</p>
//                 <a onclick="movieSelected()" target="_blank" href="${url}" class="btn btn-watch d-flex justify-content-center align-self-">Watch</a>
//               </div>
//              </div>
//            </div>
//   </div>
//   `;
//   });
// }

// //// Search Functionality
// const input = document.getElementById("searchText");

// input.addEventListener("keyup", (e) => {
//   e.preventDefault();
//   const searchText = e.target.value.toLowerCase();
//   if (searchText) {

//   } else {
//     console.log("nadarim");
//   }
// });

// //// select Functionality
// const season = document.querySelector("#season");
// const episode = document.querySelector("#episode");


// season.addEventListener("click", (e) => {
//     const seasonNumber = e.target.value;
//     getMovies(
//       "https://api.tvmaze.com/shows/5/episodebynumber?season="+"&q=" + seasonNumber
//     );
//   });
//   episode.addEventListener("click", (e) => {
//     const episodeNumber = e.target.value;
//     getMovies(
//       "https://api.tvmaze.com/shows/5/episodebynumber?season=" +
//         seasonNumber +
//         "&number=" +
//         episodeNumber
//     );
//   });






// // season.addEventListener("click", (e) => {
// //   const seasonNumber = e.target.value;
// // });
// // episode.addEventListener("click", (e) => {
// //   const episodeNumber = e.target.value;
// // });
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
////////////////NEW//////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
      let searchText = $('#searchText').val();
      getMovies(searchText);
      e.preventDefault();
    });
  });
  
  function getMovies(searchText){
    axios.get('https://api.tvmaze.com/shows/5/episodes/')
      .then((response) => {
        console.log(response);
        // let movies = response.data;
        // console.log(movies);
        // let output = '';
//         $.each(movies, (index, movie) => {
//           output += `
//           <div class="col-md-3 my-3">
//           <div class="card h-100" style="width: 18rem; min-height:10rem">
//            <img src="${movies.image.medium}" class="card-img-top" alt="...">
//            <div class="card-body text-capitalize text-center d-flex flex-column justify-content-evenly">
//              <h4 class="card-title yellow-color">${movies.name}</h4>
//              <h5> Season :<span class="light-color">${movies.season}</span></h5>
//              <h6> Episode :<span class="secondaryThree-color"> ${movies.number}</span></h6>
//              <p class="card-text sliced">${
//                movies.summary.substring(0, 90) + " ..."
//              }</p>
//              <a onclick="movieSelected()" target="_blank" href="${url}" class="btn btn-watch d-flex justify-content-center align-self-">Watch</a>
//            </div>
//           </div>
//         </div>
// </div>
//           `;
//         });
  
        $('#movies').html(output);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
//   function movieSelected(id){
//     sessionStorage.setItem('movieId', id);
//     window.location = 'movie.html';
//     return false;
//   }
  
//   function getMovie(){
//     let movieId = sessionStorage.getItem('movieId');
  
//     axios.get('http://www.omdbapi.com?i='+movieId)
//       .then((response) => {
//         console.log(response);
//         let movie = response.data;
  
//         let output =`
//                   <div class="col-md-3 my-3">
//                      <div class="card h-100" style="width: 18rem; min-height:10rem">
//                       <img src="${image.medium}" class="card-img-top" alt="...">
//                       <div class="card-body text-capitalize text-center d-flex flex-column justify-content-evenly">
//                         <h4 class="card-title yellow-color">${name}</h4>
//                         <h5> Season :<span class="light-color">${season}</span></h5>
//                         <h6> Episode :<span class="secondaryThree-color"> ${number}</span></h6>
//                         <p class="card-text sliced">${
//                           summary.substring(0, 90) + " ..."
//                         }</p>
//                         <a onclick="movieSelected()" target="_blank" href="${url}" class="btn btn-watch d-flex justify-content-center align-self-">Watch</a>
//                       </div>
//                      </div>
//                    </div>
//           </div>
//         `;
  
//         $('#movie').html(output);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
  