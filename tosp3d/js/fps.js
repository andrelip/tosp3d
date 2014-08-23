function Fps() {
  //
  // Interface Publica
  //
  this.createUI = function() {
  };

  this.init = function(scene) {
    this.fps = new Stats();
    this.fps.setMode(0);
    this.fps.domElement.style.position = 'absolute';
    this.fps.domElement.style.left = '0px';
    this.fps.domElement.style.top = '0px';

    document.body.appendChild( this.fps.domElement );
  };

  this.update = function() {
    this.fps.update();
  };

  //
  // Metodos Privados
  //
};

