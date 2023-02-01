<template>
  <section class="credentials">
    <div class="credentials__logo">
      <img
          :src="mainLogoGray"
          alt="grey logo"
      >
    </div>
    <div class="credentials__information">
      <div class="credentials__contacts">
        <a :href="`mailto: ${profileData.email}`">
          {{ profileData.email }}
        </a>
      </div>
      <div class="credentials__links">
        <ul class="credentials__links__list">
          <li
              v-for="(link, index) in socialLinks"
              :key="index"
              class="credentials__links__list__item"
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
    </div>
  </section>
</template>

<script setup lang="ts">
import mainLogoGray from '@/assets/PersonalImages/logo_verone_gray.svg'
import { profileData, socialLinks } from '@/utils'
</script>

<style lang="scss" scoped>
.credentials {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__information {
    display: flex;
    align-items: center;
  }

  &__contacts {
    a {
      text-decoration: none;
      color: #A7A7A7;
      transition: all 0.5s   ease;
    }
    a:hover {
      color: white;
    }
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
}

@media (max-width: 800px) {
  .credentials {
    display: flex;
    flex-direction: column;

    &__logo {
      padding-bottom: 10px;
    }
  }
}
</style>