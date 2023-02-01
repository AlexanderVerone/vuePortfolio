<template>
  <section class="card">
    <div>
      <p class="card__title">
        {{ employmentInformation.position }}
      </p>
      <div class="card__company">
        <img :src="office_icon" alt="building icon">
        <p class="card__company__name">
          {{ employmentInformation.companyName }}
        </p>
        <img
            :src="location_icon"
            alt="location icon"
        >
        <p>
          {{ employmentInformation.companyLocation }}
        </p>
      </div>
    </div>
    <div class="card__employment">
      <div class="card__employment-type">
        <p>
          {{ employmentInformation.employmentType }}
        </p>
      </div>
      <div class="card__employment-period">
        <img
            :src="calendar_icon"
            alt="calendar icon"
        >
        <p>
          {{ employmentInformation.employmentPeriod }}
        </p>
      </div>
    </div>
  </section>
  <hr
      v-if="isDividerVisible"
      class="divider"
  />
</template>

<script setup lang="ts">
import office_icon from '@/assets/UtilsIcons/office.svg'
import location_icon from '@/assets/UtilsIcons/location.svg'
import calendar_icon from '@/assets/UtilsIcons/calendar.svg'

  defineProps({
    employmentInformation: {
      type: Object,
      default: () => {}
    },
    isDividerVisible: {
      type: Boolean,
      default: false
    }
  })
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  line-height: 28px;
  letter-spacing: 1px;
  margin: 20px 0;

  &__title {
    font-size: 20px;
    margin-bottom: 4px;
  }

  &__company {
    display: flex;

    &__name {
      margin-right: 30px;
    }

    img {
      margin-right: 4px;
    }
  }

  &__employment {
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  &__employment-type {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
    border-radius: 20px;
    margin-bottom: 5px;

    p {
      padding: 3px 15px;
      color: white;
      font-size: 11px;
      line-height: 26px;
      letter-spacing: 0;
      font-weight: 600;
    }
  }

  &__employment-period {
    display: flex;

    img {
      margin-right: 4px;
    }
  }
}
.divider {
  border: 0;
  border-top: 2px solid #42446E;
  opacity: 0.3;
}

@media (max-width: 700px) {
  .card {
    display: flex;
    flex-direction: column;

    &__employment {
      align-items: center;
      flex-direction: column-reverse;
      margin-top: 10px;
    }

    &__employment-type {
      margin-top: 10px;
    }
  }
}
</style>