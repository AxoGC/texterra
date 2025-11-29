<script setup lang="ts">
import quests from '@/game/quests';
import useStat from '@/stat';
import {ArrowRight} from '@element-plus/icons-vue';
import type {EChartsOption} from 'echarts';
import {GeoComponent, TooltipComponent, VisualMapComponent} from 'echarts/components';
import {registerMap, use} from 'echarts/core';
import {computed, ref} from 'vue';
import {useI18n} from 'vue-i18n';
import VChart from 'vue-echarts';
import {CanvasRenderer} from 'echarts/renderers';
import gamemap from '@/gamemap.json';
import {ScatterChart} from 'echarts/charts';
import items from '@/items';

use([
  ScatterChart,
  TooltipComponent,
  GeoComponent,
  VisualMapComponent,
  CanvasRenderer,
])

const s = useStat()

const { t } = useI18n({ messages: {
  zh: {
    more: '更多',
    quest: '任务',
    item: '物品',
    About: '关于',
    Attribute: '属性',
    Achievement: '成就',
    Save: '存档',
    Cheat: '作弊',
    Map: '地图',
    Setting: '设置',
    Community: '社区',
    weekday1: '星期一',
    weekday2: '星期二',
    weekday3: '星期三',
    weekday4: '星期四',
    weekday5: '星期五',
    weekday6: '星期六',
    weekday7: '星期日',
    ad: '广告',
  },
} })

const option = ref<EChartsOption>({
  geo: {
    map: 'gamemap',
    roam: true,
    label: {
      show: true,
      color: '#555'
    }
  },
  tooltip: {},
})

registerMap('gamemap', gamemap as any)

const curQuest = computed(() => {
  const curQuestId = s.questOrder[0]
  if (!curQuestId) { return undefined }
  return quests[curQuestId]
})

const curQuestStep = computed(() => {
  const curQuestId = s.questOrder[0]
  if (!curQuestId) { return undefined }
  const curQuest = quests[curQuestId]
  if (!curQuest) { return undefined }
  const curStepIds = s.quests[curQuestId]
  if (!curStepIds) { return undefined }
  const curStepId = curStepIds[curStepIds.length - 1]
  if (!curStepId) { return undefined }
  return curQuest.steps[curStepId]
})

</script>

<template>
  <div class="min-h-full flex flex-col">

    <v-chart class="aspect-video" :option="option" autoresize />
    <div class="h-px bg-tertiary" />

    <div class="px-4 py-2 flex flex-col gap-2">
      <div class="flex justify-between text-sm">
        <div>💰{{s.money}}</div>
        <div>⏰{{`${s.time.hour}:${s.time.minute}`}}</div>
        <div>📅{{` ${s.time.month}/${s.time.day}`}} {{t(`weekday${s.time.weekday}`)}}</div>
      </div>
      <div v-for="_, key in s.statuses" class="flex gap-2 text-sm">
        <div>{{t(key)}}</div>
        <el-progress class="grow" :percentage="s.statuses[key]" text-inside :stroke-width="20" />
      </div>
    </div>

    <div class="px-4 py-2 flex flex-col gap-2">
      <div class="flex justify-between items-center">
        <div>{{t('quest')}}</div>
        <el-button :icon="ArrowRight" @click="s.toScene('Quest')">{{t('more')}}</el-button>
      </div>
      <div v-if="curQuest && curQuestStep" class="bg-main rounded-2xl p-2">
        <div class="text-sm truncate">
          {{curQuestStep.name[$i18n.locale]}} | {{curQuest.name[$i18n.locale]}}
        </div>
        <div class="text-sm text-subtle truncate">
          {{curQuestStep.description[$i18n.locale]}}
        </div>
      </div>
    </div>

    <div class="px-4 py-2 flex flex-col gap-2">
      <div class="flex justify-between items-center">
        <div>{{t('item')}}</div>
        <el-button :icon="ArrowRight" @click="s.toScene('Item')">{{t('more')}}</el-button>
      </div>
      <div class="grid grid-cols-4 gap-2">
        <div 
          v-for="item in s.items.slice(0, 8)" 
          class="bg-tertiary rounded-2xl aspect-square relative flex justify-center items-center"
        >
          <div class="text-3xl">{{items[item.id]?.icon}}</div>
          <div class="absolute right-1 bottom-0.5 text-sm">{{item.count}}</div>
        </div>
      </div>
    </div>

    <div class="px-4 py-2 grid grid-cols-2 gap-2">
      <el-config-provider :button="{ text: false, round: true }">
        <el-button
          class="ml-0!"
          v-for="scene in ['Map', 'Attribute', 'Achievement', 'Cheat', 'Save', 'Setting', 'About', 'Community']"
          @click="s.toScene(scene)"
        >
          {{t(scene)}}
        </el-button>
      </el-config-provider>
    </div>

  </div>
</template>
