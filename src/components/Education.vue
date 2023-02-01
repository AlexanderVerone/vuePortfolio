<template>
  <section class="education">
    <p class="education__title">
      Education
    </p>
    <AboutCard
        v-for="(job, index) in educationExperience"
        :key="index"
        :employment-information="job"
        :is-divider-visible="isDividerVisible(index, educationExperience)"
    />
  </section>
</template>

<script setup lang="ts">
import { educationExperience } from '@/utils'
import AboutCard from '@/components/AboutCard.vue'
import { isDividerVisible } from '@/helperFunctions'
</script>

<style scoped lang="scss">
.education {
  text-align: start;
  font-family: 'Poppins', sans-serif;

  &__title {
    font-size: 42px;
    line-height: 52px;
    font-weight: 600;
  }
}
@media (max-width: 700px) {
  .education {
    &__title {
      text-align: center;
    }
  }
}
</style>