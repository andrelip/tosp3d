function Gate(posX, posY, posZ) {
  //
  // Interface Publica
  //
  this.createUI = function() {
  };

  this.init = function (scene) {
     this.gate = new THREE.Object3D();
     var material = new THREE.MeshLambertMaterial({ color: 0xcccccc, overdraw: true });
     //this.montagem = new THREE.Geometry();

     var colunaDireita = new THREE.Mesh(new THREE.BoxGeometry(10, 40, 10), material);
     colunaDireita.position.y = 40 / 2;
     colunaDireita.position.z = -50;
      //THREE.GeometryUtils.merge(this.montagem, this.colunaDireita);
     this.gate.add(colunaDireita);

     var colunaEsquerda = new THREE.Mesh(new THREE.BoxGeometry(10, 40, 10), material);
     colunaEsquerda.position.y = 40 / 2;
     colunaEsquerda.position.z = 50;
      //THREE.GeometryUtils.merge(this.montagem, this.colunaEsquerda);
     this.gate.add(colunaEsquerda);

     var barra = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 110), material);
     barra.position.y = 40;
     barra.position.z = 0;
      //THREE.GeometryUtils.merge(this.montagem, this.barra);
     this.gate.add(barra);

     var paredeEsquerda = new THREE.Mesh(new THREE.BoxGeometry(10, 40, 100), material);
     paredeEsquerda.position.y = 40 / 2; //0
     paredeEsquerda.position.z = -110; //-110
      //THREE.GeometryUtils.merge(this.montagem, this.paredeEsquerda);
     this.gate.add(paredeEsquerda);

     var paredeDireita = new THREE.Mesh(new THREE.BoxGeometry(10, 40, 100), material);
     paredeDireita.position.y = 40 / 2; //0
     paredeDireita.position.z = 110; //-110
      //THREE.GeometryUtils.merge(this.montagem, this.paredeDireita);
     this.gate.add(paredeDireita);

     //this.gate = new THREE.Mesh(this.montagem, this.material);
     this.gate.position.x = posX;
     this.gate.position.y = posY;
     this.gate.position.z = posZ;

     scene.add(this.gate);
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