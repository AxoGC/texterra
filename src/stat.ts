import { defineStore } from 'pinia'
import scenes from './scenes';
import {ElMessage, ElNotification} from 'element-plus';
import achievements from './game/achievements';
import quests from './game/quests';
import i18n from './locale';

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
    items: [] as ItemInstance[],
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
      if (scene && scenes[scene]) {
        if (this.scenes.length > 99) {
          this.scenes.splice(0, this.scenes.length-99)
        }
        this.scenes.push(scene)
      } else {
        ElMessage.error(`Scene ${scene} not exist!`)
      }
    },
    backScene() {
      if (this.scenes.length > 1) {
        this.scenes.pop()
      } else {
        ElMessage.error('Scenes length too short!')
      }
    },
    addTime(duration: number) {
      return this.rawTime += duration
    },
    addMoney(amount: number): boolean {
      const result = this.money + amount
      if (result < 0) {
        ElMessage.warning(`Money not enough.`)
        return false
      } else {
        this.money = result
        return true
      }
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
    addItems(items: ItemInstance[]): boolean { return Boolean(items) }, // TODO
    delItems(items: ItemInstance[]): boolean { return Boolean(items) }, // TODO
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
      } else if (!this.achievements[id]) {
        ElNotification({ 
          title: achievement.name[i18n.global.locale], 
          message: achievement.description[i18n.global.locale],
        })
        this.achievements[id] = true
      }
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
