const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024
canvas.height = 576

//draw a white rectangle from the context canvas
//Take 4 arguments: exposition, Y Position > set height and width

c.fillRect(0, 0, canvas.width, canvas.height)
const gravity = 0.2

//Use OOP to make two placeholders interactable with each other, ie. Player vs Enemy
//Sprite = objects
class Sprite{
    constructor({position,velocity}){
        this.position = position

        //Add Physics / gravity
        this.velocity = velocity 

        this.height = 150
    }
    //Draw the player character
    draw(){
        c.fillStyle= "purple"
        c.fillRect(this.position.x,this.position.y, 50, this.height)
    }

    //Update properties when moving things around
    update(){
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if(this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0
        }else{
            this.velocity.y += gravity
        }
    }
}


const player = new Sprite({
    position:{
    x:100,
    y:0
  },
  //Place player and doesn't allow to move by default
  velocity:{
    x:0,
    y:10
  }
})


//The Enemy
const enemy = new Sprite ({
    position:{
        x:900,
        y:100
      },
      //Place enemy and doesn't allow to move by default
      velocity:{
        x:0,
        y:0
      }
    })

    const keys = {
        a: {
            pressed:false
        },
        d: {
            pressed:false
        },
        w: {
            pressed:false
        }
    }
    

function animate(){
    window.requestAnimationFrame(animate)

    c.fillStyle = "black"
    //Make so it clears the draws so you don't "drag" the objects creating a trail
    c.fillRect(0,0,canvas.width, canvas.height)

    player.update()
    enemy.update()

    player.velocity.x = 0
    
    if(keys.a.pressed){
        player.velocity.x = -1
    } else if (keys.d.pressed){
        player.velocity.x = 1
    } else if(keys.w.pressed){
        player.velocity.y = -10
    }
}
animate()


window.addEventListener("keydown",(e)=>{
    switch(e.key){

        case "d":
            keys.d.pressed = true
            break

            case "a":
                keys.a.pressed = true
                break
                
                case "w":
                    keys.w.pressed = true
                    break
    }

    console.log(e.key)
})
window.addEventListener("keyup",(e)=>{
    switch(e.key){

        case "d":
            keys.d.pressed = false
            break

            case "a":
                keys.a.pressed = false
                break

                case "w":
                    keys.w.pressed = false
                    break
    }

    console.log(e.key)
})