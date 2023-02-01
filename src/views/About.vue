<template>
  <section>
    <AboutMe class="about-me" />
    <WorkExperience class="work-experience" />
    <Education class="education" />
  </section>
</template>

<script setup lang="ts">
import AboutMe from '@/components/AboutMe.vue'
import WorkExperience from '@/components/WorkExperience.vue'
import Education from '@/components/Education.vue'
</script>

<style lang="scss" scoped>
.about-me, .work-experience, .education {
  margin-bottom: 38px;
}
</style>