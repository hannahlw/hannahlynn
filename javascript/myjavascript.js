$(document).ready(function(){

 

// left: 350
// $('#name').animate({left: "36%"});
// $('#title').animate({right: "-35%"});


$("#codeacdemy").mouseover(function(){
     $("#codeacemy-words").fadeIn( "slow");
      });
$("#codeacdemy").mouseleave(function(){
     $("#codeacemy-words").fadeOut("slow");
   });

$("#girldevelop").mouseover(function(){
     $("#girldevelop-words").fadeIn( "slow");
      });
$("#girldevelop").mouseleave(function(){
     $("#girldevelop-words").fadeOut("slow");
   });

$("#treehouse").mouseover(function(){
     $("#treehouse-words").fadeIn( "slow");
      });
$("#treehouse").mouseleave(function(){
     $("#treehouse-words").fadeOut("slow");
   });

$("#codeschool").mouseover(function(){
     $("#codeschool-words").fadeIn( "slow");
      });
$("#codeschool").mouseleave(function(){
     $("#codeschool-words").fadeOut("slow");
   });

  
  $("#view-more").click(function(){
    $("#more-school").slideDown( 800 );
    $("#view-more").attr( "style", "display: none;" );
    $("#contact").attr( "style", "margin: 15% 0% 5% 0;" );

  });

});