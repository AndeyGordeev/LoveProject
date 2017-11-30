$(function () {
    $('#heart').click(function () {
      if ($("#divjs:first").is(":hidden")) {
        $("#divjs").slideDown("slow");
      } else {
        $("#divjs").hide();
      }
 });
});