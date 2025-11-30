<script setup lang="ts">
import achievements from '@/game/achievements';
import useStat from '@/stat';
import {ArrowLeft} from '@element-plus/icons-vue';
import {computed, ref} from 'vue';
import {useI18n} from 'vue-i18n';

const s = useStat()

const { t } = useI18n({
  messages: {
    zh: {
      title: '成就列表',
      achieved: '已达成',
      all: '全部',

      common: '普通',
      rare: '稀有',
      epic: '传奇',

      agriculture: '农业',
      alchemy: '炼金',
      combat: '战斗',
      exploration: '探险',
      achievement: '成就',
      collection: '收集',
    },
  }
})

const rarityThemeMap = {
  common: 'success',
  rare: 'primary',
  epic: 'warning',
}
const categoryThemeMap = {
  agriculture: 'success',
  alchemy: 'warning',
  combat: 'danger',
  exploration: 'primary',
  achievement: 'info',
  collection: 'default',
}

const status = ref('all') 
const rarities = ['all', 'common', 'rare', 'epic']
const rarity = ref('all')
const categories = ['all', 'agriculture', 'alchemy', 'combat', 'exploration', 'achievement', 'collection']
const category = ref('all')

const filteredAchievements = computed(() => {
  let filtered = achievements
  if (rarity.value !== 'all') {
    filtered = filtered.filter(a => a.rarity === rarity.value)
  }
  if (category.value !== 'all') {
    filtered = filtered.filter(a => a.category === category.value)
  }
  if (status.value !== 'all') {
    filtered = filtered.filter(a => s.achievements[a.id])
  }
  return filtered
})
</script>

<template>
  <div class="p-4 flex flex-col gap-4">
    
    <div class="card flex items-center gap-4">
      <el-button @click="s.backScene" :icon="ArrowLeft">
        {{t('back')}}
      </el-button>
      <div class="text-lg">{{t('title')}}</div>
    </div>
    
    <div class="flex items-center gap-4 flex-wrap">
      <el-segmented v-model="status" :options="['all', 'achieved']">
        <template #default="{ item }">
          {{t(item)}}
        </template>
      </el-segmented>
      <el-segmented v-model="rarity" :options="rarities">
        <template #default="{ item }">
          {{t(item)}}
        </template>
      </el-segmented>
      <el-segmented v-model="category" :options="categories">
        <template #default="{ item }">
          {{t(item)}}
        </template>
      </el-segmented>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="a in filteredAchievements" :key="a.id" class="flex gap-4">
        <div :class="[
          'aspect-square rounded-2xl p-3 bg-subtle text-3xl flex justify-center items-center', 
          s.achievements[a.id] ? '': 'grayscale',
        ]">
          {{a.icon}}
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex gap-2">
            <div>{{a.name[$i18n.locale]}}</div>
            <el-tag :type="rarityThemeMap[a.rarity] as any">
              {{t(a.rarity)}}
            </el-tag>
            <el-tag :type="categoryThemeMap[a.category] as any">
              {{t(a.category)}}
            </el-tag>
          </div>
          <div class="text-sm text-subtle">{{a.description[$i18n.locale]}}</div>
        </div>
      </div>
    </div>

  </div>
</template>
