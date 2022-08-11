//imports *
import hills from '../img/hills.png'
import background from '../img/background.png'
import platform from '../img/platform.png'
import platformSmallTall from '../img/platformSmallTall.png'
import winFlag from '../img/winFlag.png'
import spriteRunLeft from '../img/spriteRunLeft.png'
import spriteRunRight from '../img/spriteRunRight.png'
import spriteStandLeft from '../img/spriteStandLeft.png'
import spriteStandRight from '../img/spriteStandRight.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext ('2d')
console.log(c)

canvas.width = 1024
canvas.height = 576

const gravity = .5

//calsse do player
class Player {
   constructor(){
    this.speed = 10
    this.position = {
        x: 100,
        y: 100
    }
    this.velocity = {
        x:0,
        y:0
    }
    this.width = 66
    this.height = 160
    
    this.image = createImage(spriteStandRight)
    this.frames = 0
    this.sprites = {
      stand: {
        right: createImage(spriteStandRight),
        left: createImage(spriteStandLeft),
        
        cropWhidth: 177, 
        whidh: 66
      },
      run: {
        right:  createImage(spriteRunRight),
        left: createImage(spriteRunLeft),

        cropWhidth: 341,
        whidh: 127.875
      }
    }
    this.currentSprite = this.sprites.stand.right
    this.currentCropWhidth = 177
   } 
   
   draw() {
    c.drawImage(
      this.currentSprite, 
      this.currentCropWhidth * this.frames,
      0, 
      this.currentCropWhidth,
      400,
      this.position.x, 
      this.position.y,
      this.width, 
      this.height) 
   }
   update() {
    this.frames++
     //logica dos sprites
    if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left )
      ) 
    this.frames = 0
    else if(this.frames > 29 && (this.currentSprite === this.sprites.run.right ||this.currentSprite === this.sprites.run.left)
    )
    this.frames = 0


    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    
    if(this.position.y + this.height + this.velocity.y <= canvas.height )
    this.velocity.y += gravity
   
}
}
//classe da plataforma
class Platform{
    constructor({x, y, image }) {
        this.position = {
           x,
           y
        }

        this.image = image
        this.width = image.width
        this.height= image.height

    }
    draw() {
   c.drawImage(this.image, this.position.x, this.position.y)

    }

}
// classe de objetos genericos *
class GenericObject{
  constructor({x, y, image }) {
      this.position = {
         x,
         y
      }

      this.image = image
      this.width = image.width
      this.height= image.height

  }
  draw() {
 c.drawImage(this.image, this.position.x, this.position.y)

  }

}

//função de imagens *
function createImage(imageSrc) {
  const image = new Image()
  image.src = imageSrc
  return image
}

//consts *
const platformImage = createImage(platform)
const flagimgage = createImage(winFlag)
const player = new Player()
const platforms= [ 
  
  new Platform({
    x:platformImage.width *3 +592 -3, 
    y:250,
    image: createImage(platformSmallTall)
  }),

  new Platform({
    x:platformImage.width *9 +592 -3, 
    y:355,
    image: createImage(platformSmallTall)
  }),

  new Platform({
    x:platformImage.width *10 +592 -3, 
    y:355,
    image: createImage(platformSmallTall)
  }),

  new Platform({
    x:platformImage.width *11 +592 -3, 
    y:355,
    image: createImage(platformSmallTall)
  }), 
  
  new Platform({
    x:platformImage.width *12.6 +592 -3, 
    y:355,
    image: createImage(platformSmallTall)
  }),
  new Platform({
    x:platformImage.width *17.3 +540 -3, 
    y:350,
    image: createImage(platformSmallTall)
  }),
  new Platform({
    x:platformImage.width *17.7 +592 -3, 
    y:300,
    image: createImage(platformSmallTall)
  }),
  new Platform({
    x:platformImage.width *18.1 +592 -3, 
    y:250,
    image: createImage(platformSmallTall)
  }),

  new Platform({
    x:platformImage.width *18.6 +585 -3, 
    y:250,
    image: createImage(platformSmallTall)
  }),


  new Platform({
    x:platformImage.width *18.7 +582 -3, 
    y:250,
    image: createImage(platformSmallTall)
  }),

  new Platform({
    x:platformImage.width *19.2 +580 -3, 
    y:230,
    image: createImage(platformSmallTall)
  }),

  new Platform( {
  x:-1, 
  y:456,
  image: platformImage
}), 
new Platform({
  x:platformImage.width -3, 
  y:456,
  image: platformImage
}),
new Platform({
  x:platformImage.width *2.2 +100, 
  y:456,
  image: platformImage
}),
new Platform({
  x:platformImage.width *3 +300, 
  y:456,
  image: platformImage
}),
new Platform({
  x:platformImage.width *4 +300 -2, 
  y:456,
  image: platformImage
}),

new Platform({
  x:platformImage.width *6.2 +300 -2, 
  y:456,
  image: platformImage
}),

new Platform({
  x:platformImage.width *7.2 +300 -3, 
  y:456,
  image: platformImage
}),

new Platform({
  x:platformImage.width *8.2 +300 -4, 
  y:456,
  image: platformImage
}),

new Platform({
  x:platformImage.width *14.5 +300 -4, 
  y:456,
  image: platformImage
}),

new Platform({
  x:platformImage.width *16.2 +300 -4, 
  y:456,
  image: platformImage
}),

new Platform({
  x:platformImage.width *17.2 +300 -5, 
  y:456,
  image: platformImage
}),

new Platform({
  x:platformImage.width *18.2 +300 -6, 
  y:456,
  image: platformImage
}),
new Platform({
  x:platformImage.width *19.2 +300 -7, 
  y:456,
  image: platformImage
}),

new Platform({
  x:platformImage.width *21.6 +300 -7, 
  y:456,
  image: platformImage
}),

new Platform({
  x:platformImage.width *21.6 +300 -7, 
  y:456,
  image: platformImage
}),

new Platform({
  x:platformImage.width *21.6 +300 -7, 
  y:456,
  image: platformImage
}),
new Platform({
  x:platformImage.width *22.6 +300 -7, 
  y:456,
  image: platformImage
}),
new Platform({
  x:platformImage.width *23.6 +300 -8, 
  y:456,
  image: platformImage
}),
new Platform({
  x:platformImage.width *24.6 +300 -9, 
  y:456,
  image: platformImage
}),
new Platform({
  x:platformImage.width *26. +300 -10, 
  y:456,
  image: platformImage
}),

new Platform({
  x:platformImage.width *27 +300 -11, 
  y:456,
  image: createImage(winFlag)
}),

new Platform({
  x:platformImage.width *28. +300 -12, 
  y:456,
  image: platformImage
}),

new Platform({
  x:platformImage.width *29. +300 -13, 
  y:456,
  image: platformImage
}),

new Platform({
  x:platformImage.width *30 +300 -14, 
  y:456,
  image: platformImage
})

]

const genericObjects =[
  new GenericObject({
    x:-1,
    y:-1,
    image: createImage(background)
  }),
  new GenericObject({
    x:-1,
    y:-1,
    image: createImage(hills)
  })

] 

let currentKey
const keys = {
    right: {
        pressed: false
    },

    left: {
        pressed: false
    }
}

let scrollOffset = 0

// função da animação
function animate() {
   requestAnimationFrame (animate)
   c.fillStyle = 'white'
   c.fillRect(0, 0, canvas.width, canvas.height)
   
   genericObjects.forEach(genericObject =>{
    genericObject.draw()
   })

   platforms.forEach((platform) =>{ platform.draw()
  })
  
  //logica do player
  player.update()
  
  if (keys.right.pressed && player.position.x < 400){
    player.velocity.x = player.speed
  } else if (
  (keys.left.pressed && player.position.x >100) ||
  (keys.left.pressed && scrollOffset === 0 && player.position.x > 0) 
  ){
  player.velocity.x = -player.speed
  } 
  else {
    player.velocity.x = 0

    if(keys.right.pressed){
        scrollOffset += player.speed
        platforms.forEach((platform) =>{ 
            platform.position.x -= player.speed
        })
        genericObjects.forEach( genericObject => {
          genericObject.position.x -= player.speed * 0.66
        })
        } else if(keys.left.pressed && scrollOffset >0){
          scrollOffset -= player.speed
         
          platforms.forEach((platform) =>{ 
            platform.position.x += player.speed
        })
        
        genericObjects.forEach( genericObject => {
          genericObject.position.x += player.speed * 0.66
        })
       }
    }

   //colisão de plataforma *
   platforms.forEach((platform, winFlag) =>{     
    if (
    player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width ) {
        player.velocity.y = 0
    }
  })
  
  // troca de sprites *
  if (
    keys.right.pressed &&
    currentKey === 'right' && player.currentSprite !== player.sprites.run.right
    ) {
    player.frames = 1
    player.currentSprite = player.sprites.run.right
    player.currentCropWhidth = player.sprites.run.cropWhidth
    player.whidh = player.sprites.run.whidh
  } else if (
    keys.left.pressed &&
    currentKey === 'left' && player.currentSprite !== player.sprites. run.left
    ){
      player.currentSprite = player.sprites.run.left
      player.currentCropWhidth = player.sprites.run.cropWhidth
      player.whidh = player.sprites.run.whidh
    } else if (
      !keys.left.pressed &&
      currentKey === 'left' && player.currentSprite !== player.sprites. stand.left
      ){
        player.currentSprite = player.sprites.stand.left
        player.currentCropWhidth = player.sprites.stand.cropWhidth
        player.whidh = player.sprites.stand.whidh
      } else if (
        !keys.right.pressed &&
        currentKey === 'right' && player.currentSprite !== player.sprites. stand.right
        ){
          player.currentSprite = player.sprites.stand.right
          player.currentCropWhidth = player.sprites.stand.cropWhidth
          player.whidh = player.sprites.stand.whidh
        }
    
  

  //condição de vitoria*
  if (scrollOffset > 16010){
    alert ('você venceu!!! 😎 ');
  }
  

  //condição de derrota*
  if(player.position.y > canvas.height){
    alert("você perdeu 😕, pressione f5 para reiniciar")
  } 

  
}


animate()

//evendo do teclado
addEventListener('keydown', ({keyCode}) =>{
  switch (keyCode){
      
        case 65:
        console.log('left')
        keys.left.pressed = true
        currentKey = 'left'
        break
        
        case 87:
        console.log('up')
        player.velocity.y -= 18
        break
        
        case 83:
        console.log('down')
        break
        
        case 68 :
        console.log('right')
        keys.right.pressed = true
        currentKey = 'right'
        break
    }
  
} )

addEventListener('keyup', ({keyCode}) =>{
  switch (keyCode){
        
        case 65:
        console.log('left')
        keys.left.pressed = false
        player.currentSprite = player.sprites.stand.left
        player.currentCropWhidth = player.sprites.stand.cropWhidth
        player.whidh = player.sprites.stand.whidh

        break
        
        case 87:
        console.log('up')
        break
        
        case 83:
        console.log('down')
        break
        
        case 68 :
        console.log('right')
        keys.right.pressed = false
        break
    }
  
} )
