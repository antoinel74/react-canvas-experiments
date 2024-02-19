import React from "react";
import useCanvas from "../hooks/CanvasHook";

export const Canvas = (props?: any) => {
  const { draw, ...rest } = props;
  const canvasRef = useCanvas(draw);

  return <canvas {...rest} ref={canvasRef} className="h-screen w-screen" />;
};
