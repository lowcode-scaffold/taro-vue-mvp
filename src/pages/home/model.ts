import { action, makeObservable, observable } from "mobx";

export default class Model {
  count = 1;

  add() {
    this.count += 1;
  }
}
export const createModel = () =>
  // 或者 makeAutoObservable
  // 用 observable 不行
  makeObservable(new Model(), {
    add: action,
    count: observable,
  });
