import { shallowRef } from "vue";
import { createModel } from "./model";

const useController = () => {
  const model = shallowRef(createModel());
  return { model: model.value };
};

export default useController;
