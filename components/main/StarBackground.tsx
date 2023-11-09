"use client"
import React, { useRef, Suspense, useContext, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { ColorContext } from "@/context/colors/colorContext";
import { Object3D } from "three";

const StarBackground = (props: any) => {
  const contextValue = useContext(ColorContext);
  const ref: React.MutableRefObject<Object3D | null> = useRef(null);

  useEffect(() => {
    if (ref.current) {
      // You can perform any setup based on the context value here
    }
  }, [contextValue]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  if (!contextValue) {
    return null;
  }

  const { color } = contextValue;

  return (
    <group rotation={[0, 1, Math.PI / 4]}>
      <Points ref={ref} positions={random.inSphere(new Float32Array(100000), { radius: 1.2 })} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={color && color}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
