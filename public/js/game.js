<<<<<<< HEAD
$(document).ready(function () {

=======
// eslint-disable-next-line prefer-arrow-callback
$(document).ready(function() {
  // eslint-disable-next-line prefer-arrow-callback
>>>>>>> 41c10ca8599f11d435d211e42b0952d8c83267af
  $("#gameForm").on("click", function(event) {
    event.preventDefault();
    console.log("gamebtn clicked");
    // make a new game object
    const newGame = {
      // eslint-disable-next-line camelcase
      name_of_game: $("#nameOfGame")
        .val()
        .trim(),
      // eslint-disable-next-line camelcase
      story_line: $("#storyLine")
        .val()
        .trim()
    };
    console.log(newGame);

    // create post request for
    $.post("/api/new", newGame).then(() => {
      console.log("Game data was sent!");
    });
    location.reload();
  });
});
