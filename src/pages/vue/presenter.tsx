import { watch } from "vue";
import { debounce } from "lodash-es";
import { useModel } from "./model";
import Service from "./service";

export const usePresenter = () => {
  const model = useModel();
  const service = new Service(model);

  watch(
    () => model.runFetch.value,
    () => {
      service.getUserList();
    },
    {
      immediate: true,
    }
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
