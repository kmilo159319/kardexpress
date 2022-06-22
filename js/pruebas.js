$(document).ready(function () {
  $("btn-pop-up").click(function () {
      $(".pop").fadeIn(300);
      positionPopup();
  });

  $("span").click(function () {
      $(".pop").fadeOut(300);
  });
});