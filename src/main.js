import "./assets/scss/style.scss";
import "./assets/style/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Sticky from "vue-sticky-directive";
import VueSlideToggle from "vue-slide-toggle";

const app = createApp(App);
app.use(VueSlideToggle);
app.use(Sticky);
app.use(router);
app.use(store);
app.mount("#app");
