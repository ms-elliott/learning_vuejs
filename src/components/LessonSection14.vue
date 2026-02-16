<!-- [Pinia] プロジェクト全体で使うデータを管理する -->
// インストール(後からインストールする方法。create
vueの初期設定時に一緒にインストールすることも可能) ・ターミナルで"npm install pinia"を実行する //
[Store] グローバルなデータを保持する場所を定義する
<!-- main.js -->
<!-- import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

app.mount('#app') -->
<!-- counter.js -->
// 1つのファイルに1つのstoreを定義する
<!-- import { defineStore } from 'pinia'
import { ref } from 'vue'

// 名前付きexportに代入する(useXXXStore)
export const useCounterStore = defineStore('counter', () => {
  cost count = ref(0)
  // 第２引数で指定した関数は、必ずオブジェクトを返すこと
  return {
    count: count
  }
}) -->

// Storeで定義したデータをコンポーネントから使う
<!-- main.js -->
<!-- import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

app.mount('#app') -->
<!-- counter.js -->
<!-- import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  cost count = ref(0)
  return {
    count: count
  }
}) -->
<!-- App.vue -->
<!-- <script setup>
import { useCounterStore } from './stores/counter'
import CounterComp from './components/CounterComp.vue'
const counterStore = useCounterStore()
console.log(counterStore.count)
</script>
<template>
  <h1>Pinia</h1>
  <button @click="counterStore.count++">+1</button>
  <p>{{ counterStore.count }}</p>
  <CounterComp />
</template> -->
<!-- CounterComp.vue -->
<!-- <script setup>
import { useCounterStore } from '../stores/counter'
const counterStore = useCounterStore()
console.log(counterStore.count)
</script>
<template>
  <h2>CounteComp</h2>
  <button @click="counterStore.count++">+1</button>
  <p>{{ counterStore.count }}</p>
</template> -->

// [State] [Getters] [Action]
<!-- counter.js -->
<!-- import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // state・・・Store内で定義されたrefオブジェクト(必ずreturnで返すオブジェクトに含めること)
  cost count = ref(0)
  // getter・・・Storen内で定義されたComputed refオブジェクト
  const doubleCount = computed(() => count.value * 2 )
  // action・・・Storen内で定義された関数
  function increment() {
    count.value++
  }
  return {
    count,
    doubleCount,
    increment
  }
}) -->
<!-- App.vue -->
<!-- <script setup>
import { useCounterStore } from './stores/counter'
import CounterComp from './components/CounterComp.vue'
const counterStore = useCounterStore()
console.log(counterStore.count)
</script>
<template>
  <h1>Pinia</h1>
  <button @click="counterStore.count++">+1</button>
  <button @click="counterStore.increment">increment</button>
  <p>{{ counterStore.count }}</p>
  <p>doubleCount: {{ counterStore.doubleCount }}</p>
  <CounterComp />
</template> -->

// コンポーネント以外の場所でStorede定義したデータを使用する
<!-- App.vue -->
<!-- <script setup>
import { useCounterStore } from './stores/counter'
import CounterComp from './components/CounterComp.vue'
const counterStore = useCounterStore()
console.log(counterStore.count)
</script>
<template>
  <h1>Pinia</h1>
  <button @click="counterStore.count++">+1</button>
  <button @click="counterStore.increment">increment</button>
  <p>{{ counterStore.count }}</p>
  <p>doubleCount: {{ counterStore.doubleCount }}</p>
  <CounterComp />
</template> -->
<!-- main.js -->
<!-- import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { useCounterStore } from './stores/counter'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
// 必ずapp.use(pinia)の後で呼び出す
const counterStore = useCounterStore()
console.log(counterStore.count)

app.mount('#app') -->
