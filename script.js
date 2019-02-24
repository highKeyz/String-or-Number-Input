var number = Math.floor((Math.random() * 10) + 1);

$("button").click(function() {
 var user = $("#input").val();

  if (number > user) {
    $("p").html("Too Low");
} else if(number < user) {
    $("p").html("Too High");
    
}else{
    $("p").html("Correct");
}
});