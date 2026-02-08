// 親子間のコンポーネントでデータを受け渡す // [props]親から子にデータを渡す
<!-- // App.vue 親
<script setup>
import { ref } from 'vue'
import ShowCount from './components/ShowCount.vue'
const count = ref(0)
</script>
<template>
  <ShowCount :foo="count" bar="hello" />
  // データを渡す為の特別な属性=Props
</template>
// ShowCount.vue 子
<script setup>
const props = defineProps(['foo', 'bar'])
console.log(props.foo)
</script>
<template>
  <p>count: {{ foo }}</p>
  <p>{{ bar }}</p>
</template> -->
<!-- propsは読み取り専用の為、子コンポーネントで値の書き換えはできない
子コンポーネントでpropsとして定義した値は、属性は継承されない -->

// バリデーションを利用してpropsに予期しないデータが渡るのを防ぐ
<!-- // App.vue 親
<script setup>
import { ref } from 'vue'
import ShowCount from './components/ShowCount.vue'
const count = ref(0)
</script>
<template>
  <ShowCount :foo="count" bar="hello" />
</template>

// ShowCount.vue 子
<script setup>
// definePropsの外で定義された値は使用できない。必ずdefinePropsの中で完結させる必要がある
defineProps({
  foo: {
    // 数値or文字列であればよい場合は、配列で指定。 CustomClassも指定可能。
    type: [Number, String],
    // defaultプロパティの値が設定されていない場合は、Undefinedとなる。  (Typeをbooleanにした場合のみ、default値===undefinedがfalseになる)
    default: 100,
  },
  boo: {
    type: Number,
    default: function () {
      // デフォルトの値がオブジェクトor配列の場合は直接指定できない為、関数で記述する
      return [100, 0]
    },
    validator: function (value) {
      // validator：　戻り値がfalseの場合に警告が出る
      return value === 0 || value === 1
    },
  },
})
</script>
<template>
  <p>count: {{ foo }}</p>
</template> -->

// propsの命名規則
<!-- 子コンポーネントのprops(キャメルケース)を、親コンポーネントで属性として指定する場合はケバブケースで記述することを推奨 -->

// [emit] イベントを発生させ、子ー＞親に通信する // 親 App.vue
<!-- <script setup>
import { ref } from 'vue'
import RessetButton from './components/ReetButton.vue'

// 子コンポーネントの第二引数の受け取り方②メソッドハンドラーで受け取る
function onReset(value) {
  count.value = value
}

const count = ref(0)
</script>
<template>
  <p>count: {{ count }}</p>
  <button @click="count++">+1</button>
  // 子コンポーネントの第二引数の受け取り方①$eventで受け取る
  <ResetButton @reset="count = $event" />
</template>
// 子 ResetButton.vue
<template>
  // 第二引数にデータを指定することも可能
  <button @click="$emit('reset', 100)">Reset</button>
</template> -->

// [defineEmits] 明示的にemitするイベントを示す
<!-- <script setup>
const emit = defineEmits(['reset'])
function emitReset() {
  emit('reset', 100)
}
</script>
<template>
  <button @click="emitReset">Reset</button>
</template> -->

// emitの命名規則
<!-- props同様に、子コンポーネントのemit(キャメルケース)を、親コンポーネントで属性として指定する場合はケバブケースで記述することを推奨 -->
