<template>
  <section class="about">
    <p class="about__title">
      About Me
    </p>
    <p class="about__text">
      {{ aboutMeText }}
    </p>
  </section>
</template>

<script setup lang="ts">
import { aboutMeText } from '@/utils'
</script>

<style scoped lang="scss">
.about {
  text-align: start;
  font-family: 'Poppins', sans-serif;

  &__title {
    font-size: 42px;
    line-height: 52px;
    font-weight: 600;
    margin-bottom: 38px;
  }

  &__text {
    font-size: 18px;
    line-height: 30px;
  }
}

@media (max-width: 700px) {
  .about {
    &__title {
      text-align: center;
    }
  }
}
</style>