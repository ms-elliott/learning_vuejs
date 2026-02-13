<!-- アニメーション -->
// CSSトランジション、CSSアニメーション
<!-- <script setup>
import { ref } from 'vue'

const isShow = ref(true)
</script>
<template>
  <h1>Animation</h1>
  <div :class="{ 'opacity-80': isShow, 'opacity-20': !isShow, slide: !isShow }">Hello</div>
  <button @click="isShow = !isShow">Show</button>
</template>
<style scoped>
div {
  transition: opacity 1s;
}
.slide {
  animation: slide 1s infinite;
}
.opacity-80 {
  opacity: 0.8;
}
.opacity-20 {
  opacity: 0.2;
}
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
}
</style> -->

// [Transition] 要素の表示時や消える時にアニメーションをつける方法
<!-- <script setup>
import { ref } from 'vue'

const isShow = ref(true)
</script>
<template>
  <h1>Animation</h1>
  <button @click="isShow = !isShow">switch</button>
  <Transition>
    // Transitionコンポーネントの中は必ず単一要素(ネストやv-if&v-elseの組み合わせは可)
    <div v-if="isShow">Hello</div>
  </Transition>
</template>
<style scoped>
.v-enter-from {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 1s;
}
.v-enter-to {
  opacity: 1;
}
.v-leave-from {
  opacity: 1;
}
.v-leave-active {
  transition: opacity 1s;
}
.v-leave-to {
  opacity: 0;
}
</style> -->

// [name props] クラスの名前をv以外にする
<!-- <script setup>
import { ref } from 'vue'

const isShow = ref(true)
</script>
<template>
  <h1>Animation</h1>
  <button @click="isShow = !isShow">switch</button>
  <Transition name="fade">
    <div v-if="isShow">Hello</div>
  </Transition>
</template>
<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-leave-to {
  opacity: 0;
}
</style> -->

// TransitionコンポーネントでCSSアニメーションを使う
<!-- <script setup>
import { ref } from 'vue'

const isShow = ref(true)
</script>
<template>
  <h1>Animation</h1>
  <button @click="isShow = !isShow">switch</button>
  <Transition name="fade">
    <div v-if="isShow">Hello fade</div>
  </Transition>
  <Transition name="slide">
    <div v-if="isShow">Hello Slide</div>
  </Transition>
</template>
<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide 1s;
}
@keyframes slide {
  0% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
  }
}
</style> -->

// [appear] 最初の表示時にアニメーションを付ける
<!-- <script setup>
import { ref } from 'vue'

const isShow = ref(true)
</script>
<template>
  <h1>Animation</h1>
  <button @click="isShow = !isShow">switch</button>
  <Transition name="fade" appear>
    <div v-if="isShow">Hello fade</div>
  </Transition>
  <Transition name="slide" appear>
    <div v-if="isShow">Hello Slide</div>
  </Transition>
</template>
<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide 1s;
}
@keyframes slide {
  0% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
  }
}
</style> -->

// クラスの名前を自由に変える
<!-- <script setup>
import { ref } from 'vue'

const isShow = ref(true)
</script>
<template>
  <h1>Animation</h1>
  <button @click="isShow = !isShow">switch</button>
  // 複数のクラスを指定する時はスペースで繋ぐ。enter-active-class="hello foo"
  <Transition name="fade" enter-active-class="hello">
    <div v-if="isShow">Hello fade</div>
  </Transition>
</template>
<style scoped>
.fade-enter-from {
  opacity: 0;
}
.hello {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide 1s;
}
</style> -->

// Animate.CSSを使う
<!-- ・webでAnimate.CSSのサイトを開く
・インストールコマンドを実行する
・App.vueにimport文を記述する -->

// [mode] ２つの要素が切り替わる時に綺麗にアニメーションする
<!-- <script setup>
import { ref } from 'vue'

const isShow = ref(true)
</script>
<template>
  <h1>Animation</h1>
  <button @click="isShow = !isShow">switch</button>
  // "in-out"を指定すると、次の要素が先に表示され、その後に前の要素が消える
  <Transition name="fade" mode="out-in">
    // 複数の要素を切り替える場合、中身の要素はここに直接記述する。コンポーネントにまとめて別のファイルなどで記述すると意図したアニメーションが行われない。
    // slotは問題なく動く。
    <div v-if="isShow">ON</div>
    <div v-else>OFF</div>
  </Transition>
</template>
<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide 1s;
}
@keyframes slide {
  0% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
  }
}
</style> -->

// Transitionコンポーネントが発生させるイベント6つ
<!-- <script setup>
import { ref } from 'vue'

const isShow = ref(true)
function beforeEnter(el) {
  console.log('beforeEnter', el)
  el.style.transform = 'translateX(30px)'
}
function enter(el, done) {
  console.log('enter', el)
  let translateXValue = 30
  const intervalId = setInterval(() => {
    translateXValue -= 1
    // jsだと、バッククォートで囲った場合は変数を埋めることができる
    el.style.transform = `translateX(${translateXValue}px)`
    if (translateXValue === 0) {
      clearInterval(intervalId)
      done()
    }
  }, 20)
}
function afterEnter(el) {
  console.log('afterEnter', el)
}
function beforeLeave(el) {
  console.log('beforeLeave', el)
}
function leave(el, done) {
  console.log('leave', el)
  let translateXValue = 0
  const intervalId = setInterval(() => {
    translateXValue += 1
    // jsだと、バッククォートで囲った場合は変数を埋めることができる
    el.style.transform = `translateX(${translateXValue}px)`
    if (translateXValue === 30) {
      clearInterval(intervalId)
      // ここまで来たらアニメーションが終わりという合図を明示的に示す。途中でアニメーションが消えることを防ぐ
      done()
    }
  }, 20)
}
function afterLeave(el) {
  console.log('afterLeave', el)
}
</script>
<template>
  <h1>Animation</h1>
  <button @click="isShow = !isShow">switch</button>
  // JSだけでアニメーションを作る場合は:css="false"を記述した方がベター
  <Transition
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <div v-if="isShow">Hello</div>
  </Transition>
</template>
<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide 1s;
}
@keyframes slide {
  0% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
  }
}
</style> -->

// [enter-cancelled, leave-cancelled]
ボタンを続けて押してenter実行中にleaveを実行するとアニメーションがカクカクするのを直す
<!-- <script setup>
import { ref } from 'vue'

const isShow = ref(true)
function beforeEnter(el) {
  console.log('beforeEnter', el)
  el.style.transform = 'translateX(30px)'
}
let enterIntervalId
function enter(el, done) {
  console.log('enter', el)
  let translateXValue = 30
  enterIntervalId = setInterval(() => {
    translateXValue -= 1
    el.style.transform = `translateX(${translateXValue}px)`
    if (translateXValue === 0) {
      clearInterval(enterIntervalId)
      done()
    }
  }, 20)
}
function afterEnter(el) {
  console.log('afterEnter', el)
}
function enterCancelled(el) {
  console.Consolelog('enterCancelled', el)
  clearInterval(enterIntervalId)
}
function beforeLeave(el) {
  console.log('beforeLeave', el)
}
let leaveIntervalId
function leave(el, done) {
  console.log('leave', el)
  let translateXValue = 0
  leaveIntervalId = setInterval(() => {
    translateXValue += 1
    el.style.transform = `translateX(${translateXValue}px)`
    if (translateXValue === 30) {
      clearInterval(leaveIntervalId)
      done()
    }
  }, 20)
}
function afterLeave(el) {
  console.log('afterLeave', el)
}
function leaveCancelled(el) {
  console.Consolelog('leaveCancelled', el)
  clearInterval(leaveIntervalId)
}
</script>
<template>
  <h1>Animation</h1>
  <button @click="isShow = !isShow">switch</button>
  <Transition
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled"
  >
    // 要素がv-showの場合は@leave-cancelledが必要
    <div v-if="isShow">Hello</div>
  </Transition>
</template>
<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide 1s;
}
@keyframes slide {
  0% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
  }
}
</style> -->

// [TransitionGroup] リストに対してアニメーションを付ける
<!-- <script setup>
import { ref } from 'vue'

const fruits = ref(['Apple', 'Banana', 'Grape'])
const newFruit = ref('')
</script>
<template>
  <h1>Animation</h1>
  <input v-model="newFruit" type="text" />
  <button @click="fruits.unshift(newFruit)">Add</button>
  // Transitionとの違い
  ・複数要素を入れられる
  ・key属性が必須
  ・modeプロップスは使えない
  ・tagプロップスが使える divを指定すると、まるでtransitionGroupがdivタグになったように振る舞う
  ・moveクラスが付く
  <TransitionGroup name="fade" tag="div">
    <div v-for="(fruit, index) in fruits" :key="fruit" @click="fruits.splice(index, 1)">
      {{ fruit }}
    </div>
  </TransitionGroup>
</template>
<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide 1s;
}
@keyframes slide {
  0% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
  }
}
</style> -->

// [move]クラス
滑らかなアニメーションをリストに付ける(今回の場合はリストの要素を追加したり消したりした後に要素が上下に移動する動き)
<!-- <script setup>
import { ref } from 'vue'

const fruits = ref(['Apple', 'Banana', 'Grape'])
const newFruit = ref('')
</script>
<template>
  <h1>Animation</h1>
  <input v-model="newFruit" type="text" />
  <button @click="fruits.unshift(newFruit)">Add</button>
  <TransitionGroup name="fade" tag="div">
    <div v-for="(fruit, index) in fruits" :key="fruit" @click="fruits.splice(index, 1)">
      {{ fruit }}
    </div>
  </TransitionGroup>
</template>
<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-move {
  transition: transform 1s;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
  position: absolute;
}
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide 1s;
}
@keyframes slide {
  0% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
  }
}
</style> -->
