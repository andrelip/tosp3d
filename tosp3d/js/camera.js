function Camera() {
  //
  // Interface Publica
  //
  this.createUI = function(gui) {
  };

  this.init = function(scene) {
    this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
    this.camera.position.x = -990;
    this.camera.position.y = 20;
    this.camera.position.z = 0;
    this.camera.rotation.x = -45 * Math.PI / 180;

    this.camControls = new THREE.FirstPersonControls(this.camera);
    this.camControls.movementSpeed = 100;
    this.camControls.lookVertical = false;
    this.camControls.lookSpeed = 0.01;
  };

  this.update = function(delta) {
    this.camControls.update(delta);
  };

  //
  // Metodos Privados
  //
};

//
// Variaveis Estaticas
//

