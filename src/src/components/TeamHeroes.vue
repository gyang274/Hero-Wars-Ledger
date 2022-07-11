<template>
  <div class="row team-heroes">
    <div class="col-12" style="text-align: left; font-size: 1.6vw; margin-bottom: 2%">
      {{ props.player.name }} : {{ props.player.power }}
    </div>
    <div class="col-2" :class="props.orient === 'left' ? '' : 'order-last'" style="padding: 8px">
      <spot-pet
        :pet="props.player.pet"
      >
      </spot-pet>
    </div>
    <div class="col-2" v-for="(hero, index) in heroesLineUp" :key=index>
      <spot-hero
        :hero="hero"
      >
      </spot-hero>
    </div>
  </div>
</template>

<script setup>
// import { computed } from 'vue'
import SpotHero from './SpotHero.vue'
import SpotPet from './SpotPet.vue'

const props = defineProps({
  player: {
    name: String,
    heroes: {
      type: Array,
      default: [
        {}, {}, {}, {}, {}
      ],
    },
    pet: {
      type: Object,
      default: {},
    },
    power: Number,
  },
  orient: String,
})

// const heroesLineUp = computed(() => {
//   props.orient === 'left' ? [...props.player.heroes].reverse() : [...props.player.heroes]
// })

const heroesLineUp = props.orient === 'left' ? [...props.player.heroes].reverse() : [...props.player.heroes]

</script>

<style lang="scss" scoped>
.team-heroes {
  font-family: 'Fira Sans';
  text-align: center;
  max-width: 1536px;
  max-height: 1536px;
}
</style>
