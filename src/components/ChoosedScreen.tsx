import React from "react";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./Map"), {
  ssr: false,
});

const ChoosedScreen = () => {
  return (
    <div className="w-full">
      <MapComponent />
    </div>
  );
};

export { ChoosedScreen };
