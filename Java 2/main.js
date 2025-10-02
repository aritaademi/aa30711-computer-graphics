import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(     
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000 
);
camera.position.z = 10;

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial(
    {
        color:0xff0000
    }
);

const cubeMesh = new THREE.Mesh(geometry, material);
scene.add(cubeMesh);

// const sphereGeometry = new THREE.SphereGeometry(1,32,32);
const sphereGeometry = new THREE.SphereGeometry(1,16,16);
const sphereMaterial = new THREE.MeshStandardMaterial(
    {
        color:0xffff00,
        wireframe: true
    }
);

const sphereMesh = new THREE.Mesh(sphereGeometry,sphereMaterial);
scene.add(sphereMesh);

const coneGeometry = new THREE.ConeGeometry(2,4,32);
const coneMaterial = new THREE.MeshStandardMaterial(
    {
        color: 0xff8c00 
    }
)
const coneMesh = new THREE.Mesh(coneGeometry,coneMaterial);
coneMesh.position.x = 0;
coneMesh.position.y = -4;
scene.add(coneMesh);

const torusGeometry = new THREE.TorusGeometry(1.5,0.4,16 );
const torusMaterial = new THREE.MeshStandardMaterial(
    {
        color: 0xffff00
    }
)
const torusMesh = new THREE.Mesh(torusGeometry,torusMaterial);
torusMesh.position.x = -5;
torusMesh.position.y = -4;
scene.add(torusMesh);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 3);
scene.add(light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

cubeMesh.translateX(-3);
sphereMesh.position.set(3,2,4);

// Sphere movement variables
let sphereSpeed = 0.05;       // speed per frame
let sphereMinX = -6;          // left limit
let sphereMaxX = 6;           // right limit

function animate()
{
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    // Move sphere
    sphereMesh.position.x += sphereSpeed;

    // Check boundaries and reverse direction
    if (sphereMesh.position.x > sphereMaxX || sphereMesh.position.x < sphereMinX) {
        sphereSpeed = -sphereSpeed;  // flip direction
    }

    //cubeMesh.rotation.x += 0.01;
    cubeMesh.rotation.y += 0.01;
    coneMesh.rotation.x += 0.02;
    torusMesh.rotation.x += 0.01;
}

animate();

document.body.appendChild( renderer.domElement );