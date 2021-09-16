
//  1st step - grab the element from the document
let btnFirstName = document.querySelector("#btnFirstName");
let firstName = document.querySelector("#firstName");
let errMsg = document.querySelector("#errMsg");
let simleyDiv = document.querySelector("#simleyDiv");
let welcomeText = document.querySelector("#welcomeText");

// console.log(btnFirstName);

//  2nd step add an eventlistener
btnFirstName.addEventListener("click",displayfirstBlock);

// define the function

// function displaySecond() {
//     // alert ("here");
//     if (firstName.value === "") {
//        errMsg.innerHTML = "Please enter your name in the box";
//        errMsg.style.color = "red";
//     } else {
//     simleyDiv.style.display = "block";
//     welcomeText.innerHTML = `Welcome ${firstName.value} . What is your mood today?`;
//     }
// }

// // second part

// let sad = document.querySelector("#sad");
// let displayMood = document.querySelector("#displayMood");
// sad.addEventListener("mouseover", displayAlt);

// mouseover displayAlt() {
//     displayMood.innerHtml = sad.getAttribute("alt");
//     displayMood.style.color = "red";
// }

// let imgTag = document.querySelectorAll("img");
// let displayMood = document.querySelector("#displayMood");

// for (int i -0; i < imgTag.length; i++) {
//     imgTag[i].addEventListener("mouseover",() => {
//         displayMood.innerHtml = imgTag[i].getAttribute("alt")
//         displayMood.style.color = "red";
//     })
// }

function displayfirstBlock() {
    // write the function
    if (firstName.value == "") {
      errMsg.innerHTML = "Name cannot be left blank";
      document.querySelector("#errMsg").style.color = "#ff0000";
      firstName.style.borderColor = "red";
      firstName.focus();
    } else {
      errMsg.innerHTML = "";
      document.querySelector("#smileyDiv").style.display = "block";
      document.querySelector(
        "#welcomeText"
      ).innerHTML = `Hi ${firstName.value}, How do you feel today?`;
    }
  }
  btnFirstName.addEventListener("click", displayfirstBlock); // add event listner
  
  ///----------------
  let sad = document.querySelector("#sad");
  let displayMood = document.querySelector("#displayMood");
  let displayMessage = document.querySelector("#displayMessage");
  
  sad.addEventListener("mouseover", displayAlt);
  
  function displayAlt() {
    displayMood.innerHTML = sad.getAttribute("alt");
    displayMood.style.color = "red";
  }
  
  // -----
  let btnMessage = document.querySelector("#btnMessage");
  btnMessage.addEventListener("click", displayLastMessage);
  function displayLastMessage() {
    displayMessage.style.display = "block";
    displayMessage.innerHTML = `You need to take a vacation <br/>
    <img src="./myimages/beach.jpg" alt="beach" class="beachimg">`;
  }