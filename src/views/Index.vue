<script lang="ts" setup>
const toggle = () => toggleDark()
</script>

<template>
  <div>
    <Counter />
    <h3 text-gray>
      持久化counter
    </h3>

    <button icon-btn @click="toggle">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>
  </div>
</template>
