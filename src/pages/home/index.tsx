// import { Button } from "@nutui/nutui-taro";
import { View, Text, Button } from "@tarojs/components";
import { defineComponent } from "vue";
import { Observer } from "../../mobx-vue-lite";
import useController from "./useController";
import styles from "./index.module.less";

export default defineComponent({
  setup() {
    const controller = useController();
    const { model } = controller;
    return {
      model,
      controller,
    };
  },
  render() {
    return (
      <View class={styles.home}>
        <Observer>
          <Text class={styles.text}>{this.model.count}</Text>
        </Observer>
        <Button onClick={this.controller.handleClick}>increment</Button>
      </View>
    );
  },
});
