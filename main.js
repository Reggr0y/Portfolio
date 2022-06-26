let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'I am Greg, welcome ' + myName;
    }
}


  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello back, ' + storedName;
  }
  
  let myHTML = document.querySelector('#html');

  myHTML.onclick = function() {
      let mySrc = myHTML.getAttribute('src');
      if(mySrc === 'https://seeklogo.com/images/H/html5-with-wordmark-black-white-logo-A6222B77EC-seeklogo.com.png') {
        myHTML.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png').style.width = "300px";
      } else {
        myHTML.setAttribute('src','https://seeklogo.com/images/H/html5-with-wordmark-black-white-logo-A6222B77EC-seeklogo.com.png');
      }
  }
  
