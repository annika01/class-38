class Game{
constructor(){

}

getState(){
    db.ref("gameState").on("value", function(data){
        gameState=data.val()
    })
}

updateState(state){
    db.ref("/").update({
        gameState: state
    })
}
start() {
    if(gameState=== 0){
        player=new Player();
player.getCount()
        form=new Form()
 form.display()

    }
    car1=createSprite(100,200)
    car1.addImage(carimg1)
    car2=createSprite(300,200)
    car2.addImage(carimg2)
    car3=createSprite(500,200)
    car3.addImage(carimg3)
    car4=createSprite(700,200)
    car4.addImage(carimg4)
cars= [car1,car2,car3,car4]

}
play(){
form.hide()
Player.getPlayerInfo()
if(allPlayers!==undefined){
    image(trackimg, 0, -displayHeight*4, displayWidth, displayHeight*5)
    var index=0
    var x=0
    var y 

    for(var plr in allPlayers){
        index=index+1
        x=x+200
        y=displayHeight-allPlayers[plr].distance
        cars[index-1].x=x
        cars[index-1].y=y
        if(index===player.index){
            cars[index-1].shapeColor= "red"
            camera.position.x=displayWidth/2
            camera.position.y= cars[index-1].y
        }
    }
}

if(keyDown(UP_ARROW)&& player.index!==null){
    player.distance+=50
    player.update()
}
if (player.distance>3860){
    gameState=2
}

drawSprites() 

}

end(){
    console.log("game ended")
}

}