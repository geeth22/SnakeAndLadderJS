//Variable
let current_position = 0;
let Dice_Count = 0;
let Player1Position ;
let Player2Position ;

const STARTING_POSITION = 0;
const ENDING_POSITION = 100;
const NO_PLAY = 0 ;
const LADDER = 2 ;
const SNAKE = 1 ;

function play(currentPosition){
    if(currentPosition < ENDING_POSITION){
        var dice = Math.floor( Math.random() * 6 ) + 1;
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
	Dice_Count++;
    }
	return currentPosition;
}
function TwoPlayers() {
    Player1Position = STARTING_POSITION;
     Player2Position = STARTING_POSITION;
    diceCount = STARTING_POSITION;
    while( Player1Position < ENDING_POSITION && Player2Position < ENDING_POSITION ){
        Player1Position = play(Player1Position);

        if(Player1Position == ENDING_POSITION) {
            break;
        } 

        Player2Position = play(Player2Position);
        if(Player2Position == ENDING_POSITION) {
            break;
        }
    }
}
function CheckWinner(){
    if(Player1Position == ENDING_POSITION ){
        console.log("Player 1 Won The Game ");
    }
    else if(Player2Position == ENDING_POSITION ){
        console.log("Player 2 Won The Game ");
    }
}
module.exports = { play, TwoPlayers, CheckWinner };
