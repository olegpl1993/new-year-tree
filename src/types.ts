export type Item = {
  type: string;
  position: [number, number, number];
  color?: string;
  pointLight?: boolean;
  activeElement?: boolean;
};