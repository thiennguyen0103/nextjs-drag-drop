"use client";

import ComponentItem from "./component-item";

interface IComponentListProps {
  onDragStart: (type: IComponentType) => void;
  onDragEnd: () => void;
}

const ComponentList = (props: IComponentListProps) => {
  const { onDragEnd, onDragStart } = props;
  return (
    <div className="w-32 overflow-y-auto h-full] border-r-2 space-y-2">
      <ComponentItem
        type="paragraph"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        Paragraph
      </ComponentItem>
      <ComponentItem
        type="button"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        Button
      </ComponentItem>
    </div>
  );
};

export default ComponentList;
