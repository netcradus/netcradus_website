import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const DottedGlobe = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    const width = 600;
    const height = 600;
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Globe parameters
    const radius = 2;
    const dotsCount = 4000;
    const dotSize = 0.02;

    // Create points
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(dotsCount * 3);
    const colors = new Float32Array(dotsCount * 3);

    const accentColor = new THREE.Color(0xe8400a); // Brand orange
    const secondaryColor = new THREE.Color(0xff5520);

    for (let i = 0; i < dotsCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / dotsCount);
        const theta = Math.sqrt(dotsCount * Math.PI) * phi;

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        const mixedColor = accentColor.clone().lerp(secondaryColor, Math.random());
        colors[i * 3] = mixedColor.r;
        colors[i * 3 + 1] = mixedColor.g;
        colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: dotSize,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
    });

    const globe = new THREE.Points(geometry, material);
    scene.add(globe);

    // Add scanning rings
    const ringGeometry = new THREE.RingGeometry(2.1, 2.12, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xe8400a, transparent: true, opacity: 0.2, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);

    camera.position.z = 4.5;

    // Animation
    const animate = () => {
        requestAnimationFrame(animate);
        globe.rotation.y += 0.002;
        globe.rotation.x += 0.001;
        
        ring.rotation.z += 0.005;
        ring.scale.set(1 + Math.sin(Date.now() * 0.001) * 0.05, 1 + Math.sin(Date.now() * 0.001) * 0.05, 1);
        
        renderer.render(scene, camera);
    };

    animate();

    // Resize handler (optional since size is fixed at 600)
    // For luxury feel, we keep a consistent large presence

    return () => {
        if (mountRef.current) {
            mountRef.current.removeChild(renderer.domElement);
        }
        geometry.dispose();
        material.dispose();
        renderer.dispose();
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center overflow-visible">
        {/* Luxury Glow Background */}
        <div className="absolute inset-0 bg-radial-gradient(circle, rgba(232, 64, 10, 0.1) 0%, transparent 70%) blur-3xl opacity-50" />
        <div ref={mountRef} className="z-10" style={{ width: '600px', height: '600px' }} />
        
        {/* Floating Accents */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-accent/20 rounded-full animate-pulse-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-accent/10 rounded-full animate-spin-slow opacity-30" style={{ borderStyle: 'dashed' }} />
        </div>
    </div>
  );
};

export default DottedGlobe;
