$(document).ready(function(){

$("#hammerUp").click(function(){
    $("#hammerUp").hide();
    $("#hammerDown").show();
})

$("#hammerDown").click(function(){
    $("#hammerUp").show();
    $("#hammerDown").hide();
})

});