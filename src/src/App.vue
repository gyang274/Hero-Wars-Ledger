<template>
  <div class="app">
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" icon="home" to="/"></q-breadcrumbs-el>
        <q-breadcrumbs-el label="About" icon="widgets" to="/about"></q-breadcrumbs-el>
        <!-- <q-breadcrumbs-el label="Test" icon="widgets" to="/test"></q-breadcrumbs-el> -->
      </q-breadcrumbs>
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
.app {
  font-family: 'Fira Sans';
  text-align: center;
}
</style>
