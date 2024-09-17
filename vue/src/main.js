import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import MyComponent from './MyComponent.vue'
import MyHeader from './components/MyHeader.vue'

const app = createApp(App)
app.component('MyComponent', MyComponent)
app.component('MyHeader',MyHeader)
const mountedApp = app.mount('#app')
