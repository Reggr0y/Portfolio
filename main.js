let myImage = document.querySelector(img);

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://seeklogo.com/images/H/html5-with-wordmark-black-white-logo-A6222B77EC-seeklogo.com.png') {
      myImage.setAttribute('src','https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png');
    } else {
      myImage.setAttribute('src','https://seeklogo.com/images/H/html5-with-wordmark-black-white-logo-A6222B77EC-seeklogo.com.png');
    }
}


