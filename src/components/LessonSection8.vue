<!-- vue.jsの内部構造 -->
// [仮想DOM]
<!-- mount・・・初めて仮想DOMを描画して、実際のDOMに反映させる
patch・・・再レンダリングで生成された新しい仮想DOMと前回の仮想DOMとの"差分"を、実際のDOMに反映させる
※仮想DOM->実際のDOMへの反映は、処理が重い -->

// コンポーネント単位
<!-- 再レンダリングで変更が加わった新しい仮想DOMと前回の仮想DOMの差分を実際のDOMに反映する際、
コンポーネント単位で見ると、差分のコンポーネントはmountされている。
逆にコンポーネントがfalseとなって消える場合は、unmountと呼ぶ。 -->

// コンポーネントのライフサイクル
<!-- <script setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue'

const count = ref(0)
// beforeが付いているものはDOMの更新の直前に実行され、付いていないものはDOMの更新の直後に実行される
onBeforeMount(() => {
  console.log('onBeforeMount')
  debugger
})
onMounted(() => {
  console.log('onMounted')
  debugger
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
  debugger
})
onUpdated(() => {
  console.log('onUpdated')
  debugger
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
  debugger
})
onUnmounted(() => {
  console.log('onUnmounted')
  debugger
})
</script>
<template>
  <p>count: {{ count }}</p>
  <button @click="count++">+1</button>
</template> -->

// [nextTick] DOMの更新後に実行する
<!-- DOMの更新のタイミング vue.jsはデータの更新をすべて行なってからDOMを更新する。
nextTickを記述することで、DOMを更新し、更新後にNextTickの中身を実行する -->
<!-- <script setup>
import {
  nextTick,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue'

const count = ref(0)
onBeforeMount(() => {
  console.log('onBeforeMount')
  debugger
})
onMounted(() => {
  console.log('onMounted')
  debugger
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
  debugger
})
onUpdated(() => {
  console.log('onUpdated')
  debugger
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
  debugger
})
onUnmounted(() => {
  console.log('onUnmounted')
  debugger
})
function countUp() {
  count.value++
  nextTick(() => {
    console.log('nextTick')
    debugger
  })
}
// async,awaitを用いた記述方法　  (同義)
// async function countUp() {
//   count.value++
//   await nextTick()
//   console.log('nextTick')
// }
</script>
<template>
  <p>count: {{ count }}</p>
  <button @click="countUp">+1</button>
</template> -->

// [useTemplateRef] 直接DOM要素にアクセスする
<!-- <script setup>
import { onMounted, useTemplateRef } from 'vue';

const userInput = useTemplateRef('user-input')
console.log(userInput.value)
onMounted(() => {
  userInput.value.focus()
})
</script>
<template>
  <input ref="user-input" type="text" />
</template> -->
