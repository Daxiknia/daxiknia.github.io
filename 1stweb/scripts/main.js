const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/pic1.jpg") {
    myImage.setAttribute("src", "images/pic2.jpg");
  } else {
    myImage.setAttribute("src", "images/pic1.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName(); //检查用户名非空
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storeName = localStorage.getItem("name");
  myHeading.textContent = `Welcome ${storeName}`;
}

myButton.onclick = function () {
  setUserName();
};
