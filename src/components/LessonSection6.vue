// 親子間のコンポーネントでデータを受け渡す // [props]親から子にデータを渡す
<!-- App.vue 親-->
<script setup>
import { ref } from 'vue'
import ShowCount from './components/ShowCount.vue'
const count = ref(0)
</script>
<template>
  <ShowCount :foo="count" bar="hello" />
  // データを渡す為の特別な属性=Props
</template>
<!-- ShowCount.vue 子 -->
<script setup>
const props = defineProps(['foo', 'bar'])
console.log(props.foo)
</script>
<template>
  <p>count: {{ foo }}</p>
  <p>{{ bar }}</p>
</template>
<!-- propsは読み取り専用の為、子コンポーネントで値の書き換えはできない
子コンポーネントでpropsとして定義した値は、属性は継承されない -->
