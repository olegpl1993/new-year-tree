import { ThreeEvent } from "@react-three/fiber";

interface Props {
  activeElement: boolean;
  setActiveElement: (activeElement: boolean) => void;
  activeElementPosition: [number, number, number];
}

const MovingBox = (props: Props) => {
  const { activeElement, setActiveElement, activeElementPosition } = props;

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    console.log(event.point.x, event.point.y, event.point.z);
    setActiveElement(!activeElement);
  };

  return (
    <mesh position={activeElementPosition} onClick={handleClick}>
      <boxGeometry args={[0.2, 0.2, 0.2]} />
      <meshStandardMaterial
        color={activeElement ? "black" : "red"}
        metalness={1}
        roughness={0.1}
      />
    </mesh>
  );
};

export default MovingBox;
