import {option} from './option'
import {createOctahedron} from './octahedron'

function createRear(type){

    var flag=1 //1为左，－1为右
    if(type==='left'){
        flag=1
    }else if(type==='right'){
        flag=-1
    }


    var hip=new THREE.Object3D()
    hip.position.x-=option.bodyRadius

    var knee=new THREE.Object3D()

    var ankle=new THREE.Object3D()
    ankle.position.z-=Math.sqrt(3)*option.legHeight

    var tmt=new THREE.Object3D()

    var geometry=createOctahedron(option.legRadius,option.legRadius,option.legHeight)

    //三角形前掌
    var footGeometry = new THREE.CircleGeometry(option.toeRadius, 3)



    var firstMesh=new THREE.Mesh(geometry,option.material)
    var secondMesh=new THREE.Mesh(geometry,option.material)
    var thirdMesh=new THREE.Mesh(geometry,option.material)
    var foot = new THREE.Mesh(footGeometry, option.material)

    firstMesh.rotation.x-=Math.PI/2         
    secondMesh.position.z-=0.5*Math.sqrt(3)*option.legHeight

    foot.rotation.z += Math.PI / 3
    foot.position.x += option.toeRadius


    knee.position.y+=flag*2*option.legHeight //
    ankle.position.y-=flag*option.legHeight  //
    tmt.position.y+=flag*2*option.legHeight   //
    firstMesh.position.y+=flag*option.legHeight  //
    secondMesh.rotation.x-=flag*Math.PI/6   //
    secondMesh.position.y-=flag*0.5*option.legHeight   //
    thirdMesh.rotation.x+=flag*Math.PI/2     //
    thirdMesh.position.y+=flag*option.legHeight    //

    hip.add(firstMesh)
    hip.add(knee)

    knee.add(secondMesh)
    knee.add(ankle)

    ankle.add(thirdMesh)
    ankle.add(tmt)

    tmt.add(foot)

    var axesHelper1 = new THREE.AxesHelper(5)
    var axesHelper2 = new THREE.AxesHelper(5)
    var axesHelper3 = new THREE.AxesHelper(5)
    var axesHelper4 = new THREE.AxesHelper(5)
    hip.add(axesHelper1)
    knee.add(axesHelper2)
    ankle.add(axesHelper3)
    tmt.add(axesHelper4)


    var hipRange = 0
    function hipRotate(theta) {
        if(theta>0){  //正着转
            if(hipRange<0){
               hipRange+=theta
               this.hip.rotation.x+=flag*THREE.Math.degToRad(theta)    
            }
        }else{  //反着转
            if(hipRange>-50){
                hipRange+=theta
                this.hip.rotation.x+=flag*THREE.Math.degToRad(theta)    
            }
        }
    }

    var kneeRange=0
    function kneeRotate(theta) {
        if(theta>0){  //正着转
            if(kneeRange<120){
               kneeRange+=theta
               this.knee.rotation.x+=flag*THREE.Math.degToRad(theta)    
            }
        }else{  //反着转
            if(kneeRange>0){
                kneeRange+=theta
                this.knee.rotation.x+=flag*THREE.Math.degToRad(theta)    
            }
        }       
    }

    var ankleRange=0
    function ankleRotate(theta) {
        if(theta>0){  //正着转
            if(ankleRange<0){
               ankleRange+=theta
               this.ankle.rotation.x+=flag*THREE.Math.degToRad(theta)    
            }
        }else{  //反着转
            if(ankleRange>-120){
                ankleRange+=theta
                this.ankle.rotation.x+=flag*THREE.Math.degToRad(theta)    
            }
        }  
    }

    var tmtRange = 0
    function tmtRotate(theta){

        if(theta>0){  //正着转
            if(tmtRange>=90){

            }else{
               tmtRange+=theta
               this.tmt.rotation.y+=THREE.Math.degToRad(theta)    
            }

        }else{  //反着转
            if(tmtRange<=-90){

            }else{
                tmtRange+=theta
                this.tmt.rotation.y+=THREE.Math.degToRad(theta)    
            }
 
        }
    }

    function switchAxes(){
        if(option.axesShow){
            this.hip.add(axesHelper1)
            this.knee.add(axesHelper2)
            this.ankle.add(axesHelper3)
            this.tmt.add(axesHelper4)
        }else{
            this.hip.remove(axesHelper1)
            this.knee.remove(axesHelper2)
            this.ankle.remove(axesHelper3)
            this.tmt.remove(axesHelper4)
        }
    }

    function rearRotate(type){
        if(type==='up'){

        }else if(type==='down'){

        }

    }

    function rearRotate(type){
        if(type==='up'){
            this.hipRotate(-50/option.legFrame)
            this.kneeRotate(+120/option.legFrame)
            this.ankleRotate(-120/option.legFrame)
        }else if(type==='down'){
            this.hipRotate(+50/option.legFrame)
            this.kneeRotate(-120/option.legFrame)
            this.ankleRotate(+120/option.legFrame)
        }
    }
    return{
            flag:flag,
            hip:hip,
            knee:knee,
            ankle:ankle,
            tmt:tmt,
            hipRotate:hipRotate,
            kneeRotate:kneeRotate,
            ankleRotate:ankleRotate,
            tmtRotate:tmtRotate,
            switchAxes:switchAxes,
            rearRotate:rearRotate
    }
}
export {createRear}
