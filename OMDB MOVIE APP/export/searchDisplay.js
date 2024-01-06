function displayMovieInfo(movieData){

    

    if(movieData.Response == "False"){
        let cardCont0 = document.createElement("div");
        cardCont0.id = "card-cont";

        let cardUpr0 = document.createElement("div");
        cardUpr0.id = "card-upr0";

        let cardText0 = document.createElement("div");
        cardText0.id = "card-text0";

        let cardTextH1 = document.createElement("h1");
        cardTextH1.textContent = `Movie Not Found`;

        cardText0.append(cardTextH1)

        cardUpr0.append(cardText0);

        cardCont0.append(cardUpr0);

        cardCont0.append(cardUpr0)

        console.log("error");

        root.innerHTML = '';
        root.append(cardCont0);
    }
    else{

            let cardCont = document.createElement("div");
        cardCont.id = "card-cont";

        let cardUpr = document.createElement("div");
        cardUpr.id = "card-upr";

        let imgDiv = document.createElement("div");
        imgDiv.id = "img-div";

        let Img = document.createElement("img");
        Img.src = movieData.Poster;

        imgDiv.append(Img)

        let cardText = document.createElement("div");
        cardText.id = "card-text";

        let cardTextH1 = document.createElement("h1");
        cardTextH1.textContent = movieData.Title;

        let cardTextH3 = document.createElement("h3");
        cardTextH3.textContent = `Actors: ${movieData.Actors}`;

        let cardTextH3o = document.createElement("h3");
        cardTextH3o.textContent = `Plot: ${movieData.Plot}`;

        cardText.append(cardTextH1, cardTextH3, cardTextH3o);


        cardUpr.append(imgDiv, cardText);
        
        let cardLwr = document.createElement("div");
        cardLwr.id = "card-lwr";


        let icon = document.createElement("div");
        icon.id = "icon";

        let iconDiv = document.createElement("div");
        iconDiv.id = "icon-div";   
        
        let iconImg = document.createElement("img");
        iconImg.src = "./fff/TOI_2659-removebg-preview.png"

        iconDiv.append(iconImg);

        let iconText = document.createElement("h2");
        iconText.textContent = `${movieData.imdbRating}/10`;

        icon.append(iconDiv, iconText);
        

        let icon1 = document.createElement("div");
        icon1.id = "icon";

        let iconDiv1 = document.createElement("div");
        iconDiv1.id = "icon-div";   
        
        let iconImg1 = document.createElement("img");
        iconImg1.src = "./fff/NDTV.jpg";

        iconDiv1.append(iconImg1);

        let iconText1 = document.createElement("h2");
        iconText1.textContent = `${(parseFloat(movieData.imdbRating) + 1.2).toFixed(1)}/10`;

        icon1.append(iconDiv1, iconText1);


        let icon2 = document.createElement("div");
        icon2.id = "icon";

        let iconDiv2 = document.createElement("div");
        iconDiv2.id = "icon-div";   
        
        let iconImg2 = document.createElement("img");
        iconImg2.src = "./fff/imdb_icon_130907-removebg-preview.png"

        iconDiv2.append(iconImg2);

        let iconText2 = document.createElement("h2");
        iconText2.textContent = `${(Number(movieData.imdbRating) - 2).toFixed(1)}/10`;

        icon2.append(iconDiv2, iconText2);

cardLwr.append(icon, icon1, icon2);

cardCont.append(cardUpr, cardLwr)

        root.innerHTML = '';
        root.append(cardCont);
    }
}


window.onload = function load(){
    displayMovieInfo()
}

export default displayMovieInfo;