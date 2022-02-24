import { reactive, ref } from "vue";
import { IFetchUserListResult } from "./api";

export const useModel = () => {
  const filterForm = reactive({ name: "" });
  const userList = reactive<IFetchUserListResult["result"]["rows"]>([]);
  const pagination = reactive({ size: 10, page: 1, hasMore: true });
  const loading = ref(false);
  const runFetch = ref(0);

  return {
    loading,
    runFetch,
    filterForm,
    userList,
    pagination,
  };
};

export type Model = ReturnType<typeof useModel>;
