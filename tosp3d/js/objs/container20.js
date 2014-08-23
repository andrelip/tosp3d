function Container20(posX, posY, posZ) {
  //
  // Interface Publica
  //

  this.createUI = function() {
  };

  this.init = function (scene) {
     this.container = new THREE.Mesh(new THREE.BoxGeometry(24.4, 25.9, 60.6));
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