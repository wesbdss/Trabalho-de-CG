'use strict';


function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas,antialias:true});

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  

  const gui = new dat.GUI();
  const cores = [0x4F4F4F,0x483D8B,0x0000CD,0x4682B4,0x00FFFF,0x00FF7F,0x228B22,0xD2691E]; 


  const fov = 40;
  const aspect = 2;  // the canvas default
  const near = 1;
  const far = 10000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  var camx =70,camy=-40,camz=40;
  camera.position.set(camx, camy, camz);
  camera.up.set( 0, 0, 1 );
  camera.lookAt(0,0,0);
  

  const scene = new THREE.Scene();
  scene.applyMatrix(new THREE.Matrix4().makeTranslation(-50, 10, 0));
  var scenex=0,sceney=0,scenez=0;
  //controles
  var controls = new THREE.OrbitControls(camera,renderer.domElement);
  controls.enableDamoing = true;
  controls.danpingFactor = 0.25;
  controls.screenSpacePlanning = false;

  controls.minDistance = 0;
  controls.maxDistance = 1000;
  controls.maxPolarAngle = Math.PI/2;


  var objectsRotation = [],objectsMove = [],carSentido = [],objectsMoveIn = [];
  var plano2 = 0;

  //objetos
  	//relações entre o plano1 e o resto x= 40, y=30/ PLANO 2: x, y/2
  	const x = 40, y =40;
  	var quant =20;//quantas vezes

  	for(var i=0;i<quant;i++){
	  	var piso = new THREE.Object3D();
	  	scene.add(piso);
	  	scene.background = new THREE.TextureLoader().load('textures/quatro/ceu.jpg');

	  	var texture = new THREE.TextureLoader().load( 'textures/quatro/verde.jpg' );
		var geometry = new THREE.PlaneGeometry(x, y, 10);
		var material = new THREE.MeshPhongMaterial( {map: texture} );
		var plane1 = new THREE.Mesh( geometry, material );
		piso.add( plane1 );
		plane1.receiveShadow = true;

		geometry = new THREE.PlaneGeometry(x,y/5,10);
		material = new THREE.MeshPhongMaterial({color: 0x808080});
		var rua = new THREE.Mesh(geometry, material);
		plane1.add(rua);
		rua.receiveShadow = true;
		rua.position.z = 0.1;
		rua.position.y = -(y/6);

		var z= 25;
		var geometry = new THREE.CubeGeometry(x/4, y/3, z);
		var material = new THREE.MeshPhongMaterial( {color: 0xeead2d} );
		var casa = new THREE.Mesh( geometry, material );
		plane1.add(casa);
		casa.receiveShadow = true;
		casa.position.z = z/2;
		casa.position.y = (y/8);
		casa.position.x = (x/8);
		casa.castShadow = true;

		var geometry = new THREE.PlaneGeometry(x/10, y/16, 10);
		var material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
		var janela = new THREE.Mesh( geometry, material );
		casa.add(janela);
		janela.position.x = -(x/8)- .1;
		janela.rotation.y = janela.rotation.y+ 1.60;
		janela.position.y = y/18;
		janela.position.z = (z/3);
		
		var janela = new THREE.Mesh( geometry, material );
		casa.add(janela);
		janela.position.x = -(x/8)- .1;
		janela.rotation.y = janela.rotation.y+ 1.60;
		janela.position.y = y/18;
		janela.position.z = (z/100);
		var janela = new THREE.Mesh( geometry, material );
		casa.add(janela);
		janela.position.x = -(x/8)- .1;
		janela.rotation.y = janela.rotation.y+ 1.60;
		janela.position.y = y/18;
		janela.position.z = (-z/3);

		var janela = new THREE.Mesh( geometry, material );
		casa.add(janela);
		janela.position.x = -(x/8)- .1;
		janela.rotation.y = janela.rotation.y+ 1.60;
		janela.position.y = -y/15;
		janela.position.z = (z/3);
		var janela = new THREE.Mesh( geometry, material );
		casa.add(janela);
		janela.position.x = -(x/8)- .1;
		janela.rotation.y = janela.rotation.y+ 1.60;
		janela.position.y = -y/15;
		janela.position.z = (z/100);
		var janela = new THREE.Mesh( geometry, material );
		casa.add(janela);
		janela.position.x = -(x/8)- .1;
		janela.rotation.y = janela.rotation.y+ 1.60;
		janela.position.y = -y/15;
		janela.position.z = (-z/3);


		var janela = new THREE.Mesh( geometry, material );
		casa.add(janela);
		janela.position.x = (x/8)+ .1;
		janela.rotation.y = janela.rotation.y+ 1.60;
		janela.position.y = y/18;
		janela.position.z = (z/3);
		var janela = new THREE.Mesh( geometry, material );
		casa.add(janela);
		janela.position.x = (x/8)+ .1;
		janela.rotation.y = janela.rotation.y+ 1.60;
		janela.position.y = y/18;
		janela.position.z = (z/100);
		var janela = new THREE.Mesh( geometry, material );
		casa.add(janela);
		janela.position.x = (x/8)+ .1;
		janela.rotation.y = janela.rotation.y+ 1.60;
		janela.position.y = y/18;
		janela.position.z = (-z/3);

		var janela = new THREE.Mesh( geometry, material );
		casa.add(janela);
		janela.position.x = (x/8)+ .1;
		janela.rotation.y = janela.rotation.y+ 1.60;
		janela.position.y = -y/15;
		janela.position.z = (z/3);
		var janela = new THREE.Mesh( geometry, material );
		casa.add(janela);
		janela.position.x = (x/8)+ .1;
		janela.rotation.y = janela.rotation.y+ 1.60;
		janela.position.y = -y/15;
		janela.position.z = (z/100);
		var janela = new THREE.Mesh( geometry, material );
		casa.add(janela);
		janela.position.x = (x/8)+ .1;
		janela.rotation.y = janela.rotation.y+ 1.60;
		janela.position.y = -y/15;
		janela.position.z = (-z/3);

		var geometry = new THREE.CubeGeometry(x/40, y/40, 10);
		var material = new THREE.MeshPhongMaterial( {color: 0xa2a370} );
		var arvore = new THREE.Mesh( geometry, material );
		plane1.add(arvore);
		arvore.position.z = (x/4)/2;
		arvore.position.y = -(y/2.2);
		arvore.position.x = (x/8);

		var geometry = new THREE.ConeGeometry( 5, 5, 64 );
		var material = new THREE.MeshPhongMaterial( {color: 0x008000} );
		var folhas = new THREE.Mesh( geometry, material );
		arvore.add( folhas );
		folhas.castShadow = true;
		folhas.rotation.x = 1.60;
		folhas.position.z = 1;

		var folhas = new THREE.Mesh( geometry, material );
		arvore.add( folhas );
		folhas.castShadow = true;
		folhas.rotation.x = 1.60;
		folhas.position.z = 5;

		geometry = new THREE.PlaneGeometry(x, y/2, 10);
		material = new THREE.MeshPhongMaterial( {color: 0x8B4513} );
		var plane2 = new THREE.Mesh( geometry, material );
		piso.add( plane2 );
		plane2.receiveShadow = true;
		plane2.position.y = -((y/2)+ (y/4));

		geometry = new THREE.CubeGeometry(x, y/40, 1);
		material = new THREE.MeshPhongMaterial( {color: 0xffa500} );
		var trilho1 = new THREE.Mesh(geometry,material);
		plane2.add(trilho1);
		trilho1.position.z = 0.001;
		trilho1.position.y = +(y/6)-(y/(y/3));
		trilho1.receiveShadow = true;
		var trilho2 = new THREE.Mesh(geometry,material);
		plane2.add(trilho2);
		trilho2.receiveShadow = true;
		trilho2.position.z = 0.001;
		trilho2.position.y= -(y/6)+(y/(y/3));


		// --: trem vai ter exatos 4 de largura :--

		var borda1 = new THREE.Mesh(geometry,material);
		rua.add(borda1);
		borda1.position.z = .002;
		borda1.position.y = -(y/6)+(y/(y/3));
		borda1.receiveShadow = true;
		var borda2 = new THREE.Mesh(geometry,material);
		rua.add(borda2);
		borda2.receiveShadow = true;
		borda2.position.z = .002;
		borda2.position.y = +(y/6)-(y/(y/3));
		geometry = new THREE.PlaneGeometry(x/6, y/42, 10);
		material = new THREE.MeshPhongMaterial( {color: 0xffffff} );
		var faixa1 = new THREE.Mesh(geometry,material);
		rua.add(faixa1);
		faixa1.receiveShadow = true;
		faixa1.position.z = .1;
		faixa1.position.x = x/4;
		var faixa2 = new THREE.Mesh(geometry,material);
		rua.add(faixa2);
		faixa2.receiveShadow = true;
		faixa2.position.z = .1;
		faixa2.position.x = -x/4;

		geometry = new THREE.CubeGeometry(1, -(-(y/6)+(y/(y/3))) + (+(y/6)-(y/(y/3))), .5);
		material = new THREE.MeshPhongMaterial( {color: 0x6c6870} );
		var pos = -x/2;
		for(var j = 0;j<10;j++){
			var barra = new THREE.Mesh(geometry,material);
			plane2.add(barra);
			barra.receiveShadow = true;
			barra.position.z = 0.09;
			barra.position.x = pos;
			pos = pos + x/10;
		}

		
		piso.position.x = i*x;
	}


	// carro ida
	function criaCarro(cor){
		var carro = new THREE.Object3D();
		carro.position.set(-20,-8,2.5);
		scene.add(carro);
		geometry = new THREE.CubeGeometry(3,3,2.8);
		material = new THREE.MeshBasicMaterial({color: new THREE.Color(cor)});
		var carcaca= new THREE.Mesh(geometry,material);
		carcaca.position.z = 0;
		carro.add(carcaca);

		geometry = new THREE.CubeGeometry(3,3,2);
		material = new THREE.MeshBasicMaterial({color: new THREE.Color(cor)});
		var frente= new THREE.Mesh(geometry,material);
		carro.add(frente);
		frente.position.x = 2;
		frente.position.z = -.2;

		geometry = new THREE.CubeGeometry(3,3,2);
		material = new THREE.MeshBasicMaterial({color: new THREE.Color(cor)});
		var trazeira= new THREE.Mesh(geometry,material);
		carro.add(trazeira);
		trazeira.position.x = -2;
		trazeira.position.z = -.2;

		geometry = new THREE.PlaneGeometry(0.7, 2.7, 1);
		material = new THREE.MeshBasicMaterial( {color: 0xFFFFFF, side: THREE.DoubleSide} );
		janela = new THREE.Mesh( geometry, material );
		carro.add(janela);
		janela.rotation.y = janela.rotation.y+ 1.60;
		janela.position.x = 1.6;
		janela.position.z = 1;
		geometry = new THREE.PlaneGeometry(0.7, 2.7, 1);
		material = new THREE.MeshBasicMaterial( {color: 0xFFFFFF, side: THREE.DoubleSide} );
		janela = new THREE.Mesh( geometry, material );
		carro.add(janela);
		janela.rotation.y = janela.rotation.y+ 1.60;
		janela.position.x = -1.6;
		janela.position.z = 1;

		geometry = new THREE.CircleGeometry(0.3, 20);
		material = new THREE.MeshBasicMaterial( {color: 0xFFFFFF, side: THREE.DoubleSide} );
		var farol = new THREE.Mesh( geometry, material );
		carro.add(farol);
		farol.rotation.y = farol.rotation.y+ 1.60;
		farol.position.x = 3.8;
		farol.position.y = 0.8;
		farol.position.z = 0.3;

		farol = new THREE.Mesh( geometry, material );
		carro.add(farol);
		farol.rotation.y = farol.rotation.y+ 1.60;
		farol.position.x = 3.8;
		farol.position.y = -.8;
		farol.position.z = 0.3;

		geometry = new THREE.CircleGeometry(.8, 20);
		var texture = new THREE.TextureLoader().load( 'textures/quatro/rodacar.png' );
		material = new THREE.MeshBasicMaterial( {map: texture,color: new THREE.Color(cor), side: THREE.DoubleSide} );
		var roda = new THREE.Mesh(geometry,material);
		carro.add(roda);
		roda.rotation.x = 1.60;
		roda.position.y = -1.6;
		roda.position.x = -2.5;
		roda.position.z = -1;
		objectsRotation.push(roda);

		var roda = new THREE.Mesh(geometry,material);
		carro.add(roda);
		roda.rotation.x = 1.60;
		roda.position.y = -1.6;
		roda.position.x = 2.5;
		roda.position.z = -1;
		objectsRotation.push(roda);

		var roda = new THREE.Mesh(geometry,material);
		carro.add(roda);
		roda.rotation.x = 1.60;
		roda.position.y = 1.6;
		roda.position.x = -2.5;
		roda.position.z = -1;
		objectsRotation.push(roda);

		var roda = new THREE.Mesh(geometry,material);
		carro.add(roda);
		roda.rotation.x = 1.60;
		roda.position.y = 1.6;
		roda.position.x = 2.5;
		roda.position.z = -1;
		objectsRotation.push(roda);

		return carro;
	}
	

	//thomas a locomotiva
	geometry = new THREE.CircleGeometry(100,100,20);
	var texture = new THREE.TextureLoader().load( 'textures/quatro/lua.png');

	material = new THREE.MeshBasicMaterial({map: texture,map: texture, side: THREE.DoubleSide});
	var lua = new THREE.Mesh(geometry,material);
	lua.rotation.y = 1.60;
	lua.rotation.y = 1;
	lua.position.set(piso.position.x,250,250);
	scene.add(lua);


	z = 10;
	var thomas = new THREE.Object3D();
	geometry = new THREE.CubeGeometry(5, -(-(y/6)+(y/(y/3))) + (+(y/6)-(y/(y/3))), z-1);
	material = new THREE.MeshPhongMaterial( {color: 0x1E90FF} );
	var cabine = new THREE.Mesh( geometry, material );
	cabine.position.z = z/2;

	thomas.add(cabine);

	geometry = new THREE.CubeGeometry(5, -(-(y/6)+(y/(y/3))) + (+(y/6)-(y/(y/3))), z-2);
	material = new THREE.MeshPhongMaterial( {color: 0x1E90FF} );
	var cabine2 = new THREE.Mesh( geometry, material );
	cabine2.position.z = z/2;
	cabine2.position.x = -5;
	thomas.add(cabine2);

	geometry = new THREE.CubeGeometry(5, -(-(y/6)+(y/(y/3))) + (+(y/6)-(y/(y/3))), z/2+2);
	material = new THREE.MeshPhongMaterial( {color: 0x00BFFF} );
	var tronco =new THREE.Mesh( geometry, material ); 
	tronco.position.z = z/4 +2;
	tronco.position.x= 5;
	thomas.add(tronco);

	geometry = new THREE.CylinderGeometry( 2, 2, 5, 32 );
	var texture = new THREE.TextureLoader().load( 'textures/quatro/rosto.png' );
	var materiais = [
		new THREE.MeshBasicMaterial({color: 0x000000}),
		new THREE.MeshBasicMaterial({map: texture,side: THREE.DoubleSide})
	];
	material = new THREE.MeshFaceMaterial( materiais);
	var cabeca = new THREE.Mesh( geometry, material );
	thomas.add(cabeca);
	texture.center.set(.5,.5);
	texture.rotation = THREE.Math.degToRad(270);
	cabeca.position.x = 8;
	cabeca.position.z = z/4+2;
	cabeca.rotation.z = -1.60;

	geometry = new THREE.CylinderGeometry( .6, .5, 3, 32 );
	material = new THREE.MeshPhongMaterial( {color: 0x000000} );
	var chamine = new THREE.Mesh( geometry, material );
	thomas.add(chamine);
	chamine.position.x = 10;
	chamine.position.z = 8;
	chamine.rotation.x = 1.60;

	geometry = new THREE.CircleGeometry( 2, 32 );
	texture = new THREE.TextureLoader().load( 'textures/quatro/roda.png' );
	material = new THREE.MeshPhongMaterial( {map: texture,side:  THREE.DoubleSide} );
	var rodas = new THREE.Mesh(geometry,material);
	rodas.rotation.x = 1.60;
	rodas.position.y = 4;
	rodas.position.z = 1.5;
	thomas.add(rodas);
	objectsRotation.push(rodas);

	var rodas = new THREE.Mesh(geometry,material);
	rodas.rotation.x = 1.60;
	rodas.position.x = -5;
	rodas.position.y = 4;
	rodas.position.z = 1.5;
	thomas.add(rodas);
	objectsRotation.push(rodas);

	var rodas = new THREE.Mesh(geometry,material);
	rodas.rotation.x = 1.60;
	rodas.position.x = 5;
	rodas.position.y = 4;
	rodas.position.z = 1.5;
	thomas.add(rodas);
	objectsRotation.push(rodas);

	var rodas = new THREE.Mesh(geometry,material);
	rodas.rotation.x = 1.60;
	rodas.position.y = -4;
	rodas.position.z = 1.5;
	thomas.add(rodas);
	objectsRotation.push(rodas);

	var rodas = new THREE.Mesh(geometry,material);
	rodas.rotation.x = 1.60;
	rodas.position.x = -5;
	rodas.position.y = -4;
	rodas.position.z = 1.5;
	thomas.add(rodas);
	objectsRotation.push(rodas);

	var rodas = new THREE.Mesh(geometry,material);
	rodas.rotation.x = 1.60;
	rodas.position.x = 5;
	rodas.position.y = -4;
	rodas.position.z = 1.5;
	thomas.add(rodas);
	objectsRotation.push(rodas);

	thomas.position.set(-100,-30,0);

	var listener = new THREE.AudioListener();
	camera.add(listener);
	var sound = new THREE.PositionalAudio(listener);
	var audioLoader = new THREE.AudioLoader();
	audioLoader.load('sounds/thomasSound.mp3', function(buffer){
		sound.setBuffer(buffer);
		sound.setRefDistance(50);
		sound.play();
	})
	scene.add(thomas);
	thomas.add(sound);
	//scene.remove(thomas);

	//LUZES
	var lightThomas = new THREE.PointLight(0xFFFFFF,0.8,120);
	lightThomas.castShadow = true;

	thomas.add(lightThomas);
	var light = new THREE.PointLight(0xFFFFFF,0.5,1000); //100000
	light.distance = 1000000;
	light.castShadow = true;

	lua.add(light);

	var lightambient = new THREE.AmbientLight(0x000F8f);
	scene.add(lightambient);
	//piso.rotation.x = 180;

	/*var dir = new THREE.Vector3( 0, 1, 0 );
	//normalize the direction vector (convert to vector of length 1)
	dir.normalize();
	var origin = new THREE.Vector3( 0, 0, 0 );
	var length = 30;
	var hex = 0xffff00;
	var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
	scene.add( arrowHelper );
	*/


  class AxisGridHelper {
    constructor(node, units = 10) {
      const axes = new THREE.AxesHelper();
      axes.material.depthTest = false;
      axes.renderOrder = 2;  // after the grid
      node.add(axes);

      const grid = new THREE.GridHelper(units, units);
      grid.material.depthTest = false;
      grid.renderOrder = 1;
      node.add(grid);

      this.grid = grid;
      this.axes = axes;
      this.visible = false;
    }
    get visible() {
      return this._visible;
    }
    set visible(v) {
      this._visible = v;
      this.grid.visible = v;
      this.axes.visible = v;
    }
  }

  function makeAxisGrid(node, label, units) {
    const helper = new AxisGridHelper(node, units);
    gui.add(helper, 'visible').name(label);
  }

  //makeAxisGrid() 
  makeAxisGrid(scene,'Cena');
  makeAxisGrid(plane2,'Plano Marrom');
  makeAxisGrid(plane1,'Plano Verde',50);
  makeAxisGrid(piso,'Central',20);

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth/2;
    const height = canvas.clientHeight/2;
    const needResize = canvas.width/2 !== width || canvas.height/2 !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }
  var spawn = true;
  var tempoInicial = 0;
  var tempoFinal = 0;
  function render(time) {
    time *= 0.001;
  

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();

    }

    //animações
    
    controls.update();
 	if(spawn){
 		tempoInicial = time;
 		console.log("Thomas VINDOOOO");
 		thomas.position.set(-200,-30,0);
 		tempoFinal = tempoInicial +30;
 		spawn = false;
 	}else if(time >= tempoFinal){
 		spawn = true;
 	}
    objectsRotation.forEach((roda) =>{
    	roda.rotation.z -= 1;
    })
    objectsMove.forEach( (obj) => {
    	obj.position.x += 1;
    });

    objectsMoveIn.forEach( (obj) => {
    	obj.position.x -= 1;
    	if (obj.position.x <= -20){
    		scene.remove(obj);
    	}
    });
    thomas.position.x +=1.2;
    carSentido.forEach( (car) => {
    	if(car.position.x >= 1000){
    		car.rotation.z = 3.2;
			car.position.y = -5;
			objectsMove.shift(car);
			objectsMoveIn.push(car);
    	}
    });
    lua.position.x -=.1;
    if(thomas.position.x >=500)
    	thomas.position.z += 0.5;
   
    renderer.render(scene, camera);


    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
  document.querySelector('body').addEventListener('keydown', function(event) {
    console.info( event.keyCode );
    if (event.keyCode == 38){
    	//camx+=2;
    	//camera.position.set(camx, camy, camz);
    	scenez = -4;
    	scene.applyMatrix(new THREE.Matrix4().makeTranslation(scenex, sceney, scenez));
    	scenez = 0;

    }else if(event.keyCode == 40){
    	//camx-=2;
    	scenez = +4;
    	//camera.position.set(camx, camy, camz);
    	scene.applyMatrix(new THREE.Matrix4().makeTranslation(scenex, sceney, scenez));
    	scenez = 0;

    }else if(event.keyCode == 37){
    	//camy-=2;
    	sceney = 4;
    	//camera.position.set(camx, camy, camz);
    	scene.applyMatrix(new THREE.Matrix4().makeTranslation(scenex, sceney, scenez));
    	sceney =0;
    }else if(event.keyCode == 39){
    	//camy+=2;
    	sceney = -4;
    	//camera.position.set(camx, camy, camz);
  		scene.applyMatrix(new THREE.Matrix4().makeTranslation(scenex, sceney, scenez));
  		sceney = 0;
    }else if(event.keyCode == 32){
    	var car = criaCarro(cores[Math.floor(Math.random()*8)]).add(new THREE.PointLight(0xFFFFFF,1,150));
    	objectsMove.push(car);
    	carSentido.push(car);
    }
    renderer.render(scene, camera);

});
}
main();

