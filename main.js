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
        myHTML.setAttribute('src','https://seeklogo.com/images/H/html5-with-wordmark-color-logo-4259B7F24F-seeklogo.com.png').style.width = "300px";
      } else {
        myHTML.setAttribute('src','https://seeklogo.com/images/H/html5-with-wordmark-black-white-logo-A6222B77EC-seeklogo.com.png');
      }
  }
  
  let myCSS = document.querySelector('#css');

  myCSS.onclick = function() {
      let mySrc = myCSS.getAttribute('src');
      if(mySrc === 'https://seeklogo.com/images/C/css-3-logo-A4E6678598-seeklogo.com.png') {
        myCSS.setAttribute('src','https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png').style.width = "300px";
      } else {
        myCSS.setAttribute('src','https://seeklogo.com/images/C/css-3-logo-A4E6678598-seeklogo.com.png');
      }
  }

  let myJS = document.querySelector('#js');

  myJS.onclick = function() {
      let mySrc = myJS.getAttribute('src');
      if(mySrc === 'https://seeklogo.com/images/J/javascript-logo-851B872133-seeklogo.com.png') {
        myJS.setAttribute('src','https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png').style.width = "300px";
      } else {
        myJS.setAttribute('src','https://seeklogo.com/images/J/javascript-logo-851B872133-seeklogo.com.png');
      }
  }
