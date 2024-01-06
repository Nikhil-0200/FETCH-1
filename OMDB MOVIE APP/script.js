import displayNavBar from "./export/displayNavbar.js";
import counting from "./export/counting.js";
import {swiperr} from "./export/swiperr.js";

let nav = document.getElementById("nav");



function showData(){
  displayNavBar(nav)
  swiperr()
}

showData()




window.onload = ()=>{
  counting()
}