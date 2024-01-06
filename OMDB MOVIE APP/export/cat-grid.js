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
    Img.src = `https://image.tmdb.org/t/p/w500${userList.poster_path}`;

    gridImg.append(Img);

    let gridH3 = document.createElement("h3");
    gridH3.textContent = userList.title;

    let gridH5 = document.createElement("h5");
    gridH5.textContent = userList.release_date;

    gridBox.append(gridImg, gridH3, gridH5);

    gridDiv.append(gridBox);
    gridDiv.style.display = "grid"


       })

}


export default gridData;