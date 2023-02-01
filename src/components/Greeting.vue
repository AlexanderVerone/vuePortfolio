<template>
  <section class="home">
    <div class="home__greeting-text">
      <p>
        Hi 👋
      </p>
      <p>
        My name is
      </p>
      <p class="home__greeting-text__name">
        {{ profileData.name }}
      </p>
      <p>
        I build things for web
      </p>
    </div>
    <div class="home__avatar">
      <img
          :src="profileData.avatar"
          alt="avatar"
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import { profileData } from '@/utils'
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__greeting-text {
    font-family: Poppins, sans-serif;
    font-size: 58px;
    line-height: 70px;
    letter-spacing: -1px;
    white-space: pre-line;
    color: #D9D9D9;

    p {
      font-weight: 700;
    }

    &__name {
      background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &__avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(0deg, #13B0F5 -2.06%, #E70FAA 100%);
    border-radius: 50%;
    width: 415px;
    height: 415px;

    > img {
      border-radius: 50%;
      width: 400px;
      height: 400px;
      object-fit: cover;
    }
  }
}

@media (max-width: 1100px) {
  .home {
    flex-direction: column-reverse;
    text-align: center;

    &__greeting-text {
      padding-top: 20px;
    }
  }
}

@media (max-width: 800px) {
  .home {

    &__avatar {
      width: 300px;
      height: 300px;

      > img {
        width: 290px;
        height: 290px;
      }
    }

    &__greeting-text {
      font-size: 30px;
      line-height: 45px;
      padding-top: 20px;
      text-align: center;
    }
  }
}
</style>