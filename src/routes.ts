import Home from "./pages/Home.vue"
import Chat from "./pages/Chat.vue"

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { title: "Home" },
  },
  {
    path: "/chat",
    name: "chat",
    component: Chat,
    meta: { title: "Chat" },
  },
]
