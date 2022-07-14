import useJsonStorage from './useJsonStorage'
import { RouteMap } from '~/routes'

export default defineStore('counter', () => {
  const router = useRouter()
  const count = useJsonStorage<number>('count', 0)

  watch(count, () => {
    console.log('count changed', count.value)
    if (count.value > 10) {
      router.push({ name: RouteMap.hey })
      count.value = 0
    }
  })
  return {
    count,
    inc() {
      count.value!++
    },
    dec() {
      count.value!--
    },
  }
})
