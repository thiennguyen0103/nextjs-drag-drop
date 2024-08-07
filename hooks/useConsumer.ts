import { COMPONENTS } from '@/utils/constants';
import useLocalStorage from './useLocalStorage';

const useConsumer = () =>
{
  const [components] = useLocalStorage<IComponent[]>(COMPONENTS, []);
  const onShowAlert = (message?: string) => {
    alert(message);
  };
  return  {components, onShowAlert}
}

export default useConsumer
