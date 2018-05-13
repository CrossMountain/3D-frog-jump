import {option} from './option'
import {createOctahedron} from './octahedron'

var geometry=createOctahedron(option.eyeRadius,option.eyeRadius,option.eyeRadius)


function createEye(type){
    var eye=new THREE.Mesh(geometry,option.eyeMaterial)
    eye.position.x+=option.bodyRadius*Math.cos(0.2*Math.PI)+1.5*option.legHeight*Math.sin(Math.PI/3)
    eye.position.z+=1.5*option.legHeight*Math.cos(Math.PI/3)



    if(type==='left'){
        eye.position.y+=1.5
    }else if(type==='right'){
        eye.position.y-=1.5
    }
    return eye
}

export {createEye}


