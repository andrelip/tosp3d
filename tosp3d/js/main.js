var clock = new THREE.Clock();
var gui = new dat.GUI();
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
renderer.shadowMapEnabled = true;
renderer.setClearColor(0xeeeeeeee, 1.0);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// material
var msc = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('textures/msc.png') });
var maersk = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('textures/maersk.png') });
var hamburgsud = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('textures/hamburgsud.png') });

var xCelula = 24.4;
var zCelula = 60.6;

// Inicializacao
var objs = [
  new Camera(),
  new Patio(),
  new Luz(),
  new Fps(),
  new Gate(-900, 0, 0),
  new RuaPrincipal(0, 0.1, 0),
  new RuaTransversal(-400, 0.1, 0),
  new Quadra(-600, 0.1, -400, 10, 10, xCelula, zCelula),
  new Quadra(-600, 0.1, 400, 10, 10, xCelula, zCelula),
  new Container20(-709, 0, -130, msc, 0xFFFFFF),
  new Container40(-684, 0, -161, maersk, 0x0099FF),
  new Container40(-684, 26, -161, msc, 0xFFFFFF),
  new Container40(-645, 0, 161, hamburgsud, 0xFF3333)
];

objs.forEach(function (e) {
    e.init(scene);
    e.createUI(gui);
});

render();

function render() {
    var delta = clock.getDelta();
    objs.forEach(function (e) { e.update(delta) });  // da uma chance dos objetos se mexerem
    requestAnimationFrame(render);                  // nos chama no proximo refresh
    renderer.render(scene, objs[0].camera);         // desenha a cena
}