declare module "react-water-wave" {
  import React from "react";

  interface WaterWaveProps {
    className?: string;
    imageUrl: string;
    children: () => React.ReactNode;
  }

  const WaterWave: React.FC<WaterWaveProps>;
  export default WaterWave;
}
