import { createApp } from 'vue';

import router from './router.js';
import store from './store/index.js'
import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseCard.vue'
import BaseBadge from './components/ui/BaseBadge.vue'
/*In main js only register the global components  which are used all over the platform*/
const app = createApp(App).mount('#app')

app.use(router)
app.use(store)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)
app.mount('#app');