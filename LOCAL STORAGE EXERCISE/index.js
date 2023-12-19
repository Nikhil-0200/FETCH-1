let myForm = document.querySelector("form");
let nameO = document.getElementById("name");
let age = document.getElementById("age");
let Data = document.getElementById("data");
let tbody = document.querySelector("tbody");


let ls;

if(localStorage.getItem("ls")){


    ls = JSON.parse(localStorage.getItem("ls"))
}
else
{
    ls = [];
    localStorage.setItem("ls", JSON.stringify(ls));
}


myForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    let obj = {};
    
    obj.data1 = nameO.value;
    obj.data2 = age.value;

   myForm.reset();

    ls.push(obj);
    localStorage.setItem("ls", JSON.stringify(ls))


})




let showBtn = document.getElementById("show");
showBtn.addEventListener("click",()=>{
    tbody.innerHTML = null;
    localStore()    

})


let reset = document.getElementById("reset");
reset.addEventListener("click",()=>{

    localStorage.clear();
    location.reload();
})




function localStore(){
    ls.forEach((ele)=>{
    
    
        trow1 = document.createElement("tr");


        tbrowData = document.createElement("td");
        tbrowData.textContent = ele.data1;

        tbrowData1 = document.createElement("td");
        tbrowData1.textContent = ele.data2;
    
        trow1.append(tbrowData, tbrowData1);
    
        tbody.append(trow1);
    
    
    })
}



