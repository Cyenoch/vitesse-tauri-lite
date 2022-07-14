import type { MaybeRef, StorageLike, StorageOptions } from '@vueuse/core'

export default <T>(key: string, initialValue: MaybeRef<T>, storage: StorageLike = localStorage, options?: StorageOptions<T>) => {
  return useStorage<T>(key, initialValue, storage, {
    ...(options ?? {}),
    serializer: {
      read: (value: string) => JSON.parse(value),
      write: (value: T) => JSON.stringify(value),
    },
  })
}
