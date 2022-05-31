const gameArea = document.body.querySelector('.game-blocks')

// console.log(gameArea);

let result = [
   ['-', '-', '-'],
   ['-', '-', '-'],
   ['-', '-', '-'],
]
let count = 0
gameArea.addEventListener('click', e => {
   const currentCube = e.target

   if (currentCube.classList.contains("cube")) {
      count++
      if (currentCube.innerText === '' & count % 2 != 0 & count < 10) {
         const x = currentCube.id[0] - 1
         const y = currentCube.id[1] - 1
         result[x][y] = 'x'
         currentCube.innerHTML = '<div class="cross"><img src="../../icons/cross.png" alt="cross"></div>'
      }
      if (currentCube.innerText === '' & count % 2 != 1 & count < 10) {
         const x = currentCube.id[0] - 1
         const y = currentCube.id[1] - 1
         result[x][y] = 'o'
         currentCube.innerHTML = '<div class="circle"><img src="../../icons/circle.png" alt="cross"></div>'
      }

      if (determineWinner(result, count) || count === 9) {
         count = 10

         const tryAgain = document.createElement("div")
         tryAgain.classList = 'try-again'
         tryAgain.innerText = 'TRY AGAIN'
         document.body.append(tryAgain)

         tryAgain.addEventListener('click', tryEvent => {
            console.log('try again');
            result = result.map(el => {
               return el.map(eachEl => '-')
            })

            //clear cross and circle icons after Try Again 
            for (let i = 1; i <= 9; i++) {
               const element = 'cube-' + i
               const eachCube = document.body.querySelector(`.${element}`)
               eachCube.innerHTML = ''
               count = 0
               tryAgain.remove()
            }
            document.body.querySelector('.winner').remove()
            // console.log(result);
         })
      }
      console.log(result);
   }
})

function determineWinner(blockArray, count) {
   let areThereWinner = false

   //check rows & columns
   for (let j = 0; j <= 2; j++) {
      const row = blockArray[j]
      if (row.every(item => item === 'x')) {
         areThereWinner = true
         winnerBlue()
         console.log('X winner');
      }
      if (row.every(item => item === 'o')) {
         areThereWinner = true
         winnerRed()
         console.log('O winner');
      }
   }

   // Check Columns 
   for (let w = 0; w <= 2; w++) {
      const currentColumn = []
      for (let k = 0; k <= 2; k++) {
         currentColumn.push(blockArray[k][w])
      }
      if (currentColumn.every(item => item === 'x')) {
         areThereWinner = true
         winnerBlue()
         console.log('X winner');
      }
      if (currentColumn.every(item => item === 'o')) {
         areThereWinner = true
         winnerRed()
         console.log('O winner');
      }
      // console.log('currentColumn: ', currentColumn);
   }

   //check diagonals
   if (blockArray[0][0] === 'o' & blockArray[1][1] === 'o' & blockArray[2][2] === 'o'
      || blockArray[2][0] === 'o' & blockArray[1][1] === 'o' & blockArray[0][2] === 'o') {
      areThereWinner = true
      winnerRed()
      console.log('O winner');
   }
   if (blockArray[0][0] === 'x' & blockArray[1][1] === 'x' & blockArray[2][2] === 'x'
      || blockArray[2][0] === 'x' & blockArray[1][1] === 'x' & blockArray[0][2] === 'x') {
      areThereWinner = true
      winnerBlue()
      console.log('X winner');
   }




   // Check Draw 
   if (areThereWinner === false & count === 9) {
      drawWinner()
      return false
   } return areThereWinner
}

function winnerBlue() {
   const winner = document.createElement("div")
   winner.classList = 'winner blue'
   winner.innerText = 'BLUE WINS'
   document.body.append(winner)
}
function winnerRed() {
   const winner = document.createElement("div")
   winner.classList = 'winner red'
   winner.innerText = 'RED WINS'
   document.body.append(winner)
}
function drawWinner() {
   const draw = document.createElement("div")
   draw.classList = 'winner yellow'
   draw.innerText = 'DRAW'
   document.body.append(draw)
}