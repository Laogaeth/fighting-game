const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024
canvas.height = 576

//draw a white rectangle from the context canvas
//Take 4 arguments: exposition, Y Position > set height and width

c.fillRect(0, 0, canvas.width, canvas.height)

//Use OOP to make two placeholders interactable with each other, ie. Player vs Enemy

class Sprite{
    constructor(){
        
    }
}