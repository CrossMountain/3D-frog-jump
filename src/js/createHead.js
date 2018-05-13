import {option} from './option'
import {createOctahedron} from './octahedron'

var geometry = createOctahedron(option.legRadius, option.legRadius, option.legHeight)

function createHead(){
    var head=new THREE.Mesh(geometry,option.material)
    head.rotation.y+=Math.PI/3
    head.position.z+=option.legHeight*Math.cos(Math.PI/3)
    head.position.x=option.bodyRadius*Math.cos(0.2*Math.PI)+option.legHeight*Math.sin(Math.PI/3)
    return head
}   

export {createHead}
