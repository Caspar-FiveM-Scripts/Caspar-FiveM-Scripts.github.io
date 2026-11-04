/**
 * CASPAR FIVEM SCRIPTS - 3D WEBGL SERVER CORE SCENE
 * - Sleek, metallic Server Chassis in the center (NO weird floating pipe lines)
 * - MASSIVE, EPIC ELECTRIC LIGHTNING BOLTS (Multi-branching, huge screen-wide arcs & strobe flashes)
 * - Top Flame Furnace & flashing server blade LEDs
 * - Concentric Brushed Metal Dials & Hex Bolts
 * - Calm, clean ambient atmospheric particles
 */

(function () {
  'use strict';

  const canvas = document.getElementById('webgl-canvas');
  if (!canvas) return;

  // Scene & Fog
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x06080d, 0.002);

  const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 4, 82);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.3;

  const masterGroup = new THREE.Group();
  scene.add(masterGroup);

  // Exact Brand Colors from the Logo
  const COLOR_ORANGE = 0xff6600;
  const COLOR_AMBER = 0xff9900;
  const COLOR_CYAN = 0x00f3ff;
  const COLOR_WHITE = 0xffffff;
  const COLOR_METAL_DARK = 0x0e131d;
  const COLOR_METAL_CHROME = 0x94a3b8;
  const COLOR_METAL_RIM = 0x334155;

  // ----------------------------------------------------
  // 1. LIGHTING
  // ----------------------------------------------------
  const ambientLight = new THREE.AmbientLight(0x0a101b, 2.2);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
  dirLight.position.set(10, 40, 50);
  scene.add(dirLight);

  // Left Flame Glow
  const lightOrange = new THREE.PointLight(COLOR_ORANGE, 3.8, 90);
  lightOrange.position.set(-28, 6, 20);
  scene.add(lightOrange);

  // Right Cyber Circuit Glow
  const lightCyan = new THREE.PointLight(COLOR_CYAN, 3.8, 90);
  lightCyan.position.set(28, -6, 20);
  scene.add(lightCyan);

  // Top Exhaust Furnace Glow
  const topExhaustLight = new THREE.PointLight(COLOR_AMBER, 3.0, 45);
  topExhaustLight.position.set(0, 15, 2);
  scene.add(topExhaustLight);

  // Massive Lightning Flash Light (Dynamic Strobe on Arc Strike)
  const lightningLight = new THREE.PointLight(COLOR_CYAN, 0, 220);
  lightningLight.position.set(20, 20, 40);
  scene.add(lightningLight);

  // ----------------------------------------------------
  // 2. CENTRAL 3D SERVER TOWER (Clean & High-Tech - NO STRANGE LINES)
  // ----------------------------------------------------
  const serverGroup = new THREE.Group();
  masterGroup.add(serverGroup);

  const chassisWidth = 11;
  const chassisHeight = 24;
  const chassisDepth = 11;

  // Main Heavy Server Chassis
  const chassisGeo = new THREE.BoxGeometry(chassisWidth, chassisHeight, chassisDepth);
  const chassisMat = new THREE.MeshStandardMaterial({
    color: COLOR_METAL_DARK,
    metalness: 0.9,
    roughness: 0.2,
  });
  const serverChassis = new THREE.Mesh(chassisGeo, chassisMat);
  serverGroup.add(serverChassis);

  // Metallic Chamfer Edge Outlines
  const chassisEdges = new THREE.EdgesGeometry(chassisGeo);
  const chassisLineMat = new THREE.LineBasicMaterial({
    color: 0x475569,
    transparent: true,
    opacity: 0.7,
  });
  const chassisLines = new THREE.LineSegments(chassisEdges, chassisLineMat);
  serverGroup.add(chassisLines);

  // Top Exhaust Furnace (Chimney on top of the server)
  const furnaceGeo = new THREE.CylinderGeometry(3.6, 4.4, 5, 18);
  const furnaceMat = new THREE.MeshStandardMaterial({
    color: 0x121826,
    metalness: 0.95,
    roughness: 0.15,
  });
  const furnaceMesh = new THREE.Mesh(furnaceGeo, furnaceMat);
  furnaceMesh.position.y = chassisHeight / 2 + 2.5;
  serverGroup.add(furnaceMesh);

  // Heat Vent / Reactor Core inside the Chimney
  const heatCoreGeo = new THREE.CylinderGeometry(2.8, 3.2, 5.2, 18);
  const heatCoreMat = new THREE.MeshBasicMaterial({
    color: COLOR_ORANGE,
    wireframe: true,
    transparent: true,
    opacity: 0.95,
  });
  const heatCoreMesh = new THREE.Mesh(heatCoreGeo, heatCoreMat);
  heatCoreMesh.position.y = chassisHeight / 2 + 2.5;
  serverGroup.add(heatCoreMesh);

  // Front Server Blades & Dual-Color Status LEDs
  const ledGroup = new THREE.Group();
  serverGroup.add(ledGroup);

  const slotCount = 10;
  const ledMeshes = [];
  for (let i = 0; i < slotCount; i++) {
    const yPos = -8.5 + i * 1.9;

    // Server Bay Grill Plate
    const grillGeo = new THREE.BoxGeometry(8.6, 0.45, 0.6);
    const grillMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.9,
      roughness: 0.25,
    });
    const grill = new THREE.Mesh(grillGeo, grillMat);
    grill.position.set(0, yPos, chassisDepth / 2 + 0.15);
    ledGroup.add(grill);

    // Left LED (Reactor Orange)
    const ledOGeo = new THREE.BoxGeometry(1.4, 0.45, 0.7);
    const ledOMat = new THREE.MeshBasicMaterial({ color: COLOR_ORANGE });
    const ledO = new THREE.Mesh(ledOGeo, ledOMat);
    ledO.position.set(-2.8, yPos, chassisDepth / 2 + 0.22);
    ledGroup.add(ledO);
    ledMeshes.push({ mesh: ledO, baseColor: COLOR_ORANGE });

    // Right LED (Cyber Cyan)
    const ledCGeo = new THREE.BoxGeometry(1.4, 0.45, 0.7);
    const ledCMat = new THREE.MeshBasicMaterial({ color: COLOR_CYAN });
    const ledC = new THREE.Mesh(ledCGeo, ledCMat);
    ledC.position.set(2.8, yPos, chassisDepth / 2 + 0.22);
    ledGroup.add(ledC);
    ledMeshes.push({ mesh: ledC, baseColor: COLOR_CYAN });
  }

  // ----------------------------------------------------
  // 3. CONCENTRIC MECHANICAL DIAL RINGS & BOLTS (Clean Base)
  // ----------------------------------------------------
  const dialsGroup = new THREE.Group();
  dialsGroup.position.y = -13;
  dialsGroup.rotation.x = Math.PI / 2.3;
  masterGroup.add(dialsGroup);

  // Inner Base Ring with Brushed Metal
  const innerRingGeo = new THREE.RingGeometry(16, 17.5, 64);
  const innerRingMat = new THREE.MeshStandardMaterial({
    color: COLOR_METAL_RIM,
    metalness: 0.9,
    roughness: 0.2,
    side: THREE.DoubleSide,
  });
  const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
  dialsGroup.add(innerRing);

  // Middle Circuit Track Ring
  const midTrackGeo = new THREE.TorusGeometry(26, 0.5, 12, 80);
  const midTrackMat = new THREE.MeshStandardMaterial({
    color: COLOR_METAL_CHROME,
    metalness: 0.95,
    roughness: 0.15,
  });
  const midTrack = new THREE.Mesh(midTrackGeo, midTrackMat);
  dialsGroup.add(midTrack);

  // Outer Industrial Gear Ring with Hex Bolts
  const outerRingGeo = new THREE.TorusGeometry(38, 0.75, 16, 90);
  const outerRingMat = new THREE.MeshStandardMaterial({
    color: COLOR_METAL_DARK,
    metalness: 0.92,
    roughness: 0.25,
  });
  const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
  dialsGroup.add(outerRing);

  // Hex Bolts on Outer Ring
  const boltGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.9, 6);
  const boltMat = new THREE.MeshStandardMaterial({
    color: COLOR_METAL_CHROME,
    metalness: 1.0,
    roughness: 0.2,
  });

  const boltCount = 16;
  for (let i = 0; i < boltCount; i++) {
    const angle = (i / boltCount) * Math.PI * 2;
    const bolt = new THREE.Mesh(boltGeo, boltMat);
    bolt.rotation.x = Math.PI / 2;
    bolt.position.set(Math.cos(angle) * 38, Math.sin(angle) * 38, 0.4);
    dialsGroup.add(bolt);
  }

  // ----------------------------------------------------
  // 4. MASSIVE, DRAMATIC ELECTRIC LIGHTNING BOLTS
  // (Large, Branching, Multi-Fork Arcs Spanning Across the Screen)
  // ----------------------------------------------------
  const lightningGroup = new THREE.Group();
  scene.add(lightningGroup); // Added directly to scene for huge screen-space presence

  let activeLightningObjects = [];
  let lightningTimer = 0;
  let nextLightningInterval = 2.0; // Frequent, impactful strikes every 2.0 - 3.8s

  function createLightningBranch(start, end, depth, maxDepth) {
    const points = [];
    points.push(start.clone());

    const distance = start.distanceTo(end);
    const segmentCount = Math.max(8, Math.floor(distance / 4));
    let prev = start.clone();

    for (let i = 1; i < segmentCount; i++) {
      const progress = i / segmentCount;
      const basePos = new THREE.Vector3().lerpVectors(start, end, progress);

      // Large jagged electric displacement
      const jitterAmount = (1.0 - progress * 0.3) * (14.0 / (depth + 1));
      const jitter = new THREE.Vector3(
        (Math.random() - 0.5) * jitterAmount,
        (Math.random() - 0.5) * jitterAmount,
        (Math.random() - 0.5) * (jitterAmount * 0.7)
      );

      const curPoint = basePos.add(jitter);
      points.push(curPoint);

      // Recursive fork branching for big realistic lightning trees
      if (depth < maxDepth && Math.random() < 0.32) {
        const branchEnd = curPoint.clone().add(
          new THREE.Vector3(
            (Math.random() - 0.4) * 26,
            (Math.random() - 0.6) * 22,
            (Math.random() - 0.5) * 15
          )
        );
        createLightningBranch(curPoint, branchEnd, depth + 1, maxDepth);
      }

      prev = curPoint;
    }
    points.push(end.clone());

    const geo = new THREE.BufferGeometry().setFromPoints(points);

    // Thick Core Line (Pure White Intense Plasma)
    const coreMat = new THREE.LineBasicMaterial({
      color: COLOR_WHITE,
      linewidth: 3,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending,
    });
    const coreLine = new THREE.Line(geo, coreMat);
    lightningGroup.add(coreLine);
    activeLightningObjects.push({ mesh: coreLine, life: 1.0, decayRate: 4.0 });

    // Outer Neon Cyan Glow Halo
    const glowMat = new THREE.LineBasicMaterial({
      color: COLOR_CYAN,
      linewidth: 6,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const glowLine = new THREE.Line(geo, glowMat);
    lightningGroup.add(glowLine);
    activeLightningObjects.push({ mesh: glowLine, life: 1.0, decayRate: 3.2 });
  }

  function triggerMassiveLightning() {
    clearLightning();

    // Epic Screen-Spanning Strike:
    // Starts from high top-right or top-left in the sky and strikes directly toward the server or across the screen
    const strikeFromRight = Math.random() > 0.3;
    const startX = strikeFromRight ? 45 + Math.random() * 25 : -45 - Math.random() * 25;
    const startY = 38 + Math.random() * 15;
    const startZ = 15 + Math.random() * 15;

    // Hits server core or ground ring with huge energy
    const targetX = strikeFromRight ? 4 + Math.random() * 6 : -4 - Math.random() * 6;
    const targetY = -6 + Math.random() * 14;
    const targetZ = 5 + Math.random() * 8;

    const startPoint = new THREE.Vector3(startX, startY, startZ);
    const endPoint = new THREE.Vector3(targetX, targetY, targetZ);

    // Build the massive lightning tree
    createLightningBranch(startPoint, endPoint, 0, 2);

    // Occasional secondary cross-arc
    if (Math.random() > 0.4) {
      const arcStart = new THREE.Vector3(targetX, targetY, targetZ);
      const arcEnd = new THREE.Vector3(
        targetX + (Math.random() - 0.5) * 35,
        -18 - Math.random() * 10,
        Math.random() * 15
      );
      createLightningBranch(arcStart, arcEnd, 1, 2);
    }

    // Heavy Strobe Flash
    lightningLight.position.set(startX * 0.5, startY * 0.5, 30);
    lightningLight.intensity = 12.0;

    setTimeout(() => {
      lightningLight.intensity = 5.0;
      setTimeout(() => {
        lightningLight.intensity = 0;
      }, 70);
    }, 60);

    // Play synthesized high-energy zap sound if audio enabled
    if (window.CasparAudio && window.CasparAudio.playZap) {
      window.CasparAudio.playZap();
    }
  }

  function clearLightning() {
    activeLightningObjects.forEach((item) => {
      lightningGroup.remove(item.mesh);
      if (item.mesh.geometry) item.mesh.geometry.dispose();
      if (item.mesh.material) item.mesh.material.dispose();
    });
    activeLightningObjects = [];
  }

  // ----------------------------------------------------
  // 5. SUBTLE CALM PARTICLES (Zero Clutter)
  // ----------------------------------------------------
  const calmParticleCount = 140;
  const pGeo = new THREE.BufferGeometry();
  const pPositions = new Float32Array(calmParticleCount * 3);
  const pColors = new Float32Array(calmParticleCount * 3);
  const pVelocities = [];

  const colOrange = new THREE.Color(COLOR_ORANGE);
  const colCyan = new THREE.Color(COLOR_CYAN);

  for (let i = 0; i < calmParticleCount; i++) {
    const isLeft = Math.random() > 0.5;
    const x = isLeft ? -Math.random() * 38 - 5 : Math.random() * 38 + 5;
    const y = (Math.random() - 0.5) * 50;
    const z = (Math.random() - 0.5) * 35;

    pPositions[i * 3] = x;
    pPositions[i * 3 + 1] = y;
    pPositions[i * 3 + 2] = z;

    const targetColor = isLeft ? colOrange : colCyan;
    pColors[i * 3] = targetColor.r;
    pColors[i * 3 + 1] = targetColor.g;
    pColors[i * 3 + 2] = targetColor.b;

    pVelocities.push({
      vx: (Math.random() - 0.5) * 0.03,
      vy: Math.random() * 0.05 + 0.02,
      vz: (Math.random() - 0.5) * 0.03,
    });
  }

  pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
  pGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));

  function createSoftMote() {
    const c = document.createElement('canvas');
    c.width = 32;
    c.height = 32;
    const ctx = c.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(255, 255, 255, 0.7)');
    grad.addColorStop(0.8, 'rgba(255, 255, 255, 0.1)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, Math.PI * 2);
    ctx.fill();
    return new THREE.CanvasTexture(c);
  }

  const pMat = new THREE.PointsMaterial({
    size: 1.8,
    vertexColors: true,
    transparent: true,
    opacity: 0.65,
    map: createSoftMote(),
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const calmParticles = new THREE.Points(pGeo, pMat);
  masterGroup.add(calmParticles);

  // ----------------------------------------------------
  // 6. MOUSE & PARALLAX CONTROLLER
  // ----------------------------------------------------
  const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let scrollY = 0;

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  // ----------------------------------------------------
  // 7. ANIMATION LOOP
  // ----------------------------------------------------
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    const elapsed = clock.getElapsedTime();

    mouse.x += (mouse.targetX - mouse.x) * 0.04;
    mouse.y += (mouse.targetY - mouse.y) * 0.04;

    // Server Gentle Idle Floating
    serverGroup.rotation.y = Math.sin(elapsed * 0.35) * 0.12;
    serverGroup.position.y = Math.sin(elapsed * 0.75) * 0.7;

    // Dials Spin
    midTrack.rotation.z = elapsed * 0.06;
    outerRing.rotation.z = -elapsed * 0.03;

    // LED Status Blink
    const blinkIdx = Math.floor(elapsed * 4.5) % ledMeshes.length;
    ledMeshes.forEach((item, idx) => {
      if (idx === blinkIdx) {
        item.mesh.material.color.setHex(0xffffff);
      } else {
        item.mesh.material.color.setHex(item.baseColor);
      }
    });

    // Top Furnace Heat Pulse
    const heatPulse = 0.6 + Math.sin(elapsed * 2.8) * 0.4;
    heatCoreMat.opacity = heatPulse;
    topExhaustLight.intensity = 2.0 + heatPulse * 1.5;

    // Lightning Trigger Timer
    lightningTimer += delta;
    if (lightningTimer > nextLightningInterval) {
      lightningTimer = 0;
      nextLightningInterval = 2.0 + Math.random() * 2.5; // Epic strikes
      triggerMassiveLightning();
    }

    // Decay Active Lightning
    for (let i = activeLightningObjects.length - 1; i >= 0; i--) {
      const item = activeLightningObjects[i];
      item.life -= delta * item.decayRate;
      item.mesh.material.opacity = Math.max(0, item.life);
      if (item.life <= 0) {
        lightningGroup.remove(item.mesh);
        if (item.mesh.geometry) item.mesh.geometry.dispose();
        if (item.mesh.material) item.mesh.material.dispose();
        activeLightningObjects.splice(i, 1);
      }
    }

    // Particle Drift
    const pos = pGeo.attributes.position.array;
    for (let i = 0; i < calmParticleCount; i++) {
      const idx = i * 3;
      const v = pVelocities[i];
      pos[idx] += v.vx;
      pos[idx + 1] += v.vy;
      pos[idx + 2] += v.vz;

      if (pos[idx + 1] > 32) {
        pos[idx + 1] = -26;
      }
    }
    pGeo.attributes.position.needsUpdate = true;

    // Parallax
    masterGroup.rotation.y = mouse.x * 0.16;
    masterGroup.rotation.x = -mouse.y * 0.1;
    masterGroup.position.x = mouse.x * 4;
    masterGroup.position.y = mouse.y * 3 - (scrollY * 0.02);

    renderer.render(scene, camera);
  }

  animate();
})();
