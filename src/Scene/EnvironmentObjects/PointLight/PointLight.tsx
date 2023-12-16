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
          <sphereGeometry args={[0.05, 5, 5]} />
          <meshBasicMaterial color="white" transparent opacity={0.3} />
        </mesh>
      )}
    </group>
  );
}

export default PointLight;
