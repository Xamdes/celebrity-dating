$(function() {
  $("#btn-submit").click(function(){
    var fruit = parseInt($("input:radio[name=favorite-fruit]:checked").val());
    var music = parseInt($("input:radio[name=favorite-music]:checked").val());

    //Apples and Pop
    if(!fruit && !music)
    {
      $(".initial-hide").hide();
      $("#bruno-mars").show();
    }
    //Apples and Country
    else if (!fruit && music) {
      $(".initial-hide").hide();
      $("#celeb2").show();
    }
    //Oranges and Pop
    else if (fruit && !music) {
      $(".initial-hide").hide();
      $("#celeb3").show();
    }
    //Oranges and Country
    else if (fruit && music) {
      $(".initial-hide").hide();
      $("#celeb4").show();
    }
  });
});
