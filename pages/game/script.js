const gameArea = document.body.querySelector('.game-blocks')

console.log(gameArea);

const result = [
   ['-', '-', '-'],
   ['-', '-', '-'],
   ['-', '-', '-'],
]
let count = 0
gameArea.addEventListener('click', e => {
   if (e.target.classList.contains("cube")) {
      count++
      console.log(count);
      const currentCube = e.target
      if (currentCube.innerText === '' & count % 2 != 0) {
         console.log(currentCube);
         const x = currentCube.id[0] - 1
         const y = currentCube.id[1] - 1
         result[x][y] = 'x'
         console.log(result);
         currentCube.innerHTML = '<div class="cross"><img src="../../icons/cross.png" alt="cross"></div>'
      }
      if (currentCube.innerText === '' & count % 2 != 1) {
         console.log(currentCube);
         const x = currentCube.id[0] - 1
         const y = currentCube.id[1] - 1
         result[x][y] = 'o'
         console.log(result);
         currentCube.innerHTML = '<div class="circle"><img src="../../icons/circle.png" alt="cross"></div>'
      }

   }
})