
$(function() {
  $("form").submit(function(event) {
    var answer1 = $("input#question1").val();
    var answer2 = $("input#question2").val();
    var answer3 = $("input#question3").val();
    var answer4 = $("input#question4").val();
    var favorites = [answer1, answer2, answer3, answer4];
    var new2 = [];
    new2.push(answer2, answer1, answer3);
    var newFavs = [favorites[1], favorites[0], favorites[2]];

    newFavs.forEach(function(arrayItem) {
      $("ul#favs").append('<li>', arrayItem, '</li>');
    });
    event.preventDefault();
  });
});
