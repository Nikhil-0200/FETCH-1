

function drama(){
    fetchAllMovies("Comedy");

    function gridData(user) {

        let gridDiv = document.getElementById("grid-div")

        gridDiv.innerHTML = null;
        // console.log(user);
    
        user.forEach((userList)=>{
    
    
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
    
        gridDiv.append(gridBox);
        gridDiv.style.display = "grid"
    
        console.log("Displaying all movies");
    
        })
    
    }

    gridData();
    
    let dramaBtn = document.querySelector("#cat-1 >");

    dramaBtn.addEventListener("click", (e)=>{



        let itemSearched = document.createElement("div");
        itemSearched.textContent = "Action";

        // let searchbtn = document.getElementById("searchbtn");
        // searchbtn.addEventListener("click", function(){
        //    let searchItm = "Drama"
        
        setTimeout(function(itemSearched){
            fetchAllMovies(itemSearched)
        },2000)
        })
      

        function fetchAllMovies(genre) {
            let API_KEY = "6e8660e5";
            let API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${genre}`;
        
            fetch(API_URL)
                .then(function (res) {
                    return res.json();
                })
                .then(function (finalData) {
                    gridData(finalData.Search);
                    // console.log(finalData.Search)    
                })
                .catch(function (err) {
                    console.log("No Data Found")
                });
        
            console.log(`Fetching all movies of genre: ${genre}`);  
        }
   
    }
    

drama();