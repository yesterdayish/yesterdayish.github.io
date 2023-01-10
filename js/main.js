$(document).ready(function(){
   
//circle hover function

    $("#linkIllustration").mouseenter(function(){
        $("#linkIllustration").css("-webkit-text-fill-color", "black");
        $("#hovercircle1").show();
    }) 
    $("#linkIllustration").mouseleave(function(){
        $("#linkIllustration").css("-webkit-text-fill-color", "transparent");
        $("#hovercircle1").hide();
    }) 

    $("#linkGraphicDesign").mouseenter(function(){
        $("#linkGraphicDesign").css("-webkit-text-fill-color", "black");
        $("#hovercircle2").show();
    }) 
    $("#linkGraphicDesign").mouseleave(function(){
        $("#linkGraphicDesign").css("-webkit-text-fill-color", "transparent");
        $("#hovercircle2").hide();
    }) 

    $("#linkArtwork").mouseenter(function(){
        $("#linkArtwork").css("-webkit-text-fill-color", "black");
        $("#hovercircle3").show();
    }) 
    $("#linkArtwork").mouseleave(function(){
        $("#linkArtwork").css("-webkit-text-fill-color", "transparent");
        $("#hovercircle3").hide();
    }) 

    $("#linkAbout").mouseenter(function(){
        $("#linkAbout").css("-webkit-text-fill-color", "black");
        $("#hovercircle4").show();
    }) 
    $("#linkAbout").mouseleave(function(){
        $("#linkAbout").css("-webkit-text-fill-color", "transparent");
        $("#hovercircle4").hide();
    }) 
  });