const gameBoard = ( () => {
    let gameboard = Array(9);
    
    
    const checkFull = () =>{
        if(gameboard.includes(undefined)){
            return false
        }
        else{return true}
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

    return {print , get , set , clearBoard,checkFull}
}
)();

const displayController = ( () => {
    let gameDone=true
    const disableClick = () =>{
        if(!gameDone){
            const divItems = document.getElementsByClassName("item")
            
            for (var i=0;i<9;i++){
                divItems[i].removeEventListener('click',placeTile)
                
            }
            
            const divBoard = document.getElementsByTagName('p');
            divBoard[0].innerText+="Game is Over"
        }
    }
    function get(){
        return gameDone
    }
    function set(state){
        gameDone=state
    }
    return {get,set,disableClick}
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
        item.className='item'
        
        item.style.color='rgb(40, 28, 236)'
        item.addEventListener('click', placeTile.bind(null,i,item))
        divBoard.appendChild(item)
    }
    
}
//start off by populating the board
populateBoard(gameBoard);

// 2=X 3=0
function placeTile(number,tile){   
    if(tile.innerText=='undefined'){
        if(newguy.status){
            newguy.status=false;
            gameBoard.set(number,2);
            
            tile.innerText='X';
        }
        else{
            //the oldguys turn
            newguy.status=true;
            gameBoard.set(number,3)
            
            tile.innerText='O';
        }
    }
    else {console.log("This tile is already taken")}
    
    checkWon()
    if(displayController.get()){
        if(gameBoard.checkFull()){
            
            displayController.set(false);
            console.log("It's a TIE")
            displayController.disableClick();
        }
    }
}

function checkWon(){
    const gb=gameBoard.get();
    let state=displayController.get();
    if(state){
    if(((gb[0]===gb[1]&& gb[1]===gb[2]) && gb[1]!=undefined)||((gb[3]===gb[4]&& gb[3]===gb[5]) && gb[4]!=undefined)||((gb[6]===gb[7]&& gb[6]===gb[8]) && gb[7]!=undefined)){
        console.log("WON horizontaly");
        displayController.set(false);
        displayController.disableClick();
        
    }
    else if(((gb[0]===gb[3]&& gb[0]===gb[6]) && gb[3]!=undefined)||((gb[1]===gb[4]&& gb[4]===gb[7]) && gb[4]!=undefined)||((gb[2]===gb[5]&& gb[2]===gb[8]) && gb[5]!=undefined)){
        console.log("won verticaly");
        displayController.set(false);
        displayController.disableClick();
    }
    else if(((gb[0]===gb[4]&& gb[4]===gb[8]) && gb[4]!=undefined)||((gb[2]===gb[4]&& gb[4]===gb[6]) && gb[4]!=undefined)){
        console.log("Won diagonaly");
        displayController.set(false);
        displayController.disableClick();
        //tell the DOM that the game is over

    }
    
  }
    

}

function reset(){
    newguy= Player('One', true)
    oldguy = Player('Two', false)
    gameBoard.clearBoard()
    console.log(gameBoard.get())
    const divBoard = document.getElementById('board')
    divBoard.innerHTML=''
    populateBoard(gameBoard);
}