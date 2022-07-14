<script setup lang="ts">
import { RouteMap } from './routes'

const router = useRouter()

router.beforeEach(async (_to, _from, next) => {
  next()
})
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <router-view />
  </main>
</template>
