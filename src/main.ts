import { createApp } from "vue"
import App from "./App.vue"
import "./styles/main.css"
import { routes } from "./routes"
import { createRouter, createWebHistory } from "vue-router"

const app = createApp(App)

app.config.devtools = process.env.NODE_ENV === "development"

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router).mount("#app")
