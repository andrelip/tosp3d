var clock = new THREE.Clock();
var gui = new dat.GUI();
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
renderer.shadowMapEnabled = true;
renderer.setClearColor(0xeeeeeeee, 1.0);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Inicializacao
var objs = [
  new Camera(),
  new Patio(),
  new Luz(),
  new Fps()
];

var altPilha = 6;

for (x = 0; x < (27 * altPilha); x++)
    objs.push(new Container());

objs.forEach(function (e) { e.init(scene); e.createUI(gui); });

render();

function render() {
    var delta = clock.getDelta();
    objs.forEach(function (e) { e.update(delta) });  // da uma chance dos objetos se mexerem
    requestAnimationFrame(render);                  // nos chama no proximo refresh
    renderer.render(scene, objs[0].camera);         // desenha a cena
}