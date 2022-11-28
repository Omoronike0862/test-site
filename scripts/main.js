//const myHeading =document.querySelector("h1");
//myHeading.textContent="Hello world";

const myImage = document.querySelector("img"); 

myImage.onclick = () =>{
    const mySrc=myImage.getAttribute("src");
     if(mySrc=="https://upload.wikimedia.org/wikipedia/commons/7/76/Mozilla_Firefox_logo_2013.svg"){
             myImage.setAttribute("src","images/yet.jpg" );
        }else{
     myImage.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/7/76/Mozilla_Firefox_logo_2013.svg");
    }
        };
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() 
{
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool,${myName}`;
    }
}
if(!localStorage.getItem("name")) {
        setUserName();
    } else {
        const storedName = localStorage.getItem("name"); 
        myHeading.textContent = `Mozilla is cool, ${storedName}`;
    }
myButton.onclick = function () {
    setUserName();
};