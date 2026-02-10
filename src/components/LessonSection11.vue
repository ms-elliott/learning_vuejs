// [Composable]
<!-- <script setup>
import { ref, watchEffect } from 'vue'

function refHistory(source) {
  const history = ref([])
  watchEffect(() => {
    history.value.push(source.value)
  })
  function undo() {
    if (history.value.length === 1) return
    history.value.pop()
    source.value = history.value.pop()
  }
  return {
    history,
    undo,
  }
}

const count = ref(0)
const { history, undo } = refHistory(count)
const userInput = ref('')
const { history: history2, undo: undo2 } = refHistory
</script>
<template>
  <p>count: {{ count }}</p>
  <button @click="count++">+1</button>
  <p>history: {{ history }}</p>
  <button @click="undo">undo</button>
  <p>userInput: {{ userInput }}</p>
  <input v-model="userInput" type="text" />
  <p>history2: {{ history2 }}</p>
  <button @click="undo2">undo2</button>
</template> -->

// 別のコンポーネントで使いたい場合
<!-- refHistory.js -->
// コンポーザブル・・・切り出されたjavascriptファイルでrefやwatcheffect等のvueの機能を含むもの
<!-- <script setup>
import { ref, watchEffect } from 'vue'

function refHistory(source) {
  const history = ref([])
  watchEffect(() => {
    history.value.push(source.value)
  })
  function undo() {
    if (history.value.length === 1) return
    history.value.pop()
    source.value = history.value.pop()
  }
  return {
    history,
    undo,
  }
}
</script> -->
<!-- App.vue -->
<!-- <script setup>
import { ref } from 'vue'
import { refHistory } from './refHistory'

const count = ref(0)
const { history, undo } = refHistory(count)
const userInput = ref('')
const { history: history2, undo: undo2 } = refHistory
</script>
<template>
  <p>count: {{ count }}</p>
  <button @click="count++">+1</button>
  <p>history: {{ history }}</p>
  <button @click="undo">undo</button>
  <p>userInput: {{ userInput }}</p>
  <input v-model="userInput" type="text" />
  <p>history2: {{ history2 }}</p>
  <button @click="undo2">undo2</button>
</template> -->

// [Composition API] composable同士を組み合わせる
<!-- App.vue -->
<!-- <script setup>
import { ref } from 'vue'
import { refLimitedHistory } from './composables/refLimitedHistory.js'

const count = ref(0)
const { history, undo } = refLimitedHistory(count, 3)
const userInput = ref('')
const { history: history2, undo: undo2 } = refLimitedHistory(userInput, 6)
</script>
<template>
  <p>count: {{ count }}</p>
  <button @click="count++">+1</button>
  <p>history: {{ history }}</p>
  <button @click="undo">undo</button>
  <p>userInput: {{ userInput }}</p>
  <input v-model="userInput" type="text" />
  <p>history2: {{ history2 }}</p>
  <button @click="undo2">undo2</button>
</template> -->
<!-- refHistory.js -->
<!-- import { onMounted, ref, watchEffect} from 'vue'

export function refHistory(source) {
  const history = ref([])
  onMounted(() => {
    console.log('onMounted')
  })
  watchEffect(() => {
    history.value.push(source.value)
  })
  function undo() {
    if (history.value.length === 1) return
    history.value.pop()
    source.value = history.value.pop()
  }
  return {
    history,
    undo
  }
} -->
<!-- lefLimitedHistory.js -->
<!-- import { watchEffect } from 'vue'
import { refHistory } from './refHistory'
export function refLimitefHistory (source, capacity) {
  const {history, undo} = refHistory(source)
  watchEffect(() => {
    if (history.value.length < capacity) {
      history.value.shift()
    }
  })
  return {
    history,
    undo
  }
} -->

// composableの書き方のベストプラクティス(慣例) // composableの名前は、"use〜"とする //
composableの引数にrefオブジェクトではない値を期待する場合、万が一refオブジェクトを引数で渡した場合でも意図した挙動をとるべきである。
import {tovalue} from 'vue'
