import { createApp } from 'vue'
import './style.css'

import api_app from './api_app.vue';
import MyComponent from './MyComponent.vue'
import MyHeader from './components/MyHeader.vue'

const app = createApp(api_app)
app.component('MyComponent', MyComponent)
app.component('MyHeader',MyHeader)
app.component('api_app',api_app)
const mountedApp = app.mount('#app')
