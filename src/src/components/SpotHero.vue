<template>
  <div class="spot-hero">
    <q-avatar
      rounded
      class="hero-spot"
    >
      <img v-if="props.hero.name"
        :src="storeHeroes.getIcon(props.hero.name)"
        class="hero-icon"
        style="width: 85%; height: 85%;"
      >
      <img
        class="hero-rank"
        :src="(props.hero.name && props.hero.rank) ? storeHeroes.getRank(props.hero.rank) : storeHeroes.getRank('white')"
      >
      <stars
        class="hero-star"
        :n="(props.hero.name && props.hero.star) ? props.hero.star : 0"
      ></stars>
      <q-avatar
        v-if="props.hero.patron"
        rounded
        class="absolute-top-left pet-spot"
      >
        <img v-if="props.hero.patron"
          class="pet-icon"
          :src="storePets.getIcon(props.hero.patron)"
          style="width: 90%; height: 90%;"
        >
        <img v-if="props.hero.patron"
          class="pet-rank"
          :src="storePets.getRank('white')"
          style="width: 100%; height: 100%;"
        >
      </q-avatar>
    </q-avatar>
    <div v-if="props.hero"
      class="power"
    >
      {{ props.hero.power }}
    </div>
  </div>
</template>

<script setup>
import Stars from './Stars.vue'
import { useHeroesStore, usePetsStore } from '@/stores/hero-wars'

const props = defineProps({
  // hero: {
  //   name: String,
  //   rank: String,
  //   star: Number,
  //   patron: String,
  //   power: Number,
  // },
  hero: {
    type: Object,
    default: {},
  }
})

const storeHeroes = useHeroesStore()

const storePets = usePetsStore()

</script>

<style lang="scss" scoped>

.spot-hero {

  font-family: 'Fira Sans';
  text-align: center;
  max-width: 256px;
  max-height: 256px;
  
  .hero-spot {
    // border-style: v-bind('props.hero ? "none": "solid"');
    // border-color: gray;
    width: 100%;
    height: 100%;
  }

  .hero-icon {
    position: absolute;
    z-index: -2;
  }

  .hero-rank {
    z-index: -1;
  }

  .hero-star {
    position: absolute;
    margin-top: 75%;
  }

  .pet-spot {
    width: 50%;
    height: 50%;
    margin-top: -5%;
    margin-left: -5%;
    border-radius: 32%;
  }

  .pet-icon {
    position: absolute;
    z-index: 1;
  }
  
  .pet-rank {
    position: absolute;
    z-index: 2;
  }

  .power {
    font-size: 2vw;
    font-family: 'Fira Sans';
  }

}
</style>