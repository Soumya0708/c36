class Game{
    constructor(){

    }
     getGameState(){
         var gameStateref=database.ref('GameState')  
         gameStateref.on("value",function(data){
        gamestate=data.val()
    }
    
    )  
    } 

    updateGameState(state){
        var databaseref=database.ref('/')
        databaseref.update({
        'GameState':state
    })
   }

    start(){
        if (gamestate==0){
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
        
        }
    }
    
    play(){
        form.hide();

        textSize(30);
        text("GAME STARTED", 120,100);

        Player.getPlayerInfo();
        if(allplayers!==undefined){
            var yposition=130
            for(var plr in allplayers){
                if (plr==="player"+player.index){
                    fill("red")
                }
                else{
                    fill("black");
                }
                yposition=yposition+30;
                textSize(15)
                text(allplayers[plr].name+":"+allplayers[plr].distance,120,yposition)
                
            }
        }
                if(keyIsDown("up")&&player.index!==null){
                    player.distance=player.distance+50;
                    player.update();
                }
    }
} 
