

function drama(){
    fetchAllMovies();

    function gridData(user) {
    
        user.forEach((userList)=>{
            console.log(userList);
    
    
    let gridBox = document.createElement("div");
        gridBox.id = "grid-box";
    
        let gridImg = document.createElement("div");
        gridImg.id = "grid-Img";
    
        let Img = document.createElement("img");
        Img.src = userList.Poster;
    
        gridImg.append(Img);
    
        let gridH3 = document.createElement("h3");
        gridH3.textContent = userList.Title;
    
        let gridH5 = document.createElement("h5");
        gridH5.textContent = userList.Year;
    
        gridBox.append(gridImg, gridH3, gridH5);
    
        let gridDiv = document.getElementById("grid-div")
        gridDiv.append(gridBox);
        gridDiv.style.display = "grid"
    
        console.log("Displaying all movies");
    
        })
    
    }
    
    
    let searchBtn = document.getElementById("searchbtn");
    
    searchBtn.addEventListener("click", function () {
        let searchItem = "Drama"; // Replace this with your logic to get the selected genre
        fetchAllMovies(searchItem);
    
        let gridDiv = document.getElementById("grid-div")
        gridDiv.style.display = "grid"
    });
    
    async function fetchAllMovies(genre) {
        let API_KEY = "6e8660e5";
        let API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${genre}`;
    
        fetch(API_URL)
            .then(function (res) {
                return res.json();
            })
            .then(function (finalData) {
                gridData(finalData.Search);
                // console.log(finalData)
            })
            .catch(function (err) {
                console.log("Result Not Found");
            });
    
        console.log(`Fetching all movies of genre: ${genre}`);
    }
    
}



drama();