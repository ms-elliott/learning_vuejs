<script setup></script>
<template>
  <p>section4</p>
</template>
// [v-if] 条件をつけてレンダリングの実行を設定する
<!-- <script setup>
import { ref } from 'vue'
const ok = ref(true)
const maybeOk = ref(true)
</script>
<template>
  <p v-if="ok">OK!</p>
  <p v-else-if="maybeOk">maybe OK!</p>
  <p v-else>not OK...</p>
  // 必ずv-ifの直後にv-else-if,v-elseを書くこと
  <button @click="ok = !ok">toggle</button>
</template> -->

// 効率よく複数の要素にv-ifを適用させる
<!-- <script setup>
import { ref } from 'vue'
const ok = ref(true)
</script>
<template>
  <button @click="ok = !ok">toggle</button>
  <template v-if="ok">
    // templateタグ内のtemplateタグはないものとして扱う=要素を作らない
    <p>OK!</p>
    <p>maybe OK!</p>
    <p>not OK...</p>
  </template>
</template> -->

//[v-show]　v-ifと似ているが、表示されていない時も要素が存在する(display:falseで要素が残る)。v-ifより処理が早い。
<!-- <script setup>
import { ref } from 'vue'
const ok = ref(true)
</script>
<template>
  <button @click="ok = !ok">toggle</button>
  <p v-show="ok">OK!</p>
</template> -->

// [v-for] 配列内のリストを描画する
<!-- <script setup>
import { ref } from 'vue'
const fruits = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Apple' },
  { id: 3, name: 'Banana' },
  { id: 1, name: 'Grape' },
])
</script>
<template>
  <button @click="fruits.shift()">button</button>
  // key属性には必ずユニークな値を指定する
  <li v-for="fruit in fruits" :key="fruit.id"><input type="text" />{{ fruit.name }}</li>
</template> -->

// [v-for] 配列のインデックスを取得する
<!-- <script setup>
import { ref } from 'vue'
const fruits = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Apple' },
  { id: 3, name: 'Banana' },
  { id: 1, name: 'Grape' },
])
</script>
<template>
  <button @click="fruits.shift()">button</button>
  <li v-for="(fruit, index) in fruits" :key="fruit.id">
    <input type="text" />{{ fruit.name }}({{ index }})
  </li>
</template> -->

// [v-for] 分割代入する
<!-- <script setup>
import { ref } from 'vue'
const fruits = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Apple' },
  { id: 3, name: 'Banana' },
  { id: 1, name: 'Grape' },
])
</script>
<template>
  <button @click="fruits.shift()">button</button>
  // 分割代入することで"fruit.id"などの記述は不要になり、単純に"id"で指定できる
  <li v-for="({ id, name }, index) in fruits" :key="id">
    <input type="text" />{{ name }}({{ index }})
  </li>
</template> -->

// v-forとtemplateタグで効率よく複数の要素に適用させる
<!-- <script setup>
import { ref } from 'vue'
const fruits = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Apple' },
  { id: 3, name: 'Banana' },
  { id: 1, name: 'Grape' },
])
</script>
<template>
  <button @click="fruits.shift()">button</button>
  <template v-for="({ id, name }, index) in fruits" :key="id">
    <template v-if="id === 2">
      // v-forとv-ifを組み合わせる場合は、templateタグを別にしネストさせる
      <p>id: {{ id }}</p>
      <input type="text" />{{ name }}({{ index }})
    </template>
  </template>
</template> -->

// v-forをオブジェクトに使用する
<!-- <script setup>
import { ref } from 'vue'
const user = ref({
  name: 'Yoshipi',
  age: 25,
  gender: 'man',
})
</script>
<template>
  <p v-for="(value, key, index) in user" :key="value">{{ key }}: {{ value }}({{ index }})</p>
</template> -->

// v-forを制すうちに対して使用する
<!-- <script setup>
import { ref } from 'vue'
</script>
<template>
  // in
  <p v-for="n in 10" :key="n">{{ n }}</p>
  // of どちらの記述でも問題ない
  <p v-for="n of 10" :key="n">{{ n }}</p>
</template> -->
