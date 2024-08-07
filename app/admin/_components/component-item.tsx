"use client";

import Draggable from "@/components/draggable";
import { PropsWithChildren } from "react";

interface IComponentItemProps extends PropsWithChildren {
  type: IComponentType;
  onDragStart: (type: IComponentType) => void;
  onDragEnd: () => void;
}

const ComponentItem = (props: IComponentItemProps) => {
  const { onDragEnd, onDragStart, children, type } = props;

  return (
    <Draggable type={type} onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <div className="flex flex-col items-center justify-center hover:bg-gray-200 p-4">
        <div className="h-12 w-12 border border-slate-700"></div>
        <div className="text-sm">{children}</div>
      </div>
    </Draggable>
  );
};

export default ComponentItem;
