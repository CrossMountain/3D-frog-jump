//五边两菱
import {option} from './option'

function createBipyramid(radius,height) {
    var geometry = new THREE.Geometry()
    var theta=Math.PI*0.2
    var c=Math.cos.bind(Math)
    var s=Math.sin.bind(Math)

    geometry.vertices.push(
        new THREE.Vector3(radius*c(theta), radius*s(theta), 0),
        new THREE.Vector3(radius*c(3*theta), radius*s(3*theta), 0),
        new THREE.Vector3(radius*c(5*theta), radius*s(5*theta), 0),
        new THREE.Vector3(radius*c(7*theta), radius*s(7*theta), 0),
        new THREE.Vector3(radius*c(9*theta), radius*s(9*theta), 0),
        new THREE.Vector3(0, 0, height),
        new THREE.Vector3(0, 0, -height)
    )
    geometry.faces.push(
        new THREE.Face3(5, 0, 4),
        new THREE.Face3(5, 4, 3),
        new THREE.Face3(5, 3, 2),
        new THREE.Face3(5, 2, 1),
        new THREE.Face3(5, 1, 0),

        new THREE.Face3(6, 4, 0),
        new THREE.Face3(6, 3, 4),
        new THREE.Face3(6, 2, 3),
        new THREE.Face3(6, 1, 2),
        new THREE.Face3(6, 0, 1)
    )



    var uvs=[]
    for(var i=0;i<5;i++){
        uvs.push(
            new THREE.Vector2(
                (1+c(2*i*theta+theta))/2,  (1+s(2*i*theta+theta))/2  
            )
        )
    }
    uvs.push(new THREE.Vector2(0.5,0.5))
    uvs.push(new THREE.Vector2(0.5,0.5))

    geometry.faceVertexUvs[0].push([uvs[5],uvs[0],uvs[4]])
    geometry.faceVertexUvs[0].push([uvs[5],uvs[4],uvs[3]])
    geometry.faceVertexUvs[0].push([uvs[5],uvs[3],uvs[2]])
    geometry.faceVertexUvs[0].push([uvs[5],uvs[2],uvs[1]])
    geometry.faceVertexUvs[0].push([uvs[5],uvs[1],uvs[0]])

    geometry.faceVertexUvs[0].push([uvs[6],uvs[4],uvs[0]])
    geometry.faceVertexUvs[0].push([uvs[6],uvs[3],uvs[4]])
    geometry.faceVertexUvs[0].push([uvs[6],uvs[2],uvs[3]])
    geometry.faceVertexUvs[0].push([uvs[6],uvs[1],uvs[2]])
    geometry.faceVertexUvs[0].push([uvs[6],uvs[0],uvs[1]])


    geometry.computeBoundingSphere();
    return geometry
}

var bipyramid = createBipyramid(option.bodyRadius,option.bodyHeight)
export {bipyramid}








