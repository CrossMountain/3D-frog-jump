import {option} from './option'

function createPond(){
	var geometry = new THREE.CircleGeometry( option.circleRadius+25, 32 );
	var material = new THREE.MeshBasicMaterial( { color: 0x3D8282 } );
	var circle = new THREE.Mesh( geometry, material );
	circle.position.z-=2*option.legHeight*Math.sin(Math.PI/3)+option.legRadius
	return circle
}
export {createPond}