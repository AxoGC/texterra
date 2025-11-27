<script setup lang="ts">
import useStat from '@/stat';
import {ArrowRight} from '@element-plus/icons-vue';
import {useI18n} from 'vue-i18n';

const s = useStat()

const { t } = useI18n({ messages: {
  zh: {
    satiety: '饱食',
    energy: '精力',
    quest: '任务',
    item: '物品',
    more: '更多',
    attribute: '属性',
    achievement: '成就',
    save: '存档',
    cheat: '作弊',
    setting: '设置',
  },
} })
</script>

<template>
  <div class="flex flex-col">

    <div class="px-4 py-2 flex flex-col gap-2">
      <div class="flex justify-between">
      </div>
      <div class="flex gap-2">
        <div>{{t('satiety')}}</div>
        <el-progress class="grow" :percentage="s.statuses.satiety" text-inside :stroke-width="20" />
      </div>
      <div class="flex gap-2">
        <div>{{t('energy')}}</div>
        <el-progress class="grow" :percentage="s.statuses.energy" text-inside :stroke-width="20" />
      </div>
    </div>

    <div class="px-4 py-2 flex flex-col gap-2">
      <div class="flex justify-between items-center">
        <div class="text-lg">{{t('quest')}}</div>
        <el-button :icon="ArrowRight" @click="s.toScene('Quest')">{{t('more')}}</el-button>
      </div>
    </div>

    <div class="px-4 py-2 flex flex-col gap-2">
      <div class="flex justify-between items-center">
        <div class="text-lg">{{t('item')}}</div>
        <el-button :icon="ArrowRight" @click="s.toScene('Item')">{{t('more')}}</el-button>
      </div>
      <div class="grid grid-cols-4 gap-2">
        <div v-for="_ in 8" class="bg-gray-100 dark:bg-gray-900 rounded-2xl aspect-square">
        </div>
      </div>
    </div>

    <div class="px-4 py-2 grid grid-cols-2 gap-2">
      <el-config-provider :button="{ text: false, round: true }">
        <el-button class="ml-0!" @click="s.toScene('Attribute')">{{t('attribute')}}</el-button>
        <el-button class="ml-0!" @click="s.toScene('Achievement')">{{t('achievement')}}</el-button>
        <el-button class="ml-0!" @click="s.toScene('Save')">{{t('save')}}</el-button>
        <el-button class="ml-0!" @click="s.toScene('Cheat')">{{t('cheat')}}</el-button>
        <el-button class="ml-0!" @click="s.toScene('Setting')">{{t('setting')}}</el-button>
      </el-config-provider>
    </div>

  </div>
</template>
