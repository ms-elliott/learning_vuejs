import { createApp } from 'vue'
// Viteがファイルをデフォルトインポート可能なJSに内部で変換している
import App from './App.vue'
// 引数に指定されたコンポーネントをもとに、ユーザーインターフェースを作る
const app = createApp(App)
// 作成したインターフェースを引数で指定した場所に表示する(この場合はdivタブのid="app＂の中に表示)
app.mount('#app')
