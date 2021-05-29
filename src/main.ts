import { createApp } from "vue"
import App from "./App.vue"
import "./styles/main.css"
import { routes } from "./routes"
import { createRouter, createWebHistory } from "vue-router"
import SocketIo from "./plugins/socket"

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app
  .use(router)
  .use(SocketIo, {
    connection: "http://localhost:8000/",
  })
  .mount("#app")
