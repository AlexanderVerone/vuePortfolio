<template>
  <section class="contact">
    <p>
      For any questions you can mail me:
    </p>
    <p class="contact__email-gradient">
      {{ profileData.email }}
    </p>
  </section>
</template>

<script setup lang="ts">
import { profileData } from '@/utils'
</script>

<style scoped lang="scss">
.contact {
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 58px;
  line-height: 70px;
  letter-spacing: -1px;
  padding-bottom: 150px;

  &__email {
    &-gradient {
      background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}

@media (max-width: 1100px) {
  .contact > p {
    font-size: 30px;
  }
}

@media (max-width: 600px) {
  .contact > p {
    font-size: 20px;
    line-height: 40px;
  }
}
</style>