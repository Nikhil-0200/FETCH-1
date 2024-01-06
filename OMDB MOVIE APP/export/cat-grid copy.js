    function gridData2(user) {

        user.forEach(element => {
            console.log(element);

    let gridBox = document.createElement("div");
    gridBox.id = "grid-box";

    let grid_left = document.createElement("div");
    grid_left.id = "grid-left";

    let gridImg = document.createElement("div");
    gridImg.id = "grid-Img";

    let Img = document.createElement("img");
    Img.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;

    gridImg.append(Img);


    let grid_right = document.createElement("div");
    grid_right.id = "grid-right";

    let gridH2 = document.createElement("h1");
    gridH2.textContent = element.title;

    let cardTextH3o = document.createElement("h3");
        cardTextH3o.textContent = `Plot: ${element.overview}`;

    let gridH5 = document.createElement("h5");  
    gridH5.textContent = `Release Date: ${element.release_date}`;

    let grid_pop = document.createElement("h5");  
    grid_pop.textContent = `Popularity: ${element.popularity}`;

    grid_left.append(gridImg);  

    grid_right.append(gridH2, cardTextH3o, gridH5, grid_pop)

    gridBox.append(grid_left, grid_right)

    root.append(gridBox);
    root.style.display = "grid"

    console.log("Displaying all movies");
        });



    }


    export default gridData2;