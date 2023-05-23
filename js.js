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
        item.style.color='rgb(240, 238, 236)'
        divBoard.appendChild(item)
    }
    console.log(divBoard)
}

populateBoard(gameBoard);