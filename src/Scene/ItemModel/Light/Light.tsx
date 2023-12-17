import { useEffect, useState } from "react";
import { Item } from "../../../types";

interface Props {
  item: Item;
  handleClick: () => void;
}

function Light(props: Props) {
  const { item, handleClick } = props;

  const [intensity, setIntensity] = useState(1.5);

  useEffect(() => {
    let intervalId: number | undefined;

    const fadeInOut = () => {
      setIntensity((prevIntensity) => (prevIntensity === 0 ? 1.5 : 0));
    };
    // eslint-disable-next-line prefer-const
    intervalId = setInterval(fadeInOut, 1500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <group onClick={handleClick}>
      <pointLight
        position={item.position}
        intensity={intensity}
        color={item.color}
      />
      <mesh position={item.position}>
        <sphereGeometry args={[0.035, 5, 5]} />
        <meshStandardMaterial
          color={item.activeElement ? "black" : item.color}
        />
      </mesh>
    </group>
  );
}

export default Light;
