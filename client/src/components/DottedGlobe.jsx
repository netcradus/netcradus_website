import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const DottedGlobe = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;

    if (!container) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 🔥 RESPONSIVE SIZE HANDLER
    const resize = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      if (!width || !height) return;

      renderer.setSize(width, height);
      camera.aspect = width / height;

      // 👇 MOBILE ZOOM FIX
      if (width < 500) {
        camera.position.z = 6.5;
      } else {
        camera.position.z = 5;
      }

      camera.updateProjectionMatrix();
    };

    // ---------------- GLOBE ----------------
    const isMobile = window.innerWidth < 500;

    const radius = 2;
    const dotsCount = isMobile ? 2500 : 4000;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(dotsCount * 3);
    const colors = new Float32Array(dotsCount * 3);

    const c1 = new THREE.Color(0xe8400a);
    const c2 = new THREE.Color(0xff5520);

    for (let i = 0; i < dotsCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / dotsCount);
      const theta = Math.sqrt(dotsCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const mix = c1.clone().lerp(c2, Math.random());
      colors[i * 3] = mix.r;
      colors[i * 3 + 1] = mix.g;
      colors[i * 3 + 2] = mix.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.015 : 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const globe = new THREE.Points(geometry, material);
    scene.add(globe);

    // 🔥 CLEAN RING
    const ringGeometry = new THREE.TorusGeometry(2.2, 0.01, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xe8400a,
      transparent: true,
      opacity: 0.25,
    });

    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    scene.add(ring);

    // ---------------- ANIMATION ----------------
    const animate = () => {
      requestAnimationFrame(animate);

      globe.rotation.y += 0.002;
      globe.rotation.x += 0.0008;

      ring.rotation.x += 0.003;
      ring.rotation.y += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    // 🔥 IMPORTANT: delay resize (fixes mobile bug)
    setTimeout(resize, 100);

    // Resize observer (REAL FIX)
    const observer = new ResizeObserver(resize);
    observer.observe(container);

    window.addEventListener("resize", resize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full flex justify-center">
      
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(232,64,10,0.12),transparent_70%)] blur-3xl opacity-60" />

      {/* 🔥 FIXED RESPONSIVE CONTAINER */}
      <div
        ref={mountRef}
        className="
          w-full 
          max-w-[650px]
          h-[280px]
          sm:h-[380px]
          md:h-[500px]
          lg:h-[650px]
        "
      />
    </div>
  );
};

export default DottedGlobe;