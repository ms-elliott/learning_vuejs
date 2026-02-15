<!-- Vue RouterでURL毎に違うコンポーネントを表示する -->
// Vue Routerをセットアップ ・コマンドで"npm install vue-router@4"を実行
<!-- main.jsに下記を記述 -->
<!-- import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app') -->
<!-- index.js -->
<!-- import { createRouter } from 'vue'
// vue-routerをvueと紐づける
const router = createRouter({})
export default router -->

// Vue Router 設定 記述方法
<!-- index.js  -->
<!-- import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.js'
import AboutView from '../views/AboutView.js'
const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: HomeView
  },
  {
    path: '/',
    component: AboutView
  }]
})
export default router -->
<!-- App.vue -->
<!-- <script setup></script>
<template>
  <h1>Vue Router</h1>
  <RouterView />
</template> -->

// [RouteLink] 効率よくページを移動する
<!-- App.vue -->
<!-- <script setup></script>
<template>
  <h1>Vue Router</h1>
  // Vue Routerを使う場合は、基本的にaタグの代わりにRouerLinkを使用する
  <a href="/">Home</a> | <a href="/about">About</a>
  <RouterLink to="/">Home</RouterLink> | <RouteLink to="/about">About</RouteLink>
  // 別のページのリンクを貼りたい場合はaタグを使う
  <a href="https://vuejs.org"></a>
  <RouterView />
</template> -->

// [動的なto属性] 移動先のページをオブジェクトで指定する
<!-- <script setup></script>
<template>
  <h1>Vue Router</h1>
  // to属性をv-bindで指定。オブジェクトで指定可能。
  <RouterLink :to="'/'">Home</RouterLink> |
  // query・・・URLの末尾につく(?lang=ja),　hash・・・URLの最後に付く(#title)、ハッシュと同じID属性のところにブラウザがスクロールする
  <RouteLink :to="{ path: '/about', query: { lang: 'ja' }, hash: '#title' }">About</RouteLink>
  <a href="https://vuejs.org"></a>
  <RouterView />
</template> -->

// [push, replace, go] プログラムから画面を移動する
<!-- <script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function toAbout() {
  console.log('toAbout')
  // ①push...前ページの履歴が残る、replace・・・履歴は残らない、
  router.push({ path: '/about' })
  // 履歴５個分戻る、正の値の場合は進む。
  router.go(-5)
}
</script>
<template>
  <h1>Vue Router</h1>
  // ②RouterLinkにreplaceを指定する
  <RouterLink :to="'/?lang=ja#title'" replace>Home</RouterLink> |
  <button @click="toAbout">About</button>
  // ③templateでrouterオブジェクトを使う(頭に$を付ける。①の記述やimport等は一切不要で使用できる)
  <button @click="$router.push({ path: '/about' })">About</button>
  <RouterView />
</template> -->

// [name] ルートに名前をつける
<!-- index.js -->
<!-- import AboutView from '../views/AboutView.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'about',
    component: AboutView
  }]
})
export default router -->
<!-- App.vue -->
<!-- <script setup></script>
 <template>
  <h1>Vue Router</h1>
  // 必ずオブジェクトで指定する
  <RouterLink :to="{ name: 'home'}">Home</RouterLink> |
  <RouterLink :to="{ name: 'about'}">About</RouterLink>
  <RouterView />
</template> -->

// [パラメータ(:)] 動的なパスを作る
<!-- index.js -->
<!-- import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'about',
    component: AboutView
  },
  {
    // "/blog/xxx"とどんな文字列が来てもBlogViewのコンポーネントを表示させる
    path: '/blog/:id',
    name: 'blog',
    component: BlogView
  }
  ]
})
export default router -->
<!-- App.vue -->
<!-- <script setup></script>
<template>
  <h1>Vue Router</h1>
  <RouterLink :to="{ name: 'home' }">Home</RouterLink> |
  <RouterLink :to="{ name: 'about' }">About</RouterLink>
  // paramsは必ずnameと一緒に使用する
  <RouterLink :to="{ name: 'blog', params: { id: 3 } }">About</RouterLink>
  <RouterView />
</template> -->
<!-- BlogView.vue -->
<!-- <template>
  <h2>Blog</h2>
 </template> -->

// routeオブジェクトでURLの情報を取得する
<!-- BlogView.vue -->
<!-- <script setup>
import { onUnmounted, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route)
watch(
  () => route.params.id,
  () => {
    console.log('watch')
  },
)
onMounted(() => {
  console.log('onMounted')
})
onUnmounted(() => {
  console.log('on Unmounted')
})
</script>
<template>
  <h2>Blog(id: {{ $route.params.id }})</h2>
  <p>ver: {{ $route.params.version }}</p>
  <RouterLink
    :to="{
      name: 'blog',
      params: { id: Number($route.params.id) + 1, version: $route.params.version },
    }"
    >Next</RouterLink>
</template> -->

// パラメータに色々なルールを追加する
<!-- index.js -->
<!-- import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'about',
    component: AboutView
  },
  {
    // ":id"と":foo"の部分に好きな文字を入れることができる(パラメータの名前はアルファベット大小、数字、アンダースコアが使える)
    path: '/blog/id-:id-number-:foo',
    name: 'blog',
    component: BlogView
  },
  {
    // "\\"の記述で単純なバックスラッシュを意味する。"\\d+"は、１桁以上の数字を意味する
    // 何も記述しない場合、内部的には"[^/]+"(スラッシュ以外の文字が1文字以上)が付いているものとして処理する。
    // ".+"で全ての文字を意味する(/をいくつもとることが可能) ー＞ Vue Routerの場合は、":id+"と記述するだけでも可能
    // ":id?"と記述することで、何か入れてもいいし入れなくてもよいという意味になる
    // ":id*"は、+と?を同時につけた様な動きをする()
    path: '/blog/:id(\\d+)',
    name: 'blog',
    component: BlogView
  }
  ]
})
export default router -->

// どんなパスでも全てキャッチする処理
<!-- index.js -->
<!-- import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import NotFound from '../views/NotFound.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [{
    // 適用される順番は記述した順ではなく、詳細度で適用される(末尾に*があると優先度は低くなる)
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'about',
    component: AboutView
  },
  {
    path: '/blog/:id*',
    name: 'blog',
    component: BlogView
  } ,
  {
    // 末尾に*をつけた場合、空のセグメントがあると(//と連続する)パスが引っかからない
    // vueコンポーネント側で$route.params.catchAllでURLを取得した際に、末尾のがあるとセグメント毎に区切った配列で取得する。ない場合は1つの文字列として取得する。
    path: '/:catchAll(.*)*',
    name: 'notFound',
    component: NotFound
  }
  ]
})
export default router -->
<!-- NotFound.vue -->
<!-- <template>
  <h2>NotFound</h2>
</template> -->

// リダイレクト(特定のページにアクセスすると別のページに飛ぶ)
