<template>
  <div class="row team-titans">
    <div class="col-12" style="text-align: left; font-size: 1.6vw; margin-bottom: 2%">
      {{ props.player.name }} : {{ props.player.power }}
    </div>
    <div class="col-2" :class="props.orient === 'left' ? '' : 'order-last'" style="padding: 8px">
      <spot-titan
        :titan="props.player.totem"
      >
      </spot-titan>
    </div>
    <div class="col-2" v-for="(titan, index) in titansLineUp" :key=index>
      <spot-titan
        :titan="titan"
      >
      </spot-titan>
    </div>
  </div>
</template>

<script setup>
import SpotTitan from './SpotTitan.vue'

const props = defineProps({
  player: {
    name: String,
    titans: {
      type: Array,
      default: [
        {}, {}, {}, {}, {}
      ],
    },
    totem: {
      type: Object,
      default: {},
    },
    power: Number,
  },
  orient: String,
})

const titansLineUp = props.orient === 'left' ? [...props.player.titans].reverse() : [...props.player.titans]

</script>

<style lang="scss" scoped>
.team-titans {
  font-family: 'Fira Sans';
  text-align: center;
  max-width: 1536px;
  max-height: 1536px;
}
</style>
