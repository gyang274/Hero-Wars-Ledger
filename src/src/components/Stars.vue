<template>
  <div style="width: 100%">
    <div v-if="n <= 5">
      <img v-for="i in n" :key="i"
        src="@/assets/icons/stars/star.png"
        style="width: 20%; height: 20%;"
      >
    </div>
    <div v-else>
      <img
        src="@/assets/icons/stars/star-absolute.png"
        style="width: 60%; height: 60%;"
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({n: Number})
</script>
