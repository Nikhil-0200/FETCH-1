import displayMovieInfo from "./export/searchDisplay.js";

let myForm = document.querySelector("#search-nav > form");
let movieSearchInput = document.getElementById("movie-search");
let root = document.getElementById("root");



let loadingDiv = document.getElementById("loading");

function loading(){
    return new Promise(function(res){
        loadingDiv.style.display = "block"; 
        setTimeout(function(){
        loadingDiv.style.display = "none";
        res(); 
        },3000)
    });
}



myForm.addEventListener("submit", async (e)=>{
    e.preventDefault();

    let searchItem = movieSearchInput.value;

    let API_KEY = "6e8660e5";

    let API_URL = `HTTPS://www.omdbapi.com/?apikey=${API_KEY}&t=${searchItem}`;
    await loading()
    async function fetchData(){
        root.innerHTML = null;
        try {
        let res = await fetch(API_URL);
        let finalData = await res.json();
        displayMovieInfo(finalData, root)
        } catch (error) {
            console.error("Error", error);
        }
    }

    fetchData()
})

