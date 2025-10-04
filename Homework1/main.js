import * as THREE from 'three';

// Scene and Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 10, 20);
camera.lookAt(0, 0, 0);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 15, 10);
scene.add(light);

// Ground (green grass)
const groundGeometry = new THREE.PlaneGeometry(40, 40);
const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x228b22 });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2; // flat horizontal
scene.add(ground);

// Road (gray rectangle)
const roadGeometry = new THREE.BoxGeometry(4, 0.1, 30);
const roadMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
const road = new THREE.Mesh(roadGeometry, roadMaterial);
road.position.y = 0.05;
scene.add(road);

// Two rectangles (buildings) on the right side
const buildingGeometry = new THREE.BoxGeometry(4, 0.3, 2);  // width=4, height=0.3, depth=2
const buildingMaterial = new THREE.MeshStandardMaterial({ color: 0xffd700 });

const building1 = new THREE.Mesh(buildingGeometry, buildingMaterial);
building1.position.set(5, 0.15, -5); // slightly above the ground
scene.add(building1);

const building2 = new THREE.Mesh(buildingGeometry, buildingMaterial);
building2.scale.set(1.2, 1, 1); // slightly wider
building2.position.set(5, 3, 5);
scene.add(building2);

// Trees (simple cone + cylinder)
const treeTrunkGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1.5);
const treeTrunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
const treeTopGeometry = new THREE.ConeGeometry(1, 2, 8);
const treeTopMaterial = new THREE.MeshStandardMaterial({ color: 0x006400 });

function createTree(x, z) {
    const trunk = new THREE.Mesh(treeTrunkGeometry, treeTrunkMaterial);
    const top = new THREE.Mesh(treeTopGeometry, treeTopMaterial);
    trunk.position.set(x, 0.75, z);
    top.position.set(x, 2, z);
    scene.add(trunk);
    scene.add(top);
}

// 3 trees on the right of the road
createTree(-8, -8);
createTree(-8, 0);
createTree(-8, 8);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
