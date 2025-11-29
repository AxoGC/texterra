import { defineStore } from 'pinia'
import scenes from './scenes';
import {ElMessage, ElNotification} from 'element-plus';
import achievements from './game/achievements';
import quests from './game/quests';
import i18n from './locale';
import items from './items';

export interface ItemInstance {
  id: string;
  count?: number;
}

export type Status = 'health' | 'satiety' | 'energy'
export type Attribute = 'strength' | 'agility' | 'appearance' | 'spirit' | 'alchemy' | 'agriculture'
const clamp = (v: number, min = 0, max = 100) => Math.min(max, Math.max(min, v));

const useStat = defineStore('stat', {
  state: () => ({
    scenes: ['Start'] as string[],
    items: [
      { id: "wooden_sword" },
      { id: "iron_sword" },
      { id: "small_health_potion", count: 3 },
      { id: "large_health_potion", count: 1 },
      { id: "leather_armor" },
      { id: "magic_amulet" },
      { id: "ancient_artifact" },
      { id: "coin", count: 150 },
      { id: "bread", count: 5 },
      { id: "energy_drink", count: 2 },
    ] as ItemInstance[],
    rawTime: 0,
    money: 1000,
    statuses: {
      health: 100,
      satiety: 100,
      energy: 100,
    } as Record<Status, number>,
    attributes: {
      strength: 0,
      agility: 0,
      appearance: 0,
      spirit: 0,
      alchemy: 0,
      agriculture: 0,
    } as Record<Attribute, number>,
    flags: {} as Record<string, any>,
    achievements: {} as Record<string, true>,
    questOrder: ['tutorial', 'mysterious_forest', 'daily_errands', 'master_alchemist'] as string[],
    quests: {
      "tutorial": ["start", "explore"],
      "mysterious_forest": ["enter_forest", "find_artifact"],
      "daily_errands": ["accept_chores", "gather_supplies", "report_gather"],
      "master_alchemist": [
        "begin_study", 
        "gather_ingredients", 
        "craft_basic", 
        "learn_advanced", 
        "gather_rare", 
        "craft_masterpiece", 
        "final_test", 
        "become_master"
      ],
    } as Record<string, string[]>,
  }),
  getters: {
    scene: state => state.scenes[state.scenes.length - 1] ?? '',
    time: state => {
      const totalMinutes = state.rawTime
      const totalHours = Math.floor(totalMinutes / 60)
      const totalDays = Math.floor(totalHours / 24)
      const totalMonths = Math.floor(totalDays / 30)
      return {
        raw: state.rawTime,
        year: Math.floor(totalMonths / 12) + 1,
        month: (totalMonths % 12) + 1,
        day: (totalDays % 30) + 1,
        weekday: (totalDays % 7) + 1,
        hour: totalHours % 24,
        minute: totalMinutes % 60,
      }
    },
    itemCapacity: state => 8 + Math.floor(state.attributes.strength / 10),
  },
  actions: {
    toScene(scene: string) {
      if (!scene || !scenes[scene]) {
        ElMessage.error(`Scene ${scene} not exist!`)
        return
      }
      if (this.scenes.length > 99) {
        this.scenes.splice(0, this.scenes.length-99)
      }
      this.scenes.push(scene)
    },
    backScene() {
      if (this.scenes.length < 2) {
        ElMessage.error('Scenes length too short!')
        return
      }
      this.scenes.pop()
    },
    addTime(duration: number) {
      return this.rawTime += duration
    },
    addMoney(amount: number): boolean {
      const result = this.money + amount
      if (result < 0) {
        ElMessage.warning(`Money not enough.`)
        return false
      }
      this.money = result
      return true
    },
    addStatuses(statuses: Record<Status, number>) {
      (Object.keys(statuses) as Status[]).forEach(status => {
        this.statuses[status] = clamp(this.statuses[status] + statuses[status])
      })
    },
    addAttributes(attributes: Record<Attribute, number>) {
      (Object.keys(attributes) as Attribute[]).forEach(attribute => {
        this.attributes[attribute] = clamp(this.attributes[attribute] + attributes[attribute])
      })
    },
    addItems(incoming: ItemInstance[]): boolean {
      for (const { id, count = 1 } of incoming) {
        if (!items[id]) {
          ElMessage.error(`Item ${id} not exist!`)
          return false
        }
        if (count <= 0) {
          ElMessage.error(`Item ${id} has invalid count: ${count}`)
          return false
        }
      }
      for (const { id, count = 1 } of incoming) {
        const tmpl = items[id]
        const maxStack = tmpl!.stack
        let remain = count
        if (maxStack) {
          for (const inst of this.items) {
            if (inst.id === id && inst.count! < maxStack && remain > 0) {
              const space = maxStack - inst.count!
              const add = Math.min(space, remain)
              inst.count! += add
              remain -= add
            }
          }
        }
        while (remain > 0) {
          if (maxStack) {
            const add = Math.min(maxStack, remain)
            this.items.push({ id, count: add })
            remain -= add
          } else {
            this.items.push({ id })
            remain = 0
          }
        }
      }
      return true
    },
    hasItems(check: ItemInstance[]): boolean {
      for (const { id, count = 1 } of check) {
        if (count <= 0) continue
        let owned = 0
        for (const inst of this.items) {
          if (inst.id === id) {
            owned += inst.count ?? 1
          }
        }
        if (owned < count) return false
      }
      return true
    },
    delItems(incoming: ItemInstance[]): boolean {
      if (!this.hasItems(incoming)) {
        ElMessage.warning(`Items not enough.`);
        return false;
      }
      for (const { id, count = 1 } of incoming) {
        let remove = count;
        const tmpl = items[id];
        const maxStack = tmpl?.stack ?? 1;
        for (let i = 0; i < this.items.length && remove > 0; i++) {
          const inst = this.items[i]!;
          if (inst.id !== id) continue;
          if (maxStack > 1) {
            const take = Math.min(inst.count!, remove);
            inst.count! -= take;
            remove -= take;
            if (inst.count! <= 0) {
              this.items.splice(i, 1);
              i--;
            }
          } else {
            this.items.splice(i, 1);
            remove -= 1;
            i--;
          }
        }
      }
      return true;
    },
    setFlags(flags: Record<string, any>) {
      Object.assign(this.flags, flags)
    },
    delFlags(keys: string[]) {
      keys.forEach(key => delete this.flags[key])
    },
    achieve(id: string) {
      const achievement = achievements.find(achievement => achievement.id === id)
      if (!achievement) {
        ElMessage.error(`Achievement ${id} not exist!`)
        return
      } 
      if (this.achievements[id]) {
        ElMessage.warning(`Achievement ${achievement.name} already achieved!`)
        return
      }
      ElNotification({ 
        title: achievement.name[i18n.global.locale], 
        message: achievement.description[i18n.global.locale],
      })
      this.achievements[id] = true
    },
    advanceQuest(questId: string, stepId: string) {
      const quest = quests[questId]
      if (!quest) {
        ElMessage.error(`Quest ${questId} not exist!`)
        return
      }
      const step = quest.steps[stepId]
      if (!step) {
        ElMessage.error(`Quest step ${stepId} not exist!`)
        return
      }
      this.quests[questId] ? this.quests[questId].push(stepId) : this.quests[questId] = [stepId]
      ElNotification({ title: quest.name[i18n.global.locale], message: step.name[i18n.global.locale] })
    },
  },
  persist: true,
})

export default useStat
