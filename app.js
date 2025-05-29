//CALCULATOR CODE
let list = "";
let buttons =  document.querySelectorAll("button");
let screen = document.querySelector(".screen");
let totalParagraph = document.createElement("p");
buttons.forEach(button => {
    button.addEventListener("click",()=>{
        if(button.innerText != "="){
            list += button.innerText;
            totalParagraph.innerText = list;
            if(button.innerText == "+" || button.innerText == "-" ||button.innerText == "*" ||button.innerText == "/" ){
                operator = button.innerText;
            }
            if(button.innerText == "RESET"){
                list = "";
                totalParagraph.innerText = list;
            }
            if(button.innerText == "DEL"){
                if(list.length > 3){
                    list = list.slice(0,list.length - 4);
                }else{
                    list = "";
                }
                totalParagraph.innerText = list;
            }
        }else{
           
            totalParagraph.innerText = eval(list);
        }
        screen.appendChild(totalParagraph);
    });
});
//MEDIA QUERY WITH JAVASCRIPT
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
//THEME CHANGER
const rangeSlider = document.querySelector("#range");
const body = document.querySelector("body");
let theme ="";
let bgColor= "";
if(localStorage.getItem("theme")){
    theme = localStorage.getItem("theme");
    bgColor = localStorage.getItem("bgColor");
}
else{
    if(darkQuery.matches){
        body.classList.add("dark-theme");
        body.style.backgroundColor= "hsl(222, 26%, 31%)";
        rangeSlider.value  = "1";
        theme = "dark-theme";
    }
    const lightQuery = window.matchMedia("(prefers-color-scheme: light)");
    if(lightQuery.matches){
        body.classList.add("light-theme");
        body.style.backgroundColor= "hsl(0, 0%, 90%)";
        rangeSlider.value  = "2";
        theme = "light-theme";
    }
} 
rangeSlider.value = localStorage.getItem("rangeValue"); 
body.classList.add(theme);
body.style.backgroundColor = bgColor;
rangeSlider.addEventListener("change",()=>{
   
    if(rangeSlider.value == 1){
        body.classList.add("dark-theme");
        body.style.backgroundColor= "hsl(222, 26%, 31%)";
        body.classList.remove("light-theme");
        body.classList.remove("drakula-theme");
        theme = "dark-theme";
    }
    else if(rangeSlider.value == 2){
        body.classList.add("light-theme");
        body.style.backgroundColor= "hsl(0, 0%, 90%)";
        body.classList.remove("dark-theme");
        body.classList.remove("drakula-theme");
        theme = "light-theme";
    }
   if(rangeSlider.value == 3){
        body.classList.add("drakula-theme");
        body.style.backgroundColor= "hsl(268, 75%, 9%)";
        body.classList.remove("dark-theme");
        body.classList.remove("light-theme");
        theme = "drakula-theme";
    }
    bgColor = body.style.backgroundColor;
    console.log(bgColor);
    localStorage.setItem("rangeValue", rangeSlider.value);
    localStorage.setItem("theme",theme);
    localStorage.setItem("bgColor", bgColor)
});
