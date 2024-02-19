import { arcs } from "../assets/arcsColors";

let startTime = new Date().getTime();

export const polyrythm = (pen: CanvasRenderingContext2D, frames: number, paper: HTMLCanvasElement) => {
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
    y: paper.height * 0.9,
  };

  const length = end.x - start.x;
  const initialArcRadius = length * 0.05;
  const spacing = (length / 2 - initialArcRadius) / arcs.length;

  if (!paper || !pen) return;

  // Base Stroke //
  pen.strokeStyle = "white";
  pen.lineWidth = 3;
  pen.beginPath();
  pen.moveTo(start.x, start.y);
  pen.lineTo(end.x, end.y);
  pen.stroke();

  // Arc //
  arcs.forEach((arc, index) => {
    const arcRadius = initialArcRadius + index * spacing;
    pen.beginPath();
    pen.strokeStyle = arc;
    pen.arc(center.x, center.y, arcRadius, Math.PI, 2 * Math.PI);
    pen.stroke();

    // Animation
    const velocity = 0.5 - index * 0.003;
    const maxAngle = 2 * Math.PI;
    const distance = Math.PI + elapsedTime * velocity;
    const modDistance = distance % maxAngle;
    const maxDistance = modDistance >= Math.PI ? modDistance : maxAngle - modDistance;

    const x = center.x + arcRadius * Math.cos(maxDistance);
    const y = center.y + arcRadius * Math.sin(maxDistance);

    // Ball //
    pen.beginPath();
    pen.fillStyle = "white";
    pen.arc(x, y, length * 0.006, 0, 2 * Math.PI);
    pen.fill();
  });
};
