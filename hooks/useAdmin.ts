import { COMPONENTS } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "./useLocalStorage";

const useAdmin = () => {
  const [value, setValue] = useLocalStorage<IComponent[]>(COMPONENTS, []);
  const [components, setComponents] = useState<IComponent[]>(value);
  const [position, setPosition] = useState<IPosition>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState<IComponentType | null>(null);
  const [instances, setInstances] = useState<number>(value.length);
  const [config, setConfig] = useState<IComponent | null>(null);
  const router = useRouter();

  const onAddComponent = (type: IComponentType) => {
    const newComponent: IComponent = { id: uuidv4(), type, config: {} };
    setComponents([...components, newComponent]);
    setInstances((prev) => prev + 1);
  };

  const onDragStart = (type: IComponentType) => {
    setDragging(type);
  };

  const onDragEnd = () => {
    setDragging(null);
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setPosition({
      x: e.clientX - e.currentTarget.offsetLeft,
      y: e.clientY - e.currentTarget.offsetTop,
    });
  };

  const onSelectComponent = (component: IComponent) => {
    setConfig(component);
  };

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    if (config) {
      config.config.text = e.target.value;
      setConfig({
        ...config,
        config: {
          ...config.config,
          text: e.target.value,
        },
      });
    }
  };

  const onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
    if (config) {
      config.config.message = e.target.value;
      setConfig({
        ...config,
        config: {
          ...config.config,
          message: e.target.value,
        },
      });
    }
  };

  const onSave = () => {
    setValue(components);
    setConfig(null);
  };

  const onView = () => {
    router.push("/consumer");
  };

  useEffect(() => {
    if (config) {
      const newComponent = components.map((component) => {
        if (config.id === component.id) {
          return config;
        }
        return component;
      });
      setComponents(newComponent);
    }
  }, [config]);

  return {
    components,
    position,
    dragging,
    instances,
    config,
    onAddComponent,
    onDragStart,
    onDragEnd,
    onMouseMove,
    onSelectComponent,
    onChangeText,
    onChangeMessage,
    onSave,
    onView,
  };
};

export default useAdmin;
