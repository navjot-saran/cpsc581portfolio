
$(document).ready(function() {
    $("#btn1").click(function() {
        // console.log($("#ropeKnot").css("top"))
        var string = $("#ropeKnot").css("top")
        // console.log(string);
        var sub = string.substring(0, string.length-2);
        // console.log(sub);
        // console.log((parseInt(sub) + 10) +"px");
      $('#ropeKnot').css(
        "top", ((parseInt(sub) - 10) +"px")
      );
    });
    $("#btn2").click(function() {
        // console.log($("#ropeKnot").css("top"))
        var string = $("#ropeKnot").css("top")
        // console.log(string);
        var sub = string.substring(0, string.length-2);
        // console.log(sub);
        // console.log((parseInt(sub) - 10) +"px");
      $('#ropeKnot').css(
        "top", ((parseInt(sub) + 10) +"px")
      );
    });
  });