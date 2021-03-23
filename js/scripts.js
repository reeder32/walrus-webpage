

$(document).ready(function () {
  $(".clickable").click(function () {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $(".faded-header").click(function () {
    $("#header").fadeOut();

  });
  $("#header-appear").click(function () {
    $("#header").fadeIn();
  })
});

