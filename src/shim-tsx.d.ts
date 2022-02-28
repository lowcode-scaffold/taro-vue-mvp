import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    interface ElementClass {
      [elem: string]: any;
    }
    interface ElementAttributesProperty {
      [elem: string]: any;
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
