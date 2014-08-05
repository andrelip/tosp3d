function Luz() {
  //
  // Interface Publica
  //
  this.createUI = function() {
  };

  this.init = function(scene) {
    this.spotLight = new THREE.SpotLight( 0xffffff );
    this.spotLight.castShadow = true;
    this.spotLight.position.set( -40, 60, -10 );

    scene.add( this.spotLight );
  };

  this.update = function() {
  };

  //
  // Metodos Privados
  //
};

