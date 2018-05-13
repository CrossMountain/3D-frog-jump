import {createFront} from './createFront'
import {createRear} from './createRear'
import {createBody} from './createBody'
import {createHead} from './createHead'
import {createEye} from './createEye'

import {global} from './global'
import {option} from './option'


function createFrog(x,y,lerpTheta){


	var frog=new THREE.Object3D()

	var body=createBody()

	var head=createHead()
	frog.add(head)

	var eyeLeft=createEye('left')
	var eyeRight=createEye('right')
	frog.add(eyeLeft)
	frog.add(eyeRight)

	frog.add(body)//身体
	var frontLeft=createFront('left')
	var frontRight=createFront('right')

	var rearLeft=createRear('left')
	var rearRight=createRear('right')

	frog.add(frontLeft.hip)

	frog.add(frontRight.hip)

	frog.add(rearLeft.hip)
	frog.add(rearRight.hip)

	//初始青蛙位置和角度
	frog.rotation.z=THREE.Math.degToRad(lerpTheta)
	frog.position.x=x
	frog.position.y=y

	function bodySwitchLine(){
	    body.material.wireframe=!body.material.wireframe   //为什么只设这个就可以使所有的wireframe取非??????
	}


	var type='up'  //当前是上升状态还是下降状态
	var num=0  //第几帧
	var legFrame=option.legFrame
	var bodyFrame=option.bodyFrame

	var jumpHeight=option.jumpHeight

	var direction=1  //方向标志位	
	var actualTheta=lerpTheta  //实际指向角度


	function jump(){
		if(changeDirection(frog.position.x,frog.position.y,actualTheta)){
			if(actualTheta<180){
				actualTheta+=180
			}else{
				actualTheta-=180
			}

			frog.rotation.z+=Math.PI
		}

		if(type==='up'){
			frog.position.z+=jumpHeight
			num++

			if(num<legFrame){
				frontLeft.frontRotate('up')
				frontRight.frontRotate('up')
				rearLeft.rearRotate('up')
				rearRight.rearRotate('up')
			}
			if(num===bodyFrame){
				type='down'
			}
		}else if(type==='down'){
			frog.position.z-=jumpHeight
			num--
			if(num<legFrame){	
				frontLeft.frontRotate('down')
				frontRight.frontRotate('down')
				rearLeft.rearRotate('down')
				rearRight.rearRotate('down')
			}
			if(num===0){
				type='up'
			}
		}

		//水平面移动
		frog.position.x+=0.1*Math.cos(THREE.Math.degToRad(actualTheta))
		frog.position.y+=0.1*Math.sin(THREE.Math.degToRad(actualTheta))

	}

	function changeDirection(x,y,theta){
		var distance
		if(x>0&&y>0){  //一象限
			if(range(theta,180,270)){

			}else{
				distance=Math.sqrt(x*x+y*y)
				if(distance>option.circleRadius) return true
			}

		}else if(x<0&&y>0){//二象限
			if(range(theta,0,270)){
				distance=Math.sqrt(x*x+y*y)
				if(distance>option.circleRadius) return true
			}

		}else if(x<0&&y<0){//三象限
			if(range(theta,90,360)){
				distance=Math.sqrt(x*x+y*y)
				if(distance>option.circleRadius) return true
			}
		}else if(x>0&&y<0){//四象限
			if(range(theta,90,180)){

			}else{
				distance=Math.sqrt(x*x+y*y)
				if(distance>option.circleRadius) return true
			}

		}else{
			return false
		}
	}

	function range(x,a,b){
		if(x>=a&&x<b) return true
		else return false
	}

	 return {
	    bodySwitchLine:bodySwitchLine,
	    frog:frog,
	    frontLeft:frontLeft,
	    frontRight:frontRight,
	    rearLeft:rearLeft,
	    rearRight:rearRight,
	    jump:jump
	}
}

export {createFrog}