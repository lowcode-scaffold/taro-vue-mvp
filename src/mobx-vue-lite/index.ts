import type { App } from "vue";
import Observer from "./ObserverComponent";

const Plugin = {
  install: (app: App) => {
    app.component("Observer", Observer);
  },
};

export default Plugin;

export { Observer, Plugin };
