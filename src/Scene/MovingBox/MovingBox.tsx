import { useEffect, useState } from "react";

const MovingBox = () => {
  const [position, setPosition] = useState<[number, number, number]>([2, 2, 0]);
  const [activeElement, setActiveElement] = useState(false);
  const [prevMousePosition, setPrevMousePosition] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    setActiveElement(!activeElement);
    setPrevMousePosition({ x: 0, y: 0 });
  };

  const moveElement = (event: MouseEvent) => {
    const pixelMoveMultiplier = 10;
    const deltaX =
      Math.sign(event.clientX - prevMousePosition.x) * pixelMoveMultiplier;
    const deltaY =
      Math.sign(event.clientY - prevMousePosition.y) * pixelMoveMultiplier;
    console.log(deltaX, deltaY);

    setPosition([
      position[0] + deltaX / window.innerWidth,
      position[1] - deltaY / window.innerHeight,
      0,
    ]);

    setPrevMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    if (activeElement) {
      setPrevMousePosition({ x: 0, y: 0 });
      document.addEventListener("mousemove", moveElement);
      document.addEventListener("click", handleClick);
    } else {
      document.removeEventListener("mousemove", moveElement);
      document.removeEventListener("click", handleClick);
    }
    return () => {
      document.removeEventListener("mousemove", moveElement);
      document.removeEventListener("click", handleClick);
    };
  }, [activeElement, position]);

  useEffect(() => {});

  return (
    <mesh position={position} onClick={() => handleClick()}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial
        color={activeElement ? "black" : "red"}
        metalness={1}
        roughness={0}
      />
    </mesh>
  );
};

export default MovingBox;
