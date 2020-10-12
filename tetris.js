"use strict"
let title=document.querySelector(".score")
let grid_area=document.querySelector(".tetris")
let grid=[];
let block_size=50
let OFFSET={x:2,y:6}
let brique;
let temp;
let identifian=1;
const FORME_CARRE=[{x:1,y:1},{x:1,y:2},{x:2,y:1},{x:2,y:2}]

const FORME_Z=[
    {id:1},
    [{x:1,y:1},{x:1,y:2},{x:2,y:2},{x:2,y:3}],
    {offset:OFFSET,color:"#BAFFAC"}
    ]
//permutations z
const FORME_Z_P1=[{x:2,y:1},{x:3,y:1},{x:1,y:2},{x:2,y:2}]
const FORME_Z_P2=[{x:1,y:1},{x:1,y:2},{x:2,y:2},{x:2,y:3}]
const FORME_Z_P3=[{x:2,y:1},{x:3,y:1},{x:1,y:2},{x:2,y:2}]

const FORME_I=[{x:1,y:1},{x:2,y:1},{x:3,y:1},{x:4,y:1}]
//permutation de I
const FORME_I_P1=[{x:1,y:1},{x:1,y:2},{x:1,y:3},{x:1,y:4}]

const FORME_T=[{x:1,y:1},{x:1,y:2},{x:1,y:3},{x:2,y:2}]
//permutation de T
const FORME_T_P1=[{x:1,y:1},{x:2,y:1},{x:3,y:1},{x:2,y:2}]
const FORME_T_P2=[{x:2,y:1},{x:1,y:2},{x:2,y:2},{x:2,y:3}]
const FORME_T_P3=[{x:2,y:1},{x:1,y:2},{x:2,y:2},{x:3,y:2}]


const FORME_L=[{x:1,y:1},{x:1,y:2},{x:1,y:3},{x:2,y:3}]
//permutation de la forme L
const FORME_L_P1=[{x:2,y:1},{x:2,y:2},{x:2,y:3},{x:1,y:3}]
const FORME_L_P2=[{x:3,y:1},{x:1,y:2},{x:2,y:2},{x:3,y:2}]
const FORME_L_P3=[{x:1,y:1},{x:2,y:1},{x:3,y:1},{x:1,y:2}]

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
window.onload=InitCanvas


function InitCanvas(){
    ctx.fillStyle = '#F9DDC4';
    ctx.fillRect(0, 0, 500, 700);
    brique= new createBrique(identifian,FORME_Z,OFFSET,FORME_Z[2].color)
    console.log(brique)
    grid.push(brique)
    identifian++;
    let brique2=FORME_Z;
    brique2[0].id=identifian
    grid.push(brique2)
    console.log(brique2)

   // GameLoop()

  //  setInterval(onTimerTick, 1000); // 33 milliseconds = ~ 30 frames per sec


}

function createBrique(id,forme,offset_param,color){
    let newBrique=[]
    newBrique[0].id = id;
    newBrique[1]=FORME_Z[1];
    newBrique[2].offset=offset_param;
    newBrique[2].color=color;
    return newBrique
}

function GameLoop() {
    //boucle externe pour creation d'une nouvelle brique ici

         let index=getIndexElement(grid,brique)
            console.log(index)
    console.log(grid)

        // for(let i=0;i<100;i++){
        //     setTimeout(function() {
        //         if( index !== -1){
        //             grid[index][1].forEach(function (e){
        //                 e.y++
        //
        //             })
        //         }else{
        //            // grid.push(brique)
        //         }
        //         DrawGrid();
        //     }, 500 * i);
        // }

}
function getIndexElement(grid,element){
    let trouve=false;
    for(let i=0;i<grid.length;i++){
        if(grid[i][0].id===element[0].id){
            temp=i;
            trouve=true
        }
    }
    if(trouve){
        return temp;
    }else{
        return -1
    }

}
function DrawGrid(){
    let offset;
    let x,y



    grid.forEach(function(element){
        offset=element[2].offset;
        element.forEach(function (e){
            x=(offset.x + e.x)*block_size
            y=(offset.y + e.y)*block_size

            ctx.rect(x,y,block_size, block_size);
            ctx.fillStyle = element[2].color;
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = "#000000";
            ctx.stroke();
        })



    });

}