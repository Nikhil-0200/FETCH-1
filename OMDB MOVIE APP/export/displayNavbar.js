import navBar from "./navbar.js"

function displayNavBar(parentNode){
    parentNode.innerHTML = "";
    parentNode.innerHTML = navBar();
}

export default displayNavBar;

