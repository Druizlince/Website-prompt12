"use client";

import { Suspense } from "react";
import Spline from "@splinetool/react-spline";

interface Props {
  scene: string;
  className?: string;
  fallback?: React.ReactNode;
}

export default function SplineScene({ scene, className, fallback }: Props) {
  return (
    <div className={className} style={{ width: "100%", height: "100%" }}>
      <Suspense fallback={fallback ?? <div className="w-full h-full" />}>
        <Spline scene={scene} />
      </Suspense>
    </div>
  );
}
