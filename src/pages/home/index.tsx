import { Observer } from "../../mobx-vue-lite";
//import { Button } from "@nutui/nutui-taro";
import { View, Text, Button } from "@tarojs/components";
import { observable } from "mobx";
import { defineComponent, shallowRef } from "vue";

export default defineComponent({
  setup() {
    const model1 = shallowRef(
      observable({
        count: 0,
        get double() {
          return this.count * 2;
        },
        increment() {
          this.count++;
        },
      })
    );

    function handleClick() {
      model1.value.increment();
    }
    return {
      model: model1.value,
      handleClick,
    };
  },
  render() {
    return (
      <View>
        <Observer>
          <Text>{this.model.count}</Text>
        </Observer>
        <Button onClick={this.handleClick}>increment</Button>
      </View>
    );
  },
});
