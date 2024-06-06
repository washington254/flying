import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Glitch, Noise, Vignette } from "@react-three/postprocessing";
import { useMemo } from "react";
import { Experience } from "./components/Experience";
import { Overlay } from "./components/Overlay";
import { usePlay } from "./contexts/Play";

function App() {
  const { play, end } = usePlay();

  const effects = useMemo(
    () => (
      <EffectComposer>
        {/* <Vignette/> */}
        {/* <Glitch/> */}
        <Noise opacity={0.05} />
      </EffectComposer>
    ),
    []
  );

  return (
    <>
      <Canvas>
        <color attach="background" args={["#232323"]} />
        <ScrollControls
          pages={play && !end ? 20 : 0}
          damping={0.5}
          style={{
            top: "10px",
            left: "0px",
            bottom: "10px",
            right: "10px",
            width: "auto",
            height: "auto",
            animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
            opacity: 0,
          }}
        >
          <Experience />
        </ScrollControls>
        {effects}
      </Canvas>
      <Overlay />
    </>
  );
}

export default App;
