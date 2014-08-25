function RuaTransversal(posX, posY, posZ) {
  //
  // Interface Publica
  //
  this.createUI = function() {
  };

  this.init = function (scene) {
      this.plano = new THREE.PlaneGeometry(90, 2000, 1, 1);
      this.mat = new THREE.MeshLambertMaterial({ color: 0x9db3b5, overdraw: true });
      this.rua = new THREE.Mesh(this.plano, this.mat);
      this.rua.rotation.x = -0.5 * Math.PI;
      this.rua.receiveShadow = false;
      this.rua.position.x = posX; //-400;
      this.rua.position.y = posY; //0.1;
      this.rua.position.z = posZ; //0;

      scene.add(this.rua);
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