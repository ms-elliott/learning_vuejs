<!-- コンポーネントの高度な機能 -->
// [slot] タグごと親->子にデータを渡す
<!-- App.vue -->
<!-- <script setup>
import BaseCard from './components/BaseCard.vue'
</script>
<template>
  <h1>Slots</h1>
  <BaseCard>
    <h2>hello</h2>
    <p>How are you?</p>
  </BaseCard>
  <BaseCard>
    <li>Apple</li>
    <li>Banana</li>
    <li>Grape</li>
  </BaseCard>
</template> -->
<!-- BaseCard.vue -->
<!-- <template>
  <div>
    <h2>hello</h2>
    <slot></slot>
  </div>
</template>
<style scoped>
div {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding: 16px;
}
</style> -->
<!-- 親コンポーネントで定義したtemplate(スロットコンテンツ)は、子コンポーネントのslotタグと置き換わり表示されるが、
親コンポーネントで定義した値に、子コンポーネントからはアクセスできない -->

// [フォールバックコンテンツ] デフォルトのコンテンツを指定する
<!-- App.vue -->
<!-- <script setup>
import BaseCard from './components/BaseCard.vue'
</script>
<template>
  <h1>Slots</h1>
  <BaseCard>
    <h2>hello</h2>
    <p>How are you?</p>
  </BaseCard>
  <BaseCard />
</template> -->
<!-- BaseCard.vue -->
<!-- <template>
  <div>
    <h2>hello</h2>
    <slot>
      // 親コンポーネントで中身を何も記述しなかった場合に表示される内容を指定  (フォールバックコンテンツ)
      <p>No Content</p>
    </slot>
  </div>
</template>
<style scoped>
div {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding: 16px;
}
</style> -->

// [名前付きスロット] slotタグを複数指定する
<!-- App.vue -->
<!-- <script setup>
import BaseCard from './components/BaseCard.vue'
</script>
<template>
  <h1>Slots</h1>
  <BaseCard>
    //
    親コンポーネントでname属性を指定しなかった場合、子コンポーネントで"default"を指定するとデータを受け取れる
    <template #header>
      <h2>Vue.js Course</h2>
    </template>
    // 名前付きtemplateタグで囲われていないタグは、#defaultで囲われているような挙動をする
    <p>Hello</p>
    <template #main>
      <p>This is a Vue.js Course. Youcan learn Vue.js.</p>
    </template>
  </BaseCard>
</template> -->
<!-- BaseCard.vue -->
<!-- <template>
  <div>
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot name="main" />
    </main>
    <footer>
      <slot name="footer">
        <p>Instructor: Anonymous</p>
      </slot>
    </footer>
  </div>
</template>
<style scoped>
div {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding: 16px;
}
</style> -->

// slotPropsで子から親にデータを渡す
<!-- App.vue -->
<!-- <script setup>
import BaseCard from './components/BaseCard.vue'
</script>
<template>
  <h1>Slots</h1>
  <BaseCard>
    // 分割代入で指定することも可
    <template #header="slotProps">
      <p>pageCount: {{ slotProps.pageCount }}</p>
      <p>foo: {{ slotProps.foo }}</p>
      <h2>Vue.js Course</h2>
    </template>
    <p>Hello</p>
    <template #main>
      <p>This is a Vue.js Course. Youcan learn Vue.js.</p>
    </template>
  </BaseCard>
</template> -->
<!-- BaseCard.vue -->
<!-- <script setup>
import { ref } from 'vue'

const pageCount = ref(1)
</script>
<template>
  <div>
    <button @click="pageCount = 1">1</button>
    <button @click="pageCount = 2">2</button>
    <button @click="pageCount = 3">3</button>
    <header>
      <slot name="header" :page-count="pageCount" :foo="foo" />
    </header>
    <main>
      <slot name="main" />
    </main>
    <footer>
      <slot name="footer">
        <p>Instructor: Anonymous</p>
      </slot>
    </footer>
  </div>
</template>
<style scoped>
div {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding: 16px;
}
</style> -->

// [component is] 動的にコンポーネントを切り替える
<!-- <script setup>
import { shallowRef } from 'vue'
import CompA from './components/CompA.vue'
import CompB from './components/CompB.vue'
import CompC from './components/CompC.vue'
const currentComp = shallowRef(CompA)
const tmpObj = shallowRef({
  count: 0,
})
// shalloeRefは、オブジェクト.valueのみ変更を検知し再レンダリングする。他のプロパティ値に変更を加えても再レンダリングしない。
</script>
<template>
  <h1>Dynamic Components</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = CompC">C</button>
  <component :is="currentComp" />
  <p>{{ tmpObj }}</p>
  <button @click="tmpObj.count++">+1</button>
</template> -->

// [shallowRef] .valueプロパティのみリアクティブにする
<!-- <script setup>
import { shallowRef } from 'vue'
import CompA from './components/CompA.vue'
import CompB from './components/CompB.vue'
import CompC from './components/CompC.vue'
const currentComp = shallowRef(CompA)
const tmpObj = shallowRef({
  count: 0,
})
// shalloeRefは、オブジェクト.valueのみ変更を検知し再レンダリングする。他のプロパティ値に変更を加えても再レンダリングしない。
</script>
<template>
  <h1>Dynamic Components</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = CompC">C</button>
  <component :is="currentComp" />
  <p>{{ tmpObj }}</p>
  <button @click="tmpObj.count++">+1</button>
</template> -->

// [keepAlive] データが消えないようにする
<!-- App.vue -->
<!-- <script setup>
import { shallowRef } from 'vue'
import CompA from './components/CompA.vue'
import CompB from './components/CompB.vue'
import CompC from './components/CompC.vue'
const currentComp = shallowRef(CompA)
</script>
<template>
  <h1>Dynamic Components</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = CompC">C</button>
  <keepAlive>
    // CompBを選択時にCount++した値を、CompAやCに切り替えて戻した際に保持される方になる。
    <component :is="currentComp" />
  </keepAlive>
  <keepAlive>
    // keepAliveの中は基本的にタグは1つのみ。v-if&v-elseの組み合わせなどの場合は、結果的にタグは1つとなる為エラーにならない
    <CompB v-if="currentComp === CompB" />
    <CompB v-else />
  </keepAlive>
</template> -->
<!-- CompB.vue -->
<!-- <script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log('CompB onMounted')
})
onUnmounted(() => {
  console.log('CompB onUnmounted')
})
</script>
<template>
  <h2>CompB</h2>
</template> -->

// [include, exclude, max属性] keepAliveに付けるのできる属性
<!-- App.vue -->
<!-- <script setup>
import { shallowRef } from 'vue'
import CompA from './components/CompA.vue'
import CompB from './components/CompB.vue'
import CompC from './components/CompC.vue'
const currentComp = shallowRef(CompA)
</script>
<template>
  <h1>Dynamic Components</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = CompC">C</button>
  // include->指定したコンポーネントのみデータを保持する、
  exclude->指定したコンポーネントのみデータを保持しない、
  max->指定した数値のコンポーネントの数までしかデータを保持しない(最新データよりカウント)
  <keepAlive include="CompB,CompC">
    <component :is="currentComp" />
  </keepAlive>
  <keepAlive>
    <CompB v-if="currentComp === CompB" />
    <CompB v-else />
  </keepAlive>
</template> -->

// [onActivated, onDeactivated] keepAliveのライフサイクル
<!-- App.vue -->
<!-- <script setup>
import { shallowRef } from 'vue'
import CompA from './components/CompA.vue'
import CompB from './components/CompB.vue'
import CompC from './components/CompC.vue'
const currentComp = shallowRef(CompA)
</script>
<template>
  <h1>Dynamic Components</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = CompC">C</button>
  <keepAlive>
    <component :is="currentComp" />
  </keepAlive>
</template> -->
<!-- CompB.vue -->
<!-- <script setup>
import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue'

onMounted(() => {
  console.log('CompB Mounted')
})
onUnmounted(() => {
  console.log('CompB onUnmounted')
})
onActivated(() => {
  console.log('CompB Activated')
})
onDeactivated(() => {
  console.log('CompB onDeactivated')
})
const count = ref(0)
</script>
<template>
  <div>
    <h2>CompB</h2>
    <p>{{ count }}</p>
    <button @click="count++">+1</button>
  </div>
</template> -->

// [teleport]
好きな位置にテンプレートを配置する(モーダルに使用することが多い。他の方法で代用可能な場合が多い)
<!-- <script setup>
import { shallowRef } from 'vue'
import CompA from './components/CompA.vue'
import CompB from './components/CompB.vue'
import CompC from './components/CompC.vue'
const currentComp = shallowRef(CompA)
</script>
<template>
  <h1>Dynamic Components</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = CompC">C</button>
  <keepAlive>
    <component :is="currentComp" />
  </keepAlive>
  <button @click="isShow = true">Open Modal</button>
  //#app, .app, body等を指定可能。指定した要素の一番下にteleportタグ内に記述した内容が表示される
  <teleport to="body" :disabled="false">
    // disabled="true"とすると、teleportせずにこのままの位置で表示される
    // defer属性を付与すると、全てのコンポーネントがマウントされた後に遅れてテレポートされるようになる
    <dialog v-if="isShow" open>
      This is a Modal!
      <button @click="isShow = false">Close</button>
    </dialog>
  </teleport>
</template> -->

// [defineAsyncComponent] 非同期コンポーネントを利用して遅延読み込みする
<!-- <script setup>
import { defineAsyncComponent, shallowRef } from 'vue'
import CompA from './components/CompA.vue'
// import CompB from './components/CompB.vue'
const CompB = defineAsyncComponent(() => import('./components/CompB.vue'))
import CompC from './components/CompC.vue'
const currentComp = shallowRef(CompA)
</script>
<template>
  <h1>Dynamic Components</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = CompC">C</button>
  <component :is="currentComp" />
</template> -->

// 非同期コンポーネントのローディング中やエラー時に別のコンポーネントを表示する
<!-- <script setup>
import { defineAsyncComponent, shallowRef } from 'vue'
import CompA from './components/CompA.vue'
// import CompB from './components/CompB.vue'
import BaseLoader from './components/BaseLoader.vue'
import ErrorMessage from './components/ErrorMessage.vue'

const CompB = defineAsyncComponent({
  loader: () => import('./components/CompB.vue'),
  // 遅延コンポーネントをロード中に別のコンポーネントを表示する(デフォルトでは0.2秒待ってから表示される)
  loadingComponent: BaseLoader,
  // 0.2秒待たずに直ぐに表示される。1000等でも指定可能
  delay: 0,
  // エラー時に表示する
  errorComponent: ErrorMessage,
  // 2000ミリ秒経ってもコンポーネントが表示されない場合に、errorComponentを一時的に表示する
  timeout: 2000
})
import CompC from './components/CompC.vue'
const currentComp = shallowRef(CompA)
</script>
<template>
  <h1>Dynamic Components</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = CompC">C</button>
  <component :is="currentComp" />
</template> -->
