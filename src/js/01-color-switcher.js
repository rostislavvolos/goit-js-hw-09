const body = document.querySelector('body');
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
// const colorTime = setInterval(changeColor, 1000);
let timeIt = null;



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  stopButton.setAttribute("disabled", "");
  
  startButton.addEventListener('click', (el) => {

   el.target.setAttribute("disabled", "");
   stopButton.removeAttribute("disabled");

   timeIt = setInterval(() => {
   body.style.backgroundColor = getRandomHexColor();
 }, 1000);

});


stopButton.addEventListener('click', (el) => {
    el.target.setAttribute("disabled", "");
    startButton.removeAttribute("disabled");

    clearInterval(timeIt);
});



// body.style.backgroundColor = getRandomHexColor()
//  function changeColor() {
//   body.style.backgroundColor = getRandomHexColor();
//  }