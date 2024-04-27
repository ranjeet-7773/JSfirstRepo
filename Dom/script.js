
//Events
//let btn1 = document.querySelector(".Box");
/* div.onmouseover = () => {
    console.log("you are inside div");

} */ 
//EventListner

/* btn1.addEventListener("click" , ()=>{
    console.log("hover done");
} ); */

//ToggleButton

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currentMode = "Light";
modeBtn.addEventListener("click" , ()=>{
    
    if(currentMode==="Light"){
        currentMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");

    }
    else{
        currentMode="Light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currentMode);
} );
