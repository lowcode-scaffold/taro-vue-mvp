import { watch } from "vue";
import { useModel } from "./model";
import Service from "./service";

const usePresenter = () => {
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

  const handleSearch = useDebounceFn(
    () => {
      service.doSearch();
    },
    { wait: 300 }
  ).run;

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

export default usePresenter;
