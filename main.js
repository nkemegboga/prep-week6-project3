//
/*
=======================================================

 ** Week 4 - Project 3 **
***   jQuery Mania II  ***



=======================================================
*/


$(document).ready(function() {

// Question #1
$(".changeColor").click(function(){
      $("li:nth-child(3)").css('color', '#8A2BE2');
    });

// Question #2
$("li:nth-child(4)").click(function(){
      $("li:nth-child(4)").append("<li> Hey, this is a new list item </li>");
    });

// Question #3
$("#removeLi").click(function(){
      $("li:nth-child(2)").remove();
    });

// Question #4
$("li:last").click(function(){
      $("li:last").css('font-size', '40px');
      $("li:nth-child(n)").hide();
      $("li:last").show();
    });

// Question #5
$(".cute").click(function(){
      $(".clones").append($(".cute").clone());
    });

// Question #6
$("*").dblclick(function(){
      var divWidth = $('#makeSquare').width();
      $("#makeSquare").height(divWidth);
    });

// Question #7
$(".black").click(function(){
      $("body").css('background-image','');
      $("body").css('background-color','#000');
    });
$(".wood").click(function(){
      $("body").css('background-image','url("http://phandroid.s3.amazonaws.com/wp-content/uploads/2015/03/wood-wallpaper-3.jpg")');
    });

$(".chaos").click(function(){
      $("body").css('background-image','url("http://www.henderson-art.co.uk/art/wallpaper/chaos.jpg")');
    });

$(".restore").click(function(){
      $("body").css('background-image','');
      $("body").css('background-color', 'white');
    });
// Question #8
$("#hover").mouseenter(function(){
      $("#hover").css('background-color','red').mouseleave(function(){
            $("#hover").css('background-color','#39B7CD');
          });;
    });

$("#hover").click(function(){
      $("#hover").toggleClass('green');
    });



});
