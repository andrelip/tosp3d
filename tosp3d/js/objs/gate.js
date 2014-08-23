function Gate(posX, posY, posZ) {
  //
  // Interface Publica
  //
  this.createUI = function() {
  };

  this.init = function (scene) {
      /*
     //this.gate = new THREE.Geometry();

      this.coluna = new THREE.Mesh(new THREE.BoxGeometry(10, 40, 10));
     //this.coluna.position.z = -50;
     //THREE.GeometryUtils.merge(this.gate, this.coluna);
     //this.coluna = new THREE.BoxGeometry(10, 40, 10);
     //this.coluna.position.z = 50;
     //THREE.GeometryUtils.merge(this.gate, this.coluna);
     //this.barra = new THREE.BoxGeometry(10, 10, 110);
     //this.coluna.position.z = 0;
     //THREE.GeometryUtils.merge(this.gate, this.barra);

     //this.gate.position.x = posX;
     //this.gate.position.y = posY;
     //this.gate.position.z = posZ;
     this.coluna.position.x = posX;
     this.coluna.position.y = posY + (this.container.position.y + (25.9 / 2));
     this.coluna.position.z = posZ;

     scene.add(this.coluna);
     */
     this.colunaEsquerda = new THREE.Mesh(new THREE.BoxGeometry(10, 40, 10));
     this.colunaEsquerda.position.x = posX; //-800;
     this.colunaEsquerda.position.y = posY + (40 / 2); //0
     this.colunaEsquerda.position.z = posZ - 50; //-50;
     scene.add(this.colunaEsquerda);
     this.colunaDireita = new THREE.Mesh(new THREE.BoxGeometry(10, 40, 10));
     this.colunaDireita.position.x = posX; //-800;
     this.colunaDireita.position.y = posY + (40 / 2); //0
     this.colunaDireita.position.z = posZ + 50; //50;
     scene.add(this.colunaDireita);
     this.barra = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 110));
     this.barra.position.x = posX; //-800;
     this.barra.position.y = posY + 40 + (10 / 2); //40
     this.barra.position.z = posZ; //0;
     scene.add(this.barra);

     this.paredeEsquerda = new THREE.Mesh(new THREE.BoxGeometry(10, 40, 100));
     this.paredeEsquerda.position.x = posX; //-800
     this.paredeEsquerda.position.y = posY + (40 / 2); //0
     this.paredeEsquerda.position.z = posZ - 110; //-110
     scene.add(this.paredeEsquerda);

     this.paredeDireita = new THREE.Mesh(new THREE.BoxGeometry(10, 40, 100));
     this.paredeDireita.position.x = posX; //-800
     this.paredeDireita.position.y = posY + (40 /2); //0
     this.paredeDireita.position.z = posZ + 110; //-110
     scene.add(this.paredeDireita);
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