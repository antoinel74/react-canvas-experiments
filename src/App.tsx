import { Canvas } from "./components/canvas";

function App() {
  const draw = (
    pen: CanvasRenderingContext2D,
    frames: number,
    paper: HTMLCanvasElement
  ) => {
    if (typeof window !== "undefined") {
      paper.width = paper.clientWidth;
      paper.height = paper.clientHeight;
    }

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

    if (!paper || !pen) return;

    // BASE //
    pen.strokeStyle = "white";
    pen.lineWidth = 6;
    pen.beginPath();
    pen.moveTo(start.x, start.y);
    pen.lineTo(end.x, end.y);
    pen.stroke();

    // ARC //
    pen.beginPath();
    pen.lineWidth = 2;
    pen.arc(center.x, center.y, length * 0.05, Math.PI, 2 * Math.PI);
    pen.stroke();
  };

  return <Canvas draw={draw} className="bg-white" />;
}

export default App;
