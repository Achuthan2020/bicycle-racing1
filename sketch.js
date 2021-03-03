var mainPlayer,mainPlayerFallingImg,oppnPlayer1FallingImg,oppnPlayer2FallingImg,oppnPlayer3FallingImg,oppnPlayer1,obstacle1,obstacle2,obstacle3,oppnPlayer2,oppnPlayer3,track,mainPlayerImg,oppnPlayer1Img,oppnPlayer2Img,oppnPlayer3Img,bellSound,trackImg,obstacle1Img,obstacle2Img,obstacle3Img;

function preload(){
    mainPlayerImg=loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
    mainPlayerFallingImg=loadAnimation("images/mainPlayer3.png");
    oppnPlayer1FallingImg=loadAnimation("images/opponent3.png");
    oppnPlayer2FallingImg=loadAnimation("images/opponent6.png");
    oppnPlayer3FallingImg=loadAnimation("images/opponent9.png")
    oppnPlayer1Img=loadAnimation("images/opponent1.png","images/opponent2.png",);
    oppnPlayer2Img=loadAnimation("images/opponent4.png","images/opponent5.png","images/opponent6.png");
    oppnPlayer3Img=loadAnimation("images/opponent7.png","images/opponent8.png","images/opponent9.png");
    bellSound=loadSound("sound/bell.mp3");
    obstacle1Img=loadImage("images/obstacle1.png");
    obstacle2Img=loadImage("images/obstacle2.png");
    obstacle3Img=loadImage("images/obstacle3.png");
    trackImg=loadImage("images/Road.png");
}

function setup(){
    var canvas=createCanvas(1200,300)
    track=createSprite(100,150)
    track.addImage(trackImg)
    mainPlayer=createSprite(50,30);
    mainPlayer.addAnimation("mainPlayerImg",mainPlayerImg)
    mainPlayer.scale=0.1
    oppnPlayer1=createSprite(50,130);
    oppnPlayer1.addAnimation("oppnPlayer1Img",oppnPlayer1Img)
    oppnPlayer1.scale=0.1
    oppnPlayer2=createSprite(50,230);
    oppnPlayer2.addAnimation("oppnPlayer2Img",oppnPlayer2Img)
    oppnPlayer2.scale=0.1
    oppnPlayer3=createSprite(50,300);
    oppnPlayer3.addAnimation("oppnPlayer3Img",oppnPlayer3Img)
    oppnPlayer3.scale=0.1
   
}
function draw(){

    drawSprites()
}
    
