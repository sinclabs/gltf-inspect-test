const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Instantiate a loader
const loader = new THREE.GLTFLoader();

// Optional: Provide a DRACOLoader instance to decode compressed mesh data
const dracoLoader = new THREE.DRACOLoader();
dracoLoader.setDecoderPath('/examples/js/libs/draco/');
loader.setDRACOLoader(dracoLoader);

// Load a glTF resource
loader.load(
    // resource URL
    'models/Bjorn.glb',
    // called when the resource is loaded
    function (gltf) {
        scene.add(gltf.scene);

        // gltf.animations; // Array<THREE.AnimationClip>
        // gltf.scene; // THREE.Group
        // gltf.scenes; // Array<THREE.Group>
        // gltf.cameras; // Array<THREE.Camera>
        // gltf.asset; // Object
    },
    function (xhr) { console.log((xhr.loaded / xhr.total * 100) + '% loaded') },
    function (error) { console.log('An error happened:', error) }
);

camera.position.z = 5;

const animate = function () {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
};

animate();