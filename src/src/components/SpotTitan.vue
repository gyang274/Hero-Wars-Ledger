<template>
  <div class="spot-titan">
    <q-avatar
      rounded
      class="titan-spot"
    >
      <img v-if="props.titan.name"
        :src="storeTitans.getIcon(props.titan.name)"
        class="titan-icon"
        style="width: 90%; height: 90%; border-radius: 32%;"
      >
      <img
        class="titan-rank"
        :src="(props.titan.name && props.titan.rank) ? storeTitans.getRank(props.titan.rank) : storeTitans.getRank('white') "
        style="width: 120%; height: 120%;"
      >
      <stars
        class="titan-star"
        :n="(props.titan.name && props.titan.star) ? props.titan.star : 0"
      ></stars>
    </q-avatar>
    <h4 v-if="props.titan"
      class="power"
    >
      {{ props.titan.power }}
    </h4>
  </div>
</template>

<script setup>
import Stars from './Stars.vue'
import { useTitansStore } from '@/stores/hero-wars'

const props = defineProps({
  // titan: {
  //   name: String,
  //   rank: String,
  //   star: Number,
  //   power: Number,
  // },
  titan: {
    type: Object,
    default: {},
  }
})

const storeTitans = useTitansStore()

</script>

<style lang="scss" scoped>

.spot-titan {

  font-family: 'Fira Sans';
  text-align: center;
  max-width: 256px;
  max-height: 256px;

  .titan-spot {
    border-style: v-bind('props.titan ? "none": "solid"');
    border-color: gray;
    width: 100%;
    height: 100%;
  }

  .titan-icon {
    position: absolute;
    z-index: -2;
  }

  .titan-rank {
    z-index: -1;
  }

  .titan-star {
    position: absolute;
    margin-top: 75%; 
  }

  .power {
    font-size: 1.4vw;
    font-family: 'Fira Sans';
  }

}
</style>