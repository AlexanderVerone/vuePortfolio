<template>
  <section class="card">
    <div class="card__image">
      <img
          :src="cardInformation.image"
          alt=""
      >
    </div>
    <div class="card__text">
      <p class="card__text__title">
        {{ cardInformation.text.title }}
      </p>
      <p class="card__text__description">
        {{ cardInformation.text.description }}
      </p>
      <p class="card__text__stack">
        Tech stack: {{ cardInformation.text.stack }}
      </p>
    </div>
    <div class="card__links">
      <div>
        <img
            :src="copyIcon"
            alt=""
            width="20"
            class="card__links__image"
        >
        <a
            :href="cardInformation.links.previewLink"
            target="_blank"
        >
          Live Preview
        </a>
      </div>
      <div>
        <img
            :src="gitHubLogo"
            alt=""
            width="20"
            class="card__links__image"
        >
        <a
            :href="cardInformation.links.sourceLink"
            target="_blank"
        >
          View Code
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ProjectCardInformation } from '@/types'
import type { PropType } from 'vue'
import gitHubLogo from '@/assets/SocialIcons/github.svg'
import copyIcon from '@/assets/UtilsIcons/link-variant.svg'

defineProps({
  cardInformation: {
    type: Object as PropType<ProjectCardInformation>,
    required: true
  }
})
</script>
<style lang="scss" scoped>
.card {
  border-radius: 12px;
  width: 375px;
  background: #363636;
  overflow: hidden;

  &__image > img {
    width: 100%;
  }

  &__text {
    font-family: Poppins, 'sans-serif';
    padding: 20px;

    &__title {
      font-weight: 500;
      font-size: 28px;
      line-height: 26px;
      padding-bottom: 17px;
    }

    &__description {
      text-align: start;
      font-weight: 300;
      font-size: 18px;
      line-height: 26px;
      padding-bottom: 12px;
      height: 100px;
    }

    &__stack {
      text-align: start;
      padding-top: 20px;
    }
  }

  &__links {
    display: flex;
    justify-content: space-between;
    padding: 0 20px 20px 20px;

    div {
      display: flex;
      align-items: center;
    }

    a {
      color: #A7A7A7;
    }

    &__image {
      margin-right: 10px;
    }
  }
}

@media (max-width: 800px) {
  .card {
    width: 90%;

    &__image > img {
      width: 100%;
    }
  }
}
</style>