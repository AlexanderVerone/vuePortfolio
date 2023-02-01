<template>
  <header class="header">
    <div class="header__logo">
      <img
          :src="mainLogo"
          alt="main logo"
      >
    </div>
    <nav class="header__navigation">
      <ul class="header__navigation__list">
        <li
            v-for="(item, index) in navigationItems"
            :key="index"
            class="header__navigation__list__item"
        >
          <RouterLink :to="item.link">
            {{ item.title }}
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div class="header__links">
      <ul class="header__links__list">
        <li
            v-for="(link, index) in socialLinks"
            :key="index"
            class="header__links__list__item"
        >
          <a
              :href="link.path"
              target="_blank"
          >
          <img
              :src="link.logo"
              alt="social logo icon"
          >
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { socialLinks } from '@/utils'
import mainLogo from '@/assets/PersonalImages/logo_verone.svg'

const navigationItems = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'About',
    link: '/about'
  },
  {
    title: 'Tech Stack',
    link: '/tech-stack'
  },
  {
    title: 'Projects',
    link: '/projects'
  },
  {
    title: 'Contact',
    link: '/contact'
  }
]
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 150px;

    &__logo {
      display: flex;
    }

    &__links__list {
      display: flex;
      list-style: none;
      align-items: center;
      &__item {
        margin: 0 10px;
        cursor: pointer;
        img {
          vertical-align: bottom;
          transition: filter 0.5s ease;
        }
        img:hover {
          filter: brightness(200%)
        }
      }
    }
    &__navigation__list {
      list-style: none;
      display: flex;
      &__item a {
        margin: 0 10px;
        text-decoration: none;
        color: #A7A7A7;
        transition: all 0.5s ease;
        cursor: pointer;
      }
      &__item a:hover {
        color: white;
      }
    }
  }

  @media (max-width: 800px) {
    .header {
      display: flex;
      flex-direction: column;
      padding-bottom: 75px;

      &__logo {
        padding-bottom: 10px;
      }

      &__navigation {
        padding-bottom: 10px;
        &__list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding: 0
        }
      }

      &__links__list {
        padding: 0;
      }
    }
  }
</style>