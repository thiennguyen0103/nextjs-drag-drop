"use client";

import { PropsWithChildren } from "react";
import Info from "./info";

interface IDropSpaceProps extends PropsWithChildren {
  position: IPosition;
  dragging: IComponentType | null;
  instances: number;
  config: IComponent | null;
}

const DropSpace = ({
  position,
  config,
  dragging,
  instances,
  children,
}: IDropSpaceProps) => {
  return (
    <div className="relative">
      <Info
        position={position}
        config={config}
        dragging={dragging}
        instances={instances}
      />
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default DropSpace;
