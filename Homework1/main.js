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

// Three rectangles (buildings) on the right side — spaced parallel to the trees
const buildingGeometry = new THREE.BoxGeometry(6, 0.5, 3);
const buildingMaterial = new THREE.MeshStandardMaterial({ color: 0xffd700 });

// Building 1
const building1 = new THREE.Mesh(buildingGeometry, buildingMaterial);
building1.position.set(8, 0.25, -8); // right & back
scene.add(building1);

// Building 2
const building2 = new THREE.Mesh(buildingGeometry, buildingMaterial);
building2.position.set(8, 0.25, 0); // middle
scene.add(building2);

// Building 3
const building3 = new THREE.Mesh(buildingGeometry, buildingMaterial);
building3.position.set(8, 0.25, 8); // right & front
scene.add(building3);

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

// Pond near trees
const pondGeometry = new THREE.CircleGeometry(2, 32);
const pondMaterial = new THREE.MeshStandardMaterial({ color: 0x1e90ff });
const pond = new THREE.Mesh(pondGeometry, pondMaterial);
pond.rotation.x = -Math.PI / 2;
pond.position.set(-8, 0.06, 4); // near last tree
scene.add(pond);

// Benches beside the road (right side)
function createBench(x, z) {
    // seat
    const seatGeometry = new THREE.BoxGeometry(2, 0.2, 0.6);
    const seatMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const seat = new THREE.Mesh(seatGeometry, seatMaterial);
    seat.position.set(x, 0.3, z);

    // backrest
    const backGeometry = new THREE.BoxGeometry(2, 0.7, 0.1);
    const backMaterial = new THREE.MeshStandardMaterial({ color: 0xA0522D });
    const back = new THREE.Mesh(backGeometry, backMaterial);
    back.position.set(x, 0.65, z - 0.25);

    scene.add(seat);
    scene.add(back);
}

createBench(-5, -8);
createBench(-5, 0);
createBench(-5, 8);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
