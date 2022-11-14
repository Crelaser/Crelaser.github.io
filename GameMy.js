let LevelCanvas = document.getElementById("LevelCanvas")
let MenuCanvas = document.getElementById("MenuCanvas")
let TittleGame = document.getElementById("TittleGame")
let PlayGame = document.getElementById("PlayGame")
let About = document.getElementById("About")
let DescriptionGame = document.getElementById("DescriptionGame")
let Back = document.getElementById("Back")
let LevelOne = document.getElementById("LevelOne")
let LevelTwo = document.getElementById("LevelTwo")
let TittleSound = document.getElementById("TittleSound")
let TheVolumeSound = document.getElementById("TheVolumeSound")
let SoundInput = document.getElementById("SoundInput")
let TittleLevelGame = document.getElementById("TittleLevelGame")
let AboutTittle = document.getElementById("AboutTittle")
function ShowMenuCanvas(){
    MenuCanvas.style.visibility = "visible"
}
function HideMenuCanvas(){
    MenuCanvas.style.visibility = "hidden"
}
function ShowLevelCanvas(){
    LevelCanvas.style.visibility = "visible"
}
function HideLevelCanvas(){
    LevelCanvas.style.visibility = "hidden"
}
function ShowTittleLevelGame(){
    TittleLevelGame.style.visibility = "visible"
}
function HideTittleLevelGame(){
    TittleLevelGame.style.visibility = "hidden"
}
function ShowAboutTittle(){
    AboutTittle.style.visibility = "visible"
}
function HideAboutTittle(){
    AboutTittle.style.visibility = "hidden"
}
function ShowTittleSound(){
    TittleSound.style.visibility = "visible"
}
function HideTittleSound(){
    TittleSound.style.visibility = "hidden"
}
function ShowTheVolumeSound(){
    TheVolumeSound.style.visibility = "visible"
}
function HideTheVolumeSound(){
    TheVolumeSound.style.visibility = "hidden"
}
function ShowSoundInput(){
    SoundInput.style.visibility = "visible"
}
function HideSoundInput(){
    SoundInput.style.visibility = "hidden"
}
function ShowDisplayLevelRunning(){
    DisplayLevelRunning.style.visibility = "visible"
}
function HideDisplayLevelRunning(){
    DisplayLevelRunning.style.visibility = "hidden"
}
function ShowDisplayScore(){
    DisplayScore.style.visibility = "visible"
}
function HideDisplayScore(){
    DisplayScore.style.visibility = "hidden"
}
function ShowScore(){
    Score.style.visibility = "visible"
}
function HideScore(){
    Score.style.visibility = "hidden"
}
function ShowTittleGame(){
    TittleGame.style.visibility = "visible"
}
function HideTittleGame(){
    TittleGame.style.visibility = "hidden"
}
function ShowPlayGame(){
    PlayGame.style.visibility = "visible"
}
function HidePlayGame(){
    PlayGame.style.visibility = "hidden"
}
function ShowAbout(){
    About.style.visibility = "visible"
}
function HideAbout(){
    About.style.visibility = "hidden"
}
function ShowDescriptionGame(){
    DescriptionGame.style.visibility = "visible"
}
function HideDescriptionGame(){
    DescriptionGame.style.visibility = "hidden"
}
function ShowBack(){
    Back.style.visibility = "visible"
}
function HideBack(){
    Back.style.visibility = "hidden"
}
function ShowLevelOne(){
    LevelOne.style.visibility = "visible"
}
function HideLevelOne(){
    LevelOne.style.visibility = "hidden"
}
function ShowLevelTwo(){
    LevelTwo.style.visibility = "visible"
}
function HideLevelTwo(){
    LevelTwo.style.visibility = "hidden"
}
function ShowTittleConditionGame(){
    TittleConditionGame.style.visibility = "visible"
}
function HideTittleConditionGame(){
    TittleConditionGame.style.visibility = "hidden"
}
function ShowScoreGame(){
    ScoreGame.style.visibility = "visible"
}
function HideScoreGame(){
    ScoreGame.style.visibility = "hidden"
}
function ShowNextPrevBtn(){
    NextPrevBtn.style.visibility = "visible"
}
function HideNextPrevBtn(){
    NextPrevBtn.style.visibility = "hidden"
}
function ShowRestPlayBtn(){
    RestPlayBtn.style.visibility = "visible"
}
function HideRestPlayBtn(){
    RestPlayBtn.style.visibility = "hidden"
}
function ShowMainMenuBtn(){
    MainMenuBtn.style.visibility = "visible"
}
function HideMainMenuBtn(){
    MainMenuBtn.style.visibility = "hidden"
}
Back.onclick = function(){
    HideBack()
    ShowMenu()
    HidePlay()
    HideAboutMenu()
}
PlayGame.onclick = function(){
    ShowBack()
    HideMenu()
    ShowPlay()
}
About.onclick = function(){
    ShowBack()
    HideMenu()
    ShowAboutMenu()
}
LevelOne.onclick = function(){
    DisplayLevelRunning.innerHTML = "Level 1"
    ShowLevel()
    HideBack()
    HidePlay()
    StartLevel()
    GameObject()
}
LevelTwo.onclick = function(){
    DisplayLevelRunning.innerHTML = "Level 2"
    ShowLevel()
    HideBack()
    HidePlay()
    StartLevel()
    GameObject()
}
let DisplayLevelRunning = document.getElementById("DisplayLevelRunning")
let DisplayScore = document.getElementById("DisplayScore")
let Score = document.getElementById("Score")
function ShowLevel(){
    HideLevelCanvas()
    ShowDisplayLevelRunning()
    ShowDisplayScore()
    ShowScore()
    ShowMenuCanvas()
}
function HideLevel(){
    ShowLevelCanvas()
    HideDisplayLevelRunning()
    HideDisplayScore()
    HideScore()
    HideMenuCanvas()
}
function LoadPage(){
    ShowMenu()
    HidePlay()
    HideAboutMenu()
    HideBack()
    HideLevel()
    HideCondition()
}
function ShowMenu(){
    HideMenuCanvas()
    ShowLevelCanvas()
    ShowTittleGame()
    ShowPlayGame()
    ShowAbout()
    ShowTittleSound()
    ShowTheVolumeSound()
    ShowSoundInput()
}
function HideMenu(){
    HideTittleGame()
    HidePlayGame()
    HideAbout()
    HideTittleSound()
    HideTheVolumeSound()
    HideSoundInput()
}
function ShowPlay(){
    ShowTittleLevelGame()
    ShowLevelOne()
    ShowLevelTwo()
}
function HidePlay(){
    HideTittleLevelGame()
    HideLevelOne()
    HideLevelTwo()
}
function ShowAboutMenu(){
    ShowAboutTittle()
    ShowDescriptionGame()
}
function HideAboutMenu(){
    HideAboutTittle()
    HideDescriptionGame()
}
function LevelOneGame(){
    HideLevelOne()
    HideLevelTwo()
    HideTittleGame()
    HideBack()
    GameObject()
}
function LevelTwoGame(){
    HideLevelOne()
    HideLevelTwo()
    HideTittleGame()
    HideBack()
}
let IntervalOne
let IntervalTwo

let GameCanvas = MenuCanvas.getContext("2d")
let GameCanvasWidth = MenuCanvas.width
let GameCanvasHeight = MenuCanvas.height
let BirdsLufts = []
let TheScore = 0
function GameObject(){
    BackgroundLuft = new luft(0, 0, 1200, 600, "Background.png", "background")
    Ballon = new luft(200, 200, 100, 100, "Char.png", "image")
    BackgroundMusic = new sound("BacksoundMusic.mp3")
    SoundEffect = new video("SoundEffect.mp4")
    BackgroundMusic.loop()
    BirdsLufts.splice(0, BirdsLufts.length)
    FrameGame = 0
    TheScore = 0
}
function luft(x, y, width, height, color, type){
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.moveX = 0
    this.moveY = 0
    this.type = type
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = color;
    }
    this.update = function(){
        ctx = GameCanvas
        if (type == "image" || type == "background") {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        } else {
          ctx.fillStyle = color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
    this.movement = function(){
        this.x += this.moveX
        this.y += this.moveY
    }
    this.movementPlayer = function(){
        this.x += this.moveX
        this.y += this.moveY
        this.hitBottom()
        this.hitTop()
    }
    this.hitBottom = function(){
        var rockbottom = 600 - this.height;
        if (this.y > rockbottom){
            this.y = rockbottom
        }
    }
    this.hitTop = function(){
        var rocktop = this.height - this.height
        if(this.y < rocktop){
            this.y = rocktop
        }
    }
    this.ScoreOne = function(ScoreOneobj){
        var OneScoreleft = this.x
        var OneScoreright = this.x + 2.5
        var ScoreOneleft = ScoreOneobj.x
        var ScoreOneright = ScoreOneobj.x + 2.5
        if (OneScoreright >= ScoreOneleft && OneScoreleft <= ScoreOneright){
                TheScore += 1
                Score.innerHTML = TheScore
                ScoreGame.innerHTML = "Your Score Is: " + TheScore
        }
    }
    this.ScoreTwo = function(ScoreTwoobj){
        var TwoScoreleft = this.x
        var TwoScoreright = this.x + 5
        var ScoreTwoleft = ScoreTwoobj.x
        var ScoreTworight = ScoreTwoobj.x + 5
        if (TwoScoreright >= ScoreTwoleft && TwoScoreleft <= ScoreTworight){
                TheScore += 1
                Score.innerHTML = TheScore
                ScoreGame.innerHTML = "Your Score Is: " + TheScore
        }
    }
    this.crashWith = function(otherobj){     
        var myleft = this.x
        var myright = this.x + (this.width) - 30
        var mytop = this.y
        var mybottom = this.y + (this.height) - 20
        var otherleft = otherobj.x
        var otherright = otherobj.x + (otherobj.width) - 30
        var othertop = otherobj.y
        var otherbottom = otherobj.y + (otherobj.height) - 20
        var crash = true
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false
        }
        return crash
    }
}
function ClearCanvasGame(){
    GameCanvas.clearRect(0, 0, GameCanvasWidth, GameCanvasHeight)
}
function ContentLuftOne(){
    var x, Obs1Y, Obs1X, Obs2Y,Obs2X, minObs1Y, maxObs1Y, minObs1X, maxObs1X, minObs2Y, maxObs2Y, minObs2X, maxObs2X
    for (i = 0; i < BirdsLufts.length; i += 1){
        if (Ballon.crashWith(BirdsLufts[i])){
            BackgroundMusic.stop()
            SoundEffect.PlayVideo()
            StopLevel()
            GameOverOne()
            return
        }
    }
    if(Score.innerHTML == "250"){
        BackgroundMusic.stop()
        StopLevel()
        FinishOne()
    }
    ClearCanvasGame()

    BackgroundLuft.update()
    Ballon.update()
    Ballon.movementPlayer()
    FrameGame += 1
    if (FrameGame == 1 || everyinterval(100)){
        x = GameCanvasWidth
        minObs1Y = 50
        maxObs1Y = 350
        Obs1Y = Math.floor(Math.random()*(maxObs1Y-minObs1Y+1)+minObs1Y)
        minObs1X = 1200
        maxObs1X = 1500
        Obs1X = Math.floor(Math.random()*(maxObs1X-minObs1X+1)+minObs1X)

        minObs2Y = 400
        maxObs2Y = 600
        Obs2Y = Math.floor(Math.random()*(maxObs2Y-minObs2Y+1)+minObs2Y)
        minObs2X = 1200
        maxObs2X = 1800
        Obs2X = Math.floor(Math.random()*(maxObs2X-minObs2X+1)+minObs2X)
        
        BirdsLufts.push(new luft (Obs1X, Obs1Y-50, 50, 50, "obs2.png", "image"))
        BirdsLufts.push(new luft (Obs2X, Obs2Y-50, 50, 50, "obs2.png", "image"))
    }
    for (i = 0; i < BirdsLufts.length; i +=1){
        BirdsLufts[i].moveX = -5 
        Ballon.ScoreOne(BirdsLufts[i])
        BirdsLufts[i].movement()
        BirdsLufts[i].update()
    }
    
}
function ContentLuftTwo(){
    var x, Obs1Y, Obs1X, Obs2Y,Obs2X, minObs1Y, maxObs1Y, minObs1X, maxObs1X, minObs2Y, maxObs2Y, minObs2X, maxObs2X
    for (i = 0; i < BirdsLufts.length; i += 1){
        if (Ballon.crashWith(BirdsLufts[i])){
            StopLevel()
            BackgroundMusic.stop()
            SoundEffect.PlayVideo()
            GameOverTwo()
            return
        }
    }
    if(Score.innerHTML == "500"){
        BackgroundMusic.stop()
        StopLevel()
        FinishTwo()
    }
    ClearCanvasGame()
    BackgroundLuft.update()
    Ballon.update()
    Ballon.movementPlayer()
    FrameGame += 1
    if (FrameGame == 1 || everyinterval(50)){
        x = GameCanvasWidth
        minObs1Y = 50
        maxObs1Y = 350
        Obs1Y = Math.floor(Math.random()*(maxObs1Y-minObs1Y+1)+minObs1Y)
        minObs1X = 1200
        maxObs1X = 1500
        Obs1X = Math.floor(Math.random()*(maxObs1X-minObs1X+1)+minObs1X)

        minObs2Y = 400
        maxObs2Y = 600
        Obs2Y = Math.floor(Math.random()*(maxObs2Y-minObs2Y+1)+minObs2Y)
        minObs2X = 1200
        maxObs2X = 1800
        Obs2X = Math.floor(Math.random()*(maxObs2X-minObs2X+1)+minObs2X)
        
        BirdsLufts.push(new luft (Obs1X, Obs1Y-50, 50, 50, "obs2.png", "image"))
        BirdsLufts.push(new luft (Obs2X, Obs2Y-50, 50, 50, "obs2.png", "image"))
    }
    for (i = 0; i < BirdsLufts.length; i +=1){
        BirdsLufts[i].moveX = -10
        Ballon.ScoreTwo(BirdsLufts[i])
        BirdsLufts[i].movement()
        BirdsLufts[i].update()
    }
    
}
function everyinterval(n){
    if ((FrameGame / n) % 1 == 0){
        return true
    }
    return false
}
const up = 38
const down = 40
window.addEventListener("keydown", BallonMove)
window.addEventListener("keyup", BallonStop)
function BallonMove(event){
    const keyPressed = event.keyCode
    if(DisplayLevelRunning.innerHTML == "Level 1"){
        if (keyPressed == up){
            Ballon.moveY = -2.5
        } else if (keyPressed == down){
            Ballon.moveY = 2.5
        }
    }
    if(DisplayLevelRunning.innerHTML == "Level 2"){
        if (keyPressed == up){
            Ballon.moveY = -5
        } else if (keyPressed == down){
            Ballon.moveY = 5
        }
    }
}
function BallonStop(event){
    const keyPressed = event.keyCode
    if (keyPressed == up){
        Ballon.moveY = 0
    } else if (keyPressed == down){
        Ballon.moveY = 0
    }
}
function StartLevel(){
    if(DisplayLevelRunning.innerHTML == "Level 1"){
        if(IntervalOne) clearInterval(IntervalOne)
            IntervalOne = setInterval(ContentLuftOne, 10)
    }
    if(DisplayLevelRunning.innerHTML == "Level 2"){
        if(IntervalTwo) clearInterval(IntervalTwo)
            IntervalTwo = setInterval(ContentLuftTwo, 10)
    }
}
function StopLevel(){
    if(DisplayLevelRunning.innerHTML == "Level 1"){
        if (IntervalOne) clearInterval(IntervalOne)
    }
    if(DisplayLevelRunning.innerHTML == "Level 2"){
        if (IntervalTwo) clearInterval(IntervalTwo)
    }
}
function RestartLevel(){
    if(DisplayLevelRunning.innerHTML == "Level 1"){
        if (IntervalOne) clearInterval(IntervalOne)
        IntervalOne = setInterval(ContentLuftOne, 10)
        GameObject()
    }
    if(DisplayLevelRunning.innerHTML == "Level 2"){
        if (IntervalTwo) clearInterval(IntervalTwo)
        IntervalTwo = setInterval(ContentLuftTwo, 10)
        GameObject()
    }
}
let TittleConditionGame = document.getElementById("TittleConditionGame")
let ScoreGame = document.getElementById("ScoreGame")
let NextPrevBtn = document.getElementById("NextPrevBtn")
let RestPlayBtn = document.getElementById("RestPlayBtn")
let MainMenuBtn = document.getElementById("MainMenuBtn")
NextPrevBtn.onclick = function(){
    HideCondition()
    if(NextPrevBtn.innerHTML == "Previous Level"){
        DisplayLevelRunning.innerHTML = "Level 1"
        StartLevel()
        GameObject()
    }
    if(NextPrevBtn.innerHTML == "Next Level"){
        DisplayLevelRunning.innerHTML = "Level 2"
        StartLevel()
        GameObject()
    }
    Score.innerHTML = 0
}
RestPlayBtn.onclick = function(){
    HideCondition()
    RestartLevel()
    Score.innerHTML = 0
}
MainMenuBtn.onclick = function(){
    HideCondition()
    Score.innerHTML = 0

    ShowMenu()
    HidePlay()
    HideAboutMenu()
    HideBack()
    HideLevel()
    HideCondition()
}
function HideCondition(){
    HideTittleConditionGame()
    HideScoreGame()
    HideNextPrevBtn()
    HideRestPlayBtn()
    HideMainMenuBtn()
}
function GameOverOne(){
    TittleConditionGame.innerHTML = "Game Over!"
    TittleConditionGame.style.animation = "TiiteGameOverStyle2 2s infinite"
    RestPlayBtn.innerHTML = "Restart"
    ShowTittleConditionGame()
    ShowScoreGame()
    HideNextPrevBtn()
    ShowRestPlayBtn()
    ShowMainMenuBtn()
}
function GameOverTwo(){
    TittleConditionGame.innerHTML = "Game Over!"
    TittleConditionGame.style.animation = "TiiteGameOverStyle2 2s infinite"
    RestPlayBtn.innerHTML = "Restart"
    ShowTittleConditionGame()
    ShowScoreGame()
    HideNextPrevBtn()
    ShowRestPlayBtn()
    ShowMainMenuBtn()
}
function FinishOne(){
    TittleConditionGame.innerHTML = "Congratulations You Finished Level 1!"
    TittleConditionGame.style.animation = "TiiteGameOverStyle 2s infinite"
    RestPlayBtn.innerHTML = "Play Again"
    NextPrevBtn.innerHTML = "Next Level"
    ShowTittleConditionGame()
    HideScoreGame()
    ShowNextPrevBtn()
    ShowRestPlayBtn()
    ShowMainMenuBtn()
}
function FinishTwo(){
    TittleConditionGame.innerHTML = "Congratulations You Finished Level 2!"
    TittleConditionGame.style.animation = "TiiteGameOverStyle 2s infinite"
    RestPlayBtn.innerHTML = "Play Again"
    NextPrevBtn.innerHTML = "Previous Level"
    ShowTittleConditionGame()
    HideScoreGame()
    ShowNextPrevBtn()
    ShowRestPlayBtn()
    ShowMainMenuBtn()
}

function disableselect(e){
    return false
}
function reEnable(e){
    return true
}
document.onselectstart = new Function ("return false")

if (window.sidebar){
    document.onmousedown = disableselect
    document.onclick = reEnable
}
function video(src){
    this.video = document.createElement("video")
    this.video.src = src
    this.video.setAttribute("preload", "auto")
    this.video.setAttribute("controls", "none")
    this.video.style.display = "none"
    document.body.appendChild(this.video)
    this.PlayVideo = function(){
      this.video.play();
    }
    this.StopVideo = function(){
      this.video.pause();
    }
    this.LoopVideo = function(){
        this.video.setAttribute("loop", "loop");
        this.video.play();
    }
    this.VolumeVideo = function(vol){
      this.video.volume = vol;
    }
}
function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
    this.loop = function(){
        this.sound.setAttribute("loop", "loop");
        this.sound.play();
    }
    this.volume = function(vol){
      this.sound.volume = vol;
    }
}