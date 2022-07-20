/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(tweet) {
  const $tweet = $(`
  <article class="tweet">
  <header>
    <div class = "luser-left"><img src="${tweet.user.avatars}">${tweet.user.name}</div>
    <div class="luser-right">${tweet.user.handle}</div>
  </header>
  <p>${tweet.content.text}
  </p>
  <footer>
    <div class = "time">${(Date.now() - tweet.created_at) / 1000 / 60 / 60 / 24} days ago</div>
    <div class = "icons">
    <i class="fa-solid fa-flag"></i><i class="fa-solid fa-recycle"></i>
    <i class="fa-solid fa-heart"></i>
    </div>
  </footer>
</article>
  `)
  return $tweet;
}

// test code
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
};


$(document).ready(function () {

// let someVariable = "<p>Here is some <b>HTML</b> you can put in here.</p>";
//   $( "#element" ).append( "String", someVariable );
// ^^ use append to add tweets!



// search example from the movie app
// $(() => {
//   $('#element_id').on('submit', (evt) => {
//     evt.preventDefault();
//     $.get(`https://api.whateversite.com/search/someaddress?q=${evt.target.search.value}`,
//     (data) => {
//       console.log("data", data);
//       $('#other_id').empty();
//       appendFunction(data);
//     })
//   })
// })

const $tweet = createTweetElement(tweetData);
console.log($tweet);
console.log("test worked")

})