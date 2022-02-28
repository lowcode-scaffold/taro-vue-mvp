import { View, ScrollView } from "@tarojs/components";
import { defineComponent } from "vue";
import styles from "index.module.less";
import { usePresenter } from "./presenter";
import Input from "@/nutui/Input";

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
