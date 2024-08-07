"use client";

import Button from "@/components/button";
import Droppable from "@/components/droppable";
import InputField from "@/components/input-field";
import useAdmin from "@/hooks/useAdmin";
import useIsClient from "@/hooks/useIsClient";
import { Fragment } from "react";
import ComponentList from "./_components/component-list";
import DropSpace from "./_components/drop-space";
import Toolbar from "./_components/toolbar";

const Admin = () => {
  const isClient = useIsClient();
  const {
    components,
    dragging,
    instances,
    position,
    config,
    onAddComponent,
    onChangeMessage,
    onChangeText,
    onDragEnd,
    onDragStart,
    onMouseMove,
    onSave,
    onView,
    onSelectComponent,
  } = useAdmin();

  const renderInputChange = (type?: IComponentType) => {
    switch (type) {
      case "button":
        return (
          <Fragment>
            <InputField
              id="button"
              label="Button Text"
              value={config?.config?.text ?? ""}
              onChange={onChangeText}
            />
            <InputField
              id="message"
              label="Alert Message"
              value={config?.config?.message ?? ""}
              onChange={onChangeMessage}
            />
          </Fragment>
        );
      case "paragraph":
        return (
          <InputField
            id="paragraph"
            label="Paragraph Text"
            value={config?.config?.text ?? ""}
            onChange={onChangeText}
          />
        );
      default:
        return;
    }
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-full w-full flex-col">
      <Toolbar onSave={onSave} onView={onView} />
      <div className="flex-1 flex h-[calc(100%-64px)]">
        <ComponentList onDragEnd={onDragEnd} onDragStart={onDragStart} />
        <div className="flex-1 flex flex-col">
          <Droppable onMouseMove={onMouseMove} onDrop={onAddComponent}>
            <DropSpace
              config={config}
              dragging={dragging}
              instances={instances}
              position={position}
            >
              {components.map((component) => (
                <div key={component.id} style={{ marginBottom: "10px" }}>
                  {component.type === "paragraph" && (
                    <div onClick={() => onSelectComponent(component)}>
                      {component.config?.text
                        ? component.config.text
                        : component.type}
                    </div>
                  )}
                  {component.type === "button" && (
                    <Button onClick={() => onSelectComponent(component)}>
                      {component.config?.text
                        ? component.config.text
                        : component.type}
                    </Button>
                  )}
                </div>
              ))}
            </DropSpace>
          </Droppable>
          <div className="h-48 border-t-2 p-2">
            {renderInputChange(config?.type)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
