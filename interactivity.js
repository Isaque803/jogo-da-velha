let listBlocksAddedBoard = []
let listPositionBlocks = ["", "", "", "", "", "", "", "", ""]
let c = 0
let endGame = false

function addSymbolsBoard(number){
    if (endGame == false){
        if (listBlocksAddedBoard.indexOf(number) === -1){
            listBlocksAddedBoard.push(number)
            c++
            if (c % 2 == 0){
                document.getElementById("block"+number).src = "x.png"
                document.getElementById("symbol").src = "o.png"
            }else{
                document.getElementById("block"+number).src = "o.png"
                document.getElementById("symbol").src = "x.png"
            }
            addPositionBlocks(number)
            allSpacesFilled()
        }
    }   
}

function addPositionBlocks(num){
    if (c % 2 == 0){
        listPositionBlocks[num] = "x"
        if (listPositionBlocks[0] == "x" && listPositionBlocks[1] == "x" && listPositionBlocks[2] == "x" ||
            listPositionBlocks[3] == "x" && listPositionBlocks[4] == "x" && listPositionBlocks[5] == "x" ||
            listPositionBlocks[6] == "x" && listPositionBlocks[7] == "x" && listPositionBlocks[8] == "x" ||
            listPositionBlocks[0] == "x" && listPositionBlocks[3] == "x" && listPositionBlocks[6] == "x" ||
            listPositionBlocks[1] == "x" && listPositionBlocks[4] == "x" && listPositionBlocks[7] == "x" ||
            listPositionBlocks[2] == "x" && listPositionBlocks[5] == "x" && listPositionBlocks[8] == "x" ||
            listPositionBlocks[0] == "x" && listPositionBlocks[4] == "x" && listPositionBlocks[8] == "x" ||
            listPositionBlocks[6] == "x" && listPositionBlocks[4] == "x" && listPositionBlocks[2] == "x"
            ){
                alert("'X' won the game.")
                endGame = true
        }
    }else{
        listPositionBlocks[num] = "o"
        if (listPositionBlocks[0] == "o" && listPositionBlocks[1] == "o" && listPositionBlocks[2] == "o" ||
            listPositionBlocks[3] == "o" && listPositionBlocks[4] == "o" && listPositionBlocks[5] == "o" ||
            listPositionBlocks[6] == "o" && listPositionBlocks[7] == "o" && listPositionBlocks[8] == "o" ||
            listPositionBlocks[0] == "o" && listPositionBlocks[3] == "o" && listPositionBlocks[6] == "o" ||
            listPositionBlocks[1] == "o" && listPositionBlocks[4] == "o" && listPositionBlocks[7] == "o" ||
            listPositionBlocks[2] == "o" && listPositionBlocks[5] == "o" && listPositionBlocks[8] == "o" ||
            listPositionBlocks[0] == "o" && listPositionBlocks[4] == "o" && listPositionBlocks[8] == "o" ||
            listPositionBlocks[6] == "o" && listPositionBlocks[4] == "o" && listPositionBlocks[2] == "o"
            ){
                alert("'O' won the game.")
                endGame = true
        }
    }
}

function allSpacesFilled(){
    if (endGame == false){
        if(listBlocksAddedBoard.length == 9){
            alert("Nobody won")
        }
    }
}

function resetGame(){
    document.getElementById("symbol").src = "o.png"
    listBlocksAddedBoard = []
    listPositionBlocks = ["", "", "", "", "", "", "", "", ""]
    c = 0
    endGame = false
    for(var i = 0; i < 9; i++){
        document.getElementById("block"+i).src = ""
    }
}

