import { Observer } from "../../mobx-vue-lite";
import { Button } from "@nutui/nutui-taro";
import { View, Text } from "@tarojs/components";
import { observable } from "mobx";
import { defineComponent, shallowRef } from "vue";

export default defineComponent({
  setup() {
    // const model1 = shallowRef(
    //   observable({
    //     count: 0,
    //     get double() {
    //       return this.count * 2;
    //     },
    //     increment() {
    //       this.count++;
    //     },
    //   })
    // );
    // return {
    //   model: model1.value,
    // };
    function handleClick() {
      console.log(1212);
    }
    return {
      handleClick,
    };
  },
  render() {
    return (
      <View>
        {/* <Observer>
          <Text
            onClick={() => {
              console.log(121212);
            }}
          >
            {this.model.count}
          </Text>
        </Observer> */}
        <Button onClick={this.handleClick}>increment123</Button>
      </View>
    );
  },
});
