 
 let game = (function () {

    let handX= true;
    const cells = document.querySelectorAll('.square')
    const restartBtn = document.querySelector('#restart')
    const winMes = document.querySelector('#win-mes')
    const resultBox = document.querySelector('.result')
    const bgc = document.querySelector('.bgc')
    const winComb= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    handleClick=function (e) {
        const cell = e.target
        const currentPlay= handX ? 'X' : 'O'
        placeMark(cell, currentPlay)
        if (checkWin(currentPlay)) {
            winMes.innerText=` ${currentPlay} wins`
            resultBox.classList.add('show')
            bgc.classList.add('show')
        }
        else if (isDraw()) {
            winMes.innerText='Draw'
            resultBox.classList.add('show')
            bgc.classList.add('show')
        }
        else {
            swapTurn()
        }
    }
    isDraw= function () {
        return [...cells].every(cell=> {
            return cell.classList.contains('mark')
        })
    }

    cells.forEach(cell => {
        cell.addEventListener('click', handleClick, {once:true})
    })

    placeMark= function (cell, currentPlay){
        cell.classList.add('mark')
        cell.innerText=currentPlay
    }
    swapTurn= function (){
        handX=!handX
    }
    checkWin= function (currentPlay) {
        return winComb.some(comb => {
            return comb.every(index => {
                return cells[index].innerText==currentPlay
            })
        })
    }
    restart = function () {
        resultBox.classList.remove('show')
        bgc.classList.remove('show')
        cells.forEach(cell =>{
            cell.innerText=""
            cell.classList.remove('mark')
            cell.addEventListener('click', handleClick, {once:true})
        })
        

    }
    restartBtn.addEventListener('click', restart)
 }())

