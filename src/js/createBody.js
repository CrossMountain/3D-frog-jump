import {bipyramid} from './bipyramid'
import {option} from './option'

var floorTexture = new THREE.TextureLoader().load('img/penta.png');
floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
var floorMaterial = new THREE.MeshBasicMaterial({
    map: floorTexture,
    side: THREE.DoubleSide
});


function createBody(){
    // var mesh = new THREE.Mesh(bipyramid, option.material);
    var mesh = new THREE.Mesh(bipyramid, floorMaterial);
    var axesHelper=new THREE.AxesHelper(5)
    mesh.add(axesHelper)
    return mesh
}


export {createBody}