import { AllowedComponentProps } from "@vue/runtime-core";
import * as CSS from "csstype";
import { DefineComponent } from "vue";

// eslint-disable-next-line @typescript-eslint/ban-types
export type NuiComponent<PropsOrPropOptions = {}> = DefineComponent<
  AllowedComponentProps & PropsOrPropOptions & { style: CSS.Properties }
>;
