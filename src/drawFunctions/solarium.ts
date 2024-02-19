let startTime = new Date().getTime();

export const solarium = (pen: CanvasRenderingContext2D, frames: number, paper: HTMLCanvasElement) => {
  if (typeof window !== "undefined") {
    paper.width = paper.clientWidth;
    paper.height = paper.clientHeight;
  }

  frames = 60;
  let currentTime = new Date().getTime();
  let elapsedTime = (currentTime - startTime) / 1000;

  const start = {
    x: paper.width * 0.1,
    y: paper.height * 0.9,
  };

  const end = {
    x: paper.width * 0.9,
    y: paper.height * 0.9,
  };

  const center = {
    x: paper.width * 0.5,
    y: paper.height * 0.5,
  };

  const velocity = 0.2;
  const length = end.x - start.x;
  const initialArcRadius = length * 0.2;
  const moonArcRadius = length * 0.04;
  const distance = Math.PI + elapsedTime * velocity;
  const moonDistance = Math.PI + elapsedTime * 0.8;

  if (!paper || !pen) return;

  // SUN //
  pen.fillStyle = "orange";
  pen.beginPath();
  pen.arc(center.x, center.y, length * 0.05, 0, 2 * Math.PI);
  pen.fill();

  // Earth Orbit //
  pen.strokeStyle = "transparent";
  pen.beginPath();
  pen.arc(center.x, center.y, length * 0.2, 0, 2 * Math.PI);
  pen.stroke();

  const x = center.x + initialArcRadius * Math.cos(distance);
  const y = center.y + initialArcRadius * Math.sin(distance);

  // Earth //
  pen.fillStyle = "blue";
  pen.beginPath();
  pen.arc(x, y, length * 0.012, 0, 2 * Math.PI);
  pen.fill();

  // Moon Orbit //
  pen.strokeStyle = "transparent";
  pen.beginPath();
  pen.arc(x, y, length * 0.04, 0, 2 * Math.PI);
  pen.stroke();

  const moonX = x + moonArcRadius * Math.cos(moonDistance);
  const moonY = y + moonArcRadius * Math.sin(moonDistance);

  // MOON //
  pen.fillStyle = "white";
  pen.beginPath();
  pen.arc(moonX, moonY, length * 0.0065, 0, 2 * Math.PI);
  pen.fill();
};
