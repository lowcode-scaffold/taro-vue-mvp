import { IFetchUserListResult } from "./api";

export const useModel = () => {
  const filterForm = { name: "" };
  const userList: IFetchUserListResult["result"]["rows"] = [];
  const pagination = { size: 10, page: 1, hasMore: true };
  const loading = false;
  const runFetch = false;

  return {
    loading,
    runFetch,
    filterForm,
    userList,
    pagination,
  };
};

export type Model = ReturnType<typeof useModel>;
