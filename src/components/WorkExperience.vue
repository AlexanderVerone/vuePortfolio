<template>
  <section class="experience">
    <p class="experience__title">
      Work Experience
    </p>
    <AboutCard
      v-for="(experienceElement, index) in workExperience"
      :key="index"
      :employment-information="experienceElement"
      :is-divider-visible="isDividerVisible(index, workExperience)"
    />
  </section>
</template>

<script setup lang="ts">
import { workExperience } from '@/utils'
import AboutCard from '@/components/AboutCard.vue'
import { isDividerVisible } from '@/helperFunctions'
</script>

<style scoped lang="scss">
.experience {
  text-align: start;
  font-family: 'Poppins', sans-serif;

  &__title {
    font-size: 42px;
    line-height: 52px;
    font-weight: 600;
    margin-bottom: 38px;
  }
}

@media (max-width: 700px) {
  .experience {
    &__title {
      text-align: center;
    }
  }
}
</style>