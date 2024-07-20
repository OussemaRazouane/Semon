buttonColours=["red", "blue", "green", "yellow"]
gamePattern=[]
userClickedPattern=[]
bigen=false
level=0
playSound=(name)=>{
    let sng = new Audio("sounds/"+name+".mp3");
    sng.play();
}
animatePress=(currentColour)=>{
    $("#"+currentColour).addClass("pressed")
    setTimeout(()=>{
        $("#"+currentColour).removeClass("pressed")
    },100)
}
$(".btn").on("click",function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern)
    playSound(userChosenColour);
    animatePress(userChosenColour)
})
function nextSequence() {
    level++
    $("h1").text("Level " + level);
    let randomNumber=Math.floor(Math.random()*4)
    let randomChosenColour=buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
    bigen=true
}
if(! bigen){
    $(document).on("keypress",()=>{
    if(! bigen){
        $("h1").text("Level " + level);
        nextSequence()
        bigen=true
    }});
}