<template>
  <div class="row battle-titans">
    <!-- battle -->
    <div class="col-5" style="padding-left: 32px"> 
      <team-titans
        :player="attacker"
        orient="left"
      >
      </team-titans>
    </div>
    <div class="col-1 score">
      <q-input
        color="accent"
        label="Score"
        v-model="battleLogs[props.index]['score']"
        style="font-size: 2vw;"
      >
        <template v-slot:prepend>
          <q-icon color="accent" name="bolt" />
        </template>
      </q-input> / 20 
    </div>
    <div class="col-5" style="padding-right: 32px">
      <team-titans
        :player="defender"
        orient="right"
      >
      </team-titans>
    </div>
    <div class="col-1 edit-btn">
      <q-btn
        size="xl"
        color="secondary"
        icon="edit_note"
        label="Edit"
        @click="showEditor = !showEditor"
      >
      </q-btn>
    </div>
    <!-- editor -->
    <template v-if="showEditor">
      <q-card class="editor">
        <div class="row">
          <!-- attacker -->
          <div class="col-6">
            <team-titans-editor
              :player="attacker"
            >
            </team-titans-editor>
          </div>
          <!-- defender -->
          <div class="col-6">
            <team-titans-editor
              :player="defender"
            >
            </team-titans-editor>
          </div>
      </div>
      </q-card>
    </template>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import TeamTitans from './TeamTitans.vue'
import TeamTitansEditor from './TeamTitansEditor.vue'
// import { useTitansStore, useGuildWarStore } from '@/stores/hero-wars'

// const storeTitans = useTitansStore()
// const storeGuildWar = useGuildWarStore()

// // define props
// //  TODO: copy playerDefault from stores
// const props = defineProps({
//   attacker: {
//     type: Object,
//     default: {},
//   },
//   defender: {
//     type: Object,
//     default: {},
//   },
//   locals: {
//     type: Object,
//     default: {
//       score: 0,
//       building: '',
//       position: '',
//     }
//   }
// })

// const attacker = ref(JSON.parse(JSON.stringify(storeTitans.playerDefault)))
// const defender = ref(JSON.parse(JSON.stringify(storeTitans.playerDefault)))
// const locals = ref({
//   score: 0,
//   building: '',
//   position: '',
// })

// define props
const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
})

const battleLogs = inject('battleLogs')
const attacker = battleLogs[props.index]['attackerTitans']
const defender = battleLogs[props.index]['defenderTitans']

const showEditor = ref(false)

</script>

<style lang="scss" scoped>

.battle-titans {

  font-family: 'Fira Sans';
  text-align: center;

  .score {
    font-size: 2vw;
    vertical-align: middle;
    padding-top:4%;
    padding-left: 2%;
    padding-right: 2%;
  }

  .edit-btn {
    vertical-align: middle;
    padding-top: 5%;
    padding-right: 10px;
  }

  .editor {
    width: 100%;
    margin: 10px;
  }

}
</style>