import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'


// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faGlobe, faPhone} from "@fortawesome/free-solid-svg-icons";
library.add(faPhone, faGlobe);

const pinia = createPinia()
const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)
    .use(pinia)
    .use(router)
    .mount('#app')
