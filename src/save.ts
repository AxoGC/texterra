import {defineStore} from "pinia";
import { v4 as uuidv4 } from "uuid";
import {ElMessage} from "element-plus";

export interface Save {
  id: string;
  name: string;
  updatedAt: string;
}

const useSave = defineStore('save', {
  state: () => ({
    saves: [] as Save[],
  }),
  persist: true,
  actions: {
    create(name: string) {
      const data = localStorage.getItem('stat')
      if (!data) { return }
      const id = `save-${uuidv4()}`
      localStorage.setItem(id, data)
      this.saves.unshift({ id, name, updatedAt: (new Date).toISOString() })
      ElMessage.success('Created successfully!')
    },
    cover(id: string) {
      const save = this.saves.find(save => save.id === id)
      if (!save) { return }
      const data = localStorage.getItem('stat')
      if (!data) { return }
      localStorage.setItem(id, data)
      save.updatedAt = (new Date).toISOString()
      ElMessage.success('Covered successfully!')
    },
    load(id: string) {
      if (!this.saves.some(save => save.id === id)) { return }
      const data = localStorage.getItem(id)
      if (!data) { return }
      localStorage.setItem('stat', data)
      useSave().$hydrate()
      ElMessage.success('Loaded successfully!')
    },
    delete(id: string) {
      const index = this.saves.findIndex(save => save.id === id)
      if (index === -1) { return }
      this.saves.splice(index, 1)
      localStorage.removeItem(id)
      ElMessage.success('Deleted successfully!')
    }
  },
})

export default useSave
