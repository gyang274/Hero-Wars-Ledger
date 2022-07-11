<template>
  <div class="row battle-log">
    <!-- battle -->
    <div class="col-3" style="padding-left: 32px;">      
      <q-select
        dense
        v-model="battleLog.building"
        :options="storeGuildWar.buildingOptions"
        label="Building"
        emit-value
      >
      </q-select>
    </div>
    <div class="col-2" style="padding-left: 32px;">   
      <q-select
        dense
        v-model="battleLog.position"
        :options="battleLog.building == '' ? [] : storeGuildWar.buildings[battleLog.building]['spots']"
        label="Position"
        emit-value
      >
      </q-select>
    </div>
    <div class="col-7"></div>
    <div class="col-12">
      <battle-heroes
        v-if="battleLog.building == '' ? false : storeGuildWar.buildings[battleLog.building]['type'] == 'heroes'"
        :index="index"
      >
      </battle-heroes>
      <battle-titans 
        v-if="battleLog.building == '' ? false : storeGuildWar.buildings[battleLog.building]['type'] == 'titans'"
        :index="index"
      >
      </battle-titans>
    </div>
    
  </div>
</template>

<script setup>
// import vue
import { inject } from 'vue'

// import components
import BattleHeroes from './BattleHeroes.vue'
import BattleTitans from './BattleTitans.vue'

// import and init stores
import { useGuildWarStore } from '@/stores/hero-wars'
const storeGuildWar = useGuildWarStore()

// define props
const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
})

// inject reactives
const battleLogs = inject('battleLogs')
const battleLog = battleLogs[props.index]

console.log(props.index)

</script>