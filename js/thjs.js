var scene;
var camera;
var render;
var container;
var width;
var height;
var t=0;
setTimeout( main, 200);
function main()
{

	width=800;
	height=500;

	console.log(width);
	console.log(height);
	container= document.getElementById("graph");
	container.style.height=height+"px";
	container.style.width=width+"px";
	document.body.appendChild(container);

	camera =new THREE.PerspectiveCamera(50,width/height,1,100000000);
	camera.position.z=50000;
	scene=new THREE.Scene();

	//SUN

	var sun,sun_geom,sun_mat;

	sun_geom=new THREE.SphereGeometry(13926.84,100,100);
	var loader=new THREE.TextureLoader();
	var texture=loader.load('earth.jpg');
	sun_mat=new THREE.MeshBasicMaterial({map:texture,emissive:0xffffff});
	console.log(loader);
	
	sun=new THREE.Mesh(sun_geom,sun_mat);
	scene.add(sun);



	// Earth

	var earth, earth_geom,earth_mat;
	earth_geom=new THREE.SphereGeometry(63.71,20,20);
	earth_mat=new THREE.MeshNormalMaterial();
	earth=new THREE.Mesh(earth_geom,earth_mat);
	earth.position.x=1500000;
	scene.add(earth);


	render=new THREE.WebGLRenderer();
	render.setSize(width,height);
	container.appendChild(render.domElement);
	animate();

	container.addEventListener('mousewheel',zoom);
	container.addEventListener('contextmenu',leftclick);
	container.addEventListener('mousedown',drag);
	container.addEventListener('mousemove',movemouse);
	

	var y=0;
	var x=0;

	var starsGeometry=new THREE.Geometry();
	var starsMaterial=new THREE.PointsMaterial({color:0xe6e6fa,size:1,sizeAttenuation:false});
	var stars;
	for(var i=0;i<5000;i++)
	{
		var vertex=new THREE.Vector3();
		vertex.x=Math.random()*2-1;
		vertex.y=Math.random()*2-1;
		vertex.z=Math.random()*2-1;

		vertex.multiplyScalar(100000000);
		starsGeometry.vertices.push(vertex);
	}

	stars=new THREE.Points(starsGeometry,starsMaterial);
	stars.scale.set(100,100,100);
	scene.add(stars);

	sun.addEventListener('mouseover',function(){console.log("earth");});

	function zoom(e)
	{
		e.preventDefault();
		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		camera.position.z=camera.position.z-camera.position.z*delta*0.05;
		console.log(camera.position.z);
	}
	function leftclick(e)
	{
		  e.preventDefault();
		   return false;
	}
	function movemouse(e)
	{
		y=parseInt(e.offsetY);
		x=parseInt(e.offsetX);
	}
	function drag()
	{

	}

	

	function animate()
	{
	requestAnimationFrame(animate);

	
	sun.rotation.y+=0.01;
	earth.position.x=Math.sin(t*0.1)*1500000;
	earth.position.z=Math.cos(t*0.1)*1500000;

	camera.position.y=0;
	camera.position.x=0;
	camera.position.z=100000;

	//camera.rotation.z+=0.01;

	//camera.position.x=earth.position.x;
	//camera.position.z=earth.position.z;
	//camera.lookAt(sun.position);
	t+=Math.PI/180*2;


	render.render(scene,camera);
	}
}