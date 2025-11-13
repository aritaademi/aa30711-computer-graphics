// import * as THREE from 'three';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(     
//     75,  //FOV - kendi
//     window.innerWidth / window.innerHeight,  //aspect ratio
//     0.1,  //near/far plane , near z-score=0.1, gjithcka jashte keti kendi nuk do vizatohet
//     1000 
// );
// camera.position.z = 15;  //e largojme kameren, e vendosim me perpara nga ne
// //te kamera ortografike=left,right,top,bottom, near,far

// // Sphere
// const sphereGeometry = new THREE.SphereGeometry(2, 48, 48);
// const sphereMaterial = new THREE.MeshToonMaterial({ color: 0xff0000 });
// const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
// sphereMesh.position.set(0, 0, 0);
// scene.add(sphereMesh);
// // Cone
// const coneGeometry = new THREE.ConeGeometry(2, 4, 32);
// const coneMaterial = new THREE.MeshToonMaterial({ color: 0x0000ff });
// const coneMesh = new THREE.Mesh(coneGeometry, coneMaterial);
// coneMesh.position.set(6, 0, 0);
// scene.add(coneMesh);

// // Cylinder
// const cylinderGeometry = new THREE.CylinderGeometry(2, 2, 5, 32);
// const cylinderMaterial = new THREE.MeshToonMaterial({ color: 0x00ff00 });
// const cylinderMesh = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
// cylinderMesh.position.set(-6, 0, 0);
// scene.add(cylinderMesh);

// const ambientLight = new THREE.AmbientLight(0x00ff00,1);
// scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0xff0000,1);
// directionalLight.position.set(0,0,10); //pozita si camera.position.z
// scene.add(directionalLight);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );

// //document.body.appendChild( renderer.domElement );  //kjo kur nuk kemi div me id ne html, ne kete rast kemi div
// document.body.append(renderer.domElement);
// //document.getElementById("id").append();

// renderer.render(scene,camera);

import * as THREE from 'three';

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(
  75, // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near plane
  1000 // Far plane
);
camera.position.z = 15; // Move camera back a bit

// Sphere
const sphereGeometry = new THREE.SphereGeometry(2, 48, 48);
const sphereMaterial = new THREE.MeshToonMaterial({ color: 0xff0000 });
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphereMesh.position.set(0, 0, 0);
scene.add(sphereMesh);

// Cone
const coneGeometry = new THREE.ConeGeometry(2, 4, 32);
const coneMaterial = new THREE.MeshToonMaterial({ color: 0x0000ff });
const coneMesh = new THREE.Mesh(coneGeometry, coneMaterial);
coneMesh.position.set(6, 0, 0);
scene.add(coneMesh);

// Cylinder
const cylinderGeometry = new THREE.CylinderGeometry(2, 2, 5, 32);
const cylinderMaterial = new THREE.MeshToonMaterial({ color: 0x00ff00 });
const cylinderMesh = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinderMesh.position.set(-6, 0, 0);
scene.add(cylinderMesh);

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 5, 10);
scene.add(directionalLight);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Render scene once (no animation)
renderer.render(scene, camera);