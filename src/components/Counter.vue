<script setup lang="ts">
const counter = useMyCounter()
</script>

<template>
  <div flex flex-col items-center>
    <h1>{{ counter.count }}</h1>
    <div flex flex-row text-2xl>
      <span hover:text-gray="500" cursor-pointer mx-2 i-carbon-add @click="counter.inc" />
      <span hover:text-gray="500" cursor-pointer mx-2 i-carbon-subtract @click="counter.dec" />
    </div>
  </div>
</template>
