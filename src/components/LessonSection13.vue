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

// リダイレクト(特定のページにアクセスすると別のページに飛ぶ)、エイリアス(パスの別名)
<!-- index.js -->
<!-- import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import NotFound from '../views/NotFound.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    // 1つのルート設定に対して、複数のパスを指定したい場合に使用
    alias: ['/me', '/yoshipi']
    name: 'about',
    component: AboutView
  },
  {
    path: '/blog/:id*',
    name: 'blog',
    redirect: {name: 'home'}
  } ,
  {
    path: '/:catchAll(.*)*',
    name: 'notFound',
    redirect : '/'
  }
  ]
})
export default router -->

// [props: true]コンポーネントの再利用性を上げる
<!-- index.js -->
<!-- import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import NotFound from '../views/NotFound.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    alias: ['/me', '/yoshipi']
    name: 'about',
    component: AboutView
  },
  {
    path: '/blog/:id*',
    name: 'blog',
    redirect: {name: 'home'}
  } ,
  {
    path: '/:catchAll(.*)*',
    name: 'notFound',
    props: true,
    redirect : '/'
  }
  ]
})
export default router -->
<!-- NotFound.vue -->
<!-- <script setup>
// パラメータの値をPropsとして受け取ることが可能
defineProps({
  catchAll: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <h2>NotFound</h2>
  <p>{{ catchAll }}</p>
</template> -->

// ネストされたRouterViewの使い方
<!-- index.js -->
<!-- import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import PostsView from '../views/PostsView.vue'
import LikesView from '../views/LikesView.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:id',
      name: 'profile',
      component: ProfileView
      // ネストされたRouterViewで表示される
      children: [
        {
          // pathの先頭に/を付けると、親要素+/passではなく、/passとして認識される
          // ''(空文字)を指定すると、親のpathにアクセスするだけで表示される様になる
          path: 'posts',
          component: PostsView
        },
        {
          path: 'likes',
          component: LikesView
        },
      ]
    }
  ]
})
export default router -->
<!-- App.vue -->
<!-- <script setup></script>
<template>
  <h1>Vue Router</h1>
  <RouterLink :to="{ name: 'home'}">Home</RouterLink>
  <RouterLink :to="{ name: 'profile', params: { id: 'yoshipi' }}">Profile</RouterLink>
  <RouterView />
</template> -->
<!-- HomeView.vue -->
<!-- <template>
  <h2>Home</h2>
  <RouterView />
</template> -->
<!-- ProfileView.vue -->
<!-- <script setup></script>
<template>
  <h2>Profile(@){{ $route.params.id }}</h2>
  <RouterView />
</template> -->
<!-- PostsView.vue -->
<!-- <script setup></script>
<template>
  <h2>Posts</h2>
</template> -->
<!-- LikesView.vue -->
<!-- <script setup></script>
<template>
  <h2>Likes</h2>
</template> -->

// [名前付きビュー] 複数のRouterViewを同じ階層に配置する
<!-- index.js -->
<!-- import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import ProfileView from '../views/NewsView.vue'
import ProfileView from '../views/ProfileFooter.vue'
import ProfileView from '../views/PeopleYouMayKnow.vue'
import ProfileView from '../views/HomeFooter.vue'
import PostsView from '../views/PostsView.vue'
import LikesView from '../views/LikesView.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        Sidebar: NewsView,
        Footer: HomeFooter,
      }
    },
    {
      path: '/:id',
      name: 'profile',
      components: {
        default: ProfileView,
        Sidebar: PeopleYouMayKnow,
        Footer: ProfileFooter,
      }
      children: [
        {
          path: 'posts',
          component: PostsView
        },
        {
          path: 'likes',
          component: LikesView
        },
      ]
    }
  ]
})
export default router -->
<!-- App.vue -->
<!-- <script setup></script>
<template>
  <h1>Vue Router</h1>
  <RouterLink :to="{ name: 'home'}">Home</RouterLink>
  <RouterLink :to="{ name: 'blog', params: { id: 'yoshipi' }}">Profile</RouterLink>
  main>
    <RouterView name="Sidebar" />
  </div>
  <RouterView name="Footer" />
</template>
<style scoped>
.container {
  display: flex;
  justify-content: space-evenly;
}
</style> -->

// [Transition] Vue Routerと一緒に使う方法
<!-- index.js -->
<!-- import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '../views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
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
  <RouterLink :to="{ name: 'home' }">Home</RouterLink>
  <RouterLink :to="{ name: 'blog', params: { id: 3 } }">Blog</RouterLink>
  // 下記方法で記述すると、transitionの消えるアニメーションも問題なく動く
  <RouterView v-slot="{ Component, route }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
</template>
<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
</style> -->
<!-- Blog.vue -->
<!-- <template>
  <div>
    <h2>Blog(id: {{ $route.params.id }})</h2>
    <RouterLink :to="{ name: 'blog', params: { id: Number($route.params.id) + 1 }}">Next</RouterLink>
  </div>
</template> -->

// スクロールの振る舞いの指定
(vueのデフォルトの挙動では、別のページを開いた際に新しいページの先頭にスクロールが戻らない)
<!-- index.js -->
<!-- import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '../views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: BlogView
    }
  ],
  // 引数を指定すると、移動先・移動元、戻るページのスクロール位置のデータを取得することが可能
  scrollBehaviour(to, from, savedPosition) {
    return {
      // 上から100px分スクロールした位置を表示する。top,left以外に"el: '#blog'"などでidの表示位置を指定することも可能
      top: 100
      left: 0
    }
    // 応用編
    return new Promise(resolve => {
      // Promiseを設定するとresolveされるまでスクロールが実行されない。
      setTimeout(() => {
        if (savedPosition) {
          return resolve(savedPosition)
        }
        if (to.hash) {
          return resolve({
            el: to.hash,
            top: 20
            behavior: 'smooth'
          })
        }
        return resolve({ top: 0, left: 0, behavior: 'smooth' })
        resolve()
        // ボタン押下2秒後にスクロールが実行される
      }, 2000);
    })

  }
})
export default router -->
<!-- App.vue -->
<!-- <script setup></script>
<template>
  <h1>Vue Router</h1>
  <RouterLink :to="{ name: 'home' }">Home</RouterLink>
  <RouterLink :to="{ name: 'blog', params: { id: 3 }, hash: '#blog' }">Blog(id: 3)</RouterLink>
  <RouterView v-slot="{ Component, route }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
</template> -->

// [beforeEach] ナビゲーションガードで特定のページに移動時に処理を実行する
<!-- index.js -->
<!-- import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '../views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: BlogView
    }
  ],
})
router.beforeEach(async (to, from) => {
  await new Promise(resolve => setTiemout(resolve, 2000))
  console.log(to, from)
  // 戻り値によってページ移動の挙動を変更できる
  // false・・・ページ移動しない
  return false
  //if (to.name === 'blog') return true
})
export default router -->
<!-- App.vue -->
<!-- <script setup></script>
<template>
  <h1>Vue Router</h1>
  <RouterLink :to="{ name: 'home' }">Home</RouterLink>
  <RouterLink :to="{ name: 'blog', params: { id: 3 }, hash: '#blog' }">Blog(id: 3)</RouterLink>
  <RouterView />
</template> -->

// [beforeEnter] ナビゲーションガードで特定のページに移動時に処理を実行する
<!-- index.js -->
<!-- import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '../views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: [foo, bar]
      component: HomeView,
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: BlogView,
      async beforeEnter(to, from) {
        console.log('boforeEnter', to, from)
        return '/'
      }
    }
  ],
})
function foo() {}
function bar() {}
router.beforeEach(() => {
  console.log('beforeEach')
})
export default router -->
<!-- App.vue -->
<!-- <script setup></script>
<template>
  <h1>Vue Router</h1>
  <RouterLink :to="{ name: 'home' }">Home</RouterLink>
  <RouterLink :to="{ name: 'blog', params: { id: 3 }, hash: '#blog' }">Blog(id: 3)</RouterLink>
  <RouterView />
</template> -->

// [onBeforeRouteUpdate] ナビゲーションガードでコンポーネントの再利用時に処理を実行する
