import { useRef, useEffect } from "react";

const useCanvas = (draw?: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const paper = canvasRef.current;
    const pen = paper?.getContext("2d");

    let animationFrameId: number;

    const render = () => {
      draw(pen, paper);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return canvasRef;
};

export default useCanvas;
