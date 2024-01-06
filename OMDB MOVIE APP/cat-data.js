import gridData from "./export/cat-grid.js";

const MOVIE_API_URL =  `https://api.themoviedb.org/3/movie/popular?api_key=ce2188dadc2eb52a2d5db5c3a8c4252d`


async function fetchData(){
    try {
        let res = await fetch(MOVIE_API_URL);
        let finalData = await res.json();
        gridData(finalData.results)
        // console.log(finalData.results);
    } catch (error) {
        console.error("Error", error);
    }
}

fetchData()


