//响应鼠标事件

import {global} from './global'

var mouse = new THREE.TrackballControls(global.camera);
mouse.rotateSpeed = 5.0;
mouse.zoomSpeed = 5;
mouse.panSpeed = 2;

mouse.noZoom = false;
mouse.noPan = false;
mouse.staticMoving = false;
mouse.dynamicDampingFactor = 0.3;
export {mouse}