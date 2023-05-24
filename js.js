const gameBoard = ( () => {
    let gameboard = Array(9);
    
    
    const print = () =>{
        console.log(gameboard);
    }//samo za testiranje
    

    function get(){
        return gameboard
    }
    function set(position , sign){
        gameboard[position] = sign;
    }
    function clearBoard(){
        gameboard = Array(9);
    }

    return {print , get , set , clearBoard}
}
)();

const Player = (name , status) => {
    
    return {name , status}
}

var newguy= Player('One', true)
var oldguy = Player('Two', false)


function populateBoard(board){
    const divBoard = document.getElementById('board')
    
    for(var i = 0; i<9; i++){
        const item= document.createElement('div')
        item.style.border = '1px solid blue'
        item.innerText= board[i]
        item.style.color='rgb(40, 28, 236)'
        item.addEventListener('click', placeTile.bind(null,i,item))
        divBoard.appendChild(item)
    }
    
}
// 1=X 2=0
populateBoard(gameBoard);
function placeTile(number,tile){
    
    

    if(tile.innerText=='undefined'){
        if(newguy.status){
            newguy.status=false;
            gameBoard.set(number,1);
            
            tile.innerText='X';
        }
        else{
            //the oldguys turn
            newguy.status=true;
            gameBoard.set(number,2)
            
            tile.innerText='O';
        }
    }
    else {console.log("This tile is already taken")}
    
    checkWon()
    
}

function checkWon(){
    var gb=gameBoard.get()
    
}