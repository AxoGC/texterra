<script setup lang="ts">
import useStat from '@/stat';
import {ArrowRight} from '@element-plus/icons-vue';
import {useI18n} from 'vue-i18n';

const s = useStat()

const { t } = useI18n({ messages: {
  zh: {
    more: '更多',
    quest: '任务',
    item: '物品',
    Attribute: '属性',
    Achievement: '成就',
    Save: '存档',
    Cheat: '作弊',
    Map: '地图',
    Setting: '设置',
    Donation: '捐款',
    Account: '账户',
    weekday1: '星期一',
    weekday2: '星期二',
    weekday3: '星期三',
    weekday4: '星期四',
    weekday5: '星期五',
    weekday6: '星期六',
    weekday7: '星期日',
  },
} })
</script>

<template>
  <div class="flex flex-col">

    <div class="px-4 py-2 flex flex-col gap-2">
      <div class="flex justify-between">
        <div>💰{{s.money}}</div>
        <div>⏰{{`${s.time.hour}:${s.time.minute}`}}</div>
        <div>📅{{` ${s.time.month}/${s.time.day}`}} {{t(`weekday${s.time.weekday}`)}}</div>
      </div>
      <div v-for="_, key in s.statuses" class="flex gap-2">
        <div>{{t(key)}}</div>
        <el-progress class="grow" :percentage="s.statuses[key]" text-inside :stroke-width="20" />
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
        <div v-for="_ in 8" class="bg-tertiary rounded-2xl aspect-square">
        </div>
      </div>
    </div>

    <div class="px-4 py-2 grid grid-cols-2 gap-2">
      <el-config-provider :button="{ text: false, round: true }">
        <el-button
          class="ml-0!"
          v-for="scene in ['Attribute', 'Achievement', 'Save', 'Cheat', 'Map', 'Setting', 'Donation', 'Account']"
          @click="s.toScene(scene)"
        >
          {{t(scene)}}
        </el-button>
      </el-config-provider>
    </div>

  </div>
</template>
