import PointLight from "./PointLight/PointLight";
import Door from "./Door/Door";
import Poster from "./Poster/Poster";
import Box from "./Box/Box";
import Floor from "./Floor/Floor";
import Floor2 from "./Floor2/Floor2";
import Window from "./Window/Window";

function EnvironmentObjects() {
  return (
    <>
      <PointLight position={[2, 4.5, 2]} color="red" intensity={30} point />
      <PointLight position={[-2, 4.5, 2]} color="blue" intensity={30} point />
      <PointLight position={[2, 4.5, -2]} color="yellow" intensity={30} point />
      <PointLight position={[-2, 4.5, -2]} color="green" intensity={30} point />

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
    </>
  );
}

export default EnvironmentObjects;
