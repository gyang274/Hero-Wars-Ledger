import { defineStore } from 'pinia'



const playerHeroesDefault = {
  name: '',
  power: undefined,
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
  }
}

const playerTitansDefault = {
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
}

// storeHeroes
export const useHeroesStore = defineStore({
  id: 'heroes',
  state: () => ({
    names: [
      'alvanor',
      'amira',
      'andvari',
      'arachne',
      'artemis',
      'astaroth',
      'astrid and lucas',
      'auroa',
      'celeste',
      'chabba',
      'cleaver',
      'cornelius',
      'corvus',
      'dante',
      'daredevil',
      'dark star',
      'dorian',
      'elmir',
      'faceless',
      'fox',
      'galahad',
      'ginger',
      'heidi',
      'helios',
      'iris',
      'isaac',
      'ishmael',
      'jet',
      'jhu',
      'jorgen',
      'judge',
      'kai',
      'karkh',
      'keira',
      'krista',
      'lars',
      'lian',
      'lilith',
      'luther',
      'markus',
      'martha',
      'maya',
      'mojo',
      'morrigan',
      'nebula',
      'orion',
      'peppy',
      'phobos',
      'qing mao',
      'rufus',
      'satori',
      'sebastian',
      'thea',
      'tristan',
      'yasmine',
      'ziri',
    ],
    ranks: [
      'white',
      'green',
      'green+1',
      'blue',
      'blue+1',
      'blue+2',
      'violet',
      'violet+1',
      'violet+2',
      'violet+3',
      'orange',
      'orange+1',
      'orange+2',
      'orange+3',
      'orange+4',
      'red',
      'red+1',
      'red+2',
    ],
    stars: [
      6,5,4,3,2,1
    ],
    // define the attacker and defender
    playerDefault: JSON.parse(JSON.stringify(playerHeroesDefault)),
  }),
  getters: {
    nameOptions: (state) => {
      return state.names.map((name) => ({
        // label: name[0].toUpperCase() + name.substr(1),
        label: name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
        value: name, 
        // name: name[0].toUpperCase() + name.substr(1),
        name: name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
        icon: new URL(`../assets/icons/heroes/icons/${name}.png`, import.meta.url).href,
      }))
    },
    rankOptions: (state) => {
      return state.ranks.map((rank) => ({
        label: rank[0].toUpperCase() + rank.substr(1),
        value: rank,
        icon: new URL(`../assets/icons/heroes/ranks/${rank}.png`, import.meta.url).href,
      }))
    },
    starOptions: (state) => {
      return state.stars
    }
  },
  actions: {
    getIcon (name) {
      return new URL(`../assets/icons/heroes/icons/${name}.png`, import.meta.url).href
    },
    getRank (rank) {
      return new URL(`../assets/icons/heroes/ranks/${rank}.png`, import.meta.url).href
    },
  }
})


// storePets
export const usePetsStore = defineStore({
  id: 'pets',
  state: () => ({
    names: [
      'albus',
      'axel',
      'biscuit',
      'cain',
      'fenris',
      'mara',
      'merlin',
      'oliver',
    ],
    ranks: [
      'white',
      'green',
      'green+1',
      'blue',
      'blue+1',
      'blue+2',
      'violet',
      'violet+1',
      'violet+2',
      'violet+3',
    ],
    stars: [
      6,5,4,3,2,1
    ]
  }),
  getters: {
    nameOptions: (state) => {
      return state.names.map((name) => ({
        label: name[0].toUpperCase() + name.substr(1),
        value: name, 
        name: name[0].toUpperCase() + name.substr(1),
        icon: new URL(`../assets/icons/pets/icons/${name}.png`, import.meta.url).href,
      }))
    },
    rankOptions: (state) => {
      return state.ranks.map((rank) => ({
        label: rank[0].toUpperCase() + rank.substr(1),
        value: rank,
        icon: new URL(`../assets/icons/pets/ranks/${rank}.png`, import.meta.url).href,
      }))
    },
    starOptions: (state) => {
      return state.stars
    }
  },
  actions: {
    getIcon (name) {
      return new URL(`../assets/icons/pets/icons/${name}.png`, import.meta.url).href
    },
    getRank (rank) {
      return new URL(`../assets/icons/pets/ranks/${rank}.png`, import.meta.url).href
    },
  }
})


// storeTitans
export const useTitansStore = defineStore({
  id: 'titans',
  state: () => ({
    names: [
      // earth
      'angus',
      'avalon',
      'eden',
      'sylva',
      // fire
      'moloch',
      'vulcan',
      'araji',
      'ignis',
      // water
      'sigurd',
      'nova',
      'hyperion',
      'mairi',
    ],
    totems: [
      'earth',
      'fire',
      'water',
    ],
    ranks: [
      'white',
      'super',
    ],
    stars: [
      6,5,4,3,2,1
    ],
    playerDefault: JSON.parse(JSON.stringify(playerTitansDefault)),
  }),
  getters: {
    nameOptions: (state) => {
      return state.names.map((name) => ({
        label: name[0].toUpperCase() + name.substr(1),
        value: name, 
        name: name[0].toUpperCase() + name.substr(1),
        icon: new URL(`../assets/icons/titans/icons/${name}.png`, import.meta.url).href,
      }))
    },
    totemOptions: (state) => {
      return state.totems.map((totem) => ({
        label: totem[0].toUpperCase() + totem.substr(1),
        value: totem, 
        name: totem[0].toUpperCase() + totem.substr(1),
        icon: new URL(`../assets/icons/titans/icons/${totem}.png`, import.meta.url).href,
      }))
    },
    rankOptions: (state) => {
      return state.ranks.map((rank) => ({
        label: rank[0].toUpperCase() + rank.substr(1),
        value: rank,
        icon: new URL(`../assets/icons/titans/ranks/${rank}.png`, import.meta.url).href,
      }))
    },
    starOptions: (state) => {
      return state.stars
    }
  },
  actions: {
    getIcon (name) {
      return new URL(`../assets/icons/titans/icons/${name}.png`, import.meta.url).href
    },
    getRank (rank) {
      return new URL(`../assets/icons/titans/ranks/${rank}.png`, import.meta.url).href
    },
  }
})


// storeGuildWar
export const useGuildWarStore = defineStore({
  id: 'guild-war',
  state: () => ({
    buildings: {
      'Citadel': {
        type: 'heroes',
        spots: [1,2,3,4,5,6,7],
      },
      'Gate of Nature': {
        type: 'titans',
        spots: [1,2,3,4],
      },
      'Bastion of Ice': {
        type: 'titans',
        spots: [1,2,3,4],
      },
      'Bastion of Fire': {
        type: 'titans',
        spots: [1,2,3,4],
      },
      'Bridge': {
        type: 'titans',
        spots: [1,2,3,4],
      },
      'Spring of Elements': {
        type: 'titans',
        spots: [1,2,3,4],
      },
      'Foundry': {
        type: 'heroes',
        spots: [1,2,3,4],
      },
      'Lighthouse': {
        type: 'heroes',
        spots: [1,2,3],
      },
      'Mage Academy': {
        type: 'heroes',
        spots: [1,2,3],
      },
      'Barracks': {
        type: 'heroes',
        spots: [1,2,3],
      },
    },
    buildingOptions: [
      'Citadel',
      'Gate of Nature',
      'Bastion of Ice',
      'Bastion of Fire',
      'Bridge',
      'Spring of Elements',
      'Foundry',
      'Lighthouse',
      'Mage Academy',
      'Barracks',
    ],
    // NOTE copy from storeHeroes and storeTitans
    battleLogDefault: {
      attackerHeroes: JSON.parse(JSON.stringify(playerHeroesDefault)),
      defenderHeroes: JSON.parse(JSON.stringify(playerHeroesDefault)),
      attackerTitans: JSON.parse(JSON.stringify(playerTitansDefault)),
      defenderTitans: JSON.parse(JSON.stringify(playerTitansDefault)),
      score: 20,
      building: 'Bridge',
      position: '1',
    }
  }),
  getters: {

  },
  actions: {

  }
})

