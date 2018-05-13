//控制台
import {global} from './global'
import {mouse} from './mouse'


import {option} from './option'

import {createFrog} from './createFrog'
import {createPond} from './createPond'

var circle=createPond()
global.scene.add( circle );

function random(a,b){
	return Math.random()*(b-a)+a
}
function getRandom(){
	return random(-option.circleRadius+25,option.circleRadius-25)
}

var frog=createFrog(getRandom(),getRandom(),random(5,355))
global.scene.add(frog.frog)

var frog2=createFrog(getRandom(),getRandom(),random(5,355))
global.scene.add(frog2.frog)

var frog3=createFrog(getRandom(),getRandom(),random(5,355))
global.scene.add(frog3.frog)





function animate() {
    requestAnimationFrame(animate);
    frog.jump()

    frog2.jump()

    frog3.jump()



    mouse.update()
    global.renderer.render(global.scene, global.camera);
};


export var Console = {
    animate: animate
}