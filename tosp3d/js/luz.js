function Luz() {
  //
  // Interface Publica
  //
  this.createUI = function() {
  };

  this.init = function(scene) {
    this.directionalLight1 = new THREE.DirectionalLight(0xF7EFBE, 0.7);
    this.directionalLight1.position.set(0.5, 1, 0.5);
    scene.add(this.directionalLight1);
    this.directionalLight2 = new THREE.DirectionalLight(0xF7EFBE, 0.5);
    this.directionalLight2.position.set(-0.5, -1, -0.5);
    scene.add(this.directionalLight2);
  };

  this.update = function() {
  };

  //
  // Metodos Privados
  //
};

