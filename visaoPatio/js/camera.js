function Camera() {
  //
  // Interface Publica
  //
  this.createUI = function(gui) {
  };

  this.init = function(scene) {
    this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
    this.camera.position.x = -6;
    this.camera.position.y = 2;
    this.camera.position.z = 5;

    this.camera.lookAt(new THREE.Vector3(1,0,0));

    this.camControls = new THREE.FirstPersonControls(this.camera);
    this.camControls.movementSpeed = 5;
    this.camControls.lookVertical = false; //true;
    this.camControls.constrainVertical = true;
    this.camControls.verticalMin = 1.0;
    this.camControls.verticalMax = 1.5;
    this.camControls.lat = -80;
    this.camControls.lon = 0;
      //this.camControls.activeLook = false;
    this.camControls.lookSpeed = 0.05; //0.4;
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

