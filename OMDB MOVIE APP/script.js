import displayNavBar from "./displayNavbar.js";
import counting from "./counting.js";
import {swiperr} from "./swiperr.js";

let nav = document.getElementById("nav");



function showData(){
  displayNavBar(nav)
  swiperr()
}

showData()




window.onload = ()=>{
  counting()
}