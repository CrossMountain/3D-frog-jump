import {
    option
} from './option'
import {
    createOctahedron
} from './octahedron'


var leg = createOctahedron(option.legRadius, option.legRadius, option.legHeight)


function createFront(type) {
    var axesHelper1 = new THREE.AxesHelper(5)
    var axesHelper2 = new THREE.AxesHelper(5)
    var axesHelper3 = new THREE.AxesHelper(5)

    //hip关节
    var hip = new THREE.Group()

    hip.position.x += option.bodyRadius * Math.cos(0.2 * Math.PI)
    if (type === 'left') {
        hip.position.y += option.bodyRadius * Math.sin(0.2 * Math.PI)
    } else if (type === 'right') {
        hip.position.y -= option.bodyRadius * Math.sin(0.2 * Math.PI)
    }

    //knee关节
    var knee = new THREE.Object3D()
    knee.position.z -= 2 * option.legHeight

    var ankle = new THREE.Object3D()
    ankle.position.x += 2 * option.legHeight

    //上腿
    var upMesh = new THREE.Mesh(leg, option.material)
    upMesh.position.z -= option.legHeight

    //下腿
    var lowMesh = new THREE.Mesh(leg, option.material)

    lowMesh.rotation.y += Math.PI / 2
    lowMesh.position.x += 1 * option.legHeight

    //三角形前掌
    var footGeometry = new THREE.CircleGeometry(option.toeRadius, 3)
    var foot = new THREE.Mesh(footGeometry, option.material)
    foot.rotation.z += Math.PI / 3
    foot.position.x += option.toeRadius

    hip.add(axesHelper1)
    knee.add(axesHelper2)
    ankle.add(axesHelper3)

    hip.add(upMesh)
    hip.add(knee)

    knee.add(lowMesh)
    knee.add(ankle)

    ankle.add(foot)



    var hipRange = 0
    function hipRotate(theta) {
        if(theta>0){  //正着转
            if(hipRange>=0){

            }else{
               hipRange+=theta
               this.hip.rotation.y+=THREE.Math.degToRad(theta)    
            }

        }else{  //反着转
            if(hipRange<=-50){

            }else{
                hipRange+=theta
                this.hip.rotation.y+=THREE.Math.degToRad(theta)    
            }
 
        }
    }

    var kneeRange=0
    function kneeRotate(theta) {
        if(theta>0){  //正着转
            if(kneeRange>=100){

            }else{
               kneeRange+=theta
               this.knee.rotation.y+=THREE.Math.degToRad(theta)    
            }

        }else{  //反着转
            if(kneeRange<=0){

            }else{
                kneeRange+=theta
                this.knee.rotation.y+=THREE.Math.degToRad(theta)    
            }       
        }       
    }

    function ankleRotate(theta) {
        this.ankle.rotation.y +=THREE.Math.degToRad(theta)
    }

    function switchAxes(){
        if(option.axesShow){
            this.hip.add(axesHelper1)
            this.knee.add(axesHelper2)
            this.ankle.add(axesHelper3)
        }else{
            this.hip.remove(axesHelper1)
            this.knee.remove(axesHelper2)
            this.ankle.remove(axesHelper3)
        }
    }

    function switchLine(){
        upMesh.material.wireframe=!upMesh.material.wireframe
        upMesh.material.wireframe=!upMesh.material.wireframe
        foot.material.wireframe=!lowMesh.material.wireframe
    }

    function frontRotate(type){
        if(type==='up'){ //起跳
            this.hipRotate(-50/option.legFrame)
            this.kneeRotate(100/option.legFrame)
        }else if(type==='down'){ //落地
            this.hipRotate(50/option.legFrame)
            this.kneeRotate(-100/option.legFrame)
        }
    }

    return {
        hip: hip,
        knee: knee,
        ankle: ankle,
        hipRotate: hipRotate,
        kneeRotate: kneeRotate,
        ankleRotate: ankleRotate,
        switchAxes:switchAxes,
        switchLine:switchLine,
        frontRotate:frontRotate
    }
}

export {
    createFront
}