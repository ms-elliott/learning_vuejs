// inputとtextareaにv-modelを適用させる
<!-- <script setup>
import { ref } from 'vue'

const userInput = ref('')
const message = ref('')
</script>
<template>
  <h1>v-model</h1>
  <h2>Text</h2>
  <input v-model="userInput" type="text" />
  <p>{{ userInput }}</p>
  <h2>Textarea</h2>
  <textarea v-model="message"></textarea>
  // 改行も反映されるように、white-space: preを付与
  <p style="white-space: pre">{{ message }}</p>
</template> -->

// チェックボックスにv-modelを適用させる
<!-- <script setup>
import { ref } from 'vue'

const userInput = ref('')
const message = ref('')
const checked = ref('not checked')
const fruits = ref([])
</script>
<template>
  <h1>v-model</h1>
  <h2>Text</h2>
  <input v-model="userInput" type="text" />
  <p>{{ userInput }}</p>
  <h2>Textarea</h2>
  <textarea v-model="message"></textarea>
  <p style="white-space: pre">{{ message }}</p>
  <h2>CheckBox</h2>
  <input
    id="checkbox"
    v-model="checked"
    type="checkbox"
    true-value="checked"
    false-value="not checked"
  />
  <label for="checkbox">{{ checked }}</label>
  <p>Fruits</p>
  <input id="Apple" v-model="fruits" type="checkbox" value="Apple" />
  <label for="Apple">Apple</label>
  <input id="Banana" v-model="fruits" type="checkbox" value="Banana" />
  <label for="Banana">Banana</label>
  <input id="Grape" v-model="fruits" type="checkbox" value="Grape" />
  <label for="Grape">Grape</label>
  <p>{{ fruits }}</p>
</template> -->

// ラジオボタンにv-modelを適用させる
<!-- <script setup>
import { ref } from 'vue'

const gender = ref('male')
</script>
<template>
  <h1>v-model</h1>
  <h2>Radio</h2>
  <input id="male" v-model="gender" type="radio" value="male" />
  <label for="male">male</label>
  <input id="female" v-model="gender" type="radio" value="female" />
  <label for="female">female</label>
  <p>{{ gender }}</p>
</template> -->

// selectタグにv-modelを適用させる
<!-- <script setup>
import { ref } from 'vue'

const selected = ref([])
</script>
<template>
  <h2>select</h2>
  // selectタグにmultipleを付与し、定数に配列を指定することで、複数選択可能なリストになる(シフトやコントロールを押下しながら複数選択)
  <select v-model="selected" multiple>
    <option value="" disabled>Select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
    // 下記の記述方法でも可能
    <option v-for="option in ['A', 'B', 'C']" :key="option">{{ option }}</option>
  </select>
  <p>{{ selected }}</p>
</template> -->

// [lazy, trim, number] v-modelで使用できる修飾子
<!-- <script setup>
import { ref } from 'vue'

const userInput = ref('')
const message = ref('')
</script>
<template>
  <h1>v-model</h1>
  <h2>Text</h2>
  // .lazy・・・文字が入力されても即時反映されなくなる。フォーカスが外れたタイミングで更新される
  <input v-model.lazy="userInput" type="text" />
  <p>{{ userInput }}</p>
  <h2>Textarea</h2>
  // .trim・・・入力した文字列の前後の空白や改行が全て削除される
  <textarea v-model.trim="message"></textarea>
  <p style="white-space: pre">{{ message }}</p>
  <h2>Textarea</h2>
  // .number・・・入力された文字を数値型に変換する
  <textarea v-model.number="message"></textarea>
  <p style="white-space: pre">{{ message }}</p>
</template> -->

// コンポーネントのタグにv-modelを適用させる
<!-- App.vue -->
<!-- <script setup>
import { ref } from 'vue'
import CustomInput from './components/CustomInput.vue'

const userInput = ref('hello')
const titleInput = ref('hello')
</script>
<template>
  <h1>v-model</h1>
  // v-model複数つけることも可能。その場合2つ目以降は識別子必須。 // 独自の修飾詞を付けることも可能
  <CustomInput v-model.uppercase.foo.bar="userInput" v-model:title-name="titleInput" />
  <p>userInput: {{ userInput }}</p>
  <p>titleInput: {{ titleInput }}</p>
</template> -->
<!-- CustomInput.vue -->
<!-- <script setup>
// 戻り値を分割代入で指定する
const [model, modifiers] = defineModel({
  // 型やデフォルト値を設定することも可能
  type: String,
  default: 'default',
  get(value) {
    //読み込み時
    return value
  },
  set(value) {
    //データセット時
    if (modifiers.uppercase) {
      return value.toUpperCase()
    }
    return value
  },
})
// defineModelの引数に識別子を＂キャメルケース"で指定。設定値がある場合は第２引数で指定。
const titleName = defineModel('titleName', {
  type: String,
  required: true,
})
</script>
<template>
  <h2>CustomInput</h2>
  <input v-model="model" type="text" />
  <p>model: {{ model }}</p>
  <p>modifiers: {{ modifiers }}</p>
  <input v-model="titleName" type="text" />
  <p>titleName: {{ titleName }}</p>
</template> -->
