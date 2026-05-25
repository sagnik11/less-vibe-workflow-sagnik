"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import "design-agent/dist/tailwind.css";

const CreativeCanvas = dynamic(
  () => import("design-agent").then((mod) => mod.CreativeCanvas),
  { ssr: false }
);

function CanvasLoader() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session");
  const initialAssetParam = searchParams.get("a");

  return (
    <CreativeCanvas
      sessionId={sessionId}
      initialAssetParam={initialAssetParam}
      isAuthorized={true}
    />
  );
}

export default function CanvasPage() {
  return (
    <div className="h-dvh w-full">
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center bg-[#030303] text-gray-400">
            <div className="flex flex-col items-center gap-3">
              <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-sm">Loading Design Agent...</span>
            </div>
          </div>
        }
      >
        <CanvasLoader />
      </Suspense>
    </div>
  );
}
