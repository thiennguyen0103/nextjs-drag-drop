interface IInfoProps {
  position: IPosition;
  dragging: IComponentType | null;
  instances: number;
  config: IComponent | null;
}

const Info = (props: IInfoProps) => {
  const { config, dragging, instances, position } = props;
  return (
    <div className="absolute top-3 left-2 text-xs">
      <div className="space-y-2">
        <div className="space-x-2">
          <span>Mouse:</span>
          <span>{`(${position.x}, ${position.y})`}</span>
        </div>
        <div className="space-x-2">
          <span>Dragging:</span>
          <span>{dragging}</span>
        </div>
        <div className="space-x-2">
          <span>Instances:</span>
          <span>{instances}</span>
        </div>
        <div className="space-x-2">
          <span>Config:</span>
          <span>{config && JSON.stringify(config)}</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
