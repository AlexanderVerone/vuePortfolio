<template>
  <section class="projects">
    <div class="projects__text">
      <p class="projects__text__title">
        Projects
      </p>
      <p class="projects__text__subtitle">
        Things I’ve built so far
      </p>
    </div>
    <div class="projects__cases">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :card-information="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from '@/utils'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<style lang="scss" scoped>
.projects {
  text-align: center;

  &__text {
    font-family: Poppins, 'sans-serif';
    line-height: 26px;
    padding-bottom: 100px;

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

  &__cases {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 40px;
  }
}

@media (max-width: 1200px) {
  .projects {
    &__cases {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      justify-items: center;
    }
  }
}

@media (max-width: 800px) {
  .projects {
    &__text {
      padding-bottom: 50px;

      &__title {
        font-size: 30px;
        padding-bottom: 10px;
      }

      &__subtitle {
        font-size: 18px
      }
    }

    &__cases {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
}
</style>