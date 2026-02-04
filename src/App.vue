<!-- Section3 -->
// [v-html]
<!-- <script setup>
import { ref } from 'vue'
const message = ref('<h1>Hello</h1>')
</script>
<template>
  // v-htmlはユーザ入力等の値を指定しないこと（クロスサイトスクリプティング攻撃対策）
  <div v-html="message"></div>
</template> -->

// [v-bind] scriptで設定した動的な値を属性に設定可能
<!-- <script setup>
import { ref } from 'vue'
const vueURL = ref('htpps://vuejs.org')
const vueId = ref('vue-link')
</script>
<template>
  下の書き方が推奨。同意。
  <a v-bind:id="vueId" v-bind:href="vueURL">Vue.js</a>
  <a :id="vueId" :href="vueURL">Vue.js</a>
  同じ値を設定する場合は、先に記述する属性の=以降を省略することもできる。
  <a :id :href="vueURL">Vue.js</a>
  boolean属性(値を取らなくてもよい属性)に対して,undefinedやfalse,0を指定した場合は属性が消える
  <a :id="undefined" :href="false">Vue.js</a>
  v-bindで一度に複数の属性を指定する方法
  <a v-bind="{ id: vueId, href: vueURL }">Vue.js</a>
</template> -->

// [v-on] イベントが発生した際に処理を実行する
<!-- <script setup>
import { ref } from 'vue'
const count = ref(0)
function countUp(event, times) {
  count.value = event.clientX * times
}
</script>
<template>
  <p>{{ count }}</p>
  // ハンドラー内に処理を直接書く場合とメソッドを指定する場合
  <button @click="count++">button</button>// インラインバンドラー
  <button @click="countUp">button</button>// メソッドハンドラー
  // イベントオブジェクトを使ってイベントの情報を取得する
  <button @click="count = $event.clientX">button</button> // インラインハンドラー
  <button @click="countUp($event, 5)">button</button>// メソッドハンドラ
</template> -->

// イベント修飾詞
<!-- <script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
<template>
  <div @click="count++">
    // 親要素にイベントの伝搬をしない(親要素のイベントを発生させない)
    <button @click="$event.stopPropagation()">button</button>
    <button @click.stop="">button</button> // イベント修飾詞を使用した記述方法
  </div>
  // デフォルトの設定を発生させない
  <a href="https://vuejs.org" @click="$event.preventDefault">Vue.js</a>
  <a href="https://vuejs.org" @click.prevent="">Vue.js</a> //
  イベント修飾詞を使用した記述方法(=""は記述しなくてもよい)
  <a href="https://vuejs.org" @click.prevent.stop>Vue.js</a> // イベント修飾詞を複数記述する場合
</template> -->

// キー修飾詞 キーボード関連のみのイベント
<!-- <script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
<template>
  <p>{{ count }}</p>
  // スペースorデリートが押下された場合のみ処理実行
  <input type="text" @keyup.space.delete="count++" />
</template> -->

// ディレクティブの構造
<!-- 名前:引数.修飾詞="値"
v-on:click.prevent="changeData" -->

// ディレクティブの引数にscriptのデータを指定する方法
<!-- <script setup>
import { ref } from 'vue'
const count = ref(0)
const eventName = 'keyup'
</script>
<template>
  <p>{{ count }}</p>
  <input type="text" @[eventName].space.delete="count++" />
</template> -->

// [v-model]inputの入力値を取得する（リアルタイム更新）
<!-- <script setup>
import { ref } from 'vue'
const userInput = ref('')
</script>
<template>
  <p>{{ userInput }}</p>
  <input v-model="userInput" type="text" />
</template> -->

// [computed]複雑な式を１つにまとめる
<!-- <script setup>
import { computed, ref } from 'vue'
const score = ref(0)
const evaluation = computed(() => {
  console.log('computed')
  return score.value > 3 ? 'Good' : 'Bad'
})
// computedは読み取り専用。値の代入はできない。
console.log(evaluation.value)
</script>
<template>
  <p>{{ score > 3 ? 'Good' : 'Bad' }}</p>
  <p>{{ evaluation }}</p>
  <p>{{ score }}</p>
  <button @click="score++">+1</button>
</template> -->

// [watchEffect]リアクティブなデータの変更を監視する
<!-- <script setup>
import { ref, watchEffect } from 'vue'
const count = ref(0)
watchEffect(() => {
  console.log('watchEffect')
  setTimeout(() => {
    console.log('after 1 second')
  }, 1000)
  // リアクティブな値を監視したい場合は、同期的に(watchEffectが実行されている間に)その関数にアクセスする必要がある
  console.log(count.value)
  count.value = 'hello'
})
</script>
<template>
  <p>{{ count }}</p>
  <button @click="count++">+1</button>
</template> -->

// [watch]特定のリアクティブなデータの変更を監視する
<!-- <script setup>
import { ref, watchEffect, watch } from 'vue'
const count1 = ref(0)
const count2 = ref(0)
const count3 = ref({
  a: 0,
})

// 第一引数は.valueを付けない。refオブジェクト等のオブジェクトを直接指定する。
// リアクティブオブジェクトを指定する場合は、オブジェクトのすべての値が監視対象となり、いずれか１つでも更新されるとwatch関数が実行されるので注意。
// 第２引数を指定することが可能
watch(count1, (newValue, oldValue) => {
  console.log('watch')
  // console.log(count1.value, count2.value, count3.value)
  console.log('newValue', newValue, ', oldValue', oldValue)
})
// 第一引数に関数を指定することも可能。watchEffectと同様の動きをする
// 第一引数の戻り値が常に同じ値を返すと、第二引数のnewValueとoldValueが同じ値となり第二引数の関数が実行されないので注意。
watch(
  () => {
    console.log('watch first argument')
    return count1.value
  },
  (newValue, oldValue) => {
    console.log('watch')
    // console.log(count1.value, count2.value, count3.value)
    console.log('newValue', newValue, ', oldValue', oldValue)
  },
)
// 第一引数に配列を指定することも可能
// 単純に複数のデータを監視したい場合は配列指定がよい
// newValue等は配列で値が格納される
watch([count1, count2], (newValue, oldValue) => {
  console.log('watch')
  // console.log(count1.value, count2.value, count3.value)
  console.log('newValue', newValue, ', oldValue', oldValue)
})
// リアクティブオブジェクトのプロパティを監視したい場合は、必ず関数で指定する
watch(
  () => count3.value.a,
  (newValue, oldValue) => {
    console.log('watch')
    // console.log(count1.value, count2.value, count3.value)
    console.log('newValue', newValue, ', oldValue', oldValue)
  },
)
// 第３引数を指定し、watchを実行するタイミングをwatchEffect同様にすることも可能
// 第２引数の関数の実行は最初の描画では実行されず、値が変更された際に実行されるー＞最初の描画でも実行されるようになる
watch(
  () => count3.value.a,
  (newValue, oldValue) => {
    console.log('watch')
    // console.log(count1.value, count2.value, count3.value)
    console.log('newValue', newValue, ', oldValue', oldValue)
  },
  {
    immidiate: true,
  },
)

watchEffect(() => {
  console.log('watchEffect')
  console.log(count1.value, count2.value, count3.value)
})
</script>
<template>
  <p>{{ count1 }}(count1)</p>
  <p>{{ count2 }}(count2)</p>
  <p>{{ count3 }}(count3)</p>
  <button @click="count1++">count1++</button>
  <button @click="count2++">count2++</button>
  <button @click="count3++">count3++</button>
</template> -->

// [class属性] 文字列以外での指定
<!-- <script setup>
import { ref } from 'vue'
const className = ref('red')
</script>
<template>
  <div :class="{ red: true, 'bg-blue': false }">Hello</div>
  // 配列で指定
  <div :class="[className, { 'bg-blue': true }]">Hello</div>
  // 静的なクラスも同時に指定可能
  <div class="border" :class="[className, { 'bg-blue': true }]">Hello</div>
</template>
<style>
.red {
  color: red;
}
.bg-blue {
  background-color: blue;
}
.border {
  border: 1px solid red;
}
</style> -->

// [style属性] 文字列以外での指定
<!-- <script setup></script>
<template>
  <div :style="{ color: 'red', backgroundColor: 'blue' }">Hello</div>
</template> -->

<!-- Section4 -->
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
