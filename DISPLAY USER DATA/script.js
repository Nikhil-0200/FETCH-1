let main = document.getElementById("main");

let fetchbtn = document.querySelector("button");


    fetchbtn.addEventListener("click", function(){
        fetch("https://reqres.in/api/users?page=2")
.then(function(res){
    return res.json()
})

.then(function(finalres){
    displayData(finalres.data);
})

.catch(function(err){
    err("Enter a Valid Response")
    console.log(err);
})
    })


function displayData(userList){
    userList.forEach((users)=>{

        let userCard = document.createElement("div");
        userCard.id = "card-cont";   

        let userImg = document.createElement("img");
        userImg.src = users.avatar;

        let userName = document.createElement("h3");
        userName.textContent = `${users.first_name} ${users.last_name}`;
        userName.style.position = "relative"
        userName.style.zIndex  = "10";


        let userNameafter = document.createElement("h3");
        userNameafter.textContent = `${users.first_name} ${users.last_name}`;
        userNameafter.style.webkitTextStroke = ".5px yellow"
        userNameafter.style.position = "absolute";
        userNameafter.style.marginTop  = "100px";
        userNameafter.style.marginRight  = "1px";
        userNameafter.style.zIndex  = "2";

        userName.insertAdjacentElement("afterend", userNameafter);

        // userName.style.webkitTextStroke = "1.5px yellow"

        let userMail = document.createElement("h4");
        userMail.textContent = users.email;

        userCard.append(userImg, userName, userNameafter, userMail);

        main.append(userCard);

    })
}

