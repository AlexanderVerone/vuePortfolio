<template>
  <section class="footer">
    <nav class="footer__navigation">
      <ul class="footer__navigation__list">
        <li
            v-for="(item, index) in navigationItems"
            :key="index"
            class="footer__navigation__list__item"
        >
          <RouterLink :to="item.link">
            {{ item.title }}
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div class="footer__site-author">
      <p>Built by
        <span class="footer__name-gradient">
          {{ profileData.name }}
        </span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profileData } from '@/utils'

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

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__navigation__list {
    list-style: none;
    display: flex;
    padding: 0;

    &__item:first-of-type {
      margin-left: 0;
    }

    &__item a {
      margin: 0 10px;
      transition: all 0.5s ease;
      text-decoration: none;
      color: #A7A7A7;
      cursor: pointer;
    }

    &__item a:hover {
      color: white;
    }
  }

  &__name {
    &-gradient {
      background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}

@media (max-width: 800px) {
  .footer {
    flex-direction: column;

    &__navigation__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding-bottom: 10px;
    }
  }
}
</style>