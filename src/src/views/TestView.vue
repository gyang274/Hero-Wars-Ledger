<template>
  <div>
  </div>
</template>

<script setup>
import { ref, provide, reactive } from 'vue'
import BattleHeroes from '@/components/BattleHeroes.vue'
import BattleTitans from '@/components/BattleTitans.vue'
import BattleLog from '@/components/BattleLog.vue'
import { useHeroesStore, usePetsStore, useTitansStore, useGuildWarStore } from '@/stores/hero-wars'

const storeHeroes = useHeroesStore()
const storePets = usePetsStore()
const storeTitans = useTitansStore()
const storeGuildWar = useGuildWarStore()

const guildWarBattleLog = reactive({
  guildAttack: '',
  guildAttackScore: 0,
  guildDefend: '',
  guildDefendScore: 0,
  battleLogs: [
    {
      attackerHeroes: JSON.parse(JSON.stringify(storeHeroes.playerDefault)),
      defenderHeroes: JSON.parse(JSON.stringify(storeHeroes.playerDefault)),
      attackerTitans: JSON.parse(JSON.stringify(storeTitans.playerDefault)),
      defenderTitans: JSON.parse(JSON.stringify(storeTitans.playerDefault)),
      score: 10,
      building: '',
      position: '',
    },
    {
      attackerHeroes: JSON.parse(JSON.stringify(storeHeroes.playerDefault)),
      defenderHeroes: JSON.parse(JSON.stringify(storeHeroes.playerDefault)),
      attackerTitans: JSON.parse(JSON.stringify(storeTitans.playerDefault)),
      defenderTitans: JSON.parse(JSON.stringify(storeTitans.playerDefault)),
      score: 5,
      building: '',
      position: '',
    },
  ],
})

provide('battleLogs', guildWarBattleLog.battleLogs)

</script>
