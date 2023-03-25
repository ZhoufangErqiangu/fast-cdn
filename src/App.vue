<template>
  <div class="crud-box">
    <fs-crud ref="crudRef" v-bind="crudBinding" />
  </div>
</template>

<script setup lang="ts">
import { CrudOptions, useCrud, useExpose } from "@fast-crud/fast-crud";
import { onMounted, ref } from "vue";

const crudRef = ref();
const crudBinding = ref();
const { crudExpose } = useExpose({ crudRef, crudBinding });
const crudOptions: CrudOptions = {
  request: {
    pageRequest: async () => {
      return {
        data: [
          { name: 'test1', amount: 1 },
          { name: 'test2', amount: 2 },
          { name: 'test3', amount: 3 },
          { name: 'test4', amount: 4 },
          { name: 'test5', amount: 5 },
          { name: 'test6', amount: 6 },
        ]
      };
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    transformRes: ({ res }: { res: { data: { name: string; amount: number }[] } }) => {
      return {
        currentPage: 1,
        pageSize: 10,
        total: res.data.length,
        records: res.data
      };
    }
  },
  columns: {
    name: {
      title: "名字",
      type: "text",
    },
    amount: {
      title: "金额",
      type: "number"
    }
  },
  form: {
    labelWidth: "120px",
  },
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { resetCrudOptions } = useCrud({ crudExpose, crudOptions, context: {} });

onMounted(() => {
  crudExpose.doRefresh();
});
</script>

<style scoped>
.crud-box {
  height: 100vh;
  padding: 20px;
}
</style>