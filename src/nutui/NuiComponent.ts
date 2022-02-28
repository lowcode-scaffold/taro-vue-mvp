import { AllowedComponentProps } from "@vue/runtime-core";
import { DefineComponent } from "vue";

// eslint-disable-next-line @typescript-eslint/ban-types
export type NuiComponent<PropsOrPropOptions = {}> = DefineComponent<
  AllowedComponentProps & PropsOrPropOptions & { key?: unknown }
>;
