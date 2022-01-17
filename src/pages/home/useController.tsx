import { shallowRef } from "vue";
import { createModel } from "./model";

const useController = () => {
  const model = shallowRef(createModel());

  const handleClick = () => {
    model.value.add();
  };

  return { model: model.value, handleClick };
};

export default useController;
