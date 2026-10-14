
const canvas = document.getElementById("plot");
const ctx = canvas.getContext("2d");

const amp = document.getElementById("amp");
const freq = document.getElementById("freq");

function draw() {
  const A = Number(amp.value);
  const f = Number(freq.value);

  document.getElementById("ampValue").textContent = A;
  document.getElementById("freqValue").textContent = f;

  const W = canvas.width;
  const H = canvas.height;

  ctx.clearRect(0, 0, W, H);

  // Draw coordinate axes
  ctx.strokeStyle = "#999";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(40, H / 2);
  ctx.lineTo(W - 20, H / 2);
  ctx.moveTo(40, 20);
  ctx.lineTo(40, H - 20);
  ctx.stroke();

  // Draw y = A sin(f x)
  ctx.strokeStyle = "#1769ff";
  ctx.lineWidth = 2.5;
  ctx.beginPath();

  for (let px = 40; px < W - 20; px++) {
    const x = (px - 40) / (W - 60) * 4 * Math.PI;
    const y = A * Math.sin(f * x);

    const py = H / 2 - y * 55;

    if (px === 40) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }

  ctx.stroke();
}

amp.addEventListener("input", draw);
freq.addEventListener("input", draw);

draw();
