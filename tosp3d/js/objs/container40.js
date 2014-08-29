function Container40(posX, posY, posZ, texture, hexColor) {
  //
  // Interface Publica
  //
  this.createUI = function () {
  };

  this.init = function (scene) {

     var containerMaterials = [ 
        new THREE.MeshBasicMaterial({ color: hexColor, wireframe: true, wireframeLinewidth: 4 }), // right face
        new THREE.MeshBasicMaterial({ color: hexColor, wireframe: true, wireframeLinewidth: 4 }), // left face
        new THREE.MeshBasicMaterial({ color: hexColor, wireframe: true, wireframeLinewidth: 4 }), // top face
        new THREE.MeshBasicMaterial({ color: hexColor, wireframe: true, wireframeLinewidth: 4 }), // bottom face
        texture, // front face
        new THREE.MeshBasicMaterial({ color: hexColor, wireframe: true, wireframeLinewidth: 4 }) // back face
     ]; 
     var containerTexture = new THREE.MeshFaceMaterial(containerMaterials);

     this.container = new THREE.Mesh(new THREE.BoxGeometry(24.4, 25.9, 121.9), containerTexture);
     this.container.position.x = posX;
     this.container.position.y = posY + (25.9 / 2);
     this.container.position.z = posZ;

     scene.add(this.container);
  };

  this.update = function() {
  };

  //
  // Metodos Privados
  //
};

//
// Variaveis Estaticas
//