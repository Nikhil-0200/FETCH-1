import displayNavBar from "./export/displayNavbar.js";
import gridData2 from "./export/cat-grid copy.js";  

let root = document.getElementById("root");

let nav = document.getElementById("nav");

async function fetchData() {
    let movie_search = document.getElementById("movie-search").value;

    let API_URL = `https://api.themoviedb.org/3/search/movie?api_key=ce2188dadc2eb52a2d5db5c3a8c4252d&query=${movie_search}`;

    try {

        root.innerHTML = null;
        let res = await fetch(API_URL);
        let finalData = await res.json();
        gridData2(finalData.results, root);
    } catch (error) {
        console.log(error);
    }

}

let timerId;

function debounce(fetchData, delay) {
    if (timerId) {
        clearTimeout(timerId);
    }
    timerId = setTimeout(function () {
        fetchData();
    }, delay);  
}   

document.getElementById("movie-search").oninput = function(){
    debounce(fetchData, 1000)
};

function showData() {
    displayNavBar(nav);
}

showData();
