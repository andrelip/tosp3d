function Gate(posX, posY, posZ) {
  //
  // Interface Publica
  //
  this.createUI = function() {
  };

  this.init = function (scene) {
     this.material = new THREE.MeshLambertMaterial({ color: 0xcccccc, overdraw: true });
     this.montagem = new THREE.Geometry();

     this.colunaDireita = new THREE.Mesh(new THREE.BoxGeometry(10, 40, 10));
     this.colunaDireita.position.y = 40 / 2;
     this.colunaDireita.position.z = -50;
     THREE.GeometryUtils.merge(this.montagem, this.colunaDireita);

     this.colunaEsquerda = new THREE.Mesh(new THREE.BoxGeometry(10, 40, 10));
     this.colunaEsquerda.position.y = 40 / 2;
     this.colunaEsquerda.position.z = 50;
     THREE.GeometryUtils.merge(this.montagem, this.colunaEsquerda);

     this.barra = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 110));
     this.barra.position.y = 40;
     this.barra.position.z = 0;
     THREE.GeometryUtils.merge(this.montagem, this.barra);

     this.paredeEsquerda = new THREE.Mesh(new THREE.BoxGeometry(10, 40, 100));
     this.paredeEsquerda.position.y = 40 / 2; //0
     this.paredeEsquerda.position.z = -110; //-110
     THREE.GeometryUtils.merge(this.montagem, this.paredeEsquerda);

     this.paredeDireita = new THREE.Mesh(new THREE.BoxGeometry(10, 40, 100));
     this.paredeDireita.position.y = 40 / 2; //0
     this.paredeDireita.position.z = 110; //-110
     THREE.GeometryUtils.merge(this.montagem, this.paredeDireita);

     this.gate = new THREE.Mesh(this.montagem, this.material);
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