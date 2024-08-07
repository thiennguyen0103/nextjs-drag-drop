"use client";

import Button from "@/components/button";

interface IToolbarProps {
  onSave: () => void;
  onView: () => void;
}

const Toolbar = (props: IToolbarProps) => {
  const { onSave, onView } = props;
  return (
    <div className="w-full">
      <div className="flex items-center justify-center h-16 border-b-2 w-full">
        <Button variant="toolbar" onClick={onSave}>
          Save
        </Button>
        <Button variant="toolbar" disabled>
          Undo
        </Button>
        <Button variant="toolbar" disabled>
          Redo
        </Button>
        <Button variant="toolbar" disabled>
          Export
        </Button>
        <Button variant="toolbar" disabled>
          Import
        </Button>
        <Button variant="toolbar" onClick={onView}>
          View
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
