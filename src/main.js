import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
library.add(faPhone);


createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(store).use(router).mount('#app')
