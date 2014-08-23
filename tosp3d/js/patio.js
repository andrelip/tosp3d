function Patio() {
  //
  // Interface Publica
  //
  this.createUI = function() {
    var folder = gui.addFolder('Patio');
    folder.add(controls, 'largura', 0.1, 1.0);
    folder.add(controls, 'profundidade', 0.1, 1.0);
  };

  this.init = function(scene) {
    var planeGeometry = new THREE.PlaneGeometry(2000, 2000, 40, 40);
    var planeMaterial = new THREE.MeshLambertMaterial({ color: 0x9db3b5, overdraw: true });
    this.area = new THREE.Mesh(planeGeometry, planeMaterial);

    this.area.receiveShadow = true;
    this.area.rotation.x = -0.5 * Math.PI;
    scene.add(this.area);
  };

  this.update = function() {
    this.area.scale.set(controls.profundidade, controls.largura, 1);
  };

  //
  // Metodos Privados
  //
  var controls = new function() {
    this.largura = 1;
    this.profundidade = 1;
  }

};

