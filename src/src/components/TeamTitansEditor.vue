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
      <div class="col-5"></div>
      <div class="col-1"></div>
    </div>
    <!-- titans -->
    <div class="row no-wrap" v-for="(titan, index) in props.player.titans" :key="index">
      <div class="col-1">
        <q-avatar
          rounded
          style="margin-top: 4px"
        >
          <img
            :src="storeTitans.getIcon(titan.name)"
          >
        </q-avatar>
        
      </div>
      <div class="col-2">
        <q-select
          filled
          v-model="titan.name"
          :options="storeTitans.nameOptions"
          clearable
          label="Titan"
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
          v-model="titan.rank"
          :options="storeTitans.rankOptions"
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
          v-model="titan.star"
          :options="storeTitans.starOptions"
          clearable
          label="Star"
          emit-value
        >
        </q-select>
      </div>
      <div class="col-2">
        
      </div>
      <div class="col-2">
        <q-input color="accent" v-model="titan.power" label="Power">
          <template v-slot:prepend>
            <q-icon name="center_focus_strong" />
          </template>
        </q-input>
      </div>
      <div class="col-1">
        <!-- KEEP BLANK -->
      </div>
    </div>
    <!-- totem -->
    <div class="row no-wrap">
      <div class="col-1">
        <q-avatar
          rounded
          style="margin-top: 4px"
        >
          <img
            :src="storeTitans.getIcon(props.player.totem.name)"
          >
        </q-avatar>
        
      </div>
      <div class="col-2">
        <q-select
          filled
          v-model="props.player.totem.name"
          :options="storeTitans.totemOptions"
          clearable
          label="Totem"
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
          v-model="props.player.totem.rank"
          :options="storeTitans.rankOptions"
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
          v-model="props.player.totem.star"
          :options="storeTitans.starOptions"
          clearable
          label="Star"
          emit-value
        >
        </q-select>
      </div>
      <div class="col-2">

      </div>
      <div class="col-2">
        <q-input color="accent" v-model="props.player.totem.power" label="Power">
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
import { useTitansStore } from '@/stores/hero-wars'

const storeTitans = useTitansStore()

const props = defineProps({
  // player: {
  //   name: String,
  //   titans: {
  //     type: Array,
  //     default: [
  //       {}, {}, {}, {}, {}
  //     ],
  //   },
  //   totem: {
  //     type: Object,
  //     default: {},
  //   },
  //   power: Number,
  // },
  player: {
    type: Object,
    default: {
      name: '',
      power: undefined,
      titans: [
        {
          name: '',
          rank: 'white',
          star: 6,
          patron: '',
          power: undefined,
        },
        {
          name: '',
          rank: 'white',
          star: 6,
          patron: '',
          power: undefined,
        },
        {
          name: '',
          rank: 'white',
          star: 6,
          patron: '',
          power: undefined,
        },
        {
          name: '',
          rank: 'white',
          star: 6,
          patron: '',
          power: undefined,
        },
        {
          name: '',
          rank: 'white',
          star: 6,
          patron: '',
          power: undefined,
        },
      ],
      totem: {
        name: '',
        rank: 'super',
        star: 6,
        power: undefined,
      }
    },
  },
})

</script>
