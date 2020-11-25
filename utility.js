//Variable
let current_position = 0;

const STARTING_POSITION = 0;
const ENDING_POSITION = 100;
const NO_PLAY = 0 ;
const LADDER = 2 ;
const SNAKE = 1 ;

function play(){
    currentPosition = STARTING_POSITION ;
    while(currentPosition < ENDING_POSITION){
        var dice = Math.floor( Math.random() * 6 ) + 1 ;
        console.log("random check: " + dice);
        var rand = Math.floor( Math.random() * 3 ) ;
        switch(rand){
            case LADDER :
                console.log("LADDER");
                if(currentPosition + dice <= ENDING_POSITION){
                currentPosition = currentPosition + dice;
                }
                break;
            case SNAKE :
                console.log("SNAKE");
                if(currentPosition - dice >= STARTING_POSITION ){
                currentPosition = currentPosition - dice;
                }
                break;
            default:
                console.log("NO PLAY");
                currentPosition = currentPosition;
                break;
        }
        console.log("current position: " + currentPosition);
    }
}
module.exports = { play };
