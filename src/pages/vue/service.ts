import { fetchUserList } from "./api";
import { Model } from "./model";

export default class Service {
  private model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  async getUserList() {
    if (this.model.loading.value) {
      return;
    }
    this.model.loading.value = true;
    const res = await fetchUserList({
      page: this.model.pagination.page,
      size: this.model.pagination.size,
      name: this.model.filterForm.name,
    })
      .catch(() => {})
      .finally(() => {
        this.model.loading.value = false;
      });
    if (res) {
      if (this.model.pagination.page === 1) {
        this.model.userList = res.result.rows;
      } else {
        this.model.userList = this.model.userList.concat(res.result.rows);
      }
      this.model.pagination.hasMore =
        res.result.rows.length >= this.model.pagination.size;
    }
  }

  changeFilterForm(name: string, value: any) {
    (this.model.filterForm as any)[name] = value;
  }

  doSearch() {
    this.model.pagination.page = 1;
    this.model.runFetch.value += 1;
  }

  refresh() {
    this.model.pagination.page = 1;
    this.model.runFetch.value += 1;
  }

  nextPage() {
    if (this.model.pagination.hasMore) {
      this.model.pagination.page += 1;
      this.model.runFetch.value += 1;
    }
  }
}
