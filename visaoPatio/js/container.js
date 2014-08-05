function Container() {
  //
  // Interface Publica
  //
  this.createUI = function() {
  };

  this.init = function(scene) {
    Container.texturasIndex = Math.floor((Math.random() * 3));

    var containerGeometry = new THREE.BoxGeometry(2.5, 1, 1);
    var containerMaterial = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture(Container.texturas[Container.texturasIndex])});
    this.container = new THREE.Mesh(containerGeometry, containerMaterial);

    this.container.castShadow = true;

    var c = Container.count++;
    var d = c % 9;
    var pilha = Math.floor(c / 27);
    var c = c - (27 * pilha);
    var f = 0.5 + pilha;

    var pos = {
        x: Math.floor(c / 9) * 3.5, // 0,0,0, 0,0,0, 0,0,0, 3,3,3, 3,3,3, 3,3,3
        y: f,
        z: Math.floor(d / 3) * 4 + d % 3 // 0,1,2, 4,5,6, 8,9,10
    };

    this.container.position.x = pos.x;
    this.container.position.y = pos.y;
    this.container.position.z = pos.z;

    if (
        !((pos.x == 0) && (pos.y == 4.5) && (pos.z == 0)) &&
        !((pos.x == 0) && (pos.y == 5.5) && (pos.z == 0)) &&

        !((pos.x == 0) && (pos.y == 5.5) && (pos.z == 1)) &&

        !((pos.x == 0) && (pos.y == 2.5) && (pos.z == 6)) &&
        !((pos.x == 0) && (pos.y == 3.5) && (pos.z == 6)) &&
        !((pos.x == 0) && (pos.y == 4.5) && (pos.z == 6)) &&
        !((pos.x == 0) && (pos.y == 5.5) && (pos.z == 6)) &&

        !((pos.x == 3.5) && (pos.y == 2.5) && (pos.z == 8)) &&
        !((pos.x == 3.5) && (pos.y == 3.5) && (pos.z == 8)) &&
        !((pos.x == 3.5) && (pos.y == 4.5) && (pos.z == 8)) &&
        !((pos.x == 3.5) && (pos.y == 5.5) && (pos.z == 8)) &&

        !((pos.x == 3.5) && (pos.y == 2.5) && (pos.z == 9)) &&
        !((pos.x == 3.5) && (pos.y == 3.5) && (pos.z == 9)) &&
        !((pos.x == 3.5) && (pos.y == 4.5) && (pos.z == 9)) &&
        !((pos.x == 3.5) && (pos.y == 5.5) && (pos.z == 9)) &&

        !((pos.x == 3.5) && (pos.y == 2.5) && (pos.z == 10)) &&
        !((pos.x == 3.5) && (pos.y == 3.5) && (pos.z == 10)) &&
        !((pos.x == 3.5) && (pos.y == 4.5) && (pos.z == 10)) &&
        !((pos.x == 3.5) && (pos.y == 5.5) && (pos.z == 10)) &&

        !((pos.x == 7) && (pos.y == 4.5) && (pos.z == 10)) &&
        !((pos.x == 7) && (pos.y == 5.5) && (pos.z == 10))
       )
       scene.add(this.container);
  };

  this.update = function() {
    //this.container.rotation.x += 0.1;
  };

  //
  // Metodos Privados
  //
};

//
// Variaveis Estaticas
//
Container.texturasIndex = 0;
Container.texturas = [
    "textures/msc.png",
    "textures/maersk.png", 
    "textures/hamburgsud.png"
];

Container.count = 0;