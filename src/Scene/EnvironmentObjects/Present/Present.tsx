import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { useEffect, useState } from "react";

interface Props {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}

function Present(props: Props) {
  const { position, rotation, scale } = props;
  const [fbx, setFBX] = useState<THREE.Group | null>(null);

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load("/models/present/present.fbx", setFBX);
  }, []);

  if (!fbx) {
    return null;
  }

  return (
    <primitive
      object={fbx}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
}

export default Present;
