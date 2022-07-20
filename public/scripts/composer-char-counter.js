$(document).ready(function () {
  
  let numCharacters = 0;
  let newTweet = document.querySelector("form textarea");
  let charsLeft = document.querySelector(".counter");

  //hide da text label
  newTweet.addEventListener("focus", (event) => {
    document.querySelector("form label").style.display="none";
    console.log("Hello!");
  });

  // count da input
  

  newTweet.addEventListener("input", (event) => {
    charsLeft.innerHTML = 140 - newTweet.value.length;
  });
  
})