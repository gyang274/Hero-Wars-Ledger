<template>
  <div>
    <h4>Guild War Log</h4>
    <div class="row no-wrap guild">
      <div class="col-1"></div>
      <div class="col-3">
        <q-input
          color="accent"
          input-class="text-right"
          label="Guild Attack"
          v-model="guildWarLog.guildAttack"
        >
          <template v-slot:prepend>
            <q-icon name="water_drop" />
          </template>
        </q-input>
      </div>
      <div class="col-1">
        <q-input
          color="accent"
          input-class="text-right"
          label="Guild Attack Score"
          v-model="guildWarLog.guildAttackScore"
        >
        </q-input>
      </div>
      <div class="col-2">
        VS
      </div>
      <div class="col-1">
        <q-input
          color="accent"
          label="Guild Attack Score"
          v-model="guildWarLog.guildDefendScore"
        >
        </q-input>
      </div>
      <div class="col-3">
        <q-input
          color="accent"
          label="Guild Defend"
          v-model="guildWarLog.guildDefend"
        >
          <template v-slot:append>
            <q-icon name="whatshot" />
          </template>
        </q-input>
      </div>
      <div class="col-1"></div>
    </div>
    <!-- add battle logs -->
    <div class="row q-pa-md q-gutter-sm">
      <!-- battleLogs -->
      <div v-for="(battleLog, index) in guildWarLog.battleLogs" :key="index">
        <battle-log
          :index="index"
        ></battle-log>
      </div>
      <!-- addBattleLog -->
      <div class="col-1"></div>
      <div class="col-10">
        <q-btn
          class="full-width"
          color="primary"
          label="Add Battle Log"
          @click="addBattleLog()"
        />
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script setup>
import { provide, reactive, ref } from 'vue'
import BattleLog from '@/components/BattleLog.vue'
import { useGuildWarStore } from '@/stores/hero-wars'

const storeGuildWar = useGuildWarStore()

const guildWarLog = reactive({
  guildAttack: '',
  guildAttackScore: 0,
  guildDefend: '',
  guildDefendScore: 0,
  battleLogs: [
    JSON.parse(JSON.stringify(storeGuildWar.battleLogDefault))
  ],
})

guildWarLog.battleLogs[0].building = 'Bridge'

const addBattleLog = () => {
  guildWarLog.battleLogs.push(
    JSON.parse(JSON.stringify(storeGuildWar.battleLogDefault))
  )
}

provide('battleLogs', guildWarLog.battleLogs)

</script>
