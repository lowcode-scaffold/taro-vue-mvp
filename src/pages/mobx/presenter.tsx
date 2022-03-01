import { reaction } from "mobx";
import { debounce } from "lodash-es";
import { createModel } from "./model";
import Service from "./service";

export const usePresenter = () => {
  const model = createModel();
  const service = new Service(model);

  reaction(
    () => model.runFetch,
    () => {
      service.getUserList();
    },
    { fireImmediately: true }
  );

  const handleFormChange = (name: string, value: any) => {
    service.changeFilterForm(name, value);
  };

  const handleSearch = debounce(() => {
    service.doSearch();
  }, 300);

  const handleRefresh = () => {
    service.refresh();
  };

  const handleNextPage = () => {
    service.nextPage();
  };

  return {
    model,
    handleFormChange,
    handleSearch,
    handleRefresh,
    handleNextPage,
  };
};
