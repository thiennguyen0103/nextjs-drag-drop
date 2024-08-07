interface IComponent {
  id: string;
  type: IComponentType;
  config: {
    text?: string;
    message?: string;
  };
}

type IComponentType = "paragraph" | "button";

interface Info {
  location: { x: number; y: number };
  dragging: boolean;
  instance: number;
  config: Component | null;
}

interface IPosition {
  x: number;
  y: number;
}
