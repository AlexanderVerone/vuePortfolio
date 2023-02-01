import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import Projects from '@/components/Projects.vue'
import TechStack from '@/components/TechStack.vue'
import About from '@/views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about me",
      component: About
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/tech-stack",
      name: "tech stack",
      component: TechStack
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
});

export default router;
