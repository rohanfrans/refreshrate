// JavaScript to calculate and display FPS
let lastFrameTime = performance.now();
let frameCount = 0;
let fps = 0;

function calculateFPS(now) {
  frameCount++;
  const deltaTime = now - lastFrameTime;

  // Update FPS every second
  if (deltaTime >= 1000) {
    fps = frameCount;
    document.getElementById("fps").textContent = `${fps} FPS`;
    frameCount = 0;
    lastFrameTime = now;
  }

  requestAnimationFrame(calculateFPS);
}

requestAnimationFrame(calculateFPS);
