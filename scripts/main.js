/*
Everything in between is a comment
*/
// single line comment


// Image Switcher code
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/Wolf.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

// Personalized welcome message code
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if(!myName){
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = 'Mozilla is cool, '+ myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.innerHTML = 'Mozilla is cool, '+ storedName;
}

myButton.onclick =() => {
  setUserName();
};