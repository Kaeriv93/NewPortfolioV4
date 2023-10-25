import { createApp } from 'vue'
import Navigation from './components/Navigation.vue'
import App from './App.vue'
// import 'styles.scss'
const app = createApp({})

app.component(
    'Navigation', Navigation
)
createApp(App).mount('#app')
