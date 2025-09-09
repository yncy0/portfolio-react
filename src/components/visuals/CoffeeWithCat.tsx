import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import degreeToRadians from "@/utils/degreeToRadians";

export default function CoffeeWithCat() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let camera: THREE.PerspectiveCamera;
    let scene: THREE.Scene;
    let renderer: THREE.WebGLRenderer;
    let ambientLight: THREE.AmbientLight;
    let directionalLight: THREE.DirectionalLight;
    let mixer: THREE.AnimationMixer;
    const clock = new THREE.Clock();

    function init() {
      if (!containerRef.current) return;

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        100
      );
      camera.position.set(0, 2, 13);

      ambientLight = new THREE.AmbientLight(0xffffff, 1);
      directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      directionalLight.position.set(0, 5, 5);

      scene.add(camera, ambientLight, directionalLight);

      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
      renderer.setPixelRatio(window.devicePixelRatio);

      containerRef.current.appendChild(renderer.domElement);

      loadGLTF();
    }

    function loadGLTF() {
      const gltfLoader = new GLTFLoader();
      const url: string = "/models/coffee_with_cat.glb";

      gltfLoader.load(url, (gltf) => {
        const mesh = gltf.scene;
        mesh.rotation.set(
          degreeToRadians(35),
          degreeToRadians(-10),
          degreeToRadians(10)
        );
        scene.add(mesh);

        const animations = gltf.animations;
        mixer = new THREE.AnimationMixer(mesh);
        const action = mixer.clipAction(animations[0]);
        action.play();

        renderer.setAnimationLoop(animate);
      });
    }

    function animate() {
      const mixerUpdateDelta = clock.getDelta();
      if (mixer) mixer.update(mixerUpdateDelta);
      renderer.render(scene, camera);
    }

    function onWindowResize() {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    init();

    window.addEventListener("resize", onWindowResize);
    return () => {
      window.removeEventListener("resize", onWindowResize);
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full lg:w-1/2 max-w-screen h-[480px] lg:h-dvh relative"
    />
  );
}

