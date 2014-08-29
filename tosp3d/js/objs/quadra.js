function Quadra(posX, posY, posZ, qtdLin, qtdCol, xCel, zCel) {
  //
  // Interface Publica
  //
  this.createUI = function () {
  };

  this.init = function (scene) {
      this.group = new THREE.Object3D();
      this.plano = new THREE.PlaneGeometry(qtdLin * xCel, qtdCol * zCel, 1, 1);
      this.matQuadra = new THREE.MeshPhongMaterial({ color: 0xffffff, overdraw: true });
      this.quadra = new THREE.Mesh(this.plano, this.matQuadra);
      this.quadra.rotation.x = -0.5 * Math.PI;
      this.quadra.receiveShadow = false;
      this.quadra.position.x = posX; //-600;
      this.quadra.position.y = posY; //0.1;
      this.quadra.position.z = posZ; //400;
      this.group.add(this.quadra);

      var verX1 = 0;
      var verX2 = 0;
      var posXQuadra = 0;

      var verZ1 = 0;
      var verZ2 = 0;
      var posZQuadra = 0;

      if (posX < 0) {
          verX1 = posX - ((qtdLin * xCel) / 2);
          verX2 = verX1 + (qtdLin * xCel);
          posXQuadra = verX1 + (xCel / 2);
      }
      else {
          verX1 = posX - ((qtdLin * xCel) / 2);
          verX2 = verX1 + (qtdLin * xCel);
          posXQuadra = verX1 + (xCel / 2);
      }


      if (posZ < 0) {
          verZ1 = posZ - ((qtdCol * zCel) / 2);
          verZ2 = verZ1 + (qtdCol * zCel);
          posZQuadra = verZ1 + (zCel / 2);
      }
      else {
          verZ1 = posZ - ((qtdCol * zCel) / 2);
          verZ2 = verZ1 + (qtdCol * zCel);
          posZQuadra = verZ1 + (zCel / 2);
      }

      var wordsLinPosX = verX1 + (xCel / 4);
      var wordsColPosZ = verZ2 + xCel;
      for (x = 0; x < qtdLin; x++)
      {
          var colLetra = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U'];
          this.shape = new THREE.TextGeometry(colLetra[x], { size: 15, height: 0, font: 'droid sans mono', weight: 'normal', style: 'normal', bevelEnabled: false });
          this.wrapper = new THREE.MeshBasicMaterial({ color: 0xffff99 });
          this.words = new THREE.Mesh(this.shape, this.wrapper);
          this.words.rotation.x = -0.5 * Math.PI;
          this.words.rotation.z = 0;
          this.words.position.x = wordsLinPosX + (x * xCel); //0.1;
          this.words.position.y = 0.1; //0.2;
          this.words.position.z = wordsColPosZ; //0.1;
          //scene.add(this.words);
          this.group.add(this.words);
      }

      var stZ2;
      var z2 = -1;
      wordsColPosZ = verZ2 - xCel;
      for (z = 0; z < qtdCol; z++) {
          z2 += 2;
          stZ2 = z2;
          if (z2 < 10)
              stZ2 = ' ' + z2;  // Para alinhar os numeros a direita
              
          this.shape = new THREE.TextGeometry(stZ2, { size: 15, height: 0, font: 'droid sans mono', weight: 'normal', style: 'normal', bevelEnabled: false });
          this.wrapper = new THREE.MeshBasicMaterial({ color: 0xffff99 });
          this.words = new THREE.Mesh(this.shape, this.wrapper);
          this.words.rotation.x = -0.5 * Math.PI;
          this.words.rotation.z = 0;
          this.words.position.x = wordsLinPosX - (xCel * 1.5); //- 870; //0.1;
          this.words.position.y = 0.2; //0.2;
          this.words.position.z = wordsColPosZ - (z * zCel); //-120 - (z * zCel); //0.1;
          //scene.add(this.words);
          this.group.add(this.words);
      }

      var grid = new THREE.Object3D();
      var planoCelula = new THREE.PlaneGeometry(xCel, zCel, 1, 1);
      var matCelula = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true, wireframeLinewidth: 1 });
      //this.montagem = new THREE.Geometry();
      for (x = 0; x < qtdLin ; x++) {
          for (z = 0; z < qtdCol ; z++) {
              var celula = new THREE.Mesh(planoCelula, matCelula);
              celula.rotation.x = -0.5 * Math.PI;
              celula.position.x = xCel * x;
              celula.position.z = zCel * z;
              celula.receiveShadow = false;
              //THREE.GeometryUtils.merge(this.montagem, this.celula);
              //this.matriz.add(this.celula);
              grid.add(celula);
          }
      }
      //this.grid = new THREE.Mesh(this.montagem, this.matCelula);
      //this.grid.position.x = posX + (posX / 2) - xCel;

      grid.position.x = posXQuadra; //831.8
      grid.position.y = posY;
      grid.position.z = posZQuadra; //-672.6;

      //scene.add(this.grid);
      this.group.add(grid);

      var axes1 = new THREE.AxisHelper(20);
      axes1.position.set(verX1, 0.1, verZ1);
      //var meshAxe1 = new THREE.Mesh(axes1);
      //axes1.position.set(-844, 0.1, -703);
      //scene.add(axes1);
      //THREE.geometry.merge(this.montagem, meshAxe1);
      this.group.add(axes1);

      var axes2 = new THREE.AxisHelper(20);
      //axes2.position.set(-356, 0.1, -97);
      axes2.position.set(verX2, 0.1, verZ2);
      //scene.add(axes2);
      //THREE.GeometryUtils.merge(this.montagem, axes2);
      this.group.add(axes2);

      var axes3 = new THREE.AxisHelper(20);
      //axes3.position.set(-844, 0.1, -97);
      axes3.position.set(verX1, 0.1, verZ2);
      //scene.add(axes3);
      this.group.add(axes3);
      //THREE.GeometryUtils.merge(this.montagem, axes3);

      var axes4 = new THREE.AxisHelper(20);
      //axes4.position.set(-356, 0.1, -703);
      axes4.position.set(verX2, 0.1, verZ1);
      //scene.add(axes4);
      this.group.add(axes4);
      //THREE.GeometryUtils.merge(this.montagem, axes4);

      scene.add(this.group);
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