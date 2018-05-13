import {option} from './option'


var width = document.getElementById('canvas').clientWidth;
var height = document.getElementById('canvas').clientHeight;

var renderer;

function initThree() {

    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(width, height);
    document.getElementById('canvas').appendChild(renderer.domElement);
    renderer.setClearColor(0xFFFFFF, 1.0);
}

var camera;

function initCamera() {
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.x = 0;
    camera.position.y = -160;
    camera.position.z = 50;
    camera.lookAt(new THREE.Vector3( 0, 0, 0 ));

}

var scene;

function initScene() {
    scene = new THREE.Scene();
}

var light=option.light


function initLight() {
    scene.add(light);
}





function init(){
    initThree();
    initCamera();
    initScene();
    initLight();

}
init()

export var global={
    scene:scene,
    renderer:renderer,
    camera:camera,
    light:light,
    init:init
}