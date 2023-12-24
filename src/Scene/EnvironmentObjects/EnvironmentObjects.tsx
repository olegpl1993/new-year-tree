import PointLight from "./PointLight/PointLight";
import Door from "./Door/Door";
import Poster from "./Poster/Poster";
import Box from "./Box/Box";
import Floor from "./Floor/Floor";
import Floor2 from "./Floor2/Floor2";
import Window from "./Window/Window";
import Stand from "./Stand/Stand";
import Present from "./Present/Present";
import Bells from "./Bells/Bells";
import { useStore } from "../../store/hook";
import { useEffect, useState } from "react";

interface Props {
  environment?: boolean;
}

function EnvironmentObjects(props: Props) {
  const { environment } = props;
  const { state, dispatch } = useStore();
  const light = state.settings.light;
  const isWin = state.game.isWin;

  const [pointLightIntensity, setPointLightIntensity] = useState(30);

  useEffect(() => {
    if (isWin) {
      dispatch.settings({ type: "SET_LIGHT", payload: 0 });
      setPointLightIntensity(50);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWin]);

  const lightToIntensity = (light: number) => {
    const minLight = 0;
    const maxLight = 100;
    const minIntensity = 0;
    const maxIntensity = 3;
    return (
      ((light - minLight) / (maxLight - minLight)) *
        (maxIntensity - minIntensity) +
      minIntensity
    );
  };

  return (
    <group position={environment ? [0, -1.75, 0] : [0, 0, 0]}>
      {environment ? null : (
        <>
          <PointLight
            position={[2, 4.5, 2]}
            color="red"
            intensity={pointLightIntensity}
          />
          <PointLight
            position={[-2, 4.5, 2]}
            color="blue"
            intensity={pointLightIntensity}
          />
          <PointLight
            position={[2, 4.5, -2]}
            color="green"
            intensity={pointLightIntensity}
          />
          <PointLight
            position={[-2, 4.5, -2]}
            color="orange"
            intensity={pointLightIntensity}
          />

          <Bells position={[4.9, 2, 3]} rotation={[0, -1.57, 0]} scale={0.01} />
          <Bells
            position={[4.9, 2, -3]}
            rotation={[0, -1.57, 0]}
            scale={0.01}
          />
          <Bells position={[-4.9, 2, 3]} rotation={[0, 1.57, 0]} scale={0.01} />
          <Bells
            position={[-4.9, 2, -3]}
            rotation={[0, 1.57, 0]}
            scale={0.01}
          />

          <group position={[0, 0, 0]} rotation={[0, 3.9, 0]} scale={1}>
            <Present
              position={[0.4, 0, 0.4]}
              rotation={[0, 1, 0]}
              scale={0.0012}
            />
            <Present
              position={[0, 0, 0.6]}
              rotation={[0, 0, 0]}
              scale={0.0017}
            />
            <Present
              position={[-0.4, 0, 0.4]}
              rotation={[0, 1, 0]}
              scale={0.0014}
            />
          </group>
        </>
      )}

      <ambientLight intensity={lightToIntensity(light)} />

      <Door position={[4.94, 1.75, 0]} rotation={[0, -1.57, 0]} />
      <Window position={[0, 2, -4.94]} rotation={[0, 0, 0]} />
      <Window position={[-4.94, 2, 0]} rotation={[0, 1.57, 0]} />
      <Poster position={[0, 2.5, 4.94]} rotation={[0, 3.14, 0]} />

      <Box position={[0, 2.5, 5]} rotation={[0, 0, 0]} />
      <Box position={[5, 2.5, 0]} rotation={[0, 1.57, 0]} />
      <Box position={[-5, 2.5, 0]} rotation={[0, 1.57, 0]} />
      <Box position={[0, 2.5, -5]} rotation={[0, 0, 0]} />

      <Floor position={[0, 0, 0]} rotation={[-1.57, 0, 0]} />
      <Floor2 position={[0, 5, 0]} rotation={[1.57, 0, 0]} />

      <Stand position={[0, 0, 0]} rotation={[0, 0, 0]} />
    </group>
  );
}

export default EnvironmentObjects;
