const imageArray = ["BG1.jpg", "BG2.jpg", "BG3.jpg", "BG4.jpg"];
const chosenImage = imageArray[Math.floor(Math.random() * imageArray.length)];

const bgImage = document.createElement('img');
bgImage.src = `./img/${chosenImage}`;

const wrap = document.getElementsByClassName('wrap')[0];
wrap.appendChild(bgImage);
