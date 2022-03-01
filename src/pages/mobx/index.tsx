import { View, ScrollView } from "@tarojs/components";
import { defineComponent } from "vue";
import styles from "./index.module.less";
import { usePresenter } from "./presenter";
import { Input, Cell } from "@/nutui";
import { Observer } from "@/mobx-vue-lite";

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
      <Observer>
        <View class={styles.list}>
          <Input
            modelValue={this.model.filterForm.name}
            hasBorder={false}
            clearable
            placeholder="输入名称查询"
            onChange={(value) => {
              this.presenter.handleFormChange("name", value);
              this.presenter.handleSearch();
            }}
            onClear={() => {
              this.presenter.handleFormChange("name", "");
              this.presenter.handleSearch();
            }}
            class={styles.input}
          />
          <ScrollView
            className={styles.scrollView}
            scrollY
            refresherEnabled
            refresherTriggered={this.model.loading}
            onRefresherrefresh={() => {
              this.presenter.handleRefresh();
            }}
            onScrolltolower={() => {
              this.presenter.handleNextPage();
            }}
          >
            {this.model.userList.map((s) => {
              return (
                <Cell title={s.name} key={s.id}>
                  {{
                    icon: () => (
                      <img
                        class="nut-icon"
                        src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
                      />
                    ),
                  }}
                </Cell>
              );
            })}
          </ScrollView>
        </View>
      </Observer>
    );
  },
});

export default Page;
