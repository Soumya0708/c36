var canvas,database;

var gamestate=0

var player,form;

var playercount;

var allplayers;

function setup(){
    canvas=createCanvas(400,400)
    database=firebase.database();
    game=new Game()
    game.getGameState()
    game.start()
 }
    function draw(){
        if(playercount===2){
        game.updateGameState(1);
    
         }

         if(gamestate===1){
            clear();
            game.play();
            }
     }