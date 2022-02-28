import { View, ScrollView } from "@tarojs/components";
import { Input } from "@nutui/nutui-taro";
import { defineComponent } from "vue";
import styles from "index.module.less";
import { usePresenter } from "./presenter";

const Page = defineComponent({
  setup() {
    const presenter = usePresenter();
    const { model } = presenter;
    return {
      model,
      presenter,
    };
  },
  render() {
    return (
      <View class={styles.list}>
        <Input />
      </View>
    );
  },
});

export default Page;
