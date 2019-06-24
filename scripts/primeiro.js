
//criando a cena
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth/2, window.innerHeight/2);
document.body.appendChild(renderer.domElement);

//criando objetos
var geometry = new THREE.SphereGeometry(1,32);
var material = new THREE.MeshBasicMaterial({color: 0x00ff10});
var circle = new THREE.Mesh(geometry,material);
scene.add(circle);
//var circle1 = new THREE.Mesh(new THREE.BoxGeometry(1,5),new THREE.MeshBasicMaterial({color: 0xf0ff0f}));
//scene.add(circle1);

//helper linhas
var axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

//luz ambiente
var light = new THREE.AmbientLight(0x404040);
scene.add(light);

//luz pontual
var light1 = new THREE.PointLight(0x00ff50, 1 ,100);
light1.position.set(10,10,10);
scene.add(light1);
//helper Luz
var pointLightHelper = new THREE.PointLightHelper(light1, 1, 0xffffff);
scene.add(pointLightHelper);

//luz 


camera.position.z = 5;
//looping de animação
function animate(){
	requestAnimationFrame(animate);
	renderer.render(scene,camera);
	renderer.render(circle.rotation.x += 0.01);
	renderer.render(circle.rotation.y += 0.01);
//	renderer.render(circle1.rotation.x += 0.01);
//	renderer.render(circle1.rotation.y += 0.01);
}

animate();