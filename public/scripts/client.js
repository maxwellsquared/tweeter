/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  // variable describing whether the new tweet form is hidden (default true)
  let formHidden = true;

  // CLICK BUTTON TO OPEN TWEET FORM
  $("#down-button").click(function() {
    if (formHidden) {
      formHidden = false;
      $(".new-tweet").slideDown(200, function() {});
      $('#down-button').css("transform", "rotate(180deg)");
      $("#tweet-text").focus();
    } else if (!formHidden) {
      formHidden = true;
      $(".new-tweet").slideUp(200, function() {});
      $('#down-button').css("transform", "rotate(0deg)");
    }
  });

  // MAKE ENTER KEY SUBMIT
  $("#tweet-text").keypress(function(event) {
    if(event.which === 13 && !event.shiftKey) {
      event.preventDefault();
      $(this).closest("form").submit();
    }
});

  // POST TWEETS
  $(".tweetForm").submit(function(evt) {
    // avoid the default behaviour
    $(".error-message").text("");
    evt.preventDefault();
    // put the tweet text into a variable
    let theTweet = evt.target[0].value;
    if (theTweet === "") {
      $(".error-message").text("⚠️ Error! You need to enter some text. ⚠️");
      $( ".error-message").slideDown(200, function() {});
    } else if (theTweet.length > 140) { 
      $(".error-message").text(`⚠️ Error! Tweet too long (${theTweet.length} characters). ⚠️`);
      $( ".error-message").slideDown(200, function() {});
    } else if (theTweet !== "") {
      // send the tweet to the tweets page, then asynchronously call loadTweets()
      $.post('/tweets', $(evt.target).serialize()).then(()=>{loadTweets()});
      $("#tweet-text").val("");
      $(".counter").val("140");
    };
  });


  // escape the text to get rid of any naughty code a user might try to run
  // the "div" is just a placeholder--it's not included!
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweet) {
    const $tweet = `<article class="tweet">
    <header class = "tweet-header">
      <div class = "luser-left"><img src="${tweet.user.avatars}">${tweet.user.name}</div>
      <div class="luser-right">${tweet.user.handle}</div>
    </header>
      <p>${escape(tweet.content.text)}</p>
    <footer>
      <div class = "time">${timeago.format(tweet.created_at)}</div>
      <div class = "icons">
      <i class="fa-solid fa-flag"></i><i class="fa-solid fa-recycle"></i>
      <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
  </article>`;
    // console.log($tweet);
    return $tweet;
  };
  

  const renderTweets = function(tweetArray) {
    tweetArray.forEach(tweet => {
      $('.tweets-container').prepend(createTweetElement(tweet));
    });
  };

  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
      .then(function (receivedTweets) {
        $(".tweets-container").empty();
        console.log("new tweets loaded!");
        renderTweets(receivedTweets);
      });
  };

  loadTweets();
  
  // test the function with fake data
  //renderTweets(tweetData);



});