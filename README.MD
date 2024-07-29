# Prática Dois

### Trabalhando Com diversos elementos em cena e conhecendo as diferentes geometrias padrão diponiveis

O inicio da prática consiste em colocar mais objetos na cena renderizada pelo THREE.JS

no inicio, teremos apenas um codigo bastante parcido com o que vimos na primeira prática, apenas com algumas diferenças
```javascript

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

    controls.update();
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

```

este codigo contém apenas mais algumas propriedades que não vem ao caso nessa aula.


## Capsule Geometry


CapsuleGeometry é uma classe em Three.js usada para criar uma geometria de cápsula, que é basicamente um cilindro com hemisférios em cada extremidade. Essa geometria pode ser útil para representar objetos com essa forma específica, como pílulas ou alguns tipos de sensores.

O construtor da classe é definido assim:

```javascript
CapsuleGeometry(radius : Float, length : Float, capSegments : Integer, radialSegments : Integer)
```

* radius (Raio da cápsula): Define o raio das extremidades arredondadas da cápsula. Opcional, o padrão é 1.
* length (Comprimento da seção do meio): Define o comprimento da seção cilíndrica no meio da cápsula. Opcional, o padrão é 1.
* capSegments (Segmentos das tampas): Define o número de segmentos curvos usados para construir as extremidades arredondadas da cápsula. Opcional, o padrão é 4.
* radialSegments (Segmentos radiais): Define o número de faces segmentadas ao redor da circunferência da cápsula. Opcional, o padrão é 8.