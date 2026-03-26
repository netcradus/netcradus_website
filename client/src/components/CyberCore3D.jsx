import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CyberCore3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    // ═══ SCENE ═══
    const scene = new THREE.Scene();

    // ═══ CAMERA — pulled back so everything fits ═══
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 7.5);
    camera.lookAt(0, 0, 0);

    // ═══ RENDERER ═══
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // ═══ THEME ═══
    let isDark = document.documentElement.getAttribute('data-theme') !== 'light';

    // ═══ LIGHTING ═══
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.3 : 1.0);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffe0c8, isDark ? 2.8 : 2.2);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x8090aa, isDark ? 0.5 : 0.9);
    fillLight.position.set(-4, 2, 3);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xe8400a, isDark ? 4.0 : 2.0, 15);
    rimLight.position.set(0, -2, -5);
    scene.add(rimLight);

    const accentLight = new THREE.PointLight(0xff5520, isDark ? 2.5 : 1.2, 12);
    accentLight.position.set(3, 3, -2);
    scene.add(accentLight);

    const frontFill = new THREE.PointLight(0xffffff, isDark ? 0.5 : 1.0, 15);
    frontFill.position.set(0, 0, 6);
    scene.add(frontFill);

    // ═══ GLOW TEXTURES ═══
    const makeGlowTex = (inner, mid, outer) => {
      const c = document.createElement('canvas');
      c.width = 256; c.height = 256;
      const ctx = c.getContext('2d');
      const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      g.addColorStop(0, inner);
      g.addColorStop(0.25, mid);
      g.addColorStop(0.6, outer);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 256, 256);
      return new THREE.CanvasTexture(c);
    };

    const coreGlowTex = makeGlowTex(
      'rgba(255,85,32,0.9)', 'rgba(232,64,10,0.4)', 'rgba(232,64,10,0.08)'
    );
    const nodeGlowTex = makeGlowTex(
      'rgba(255,85,32,0.8)', 'rgba(255,85,32,0.3)', 'rgba(255,85,32,0.0)'
    );

    // ═══ MAIN GROUP ═══
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // ────── 1. INNER ENERGY CORE ──────
    const coreGeo = new THREE.SphereGeometry(0.3, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0xff6030 : 0xe8400a,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(core);

    // Core glow
    const coreGlowMat = new THREE.SpriteMaterial({
      map: coreGlowTex, transparent: true,
      opacity: isDark ? 0.9 : 0.55,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const coreGlow = new THREE.Sprite(coreGlowMat);
    coreGlow.scale.set(3, 3, 1);
    mainGroup.add(coreGlow);

    // Outer ambient glow
    const outerGlowMat = new THREE.SpriteMaterial({
      map: coreGlowTex, transparent: true,
      opacity: isDark ? 0.25 : 0.12,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const outerGlow = new THREE.Sprite(outerGlowMat);
    outerGlow.scale.set(5, 5, 1);
    mainGroup.add(outerGlow);

    // ────── 2. MIDDLE SPHERE ──────
    const midGeo = new THREE.IcosahedronGeometry(0.85, 5);
    const midMat = new THREE.MeshPhysicalMaterial({
      color: isDark ? 0x1c1c30 : 0xece5d8,
      metalness: isDark ? 0.95 : 0.1,
      roughness: isDark ? 0.1 : 0.3,
      clearcoat: 1.0, clearcoatRoughness: 0.05,
      reflectivity: 1.0, envMapIntensity: 1.5,
    });
    const midSphere = new THREE.Mesh(midGeo, midMat);
    mainGroup.add(midSphere);

    // ────── 3. WIREFRAME GEODESIC ──────
    const wireGeo = new THREE.IcosahedronGeometry(1.0, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0xe8400a : 0xb32d00,
      wireframe: true, transparent: true,
      opacity: isDark ? 0.22 : 0.12,
    });
    const wireShell = new THREE.Mesh(wireGeo, wireMat);
    mainGroup.add(wireShell);

    // ────── 4. GLASS OUTER SHELL ──────
    const glassGeo = new THREE.IcosahedronGeometry(1.15, 3);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: isDark ? 0x444455 : 0xffffff,
      metalness: 0.0, roughness: 0.0,
      transmission: 0.95, thickness: 0.5, ior: 1.45,
      transparent: true, opacity: isDark ? 0.07 : 0.05,
      side: THREE.FrontSide, depthWrite: false,
    });
    const glassShell = new THREE.Mesh(glassGeo, glassMat);
    mainGroup.add(glassShell);

    // ────── 5. ORBITAL RINGS (contained sizes) ──────
    const rings = [];
    const ringDefs = [
      { radius: 1.4, tube: 0.018, tiltX: Math.PI * 0.48, tiltY: 0, tiltZ: 0.3, speed: 0.25 },
      { radius: 1.65, tube: 0.013, tiltX: Math.PI * 0.52, tiltY: 0.7, tiltZ: -0.4, speed: -0.18 },
      { radius: 1.95, tube: 0.008, tiltX: 1.1, tiltY: 0, tiltZ: 0.8, speed: 0.12 },
    ];

    ringDefs.forEach((def, i) => {
      const geo = new THREE.TorusGeometry(def.radius, def.tube, 24, 128);
      const mat = new THREE.MeshStandardMaterial({
        color: isDark ? 0xe8400a : 0xc43000,
        emissive: isDark ? 0xe8400a : 0xb32d00,
        emissiveIntensity: isDark ? 2.5 : 1.0,
        metalness: 0.9, roughness: 0.15,
        transparent: true,
        opacity: isDark ? [0.9, 0.7, 0.5][i] : [0.65, 0.5, 0.35][i],
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.set(def.tiltX, def.tiltY, def.tiltZ);
      mainGroup.add(mesh);
      rings.push({ mesh, mat, def });
    });

    // ────── 6. ORBITING NODES ──────
    const orbitNodes = [];
    const nodeDefs = [
      { ringIdx: 0, phase: 0, size: 0.04 },
      { ringIdx: 0, phase: Math.PI, size: 0.03 },
      { ringIdx: 0, phase: Math.PI * 0.65, size: 0.025 },
      { ringIdx: 1, phase: 0.5, size: 0.045 },
      { ringIdx: 1, phase: 2.8, size: 0.028 },
      { ringIdx: 2, phase: 1.0, size: 0.035 },
      { ringIdx: 2, phase: 3.5, size: 0.025 },
    ];

    nodeDefs.forEach(nd => {
      const nodeGeo = new THREE.SphereGeometry(nd.size, 12, 12);
      const nodeMat = new THREE.MeshBasicMaterial({ color: 0xff5520 });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      mainGroup.add(node);

      const nGlowMat = new THREE.SpriteMaterial({
        map: nodeGlowTex, transparent: true,
        opacity: isDark ? 0.6 : 0.3,
        blending: THREE.AdditiveBlending, depthWrite: false,
      });
      const nGlow = new THREE.Sprite(nGlowMat);
      nGlow.scale.set(0.35, 0.35, 1);
      node.add(nGlow);

      orbitNodes.push({ mesh: node, ...nd, glowMat: nGlowMat });
    });

    // ────── 7. PARTICLES (contained spread) ──────
    const pCount = 800;
    const pPos = new Float32Array(pCount * 3);
    const pCol = new Float32Array(pCount * 3);
    const pVel = new Float32Array(pCount * 3);
    const pal = [0xe8400a, 0xff5520, 0xff8040, 0xffb070];

    for (let i = 0; i < pCount; i++) {
      const r = 1.3 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pPos[i * 3 + 2] = r * Math.cos(phi);
      pVel[i * 3] = (Math.random() - 0.5) * 0.0008;
      pVel[i * 3 + 1] = (Math.random() - 0.5) * 0.0008;
      pVel[i * 3 + 2] = (Math.random() - 0.5) * 0.0008;
      const c = new THREE.Color(pal[Math.floor(Math.random() * pal.length)]);
      pCol[i * 3] = c.r;
      pCol[i * 3 + 1] = c.g;
      pCol[i * 3 + 2] = c.b;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3));

    const pMat = new THREE.PointsMaterial({
      size: isDark ? 0.02 : 0.015,
      vertexColors: true, transparent: true,
      opacity: isDark ? 0.6 : 0.35,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true, depthWrite: false,
    });
    const particles = new THREE.Points(pGeo, pMat);
    mainGroup.add(particles);

    // ────── 8. ENERGY ARCS (smaller radius) ──────
    const arcs = [];
    const arcDefs = [
      { start: 0, len: Math.PI * 0.7, r: 1.2, y: 0.18, t: 0.007 },
      { start: Math.PI, len: Math.PI * 0.5, r: 1.25, y: -0.12, t: 0.005 },
      { start: Math.PI * 0.5, len: Math.PI * 0.6, r: 1.35, y: 0.06, t: 0.005 },
    ];

    arcDefs.forEach(ad => {
      const pts = Array.from({ length: 30 }, (_, i) => {
        const angle = ad.start + (i / 29) * ad.len;
        return new THREE.Vector3(
          Math.cos(angle) * ad.r,
          ad.y + Math.sin(angle * 3) * 0.08,
          Math.sin(angle) * ad.r
        );
      });
      const curve = new THREE.CatmullRomCurve3(pts);
      const geo = new THREE.TubeGeometry(curve, 30, ad.t, 8, false);
      const mat = new THREE.MeshBasicMaterial({
        color: isDark ? 0xff5520 : 0xe8400a,
        transparent: true, opacity: isDark ? 0.5 : 0.25,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mainGroup.add(mesh);
      arcs.push({ mesh, mat });
    });

    // ────── 9. CONNECTION LINES ──────
    const connLines = [];
    orbitNodes.forEach(() => {
      const lGeo = new THREE.BufferGeometry();
      lGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
      const lMat = new THREE.LineBasicMaterial({
        color: isDark ? 0xe8400a : 0xc43000,
        transparent: true, opacity: isDark ? 0.08 : 0.04,
      });
      const line = new THREE.Line(lGeo, lMat);
      mainGroup.add(line);
      connLines.push({ line, geo: lGeo, mat: lMat });
    });

    // ────── 10. SCAN RING ──────
    const scanGeo = new THREE.RingGeometry(1.0, 2.2, 64, 1);
    const scanMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0xe8400a : 0xd63500,
      transparent: true, opacity: 0.03,
      side: THREE.DoubleSide, depthWrite: false,
    });
    const scanRing = new THREE.Mesh(scanGeo, scanMat);
    scanRing.rotation.x = Math.PI / 2;
    mainGroup.add(scanRing);

    // ═══════════════════════════════════
    // THEME OBSERVER
    // ═══════════════════════════════════
    const applyTheme = () => {
      isDark = document.documentElement.getAttribute('data-theme') !== 'light';

      coreMat.color.setHex(isDark ? 0xff6030 : 0xe8400a);
      coreGlowMat.opacity = isDark ? 0.9 : 0.55;
      outerGlowMat.opacity = isDark ? 0.25 : 0.12;

      midMat.color.setHex(isDark ? 0x1c1c30 : 0xece5d8);
      midMat.metalness = isDark ? 0.95 : 0.1;
      midMat.roughness = isDark ? 0.1 : 0.3;

      wireMat.color.setHex(isDark ? 0xe8400a : 0xb32d00);
      wireMat.opacity = isDark ? 0.22 : 0.12;

      glassMat.color.setHex(isDark ? 0x444455 : 0xffffff);
      glassMat.opacity = isDark ? 0.07 : 0.05;

      rings.forEach((r, i) => {
        r.mat.color.setHex(isDark ? 0xe8400a : 0xc43000);
        r.mat.emissive.setHex(isDark ? 0xe8400a : 0xb32d00);
        r.mat.emissiveIntensity = isDark ? 2.5 : 1.0;
        r.mat.opacity = isDark ? [0.9, 0.7, 0.5][i] : [0.65, 0.5, 0.35][i];
      });

      orbitNodes.forEach(n => { n.glowMat.opacity = isDark ? 0.6 : 0.3; });
      pMat.size = isDark ? 0.02 : 0.015;
      pMat.opacity = isDark ? 0.6 : 0.35;
      arcs.forEach(a => {
        a.mat.color.setHex(isDark ? 0xff5520 : 0xe8400a);
        a.mat.opacity = isDark ? 0.5 : 0.25;
      });
      scanMat.color.setHex(isDark ? 0xe8400a : 0xd63500);
      connLines.forEach(cl => {
        cl.mat.color.setHex(isDark ? 0xe8400a : 0xc43000);
        cl.mat.opacity = isDark ? 0.08 : 0.04;
      });

      ambientLight.intensity = isDark ? 0.3 : 1.0;
      keyLight.intensity = isDark ? 2.8 : 2.2;
      fillLight.intensity = isDark ? 0.5 : 0.9;
      rimLight.intensity = isDark ? 4.0 : 2.0;
      accentLight.intensity = isDark ? 2.5 : 1.2;
      frontFill.intensity = isDark ? 0.5 : 1.0;
    };

    const themeObs = new MutationObserver(applyTheme);
    themeObs.observe(document.documentElement, {
      attributes: true, attributeFilter: ['data-theme'],
    });

    // ═══ MOUSE ═══
    let mx = 0, my = 0;
    const onMouse = (e) => {
      const rect = container.getBoundingClientRect();
      mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouse);

    // ═══ ANIMATE ═══
    let frameId;
    const clock = new THREE.Clock();
    const euler = new THREE.Euler();
    const vec = new THREE.Vector3();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Core pulse
      core.scale.setScalar(1 + Math.sin(t * 2) * 0.05);
      coreGlow.scale.setScalar(2.8 + Math.sin(t * 1.5) * 0.3);
      coreGlowMat.opacity = (isDark ? 0.9 : 0.55) + Math.sin(t * 2.5) * 0.08;

      // Sphere rotation
      midSphere.rotation.y = t * 0.1;
      midSphere.rotation.x = t * 0.05;
      wireShell.rotation.y = -t * 0.08;
      wireShell.rotation.z = t * 0.04;
      glassShell.rotation.y = t * 0.025;

      // Rings
      rings.forEach(r => {
        r.mesh.rotation.z = r.def.tiltZ + t * r.def.speed;
      });

      // Orbiting nodes
      orbitNodes.forEach((n, i) => {
        const rd = ringDefs[n.ringIdx];
        const angle = n.phase + t * rd.speed * 2;

        const lx = Math.cos(angle) * rd.radius;
        const ly = Math.sin(angle) * rd.radius;

        euler.set(rd.tiltX, rd.tiltY, rd.tiltZ + t * rd.speed);
        vec.set(lx, ly, 0).applyEuler(euler);

        n.mesh.position.copy(vec);
        n.mesh.scale.setScalar(0.85 + Math.sin(t * 3 + n.phase) * 0.2);

        // Connection line
        if (connLines[i]) {
          const pa = connLines[i].geo.attributes.position;
          pa.setXYZ(0, 0, 0, 0);
          pa.setXYZ(1, vec.x, vec.y, vec.z);
          pa.needsUpdate = true;
          connLines[i].mat.opacity = (isDark ? 0.05 : 0.03) + Math.sin(t * 2 + i) * 0.02;
        }
      });

      // Particles
      const pa = pGeo.attributes.position.array;
      for (let i = 0; i < pCount; i++) {
        pa[i*3] += pVel[i*3];
        pa[i*3+1] += pVel[i*3+1];
        pa[i*3+2] += pVel[i*3+2];
        const d = Math.sqrt(pa[i*3]**2 + pa[i*3+1]**2 + pa[i*3+2]**2);
        if (d > 2.8 || d < 1.2) {
          pVel[i*3] *= -1;
          pVel[i*3+1] *= -1;
          pVel[i*3+2] *= -1;
        }
      }
      pGeo.attributes.position.needsUpdate = true;

      // Arcs
      arcs.forEach((a, i) => {
        a.mat.opacity = (isDark ? 0.3 : 0.15) + Math.sin(t * 2.5 + i * 1.5) * 0.2;
      });

      // Scan sweep
      scanRing.position.y = Math.sin(t * 0.7) * 1.0;
      scanMat.opacity = 0.015 + Math.abs(Math.sin(t * 0.7)) * (isDark ? 0.035 : 0.02);

      // Mouse
      camera.position.x += (mx * 0.8 - camera.position.x) * 0.01;
      camera.position.y += (0.2 - my * 0.4 - camera.position.y) * 0.01;
      camera.lookAt(0, 0, 0);

      // Float
      mainGroup.position.y = Math.sin(t * 0.5) * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    // ═══ RESIZE ═══
    const onResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // ═══ CLEANUP ═══
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouse);
      themeObs.disconnect();
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      scene.traverse(obj => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
          else obj.material.dispose();
        }
      });
      renderer.dispose();
      coreGlowTex.dispose();
      nodeGlowTex.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      style={{ minHeight: '500px' }}
    />
  );
};

export default CyberCore3D;
