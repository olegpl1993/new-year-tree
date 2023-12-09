interface Props {
  position: [number, number, number];
  color?: string;
  pointLight?: boolean;
}

function Sphere(props: Props) {
  const { position, color, pointLight } = props;
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.07]} />
        <meshStandardMaterial color={color} metalness={1} roughness={0} />
      </mesh>
      {pointLight && <pointLight intensity={0.1} color={"white"} />}
    </group>
  );
}

export default Sphere;
