//CACHE SELECTORS
var css = document.querySelector("p");
var lcolor = document.querySelector(".lcolor");
var rcolor = document.querySelector(".rcolor");
var body = document.querySelector("#gradient");
var random = document.querySelector(".random");

//set the background color to the input
function setGradient(){
    body.style.background="linear-gradient(to right, "+lcolor.value+", "+rcolor.value+")";
    
    css.textContent = body.style.background;
}

//copy the css text to the clipboard (once it's clicked)
function copyToClipboard(){
    navigator.clipboard.writeText(css.innerHTML);
    alert("Copied the text: " + css.innerHTML);
}

//generate random background gradient
//once random button is clicked
//the generated background css style will be displayed to copy
//rcolor and lcolor will be set to the random generated colors
function generateRandom(){
    var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    lcolor.value = "#"+randomColor1;
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    rcolor.value = "#"+randomColor2;
    body.style.background="linear-gradient(to right, #"+randomColor1+", #"+randomColor2+")";

    css.textContent = body.style.background;
}

//event listeners
lcolor.addEventListener("input", setGradient);
rcolor.addEventListener("input", setGradient);
css.addEventListener("click", copyToClipboard);
random.addEventListener("click", generateRandom)
