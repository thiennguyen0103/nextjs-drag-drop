"use client";

import Button from "@/components/button";
import useConsumer from "@/hooks/useConsumer";
import useIsClient from "@/hooks/useIsClient";

const Consumer = () => {
  const isClient = useIsClient();
  const { components,onShowAlert} = useConsumer();

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center flex-col">
      {components?.map((component) => (
        <div key={component.id} style={{ marginBottom: "10px" }}>
          {component.type === "paragraph" && (
            <div>
              {component.config?.text ? component.config.text : component.type}
            </div>
          )}
          {component.type === "button" && (
            <Button onClick={() => onShowAlert(component?.config?.message)}>
              {component.config?.text ? component.config.text : component.type}
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Consumer;
