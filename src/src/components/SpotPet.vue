<template>
  <div class="spot-pet">
    <q-avatar
      rounded
      class="pet-spot"
    >
      <img v-if="props.pet.name"
        :src="storePets.getIcon(props.pet.name)"
        class="pet-icon"
        style="width: 90%; height: 90%; border-radius: 32%;"
      >
      <img 
        class="pet-rank"
        :src="(props.pet.name && props.pet.rank) ? storePets.getRank(props.pet.rank) : storePets.getRank('white') "
        style="width: 120%; height: 120%;"
      >
      <stars
        class="pet-star"
        :n="(props.pet.name && props.pet.star) ? props.pet.star : 0"
      ></stars>
    </q-avatar>
    <div v-if="props.pet"
      class="power"
    >
      {{ props.pet.power }}
    </div>
  </div>
</template>

<script setup>
import Stars from './Stars.vue'
import { usePetsStore } from '@/stores/hero-wars'

const props = defineProps({
  // pet: {
  //   name: String,
  //   rank: String,
  //   star: Number,
  //   power: Number,
  // },
  pet: {
    type: Object,
    default: {},
  }
})

const storePets = usePetsStore()

</script>

<style lang="scss" scoped>

.spot-pet {

  font-family: 'Fira Sans';
  text-align: center;
  max-width: 256px;
  max-height: 256px;

  .pet-spot {
    border-style: v-bind('props.pet ? "none": "solid"');
    border-color: gray;
    width: 100%;
    height: 100%;
  }

  .pet-icon {
    position: absolute;
    z-index: -2;
  }

  .pet-rank {
    z-index: -1;
  }

  .pet-star {
    position: absolute;
    margin-top: 75%;
  }

  .power {
    font-size: 2vw;
    font-family: 'Fira Sans';
  }

}
</style>