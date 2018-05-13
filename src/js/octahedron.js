function createOctahedron(x, y, z) {
    var geometry = new THREE.Geometry()
    geometry.vertices.push(
        new THREE.Vector3(x, 0, 0),
        new THREE.Vector3(0, y, 0),
        new THREE.Vector3(-x, 0, 0),
        new THREE.Vector3(0, -y, 0),
        new THREE.Vector3(0, 0, z),
        new THREE.Vector3(0, 0, -z)
    )
    geometry.faces.push(
        new THREE.Face3(4, 1, 0),
        new THREE.Face3(4, 0, 3),
        new THREE.Face3(4, 3, 2),
        new THREE.Face3(4, 2, 1),
        new THREE.Face3(5, 0, 1),
        new THREE.Face3(5, 3, 0),
        new THREE.Face3(5, 2, 3),
        new THREE.Face3(5, 1, 2)
    )
    geometry.computeBoundingSphere();
    
    return geometry
}
export {
    createOctahedron
}