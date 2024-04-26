
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
let currentMode = "Light";
modeBtn.addEventListener("click" , ()=>{
    
    if(currentMode==="Light"){
        currentMode="dark";
        
        document.querySelector("body").style.backgroundColor="black";
        let h2=document.querySelector("dark");
        console.log("This is dark mode");
    }
    else{
        currentMode="Light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currentMode);
} );
