<template>
  <section class="tech-stack">
    <div class="tech-stack__text">
      <p class="tech-stack__text__title">
        My Tech Stack
      </p>
      <p class="tech-stack__text__subtitle">
        Technologies I’ve been working with recently
      </p>
    </div>
    <div class="tech-stack__logos">
      <img
          v-for="(techLogo, index) in Object.keys(techStackLogos)"
          :key="index"
          :src="techStackLogos[techLogo]" alt="technology logo"
          width="120"
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import { techStackLogos } from '@/utils'
</script>

<style lang="scss" scoped>
.tech-stack {
  text-align: center;

  &__text {
    font-family: Poppins, 'sans-serif';
    line-height: 26px;

    &__title {
      font-weight: 700;
      font-size: 48px;
      color: #CCCCCC;
      padding-bottom: 49px;
    }

    &__subtitle {
      font-weight: 400;
      font-size: 32px;
      color: #A7A7A7;
    }
  }

  &__logos {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    align-items: center;
    gap: 2.5rem;
    padding-top: 100px;
    justify-items: center;
  }
}

@media (max-width: 800px) {
  .tech-stack {
    &__text {
      &__title {
        line-height: 60px;
        font-size: 30px;
        padding-bottom: 10px;
      }

      &__subtitle {
        line-height: 40px;
        font-size: 18px;
      }
    }

    &__logos {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      padding-top: 50px;

      > img {
        width: 80px;
      }
    }
  }
}
</style>