interface Props {
  position: [number, number, number];
  intensity: number;
  color?: string;
  point?: boolean;
}

function PointLight(props: Props) {
  const { position, intensity, color, point } = props;
  return (
    <group>
      <pointLight position={position} intensity={intensity} color={color} />
      {point && (
        <mesh position={position}>
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshBasicMaterial color="white" transparent opacity={0.5} />
        </mesh>
      )}
    </group>
  );
}

export default PointLight;
