$( document ).ready(function() {

$( "#btn1" ).click(function() {
    $("#intro").get(0).play() 
});

$( "#btn2" ).click(function() {
    $("#partyhard").get(0).play() 
});

$( "#btn3" ).click(function() {
    $("#partyparty").get(0).play() 
});
    
$( "#btn4" ).click(function() {
    $("#time2party").get(0).play() 
});


setInterval(function(){
      $(".title").removeClass( "purple" );
      $(".title").addClass( "yellow" );
}, 1000);

setInterval(function(){
      $(".title").removeClass( "yellow" );
      $(".title").addClass( "orange" );
}, 2000);
    
setInterval(function(){
      $(".title").removeClass( "orange" );
      $(".title").addClass( "purple" );
}, 3000);
    
});


