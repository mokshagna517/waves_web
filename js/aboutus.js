$(document).ready(function(){
  $("#tab-1").click(function () {
      $("#home").show();
      $("#seee").hide();
      $("#waves").hide();

  });
  $("#tab-2").click(function () {

      $("#home").hide();
      $("#seee").show();
      $("#waves").hide();

  });
  $("#tab-3").click(function () {

      $("#home").hide();
      $("#seee").hide();
      $("#waves").show();
  });
});
