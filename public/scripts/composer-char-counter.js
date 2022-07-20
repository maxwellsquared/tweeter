$(document).ready(function () {
  
  let newTweet = document.querySelector("form textarea");
  let charsLeft = document.querySelector(".counter");

  //hide da text label
  // newTweet.addEventListener("focus", (event) => {
  //   document.querySelector("form label").style.display="none";
  //   console.log("Hello!");
  // });

  // hide text label - fancy new version!
  $("form textarea").on('focus', function(event) {
    console.log($("form label")[0].innerText); // <-- WTF?!?!?!!!?! THIS WORKS BUT WHY DOES IT NEED [0]
    console.log(document.querySelector("form label").innerText)
    // GET SOME HELP - WHY IS THIS?!?!?!!? 
    // --------------- SERIOUSLY GET A MENTOR AND ASK WHY YOU NEED TO GET FORM LABEL AT [0] WTF ------
    $("form label")[0].style.display="none";

  })

  // // count da input
  // newTweet.addEventListener("input", (event) => {
  //   charsLeft.innerHTML = 140 - newTweet.value.length;
  //   // INSTRUCTIONS SAY TO USE THIS AND .val() FROM JQUERY... BUT WHY???
  // });

  $("form textarea").on('input', function(event) {
    $(this).parent()[0][2].innerText = 140 - $(this).val().length;
    // ============== v v ===============
    // IS THERE A BETTER WAY TO DO THIS?? THE ARRAYS LOOK WEIRD.
    // ============== ^^^ ============
    if ($(this).val().length > 140) {
      $(this).parent()[0][2].style.color="red";
    }
  })
  


})