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
