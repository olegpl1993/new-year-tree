interface Props {
  position: [number, number, number];
  rotation: [number, number, number];
}

function Stand(props: Props) {
  const { position, rotation } = props;

  return (
    <mesh position={position} rotation={rotation}>
      <cylinderGeometry args={[0.3, 0.4, 0.1, 16]} />
      <meshStandardMaterial
        attach="material"
        color={"white"}
        metalness={0.9}
        roughness={0.2}
      />
    </mesh>
  );
}

export default Stand;
