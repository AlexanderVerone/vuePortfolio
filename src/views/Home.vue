<template>
  <section>
    <Greeting class="greeting" />
    <TechStack class="tech-stack" />
    <Projects class="projects" />
    <Credentials />
  </section>
</template>

<script setup lang="ts">
import Greeting from '@/components/Greeting.vue'
import TechStack from '@/components/TechStack.vue'
import Projects from '@/components/Projects.vue'
import Credentials from '@/components/Credentials.vue'
</script>

<style scoped lang="scss">
.greeting, .projects, .tech-stack {
  padding-bottom: 200px;
}

@media (max-width: 800px) {
  .greeting, .projects, .tech-stack {
    padding-bottom: 100px;
  }
}
</style>

