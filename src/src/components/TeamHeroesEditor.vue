<template>
  <div>
    <div class="row no-wrap">
      <div class="col-3" style="padding-left: 10px;">
        <q-input color="accent" v-model="props.player.name" label="Name">
          <template v-slot:prepend>
            <q-icon color="accent" name="whatshot" />
          </template>
        </q-input>
      </div>
      <div class="col-3" style="padding-left: 10px;">
        <q-input color="accent" v-model="props.player.power" label="Team Power">
          <template v-slot:prepend>
            <q-icon color="accent" name="bolt" />
          </template>
        </q-input>
      </div>
      <!-- <template v-if="props.orient == 'left'">
        <div class="col-2"></div>
        <div class="col-3" style="padding-left: 10px;">
          <q-input color="accent" v-model="locals.score" label="Score">
            <template v-slot:prepend>
              <q-icon color="accent" name="bolt" />
            </template>
          </q-input>
        </div>
      </template>
      <template v-else>
        <div class="col-2">
          select building
        </div>
        <div class="col-3" style="padding-left: 10px;">
          select location
        </div>
      </template> -->
      <div class="col-5"></div>
      <div class="col-1"></div>
    </div>
    <!-- heroes -->
    <div class="row no-wrap" v-for="(hero, index) in props.player.heroes" :key="index">
      <div class="col-1">
        <q-avatar
          rounded
          style="margin-top: 4px"
        >
          <img
            :src="storeHeroes.getIcon(hero.name)"
          >
        </q-avatar>
        
      </div>
      <div class="col-2">
        <q-select
          filled
          v-model="hero.name"
          :options="storeHeroes.nameOptions"
          clearable
          label="Hero"
          emit-value
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section avatar>
                <img :src="scope.opt.icon" size="10px">
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ scope.opt.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
      <div class="col-2">
        <q-select
          filled
          v-model="hero.rank"
          :options="storeHeroes.rankOptions"
          clearable
          label="Rank"
          emit-value
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section avatar>
                <img :src="scope.opt.icon" size="10px">
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ scope.opt.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
      <div class="col-2">
        <q-select
          filled
          v-model="hero.star"
          :options="storeHeroes.starOptions"
          clearable
          label="Star"
          emit-value
        >
        </q-select>
      </div>
      <div class="col-2">
        <q-select
          filled
          v-model="hero.patron"
          :options="storePets.nameOptions"
          clearable
          label="Patron"
          emit-value
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section avatar>
                <img :src="scope.opt.icon" size="10px">
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ scope.opt.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
      <div class="col-2">
        <q-input color="accent" v-model="hero.power" label="Power">
          <template v-slot:prepend>
            <q-icon name="center_focus_strong" />
          </template>
        </q-input>
      </div>
      <div class="col-1">
        <!-- KEEP BLANK -->
      </div>
    </div>
    <!-- pet -->
    <div class="row no-wrap">
      <div class="col-1">
        <q-avatar
          rounded
          style="margin-top: 4px"
        >
          <img
            :src="storePets.getIcon(props.player.pet.name)"
          >
        </q-avatar>
        
      </div>
      <div class="col-2">
        <q-select
          filled
          v-model="props.player.pet.name"
          :options="storePets.nameOptions"
          clearable
          label="Pet"
          emit-value
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section avatar>
                <img :src="scope.opt.icon" size="10px">
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ scope.opt.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
      <div class="col-2">
        <q-select
          filled
          v-model="props.player.pet.rank"
          :options="storePets.rankOptions"
          clearable
          label="Rank"
          emit-value
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section avatar>
                <img :src="scope.opt.icon" size="10px">
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ scope.opt.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
      <div class="col-2">
        <q-select
          filled
          v-model="props.player.pet.star"
          :options="storePets.starOptions"
          clearable
          label="Star"
          emit-value
        >
        </q-select>
      </div>
      <div class="col-2">

      </div>
      <div class="col-2">
        <q-input color="accent" v-model="props.player.pet.power" label="Power">
          <template v-slot:prepend>
            <q-icon name="center_focus_strong" />
          </template>
        </q-input>
      </div>
      <div class="col-1">
        <!-- KEEP BLANK -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { useHeroesStore, usePetsStore } from '@/stores/hero-wars'

const storeHeroes = useHeroesStore()
const storePets = usePetsStore()

// define props
//  NOTE: use object to keep (mis-use) the reactivity in nested
const props = defineProps({
  // player: {
  //   name: String,
  //   heroes: {
  //     type: Array,
  //     default: [
  //       {}, {}, {}, {}, {}
  //     ],
  //   },
  //   pet: {
  //     type: Object,
  //     default: {},
  //   },
  //   power: Number,
  // },
  player: {
    type: Object,
    default: {
      name: '',
      heroes: [
        {
          name: '',
          rank: 'red+2',
          star: 6,
          patron: '',
          power: undefined,
        },
        {
          name: '',
          rank: 'red+2',
          star: 6,
          patron: '',
          power: undefined,
        },
        {
          name: '',
          rank: 'red+2',
          star: 6,
          patron: '',
          power: undefined,
        },
        {
          name: '',
          rank: 'red+2',
          star: 6,
          patron: '',
          power: undefined,
        },
        {
          name: '',
          rank: 'red+2',
          star: 6,
          patron: '',
          power: undefined,
        },
      ],
      pet: {
        name: '',
        rank: 'violet+3',
        star: 6,
        power: undefined,
      },
      power: undefined,
    },
  },
  // locals: {
  //   score: Number,
  //   building: String,
  //   position: Number,
  // },
  // orient: {
  //   type: String,
  //   default: 'left',
  // }
})

// const locals = inject('locals')

</script>
