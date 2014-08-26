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

      this.montagem = new THREE.Geometry();
      for (x = 0; x < qtdLin ; x++) {
          for (z = 0; z < qtdCol ; z++) {
              this.planoCelula = new THREE.PlaneGeometry(xCel, zCel, 1, 1);
              this.celula = new THREE.Mesh(this.planoCelula);
              this.celula.rotation.x = -0.5 * Math.PI;
              this.celula.position.x = xCel * x;
              this.celula.position.z = zCel * z;
              this.celula.receiveShadow = false;
              THREE.GeometryUtils.merge(this.montagem, this.celula);
          }
      }
      this.matCelula = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true, wireframeLinewidth: 1 });
      this.grid = new THREE.Mesh(this.montagem, this.matCelula);
      //this.grid.position.x = posX + (posX / 2) - xCel;
      this.grid.position.x = -831.8;
      this.grid.position.y = posY;
      this.grid.position.z = -672.6;

      if (posZ < 0)
        scene.add(this.grid);
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