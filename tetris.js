let title=document.querySelector(".score")
let grid_area=document.querySelector(".tetris")
let grid=[];
let block_size=50
let offset={x:2,y:6}
const FORME_CARRE=[{x:1,y:1},{x:1,y:2},{x:2,y:1},{x:2,y:2}]
const FORME_Z=[{x:1,y:1},{x:1,y:2},{x:2,y:2},{x:2,y:3}]
const FORME_I=[{x:1,y:1},{x:2,y:1},{x:3,y:1},{x:4,y:1}]
const FORME_T=[{x:1,y:1},{x:1,y:2},{x:1,y:3},{x:2,y:2}]
const FORME_L=[{x:1,y:1},{x:1,y:2},{x:1,y:3},{x:2,y:3}]
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function InitCanvas(){
    ctx.fillStyle = '#F9DDC4';
    ctx.fillRect(0, 0, 500, 700);

    DrawElement(FORME_Z,offset)
}
function DrawElement(element,offset){
    ctx.fillStyle = '#BAFFAC';
    let x,y
    let i=0
    element.forEach(function(e){
        // ctx.fillStyle = '#CCE5FF';
        x=(offset.x + e.x)*block_size
        y=(offset.y + e.y)*block_size
        // ctx.fillRect(x,y,block_size, block_size);
        // ctx.lineWidth = 5;
        // ctx.strokeStyle = "#000000";
        // ctx.stroke();


        ctx.rect(x,y,block_size, block_size);
        ctx.fillStyle = "#8ED6FF";
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#000000";
        ctx.stroke();

    });

}

InitCanvas()