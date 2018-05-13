export var option={
    material:new THREE.MeshLambertMaterial({   //材质
        color: 0xff9966,
        // wireframe:true,
        side:THREE.DoubleSide
    }),
    bodyRadius:10,
    bodyHeight:7,

    eyeRadius:0.8,

    legRadius:2,
    legHeight:2*Math.sqrt(3),

    toeRadius:2,

    light:new THREE.AmbientLight(0x00ff00,1),
    axesShow:true, 
    lineShow:false,  //是否为线框
    eyeMaterial:new THREE.MeshLambertMaterial({   //材质
        color: 0x000000,
        // wireframe:true,
        side:THREE.DoubleSide
    }),



    legFrame:50, //伸展腿有多少帧
    jumpHeight:6*2/50,//每帧高度变化
    bodyFrame:150,//上升有多少帧
    circleRadius:100,  //圆的半径

}

