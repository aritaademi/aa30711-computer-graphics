import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//FIRST OBJECT
const geometry = new THREE.BoxGeometry(2,2,2);
const material = new THREE.MeshStandardMaterial(
    {
        color: 0xff0000
    }
);
camera.position.z = 10;

const cubeMesh = new THREE.Mesh(geometry, material);
cubeMesh.position.y = 3;
scene.add(cubeMesh);

//SECOND OBJECT
const geometry2 = new THREE.ConeGeometry(2, 4, 32);
const material2 = new THREE.MeshPhongMaterial({ color: 0xff8c00 }); // orange
const cone = new THREE.Mesh(geometry2, material2);
cone.position.x = 0;
cone.position.y = -3;
scene.add(cone);

//THIRD OBJECT
const geometry3 = new THREE.OctahedronGeometry(2);
const material3 = new THREE.MeshLambertMaterial({ color: 0x1e90ff }); // blue
const octahedron = new THREE.Mesh(geometry3, material3);
octahedron.position.x = 6;
octahedron.position.y = 3;
scene.add(octahedron);


const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 3);
scene.add(light);

const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    cubeMesh.rotation.x += 0.01;
    cone.rotation.x += 0.02;
    octahedron.rotation.z += 0.015;
}
animate();

document.body.appendChild( renderer.domElement );