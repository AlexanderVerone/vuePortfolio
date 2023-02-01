<template>
  <TheHeader />
  <RouterView />
  <hr class="divider" />
  <TheFooter />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/Core/TheHeader.vue'
import TheFooter from '@/components/Core/TheFooter.vue'
</script>

<style scoped lang="scss">
.divider {
  border: 0;
  border-top: 2px solid #42446E;
  opacity: 0.3;
  margin: 50px 0;
}
</style>