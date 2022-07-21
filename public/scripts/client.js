/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {


  // from ajax with jquery exercise
  // $(function() {
  //   const $button = $('#load-more-posts');
  //   $button.on('click', function () {
  //     console.log('Button clicked, performing ajax call...');
  //     $.ajax('more-posts.html', { method: 'GET' })
  //     .then(function (morePostsHtml) {
  //       console.log('Success: ', morePostsHtml);
  //       $button.replaceWith(morePostsHtml);
  //     });
  //   });
  // });

  //let's try and do something with the submit button
  // $(() => {
  const $form = $('.tweetForm');

  // $form.on('submit', (evt) => {
  //   evt.preventDefault();
  //   console.log("button works!");
  //   let tweetText = {"text": $('#tweet-text').val()};
  //   console.log(tweetText);
  //   $.post('/tweets', $(tweetText).serialize());
  // });

  $(".tweetForm").submit(function(evt) {
    evt.preventDefault();
    console.log(this);
    console.log($(this).serialize());
    console.log("button works!");
    $.post('/tweets', $(this).serialize());
  });




  const createTweetElement = function(tweet) {
    const $tweet = `<article class="tweet">
    <header>
      <div class = "luser-left"><img src="${tweet.user.avatars}">${tweet.user.name}</div>
      <div class="luser-right">${tweet.user.handle}</div>
    </header>
    <p>${tweet.content.text}
    </p>
    <footer>
      <div class = "time">${timeago.format(tweet.created_at)}</div>
      <div class = "icons">
      <i class="fa-solid fa-flag"></i><i class="fa-solid fa-recycle"></i>
      <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
  </article>`;
  
    return $tweet;
  };
  

  const renderTweets = function(tweetArray) {
    tweetArray.forEach(tweet => {
      $('.tweets-container').prepend(createTweetElement(tweet));
    });
  };

  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
      .then(function (someStuff) {
        console.log("HUGE SUGGESS WOW");
        console.log(someStuff[0]);
        //$button.replaceWith(morePostsHtml);
        renderTweets(someStuff);
      });
  };

  loadTweets();
  
  // test the function with fake data
  //renderTweets(tweetData);



});