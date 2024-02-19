import { useState } from "react";
import { Canvas } from "./components/canvas";
import { polyrythm } from "./drawFunctions/polyrythm";
import { Navbar } from "./components/Navbar";

function App() {
  const [selectedCanvas, setSelectedCanvas] = useState(() => polyrythm);

  const handleDrawFunctionChange = (drawFunction: () => void) => {
    setSelectedCanvas(drawFunction);
  };

  return (
    <main>
      <Navbar drawSwitch={handleDrawFunctionChange} />
      <Canvas draw={selectedCanvas} />
    </main>
  );
}

export default App;
