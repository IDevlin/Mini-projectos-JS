document.addEventListener('DOMContentLoaded', ()=> {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'));
    const ScoreDisplay = document.querySelector('#score');
    const StarBtn = document.querySelector('#star-button')
    const width = 10;
    

    //The Tetrominoes
    const lTetromino = [
        [1, width+1, width*2+1, 2 ],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]

    const zTetromino = [
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1]
      ]

      const tTetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
      ]
    
      const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
      ]
    
      const iTetromino = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
      ]
    
      const theTetrominoes = [ lTetromino, zTetromino, tTetromino, oTetromino, iTetromino ]

      //selecionar aleatoriamente el tetromino y su rotacion
      let random = Math.floor(Math.random()*theTetrominoes.length)
      let currentPosition = 4
      let currentRotation = 0
      let current = theTetrominoes[0][currentRotation]
      
      //Draw the firts rotation in the firts tetromino
      function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
         // console.log(index)
          //console.log(squares)
        })
      }

      draw()
      //undraw the tetromino
       function undraw () {
       current.forEach(index =>{
          squares[currentPosition + index].classList.remove('tetromino')
        })
      }
      
      //make the tetromino move down every second
      timeId = setInterval(moveDown, 1000)
     clearInterval(timeId)

     //assing function
     function control(e) {
       const left = e.key === 'ArrowLeft' && moveLeft()
        
       const rotateUp = e.key === 'ArrowUp' && rotate()
       
       const down = e.key === 'ArrowDown' && moveDown()
       
       const right = e.key === 'ArrowRight' && moveRight()
  
       
      }
    

      document.addEventListener('keyup', control)
      
      //move down function

      function moveDown(){
          undraw()
          currentPosition += width
          draw()
          freeze()
      }

      //frezee fucntion
      function freeze() {
        if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
          current.forEach(index => squares[currentPosition + index].classList.add('taken'))
          //start a new tetromino falling
          random = Math.floor(Math.random() * theTetrominoes.length)
          current = theTetrominoes[random][currentRotation]
          currentPosition = 4
          draw()
        }
      }

      function moveLeft(){
        undraw()
        const isALeftEdge = current.some(index => (currentPosition + index) % width === 0)

        if(!isALeftEdge) currentPosition -=1

        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
          currentPosition +=1
        }
         
        draw()
      }

      function moveRight(){
         undraw()
         const isRigthEdge =  current.some(index => (currentPosition + index) % width === -1)

         if(!isRigthEdge) currentPosition +=1

        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
          currentPosition -=1
        }
         
        draw()
      }

      //rotate tetromino

      function rotate(){
         undraw()
         currentRotation++
         if(currentRotation === current.length) {
           currentRotation = 0
         }
         current = theTetrominoes[random][currentRotation]

        }








})


//console.log(names[].match(/[a]/g))