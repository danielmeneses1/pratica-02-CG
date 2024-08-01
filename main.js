import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/Addons.js';

// Create the scene
const scene = new THREE.Scene();

// Create the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// Create the geometry and load the UV Grid texture for the material
const geometry = new THREE.BoxGeometry(1, 1, 1);
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('https://threejs.org/examples/textures/uv_grid_opengl.jpg');
const material = new THREE.MeshStandardMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const ConeGeometry = new THREE.ConeGeometry(1, 1, 8);
const cone = new THREE.Mesh(ConeGeometry, material);
cone.position.x = 2;
scene.add(cone);

// const geometry2 = new THREE.BoxGeometry(1, 1, 1);
//const textureLoader2 = new THREE.TextureLoader();
//const texture2 = textureLoader2.load('https://threejs.org/examples/textures/uv_grid_opengl.jpg');
//const material2 = new THREE.MeshStandardMaterial({ map: texture2 });
//const cube2 = new THREE.Mesh(geometry2, material2);
//cube2.position.x = 2;
//scene.add(cube2);

//const CapsuleGeometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
//const texture3 = textureLoader2.load('https://threejs.org/examples/textures/uv_grid_opengl.jpg');
//const CapsuleMaterial = new THREE.MeshStandardMaterial({ map: texture3 });
//const capsule = new THREE.Mesh( CapsuleGeometry, CapsuleMaterial ); scene.add( capsule );
//capsule.position.x = 0;
//scene.add(capsule);

// Add lights to the scene
const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Position the camera
camera.position.z = 5;

// Create the OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Enable damping (inertia)
controls.dampingFactor = 0.25; // Damping inertia factor
controls.screenSpacePanning = false; // Do not allow panning
controls.maxPolarAngle = Math.PI / 2; // Limit vertical rotation

// Animation loop
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    controls.update(); // Required if controls.enableDamping is true, or if controls.autoRotate is true
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}