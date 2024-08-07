"use client";

import { DragEvent, FC, MouseEvent, ReactNode } from "react";

interface IDroppableProps {
  onMouseMove: (e: MouseEvent<HTMLDivElement>) => void;
  onDrop: (type: "paragraph" | "button") => void;
  children: ReactNode;
}

const Droppable: FC<IDroppableProps> = ({ onDrop, children, onMouseMove }) => {
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const componentType = e.dataTransfer.getData("componentType") as
      | "paragraph"
      | "button";
    onDrop(componentType);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onMouseMove={onMouseMove}
      className="h-[calc(100%-144px)] relative border-dashed border-2"
    >
      {children}
    </div>
  );
};

export default Droppable;
