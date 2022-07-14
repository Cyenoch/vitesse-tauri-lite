<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div flex flex-col items-center>
    <h1>Hey!</h1>
    <p>counter已重置</p>
    <button @click="router.back">
      返回
    </button>
  </div>
</template>
