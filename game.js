buttonColours=["red", "blue", "green", "yellow"]

function startOver(){
    gamePattern=[]
    userClickedPattern=[]
    bigen=false
    level=0
}
startOver()

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){
        if(gamePattern.length==userClickedPattern.length){
            setTimeout(nextSequence, 1000);
        }
    }else{
        let wrg=new Audio("sounds/wrong.mp3")
        wrg.play()
        $("body").addClass("game-over")
        $("h1").text("Game Over, Press Any Key to Restart")
        setTimeout(()=>{
            $("body").removeClass("game-over")
            startOver()
        },200);
    }
}

$(document).on("keypress",()=>{
if(! bigen){
    $("h1").text("Level " + level);
    nextSequence()
    bigen=true
}});

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
    checkAnswer(userClickedPattern.length-1)
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
    animatePress(randomChosenColour)
    userClickedPattern=[]
    bigen=true
}

