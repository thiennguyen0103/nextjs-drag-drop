"use client";

import { DragEvent, FC, ReactNode, useRef } from "react";

interface IDraggableProps {
  children: ReactNode;
  type: "paragraph" | "button";
  onDragStart: (type: IComponentType) => void;
  onDragEnd: (e: DragEvent<HTMLDivElement>) => void;
}

const Draggable: FC<IDraggableProps> = (props) => {
  const { children, onDragStart, type, onDragEnd } = props;
  const ref = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("componentType", type);
    onDragStart(type);
  };

  return (
    <div
      ref={ref}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={onDragEnd}
      className="cursor-move"
    >
      {children}
    </div>
  );
};

export default Draggable;
