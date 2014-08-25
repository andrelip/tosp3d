function Quadra(posX, posY, posZ, qtdLin, qtdCol, xCel, zCel) {
  //
  // Interface Publica
  //
  this.createUI = function () {
  };

  this.init = function (scene) {
      this.plano = new THREE.PlaneGeometry(qtdLin * xCel, qtdCol * zCel, 1, 1);
      this.matQuadra = new THREE.MeshPhongMaterial({ color: 0xffffff, overdraw: true });
      this.quadra = new THREE.Mesh(this.plano, this.matQuadra);
      this.quadra.rotation.x = -0.5 * Math.PI;
      this.quadra.receiveShadow = false;
      this.quadra.position.x = posX; //-600;
      this.quadra.position.y = posY; //0.1;
      this.quadra.position.z = posZ; //400;
      scene.add(this.quadra);
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